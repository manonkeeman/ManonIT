import { Link } from "../assets/Components/LocaleLink.jsx";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";
import { useTranslation } from "react-i18next";
import { MockupPicture } from "../assets/Helpers/imageHelpers.jsx";


const projects = [
    {
        key: "backend",
        title: "CasaCrew · Verhuurapp voor hospita's",
        tags: ["Spring Boot", "Java", "PostgreSQL", "OAuth2"],
        route: "/backendstudentendashboard",
        base: "/Portfolio/casacrew-mockup",
        liveUrl: "https://casacrew.nl",
        journalLink: "/journal/verhaal-achter-casacrew",
        num: "01",
    },
    {
        key: "frontend",
        title: "Webdevelopment · Villa Vredestein",
        tags: ["React", "Vite", "UX/UI", "SEO"],
        route: "/frontendvredestein",
        base: "/Portfolio/villa-vredestein-mockup",
        liveUrl: "https://villavredestein.com",
        journalLink: "/journal/website-villa-vredestein",
        num: "02",
    },
    {
        key: "acupuncture",
        title: "Webdesign · Acupuncture by Saskia",
        tags: ["WordPress", "Adobe Suite", "SEO"],
        route: "/webdesignacupuncture",
        base: "/Portfolio/acupuncture-mockup",
        num: "03",
    },
    {
        key: "bigthree",
        title: "Webdesign · The Big Three",
        tags: ["Webdesign", "CMS", "SEO", "NL · EN · DE"],
        route: "/thebigthree",
        base: "/Portfolio/de-grote-drie-mockup",
        liveUrl: "https://thebigthree.nl",
        journalLink: "/journal/samenwerking-the-big-three",
        num: "04",
    },
    {
        key: "marieboddaert",
        title: "Webdesign · Marie H. Boddaert",
        tags: ["HTML/CSS", "Webdesign", "Typografie", "Netlify", "SEO", "CMS"],
        route: "/marieboddaert",
        base: "/Portfolio/marie-boddaert-blog-mockup",
        num: "05",
        journalLink: "/journal/pastelvanbuiten",
    },
];

export default function Portfolio() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    return (
        <section id="portfolio" className="section portfolio-section">

            <div className="section-head">
                <p className="eyebrow">{t('portfolio.label')}</p>
                <h2>{t('portfolio.title')}</h2>
                <p>{t('portfolio.intro')}</p>
            </div>

            <div className="portfolio-track">
                {projects.map((p) => {
                    const desc = t(`portfolio.projects.${p.key}.desc`);
                    return (
                        <article key={p.key} className="portfolio-card">
                            <Link className="card-link" to={p.route} aria-label={`Open ${p.title}`}>
                                <div className="card-media">
                                    <MockupPicture base={p.base} alt={p.title} sizes="(max-width: 600px) 92vw, (max-width: 920px) 46vw, 380px" />
                                </div>
                                <div className="card-body">
                                    <span className="card-num">{p.num}</span>
                                    <h3 className="card-title">{p.title}</h3>
                                    <p className="card-desc">{desc}</p>
                                    <div className="card-tags">
                                        {p.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                            <div className="card-actions">
                                <Link to={p.route} className="btn-cta">{t('portfolio.viewBtn')} →</Link>
                                {p.journalLink && (
                                    <Link to={p.journalLink} className="btn-cta-story">{t('portfolio.readStory')} →</Link>
                                )}
                                {p.liveUrl && (
                                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-cta-story">{p.liveUrl.replace("https://", "")} ↗</a>
                                )}
                            </div>
                        </article>
                    );
                })}

                {/* Laatste kaart: CTA naar contact */}
                <article className="portfolio-card portfolio-card--cta">
                    <div className="cta-card-inner">
                        <p className="cta-card-label">{t('portfolio.cta.label')}</p>
                        <h3>{t('portfolio.cta.title')}</h3>
                        <p className="cta-card-sub">{t('portfolio.cta.sub')}</p>
                        <a href={`${prefix}/#contact`} className="btn-cta-solid">{t('portfolio.cta.btn')} →</a>
                    </div>
                </article>
            </div>

            <style>{`
        .portfolio-section { padding: clamp(56px, 8vw, 96px) 20px; }

        /* Raster */
        .portfolio-track {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        /* Kaart */
        .portfolio-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: transform .2s, border-color .2s, box-shadow .2s;
        }
        .portfolio-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 18px 40px -18px rgba(0,0,0,.3);
        }

        .card-link {
          display: flex;
          flex-direction: column;
          flex: 1;
          text-decoration: none;
          color: inherit;
        }

        .card-media {
          aspect-ratio: 3/2;
          overflow: hidden;
          flex-shrink: 0;
        }
        .card-media picture, .card-media img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .4s ease;
        }
        .portfolio-card:hover .card-media img { transform: scale(1.04); }

        .card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .card-num {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .12em;
          color: var(--accent);
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }
        .card-title {
          font-size: 1.15rem;
          margin: 0 0 10px;
          line-height: 1.3;
        }
        .card-desc {
          font-size: .92rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 16px;
          flex: 1;
        }
        .card-tags {
          display: flex; gap: 8px; flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .tag {
          font-size: .78rem;
          padding: 3px 10px;
          border: 1px solid var(--border);
          border-radius: 999px;
          color: var(--muted);
          background: var(--bg);
          white-space: nowrap;
        }
        .card-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 24px 22px;
          flex-wrap: wrap;
        }
        .btn-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-ink);
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color .2s, gap .2s;
        }
        .portfolio-card:hover .btn-cta { border-color: var(--accent); gap: 10px; }
        .btn-cta-story {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: .88rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: color .2s, border-color .2s, gap .2s;
        }
        .btn-cta-story:hover { color: var(--accent); border-color: var(--accent); gap: 10px; }

        /* CTA-kaart */
        .portfolio-card--cta {
          background: var(--bg-alt);
          border-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .portfolio-card--cta:hover { transform: translateY(-5px); }
        .cta-card-inner {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          justify-content: center;
        }
        .cta-card-label {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0;
        }
        .cta-card-inner h3 { margin: 0; font-size: 1.4rem; }
        .cta-card-sub { color: var(--muted); font-size: .92rem; line-height: 1.6; margin: 0; }
        .btn-cta-solid {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
          padding: 12px 22px;
          background: var(--bordeaux);
          color: var(--bg);
          border-radius: 980px;
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          border: 1px solid var(--bordeaux);
          cursor: pointer;
          width: fit-content;
          transition: background .2s, border-color .2s, color .2s, transform .15s;
        }
        .btn-cta-solid:hover { background:var(--accent); border-color:var(--accent); color:#fff; text-decoration:none; }

        @media (max-width: 920px) {
          .portfolio-track { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
        @media (max-width: 600px) {
          .portfolio-section { padding: 48px 16px; }
          .portfolio-track { grid-template-columns: 1fr; }
          .card-body { padding: 18px; }
        }
      `}</style>
        </section>
    );
}