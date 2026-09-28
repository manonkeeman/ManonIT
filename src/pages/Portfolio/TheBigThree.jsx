import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";
import { MockupPicture } from "../../assets/Helpers/imageHelpers.jsx";

const MOCKUP  = "/Portfolio/de-grote-drie-mockup";
const LOGO    = "/Portfolio/bigthree-logo.png";
const LIVE_URL = "https://thebigthree.nl";

const SCHEMA = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Big Three",
    "alternateName": "The Big Three",
    "url": "https://thebigthree.nl",
    "description": "Website voor The Big Three (De Grote Drie), een garage voor Amerikaanse auto's in Nunspeet.",
    "creator": {
        "@type": "Person",
        "@id": "https://manonit.com/#manon",
        "name": "Manon Keeman",
    },
    "isPartOf": { "@id": "https://manonit.com/#website" },
};

const content = {
    nl: {
        liveBtn: "Bekijk de website",
        title: "Webdesign · The Big Three",
        subtitle: "Garagewebsite · live",
        tagline: "Gebouwd in Amerika.\nGereviseerd in Nunspeet.",
        badge: "Live",
        intro: "The Big Three (De Grote Drie) is een garage in Nunspeet voor Amerikaanse auto's. Verkoop, onderhoud en restauratie van campers, pick-ups en klassiekers, door een eigenaar die jarenlang in de VS werkte. Voor hem ontwierp en bouwde ik een website met net zoveel karakter als zijn auto's.",
        cards: [
            { label: "Wat", text: "Een complete website voor een garage in Amerikaanse auto's: voertuigen, werkplaats, het verhaal van de eigenaar en contact." },
            { label: "Hoe", text: "Dark theme met Amerikaans karakter en grote beelden. Met een CMS waarin David zelf voertuigen en teksten beheert, SEO voor Google en de site in drie talen: Nederlands, Engels en Duits." },
            { label: "Status", text: "Live. Bezoekers bellen David direct vanaf de homepage of bekijken de voorraad voertuigen." },
        ],
        challengeTitle: "De uitdaging",
        challenge: "Een garage in Amerikaanse auto's vraagt om een website die voelt als een filmposter, niet als een productpagina. De stijl moest meteen duidelijk maken wat The Big Three is, nog voordat je één woord leest.",
        backBtn: "← Terug naar Portfolio",
    },
    en: {
        liveBtn: "View the website",
        title: "Web design · The Big Three",
        subtitle: "Garage website · live",
        tagline: "Built in America.\nServiced in Nunspeet.",
        badge: "Live",
        intro: "The Big Three (De Grote Drie) is a garage in Nunspeet for American cars. Sales, maintenance and restoration of campers, pick-ups and classics, by an owner who worked in the US for many years. I designed and built a website with as much character as his cars.",
        cards: [
            { label: "What", text: "A complete website for an American car garage: vehicles, workshop, the owner's story and contact." },
            { label: "How", text: "Dark theme with American character and big imagery. With a CMS where David manages vehicles and copy himself, SEO for Google and the site in three languages: Dutch, English and German." },
            { label: "Status", text: "Live. Visitors call David straight from the homepage or browse the vehicles in stock." },
        ],
        challengeTitle: "The challenge",
        challenge: "A garage specialising in American cars needs a website that feels like a movie poster, not a product page. The style had to make it clear what The Big Three is before you read a single word.",
        backBtn: "← Back to Portfolio",
    },
    fr: {
        liveBtn: "Voir le site",
        title: "Webdesign · The Big Three",
        subtitle: "Site de garage · en ligne",
        tagline: "Construit en Amérique.\nRévisé à Nunspeet.",
        badge: "En ligne",
        intro: "The Big Three (De Grote Drie) est un garage à Nunspeet spécialisé dans les voitures américaines : vente, entretien et restauration de camping-cars, pick-ups et classiques. J'ai conçu et développé un site avec autant de caractère que ses voitures.",
        cards: [
            { label: "Quoi", text: "Un site complet pour un garage de voitures américaines : véhicules, atelier, histoire du propriétaire et contact." },
            { label: "Comment", text: "Thème sombre au caractère américain et grandes images. Avec un CMS où David gère lui-même véhicules et textes, du SEO pour Google et un site en trois langues : néerlandais, anglais et allemand." },
            { label: "Statut", text: "En ligne. Les visiteurs appellent David directement depuis la page d'accueil." },
        ],
        challengeTitle: "Le défi",
        challenge: "Un garage de voitures américaines a besoin d'un site qui ressemble à une affiche de film, pas à une page produit.",
        backBtn: "← Retour au Portfolio",
    },
    de: {
        liveBtn: "Website ansehen",
        title: "Webdesign · The Big Three",
        subtitle: "Werkstatt-Website · live",
        tagline: "In Amerika gebaut.\nIn Nunspeet gewartet.",
        badge: "Live",
        intro: "The Big Three (De Grote Drie) ist eine Werkstatt in Nunspeet für amerikanische Autos: Verkauf, Wartung und Restaurierung von Campern, Pick-ups und Klassikern. Ich habe eine Website entworfen und gebaut, die so viel Charakter hat wie seine Autos.",
        cards: [
            { label: "Was", text: "Eine komplette Website für eine Werkstatt für amerikanische Autos: Fahrzeuge, Werkstatt, Geschichte des Inhabers und Kontakt." },
            { label: "Wie", text: "Dunkles Design mit amerikanischem Charakter und großen Bildern. Mit einem CMS, in dem David Fahrzeuge und Texte selbst pflegt, SEO für Google und die Website in drei Sprachen: Niederländisch, Englisch und Deutsch." },
            { label: "Status", text: "Live. Besucher rufen David direkt von der Startseite aus an." },
        ],
        challengeTitle: "Die Herausforderung",
        challenge: "Eine Werkstatt für amerikanische Autos braucht eine Website, die sich wie ein Filmplakat anfühlt, nicht wie eine Produktseite.",
        backBtn: "← Zurück zum Portfolio",
    },
    es: {
        liveBtn: "Ver la web",
        title: "Diseño web · The Big Three",
        subtitle: "Web de taller · online",
        tagline: "Fabricado en América.\nRevisado en Nunspeet.",
        badge: "Online",
        intro: "The Big Three (De Grote Drie) es un taller en Nunspeet de coches americanos: venta, mantenimiento y restauración de autocaravanas, pick-ups y clásicos. Diseñé y construí una web con tanto carácter como sus coches.",
        cards: [
            { label: "Qué", text: "Una web completa para un taller de coches americanos: vehículos, taller, la historia del dueño y contacto." },
            { label: "Cómo", text: "Tema oscuro con carácter americano e imágenes grandes. Con un CMS donde David gestiona él mismo vehículos y textos, SEO para Google y la web en tres idiomas: neerlandés, inglés y alemán." },
            { label: "Estado", text: "Online. Los visitantes llaman a David directamente desde la portada." },
        ],
        challengeTitle: "El reto",
        challenge: "Un taller de coches americanos necesita una web que parezca un cartel de película, no una página de producto.",
        backBtn: "← Volver al Portfolio",
    },
    it: {
        liveBtn: "Vedi il sito",
        title: "Web design · The Big Three",
        subtitle: "Sito officina · online",
        tagline: "Costruito in America.\nRevisionato a Nunspeet.",
        badge: "Online",
        intro: "The Big Three (De Grote Drie) è un'officina a Nunspeet per auto americane: vendita, manutenzione e restauro di camper, pick-up e classiche. Ho progettato e realizzato un sito con lo stesso carattere delle sue auto.",
        cards: [
            { label: "Cosa", text: "Un sito completo per un'officina di auto americane: veicoli, officina, la storia del titolare e contatti." },
            { label: "Come", text: "Tema scuro dal carattere americano e grandi immagini. Con un CMS in cui David gestisce da solo veicoli e testi, SEO per Google e il sito in tre lingue: olandese, inglese e tedesco." },
            { label: "Stato", text: "Online. I visitatori chiamano David direttamente dalla homepage." },
        ],
        challengeTitle: "La sfida",
        challenge: "Un'officina di auto americane ha bisogno di un sito che sembri un poster cinematografico, non una pagina prodotto.",
        backBtn: "← Torna al Portfolio",
    },
    uk: {
        liveBtn: "Переглянути сайт",
        title: "Вебдизайн · The Big Three",
        subtitle: "Сайт автомайстерні · онлайн",
        tagline: "Зроблено в Америці.\nОбслуговується в Нунспіт.",
        badge: "Онлайн",
        intro: "The Big Three (De Grote Drie) це автомайстерня в Нунспіті для американських авто: продаж, обслуговування та реставрація кемперів, пікапів і класики. Я розробила сайт із таким самим характером, як і його авто.",
        cards: [
            { label: "Що", text: "Повний сайт для майстерні американських авто: транспорт, майстерня, історія власника й контакти." },
            { label: "Як", text: "Темна тема з американським характером і великими фото. З CMS, де Девід сам керує авто й текстами, SEO для Google і сайтом трьома мовами: нідерландською, англійською та німецькою." },
            { label: "Статус", text: "Онлайн. Відвідувачі телефонують Девіду просто з головної сторінки." },
        ],
        challengeTitle: "Виклик",
        challenge: "Майстерні американських авто потрібен сайт, що нагадує кіноафішу, а не сторінку товару.",
        backBtn: "← Назад до Портфоліо",
    },
};

export default function TheBigThree() {
    const { i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.en;

    return (
        <article className="bt-page section">
            <Seo
                title={lang === "nl" ? "The Big Three · Website voor een garage in Nunspeet | ManonIT" : "The Big Three · Website for a garage in Nunspeet | ManonIT"}
                description={lang === "nl"
                    ? "Website voor The Big Three (De Grote Drie), garage voor Amerikaanse auto's in Nunspeet. Met CMS, SEO en in drie talen. Ontworpen en gebouwd door ManonIT."
                    : "Website for The Big Three, a garage for American cars in Nunspeet. With a CMS, SEO and three languages. Designed and built by ManonIT."}
                path="/thebigthree"
                image="https://manonit.com/og/project-the-big-three.jpg"
            />
            <JsonLd data={SCHEMA} />

            <nav aria-label="Breadcrumb" className="breadcrumbs">
                <Link to="/">Home</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <Link to="/#portfolio">Portfolio</Link>
                <span className="breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">The Big Three</span>
            </nav>

            {/* ── HERO ── */}
            <header className="bt-hero">
                <div className="bt-hero-text">
                    <div className="bt-badge-row">
                        <span className="bt-badge">{c.badge}</span>
                        <p className="bt-label">{c.subtitle}</p>
                    </div>
                    <h1 className="bt-title">{c.title}</h1>
                    <p className="bt-tagline">{c.tagline}</p>
                    <div className="bt-tags">
                        <span className="tag">Webdesign</span>
                        <span className="tag">CMS</span>
                        <span className="tag">SEO</span>
                        <span className="tag">NL · EN · DE</span>
                        <span className="tag">Responsive</span>
                    </div>
                    <a className="btn btn-primary bt-cta" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn} ↗</a>
                    <div className="bt-logo-row">
                        <img src={LOGO} alt="The Big Three logo" className="bt-logo" />
                    </div>
                </div>
                <div className="bt-hero-image">
                    <MockupPicture base={MOCKUP} alt="Website The Big Three op desktop en mobiel" className="bt-cover" eager />
                </div>
            </header>

            {/* ── INTRO ── */}
            <section className="bt-intro">
                <p>{c.intro}</p>
            </section>

            {/* ── CARDS ── */}
            <section className="bt-cards">
                {c.cards.map((card) => (
                    <div className="bt-card" key={card.label}>
                        <span className="bt-card-label">{card.label}</span>
                        <p className="bt-card-text">{card.text}</p>
                    </div>
                ))}
            </section>

            {/* ── CHALLENGE ── */}
            <section className="bt-challenge">
                <h2>{c.challengeTitle}</h2>
                <blockquote>{c.challenge}</blockquote>
            </section>

            {/* ── FOOTER ── */}
            <footer className="bt-footer">
                <Link className="btn btn-outline" to="/#portfolio">{c.backBtn}</Link>
                <a className="btn btn-primary" href={LIVE_URL} target="_blank" rel="noreferrer">{c.liveBtn} ↗</a>
            </footer>

            <style>{`
        .bt-page { max-width: 1000px; margin: 0 auto; padding: 28px 20px 60px; }

        .bt-hero {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px 0 40px;
        }

        .bt-badge-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 12px;
        }
        .bt-badge {
          font-size: .7rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase;
          background: var(--accent); color: var(--bordeaux);
          padding: 3px 10px; border-radius: 99px;
        }
        .bt-label {
          font-size: .8rem; font-weight: 600; letter-spacing: .1em;
          text-transform: uppercase; color: var(--muted); margin: 0;
        }
        .bt-title {
          font-size: clamp(2rem, 4.5vw, 3.2rem);
          line-height: 1.1; margin: 0 0 16px;
        }
        .bt-tagline {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--muted); white-space: pre-line;
          line-height: 1.5; margin: 0 0 20px; font-style: italic;
        }
        .bt-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
        .bt-logo-row { margin-top: 20px; }
        .bt-logo {
          height: 64px; width: auto; border-radius: 8px;
          object-fit: contain;
        }

        .bt-hero-image {
          border-radius: 16px; overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,.18);
        }
        .bt-cover { display: block; width: 100%; height: auto; border-radius: 0; }

        .bt-intro {
          border-left: 3px solid var(--accent);
          padding: 4px 0 4px 20px;
          margin: 0 0 48px;
        }
        .bt-intro p {
          font-size: 1.1rem; line-height: 1.7;
          color: var(--muted); margin: 0;
        }

        .bt-cards {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 20px; margin-bottom: 48px;
        }
        .bt-card {
          background: var(--bg-alt); border: 1px solid var(--border);
          border-radius: 14px; padding: 24px 22px;
        }
        .bt-card-label {
          display: block; font-size: .75rem; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--accent); margin-bottom: 10px;
        }
        .bt-card-text {
          font-size: .95rem; line-height: 1.6;
          color: var(--text); margin: 0;
        }

        .bt-challenge { margin-bottom: 48px; }
        .bt-challenge h2 {
          font-size: .85rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: var(--accent);
          margin: 0 0 16px;
        }
        .bt-challenge blockquote {
          font-size: clamp(1.05rem, 2vw, 1.2rem);
          line-height: 1.65; color: var(--text);
          margin: 0; font-style: italic;
          border-left: 3px solid var(--bordeaux);
          padding-left: 20px;
        }

        .bt-footer {
          display: flex; gap: 14px; flex-wrap: wrap;
          padding-top: 16px; border-top: 1px solid var(--border);
        }

        .tag { font-size: .82rem; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; color: var(--muted); background: var(--bg); white-space: nowrap; }

        @media (max-width: 720px) {
          .bt-hero { grid-template-columns: 1fr; gap: 28px; padding: 28px 0 24px; }
          .bt-hero-image { order: -1; }
          .bt-cards { grid-template-columns: 1fr; }
        }
      `}</style>
        </article>
    );
}
