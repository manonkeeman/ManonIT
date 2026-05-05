// ============================================================
// PRIJSPAGINA TEMPLATE — The Big Three
// Unlisted, noindex. Bereikbaar via URL, niet in de nav.
// ============================================================

import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const KLANT       = "David Broeksma";
const BEDRIJF     = "The Big Three";
const DATUM       = "5 mei 2026";

const PAKKETTEN = [
  {
    id: "basis",
    naam: "Pakket 1 — Basis Design",
    prijs: "Vanaf €1.200",
    periode: "excl. btw",
    tagline: "Professioneel online, functioneel en snel live.",
    featured: false,
    doorlooptijd: "3 tot 4 weken",
    inbegrepen: [
      "Tot 5 pagina's",
      "Basis ontwerp op aangepast template",
      "Responsive, werkt op mobiel en tablet",
      "Contactformulier",
      "Eenvoudige foto-impressie",
      "SEO-basis ingesteld",
      "Tekstwijzigingen lopen via mij (uurtarief)",
      "Hosting-setup: €175 los",
    ],
  },
  {
    id: "wordpress",
    naam: "Pakket 2 — WordPress + CMS",
    prijs: "Vanaf €2.450",
    periode: "excl. btw",
    tagline: "Eigen ontwerp, zelf beheren. De gulden middenweg.",
    featured: true,
    label: "Meest gekozen",
    doorlooptijd: "5 tot 7 weken",
    inbegrepen: [
      "Tot 8 pagina's",
      "Eigen ontwerp in WordPress-stijl",
      "Jij voegt zelf auto's, foto's en teksten toe",
      "Voorraadpagina met filters op merk, jaar en prijs",
      "Uitgebreide SEO-instellingen",
      "Logo en huisstijl inbegrepen",
      "Hosting en domein-setup inbegrepen",
      "2 revisierondes voor oplevering",
    ],
  },
  {
    id: "custom",
    naam: "Pakket 3 — Custom Design + CMS",
    prijs: "Vanaf €4.250",
    periode: "excl. btw",
    tagline: "Volledig op maat. Geen template, geen compromis.",
    featured: false,
    doorlooptijd: "8 tot 10 weken",
    inbegrepen: [
      "Onbeperkt pagina's, volledig custom",
      "Ontwerp vanaf nul, gebouwd rond The Big Three",
      "React, technisch zo ver als je wilt",
      "Eigen CMS, precies passend bij de garage",
      "Geavanceerde voorraadbeheermodule",
      "Optie: klantenportaal, offertemodule, integraties",
      "Logo en huisstijl inbegrepen",
      "Hosting en domein-setup inbegrepen",
    ],
  },
];

const ALTIJD_INBEGREPEN = [
  "Intake-gesprek om wensen en doelen helder te krijgen",
  "Voorstel van structuur en eerste ontwerprichting ter goedkeuring",
  "Responsive, werkt goed op telefoon, tablet en desktop",
  "Basis SEO-instellingen voor vindbaarheid in Google",
  "Cookie- en privacyverklaring conform AVG",
  "Twee revisierondes voor oplevering",
  "30 dagen garantie op bugs en fouten na oplevering",
];

const NIET_INBEGREPEN = [
  "Domeinnaam: ca. €12 tot €15 per jaar, op naam van The Big Three",
  "Hostingkosten na oplevering: ca. €8 tot €15 per maand",
  "Teksten en foto's: die lever je aan, of ik beveel een specialist aan",
  "Webshop of e-commerce: op aanvraag, aparte prijsindicatie",
  "Vertalingen: op aanvraag",
  "Aanpassingen na oplevering: €65 per uur",
];

const STAPPEN = [
  {
    nr: "01",
    titel: "Kies een richting",
    tekst: "Dit is nog geen definitieve offerte. Kies een pakket dat past, dan maken we samen de scope concreet.",
  },
  {
    nr: "02",
    titel: "Definitieve offerte",
    tekst: "Je ontvangt een heldere offerte met exacte uren, planning en prijs. Na akkoord starten we.",
  },
  {
    nr: "03",
    titel: "Bouwen",
    tekst: "Ik werk in korte rondes van 1 tot 2 weken. Jij ziet tussentijds wat er staat en geeft feedback.",
  },
  {
    nr: "04",
    titel: "Oplevering",
    tekst: "Live, getest, klaar. Met handleiding zodat jij of je team het zelf kunt bijhouden.",
  },
];

const CONTACT = {
  mail: "manon@manonkeeman.nl",
  tel:  "+31624766568",
  kvk:  "00000000", // ← invullen zodra KVK-nummer binnen is
};

export default function Offerte() {
  return (
    <>
      <Helmet>
        <title>Prijsindicatie {BEDRIJF} · Manon Keeman</title>
        <meta name="description" content={`Persoonlijke prijsindicatie voor ${KLANT}, ${BEDRIJF}.`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="offerte-page">

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="offerte-hero">
          <div className="offerte-container">

            <div className="offerte-header-row">
              <NavLink to="/" className="offerte-mk-link" aria-label="Terug naar home">
                <img src="/MKlogo.jpg" alt="MK" className="offerte-mk-logo" width="36" height="36" />
                <span className="offerte-mk-naam">Manon Keeman</span>
              </NavLink>
              <div className="offerte-datum">{DATUM}</div>
            </div>

            {/* Big Three logo groot in hero */}
            <div className="offerte-client-hero">
              <img
                src="/bigthree-logo.png"
                alt="The Big Three logo"
                className="offerte-client-logo-groot"
              />
              <div className="offerte-client-info">
                <p className="offerte-voor-label">Prijsindicatie voor</p>
                <h1 className="offerte-hero-title">{BEDRIJF}</h1>
                <p className="offerte-client-naam">{KLANT} · Amerikaanse auto's · Nunspeet</p>
              </div>
            </div>

            <div className="offerte-brief">
              <p className="offerte-aanhef">Beste David,</p>
              <p className="offerte-intro-tekst">
                Hieronder een vrijblijvende prijsindicatie voor een nieuwe website voor The Big Three.
                Drie richtingen, oplopend in mogelijkheden, zodat je rustig kunt kijken wat het beste past.
                Dit is nog geen offerte, pas als je een richting kiest maken we samen de scope concreet
                en stuur ik een definitieve offerte met exacte uren en planning.
              </p>
              <p className="offerte-intro-tekst">
                Mijn achtergrond: 20 jaar grafisch ontwerper, nu ook full stack webontwikkelaar (React, Spring Boot, WordPress).
                Dat betekent een website die er goed uitziet én technisch klopt, ook voor een merk waar visuele uitstraling
                belangrijk is, zoals een garage in Amerikaanse auto's.
              </p>
            </div>

          </div>
        </section>

        {/* ── DRIE KAARTEN ─────────────────────────────── */}
        <section className="offerte-section">
          <div className="offerte-container">
            <h2 className="offerte-section-title">De drie richtingen</h2>
            <p className="offerte-section-sub">
              Oplopend in mogelijkheden en investering. Alle pakketten zijn eenmalig geprijsd.
              Na de twee inbegrepen revisierondes gelden losse uren tegen €65.
            </p>
            <div className="offerte-cards">
              {PAKKETTEN.map((p) => (
                <div
                  key={p.id}
                  className={`offerte-card${p.featured ? " offerte-card--featured" : ""}`}
                >
                  {p.label && (
                    <span className="offerte-card-badge">{p.label}</span>
                  )}
                  <h3 className="offerte-card-naam">{p.naam}</h3>
                  <p className="offerte-card-tagline">{p.tagline}</p>
                  <div className="offerte-card-prijs">
                    <span className="offerte-card-bedrag">{p.prijs}</span>
                    <span className="offerte-card-periode">{p.periode}</span>
                  </div>
                  <p className="offerte-card-tijd">Doorlooptijd: {p.doorlooptijd}</p>
                  <ul className="offerte-card-lijst">
                    {p.inbegrepen.map((item) => (
                      <li key={item}>
                        <span className="offerte-check" aria-hidden="true">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${CONTACT.mail}?subject=Interesse in ${p.naam.split(" — ")[1]} — ${BEDRIJF}`}
                    className={`offerte-btn${p.featured ? " offerte-btn--primary" : " offerte-btn--outline"}`}
                  >
                    Dit pakket kiezen
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ALTIJD INBEGREPEN / NIET INBEGREPEN ──────── */}
        <section className="offerte-section offerte-section--alt">
          <div className="offerte-container">
            <h2 className="offerte-section-title">Wat zit erbij, wat niet</h2>
            <div className="offerte-twocol">
              <div className="offerte-inclblock">
                <h3 className="offerte-incl-title offerte-incl-title--ja">Zit in elk pakket</h3>
                <ul className="offerte-incl-lijst">
                  {ALTIJD_INBEGREPEN.map((item) => (
                    <li key={item}>
                      <span className="offerte-check" aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offerte-inclblock">
                <h3 className="offerte-incl-title offerte-incl-title--nee">Valt erbuiten</h3>
                <ul className="offerte-incl-lijst">
                  {NIET_INBEGREPEN.map((item) => (
                    <li key={item}>
                      <span className="offerte-cross" aria-hidden="true">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── UURTARIEF ────────────────────────────────── */}
        <section className="offerte-section">
          <div className="offerte-container">
            <div className="offerte-uurtarief">
              <div className="offerte-uurtarief-tekst">
                <h2 className="offerte-uurtarief-titel">Aanpassingen, meerwerk en onderhoud</h2>
                <p className="offerte-uurtarief-sub">
                  Voor wijzigingen na oplevering, uitbreidingen of doorlopend onderhoud reken ik een uurtarief.
                  Te denken valt aan nieuwe pagina's, content updaten, technische updates of advies.
                  Op verzoek kan ik een onderhoudsabonnement maken van 2 of 4 uur per maand, vaak
                  voordeliger en handiger dan losse uren.
                </p>
              </div>
              <div className="offerte-uurtarief-blok">
                <span className="offerte-uurtarief-bedrag">€65</span>
                <span className="offerte-uurtarief-label">per uur</span>
                <span className="offerte-uurtarief-hint">excl. btw · tarief 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOE VERDER ───────────────────────────────── */}
        <section className="offerte-section offerte-section--alt">
          <div className="offerte-container">
            <h2 className="offerte-section-title">Hoe gaat het verder</h2>
            <p className="offerte-section-sub">
              De vanaf-prijzen zijn realistische startpunten. De uiteindelijke prijs hangt af van
              het aantal pagina's, de complexiteit van de voorraadmodule en eventuele extra wensen.
            </p>
            <div className="offerte-stappen">
              {STAPPEN.map((s) => (
                <div key={s.nr} className="offerte-stap">
                  <div className="offerte-stap-nr">{s.nr}</div>
                  <h3 className="offerte-stap-titel">{s.titel}</h3>
                  <p className="offerte-stap-tekst">{s.tekst}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="offerte-section offerte-cta-section">
          <div className="offerte-container">
            <div className="offerte-cta">
              <h2 className="offerte-cta-titel">Klaar voor een gesprek?</h2>
              <p className="offerte-cta-sub">
                Een garage in Amerikaanse auto's is een merk met karakter, dat verdient een website
                die dat karakter ook laat zien. Bel of mail gerust voor een vrijblijvend gesprek.
              </p>
              <div className="offerte-cta-btns">
                <a
                  href={`mailto:${CONTACT.mail}?subject=Prijsindicatie ${BEDRIJF} — reactie`}
                  className="offerte-btn offerte-btn--primary offerte-btn--lg"
                >
                  ✉ Mail me
                </a>
                <a
                  href={`tel:${CONTACT.tel}`}
                  className="offerte-btn offerte-btn--outline offerte-btn--lg"
                >
                  ☎ Bel me
                </a>
              </div>
              <p className="offerte-cta-meta">
                Manon Keeman · {CONTACT.mail} · {CONTACT.tel}
                {CONTACT.kvk !== "00000000" && ` · KVK ${CONTACT.kvk}`}
              </p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .offerte-page {
          background: var(--bg);
          color: var(--text);
          font-family: Montserrat, ui-sans-serif, system-ui, -apple-system;
          min-height: 100vh;
        }
        .offerte-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .offerte-section { padding: 72px 0; }
        .offerte-section--alt {
          background: var(--bg-alt);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .offerte-section-title {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600;
          margin: 0 0 8px;
        }
        .offerte-section-sub {
          color: var(--muted);
          margin: 0 0 40px;
          font-size: 0.93rem;
          max-width: 66ch;
          line-height: 1.65;
        }

        /* ─ Hero ─ */
        .offerte-hero {
          padding: 48px 0 64px;
          border-bottom: 1px solid var(--border);
        }
        .offerte-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 48px;
        }
        .offerte-mk-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: var(--text);
        }
        .offerte-mk-link:hover { color: var(--accent); text-decoration: none; }
        .offerte-mk-logo {
          width: 36px; height: 36px;
          border-radius: 7px;
          filter: brightness(.55) sepia(1) saturate(1.4);
        }
        .offerte-mk-naam {
          font-weight: 600;
          font-size: 0.88rem;
          letter-spacing: 0.02em;
        }
        .offerte-datum {
          font-size: 0.8rem;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        /* Big Three logo groot */
        .offerte-client-hero {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 44px;
          flex-wrap: wrap;
        }
        .offerte-client-logo-groot {
          width: 200px;
          height: auto;
          border-radius: 12px;
          object-fit: contain;
          flex-shrink: 0;
        }
        @media (max-width: 600px) {
          .offerte-client-logo-groot { width: 140px; }
          .offerte-client-hero { gap: 24px; }
        }

        .offerte-client-info { flex: 1; min-width: 200px; }
        .offerte-voor-label {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 8px;
        }
        .offerte-hero-title {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: clamp(38px, 6.5vw, 76px);
          font-weight: 600;
          line-height: 1.0;
          margin: 0 0 10px;
        }
        .offerte-client-naam {
          font-size: 0.9rem;
          color: var(--muted);
          margin: 0;
        }

        /* Brief intro */
        .offerte-brief {
          border-left: 3px solid var(--accent);
          padding-left: 22px;
          max-width: 70ch;
        }
        .offerte-aanhef {
          font-weight: 600;
          margin: 0 0 10px;
          color: var(--text);
        }
        .offerte-intro-tekst {
          font-size: 0.93rem;
          color: var(--muted);
          line-height: 1.75;
          margin: 0 0 12px;
        }
        .offerte-intro-tekst:last-child { margin-bottom: 0; }

        /* ─ Cards ─ */
        .offerte-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          align-items: start;
        }
        @media (max-width: 860px) {
          .offerte-cards {
            grid-template-columns: 1fr;
            max-width: 440px;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .offerte-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 28px 22px 22px;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .offerte-card:hover {
          border-color: color-mix(in srgb, var(--accent) 40%, transparent);
          box-shadow: 0 12px 32px rgba(0,0,0,0.4);
        }
        .offerte-card--featured {
          border-color: var(--accent);
          box-shadow: 0 8px 32px rgba(201,169,122,0.18);
          transform: translateY(-6px);
        }
        @media (max-width: 860px) { .offerte-card--featured { transform: none; } }

        .offerte-card-badge {
          position: absolute;
          top: -13px; left: 50%;
          transform: translateX(-50%);
          background: var(--accent);
          color: var(--bg);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 20px;
          white-space: nowrap;
        }
        .offerte-card-naam {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 1rem;
          font-weight: 600;
          margin: 6px 0 0;
          color: var(--text);
          line-height: 1.3;
        }
        .offerte-card-tagline {
          font-size: 0.84rem;
          color: var(--muted);
          margin: 0;
          line-height: 1.5;
        }
        .offerte-card-prijs {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .offerte-card-bedrag {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--accent);
        }
        .offerte-card-periode {
          font-size: 0.76rem;
          color: var(--muted);
        }
        .offerte-card-tijd {
          font-size: 0.78rem;
          color: var(--muted);
          margin: -6px 0 0;
          font-style: italic;
        }
        .offerte-card-lijst {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
        }
        .offerte-card-lijst li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.83rem;
          color: var(--muted);
          line-height: 1.45;
        }
        .offerte-check {
          color: var(--accent);
          font-size: 0.7rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ─ Buttons ─ */
        .offerte-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 12px;
          font-size: 0.86rem;
          font-weight: 600;
          border: 1px solid transparent;
          cursor: pointer;
          text-decoration: none;
          transition: filter 0.18s, background 0.18s, border-color 0.18s, color 0.18s;
          white-space: nowrap;
        }
        .offerte-btn--primary {
          background: var(--accent);
          color: var(--bg);
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }
        .offerte-btn--primary:hover { filter: brightness(1.07); text-decoration: none; color: var(--bg); }
        .offerte-btn--outline {
          background: transparent;
          color: var(--text);
          border-color: var(--border);
        }
        .offerte-btn--outline:hover {
          border-color: var(--accent);
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          color: var(--text);
          text-decoration: none;
        }
        .offerte-btn--lg { padding: 15px 30px; font-size: 0.98rem; border-radius: 14px; }

        /* ─ Included / excluded ─ */
        .offerte-twocol {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 36px;
        }
        @media (max-width: 700px) { .offerte-twocol { grid-template-columns: 1fr; } }
        .offerte-inclblock {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 24px;
        }
        .offerte-incl-title {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 0.93rem;
          font-weight: 600;
          margin: 0 0 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .offerte-incl-title--ja::before { content: "✓"; color: var(--accent); font-size: 0.8rem; }
        .offerte-incl-title--nee::before { content: "✕"; color: #d07070; font-size: 0.8rem; }
        .offerte-incl-lijst {
          list-style: none;
          margin: 0; padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .offerte-incl-lijst li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.5;
        }
        .offerte-cross {
          color: #b07070;
          font-size: 0.66rem;
          font-weight: 700;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* ─ Uurtarief ─ */
        .offerte-uurtarief {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 36px 40px;
        }
        @media (max-width: 600px) {
          .offerte-uurtarief { grid-template-columns: 1fr; text-align: center; padding: 28px 22px; }
          .offerte-uurtarief-blok { justify-self: center; }
        }
        .offerte-uurtarief-titel {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 10px;
        }
        .offerte-uurtarief-sub {
          font-size: 0.87rem;
          color: var(--muted);
          margin: 0;
          line-height: 1.7;
          max-width: 56ch;
        }
        .offerte-uurtarief-blok {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
          border-radius: 14px;
          padding: 24px 32px;
          min-width: 130px;
          text-align: center;
        }
        .offerte-uurtarief-bedrag {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          color: var(--accent);
          line-height: 1;
        }
        .offerte-uurtarief-label { font-size: 0.8rem; color: var(--muted); margin-top: 4px; }
        .offerte-uurtarief-hint { font-size: 0.68rem; color: var(--muted); margin-top: 6px; opacity: 0.7; }

        /* ─ Stappen ─ */
        .offerte-stappen {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 36px;
        }
        @media (max-width: 760px) { .offerte-stappen { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 440px) { .offerte-stappen { grid-template-columns: 1fr; } }
        .offerte-stap {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 22px 18px;
        }
        .offerte-stap-nr {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: 1.85rem;
          font-weight: 700;
          color: color-mix(in srgb, var(--accent) 38%, transparent);
          line-height: 1;
          margin-bottom: 10px;
        }
        .offerte-stap-titel { font-size: 0.93rem; font-weight: 600; margin: 0 0 7px; }
        .offerte-stap-tekst { font-size: 0.83rem; color: var(--muted); margin: 0; line-height: 1.55; }

        /* ─ CTA ─ */
        .offerte-cta-section { background: var(--bg); }
        .offerte-cta { text-align: center; padding: 16px 0 8px; }
        .offerte-cta-titel {
          font-family: 'Space Grotesk', Montserrat, ui-sans-serif;
          font-size: clamp(26px, 4vw, 42px);
          font-weight: 600;
          margin: 0 0 14px;
        }
        .offerte-cta-sub {
          color: var(--muted);
          font-size: 0.96rem;
          max-width: 54ch;
          margin: 0 auto 32px;
          line-height: 1.65;
        }
        .offerte-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }
        .offerte-cta-meta {
          font-size: 0.74rem;
          color: var(--muted);
          margin: 0;
          opacity: 0.65;
        }
      `}</style>
    </>
  );
}
