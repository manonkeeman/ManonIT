import { memo } from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiStar, FiLayers, FiSearch, FiMessageCircle } from "react-icons/fi";
import { Link } from "../assets/Components/LocaleLink.jsx";
import { useLangPrefix } from "../assets/Components/useLangPrefix.js";

const TRUST = [
    { key: "rating",  Icon: FiStar },
    { key: "oneStop", Icon: FiLayers },
    { key: "seo",     Icon: FiSearch },
    { key: "free",    Icon: FiMessageCircle },
];

function Hero() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    const points = t("hero.points", { returnObjects: true });

    return (
        <section id="home" style={{ padding: 0, margin: 0 }}>
            <div className="hero-wrap">
                <div className="hero-grid">

                    {/* TEKST */}
                    <div className="hero-copy">
                        <span className="hero-badge">
                            <span className="badge-dot" aria-hidden="true"/>
                            {t("hero.available")}
                        </span>
                        <h1>{t("hero.greeting")}</h1>
                        <p className="hero-lead">{t("hero.bio")}</p>

                        {Array.isArray(points) && (
                            <ul className="hero-points">
                                {points.map((p) => (
                                    <li key={p}><FiCheck aria-hidden="true"/>{p}</li>
                                ))}
                            </ul>
                        )}

                        <div className="hero-ctas">
                            <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t("hero.ctaContact")}</a>
                            <a href={`${prefix}/#portfolio`} className="btn btn-ghost">{t("hero.ctaWork")}</a>
                        </div>

                        <p className="hero-rating">
                            <span className="hero-stars" aria-hidden="true">★★★★★</span>
                            {t("hero.ratingLine")}
                        </p>
                    </div>

                    {/* WERK — mockups van recente projecten */}
                    <div className="hero-visual">
                        <Link to="/frontendvredestein" className="hero-shot">
                            <picture>
                                <source
                                    type="image/avif"
                                    srcSet="/hero-work-600w.avif 600w, /hero-work-1000w.avif 1000w, /hero-work-1400w.avif 1400w"
                                    sizes="(max-width: 920px) 92vw, 620px"
                                />
                                <source
                                    type="image/webp"
                                    srcSet="/hero-work-600w.webp 600w, /hero-work-1000w.webp 1000w, /hero-work-1400w.webp 1400w"
                                    sizes="(max-width: 920px) 92vw, 620px"
                                />
                                <img
                                    src="/hero-work-1000w.webp"
                                    width="1000"
                                    height="667"
                                    fetchPriority="high"
                                    decoding="async"
                                    alt="Website Villa Vredestein op desktop en mobiel, ontworpen en gebouwd door ManonIT"
                                />
                            </picture>
                        </Link>

                        <Link to="/backendstudentendashboard" className="hero-window">
                            <span className="hero-window-bar"><i aria-hidden="true"/><i aria-hidden="true"/><i aria-hidden="true"/><b>casacrew.nl</b></span>
                            <picture>
                                <source type="image/avif" srcSet="/hero-work-casacrew-400w.avif 400w, /hero-work-casacrew-700w.avif 700w" sizes="(max-width: 920px) 50vw, 280px" />
                                <source type="image/webp" srcSet="/hero-work-casacrew-400w.webp 400w, /hero-work-casacrew-700w.webp 700w" sizes="(max-width: 920px) 50vw, 280px" />
                                <img src="/hero-work-casacrew-400w.webp" width="700" height="270" loading="lazy" decoding="async" alt="Dashboard van de CasaCrew verhuurapp" />
                            </picture>
                        </Link>

                    </div>
                </div>
            </div>

            {/* VERTROUWENSBALK */}
            <div className="trust-bar">
                <ul className="trust-grid">
                    {TRUST.map(({ key, Icon }) => (
                        <li key={key} className="trust-item">
                            <span className="trust-icon"><Icon aria-hidden="true"/></span>
                            <span>
                                <strong>{t(`hero.trust.${key}.title`)}</strong>
                                <small>{t(`hero.trust.${key}.text`)}</small>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <style>{`
        .hero-wrap{
          background: var(--bg);
          padding: clamp(40px, 7vw, 96px) 20px clamp(48px, 6vw, 80px);
        }
        .hero-grid{
          max-width: 1160px; margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
        }
        .hero-copy h1{
          font-size: clamp(2.1rem, 4.6vw, 3.5rem);
          line-height: 1.08;
          margin: 0 0 20px;
        }
        .hero-lead{
          font-size: clamp(1rem, 1.3vw, 1.15rem);
          line-height: 1.65;
          color: var(--muted);
          max-width: 56ch;
          margin: 0 0 24px;
        }
        .hero-badge{
          display:inline-flex; align-items:center; gap:8px;
          font-size:.8rem; font-weight:500; letter-spacing:0;
          color:var(--muted);
          background: var(--bg-alt);
          border-radius:999px; padding:6px 14px;
          margin-bottom:20px;
        }
        .badge-dot{
          width:8px; height:8px; border-radius:50%;
          background:#1FA34A;
          box-shadow: 0 0 0 3px rgba(31,163,74,.18);
          animation: pulse 2s ease-in-out infinite;
          flex-shrink:0;
        }
        @keyframes pulse{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:.55; transform:scale(.85); }
        }
        .hero-points{
          list-style:none; padding:0; margin:0 0 28px;
          display:grid; gap:10px;
        }
        .hero-points li{
          display:flex; align-items:center; gap:10px;
          font-weight:500;
        }
        .hero-points svg{
          flex-shrink:0;
          width:22px; height:22px; padding:4px;
          border-radius:50%;
          background: color-mix(in srgb, var(--accent) 14%, #fff); color: var(--accent-ink);
        }
        .hero-ctas{ display:flex; gap:12px; flex-wrap:wrap; }
        .hero-rating{
          display:flex; align-items:center; gap:10px; flex-wrap:wrap;
          margin:22px 0 0; font-size:.9rem; color:var(--muted);
        }
        .hero-stars{ color:var(--accent-ink); letter-spacing:2px; font-size:1rem; }

        .hero-visual{ position:relative; width:100%; padding: 0 0 40px 24px; }
        .hero-shot{ display:block; }
        .hero-shot img{
          width:100%; height:auto;
          border-radius: 20px;
          box-shadow: 0 30px 60px -30px rgba(0,0,0,.35);
          transition: transform .4s ease;
        }
        .hero-shot:hover img{ transform: translateY(-3px); }
        .hero-window{
          position:absolute; left:0; bottom:0;
          width: 46%;
          background:#fff; border-radius:12px; overflow:hidden;
          border:1px solid var(--border);
          box-shadow: 0 20px 40px -14px rgba(0,0,0,.35);
          transition: transform .25s ease;
        }
        .hero-window:hover{ transform: translateY(-4px); }
        .hero-window-bar{ display:flex; align-items:center; gap:5px; padding:7px 9px; background: var(--bg-alt); }
        .hero-window-bar b{ margin-left:6px; font-size:.62rem; font-weight:500; color:var(--muted); background:#fff; border-radius:4px; padding:1px 8px; }
        .hero-window-bar i{ width:7px; height:7px; border-radius:50%; background: rgba(0,0,0,.15); }
        .hero-window img{ width:100%; height:auto; border-radius:0; }
        /* Trust bar */
        .trust-bar{
          background: var(--bg);
          color: var(--text);
          padding: 8px 20px 56px;
        }
        .trust-grid{
          list-style:none; margin:0 auto; padding:0;
          max-width:1160px;
          display:grid; grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding-top: 36px;
          border-top: 1px solid var(--border);
        }
        .trust-item{ display:flex; align-items:center; gap:14px; }
        .trust-item strong{ display:block; font-size:1rem; font-weight:700; }
        .trust-item strong{ font-weight:600 !important; }
        .trust-item small{ display:block; font-size:.85rem; color:var(--muted); line-height:1.4; }
        .trust-icon{
          flex-shrink:0;
          width:44px; height:44px; border-radius:12px;
          display:inline-flex; align-items:center; justify-content:center;
          background: var(--bg-alt);
          color: var(--accent-ink);
          font-size: 1.25rem;
        }

        @media (max-width: 920px){
          .hero-grid{ grid-template-columns: 1fr; }
          .hero-visual{ max-width: 620px; }

          .trust-grid{ grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px){
          .hero-wrap{ padding: 28px 16px 44px; }
          .hero-visual{ padding: 0 0 28px 12px; }

          .hero-ctas .btn{ flex:1 1 100%; }
          .trust-bar{ padding: 0 16px 40px; }
          .trust-grid{ grid-template-columns: 1fr; gap:16px; }
        }
      `}</style>
        </section>
    );
}

export default memo(Hero);
