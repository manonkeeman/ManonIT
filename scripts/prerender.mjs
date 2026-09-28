// Prerendering na `vite build`.
//
// De site is een React-app: zonder JavaScript is elke pagina leeg. AI-crawlers
// (GPTBot, ClaudeBot, PerplexityBot) voeren geen JavaScript uit en Google doet
// het pas later. Dit script opent elke URL uit de sitemap in headless Chrome en
// slaat de volledig gerenderde HTML op als dist/<pad>/index.html. Netlify serveert
// die bestanden direct; in de browser neemt React het daarna gewoon over.
//
// Gaat er iets mis (bijv. Chrome start niet op de buildserver), dan faalt de
// build niet: de site werkt dan zoals voorheen, alleen zonder prerendering.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir, copyFile, stat } from "node:fs/promises";
import { join, extname } from "node:path";

const DIST = new URL("../dist/", import.meta.url).pathname;
const SITE = "https://manonit.com";

const MIME = {
    ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
    ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif",
    ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff", ".xml": "application/xml",
    ".txt": "text/plain",
};

// Statische server op dist/ met SPA-fallback naar de onbewerkte app-shell.
function serve(shell) {
    return createServer(async (req, res) => {
        const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
        try {
            const file = join(DIST, path);
            if ((await stat(file)).isFile()) {
                res.writeHead(200, { "Content-Type": MIME[extname(file)] || "application/octet-stream" });
                return res.end(await readFile(file));
            }
        } catch { /* valt terug op de app-shell */ }
        res.writeHead(200, { "Content-Type": MIME[".html"] });
        res.end(shell);
    });
}

async function routesFromSitemap() {
    const xml = await readFile(join(DIST, "sitemap.xml"), "utf8");
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITE, "") || "/");
}

async function main() {
    // De onbewerkte shell blijft altijd beschikbaar als fallback voor routes die
    // niet geprerenderd zijn (netlify.toml verwijst naar /app.html).
    const shell = await readFile(join(DIST, "index.html"), "utf8");
    await copyFile(join(DIST, "index.html"), join(DIST, "app.html"));

    let puppeteer;
    try {
        puppeteer = (await import("puppeteer")).default;
    } catch {
        console.warn("[prerender] puppeteer niet beschikbaar, overgeslagen");
        return;
    }

    const routes = await routesFromSitemap();
    const server = serve(shell).listen(0);
    const port = server.address().port;
    const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });

    let ok = 0;
    const render = async (route) => {
        try {
            const page = await browser.newPage();
            // Geen cookiebanner en geen Google Analytics in de opgeslagen HTML
            await page.evaluateOnNewDocument(() => {
                try { localStorage.setItem("cookie-consent", "denied"); } catch { /* */ }
            });
            await page.goto(`http://localhost:${port}${route}`, { waitUntil: "networkidle0", timeout: 30000 });
            // wacht tot de pagina zijn eigen titel heeft gezet en lazy secties staan
            await new Promise((r) => setTimeout(r, 400));
            const html = await page.evaluate(() => {
                document.getElementById("app-shell")?.remove();
                document.querySelector(".cookie-banner")?.remove();
                // Dubbele head-tags opruimen: de standaardtags uit index.html (data-default)
                // vervallen zodra de pagina een eigen versie van die tag heeft gezet.
                const key = (el) => el.tagName === "TITLE" ? "title"
                    : el.getAttribute("name") ? `name=${el.getAttribute("name")}`
                    : el.getAttribute("property") ? `property=${el.getAttribute("property")}` : null;
                const own = new Set([...document.head.querySelectorAll("title:not([data-default]), meta:not([data-default])")].map(key).filter(Boolean));
                document.head.querySelectorAll("[data-default]").forEach((el) => {
                    if (own.has(key(el))) el.remove(); else el.removeAttribute("data-default");
                });
                return "<!doctype html>\n" + document.documentElement.outerHTML;
            });
            await page.close();

            const outDir = route === "/" ? DIST : join(DIST, route);
            await mkdir(outDir, { recursive: true });
            await writeFile(join(outDir, "index.html"), html);
            ok++;
        } catch (err) {
            console.warn(`[prerender] ${route} overgeslagen: ${err.message}`);
        }
    };

    try {
        const queue = [...routes];
        await Promise.all(Array.from({ length: 4 }, async () => {
            while (queue.length) await render(queue.shift());
        }));
    } finally {
        await browser.close();
        server.close();
    }
    console.log(`[prerender] ${ok}/${routes.length} pagina's geprerenderd`);
}

main().catch((err) => {
    console.warn("[prerender] mislukt, site blijft een gewone SPA:", err.message);
});
