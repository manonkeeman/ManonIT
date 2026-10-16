import { useTranslation } from "react-i18next";
import { FiCode, FiPenTool, FiEdit3, FiSearch, FiCamera, FiShare2, FiCalendar } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import { Link } from "../assets/Components/LocaleLink.jsx";
import ServiceStyles from "./ServiceStyles.jsx";

export default function Services() {
    const { t, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const euro = (n) => new Intl.NumberFormat(i18n.language || "nl", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);

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
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow><FiCalendar aria-hidden="true"/>{t("hero.ctaContact")}</a>
                    </div>
                </div>
            </section>


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
                            <Link to="/hoe-werkt-het" className="home-pricing-faq">{t("nav.how")}</Link>
                            <Link to="/faq" className="home-pricing-faq">{t("faq.label")}</Link>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceStyles />
        </>
    );
}
