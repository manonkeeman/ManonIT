import { useTranslation } from "react-i18next";
import { Link } from "../assets/Components/LocaleLink.jsx";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";

// Antwoorden zijn platte tekst: alinea's gescheiden door een lege regel,
// regels die met "•" beginnen worden een lijst en de regel erboven een kopje.
function FaqAnswer({ text }) {
    return text.split("\n\n").map((block, i) => {
        const lines = block.split("\n");
        const bullets = lines.filter((l) => l.startsWith("•"));
        if (!bullets.length) return <p key={i}>{block}</p>;
        const heading = lines[0].startsWith("•") ? null : lines[0];
        return (
            <div key={i}>
                {heading && <p className="faq-a-head">{heading}</p>}
                <ul>{bullets.map((b) => <li key={b}>{b.replace(/^•\s*/, "")}</li>)}</ul>
            </div>
        );
    });
}

export default function Faq() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    const items = t("faq.items", { returnObjects: true });

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
        })),
    };

    return (
        <section className="section section-alt">
            <Seo title={t("seo.faq.title")} description={t("seo.faq.description")} path="/faq" />
            <JsonLd data={faqSchema} />

            <div className="faq-container">
                <Link to="/" className="back-link">← {t("nav.home")}</Link>

                <header className="faq-header">
                    <p className="faq-label">{t("faq.label")}</p>
                    <h1>{t("faq.title")}</h1>
                    <p className="faq-intro">{t("faq.intro")}</p>
                </header>

                <div className="faq-list">
                    {items.map(({ q, a, link }) => (
                        <details className="faq-item card" key={q}>
                            <summary className="faq-q">{q}</summary>
                            <div className="faq-a">
                                <FaqAnswer text={a} />
                                {/* Optionele verwijzing, bijv. naar het tarievenblok op de homepage */}
                                {link && <a href={`${prefix}${link.href}`} className="faq-link">{link.label} →</a>}
                            </div>
                        </details>
                    ))}
                </div>

                <div className="faq-cta">
                    <p>{t("faq.ctaText")}</p>
                    <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("hero.ctaContact")}</a>
                </div>
            </div>

            <style>{`
        .faq-container {
          max-width: 72ch;
          margin: 0 auto;
          padding: clamp(24px, 4vw, 64px) clamp(16px, 3vw, 32px);
        }
        .back-link { display: inline-block; color: var(--accent); text-decoration: none; font-size: .92rem; margin-bottom: 16px; }
        .back-link:hover { text-decoration: underline; }

        .faq-header { margin: 16px 0 32px; }
        .faq-label {
          font-size: .78rem; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; color: var(--accent); margin: 0 0 8px;
        }
        .faq-header h1 { margin: 0 0 12px; }
        .faq-intro { color: var(--muted); line-height: 1.65; margin: 0; max-width: 60ch; }

        .faq-list { display: flex; flex-direction: column; gap: 12px; }
        .faq-item {
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-alt);
          padding: 18px 22px;
        }
        .faq-q {
          cursor: pointer;
          font-weight: 600;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .faq-q::-webkit-details-marker { display: none; }
        .faq-q::after {
          content: "+";
          flex-shrink: 0;
          font-size: 1.3rem;
          color: var(--accent);
          transition: transform .2s ease;
        }
        .faq-item[open] .faq-q::after { transform: rotate(45deg); }
        .faq-a {
          margin: 14px 0 0;
          color: var(--muted);
          line-height: 1.7;
        }
        .faq-a p { margin: 0 0 14px; }
        .faq-a p:last-child { margin-bottom: 0; }
        .faq-link { display: inline-block; margin-top: 12px; color: var(--accent-ink); font-weight: 600; }
        .faq-a-head { color: var(--text); font-weight: 600; margin: 0 0 4px !important; }
        .faq-a ul { margin: 0 0 16px; padding-left: 20px; }
        .faq-a li::marker { color: var(--accent); }

        .faq-cta {
          margin-top: 40px;
          padding: 28px;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: var(--bg-alt);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
        }
        .faq-cta p { margin: 0; color: var(--muted); }
      `}</style>
        </section>
    );
}
