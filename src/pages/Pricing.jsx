import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiShield, FiCalendar, FiArrowRight, FiFileText } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";
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

    const [mode, setMode] = useState("sub");
    useEffect(() => {
        const h = window.location.hash;
        if (h === "#onderhoud" || h === "#tarieven") setMode("proj");
    }, []);
    const pick = (m) => {
        setMode(m);
        requestAnimationFrame(() => document.getElementById("cmp-panels")?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };
    const labels = t("pricingCompare.labels", { returnObjects: true });
    const cmp = ["sub", "proj"].map((k) => ({
        k,
        values: t(`pricingCompare.${k}.values`, { returnObjects: true }),
    }));

    const offerSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": t("pricingPage.title"),
        "itemListElement": [
            ...SUB_PLANS.map((p, i) => ({
                "@type": "ListItem",
                "position": i + 1,
                "item": {
                    "@type": "Offer",
                    "name": t(`subscription.plans.${p.key}.name`),
                    "description": t(`subscription.plans.${p.key}.tagline`),
                    "priceCurrency": "EUR",
                    "priceSpecification": [
                        { "@type": "UnitPriceSpecification", "price": String(p.monthly), "priceCurrency": "EUR", "valueAddedTaxIncluded": false, "unitText": "MON", "billingDuration": "P24M" },
                        { "@type": "UnitPriceSpecification", "price": String(p.setup), "priceCurrency": "EUR", "valueAddedTaxIncluded": false },
                    ],
                    "seller": { "@id": "https://manonit.com/#manon" },
                },
            })),
            ...packages.map((p, i) => ({
                "@type": "ListItem",
                "position": SUB_PLANS.length + i + 1,
                "item": {
                    "@type": "Offer",
                    "name": t(`pricing.packages.${p.key}.name`),
                    "description": t(`pricing.packages.${p.key}.tagline`),
                    "priceCurrency": "EUR",
                    "priceSpecification": { "@type": "UnitPriceSpecification", "price": p.price.replace(/\D/g, ""), "priceCurrency": "EUR", "valueAddedTaxIncluded": false, "minPrice": p.price.replace(/\D/g, "") },
                    "seller": { "@id": "https://manonit.com/#manon" },
                },
            })),
        ],
    };

    return (
        <>
            <JsonLd data={offerSchema} />
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

            {/* ── OVERZICHT: maandelijks of eenmalig ─────── */}
            <section className="section cmp-section">
                <div className="container">
                    <div className="section-head">
                        <h2>{t("pricingCompare.title")}</h2>
                        <p>{t("pricingCompare.intro")}</p>
                    </div>
                    <div className="cmp-grid">
                        {cmp.map(({ k, values }) => (
                            <article key={k} className={`cmp-card cmp-card--${k}`}>
                                <p className="cmp-name">{t(`pricingCompare.${k}.name`)}</p>
                                <p className="cmp-tag">{t(`pricingCompare.${k}.tag`)}</p>
                                <dl className="cmp-rows">
                                    {Array.isArray(labels) && labels.map((l, i) => (
                                        <div key={l} className="cmp-row">
                                            <dt>{l}</dt>
                                            <dd>{Array.isArray(values) ? values[i] : ""}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <button type="button" className="btn sub-btn" onClick={() => pick(k)}>
                                    <span>{t(`pricingCompare.${k}.cta`)}</span>
                                    <FiArrowRight className="sub-btn-arrow" aria-hidden="true"/>
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <div id="cmp-panels" className="cmp-tabs-wrap">
                <div className="cmp-tabs" role="tablist">
                    <button type="button" role="tab" aria-selected={mode === "sub"} className={mode === "sub" ? "on" : ""} onClick={() => setMode("sub")}>{t("pricingCompare.tabSub")}</button>
                    <button type="button" role="tab" aria-selected={mode === "proj"} className={mode === "proj" ? "on" : ""} onClick={() => setMode("proj")}>{t("pricingCompare.tabProj")}</button>
                </div>
            </div>

            {/* ── ABONNEMENT ──────────────────────────────── */}
            <div hidden={mode !== "sub"}>
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
                        </div>
                    </div>

                    <div className="price-extras">
                        <p><strong>{t("subscription.noOtherTitle")}</strong> {t("subscription.noOther")}</p>
                        <p>{t("subscription.more")}</p>
                    </div>
                </div>
            </section>


            </div>

            {/* ── TARIEVEN ────────────────────────────────── */}
            <div hidden={mode !== "proj"}>
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


            </div>

            <ServiceStyles />
        </>
    );
}
