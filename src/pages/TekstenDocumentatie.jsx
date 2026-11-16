import { useTranslation } from "react-i18next";
import { FiEdit3, FiFileText, FiLayers, FiBookOpen, FiExternalLink } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";
import Breadcrumbs from "../assets/Components/Breadcrumbs.jsx";
import { withLang } from "../i18n/langPath.js";
import interview from "../content/interviewDaanDekker.json";

const ICONS = [FiEdit3, FiFileText, FiLayers, FiBookOpen];
const TRUST = ["Gemeente Amsterdam", "KLM", "RTL 4", "CB Centraal Boekhuis", "Influence"];
const QUOTE = "Zo’n top 10-notering bij Scheltema geeft me energie om door te gaan.";

export default function TekstenDocumentatie() {
    const { t, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const items = t("docsPage.items", { returnObjects: true });
    const exp = t("docsPage.exp", { returnObjects: true });
    const list = Array.isArray(items) ? items : [];
    const experience = Array.isArray(exp) ? exp : [];
    const rawFaq = t("docsPage.faq", { returnObjects: true });
    const faq = Array.isArray(rawFaq) ? rawFaq : [];
    const chips = t("docsPage.chips", { returnObjects: true });

    const lang = i18n.language?.split("-")[0] || "nl";
    const url = `https://manonit.com${withLang("/teksten-documentatie", lang)}`;
    const home = `https://manonit.com${withLang("/", lang)}`;
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `${url}#webpage`,
                "url": url,
                "name": t("docsPage.seo.title"),
                "description": t("docsPage.seo.description"),
                "inLanguage": lang,
                "isPartOf": { "@id": "https://manonit.com/#website" },
                "about": { "@id": `${url}#service` },
                "author": { "@id": "https://manonit.com/#manon" },
                "datePublished": "2026-11-16",
                "dateModified": "2026-11-16",
                "breadcrumb": { "@id": `${url}#breadcrumb` },
            },
            {
                "@type": "Service",
                "@id": `${url}#service`,
                "name": t("docsPage.title"),
                "description": t("docsPage.intro"),
                "url": url,
                "serviceType": list.map((i) => i.name),
                "provider": { "@id": "https://manonit.com/#service" },
                "areaServed": { "@type": "Country", "name": "Nederland" },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": t("docsPage.title"),
                    "itemListElement": list.map((i) => ({
                        "@type": "Offer",
                        "itemOffered": { "@type": "Service", "name": i.name, "description": i.desc },
                    })),
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": t("nav.home"), "item": home },
                    { "@type": "ListItem", "position": 2, "name": t("docsPage.title"), "item": url },
                ],
            },
            {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                "mainEntity": faq.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
            {
                "@type": "Person",
                "@id": "https://manonit.com/#manon",
                "knowsAbout": ["Copywriting", "Journalism", "Process documentation", "Scrum", "Technical writing", "Editing", "Book writing"],
            },
        ],
    };

    return (
        <>
            <Seo
                title={t("docsPage.seo.title")}
                description={t("docsPage.seo.description")}
                path="/teksten-documentatie"
            />

            <JsonLd data={schema} />

            {/* HERO */}
            <section className="dx-hero">
                <div className="container dx-hero-grid">
                    <div className="dx-hero-copy">
                        <Breadcrumbs items={[{ label: t("nav.home"), to: "/" }, { label: t("docsPage.title") }]} />
                        <p className="eyebrow">{t("docsPage.eyebrow")}</p>
                        <h1>{t("docsPage.title")}</h1>
                        <p className="dx-lead">{t("docsPage.intro")}</p>
                        <div className="dx-actions">
                            <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("docsPage.cta")}</a>
                            <a href="#interview" className="btn btn-ghost">{t("docsPage.ctaInterview")}</a>
                        </div>
                    </div>
                    <div className="dx-hero-visual" aria-hidden="false">
                        <picture>
                            <source type="image/avif" srcSet="/teksten/typemachine-600w.avif 600w, /teksten/typemachine-1000w.avif 1000w" sizes="(max-width: 900px) 92vw, 520px" />
                            <source type="image/webp" srcSet="/teksten/typemachine-600w.webp 600w, /teksten/typemachine-1000w.webp 1000w" sizes="(max-width: 900px) 92vw, 520px" />
                            <img src="/teksten/typemachine-1000w.webp" width="1000" height="1000" fetchPriority="high" decoding="async" alt="Illustratie van een typemachine waaruit gekleurde verf en code stromen" />
                        </picture>
                        <ul className="dx-chips">
                            {(Array.isArray(chips) ? chips : []).map((c, i) => (
                                <li key={c} className={`dx-chip-float dx-chip-float--${i + 1}`}>{c}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="container dx-trust">
                    <p>{t("docsPage.trustLabel")}</p>
                    <ul>
                        {TRUST.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                </div>
            </section>

            {/* DIENSTEN */}
            <section className="dx-section">
                <div className="container">
                    <h2 className="dx-h2">{t("docsPage.servicesTitle")}</h2>
                    <ul className="dx-services">
                        {list.map((s, i) => {
                            const Icon = ICONS[i] || FiEdit3;
                            return (
                                <li key={s.name} className={`dx-service${i === 0 ? " dx-service--lead" : ""}`}>
                                    <span className="dx-num-big" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                    <span className="dx-icon"><Icon aria-hidden="true" /></span>
                                    <h3>{s.name}</h3>
                                    <p>{s.desc}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>

            {/* ERVARING */}
            <section className="dx-section dx-alt">
                <div className="container dx-story">
                    <aside className="dx-story-side">
                        <figure>
                            <picture>
                                <source type="image/avif" srcSet="/about-portrait-400w.avif 400w, /about-portrait-800w.avif 800w" sizes="(max-width: 860px) 70vw, 340px" />
                                <source type="image/webp" srcSet="/about-portrait-400w.webp 400w, /about-portrait-800w.webp 800w" sizes="(max-width: 860px) 70vw, 340px" />
                                <img src="/about-portrait-800w.webp" width="800" height="1200" loading="lazy" alt="Manon Keeman achter een typemachine op de motorkap van een oude pick-up" />
                            </picture>
                        </figure>
                        <div className="dx-links">
                            <a className="btn btn-ghost" href="https://villavredestein.com" target="_blank" rel="noreferrer"><FiBookOpen aria-hidden="true" />{t("docsPage.linkVilla")}<FiExternalLink aria-hidden="true" /></a>
                            <a className="btn btn-ghost" href="https://manonkeeman.substack.com" target="_blank" rel="noreferrer"><FiEdit3 aria-hidden="true" />{t("docsPage.linkSubstack")}<FiExternalLink aria-hidden="true" /></a>
                        </div>
                    </aside>
                    <div className="dx-story-main">
                        <p className="eyebrow">{t("docsPage.storyLabel")}</p>
                        <h2 className="dx-h2 dx-h2--left">{t("docsPage.expTitle")}</h2>
                        <ol className="dx-jobs">
                            {experience.map((e, i) => (
                                <li key={e.where} className="dx-job">
                                    <span className="dx-job-n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                                    <div>
                                        <h3>{e.where}</h3>
                                        <span className="dx-chip">{e.role}</span>
                                        <p>{e.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>

            {/* INTERVIEW */}
            <section className="dx-section dx-dark" id="interview">
                <div className="container">
                    <div className="dx-iv">
                        <aside className="dx-iv-side">
                            <figure>
                                <img src="/teksten/daan-dekker.jpg" alt={t("docsPage.interview.caption")} width="480" height="640" loading="lazy" />
                                <figcaption>{t("docsPage.interview.caption")}</figcaption>
                            </figure>
                        </aside>
                        <div className="dx-iv-main">
                            <p className="eyebrow">{t("docsPage.interview.label")}</p>
                            <h2 className="dx-h2 dx-h2--left">{t("docsPage.interview.title")}</h2>
                            <p className="dx-iv-sub">{t("docsPage.interview.sub")} <span>{t("docsPage.interview.note")}</span></p>

                            <blockquote lang="nl" className="dx-quote">
                                <p>{QUOTE}</p>
                                <cite>{t("docsPage.interview.caption")}</cite>
                            </blockquote>

                            <p lang="nl" className="dx-iv-lead">{interview.lead}</p>

                            <div lang="nl" className="dx-acc">
                                {interview.qa.map((x, i) => (
                                    <details key={x.q} open={i === 0}>
                                        <summary>
                                            <span className="dx-num">{String(i + 1).padStart(2, "0")}</span>
                                            <span>{x.q}</span>
                                        </summary>
                                        <p>{x.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="dx-section dx-alt" id="faq">
                <div className="container">
                  <div className="dx-faq">
                    <div className="dx-faq-head">
                        <h2 className="dx-h2 dx-h2--left">{t("docsPage.faqTitle")}</h2>
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("docsPage.cta")}</a>
                    </div>
                    <div className="dx-acc dx-acc--faq">
                        {faq.map((f) => (
                            <details key={f.q}>
                                <summary><span>{f.q}</span></summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                  </div>
                </div>
            </section>

            <style>{`
                .dx-hero{ padding: clamp(40px, 6vw, 72px) 20px 0; background:
                    radial-gradient(60% 80% at 100% 0%, color-mix(in srgb, var(--accent) 14%, transparent) 0%, transparent 70%),
                    linear-gradient(180deg, color-mix(in srgb, var(--accent) 5%, var(--bg)) 0%, var(--bg) 100%) }
                .dx-hero-grid{ display:grid; grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr); gap:clamp(24px,5vw,64px); align-items:center }
                .dx-hero h1{ margin:0 0 18px; font-size:clamp(34px,5.2vw,58px) }
                .dx-hero .eyebrow{ margin-bottom:14px }
                .dx-lead{ margin:0 0 28px; font-size:clamp(1.02rem,1.5vw,1.18rem); line-height:1.65; color:var(--muted); max-width:56ch }
                .dx-actions{ display:flex; flex-wrap:wrap; gap:12px }
                .dx-hero-visual{ position:relative }
                .dx-hero-visual img{ width:100%; height:auto; border-radius:28px; box-shadow:0 30px 60px -24px rgba(0,0,0,.45); background:#0a0e17 }
                .dx-chips{ list-style:none; margin:0; padding:0 }
                .dx-chip-float{ position:absolute; padding:8px 16px; border-radius:999px; font-size:.85rem; font-weight:700; color:#fff; background:rgba(20,20,24,.72); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.22); box-shadow:0 10px 24px -10px rgba(0,0,0,.5) }
                .dx-chip-float::before{ content:""; display:inline-block; width:8px; height:8px; margin-right:8px; border-radius:50%; background:var(--accent) }
                .dx-chip-float--1{ top:7%; left:-6% }
                .dx-chip-float--2{ top:44%; right:-5% }
                .dx-chip-float--3{ bottom:8%; left:-4% }
                .dx-trust{ display:flex; flex-wrap:wrap; align-items:center; gap:12px 28px; padding:clamp(32px,5vw,56px) 0 clamp(28px,4vw,44px); border-top:1px solid var(--border); margin-top:clamp(32px,5vw,56px) }
                .dx-trust p{ margin:0; font-size:.78rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--muted) }
                .dx-trust ul{ list-style:none; margin:0; padding:0; display:flex; flex-wrap:wrap; gap:10px 28px }
                .dx-trust li{ font-family:var(--font-brand); font-size:1.05rem; font-weight:700; color:var(--text); opacity:.75 }

                .dx-section{ padding:clamp(56px,8vw,104px) 20px }
                .dx-alt{ background:var(--bg-alt) }
                .dx-h2{ margin:0 0 36px; font-size:clamp(1.6rem,3vw,2.3rem) }
                .dx-h2--left{ margin-bottom:12px }

                .dx-services{ list-style:none; margin:0; padding:0; display:grid; gap:20px; grid-template-columns:repeat(2,1fr) }
                .dx-service{ position:relative; overflow:hidden; padding:clamp(24px,3vw,36px); min-height:230px; border:1px solid var(--border); border-radius:22px; background:var(--bg); transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease }
                .dx-service:hover{ transform:translateY(-4px); box-shadow:0 24px 40px -24px rgba(0,0,0,.25); border-color:color-mix(in srgb, var(--accent) 45%, transparent) }
                .dx-service--lead{ color:#fff; border-color:transparent; background:radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--accent) 55%, var(--dark)) 0%, var(--dark) 65%) }
                .dx-service--lead h3{ color:#fff }
                .dx-service.dx-service--lead p{ color:rgba(255,255,255,.85) }
                .dx-service--lead .dx-icon{ background:rgba(255,255,255,.14); color:#fff }
                .dx-num-big{ position:absolute; right:20px; top:8px; font-family:var(--font-brand); font-weight:700; font-size:clamp(3.5rem,7vw,5.5rem); line-height:1; color:currentColor; opacity:.07; pointer-events:none }
                .dx-icon{ display:grid; place-items:center; width:52px; height:52px; margin-bottom:20px; border-radius:16px; background:color-mix(in srgb, var(--accent) 13%, transparent); color:var(--accent-ink) }
                .dx-icon svg{ width:24px; height:24px }
                .dx-service h3{ margin:0 0 10px; font-size:clamp(1.15rem,2vw,1.4rem) }
                .dx-service p{ margin:0; max-width:44ch; line-height:1.65; color:var(--muted) }

                .dx-story{ display:grid; grid-template-columns:minmax(0,340px) minmax(0,1fr); gap:clamp(28px,5vw,72px); align-items:start }
                .dx-story-side{ position:sticky; top:calc(var(--nav-h) + 24px) }
                .dx-story-side figure{ margin:0 0 20px }
                .dx-story-side img{ width:100%; height:auto; aspect-ratio:5/5.6; object-fit:cover; border-radius:22px; box-shadow:0 24px 48px -24px rgba(0,0,0,.4) }
                .dx-links{ display:grid; gap:10px }
                .dx-links .btn{ justify-content:flex-start; gap:10px; width:100% }
                .dx-links .btn svg{ width:18px; height:18px; flex-shrink:0 }
                .dx-links .btn svg:last-child{ margin-left:auto; opacity:.6 }
                .dx-jobs{ list-style:none; margin:28px 0 0; padding:0; display:grid; gap:14px }
                .dx-job{ display:grid; grid-template-columns:56px minmax(0,1fr); gap:16px; padding:20px 22px; border:1px solid var(--border); border-radius:18px; background:var(--bg); transition:border-color .2s ease, transform .2s ease }
                .dx-job:hover{ border-color:color-mix(in srgb, var(--accent) 45%, transparent); transform:translateX(4px) }
                .dx-job-n{ font-family:var(--font-brand); font-weight:700; font-size:1.7rem; color:var(--accent) }
                .dx-job h3{ margin:0 0 6px; font-family:var(--font-brand); font-size:1.2rem }
                .dx-chip{ display:inline-block; margin-bottom:8px; padding:3px 10px; border-radius:999px; background:color-mix(in srgb, var(--accent) 12%, transparent); color:var(--accent-ink); font-size:.82rem; font-weight:600 }
                .dx-job p{ margin:0; color:var(--muted); line-height:1.65 }

                .dx-dark{ background:var(--dark); color:#fff }
                .dx-dark .eyebrow{ color:var(--accent) }
                .dx-dark h2{ color:#fff }
                .dx-iv{ display:grid; gap:clamp(24px,4vw,56px); grid-template-columns:280px minmax(0,1fr); align-items:start }
                .dx-iv-side{ position:sticky; top:calc(var(--nav-h) + 24px) }
                .dx-iv-side figure{ margin:0 }
                .dx-iv-side img{ width:100%; height:auto; border-radius:20px; box-shadow:0 24px 48px -20px rgba(0,0,0,.7) }
                .dx-iv-side figcaption{ margin-top:10px; font-size:.85rem; color:rgba(255,255,255,.6) }
                .dx-iv-sub{ margin:0 0 28px; color:rgba(255,255,255,.7); line-height:1.6 }
                .dx-iv-sub span{ display:block; margin-top:2px; font-size:.85rem; color:rgba(255,255,255,.5) }
                .dx-quote{ position:relative; margin:0 0 28px; padding:8px 0 8px 28px; border-left:3px solid var(--accent) }
                .dx-quote p{ margin:0 0 8px; font-size:clamp(1.3rem,2.6vw,1.9rem); line-height:1.3; font-weight:700; letter-spacing:-.015em; color:#fff }
                .dx-quote cite{ font-style:normal; font-size:.88rem; color:rgba(255,255,255,.6) }
                .dx-iv-lead{ margin:0 0 20px; font-weight:600; line-height:1.6; color:rgba(255,255,255,.9) }

                .dx-acc{ display:grid; gap:10px; max-width:72ch }
                .dx-acc details{ border:1px solid var(--border); border-radius:14px; background:var(--bg); overflow:hidden }
                .dx-acc details[open]{ border-color:color-mix(in srgb, var(--accent) 40%, transparent) }
                .dx-acc summary{ display:flex; gap:14px; align-items:baseline; padding:15px 18px; cursor:pointer; font-weight:600; line-height:1.4; list-style:none }
                .dx-acc summary::-webkit-details-marker{ display:none }
                .dx-acc summary::after{ content:"+"; margin-left:auto; padding-left:12px; font-weight:400; font-size:1.3rem; color:var(--accent-ink) }
                .dx-acc details[open] summary::after{ content:"–" }
                .dx-acc summary:focus-visible{ outline:2px solid var(--accent); outline-offset:-2px }
                .dx-num{ font-size:.8rem; color:var(--accent-ink); font-variant-numeric:tabular-nums }
                .dx-acc details p{ margin:0; padding:0 18px 20px 48px; color:var(--muted); line-height:1.75 }
                .dx-acc--faq details p{ padding-left:18px }
                .dx-dark .dx-acc details{ background:rgba(255,255,255,.06); border-color:rgba(255,255,255,.14); color:#fff }
                .dx-dark .dx-acc details[open]{ background:rgba(255,255,255,.1); border-color:color-mix(in srgb, var(--accent) 60%, transparent) }
                .dx-dark .dx-acc details p{ color:rgba(255,255,255,.78) }
                .dx-dark .dx-num, .dx-dark .dx-acc summary::after{ color:var(--accent) }

                .dx-faq{ display:grid; grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr); gap:clamp(24px,5vw,72px); align-items:start }
                .dx-faq-head{ position:sticky; top:calc(var(--nav-h) + 24px) }
                .dx-faq-head .btn{ margin-top:12px }

                @media (max-width:900px){
                    .dx-hero-grid, .dx-story, .dx-faq{ grid-template-columns:1fr }
                    .dx-hero-visual{ max-width:520px }
                    .dx-chip-float--1{ left:2% } .dx-chip-float--2{ right:2% } .dx-chip-float--3{ left:2% }
                    .dx-story-side, .dx-faq-head, .dx-iv-side{ position:static }
                    .dx-story-side{ max-width:340px }
                }
                @media (max-width:760px){
                    .dx-iv{ grid-template-columns:1fr }
                    .dx-iv-side{ max-width:220px }
                    .dx-acc details p{ padding-left:18px }
                    .dx-services{ grid-template-columns:1fr }
                }
                @media (max-width:520px){
                    .dx-actions .btn{ flex:1 1 100%; justify-content:center }
                    .dx-job{ grid-template-columns:1fr; gap:6px }
                }
            `}</style>
        </>
    );
}
