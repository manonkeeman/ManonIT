import { useTranslation } from "react-i18next";
import { FiCode, FiPenTool, FiEdit3, FiSearch, FiCamera, FiShare2, FiCalendar } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import { Link } from "../assets/Components/LocaleLink.jsx";
import ServiceStyles from "./ServiceStyles.jsx";

export default function Services() {
    const { t, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const euro = (n) => new Intl.NumberFormat(i18n.language || "nl", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

    const docsItems = t("docsPage.items", { returnObjects: true });
    const docsExp = t("docsPage.exp", { returnObjects: true });

    const services = [
        { key: "websites", Icon: FiCode },
        { key: "design",   Icon: FiPenTool },
        { key: "copy",     Icon: FiEdit3 },
        { key: "seo",      Icon: FiSearch },
        { key: "media",    Icon: FiCamera },
        { key: "social",   Icon: FiShare2 },
    ];

    return (
        <>
            {/* ── WAT IK DOE ──────────────────────────────── */}
            <section className="svc-section section-alt" id="services">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("services.label")}</p>
                        <h2>{t("services.title")}</h2>
                        <p>{t("services.intro")}</p>
                    </div>

                    <div className="svc-grid">
                        {services.map((s) => (
                            <div key={s.key} className="svc-card">
                                <span className="svc-icon"><s.Icon aria-hidden="true"/></span>
                                <h3 className="svc-name">{t(`services.items.${s.key}.name`)}</h3>
                                <p className="svc-desc">{t(`services.items.${s.key}.desc`)}</p>
                                <p className="svc-tags">{t(`services.items.${s.key}.tags`)}</p>
                                {s.key === "copy" && (
                                    <Link to="/teksten-documentatie" className="svc-more">{t("docsPage.ctaHome")} →</Link>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow><FiCalendar aria-hidden="true"/>{t("hero.ctaContact")}</a>
                    </div>
                </div>
            </section>


            {/* ── NIEUW: TEKSTEN & DOCUMENTATIE ── */}
            <section className="hp-docs section" id="teksten-documentatie">
                <div className="container">
                    <div className="hp-docs-card">
                        <div className="hp-docs-copy">
                            <span className="hp-docs-badge">{t("docsPage.eyebrow")}</span>
                            <h2>{t("docsPage.title")}</h2>
                            <p>{t("docsPage.homeText")}</p>
                            <ul className="hp-docs-chips">
                                {(Array.isArray(docsItems) ? docsItems : []).map((i) => (
                                    <li key={i.name}>{i.name}</li>
                                ))}
                            </ul>
                            <div className="hp-docs-actions">
                                <Link to="/teksten-documentatie" className="btn btn-primary" data-arrow>{t("docsPage.ctaHome")}</Link>
                                <a href={`${prefix}/#contact`} className="hp-docs-link">{t("docsPage.cta")}</a>
                            </div>
                        </div>
                        <ul className="hp-docs-exp" aria-label={t("docsPage.expTitle")}>
                            {(Array.isArray(docsExp) ? docsExp : []).map((e) => (
                                <li key={e.where}><strong>{e.where}</strong><span>{e.role}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <style>{`
                .svc-more{ display:inline-block; margin-top:10px; font-weight:600; font-size:.9rem; color:var(--accent-ink); text-decoration:underline; text-underline-offset:3px }
                .hp-docs{ padding-top:clamp(32px,5vw,56px); padding-bottom:clamp(32px,5vw,56px) }
                .hp-docs-card{
                    display:grid; grid-template-columns:minmax(0,1.5fr) minmax(0,1fr); gap:clamp(24px,4vw,48px); align-items:center;
                    padding:clamp(24px,4vw,48px); border-radius:24px; color:#fff;
                    background:radial-gradient(120% 140% at 100% 0%, color-mix(in srgb, var(--accent) 38%, var(--dark)) 0%, var(--dark) 60%);
                }
                .hp-docs-badge{
                    display:inline-block; margin-bottom:14px; padding:4px 12px; border-radius:999px;
                    background:var(--accent); color:#fff; font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
                }
                .hp-docs-card h2{ margin:0 0 12px; color:#fff; font-size:clamp(1.6rem,3vw,2.3rem) }
                .hp-docs-copy p{ margin:0 0 18px; max-width:52ch; line-height:1.65; color:rgba(255,255,255,.78) }
                .hp-docs-chips{ list-style:none; margin:0 0 24px; padding:0; display:flex; flex-wrap:wrap; gap:8px }
                .hp-docs-chips li{ padding:5px 12px; border-radius:999px; border:1px solid rgba(255,255,255,.25); font-size:.85rem }
                .hp-docs-actions{ display:flex; flex-wrap:wrap; align-items:center; gap:14px 24px }
                .hp-docs-link{ color:#fff; font-weight:600; text-decoration:underline; text-underline-offset:4px }
                .hp-docs-link:hover, .hp-docs-link:focus-visible{ color:#fff; opacity:.8 }
                .hp-docs-exp{ list-style:none; margin:0; padding:0; display:grid; gap:10px }
                .hp-docs-exp li{ display:flex; flex-direction:column; gap:2px; padding:14px 16px; border-radius:14px; background:rgba(255,255,255,.08); border:1px solid rgba(255,255,255,.12) }
                .hp-docs-exp strong{ font-size:.95rem }
                .hp-docs-exp span{ font-size:.82rem; color:rgba(255,255,255,.7) }
                @media (max-width:860px){ .hp-docs-card{ grid-template-columns:1fr } }
                @media (max-width:480px){ .hp-docs-actions .btn{ flex:1 1 100%; justify-content:center } }
            `}</style>

            {/* ── TARIEVEN-BAND (verwijst naar /tarieven en /faq) ── */}
            <section className="home-pricing section" id="tarieven">
                <div className="container">
                    <div className="home-pricing-inner">
                        <div className="home-pricing-copy">
                            <h2>{t("homePricing.title", { price: euro(39) })}</h2>
                            <p>{t("homePricing.text")}</p>
                        </div>
                        <div className="home-pricing-actions">
                            <Link to="/tarieven" className="btn btn-primary" data-arrow>{t("homePricing.cta")}</Link>
                            <Link to="/werkwijze" className="home-pricing-faq">{t("nav.how")}</Link>
                            <Link to="/faq" className="home-pricing-faq">{t("faq.label")}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceStyles />
        </>
    );
}
