import { Link } from "./LocaleLink.jsx";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { stripEnPrefix } from "../../i18n/langPath.js";
import { openCookieSettings } from "../Helpers/consent.js";
import { useLangPrefix } from "./useLangPrefix.js";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
    const { t } = useTranslation();
    const prefix = useLangPrefix();
    // Op de homepage staat het contactformulier al direct boven de footer
    const isHome = stripEnPrefix(useLocation().pathname) === "/";

    return (
        <footer className="footer">
            {/* CTA-strook */}
            {!isHome && <div className="footer-cta">
                <div>
                    <h2>{t('footer.ctaTitle')}</h2>
                    <p>{t('footer.ctaSub')}</p>
                </div>
                <div className="footer-cta-btns">
                    <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{t('hero.ctaContact')}</a>
                    <a href="https://wa.me/31624766568" target="_blank" rel="noreferrer" className="btn footer-cta-wa"><FaWhatsapp aria-hidden="true"/> WhatsApp</a>
                </div>
            </div>}

            <div className="footer-inner">
                {/* Col 1 — Brand */}
                <div className="footer-col footer-brand">
                    <img src="/logo-compact-cream.svg" alt="ManonIT" width="176" height="44" style={{ borderRadius: 0 }} />
                    <p className="footer-tagline">{t('footer.tagline')}</p>
                    <div className="footer-socials">
                        <a href="https://github.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/manonkeeman/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://www.instagram.com/manonkeeman" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
                        <a href="https://www.facebook.com/editor.lifestyle/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://manonkeeman.substack.com" target="_blank" rel="noreferrer" aria-label="Substack"><SiSubstack /></a>
                    </div>
                </div>

                {/* Col 2 — Diensten */}
                <nav className="footer-col" aria-label={t('nav.services')}>
                    <p className="footer-heading">{t('nav.services')}</p>
                    {["websites", "design", "copy", "seo", "media", "social"].map((k) => (
                        <a key={k} href={`${prefix}/#services`}>{t(`services.items.${k}.name`)}</a>
                    ))}
                </nav>

                {/* Col 3 — Nav */}
                <nav className="footer-col" aria-label="Footer navigation">
                    <p className="footer-heading">{t('footer.navHeading')}</p>
                    <Link to="/">{t('nav.home')}</Link>
                    <a href={`${prefix}/#services`}>{t('nav.services')}</a>
                    <a href={`${prefix}/#tarieven`}>{t('nav.pricing')}</a>
                    <a href={`${prefix}/#onderhoud`}>{t('care.label')}</a>
                    <a href={`${prefix}/#portfolio`}>{t('nav.portfolio')}</a>
                    <Link to="/journal">{t('nav.journal')}</Link>
                    <Link to="/about">{t('nav.about')}</Link>
                    <a href={`${prefix}/#contact`}>{t('nav.contact')}</a>
                </nav>

                {/* Col 4 — Portfolio */}
                <nav className="footer-col" aria-label={t('nav.portfolio')}>
                    <p className="footer-heading">{t('nav.portfolio')}</p>
                    <Link to="/backendstudentendashboard">CasaCrew</Link>
                    <Link to="/frontendvredestein">Villa Vredestein</Link>
                    <Link to="/thebigthree">The Big Three</Link>
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>
                    <Link to="/marieboddaert">Marie H. Boddaert</Link>
                </nav>

                {/* Col 5 — Contact */}
                <div className="footer-col">
                    <p className="footer-heading">Contact</p>
                    <a href="https://wa.me/31624766568" target="_blank" rel="noreferrer" className="footer-icon-link">
                        <FaWhatsapp aria-hidden="true"/> +31 6 24766568
                    </a>
                    <p className="footer-text">Bakkum · Driebergen</p>
                    <p className="footer-text">KVK: 42053266</p>
                    <p className="footer-text">BTW: NL005459093B94</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>{t('footer.rights')}</p>
                {/* Plain RouterLink: geen /en-prefix — deze pagina's zijn NL-only */}
                <div className="footer-bottom-links">
                    <RouterLink to="/privacy">Privacybeleid</RouterLink>
                    <RouterLink to="/colofon">Colofon</RouterLink>
                    <a href="/sitemap.xml" target="_blank" rel="noreferrer">Sitemap</a>
                    <button type="button" className="footer-cookie-btn" onClick={openCookieSettings}>{t('cookies.settings')}</button>
                </div>
            </div>

            <style>{`
        .footer {
          --f-text: var(--muted);
          --f-dim:  var(--muted);
          --f-line: rgba(0,0,0,.1);
          background: var(--bg-alt);
          color: var(--text);
          padding: 0 20px 24px;
          font-size: .9rem;
        }

        .footer-cta {
          max-width: 1160px;
          margin: 0 auto;
          padding: 48px 0;
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px; flex-wrap: wrap;
          border-bottom: 1px solid var(--f-line);
        }
        .footer-cta h2 { color: var(--text); margin: 0 0 6px; font-size: clamp(22px, 2.6vw, 30px); }
        .footer-cta p { color: var(--f-text); margin: 0; }
        .footer-cta-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .footer-cta-wa { color: var(--text); border-color: rgba(0,0,0,.18); background: transparent; }
        .footer-cta-wa svg { color: #25D366; }
        .footer-cta-wa:hover { border-color: var(--text); }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          gap: 40px;
          max-width: 1160px;
          margin: 0 auto;
          padding: 48px 0 40px;
        }
        .footer-cta + .footer-inner { padding-top: 48px; }
        .footer-col { display: flex; flex-direction: column; gap: 10px; }
        .footer-tagline { margin: 4px 0 0; font-size: .92rem; color: var(--f-text); line-height: 1.6; max-width: 34ch; }
        .footer-heading {
          margin: 0 0 6px;
          font-size: .9rem; font-weight: 600;
          color: var(--text);
        }
        .footer-col a, .footer-text {
          color: var(--f-text);
          font-size: .92rem;
          text-decoration: none;
          width: fit-content;
          margin: 0;
          transition: color .2s ease;
        }
        .footer .footer-col a:hover { color: var(--text); text-decoration: none; }
        .footer-icon-link { display: inline-flex; align-items: center; gap: 8px; }

        .footer-socials { display: flex; gap: 10px; margin-top: 10px; }
        .footer .footer-socials a {
          width: 38px; height: 38px; border-radius: 10px;
          display: inline-flex; align-items: center; justify-content: center;
          background: #fff;
          color: var(--text); font-size: 1.05rem;
          transition: background .2s ease, color .2s ease, transform .2s ease;
        }
        .footer .footer-socials a:hover { background: var(--text); color: #fff; }

        .footer-bottom {
          max-width: 1160px; margin: 0 auto;
          padding-top: 20px;
          border-top: 1px solid var(--f-line);
          display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap;
          font-size: .82rem; color: var(--f-dim);
        }
        .footer-bottom p { margin: 0; }
        .footer-bottom-links { display: flex; gap: 20px; }
        .footer-bottom-links a { color: var(--f-dim); }
        .footer-cookie-btn { background: none; border: 0; padding: 0; font: inherit; color: var(--f-dim); cursor: pointer; }
        .footer-cookie-btn:hover { color: var(--text); }
        .footer .footer-bottom-links a:hover { color: var(--text); text-decoration: none; }

        @media (max-width: 1000px) {
          .footer-inner { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer { padding: 0 16px 20px; }
          .footer-cta { padding: 36px 0; }
          .footer-cta-btns .btn { flex: 1 1 100%; }
          .footer-inner { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>
        </footer>
    );
}
