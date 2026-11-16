import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu.jsx";
import { useLangPrefix } from "./useLangPrefix.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { CASA_REILLE_URL, JOURNAL_NAV } from "../Helpers/links.js";

export default function Navbar() {
    const [panel, setPanel] = useState(null); // null | 'menu' | 'portfolio' | 'journal'
    const open = panel === 'menu';
    const close = () => setPanel(null);
    const toggle = (id) => setPanel((cur) => (cur === id ? null : id));
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    useEffect(() => { setPanel(null); }, [pathname]);

    return (
        <header className="site-header">
            <div className="nav-wrap">
                {/* Logo */}
                <NavLink to="/" className="nav-logo-link" aria-label="Home">
                    <img src="/logo-compact-cream.svg" alt="ManonIT" width="160" height="40" />
                </NavLink>

                {/* Desktop nav */}
                <nav className="primary-nav desktop-only" aria-label="Main navigation">
                    <NavLink to="/" end>{t('nav.home')}</NavLink>
                    <NavLink to="/werkwijze">{t('nav.how')}</NavLink>
                    <NavLink to="/tarieven">{t('nav.pricing')}</NavLink>
                    <NavLink to="/teksten-documentatie">{t('nav.docs')}</NavLink>
                    <NavLink to="/faq">{t('nav.faq')}</NavLink>

                    <div className="nav-group">
                        <NavLink to="/portfolio">{t('nav.portfolio')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/backendstudentendashboard">{t('nav.links.portfolio.backend')}</NavLink>
                            <NavLink to="/frontendvredestein">{t('nav.links.portfolio.frontend')}</NavLink>
                            <NavLink to="/webdesignacupuncture">{t('nav.links.portfolio.acupuncture')}</NavLink>
                            <NavLink to="/thebigthree">{t('nav.links.portfolio.bigthree')}</NavLink>
                            <NavLink to="/marieboddaert">{t('nav.links.portfolio.marieboddaert')}</NavLink>
                            <a href={CASA_REILLE_URL} target="_blank" rel="noreferrer">{t('nav.links.portfolio.casareille')}</a>
                        </div>
                    </div>

                    <div className="nav-group">
                        <NavLink to="/journal">{t('nav.journal')}</NavLink>
                        <div className="nav-dropdown">
                            {JOURNAL_NAV.map((slug) => (
                                <NavLink key={slug} to={`/journal/${slug}`}>{t(`nav.links.journal.${slug}`)}</NavLink>
                            ))}
                        </div>
                    </div>

                    <NavLink to="/about">{t('nav.about')}</NavLink>
                    <a href={`${prefix}/#contact`}>{t('nav.contact')}</a>



                    <LanguageSwitcher />

                    <a href={`${prefix}/#contact`} className="btn btn-primary nav-cta">{t('nav.cta')}</a>
                </nav>

                {/* Mobile: losse dropdowns + hamburger */}
                <div className="mob-bar mobile-only">
                    {['portfolio', 'journal'].map((id) => (
                        <button
                            key={id}
                            type="button"
                            className={`mob-bar-btn ${panel === id ? 'open' : ''}`}
                            aria-expanded={panel === id}
                            aria-controls={`mob-panel-${id}`}
                            onClick={() => toggle(id)}
                        >
                            {t(`nav.${id}`)}
                            <svg className="mob-acc-chevron" width="10" height="10" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                    ))}
                    <button
                        className="hamburger"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        onClick={() => toggle('menu')}
                    >
                        <span className="bar"/><span className="bar"/><span className="bar"/>
                    </button>
                </div>
            </div>

            <div className={`mobile-backdrop ${panel === 'portfolio' || panel === 'journal' ? 'open' : ''}`} onClick={close} aria-hidden="true" />
            <nav id="mob-panel-portfolio" className={`mob-panel ${panel === 'portfolio' ? 'open' : ''}`} aria-hidden={panel !== 'portfolio'} aria-label={t('nav.portfolio')}>
                <NavLink to="/backendstudentendashboard" onClick={close} className="mob-link">{t('nav.links.portfolio.backend')}</NavLink>
                <NavLink to="/frontendvredestein" onClick={close} className="mob-link">{t('nav.links.portfolio.frontend')}</NavLink>
                <NavLink to="/webdesignacupuncture" onClick={close} className="mob-link">{t('nav.links.portfolio.acupuncture')}</NavLink>
                <NavLink to="/thebigthree" onClick={close} className="mob-link">{t('nav.links.portfolio.bigthree')}</NavLink>
                <NavLink to="/marieboddaert" onClick={close} className="mob-link">{t('nav.links.portfolio.marieboddaert')}</NavLink>
                <a href={CASA_REILLE_URL} target="_blank" rel="noreferrer" onClick={close} className="mob-link">{t('nav.links.portfolio.casareille')}</a>
            </nav>
            <nav id="mob-panel-journal" className={`mob-panel ${panel === 'journal' ? 'open' : ''}`} aria-hidden={panel !== 'journal'} aria-label={t('nav.journal')}>
                {JOURNAL_NAV.map((slug) => (
                    <NavLink key={slug} to={`/journal/${slug}`} onClick={close} className="mob-link">{t(`nav.links.journal.${slug}`)}</NavLink>
                ))}
            </nav>

            <MobileMenu open={open} onClose={close} />
        </header>
    );
}