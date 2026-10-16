import { useTranslation } from "react-i18next";
import { FiCheck, FiShield, FiCalendar, FiArrowRight, FiFileText } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import ServiceStyles from "./ServiceStyles.jsx";

// Abonnement: bedragen zijn cijfers, de teksten komen uit de vertaalbestanden.
// Totaal over 24 maanden = opstart + 24 x maandprijs.
const SUB_MONTHS = 24;
const SUB_PLANS = [
    { key: "start",  setup: 295, monthly: 39 },
    { key: "growth", setup: 495, monthly: 59, featured: true },
    { key: "brand",  setup: 795, monthly: 79 },
];

export default function Pricing() {
    const { t, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const euro = (n) => new Intl.NumberFormat(i18n.language || "nl", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

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
            <Seo
                title={t("seo.pricing.title")}
                description={t("seo.pricing.description")}
                path="/tarieven"
            />

            <section className="section page-head">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("pricing.label")}</p>
                        <h1>{t("pricingPage.title")}</h1>
                        <p>{t("pricingPage.intro")}</p>
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
                                    <a href={`${prefix}/#contact`} className="btn sub-btn">
                                        <FiCalendar aria-hidden="true"/>
                                        <span>{t("subscription.cta")}</span>
                                        <FiArrowRight className="sub-btn-arrow" aria-hidden="true"/>
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
                                    <a href={`${prefix}/#contact`} className="btn sub-btn">
                                        <FiFileText aria-hidden="true"/>
                                        <span>{t("pricing.cta")}</span>
                                        <FiArrowRight className="sub-btn-arrow" aria-hidden="true"/>
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
                                        <a href={`${prefix}/#contact`} className="btn sub-btn">
                                        <FiShield aria-hidden="true"/>
                                        <span>{t("care.cta")}</span>
                                        <FiArrowRight className="sub-btn-arrow" aria-hidden="true"/>
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
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow><FiCalendar aria-hidden="true"/>{t("howItWorks.cta")}</a>
                    </div>
                </div>
            </section>

            <ServiceStyles />
        </>
    );
}
