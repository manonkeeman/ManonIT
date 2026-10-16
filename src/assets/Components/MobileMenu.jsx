import { CASA_REILLE_URL, JOURNAL_NAV } from "../Helpers/links.js";
import { NavLink } from "./LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { stripEnPrefix, withLang } from "../../i18n/langPath.js";

const LANGUAGES = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'es', label: 'ES' },
    { code: 'it', label: 'IT' },
    { code: 'uk', label: 'УК' },
];

export default function MobileMenu({ open, onClose }) {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const changeLang = (code) => {
        const basePath = stripEnPrefix(location.pathname);
        const target = withLang(basePath, code) + location.search + location.hash;
        if (target !== location.pathname + location.search + location.hash) {
            navigate(target);
        }
        i18n.changeLanguage(code);
        if (code === 'en') {
            localStorage.removeItem('lang');
        } else {
            localStorage.setItem('lang', code);
        }
        onClose();
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className={`mobile-backdrop ${open ? 'open' : ''}`}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Dropdown menu */}
            <nav
                id="mobile-menu"
                className={`mobile-dropdown ${open ? 'open' : ''}`}
                aria-label="Mobile navigation"
                aria-hidden={!open}
            >
                <div className="mobile-dropdown-inner">

                    <NavLink to="/" end onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.home')}
                    </NavLink>
                    <NavLink to="/#services" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.services')}
                    </NavLink>
                    <NavLink to="/hoe-werkt-het" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.how')}
                    </NavLink>
                    <NavLink to="/tarieven" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.pricing')}
                    </NavLink>
                    <NavLink to="/faq" onClick={onClose} className="mob-link mob-link--main">
                        {t('faq.label')}
                    </NavLink>

                    <div className="mob-divider" />

                    <p className="mob-section-label">{t('nav.portfolio')}</p>
                    <NavLink to="/backendstudentendashboard" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.backend')}
                    </NavLink>
                    <NavLink to="/frontendvredestein" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.frontend')}
                    </NavLink>
                    <NavLink to="/webdesignacupuncture" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.acupuncture')}
                    </NavLink>
                    <NavLink to="/thebigthree" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.bigthree')}
                    </NavLink>
                    <NavLink to="/marieboddaert" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.marieboddaert')}
                    </NavLink>
                    <a href={CASA_REILLE_URL} target="_blank" rel="noreferrer" onClick={onClose} className="mob-link">
                        {t('nav.links.portfolio.casareille')}
                    </a>

                    <div className="mob-divider" />

                    <p className="mob-section-label">{t('nav.journal')}</p>
                    {JOURNAL_NAV.map((slug) => (
                        <NavLink key={slug} to={`/journal/${slug}`} onClick={onClose} className="mob-link">
                            {t(`nav.links.journal.${slug}`)}
                        </NavLink>
                    ))}

                    <div className="mob-divider" />

                    <NavLink to="/about" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.about')}
                    </NavLink>
                    <NavLink to="/#contact" onClick={onClose} className="mob-link mob-link--main">
                        {t('nav.contact')}
                    </NavLink>

                    <div className="mob-divider" />

                    <div className="mob-lang" role="group" aria-label="Taal kiezen">
                        {LANGUAGES.map(({ code, label }) => (
                            <button
                                key={code}
                                className={`mob-lang-btn ${i18n.language === code ? 'active' : ''}`}
                                onClick={() => changeLang(code)}
                                aria-pressed={i18n.language === code}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                </div>
            </nav>
        </>
    );
}
