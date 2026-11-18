import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Korte laadscène met percentage, eenmaal per sessie en alleen op de homepage.
// Pas na de eerste render zichtbaar (useLayoutEffect), zodat de voorgerenderde HTML
// en hydratatie identiek blijven; de inhoud staat er voor zoekmachines gewoon al onder.
const KEY = "preloader-seen";

export default function Preloader() {
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const [state, setState] = useState("idle"); // idle | show | out | done
    const [pct, setPct] = useState(0);
    const isHome = pathname === "/" || pathname === "/en" || pathname === "/en/";

    useLayoutEffect(() => {
        if (!isHome || typeof window === "undefined" || window.__PRERENDER__) return;
        let seen = false;
        try { seen = sessionStorage.getItem(KEY) === "1"; } catch { /* privémodus */ }
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (seen || reduce) return;

        setState("show");
        document.documentElement.style.overflow = "hidden";
        const start = performance.now();
        const DUR = 1300;
        let raf;
        const tick = (now) => {
            const k = Math.min(1, (now - start) / DUR);
            setPct(Math.round((1 - Math.pow(1 - k, 2.2)) * 100));
            if (k < 1) raf = requestAnimationFrame(tick);
            else {
                try { sessionStorage.setItem(KEY, "1"); } catch { /* negeren */ }
                setState("out");
                setTimeout(() => {
                    setState("done");
                    document.documentElement.style.overflow = "";
                }, 700);
            }
        };
        raf = requestAnimationFrame(tick);
        return () => {
            cancelAnimationFrame(raf);
            document.documentElement.style.overflow = "";
        };
    }, [isHome]);

    if (state === "idle" || state === "done") return null;

    return (
        <div className={`preloader ${state === "out" ? "is-out" : ""}`} role="status" aria-live="polite" aria-label={t("cine.loading")}>
            <div className="preloader-inner">
                <span className="preloader-word">MANONIT</span>
                <span className="preloader-bar"><i style={{ transform: `scaleX(${pct / 100})` }} /></span>
                <span className="preloader-pct">{pct}%</span>
            </div>
        </div>
    );
}
