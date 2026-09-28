import { Link } from "../assets/Components/LocaleLink.jsx";
import Seo from "../assets/Components/Seo.jsx";

export default function Privacy() {
    return (
        <section className="section section-alt">
            <Seo
                title="Privacybeleid — ManonIT"
                description="Hoe ManonIT omgaat met jouw persoonsgegevens. Informatie over het contactformulier, nieuwsbrief, Google Analytics en jouw rechten onder de AVG."
                path="/privacy"
            />

            <div className="legal-container">
                <Link to="/" className="back-link">← Terug naar home</Link>

                <header className="legal-header">
                    <h1>Privacybeleid</h1>
                    <p className="legal-meta">ManonIT · Versie 1.1 · Bijgewerkt op 28 september 2026</p>
                </header>

                <div className="legal-body card">

                    <h2>1. Wie is verantwoordelijk?</h2>
                    <p>
                        Dit privacybeleid is van toepassing op de website <strong>manonit.com</strong>,
                        beheerd door:
                    </p>
                    <ul>
                        <li><strong>Naam:</strong> Manon Keeman, handelend onder de naam ManonIT</li>
                        <li><strong>KvK-nummer:</strong> 42053266</li>
                        <li><strong>BTW-nummer:</strong> NL005459093B94</li>
                        <li><strong>E-mail:</strong> <a href="mailto:lets@manonit.com">lets@manonit.com</a></li>
                        <li><strong>Locaties:</strong> Bakkum &amp; Driebergen, Nederland</li>
                    </ul>

                    <hr className="rule" />

                    <h2>2. Welke persoonsgegevens verwerk ik?</h2>

                    <h3>Contactformulier</h3>
                    <p>
                        Als je het contactformulier invult, verwerk ik jouw <strong>naam</strong>,{" "}
                        <strong>e-mailadres</strong> en <strong>berichtinhoud</strong>. Deze gegevens
                        worden ontvangen en opgeslagen via <strong>Netlify Forms</strong>. Ik gebruik ze
                        uitsluitend om jouw vraag of aanvraag te beantwoorden.
                    </p>
                    <p>Bewaartermijn: maximaal 1 jaar, daarna worden de gegevens verwijderd.</p>

                    <h3>Nieuwsbrief (Substack)</h3>
                    <p>
                        Je kunt je inschrijven voor mijn nieuwsbrief via{" "}
                        <strong>Substack</strong>. De inschrijving en verzending gebeuren op het
                        platform van Substack; ik ontvang daar jouw <strong>e-mailadres</strong>.
                        Je kunt je op elk moment uitschrijven via de link onderaan elke nieuwsbrief.
                    </p>
                    <p>
                        Substack heeft een eigen privacybeleid:{" "}
                        <a href="https://substack.com/privacy" target="_blank" rel="noreferrer">
                            substack.com/privacy
                        </a>.
                    </p>

                    <h3>Google Analytics (GA4)</h3>
                    <p>
                        Alleen als je daar via de cookiebanner toestemming voor geeft, gebruikt deze
                        website <strong>Google Analytics 4</strong>
                        (Measurement ID: G-C2623Y1T63) om geanonimiseerde bezoekersstatistieken
                        bij te houden, zoals paginabezoeken, sessieduur en verwijzingsbron.
                        Google Analytics 4 slaat geen volledige IP-adressen op. Ik gebruik de
                        gegevens niet voor advertenties en koppel ze niet aan andere gegevens.
                    </p>
                    <p>
                        Je kunt het meten door Google Analytics blokkeren via een browser-extensie
                        zoals{" "}
                        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noreferrer">
                            Google Analytics Opt-out
                        </a>.
                    </p>

                    <h3>Google Maps</h3>
                    <p>
                        Op de contactsectie staat een kaart van <strong>Google Maps</strong>. Die laadt
                        pas als je toestemming geeft via de cookiebanner of zelf op &quot;Kaart laden&quot;
                        klikt. Bij het laden ontvangt Google onder meer je IP-adres en kan Google
                        cookies plaatsen. Zie het{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
                            privacybeleid van Google
                        </a>.
                    </p>

                    <h3>Google-reviews</h3>
                    <p>
                        Op de homepage toon ik openbare reviews van mijn Google-bedrijfsprofiel.
                        De profielfoto&apos;s van reviewers worden rechtstreeks van Google-servers
                        geladen, waardoor Google je IP-adres ontvangt.
                    </p>

                    <h3>WhatsApp</h3>
                    <p>
                        Als je via de WhatsApp-knop contact opneemt, verloopt dat gesprek via{" "}
                        <strong>WhatsApp (Meta)</strong>. Ik gebruik je telefoonnummer en berichten
                        alleen om je vraag te beantwoorden. Voor de verwerking door WhatsApp geldt het{" "}
                        <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noreferrer">
                            privacybeleid van WhatsApp
                        </a>.
                    </p>

                    <h3>Serverlogbestanden (Netlify)</h3>
                    <p>
                        De website wordt gehost bij <strong>Netlify</strong>. Netlify slaat bij elk
                        bezoek automatisch technische loggegevens op, waaronder je IP-adres, browsertype
                        en het tijdstip van je bezoek. Dit gebeurt op basis van gerechtvaardigd belang
                        (beveiliging en beschikbaarheid van de website). Netlify&apos;s privacybeleid
                        is te vinden op{" "}
                        <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">
                            netlify.com/privacy
                        </a>.
                    </p>

                    <hr className="rule" />

                    <h2>3. Op welke grondslag verwerk ik jouw gegevens?</h2>
                    <ul>
                        <li><strong>Contactformulier en WhatsApp:</strong> uitvoering van een overeenkomst of gerechtvaardigd belang (beantwoorden van jouw vraag)</li>
                        <li><strong>Nieuwsbrief:</strong> toestemming (jij schrijft je actief in)</li>
                        <li><strong>Google Analytics:</strong> toestemming (via de cookiebanner)</li>
                        <li><strong>Serverlogbestanden:</strong> gerechtvaardigd belang (beveiliging)</li>
                        <li><strong>Google Maps:</strong> toestemming (via de cookiebanner of door zelf op &quot;Kaart laden&quot; te klikken)</li>
                        <li><strong>Google-reviews:</strong> gerechtvaardigd belang (tonen van klantervaringen)</li>
                    </ul>

                    <hr className="rule" />

                    <h2>4. Worden gegevens gedeeld met derden?</h2>
                    <p>
                        Ik verkoop jouw gegevens niet en deel ze niet met derden, behalve met de
                        volgende verwerkers die noodzakelijk zijn voor het functioneren van de website:
                    </p>
                    <ul>
                        <li><strong>Netlify</strong> — hosting en formulierverwerking (VS, onder EU-VS Data Privacy Framework)</li>
                        <li><strong>Substack</strong> — nieuwsbriefverzending (VS, eigen privacybeleid van toepassing)</li>
                        <li><strong>Google LLC</strong> — Analytics, Maps en reviews (VS, onder EU-VS Data Privacy Framework)</li>
                        <li><strong>WhatsApp Ireland (Meta)</strong> — alleen als je zelf via WhatsApp contact opneemt</li>
                    </ul>

                    <hr className="rule" />

                    <h2>5. Jouw rechten</h2>
                    <p>Op grond van de AVG heb je de volgende rechten:</p>
                    <ul>
                        <li><strong>Inzage</strong> — je kunt opvragen welke gegevens ik van je heb</li>
                        <li><strong>Correctie</strong> — je kunt onjuiste gegevens laten corrigeren</li>
                        <li><strong>Verwijdering</strong> — je kunt vragen jouw gegevens te verwijderen</li>
                        <li><strong>Bezwaar</strong> — je kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang</li>
                        <li><strong>Dataportabiliteit</strong> — je kunt een kopie van jouw gegevens opvragen</li>
                    </ul>
                    <p>
                        Stuur een e-mail naar{" "}
                        <a href="mailto:lets@manonit.com">lets@manonit.com</a> om een verzoek in te
                        dienen. Ik reageer binnen 30 dagen.
                    </p>
                    <p>
                        Je hebt ook het recht om een klacht in te dienen bij de{" "}
                        <a href="https://www.autoriteitpersoonsgegevens.nl" target="_blank" rel="noreferrer">
                            Autoriteit Persoonsgegevens
                        </a>.
                    </p>

                    <hr className="rule" />

                    <h2>6. Cookies</h2>
                    <p>
                        Deze website gebruikt <strong>geen advertentie- of marketingcookies</strong>.
                        Bij je eerste bezoek vraag ik via een cookiebanner om toestemming. Pas als je
                        die geeft, plaatst Google Analytics een analytische cookie (<code>_ga</code>)
                        met een willekeurig ID om bezoeken van elkaar te onderscheiden, en laadt de
                        Google Maps-kaart, die ook cookies van Google kan plaatsen. Weiger je, dan
                        worden deze cookies niet geplaatst.
                    </p>
                    <p>
                        Je keuze wordt lokaal in je browser bewaard. Je kunt die altijd wijzigen via
                        &quot;Cookie-instellingen&quot; onderaan elke pagina. Trek je je toestemming
                        in, dan verwijder ik de Google Analytics-cookies.
                    </p>

                    <hr className="rule" />

                    <h2>7. Beveiliging</h2>
                    <p>
                        De website maakt gebruik van HTTPS (TLS-encryptie). Formuliergegevens worden
                        versleuteld verzonden. Ik neem passende technische en organisatorische
                        maatregelen om jouw gegevens te beveiligen.
                    </p>

                    <hr className="rule" />

                    <h2>8. Wijzigingen</h2>
                    <p>
                        Dit privacybeleid kan worden bijgewerkt. De meest recente versie is altijd
                        te vinden op <a href="https://manonit.com/privacy">manonit.com/privacy</a>.
                        De publicatiedatum bovenaan geeft aan wanneer de laatste wijziging is gemaakt.
                    </p>

                    <hr className="rule" />

                    <h2>9. Contact</h2>
                    <p>
                        Vragen over dit privacybeleid? Neem contact op via{" "}
                        <a href="mailto:lets@manonit.com">lets@manonit.com</a>.
                    </p>

                </div>

                <div className="legal-back">
                    <Link to="/" className="back-link">← Terug naar home</Link>
                </div>
            </div>

            <style>{`
        .legal-container {
          max-width: 72ch;
          margin: 0 auto;
          padding: clamp(24px, 4vw, 64px) clamp(16px, 3vw, 32px);
        }
        .legal-header { margin: 16px 0 24px; }
        .legal-header h1 { margin: 0 0 6px; }
        .legal-meta { color: var(--muted); font-size: .85rem; margin: 0; }
        .legal-body {
          padding: clamp(20px, 3vw, 36px);
          border: 1px solid var(--border);
          border-radius: 14px;
          background: var(--bg-alt);
          box-shadow: var(--shadow);
        }
        .legal-body h2 { margin: 24px 0 10px; font-size: 1.1rem; }
        .legal-body h2:first-child { margin-top: 0; }
        .legal-body h3 { margin: 16px 0 6px; font-size: .98rem; color: var(--muted); }
        .legal-body p { margin: 0 0 12px; line-height: 1.72; }
        .legal-body ul { margin: 0 0 12px; padding-left: 1.3rem; display: flex; flex-direction: column; gap: 6px; }
        .legal-body li { line-height: 1.6; }
        .legal-body a { color: var(--accent-ink); }
        .legal-body a:hover { text-decoration: underline; }
        .legal-body code { font-size: .88em; background: var(--border); padding: 2px 6px; border-radius: 4px; }
        .rule { height: 1px; background: var(--border); margin: 22px 0; border: none; }
        .back-link { display: inline-block; color: var(--accent-ink); text-decoration: none; font-size: .92rem; margin-bottom: 16px; }
        .back-link:hover { text-decoration: underline; }
        .legal-back { margin-top: 24px; }
      `}</style>
        </section>
    );
}
