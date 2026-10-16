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
    const rawFacts = t("howPage.facts", { returnObjects: true });
    const facts = Array.isArray(rawFacts) ? rawFacts : [];

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
                    <ul className="wk-facts">
                        {facts.map((f) => (
                            <li key={f.l}><strong>{f.v}</strong><span>{f.l}</span></li>
                        ))}
                    </ul>
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
                            const cls = ["wk-step", i % 2 === 0 ? "wk-step--l" : "wk-step--r", seen.has(i) ? "is-in" : "", active === i ? "is-active" : "", i <= active ? "is-passed" : ""].join(" ");
                            return (
                                <li key={s.title} className={cls} data-i={i} ref={(el) => (refs.current[i] = el)}>
                                    <span className="wk-node" aria-hidden="true">
                                        <Icon />
                                    </span>
                                    <div className="wk-card">
                                        <span className="wk-big" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
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
                .wk-head {
                    padding-bottom: 36px; position: relative; overflow: hidden;
                    background:
                      radial-gradient(60% 80% at 85% 0%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%),
                      radial-gradient(50% 70% at 0% 100%, color-mix(in srgb, var(--accent) 9%, transparent), transparent 70%);
                }
                .wk-head h1 { max-width: 18ch; margin-left: auto; margin-right: auto; }
                .wk-facts {
                    list-style: none; margin: 34px auto 0; padding: 0; max-width: 900px;
                    display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px;
                }
                .wk-facts li {
                    background: #fff; border: 1px solid var(--border); border-radius: 18px;
                    padding: 18px 12px; text-align: center; display: flex; flex-direction: column; gap: 4px;
                    box-shadow: 0 10px 28px rgba(0,0,0,.05);
                    transition: transform .25s ease;
                }
                .wk-facts li:hover { transform: translateY(-3px); }
                .wk-facts strong { font-size: 1.9rem; line-height: 1; color: var(--accent-ink); font-weight: 800; }
                .wk-facts span { font-size: .85rem; color: var(--muted); line-height: 1.35; }

                .wk-who {
                    display: inline-block; padding: 3px 11px; border-radius: 999px;
                    font-size: .74rem; font-weight: 700; letter-spacing: .02em;
                }
                .wk-who--me { background: color-mix(in srgb, var(--accent) 16%, #fff); color: var(--accent-ink); }
                .wk-who--together { background: #FFE9A8; color: #6b4b00; }
                .wk-who--client { background: #DDEBFF; color: #1d4b86; }

                .wk-section { padding-top: 40px; }
                .wk-toolbar { max-width: 1000px; margin: 0 auto 14px; display: flex; justify-content: flex-end; }
                .wk-toggle {
                    background: #fff; border: 1px solid var(--border); border-radius: 999px;
                    padding: 8px 16px; font: inherit; font-size: .85rem; font-weight: 600;
                    color: var(--text); cursor: pointer; transition: border-color .2s;
                }
                .wk-toggle:hover { border-color: var(--accent); }

                .wk-list { list-style: none; margin: 0 auto; padding: 0; max-width: 1000px; position: relative; }
                .wk-line {
                    position: absolute; left: 50%; top: 30px; bottom: 30px; width: 4px; margin-left: -2px;
                    border-radius: 4px; background: var(--border); overflow: hidden;
                }
                .wk-line-fill {
                    display: block; width: 100%; height: 100%;
                    background: linear-gradient(180deg, var(--accent), #ffb27a);
                    transform-origin: top; transition: transform .15s linear;
                }

                .wk-step {
                    position: relative; box-sizing: border-box; width: 50%; padding: 0 60px 30px 0;
                    opacity: 0; transition: opacity .6s ease, transform .6s ease;
                }
                .wk-step--l { transform: translateX(-28px); }
                .wk-step--r { margin-left: 50%; padding: 0 0 30px 60px; transform: translateX(28px); }
                .wk-step.is-in { opacity: 1; transform: none; }
                .wk-node {
                    position: absolute; top: 14px; width: 58px; height: 58px; border-radius: 50%;
                    display: flex; align-items: center; justify-content: center;
                    background: #fff; border: 3px solid var(--border); color: var(--muted);
                    font-size: 1.35rem; z-index: 1;
                    transition: background .3s, border-color .3s, color .3s, transform .3s, box-shadow .3s;
                }
                .wk-step--l .wk-node { right: -29px; }
                .wk-step--r .wk-node { left: -29px; }
                .wk-step.is-passed .wk-node { border-color: var(--accent); color: var(--accent-ink); }
                .wk-step.is-active .wk-node {
                    background: var(--accent); border-color: var(--accent); color: #fff;
                    transform: scale(1.1); box-shadow: 0 0 0 8px color-mix(in srgb, var(--accent) 18%, transparent);
                }

                .wk-card {
                    position: relative; background: #fff; border-radius: 22px; border: 1px solid var(--border);
                    overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,.04);
                    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
                }
                .wk-card::before {
                    content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 5px;
                    background: var(--border); transition: background .3s;
                }
                .wk-step.is-passed .wk-card::before { background: linear-gradient(180deg, var(--accent), #ffb27a); }
                .wk-card:hover { transform: translateY(-4px); box-shadow: 0 18px 40px rgba(0,0,0,.09); }
                .wk-step.is-active .wk-card { border-color: color-mix(in srgb, var(--accent) 50%, var(--border)); }
                .wk-big {
                    position: absolute; right: 20px; top: 6px; font-size: 4.6rem; font-weight: 800; line-height: 1;
                    color: color-mix(in srgb, var(--accent) 11%, #fff); pointer-events: none; user-select: none;
                }
                .wk-card-btn {
                    position: relative; display: block; width: 100%; text-align: left; background: none; border: 0;
                    font: inherit; color: inherit; cursor: pointer; padding: 24px 54px 24px 28px;
                }
                .wk-top { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; flex-wrap: wrap; }
                .wk-nr { font-size: .74rem; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: var(--accent-ink); }
                .wk-title { display: block; font-size: 1.3rem; font-weight: 700; line-height: 1.25; margin-bottom: 6px; }
                .wk-text { display: block; color: var(--muted); line-height: 1.6; }
                .wk-chev { position: absolute; right: 20px; bottom: 22px; font-size: 1.25rem; color: var(--muted); transition: transform .3s ease, color .2s; }
                .wk-card-btn[aria-expanded="true"] .wk-chev { transform: rotate(180deg); color: var(--accent-ink); }
                .wk-detail { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
                .wk-detail.open { grid-template-rows: 1fr; }
                .wk-detail > p {
                    overflow: hidden; margin: 0 28px; padding: 0; line-height: 1.6; font-weight: 600;
                    color: var(--accent-ink); border-top: 1px dashed transparent;
                }
                .wk-detail.open > p { padding: 14px 0 22px; border-top-color: var(--border); }

                .wk-end {
                    max-width: 780px; margin: 10px auto 0; text-align: center; color: #fff;
                    background: linear-gradient(135deg, var(--accent-ink), var(--accent));
                    border-radius: 26px; padding: 44px 24px; box-shadow: 0 22px 50px color-mix(in srgb, var(--accent) 35%, transparent);
                }
                .wk-end h2 { margin: 0 0 8px; color: #fff; }
                .wk-end p { margin: 0 0 22px; color: rgba(255,255,255,.9); }
                .wk-end .btn-primary { background: #fff; color: var(--accent-ink); box-shadow: none; }
                .wk-end .btn-primary:hover { background: #fff3ea; }

                @media (max-width: 860px) {
                    .wk-facts { grid-template-columns: repeat(2, 1fr); }
                    .wk-line { left: 27px; margin-left: -2px; }
                    .wk-step, .wk-step--r { width: 100%; margin-left: 0; padding: 0 0 22px 80px; }
                    .wk-step--l, .wk-step--r { transform: translateY(24px); }
                    .wk-step.is-in { transform: none; }
                    .wk-step--l .wk-node, .wk-step--r .wk-node { left: 0; right: auto; top: 10px; }
                }
                @media (max-width: 560px) {
                    .wk-line { left: 19px; }
                    .wk-node { width: 42px; height: 42px; font-size: 1.05rem; }
                    .wk-step, .wk-step--r { padding-left: 58px; }
                    .wk-card-btn { padding: 20px 46px 20px 22px; }
                    .wk-big { font-size: 3.4rem; }
                    .wk-detail > p { margin: 0 22px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .wk-step, .wk-card, .wk-node, .wk-line-fill, .wk-detail, .wk-chev, .wk-facts li { transition: none; }
                    .wk-step { opacity: 1; transform: none !important; }
                }
            `}</style>
        </>
    );
}
