import { useTranslation } from "react-i18next";
import { FiCode, FiPenTool, FiEdit3, FiSearch, FiCamera, FiShare2, FiCheck, FiShield } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import JsonLd from "../assets/Components/JsonLd.jsx";

// Abonnement: bedragen zijn cijfers, de teksten komen uit de vertaalbestanden.
// Totaal over 24 maanden = opstart + 24 x maandprijs.
const SUB_MONTHS = 24;
const SUB_PLANS = [
    { key: "start",  setup: 295, monthly: 39 },
    { key: "growth", setup: 495, monthly: 59, featured: true },
    { key: "brand",  setup: 795, monthly: 79 },
];

export default function Services() {
    const { t, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const euro = (n) => new Intl.NumberFormat(i18n.language || "nl", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

    const faqGroups = t("faq.groups", { returnObjects: true });
    const faqList = Array.isArray(faqGroups) ? faqGroups : [];
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqList.flatMap((g) => (g.items || []).map((it) => ({
            "@type": "Question",
            "name": it.q,
            "acceptedAnswer": { "@type": "Answer", "text": it.a },
        }))),
    };

    const services = [
        { key: "websites", Icon: FiCode },
        { key: "design",   Icon: FiPenTool },
        { key: "copy",     Icon: FiEdit3 },
        { key: "seo",      Icon: FiSearch },
        { key: "media",    Icon: FiCamera },
        { key: "social",   Icon: FiShare2 },
    ];

    const packages = [
        { key: "basic",  price: "€1.200" },
        { key: "cms",    price: "€2.450", featured: true },
        { key: "custom", price: "€4.250" },
    ];

    const plans = [
        { key: "basic",  price: "€120" },
        { key: "growth", price: "€240", featured: true },
    ];

    const steps = [
        { nr: "01", key: "meet" },
        { nr: "02", key: "quote" },
        { nr: "03", key: "build" },
        { nr: "04", key: "launch" },
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
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("hero.ctaContact")}</a>
                    </div>
                </div>
            </section>

            {/* ── ABONNEMENT ──────────────────────────────── */}
            <section className="svc-price-section section section-alt" id="abonnement">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("subscription.label")}</p>
                        <h2>{t("subscription.title")}</h2>
                        <p>{t("subscription.intro")}</p>
                    </div>

                    <div className="price-grid">
                        {SUB_PLANS.map((p) => {
                            const items = t(`subscription.plans.${p.key}.items`, { returnObjects: true });
                            return (
                                <article key={p.key} className={`price-card ${p.featured ? "price-card--featured" : ""}`}>
                                    {p.featured && <span className="price-badge">{t("subscription.popular")}</span>}
                                    <h3 className="price-name">{t(`subscription.plans.${p.key}.name`)}</h3>
                                    <p className="price-tagline">{t(`subscription.plans.${p.key}.tagline`)}</p>
                                    <p className="price-amount">
                                        <strong>{euro(p.monthly)}</strong>
                                        <span className="price-vat">{t("subscription.perMonth")}</span>
                                    </p>
                                    <p className="sub-setup">
                                        <strong>{euro(p.setup)}</strong> {t("subscription.setup")}
                                    </p>
                                    <ul className="price-list">
                                        {Array.isArray(items) && items.map((it) => (
                                            <li key={it}><FiCheck aria-hidden="true"/>{it}</li>
                                        ))}
                                    </ul>
                                    <p className="price-time">
                                        {t("subscription.total", { total: euro(p.setup + p.monthly * SUB_MONTHS) })}
                                    </p>
                                    <a href={`${prefix}/#contact`} className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} price-btn`}>
                                        {t("subscription.cta")}
                                    </a>
                                </article>
                            );
                        })}
                    </div>

                    <div className="sub-info">
                        <div className="sub-card">
                            <h3>{t("subscription.termsTitle")}</h3>
                            <ul className="price-list sub-terms">
                                {(t("subscription.terms", { returnObjects: true }) || []).map((it) => (
                                    <li key={it}><FiCheck aria-hidden="true"/>{it}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="sub-card">
                            <h3>{t("subscription.sketchTitle")}</h3>
                            <p>{t("subscription.sketch")}</p>
                            <p className="sub-byline">{t("subscription.byline")}</p>
                        </div>
                    </div>

                    <div className="price-extras">
                        <p><strong>{t("subscription.noOtherTitle")}</strong> {t("subscription.noOther")}</p>
                        <p>{t("subscription.more")}</p>
                    </div>
                </div>
            </section>

            {/* ── TARIEVEN ────────────────────────────────── */}
            <section className="svc-price-section section" id="tarieven">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("pricing.label")}</p>
                        <h2>{t("pricing.title")}</h2>
                        <p>{t("pricing.intro")}</p>
                    </div>

                    <div className="price-grid">
                        {packages.map((p) => {
                            const items = t(`pricing.packages.${p.key}.items`, { returnObjects: true });
                            return (
                                <article key={p.key} className={`price-card ${p.featured ? "price-card--featured" : ""}`}>
                                    {p.featured && <span className="price-badge">{t("pricing.popular")}</span>}
                                    <h3 className="price-name">{t(`pricing.packages.${p.key}.name`)}</h3>
                                    <p className="price-tagline">{t(`pricing.packages.${p.key}.tagline`)}</p>
                                    <p className="price-amount">
                                        <span className="price-from">{t("pricing.from")}</span>
                                        <strong>{p.price}</strong>
                                        <span className="price-vat">{t("pricing.vat")}</span>
                                    </p>
                                    <ul className="price-list">
                                        {Array.isArray(items) && items.map((it) => (
                                            <li key={it}><FiCheck aria-hidden="true"/>{it}</li>
                                        ))}
                                    </ul>
                                    <p className="price-time">{t(`pricing.packages.${p.key}.time`)}</p>
                                    <a href={`${prefix}/#contact`} className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} price-btn`}>
                                        {t("pricing.cta")}
                                    </a>
                                </article>
                            );
                        })}
                    </div>

                    {/* Onderhoud: terugkerend abonnement */}
                    <div className="care" id="onderhoud">
                        <div className="care-intro">
                            <span className="care-icon"><FiShield aria-hidden="true"/></span>
                            <p className="eyebrow">{t("care.label")}</p>
                            <h3 className="care-title">{t("care.title")}</h3>
                            <p className="care-text">{t("care.intro")}</p>
                            <p className="care-terms">{t("care.terms")}</p>
                        </div>
                        <div className="care-plans">
                            {plans.map((p) => {
                                const items = t(`care.plans.${p.key}.items`, { returnObjects: true });
                                return (
                                    <article key={p.key} className={`care-plan ${p.featured ? "care-plan--featured" : ""}`}>
                                        {p.featured && <span className="price-badge">{t("care.recommended")}</span>}
                                        <h4 className="care-plan-name">{t(`care.plans.${p.key}.name`)}</h4>
                                        <p className="price-amount">
                                            <strong>{p.price}</strong>
                                            <span className="price-vat">{t("care.perMonth")}</span>
                                        </p>
                                        <p className="care-hours">{t(`care.plans.${p.key}.hours`)}</p>
                                        <ul className="price-list">
                                            {Array.isArray(items) && items.map((it) => (
                                                <li key={it}><FiCheck aria-hidden="true"/>{it}</li>
                                            ))}
                                        </ul>
                                        <a href={`${prefix}/#contact`} className={`btn ${p.featured ? "btn-primary" : "btn-ghost"} price-btn`}>
                                            {t("care.cta")}
                                        </a>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <div className="price-extras">
                        <p><strong>{t("pricing.alwaysTitle")}</strong> {t("pricing.always")}</p>
                        <p><strong>{t("pricing.extrasTitle")}</strong> {t("pricing.extras")}</p>
                    </div>
                </div>
            </section>

            {/* ── VEELGESTELDE VRAGEN ─────────────────────── */}
            <section className="svc-faq-section section" id="veelgestelde-vragen">
                <JsonLd data={faqSchema} />
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("faq.label")}</p>
                        <h2>{t("faq.title")}</h2>
                    </div>

                    <div className="faq-groups">
                        {faqList.map((g) => (
                            <div key={g.title} className="faq-group">
                                <h3 className="faq-group-title">{g.title}</h3>
                                {(g.items || []).map((it) => (
                                    <details key={it.q} className="faq-item">
                                        <summary>{it.q}</summary>
                                        <p>{it.a}</p>
                                    </details>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── ZO WERKT HET ────────────────────────────── */}
            <section className="svc-steps-section section section-alt" id="hoe-werkt-het">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("howItWorks.label")}</p>
                        <h2>{t("howItWorks.title")}</h2>
                        <p>{t("howItWorks.intro")}</p>
                    </div>

                    <div className="svc-steps">
                        {steps.map((s) => (
                            <div key={s.key} className="svc-step">
                                <div className="svc-step-nr">{s.nr}</div>
                                <h3 className="svc-step-title">{t(`howItWorks.steps.${s.key}.title`)}</h3>
                                <p className="svc-step-text">{t(`howItWorks.steps.${s.key}.text`)}</p>
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("howItWorks.cta")}</a>
                    </div>
                </div>
            </section>

            <style>{`
                .svc-section {
                    padding: clamp(56px, 8vw, 96px) 20px;
                }
                .svc-steps-section {
                    padding: clamp(56px, 8vw, 96px) 20px;
                }
                .svc-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--accent-ink);
                    margin: 0 0 10px;
                }
                .svc-intro {
                    color: var(--muted);
                    font-size: 0.96rem;
                    max-width: 58ch;
                    line-height: 1.65;
                    margin: 8px 0 40px;
                }

                /* Services grid */
                .svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                @media (max-width: 760px) {
                    .svc-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 480px) {
                    .svc-grid { grid-template-columns: 1fr; }
                }

                .svc-card {
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 18px;
                    padding: 28px 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
                }
                .svc-card:hover {
                    border-color: color-mix(in srgb, var(--accent) 45%, transparent);
                    box-shadow: 0 18px 40px -18px rgba(0,0,0,.25);
                    transform: translateY(-3px);
                }
                .svc-icon {
                    width: 48px; height: 48px;
                    border-radius: 14px;
                    display: inline-flex; align-items: center; justify-content: center;
                    background: color-mix(in srgb, var(--accent) 12%, #fff);
                    color: var(--accent-ink);
                    font-size: 1.35rem;
                    margin-bottom: 6px;
                }
                .svc-name {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin: 0;
                    color: var(--text);
                }
                .svc-desc {
                    font-size: 0.93rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                    flex: 1;
                }
                .svc-tags {
                    font-size: 0.75rem;
                    color: var(--muted);
                    margin: 0;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                }

                /* Tarieven */
                .svc-price-section { padding: clamp(56px, 8vw, 96px) 20px; }
                .price-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    align-items: stretch;
                }
                .price-card {
                    position: relative;
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 32px 28px;
                    display: flex;
                    flex-direction: column;
                }
                .price-card--featured {
                    border: 2px solid var(--accent);
                    box-shadow: 0 24px 48px -24px rgba(0,0,0,.18);
                }
                .price-badge {
                    position: absolute; top: -13px; left: 28px;
                    background: var(--accent-ink); color: #fff;
                    font-size: .75rem; font-weight: 600;
                    padding: 5px 12px; border-radius: 980px;
                }
                .price-name { font-size: 1.25rem; margin: 0 0 6px; }
                .price-tagline { color: var(--muted); font-size: .92rem; line-height: 1.5; margin: 0 0 20px; min-height: 2.8em; }
                .price-amount { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; margin: 0 0 22px; }
                .price-amount strong { font-size: 2.3rem; font-weight: 700; letter-spacing: -.03em; color: var(--text); line-height: 1; }
                .price-from, .price-vat { font-size: .85rem; color: var(--muted); }
                .price-list {
                    list-style: none; margin: 0 0 20px; padding: 20px 0 0;
                    border-top: 1px solid var(--border);
                    display: grid; gap: 10px;
                    flex: 1;
                    align-content: start;
                }
                .price-list li { display: flex; gap: 10px; font-size: .93rem; line-height: 1.45; }
                .price-list svg { flex-shrink: 0; margin-top: 3px; color: var(--accent-ink); }
                .price-time { font-size: .85rem; color: var(--muted); margin: 0 0 16px; }
                .price-btn { width: 100%; }
                .price-extras {
                    margin-top: 32px;
                    background: var(--bg-alt);
                    border-radius: 18px;
                    padding: 24px 28px;
                    font-size: .92rem; line-height: 1.6; color: var(--muted);
                }
                .price-extras p { margin: 0 0 8px; }
                .price-extras strong { color: var(--text); font-weight: 600; }
                @media (max-width: 900px) {
                    .price-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; gap: 28px; }
                    .price-tagline { min-height: 0; }
                }

                /* Onderhoud */
                .care {
                    scroll-margin-top: calc(var(--nav-h) + 16px);
                    margin-top: 48px;
                    background: var(--bg-alt);
                    border-radius: 24px;
                    padding: clamp(24px, 4vw, 48px);
                    display: grid;
                    grid-template-columns: .9fr 1.6fr;
                    gap: clamp(24px, 4vw, 48px);
                    align-items: center;
                }
                .care-icon {
                    width: 48px; height: 48px; border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    background: #fff; color: var(--accent-ink); font-size: 1.35rem;
                    margin-bottom: 16px;
                }
                .care-title { font-size: clamp(1.5rem, 2.4vw, 2rem); margin: 0 0 12px; }
                .care-text { color: var(--muted); line-height: 1.65; margin: 0; }
                .care-terms {
                    display: inline-block; margin: 16px 0 0;
                    font-size: .85rem; font-weight: 500; color: var(--text);
                    background: #fff; border-radius: 10px; padding: 8px 14px;
                }
                .care-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .care-plan {
                    position: relative;
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 28px 24px;
                    display: flex; flex-direction: column;
                }
                .care-plan--featured { border: 2px solid var(--accent); }
                .care-plan-name { font-size: 1.1rem; font-weight: 700; margin: 0 0 12px; letter-spacing: -.01em; }
                .care-plan .price-amount { margin-bottom: 4px; }
                .care-hours { font-size: .88rem; color: var(--muted); margin: 0 0 18px; }
                @media (max-width: 900px) {
                    .care { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .care-plans { grid-template-columns: 1fr; gap: 28px; }
                }

                /* Abonnement */
                .sub-setup { font-size: .92rem; color: var(--muted); margin: -10px 0 20px; }
                .sub-setup strong { color: var(--text); font-weight: 700; }
                .sub-info {
                    margin-top: 32px;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                    gap: 20px;
                }
                .sub-card { background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 28px; }
                .sub-card h3 { font-size: 1.15rem; margin: 0 0 14px; }
                .sub-card p { color: var(--muted); line-height: 1.6; margin: 0 0 12px; font-size: .95rem; }
                .sub-terms { border-top: 0; padding-top: 0; margin: 0; }
                .sub-byline { color: var(--text) !important; font-weight: 500; }
                @media (max-width: 900px) {
                    .sub-info { grid-template-columns: 1fr; }
                }

                /* Veelgestelde vragen */
                .svc-faq-section { padding: clamp(56px, 8vw, 96px) 20px; }
                .faq-groups { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 40px; align-items: start; }
                .faq-group-title { font-size: 1.05rem; margin: 0 0 12px; color: var(--accent-ink); }
                .faq-item { border-top: 1px solid var(--border); padding: 14px 0; }
                .faq-item:last-child { border-bottom: 1px solid var(--border); }
                .faq-item summary { cursor: pointer; font-weight: 600; line-height: 1.4; }
                .faq-item p { color: var(--muted); line-height: 1.65; margin: 10px 0 0; font-size: .95rem; }
                @media (max-width: 900px) {
                    .faq-groups { grid-template-columns: 1fr; }
                }

                /* Steps */
                .svc-steps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    position: relative;
                }
                @media (max-width: 760px) {
                    .svc-steps { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 440px) {
                    .svc-steps { grid-template-columns: 1fr; }
                }

                .svc-step {
                    background: #fff;
                    border-radius: 18px;
                    padding: 28px 24px;
                }
                .svc-step-nr {
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    display: inline-flex; align-items: center; justify-content: center;
                    background: color-mix(in srgb, var(--accent) 14%, #fff);
                    color: var(--accent-ink);
                    font-size: .95rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .svc-step-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin: 0 0 8px;
                    color: var(--text);
                }
                .svc-step-text {
                    font-size: 0.86rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                }

                .svc-steps-cta {
                    margin-top: 44px;
                    text-align: center;
                }
            `}</style>
        </>
    );
}
