import { useTranslation } from "react-i18next";
import JsonLd from "../assets/Components/JsonLd.jsx";
import Seo from "../assets/Components/Seo.jsx";
import ServiceStyles from "./ServiceStyles.jsx";

export default function Faq() {
    const { t } = useTranslation();

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

    return (
        <>
            <Seo
                title={t("seo.faq.title")}
                description={t("seo.faq.description")}
                path="/faq"
            />
            <section className="svc-faq-section section page-head" id="veelgestelde-vragen">
                <JsonLd data={faqSchema} />
                <div className="container">
                    <div className="section-head faq-head">
                        <h1>{t("faq.label")}</h1>
                        <p>{t("faqPage.intro")}</p>
                    </div>

                    <div className="faq-groups">
                        {faqList.map((g) => (
                            <div key={g.title} className="faq-group">
                                <h2 className="faq-group-title">{g.title}</h2>
                                {(g.items || []).map((it) => (
                                    <details key={it.q} className="faq-item">
                                        <summary>{it.q}</summary>
                                        <p>{it.a}</p>
                                        {it.linkUrl && (
                                            <p><a href={it.linkUrl} target="_blank" rel="noreferrer noopener">{it.linkLabel} ↗</a></p>
                                        )}
                                    </details>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ServiceStyles />
        </>
    );
}
