import { useTranslation } from "react-i18next";
import { FiEdit3, FiFileText, FiLayers, FiBookOpen } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";
import Breadcrumbs from "../assets/Components/Breadcrumbs.jsx";
import { withLang } from "../i18n/langPath.js";
import interview from "../content/interviewDaanDekker.json";

const ICONS = [FiEdit3, FiFileText, FiLayers, FiBookOpen];
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
                <div className="container dx-hero-inner">
                    <Breadcrumbs items={[{ label: t("nav.home"), to: "/" }, { label: t("docsPage.title") }]} />
                    <p className="eyebrow">{t("docsPage.eyebrow")}</p>
                    <h1>{t("docsPage.title")}</h1>
                    <p className="dx-lead">{t("docsPage.intro")}</p>
                    <div className="dx-actions">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("docsPage.cta")}</a>
                        <a href="#interview" className="btn btn-ghost">{t("docsPage.ctaInterview")}</a>
                    </div>
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
                                <li key={s.name} className="dx-service">
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
                <div className="container">
                    <h2 className="dx-h2">{t("docsPage.expTitle")}</h2>
                    <ol className="dx-timeline">
                        {experience.map((e) => (
                            <li key={e.where} className="dx-job">
                                <div className="dx-job-head">
                                    <h3>{e.where}</h3>
                                    <span className="dx-chip">{e.role}</span>
                                </div>
                                <p>{e.text}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* INTERVIEW */}
            <section className="dx-section" id="interview">
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
                    <h2 className="dx-h2">{t("docsPage.faqTitle")}</h2>
                    <div className="dx-acc dx-acc--faq">
                        {faq.map((f) => (
                            <details key={f.q}>
                                <summary><span>{f.q}</span></summary>
                                <p>{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <style>{`
                .dx-hero{ padding: clamp(48px, 8vw, 96px) 20px clamp(32px, 5vw, 56px); background: linear-gradient(180deg, color-mix(in srgb, var(--accent) 7%, var(--bg)) 0%, var(--bg) 100%) }
                .dx-hero-inner{ max-width: 820px }
                .dx-hero h1{ margin: 0 0 18px; font-size: clamp(34px, 5.4vw, 60px) }
                .dx-lead{ margin: 0 0 28px; font-size: clamp(1.02rem, 1.6vw, 1.2rem); line-height: 1.65; color: var(--muted); max-width: 62ch }
                .dx-actions{ display: flex; flex-wrap: wrap; gap: 12px }
                .dx-hero .eyebrow{ margin-bottom: 14px }

                .dx-section{ padding: clamp(48px, 7vw, 88px) 20px }
                .dx-alt{ background: var(--bg-alt) }
                .dx-h2{ margin: 0 0 32px; font-size: clamp(1.5rem, 2.6vw, 2rem) }
                .dx-h2--left{ margin-bottom: 8px }

                .dx-services{ list-style: none; margin: 0; padding: 0; display: grid; gap: 16px; grid-template-columns: repeat(4, 1fr) }
                .dx-service{ padding: 24px; border: 1px solid var(--border); border-radius: var(--radius); background: var(--bg); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease }
                .dx-service:hover{ transform: translateY(-3px); box-shadow: var(--shadow); border-color: color-mix(in srgb, var(--accent) 40%, transparent) }
                .dx-icon{ display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 16px; border-radius: 12px; background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--accent-ink) }
                .dx-icon svg{ width: 20px; height: 20px }
                .dx-service h3{ margin: 0 0 8px; font-size: 1.05rem }
                .dx-service p{ margin: 0; color: var(--muted); line-height: 1.6; font-size: .95rem }

                .dx-timeline{ list-style: none; margin: 0; padding: 0 0 0 22px; border-left: 2px solid color-mix(in srgb, var(--accent) 35%, transparent); display: grid; gap: 28px; max-width: 760px }
                .dx-job{ position: relative }
                .dx-job::before{ content: ""; position: absolute; left: -29px; top: 7px; width: 12px; height: 12px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 4px var(--bg-alt) }
                .dx-job-head{ display: flex; flex-wrap: wrap; align-items: center; gap: 8px 12px; margin-bottom: 6px }
                .dx-job h3{ margin: 0; font-size: 1.1rem }
                .dx-chip{ padding: 3px 10px; border-radius: 999px; background: color-mix(in srgb, var(--accent) 12%, transparent); color: var(--accent-ink); font-size: .82rem; font-weight: 600 }
                .dx-job p{ margin: 0; color: var(--muted); line-height: 1.65; max-width: 60ch }

                .dx-iv{ display: grid; gap: clamp(24px, 4vw, 56px); grid-template-columns: 280px minmax(0, 1fr); align-items: start }
                .dx-iv-side{ position: sticky; top: calc(var(--nav-h) + 24px) }
                .dx-iv-side figure{ margin: 0 }
                .dx-iv-side img{ width: 100%; height: auto; border-radius: 18px; box-shadow: var(--shadow) }
                .dx-iv-side figcaption{ margin-top: 10px; font-size: .85rem; color: var(--muted) }
                .dx-iv-sub{ margin: 0 0 24px; color: var(--muted); line-height: 1.6 }
                .dx-iv-sub span{ display: block; margin-top: 2px; font-size: .85rem }
                .dx-quote{ margin: 0 0 24px; padding: 4px 0 4px 20px; border-left: 3px solid var(--accent) }
                .dx-quote p{ margin: 0 0 6px; font-size: clamp(1.15rem, 2vw, 1.45rem); line-height: 1.4; font-weight: 600; letter-spacing: -.01em }
                .dx-quote cite{ font-style: normal; font-size: .85rem; color: var(--muted) }
                .dx-iv-lead{ margin: 0 0 20px; font-weight: 600; line-height: 1.6 }

                .dx-acc{ display: grid; gap: 10px; max-width: 70ch }
                .dx-acc details{ border: 1px solid var(--border); border-radius: 12px; background: var(--bg); overflow: hidden }
                .dx-acc details[open]{ border-color: color-mix(in srgb, var(--accent) 35%, transparent) }
                .dx-acc summary{ display: flex; gap: 14px; align-items: baseline; padding: 14px 16px; cursor: pointer; font-weight: 600; line-height: 1.4; list-style: none }
                .dx-acc summary::-webkit-details-marker{ display: none }
                .dx-acc summary::after{ content: "+"; margin-left: auto; padding-left: 12px; font-weight: 400; font-size: 1.3rem; color: var(--accent-ink); transition: transform .2s ease }
                .dx-acc details[open] summary::after{ content: "–" }
                .dx-acc summary:focus-visible{ outline: 2px solid var(--accent); outline-offset: -2px }
                .dx-num{ font-size: .8rem; color: var(--accent-ink); font-variant-numeric: tabular-nums }
                .dx-acc--faq details p{ padding-left: 16px }
                .dx-acc details p{ margin: 0; padding: 0 16px 18px 46px; color: var(--muted); line-height: 1.75 }


                @media (max-width: 1000px){ .dx-services{ grid-template-columns: repeat(2, 1fr) } }
                @media (max-width: 760px){
                    .dx-iv{ grid-template-columns: 1fr }
                    .dx-iv-side{ position: static; max-width: 220px }
                    .dx-acc details p{ padding-left: 16px }
                }
                @media (max-width: 520px){
                    .dx-services{ grid-template-columns: 1fr }
                    .dx-actions .btn{ flex: 1 1 100%; justify-content: center }
                }
            `}</style>
        </>
    );
}
