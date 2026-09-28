import { Link } from "../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import data from "../content/contentJournal.json";
import { toCard } from "../assets/Helpers/contentHelpers";

// Drie meest recente artikelen als teaser op de homepage
export default function HomeJournal() {
    const { t } = useTranslation();
    const items = [...data]
        .sort((a, b) => b.date.localeCompare(a.date))
        .slice(0, 3)
        .map(toCard);

    return (
        <section id="journal-preview" className="hj-section section-alt">
            <div className="container">
                <div className="hj-head">
                    <div>
                        <p className="eyebrow">{t("homeJournal.label")}</p>
                        <h2>{t("homeJournal.title")}</h2>
                    </div>
                    <Link to="/journal" className="btn btn-ghost" data-arrow>{t("homeJournal.all")}</Link>
                </div>

                <div className="hj-grid">
                    {items.map((item) => {
                        const base = item.cover.replace(/-\d+w\.\w+$/, "");
                        const isMultiSize = base !== item.cover;
                        const title = t(`journalSection.articles.${item.slug}.title`, { defaultValue: item.title });
                        const excerpt = t(`journalSection.articles.${item.slug}.excerpt`, { defaultValue: item.excerpt });
                        return (
                            <article key={item.slug} className="hj-card">
                                <Link to={`/journal/${item.slug}`} className="hj-link" aria-label={title}>
                                    <div className="hj-img">
                                        {isMultiSize ? (
                                            <picture>
                                                <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w`} sizes="(max-width: 760px) 100vw, 360px" />
                                                <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w`} sizes="(max-width: 760px) 100vw, 360px" />
                                                <img src={`${base}-800w.webp`} width="800" height="450" loading="lazy" decoding="async" alt="" style={{ objectPosition: item.imgPosition }} />
                                            </picture>
                                        ) : (
                                            <img src={item.cover} loading="lazy" decoding="async" alt="" style={{ objectPosition: item.imgPosition }} />
                                        )}
                                    </div>
                                    <div className="hj-body">
                                        <p className="hj-meta">{item.dateLabel}{item.readLabel && ` · ${item.readLabel}`}</p>
                                        <h3>{title}</h3>
                                        <p className="hj-excerpt">{excerpt}</p>
                                        <span className="hj-more">{t("homeJournal.read")} →</span>
                                    </div>
                                </Link>
                            </article>
                        );
                    })}
                </div>
            </div>

            <style>{`
        .hj-section{ padding: clamp(56px, 8vw, 96px) 20px; }
        .hj-head{
          display:flex; align-items:flex-end; justify-content:space-between; gap:20px;
          flex-wrap:wrap; margin-bottom:36px;
        }
        .hj-head h2{ margin:0; }
        .hj-grid{ display:grid; grid-template-columns:repeat(3, 1fr); gap:24px; }
        .hj-card{
          background:#fff; border:1px solid var(--border); border-radius:18px; overflow:hidden;
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .hj-card:hover{
          transform:translateY(-4px);
          border-color: color-mix(in srgb, var(--accent) 45%, transparent);
          box-shadow: 0 18px 40px -18px rgba(0,0,0,.28);
        }
        .hj-link{ display:flex; flex-direction:column; height:100%; color:inherit; }
        .hj-link:hover{ text-decoration:none !important; }
        .hj-img{ aspect-ratio:16/9; overflow:hidden; background:var(--bg-alt); }
        .hj-img img{ width:100%; height:100%; object-fit:cover; border-radius:0; transition:transform .4s ease; }
        .hj-card:hover .hj-img img{ transform:scale(1.04); }
        .hj-body{ padding:20px 22px 22px; display:flex; flex-direction:column; flex:1; }
        .hj-meta{ font-size:.78rem; color:var(--muted); margin:0 0 8px; }
        .hj-body h3{ font-size:1.1rem; margin:0 0 8px; }
        .hj-excerpt{ font-size:.9rem; color:var(--muted); line-height:1.6; flex:1; }
        .hj-more{ color:var(--accent); font-weight:600; font-size:.92rem; margin-top:8px; }

        @media (max-width: 920px){ .hj-grid{ grid-template-columns:1fr 1fr; } .hj-card:nth-child(3){ display:none; } }
        @media (max-width: 600px){ .hj-section{ padding:48px 16px; } .hj-grid{ grid-template-columns:1fr; } .hj-card:nth-child(3){ display:block; } }
      `}</style>
        </section>
    );
}
