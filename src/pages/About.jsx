import { FaReact, FaGitAlt, FaJava } from "react-icons/fa";
import { FiCheck, FiBookOpen } from "react-icons/fi";
import {
  SiSpringboot, SiPostgresql, SiFigma, SiJavascript, SiHtml5, SiCss, SiVite, SiGithub,
  SiWordpress, SiNetlify, SiClaude, SiGoogleanalytics,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Link } from "../assets/Components/LocaleLink.jsx";
import Seo from "../assets/Components/Seo.jsx";
import JsonLd from "../assets/Components/JsonLd.jsx";

// Tools en talen met naam in de tooltip (alleen wat daadwerkelijk gebruikt wordt)
const STACK = [
  ["React", FaReact], ["JavaScript", SiJavascript], ["HTML", SiHtml5], ["CSS", SiCss], ["Vite", SiVite],
  ["Java", FaJava], ["Spring Boot", SiSpringboot], ["PostgreSQL", SiPostgresql],
  ["Git", FaGitAlt], ["GitHub", SiGithub], ["Figma", SiFigma],
  ["WordPress", SiWordpress], ["Netlify", SiNetlify], ["Google Analytics", SiGoogleanalytics], ["Claude", SiClaude],
];

const ABOUT_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
        "@type": "Person",
        "@id": "https://manonit.com/#manon",
        "name": "Manon Keeman",
        "givenName": "Manon",
        "familyName": "Keeman",
        "url": "https://manonit.com",
        "image": "https://manonit.com/about-portrait-800w.webp",
        "jobTitle": "Full Stack Developer & Webdesigner",
        "description": "Manon Keeman is een freelance full stack developer en webdesigner met een achtergrond in grafisch ontwerp, interne communicatie en luchtvaart. Ze studeerde aan de Gerrit Rietveld Academie, het SAE Institute en de Schrijversacademie, en rondde haar opleiding Full Stack Development af aan het NOVI College.",
        "email": "mailto:lets@manonit.com",
        "sameAs": [
            "https://www.linkedin.com/in/manonkeeman/",
            "https://github.com/manonkeeman",
            "https://substack.com/@manonkeeman",
        ],
        "knowsAbout": [
            "React", "Spring Boot", "PostgreSQL", "Git", "Figma",
            "Webdesign", "UX/UI design", "SEO", "Copywriting",
            "Contentstrategie", "Grafisch ontwerp",
        ],
        "knowsLanguage": ["Nederlands", "Engels", "Frans", "Duits", "Spaans", "Italiaans"],
        "alumniOf": [
            { "@type": "EducationalOrganization", "name": "NOVI College", "description": "Full Stack Development" },
            { "@type": "EducationalOrganization", "name": "Gerrit Rietveld Academie" },
            { "@type": "EducationalOrganization", "name": "SAE Institute" },
            { "@type": "EducationalOrganization", "name": "Schrijversacademie" },
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "ManonIT",
            "url": "https://manonit.com",
        },
        "hasCredential": [
            { "@type": "EducationalOccupationalCredential", "name": "Full Stack Developer", "credentialCategory": "diploma", "recognizedBy": { "@type": "Organization", "name": "NOVI College" } },
        ],
    },
};

export default function About() {
  const { t } = useTranslation();
  const skills = ["stack", "systems", "uxui", "storytelling"];

  return (
      <section id="about" className="section about-section">
        <Seo
          title={t('seo.about.title')}
          description={t('seo.about.description')}
          path="/about"
        />
        <JsonLd data={ABOUT_SCHEMA} />
        <div className="container about-grid">
          {/* TEKST */}
          <div className="about-copy">
            <p className="eyebrow">{t('nav.about')}</p>
            <h1 className="about-title">{t('about.title')}</h1>
            <blockquote className="about-quote">
              {t('about.quote')}
            </blockquote>
            <p className="about-text about-lead">{t('about.bio1')}</p>
            <p className="about-text">{t('about.bio2')}</p>
            <p className="about-text">{t('about.bio3')}</p>
            <p className="about-text">{t('about.bio4')}</p>
            <p className="about-text">{t('about.bio5')}</p>

            <div className="about-skills-block">
              <h2 className="about-subtitle">{t('about.skillsTitle')}</h2>
              <ul className="about-skills">
                {skills.map((k) => (
                  <li key={k}><FiCheck aria-hidden="true" />{t(`about.skills.${k}`)}</li>
                ))}
              </ul>

              {/* Tech stack icons met tooltip */}
              <div className="about-stack" aria-label="Tech stack">
{STACK.map(([name, Icon]) => (
                  <span key={name} data-tooltip={name} tabIndex={0}><Icon aria-label={name} /></span>
                ))}
              </div>
            </div>
          </div>

          {/* FOTO */}
            <div className="about-photo">
              <picture>
                <source
                    type="image/avif"
                    srcSet="/about-portrait-400w.avif 400w, /about-portrait-800w.avif 800w, /about-portrait-1200w.avif 1200w"
                    sizes="(max-width: 920px) 92vw, 480px"
                />
                <source
                    type="image/webp"
                    srcSet="/about-portrait-400w.webp 400w, /about-portrait-800w.webp 800w, /about-portrait-1200w.webp 1200w"
                    sizes="(max-width: 920px) 92vw, 480px"
                />
                <img
                    src="/about-portrait-800w.webp"
                    width="800"
                    height="1200"
                    alt="Portrait Manon"
                    decoding="async"
                />
              </picture>
            </div>

            {/* JOURNAL */}
            <div className="about-journal-cta">
              <span className="about-journal-icon"><FiBookOpen aria-hidden="true" /></span>
              <p className="about-journal-tagline">{t('about.journalCta')}</p>
              <Link to="/journal" className="btn btn-primary" data-arrow>{t('about.journalBtn')}</Link>
            </div>
        </div>

        <style>{`
        .about-section{ padding-top: clamp(40px, 6vw, 80px); padding-bottom: clamp(40px, 6vw, 80px); }
        .about-grid{
          display:grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
          gap: 20px clamp(32px, 5vw, 72px);
          align-items:start;
          grid-template-areas: "copy photo" "copy journal";
          grid-template-rows: auto 1fr;
        }
        .about-copy{ grid-area: copy; }
        .about-photo{ grid-area: photo; }
        .about-journal-cta{ grid-area: journal; }
        .about-title{ margin: 0 0 16px; font-size: clamp(2.1rem, 4.4vw, 3.3rem); line-height:1.08; }
        .about-quote{
          margin: 0 0 28px; padding: 4px 0 4px 18px;
          border-left: 3px solid var(--accent);
          font-size: 1.12rem; font-style: italic; color: var(--muted);
          line-height: 1.55; white-space: pre-line;
        }
        .about-text{ margin: 0 0 14px; line-height: 1.7; max-width: 62ch; }
        .about-lead{ font-size: 1.1rem; font-weight: 500; }

        .about-skills-block{ margin-top: 32px; padding-top: 28px; border-top: 1px solid var(--border); }
        .about-subtitle{ margin: 0 0 14px; font-size: 1.15rem; }
        .about-skills{
          list-style:none; margin:0; padding:0;
          display:grid; grid-template-columns: 1fr 1fr; gap:10px;
        }
        .about-skills li{
          display:flex; align-items:center; gap:10px;
          background: var(--bg-alt); border:1px solid var(--border); border-radius:12px;
          padding: 10px 14px; font-size:.92rem; font-weight:500;
        }
        .about-skills svg{
          flex-shrink:0; width:22px; height:22px; padding:4px; border-radius:50%;
          background: color-mix(in srgb, var(--accent) 14%, #fff); color: var(--accent-ink);
        }

        .about-stack{ display:flex; gap:12px; margin: 20px 0 0; flex-wrap:wrap; }
        .about-stack span{
          position:relative; display:flex; align-items:center; justify-content:center;
          width:46px; height:46px; border-radius:12px; font-size:1.4rem;
          background: var(--bg-alt); color: var(--muted); cursor:default;
          transition: color .2s ease, transform .2s ease;
        }
        .about-stack span:hover{ color: var(--accent-ink); transform: translateY(-2px); }
        /* Tooltip */
        .about-stack span::after{
          content: attr(data-tooltip);
          position:absolute; bottom: calc(100% + 8px); left:50%; transform: translateX(-50%);
          background: var(--bg-alt); color: var(--text);
          font-size:.72rem; font-weight:600; letter-spacing:.03em;
          padding:4px 9px; border-radius:7px; border:1px solid var(--border);
          white-space:nowrap; opacity:0; pointer-events:none; transition: opacity .18s ease;
          box-shadow: var(--shadow);
        }
        .about-stack span:hover::after, .about-stack span:focus-visible::after{ opacity:1; }

        .about-photo img{
          display:block; width:100%; height:auto; aspect-ratio: 800 / 968; object-fit:cover; object-position: 50% 48.3%; /* bronbestand heeft transparante randen boven en onder */
          border-radius: 20px; box-shadow: 0 30px 60px -30px rgba(0,0,0,.35);
        }
        .about-journal-cta{
          display:grid; gap:12px; justify-items:start;
          background: var(--bg-alt); border:1px solid var(--border); border-radius:20px; padding: 22px 24px;
        }
        .about-journal-icon{
          width:40px; height:40px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center;
          background:#fff; color: var(--accent-ink); font-size:1.2rem;
        }
        .about-journal-tagline{ margin:0; color: var(--muted); line-height:1.55; }

        @media (max-width: 920px){
          .about-grid{ grid-template-columns: 1fr; grid-template-rows: auto; grid-template-areas: "photo" "copy" "journal"; }
          .about-photo{ max-width: 420px; justify-self: center; width: 100%; }
        }
        @media (max-width: 480px){
          .about-skills{ grid-template-columns: 1fr; }
          .about-journal-cta .btn{ width:100%; }
        }
      `}</style>
      </section>
  );
}
