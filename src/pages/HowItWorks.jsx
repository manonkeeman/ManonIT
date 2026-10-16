import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCalendar, FiChevronDown, FiMessageCircle, FiImage, FiSearch, FiEdit3, FiCheckCircle, FiTool, FiGlobe, FiHeart } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";

// Wie doet wat per stap: me = ManonIT, together = samen, client = de klant
const WHO = ["together", "client", "me", "me", "together", "me", "me", "together"];
const ICONS = [FiMessageCircle, FiImage, FiSearch, FiEdit3, FiCheckCircle, FiTool, FiGlobe, FiHeart];

export default function HowItWorks() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    const raw = t("howPage.steps", { returnObjects: true });
    const steps = Array.isArray(raw) ? raw : [];

    const [open, setOpen] = useState(0);
    const [seen, setSeen] = useState(() => new Set());
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const listRef = useRef(null);
    const refs = useRef([]);

    // Onthullen bij scrollen + actieve stap + voortgangslijn
    useEffect(() => {
        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
        if (reduce || !("IntersectionObserver" in window)) {
            setSeen(new Set(steps.map((_, i) => i)));
        } else {
            const io = new IntersectionObserver((entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const i = Number(e.target.dataset.i);
                        setSeen((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));
                    }
                });
            }, { rootMargin: "0px 0px -12% 0px", threshold: 0.15 });
            refs.current.forEach((el) => el && io.observe(el));
            var cleanupIo = () => io.disconnect();
        }

        const onScroll = () => {
            const list = listRef.current;
            if (!list) return;
            const mid = window.innerHeight * 0.5;
            const r = list.getBoundingClientRect();
            setProgress(Math.max(0, Math.min(1, (mid - r.top) / r.height)));
            let best = 0;
            refs.current.forEach((el, i) => {
                if (el && el.getBoundingClientRect().top < mid) best = i;
            });
            setActive(best);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cleanupIo?.();
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, [steps.length]);

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t("howPage.title"),
        "step": steps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": s.title,
            "text": `${s.text} ${s.detail || ""}`.trim(),
        })),
    };

    const allOpen = open === -1;

    return (
        <>
            <Seo
                title={t("seo.how.title")}
                description={t("seo.how.description")}
                path="/werkwijze"
            />
            <JsonLd data={howToSchema} />

            <section className="section page-head wk-head">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("howPage.eyebrow")}</p>
                        <h1>{t("howPage.title")}</h1>
                        <p>{t("howPage.intro")}</p>
                    </div>
                    <div className="wk-legend" aria-hidden="true">
                        {["me", "together", "client"].map((k) => (
                            <span key={k} className={`wk-who wk-who--${k}`}>{t(`howPage.who.${k}`)}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt wk-section">
                <div className="container">
                    <div className="wk-toolbar">
                        <button type="button" className="wk-toggle" onClick={() => setOpen(allOpen ? 0 : -1)}>
                            {allOpen ? t("howPage.collapse") : t("howPage.expand")}
                        </button>
                    </div>

                    <ol className="wk-list" ref={listRef}>
                        <span className="wk-line" aria-hidden="true">
                            <span className="wk-line-fill" style={{ transform: `scaleY(${progress})` }} />
                        </span>
                        {steps.map((s, i) => {
                            const Icon = ICONS[i] || FiCheckCircle;
                            const isOpen = allOpen || open === i;
                            const cls = ["wk-step", seen.has(i) ? "is-in" : "", active === i ? "is-active" : "", i <= active ? "is-passed" : ""].join(" ");
                            return (
                                <li key={s.title} className={cls} data-i={i} ref={(el) => (refs.current[i] = el)}>
                                    <span className="wk-node" aria-hidden="true">
                                        <Icon />
                                    </span>
                                    <div className="wk-card">
                                        <button
                                            type="button"
                                            className="wk-card-btn"
                                            aria-expanded={isOpen}
                                            aria-controls={`wk-detail-${i}`}
                                            onClick={() => setOpen(isOpen && !allOpen ? -2 : i)}
                                        >
                                            <span className="wk-top">
                                                <span className="wk-nr">{t("howPage.step")} {i + 1}</span>
                                                <span className={`wk-who wk-who--${WHO[i]}`}>{t(`howPage.who.${WHO[i]}`)}</span>
                                            </span>
                                            <span className="wk-title">{s.title}</span>
                                            <span className="wk-text">{s.text}</span>
                                            <FiChevronDown className="wk-chev" aria-hidden="true" />
                                        </button>
                                        <div id={`wk-detail-${i}`} className={`wk-detail ${isOpen ? "open" : ""}`}>
                                            <p>{s.detail}</p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>

                    <div className="wk-end">
                        <h2>{t("howPage.endTitle")}</h2>
                        <p>{t("howPage.endText")}</p>
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow><FiCalendar aria-hidden="true" />{t("hero.ctaContact")}</a>
                    </div>
                </div>
            </section>

            <style>{`
                .wk-head { padding-bottom: 8px; }
                .wk-legend { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 20px; }
                .wk-who {
                    display: inline-block; padding: 4px 12px; border-radius: 999px;
                    font-size: .78rem; font-weight: 700; letter-spacing: .02em;
                }
                .wk-who--me { background: color-mix(in srgb, var(--accent) 16%, #fff); color: var(--accent-ink); }
                .wk-who--together { background: #FFE9A8; color: #6b4b00; }
                .wk-who--client { background: #DDEBFF; color: #1d4b86; }

                .wk-section { padding-top: 28px; }
                .wk-toolbar { max-width: 780px; margin: 0 auto 8px; display: flex; justify-content: flex-end; }
                .wk-toggle {
                    background: none; border: 1px solid var(--border); border-radius: 999px;
                    padding: 8px 16px; font: inherit; font-size: .85rem; font-weight: 600;
                    color: var(--text); cursor: pointer; transition: border-color .2s, background .2s;
                }
                .wk-toggle:hover { border-color: var(--accent); background: #fff; }

                .wk-list { list-style: none; margin: 0 auto; padding: 0; max-width: 780px; position: relative; }
                .wk-line {
                    position: absolute; left: 27px; top: 28px; bottom: 28px; width: 4px;
                    border-radius: 4px; background: var(--border); overflow: hidden;
                }
                .wk-line-fill {
                    display: block; width: 100%; height: 100%;
                    background: linear-gradient(180deg, var(--accent), #ff9a55);
                    transform-origin: top; transition: transform .15s linear;
                }

                .wk-step {
                    position: relative; padding: 0 0 22px 80px;
                    opacity: 0; transform: translateY(24px);
                    transition: opacity .55s ease, transform .55s ease;
                }
                .wk-step.is-in { opacity: 1; transform: none; }
                .wk-node {
                    position: absolute; left: 0; top: 6px; width: 58px; height: 58px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    background: #fff; border: 3px solid var(--border); color: var(--muted);
                    font-size: 1.35rem; z-index: 1;
                    transition: background .3s, border-color .3s, color .3s, transform .3s, box-shadow .3s;
                }
                .wk-step.is-passed .wk-node { border-color: var(--accent); color: var(--accent-ink); }
                .wk-step.is-active .wk-node {
                    background: var(--accent); border-color: var(--accent); color: #fff;
                    transform: scale(1.1); box-shadow: 0 0 0 8px color-mix(in srgb, var(--accent) 18%, transparent);
                }

                .wk-card {
                    background: #fff; border-radius: 20px; border: 1px solid var(--border);
                    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
                }
                .wk-card:hover { transform: translateY(-3px); box-shadow: 0 14px 34px rgba(0,0,0,.08); border-color: color-mix(in srgb, var(--accent) 45%, var(--border)); }
                .wk-step.is-active .wk-card { border-color: color-mix(in srgb, var(--accent) 55%, var(--border)); }
                .wk-card-btn {
                    display: block; width: 100%; text-align: left; background: none; border: 0; font: inherit;
                    color: inherit; cursor: pointer; padding: 22px 56px 22px 24px; position: relative;
                    border-radius: 20px;
                }
                .wk-top { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap; }
                .wk-nr { font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--accent-ink); }
                .wk-title { display: block; font-size: 1.25rem; font-weight: 700; line-height: 1.25; margin-bottom: 6px; }
                .wk-text { display: block; color: var(--muted); line-height: 1.65; }
                .wk-chev { position: absolute; right: 22px; top: 26px; font-size: 1.3rem; color: var(--muted); transition: transform .3s ease, color .2s; }
                .wk-card-btn[aria-expanded="true"] .wk-chev { transform: rotate(180deg); color: var(--accent-ink); }
                .wk-detail { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
                .wk-detail.open { grid-template-rows: 1fr; }
                .wk-detail > p {
                    overflow: hidden; margin: 0; padding: 0 24px; line-height: 1.65; font-weight: 600;
                    border-top: 0 solid var(--border);
                }
                .wk-detail.open > p { padding: 14px 24px 22px; border-top-width: 1px; }

                .wk-end {
                    max-width: 780px; margin: 18px auto 0; text-align: center;
                    background: linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, #fff), #fff);
                    border: 1px solid var(--border); border-radius: 24px; padding: 36px 24px;
                }
                .wk-end h2 { margin: 0 0 8px; }
                .wk-end p { margin: 0 0 20px; color: var(--muted); }

                @media (max-width: 560px) {
                    .wk-line { left: 19px; }
                    .wk-node { width: 42px; height: 42px; font-size: 1.05rem; }
                    .wk-step { padding-left: 58px; }
                    .wk-card-btn { padding: 18px 46px 18px 18px; }
                    .wk-detail > p, .wk-detail.open > p { padding-left: 18px; padding-right: 18px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .wk-step, .wk-card, .wk-node, .wk-line-fill, .wk-detail, .wk-chev { transition: none; }
                    .wk-step { opacity: 1; transform: none; }
                }
            `}</style>
        </>
    );
}
