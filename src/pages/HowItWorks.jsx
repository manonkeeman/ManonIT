import { useTranslation } from "react-i18next";
import { FiCalendar } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";
import ServiceStyles from "./ServiceStyles.jsx";

export default function HowItWorks() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    const raw = t("howPage.steps", { returnObjects: true });
    const steps = Array.isArray(raw) ? raw : [];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": t("howPage.title"),
        "step": steps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": s.title,
            "text": s.text,
        })),
    };

    return (
        <>
            <Seo
                title={t("seo.how.title")}
                description={t("seo.how.description")}
                path="/hoe-werkt-het"
            />
            <section className="svc-steps-section section section-alt page-head" id="hoe-werkt-het">
                <JsonLd data={howToSchema} />
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("howItWorks.label")}</p>
                        <h1>{t("howPage.title")}</h1>
                        <p>{t("howPage.intro")}</p>
                    </div>

                    <div className="svc-steps">
                        {steps.map((s, i) => (
                            <div key={s.title} className="svc-step">
                                <div className="svc-step-nr">{String(i + 1).padStart(2, "0")}</div>
                                <h2 className="svc-step-title">{s.title}</h2>
                                <p className="svc-step-text">{s.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow><FiCalendar aria-hidden="true"/>{t("hero.ctaContact")}</a>
                    </div>
                </div>
            </section>
            <ServiceStyles />
        </>
    );
}
