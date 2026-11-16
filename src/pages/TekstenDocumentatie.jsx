import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiEdit3, FiFileText, FiLayers, FiBookOpen, FiCalendar } from "react-icons/fi";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import Seo from "../assets/Components/Seo.jsx";
import ServiceStyles from "./ServiceStyles.jsx";
import interview from "../content/interviewDaanDekker.json";

const ICONS = [FiEdit3, FiFileText, FiLayers, FiBookOpen];

export default function TekstenDocumentatie() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    const [full, setFull] = useState(false);
    const shown = full ? interview.qa : interview.qa.slice(0, 3);
    const items = t("docsPage.items", { returnObjects: true });
    const exp = t("docsPage.exp", { returnObjects: true });
    const list = Array.isArray(items) ? items : [];
    const experience = Array.isArray(exp) ? exp : [];

    return (
        <>
            <Seo
                title={t("docsPage.seo.title")}
                description={t("docsPage.seo.description")}
                path="/teksten-documentatie"
            />

            <section className="section page-head">
                <div className="container">
                    <div className="section-head">
                        <p className="eyebrow">{t("docsPage.eyebrow")}</p>
                        <h1>{t("docsPage.title")}</h1>
                        <p>{t("docsPage.intro")}</p>
                    </div>
                </div>
            </section>

            <section className="svc-section">
                <div className="container">
                    <div className="svc-grid">
                        {list.map((s, i) => {
                            const Icon = ICONS[i] || FiEdit3;
                            return (
                                <div key={s.name} className="svc-card">
                                    <span className="svc-icon"><Icon aria-hidden="true" /></span>
                                    <h2 className="svc-name">{s.name}</h2>
                                    <p className="svc-desc">{s.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="svc-section">
                <div className="container">
                    <div className="docs-iv">
                        <figure className="docs-iv-photo">
                            <img src="/teksten/daan-dekker.jpg" alt={t("docsPage.interview.caption")} width="480" height="640" loading="lazy" />
                            <figcaption>{t("docsPage.interview.caption")}</figcaption>
                        </figure>
                        <div className="docs-iv-body">
                            <p className="eyebrow">{t("docsPage.interview.label")}</p>
                            <h2>{t("docsPage.interview.title")}</h2>
                            <p className="docs-iv-sub">{t("docsPage.interview.sub")}</p>
                            <p className="docs-iv-note">{t("docsPage.interview.note")}</p>
                            <p lang="nl" className="docs-iv-lead">{interview.lead}</p>
                            <dl lang="nl" className="docs-iv-qa">
                                {shown.map((x, i) => (
                                    <div key={x.q}>
                                        <dt>{i + 1}. {x.q}</dt>
                                        <dd>{x.a}</dd>
                                    </div>
                                ))}
                            </dl>
                            <button type="button" className="btn" aria-expanded={full} onClick={() => setFull(!full)}>
                                {full ? t("docsPage.interview.less") : t("docsPage.interview.more")}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="svc-section section-alt">
                <div className="container">
                    <div className="section-head">
                        <h2>{t("docsPage.expTitle")}</h2>
                    </div>
                    <ul className="docs-exp">
                        {experience.map((e) => (
                            <li key={e.where} className="docs-exp-item">
                                <p className="docs-exp-where">{e.where}</p>
                                <p className="docs-exp-role">{e.role}</p>
                                <p className="docs-exp-text">{e.text}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="svc-steps-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>
                            <FiCalendar aria-hidden="true" />{t("docsPage.cta")}
                        </a>
                    </div>
                </div>
            </section>

            <ServiceStyles />
            <style>{`
                .docs-iv{ display:grid; gap:32px; grid-template-columns:minmax(0,260px) minmax(0,1fr); align-items:start }
                .docs-iv-photo{ margin:0 }
                .docs-iv-photo img{ width:100%; height:auto; border-radius:14px; display:block }
                .docs-iv-photo figcaption{ margin-top:8px; font-size:.85rem; color:var(--muted) }
                .docs-iv-body h2{ margin:0 0 8px }
                .docs-iv-sub{ margin:0 0 4px; color:var(--muted) }
                .docs-iv-note{ margin:0 0 16px; font-size:.85rem; color:var(--muted) }
                .docs-iv-lead{ font-weight:600; line-height:1.6 }
                .docs-iv-qa div{ margin:0 0 18px }
                .docs-iv-qa dt{ font-weight:700; margin:0 0 6px }
                .docs-iv-qa dd{ margin:0; line-height:1.7; color:var(--muted) }
                @media (max-width:720px){ .docs-iv{ grid-template-columns:1fr } .docs-iv-photo{ max-width:260px } }
                .docs-exp{ list-style:none; margin:32px 0 0; padding:0; display:grid; gap:20px; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)) }
                .docs-exp-item{ padding:22px; border:1px solid var(--border, rgba(0,0,0,.12)); border-radius:14px; background:var(--card, transparent) }
                .docs-exp-where{ margin:0 0 4px; font-weight:700 }
                .docs-exp-role{ margin:0 0 10px; color:var(--accent-ink); font-size:.9rem; font-weight:600 }
                .docs-exp-text{ margin:0; color:var(--muted); line-height:1.6 }
            `}</style>
        </>
    );
}
