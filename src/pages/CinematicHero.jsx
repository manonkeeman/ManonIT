import { memo, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Cinematische, scrollgestuurde opening (geïnspireerd op Aalto Digital Atelier).
// De scène staat vast (sticky) terwijl je scrolt; --p (0 → 1) stuurt licht, spleet en tekst aan.
// Scrollwaarden worden direct op het element gezet (geen React-render per scrollstap).
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ramp = (p, from, to) => clamp((p - from) / (to - from));

function CinematicHero() {
    const { t } = useTranslation();
    const rootRef = useRef(null);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let raf = 0;

        const update = () => {
            raf = 0;
            const rect = el.getBoundingClientRect();
            const total = rect.height - window.innerHeight;
            const p = reduce ? 0 : clamp(-rect.top / Math.max(total, 1));
            const a = 1 - ramp(p, 0.22, 0.4);          // intro-tekst: zichtbaar → weg
            const b = ramp(p, 0.46, 0.6) * (1 - ramp(p, 0.86, 0.98)); // tweede tekst
            const s = el.style;
            s.setProperty("--p", p.toFixed(4));
            s.setProperty("--a", a.toFixed(3));
            s.setProperty("--b", b.toFixed(3));
        };
        const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="cine" ref={rootRef} style={{ "--p": 0, "--a": 1, "--b": 0 }}>
            <div className="cine-stage">
                <div className="cine-sky" aria-hidden="true" />
                <div className="cine-glow" aria-hidden="true" />
                <div className="cine-rock cine-rock--l" aria-hidden="true" />
                <div className="cine-rock cine-rock--r" aria-hidden="true" />
                <div className="cine-seam" aria-hidden="true" />
                <div className="cine-water" aria-hidden="true" />
                <div className="cine-figure" aria-hidden="true" />
                <div className="cine-embers" aria-hidden="true">
                    {Array.from({ length: 14 }, (_, i) => <i key={i} style={{ "--i": i }} />)}
                </div>
                <div className="cine-vignette" aria-hidden="true" />

                <div className="cine-copy cine-copy--a">
                    <p className="cine-eyebrow">{t("cine.eyebrow")}</p>
                    <h1 className="cine-title">
                        <span>{t("cine.line1")}</span>
                        <em>{t("cine.line2")}</em>
                    </h1>
                    <p className="cine-sub">{t("cine.sub")}</p>
                </div>

                <div className="cine-copy cine-copy--b" aria-hidden="true">
                    <p className="cine-eyebrow">{t("cine.practice")}</p>
                    <p className="cine-statement">
                        {t("cine.p1")}<br />{t("cine.p2")}
                    </p>
                </div>

                <div className="cine-scroll" aria-hidden="true">
                    <span>{t("cine.scroll")}</span>
                    <i />
                </div>
            </div>
        </div>
    );
}

export default memo(CinematicHero);
