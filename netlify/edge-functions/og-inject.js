const SITE = "https://manonit.com";

const ARTICLES = {
    designchaos: {
        nl: { title: "Chaos ordenen met code en design | Manon Keeman", description: "Waarom structuur niet saai is maar vrijheid geeft." },
        en: { title: "On Chaos, Structure, Code and Design | Manon Keeman", description: "Why structure isn't boring, but actually gives you freedom." },
        image: `https://manonit.com/og/journal-designchaos.jpg`,
    },
    storytelling: {
        nl: { title: "Storytelling in IT | Manon Keeman", description: "Waarom verhalen onmisbaar zijn in technologie." },
        en: { title: "Storytelling for Developers | Manon Keeman", description: "Why your code also tells a story." },
        image: `https://manonit.com/og/journal-storytelling.jpg`,
    },
    "365korteverhalen": {
        nl: { title: "365 Korte verhalen: van idee naar boek | Manon Keeman", description: "Een boek in wording: 365 scènes van absurditeit en overleven." },
        en: { title: "365 Fragments of What Remained and Began Again | Manon Keeman", description: "The book in progress: fragments from a past that was more absurd than ordinary." },
        image: `https://manonit.com/og/journal-365korteverhalen.jpg`,
    },
    toekomsttech: {
        nl: { title: "De toekomst van tech | Manon Keeman", description: "AI, remote werken en de rol van creativiteit." },
        en: { title: "The Future of Tech | Manon Keeman", description: "On AI, remote work, data and humanity in IT." },
        image: `https://manonit.com/og/journal-toekomsttech.jpg`,
    },
    pastelvanbuiten: {
        nl: { title: "Pastel van buiten, verrassend van binnen | Manon Keeman", description: "Hoe ik de website van mijn nichtje Marie bouwde: zoet van buiten, doordacht van binnen." },
        en: { title: "Pastel on the Outside, Surprising on the Inside | Manon Keeman", description: "How I built my cousin Marie's website: sweet on the outside, thoughtful on the inside." },
        image: `https://manonit.com/og/journal-pastelvanbuiten.jpg`,
    },
    "ai-in-mijn-werk": {
        nl: { title: "Hoe ik AI gebruik in mijn werk (en waar niet) | Manon Keeman", description: "Sneller bouwen, meertalig en vindbaar in ChatGPT en Claude. Zo zet ik AI in voor mijn klanten, en waar bewust niet." },
        en: { title: "How I use AI in my work (and where I don't) | Manon Keeman", description: "Building faster, multilingual and findable in ChatGPT and Claude. How I use AI for my clients, and where I deliberately don't." },
        image: `https://manonit.com/og/journal-ai-in-mijn-werk.jpg`,
    },
    "verhaal-achter-casacrew": {
        nl: { title: "Van Excel-sheet naar eigen app: het verhaal achter CasaCrew | Manon Keeman", description: "Hoe een volle Excel-sheet bij Villa Vredestein uitgroeide tot CasaCrew, een verhuurapp voor hospita's." },
        en: { title: "From spreadsheet to app: the story behind CasaCrew | Manon Keeman", description: "How an overflowing spreadsheet at Villa Vredestein grew into CasaCrew, a rental app for landlords." },
        image: `https://manonit.com/og/journal-verhaal-achter-casacrew.jpg`,
    },
    "samenwerking-the-big-three": {
        nl: { title: "Vrijheid en vertrouwen: een website bouwen voor The Big Three | Manon Keeman", description: "Wat er gebeurt als een klant je de ruimte geeft: de website van The Big Three, een garage voor Amerikaanse auto's in Nunspeet." },
        en: { title: "Freedom and trust: building a website for The Big Three | Manon Keeman", description: "What happens when a client gives you room to work: the website for The Big Three, an American car garage in Nunspeet." },
        image: "https://manonit.com/og/project-the-big-three.jpg",
    },
    "website-villa-vredestein": {
        nl: { title: "Villa Vredestein: een huis met een verhaal, nu ook online | Manon Keeman", description: "Hoe ik het verhaal van een villa uit 1906 in Driebergen-Rijsenburg vertaalde naar een website zonder opsmuk." },
        en: { title: "Villa Vredestein: a house with a story, now online too | Manon Keeman", description: "How I translated the story of a villa from 1906 in Driebergen-Rijsenburg into a website without frills." },
        image: "https://manonit.com/og/project-villa-vredestein.jpg",
    },
};

const BOT_RE = /facebookexternalhit|linkedin|twitterbot|whatsapp|telegrambot|slackbot|discordbot|applebot|pinterest|bingbot|googlebot|iframely|prerender|screaming.frog/i;

export default async (request, _context) => {
    const ua = request.headers.get("user-agent") || "";
    if (!BOT_RE.test(ua)) return;

    const { pathname } = new URL(request.url);
    const isEn = pathname.startsWith("/en/");
    const slug = pathname.replace(/^\/en\/journal\/|^\/journal\//, "").replace(/\/$/, "").toLowerCase();
    const article = ARTICLES[slug];
    if (!article) return;

    const lang = isEn ? "en" : "nl";
    const meta = article[lang];
    const canonical = `${SITE}${isEn ? "/en" : ""}/journal/${slug}`;

    const html = `<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="nl" href="${SITE}/journal/${slug}">
<link rel="alternate" hreflang="en" href="${SITE}/en/journal/${slug}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="ManonIT">
<meta property="og:locale" content="${isEn ? "en_US" : "nl_NL"}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:image" content="${article.image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="675">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@manonkeeman">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<meta name="twitter:image" content="${article.image}">
</head>
<body></body>
</html>`;

    return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
    });
};

