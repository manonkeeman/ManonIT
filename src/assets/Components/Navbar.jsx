import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu.jsx";
import { useLangPrefix } from "./useLangPrefix.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import { CASA_REILLE_URL, JOURNAL_NAV } from "../Helpers/links.js";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const prefix = useLangPrefix();

    useEffect(() => { setOpen(false); }, [pathname]);

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
                    <a href={`${prefix}/#services`}>{t('nav.services')}</a>
                    <NavLink to="/tarieven">{t('nav.pricing')}</NavLink>
                    <NavLink to="/faq">{t('nav.faq')}</NavLink>

                    <div className="nav-group">
                        <a href={`${prefix}/#portfolio`}>{t('nav.portfolio')}</a>
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

                {/* Mobile hamburger */}
                <button
                    className="hamburger mobile-only"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen(v => !v)}
                >
                    <span className="bar"/><span className="bar"/><span className="bar"/>
                </button>
            </div>

            <MobileMenu open={open} onClose={() => setOpen(false)} />
        </header>
    );
}