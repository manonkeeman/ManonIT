import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "./LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu.jsx";
import { useLangPrefix } from "./useLangPrefix.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

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
                    <img src="/logo-compact-cream.svg" alt="ManonIT" height="40" />
                </NavLink>

                {/* Desktop nav */}
                <nav className="primary-nav desktop-only" aria-label="Main navigation">
                    <NavLink to="/" end>{t('nav.home')}</NavLink>
                    <a href={`${prefix}/#services`}>{t('nav.services')}</a>
                    <a href={`${prefix}/#tarieven`}>{t('nav.pricing')}</a>

                    <div className="nav-group">
                        <a href={`${prefix}/#portfolio`}>{t('nav.portfolio')}</a>
                        <div className="nav-dropdown">
                            <NavLink to="/backendstudentendashboard">{t('nav.links.portfolio.backend')}</NavLink>
                            <NavLink to="/frontendvredestein">{t('nav.links.portfolio.frontend')}</NavLink>
                            <NavLink to="/webdesignacupuncture">{t('nav.links.portfolio.acupuncture')}</NavLink>
                            <NavLink to="/thebigthree">{t('nav.links.portfolio.bigthree')}</NavLink>
                            <NavLink to="/marieboddaert">{t('nav.links.portfolio.marieboddaert')}</NavLink>
                        </div>
                    </div>

                    <div className="nav-group">
                        <NavLink to="/journal">{t('nav.journal')}</NavLink>
                        <div className="nav-dropdown">
                            <NavLink to="/journal/ai-in-mijn-werk">{t('nav.links.journal.ai-in-mijn-werk')}</NavLink>
                            <NavLink to="/journal/verhaal-achter-casacrew">{t('nav.links.journal.verhaal-achter-casacrew')}</NavLink>
                            <NavLink to="/journal/365korteverhalen">{t('nav.links.journal.365korteverhalen')}</NavLink>
                            <NavLink to="/journal/designchaos">{t('nav.links.journal.designchaos')}</NavLink>
                            <NavLink to="/journal/luchtvaartfamilie2018">{t('nav.links.journal.luchtvaartfamilie2018')}</NavLink>
                            <NavLink to="/journal/fullstackdeveloper">{t('nav.links.journal.scrummaster')}</NavLink>
                            <NavLink to="/journal/storytelling">{t('nav.links.journal.storytelling')}</NavLink>
                            <NavLink to="/journal/toekomsttech">{t('nav.links.journal.toekomsttech')}</NavLink>
                            <NavLink to="/journal/pastelvanbuiten">{t('nav.links.journal.pastelvanbuiten')}</NavLink>
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