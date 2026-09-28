# ManonIT.com

Website van **ManonIT**, het bedrijf van Manon Keeman: freelance webdeveloper en webdesigner. De site toont diensten, tarieven, onderhoudsabonnementen, portfolio en een journal, en is bedoeld om nieuwe klanten te trekken.

Live: [manonit.com](https://manonit.com)

---

## Tech stack

| Laag                | Technologie                                          |
|---------------------|------------------------------------------------------|
| Framework           | React 19 + Vite 6                                    |
| Routing             | React Router DOM 7                                   |
| Talen               | i18next + react-i18next (7 talen)                    |
| SEO                 | react-helmet-async, JSON-LD, prerendering (Puppeteer) |
| Iconen              | react-icons                                          |
| Hosting             | Netlify (Forms, edge function voor social previews)  |
| Afbeeldingen        | AVIF + WebP in 3 formaten, gemaakt met sharp         |
| Statistieken        | Google Analytics 4, pas na toestemming via cookiebanner |

---

## Lokaal draaien

```bash
npm install
npm run dev
```

Opent op `http://localhost:5173`.

## Bouwen

```bash
npm run build
```

Dit doet twee dingen:

1. `vite build` bouwt de app naar `dist/`.
2. `scripts/prerender.mjs` opent elke URL uit `public/sitemap.xml` in headless Chrome en slaat de volledig gerenderde HTML op als `dist/<pad>.html` (Netlify serveert dat onder `/<pad>` zonder doorverwijzing).

Stap 2 is belangrijk voor vindbaarheid: zonder prerendering is elke pagina leeg voor bots die geen JavaScript uitvoeren (zoals GPTBot, ClaudeBot en PerplexityBot). Mislukt het prerenderen, dan faalt de build niet; de site werkt dan als gewone SPA.

Netlify voert `npm run build` automatisch uit bij elke push naar `main`. Pagina's die niet geprerenderd zijn, krijgen via de fallback in `netlify.toml` de onbewerkte app-shell (`dist/app.html`).

> Een nieuwe pagina moet in `public/sitemap.xml` staan, anders wordt hij niet geprerenderd.

---

## Structuur

```
src/
├── App.jsx                   # Routes (NL en /en/)
├── Styles.css                # Kleuren, typografie, knoppen
├── assets/
│   ├── Components/           # Navbar, Footer, Seo, CookieConsent, ...
│   └── Helpers/              # consent.js, contentHelpers, imageHelpers (MockupPicture)
├── content/
│   └── contentJournal.json   # Lijst van journalartikelen
├── i18n/locales/             # nl, en, fr, de, es, it, uk
└── pages/
    ├── Hero.jsx, Services.jsx (diensten, tarieven, onderhoud), Portfolio.jsx,
    │   Testimonials.jsx, HomeJournal.jsx, Contact.jsx, About.jsx, Journal.jsx
    ├── ArticlesJournal/      # Artikelen; BlogArticle.jsx is de layout voor nieuwe blogs
    └── Portfolio/            # Projectpagina's
public/
├── Portfolio/                # Mockups (AVIF + WebP, 400/800/1200)
├── journal/                  # Blogomslagen
├── robots.txt                # Staat zoekmachines en AI-crawlers expliciet toe
├── llms.txt                  # Samenvatting van ManonIT voor AI-assistenten
└── sitemap.xml               # Ook de lijst van pagina's die geprerenderd worden
scripts/
└── prerender.mjs
netlify/edge-functions/
└── og-inject.js              # Social previews (LinkedIn, WhatsApp) voor blogartikelen
```

---

## Pagina's

| Route                          | Inhoud                                                          |
|--------------------------------|-----------------------------------------------------------------|
| `/`                            | Home: hero, diensten, tarieven, onderhoud, portfolio, reviews, blogs, contact |
| `/about`                       | Over Manon                                                      |
| `/journal`                     | Alle artikelen, nieuwste eerst                                  |
| `/journal/:slug`               | Artikel                                                         |
| `/frontendvredestein`          | Project: Villa Vredestein                                       |
| `/webdesignacupuncture`        | Project: Acupuncture by Saskia                                  |
| `/backendstudentendashboard`   | Project: CasaCrew, verhuurdashboard voor hospita's              |
| `/thebigthree`                 | Project: The Big Three                                          |
| `/marieboddaert`               | Project: Marie H. Boddaert                                      |
| `/privacy`, `/colofon`         | Juridisch (alleen NL)                                           |

Elke pagina bestaat ook onder `/en/...`. De andere talen wisselen alleen de tekst, niet de URL. `/faq` stuurt door naar `/journal/wat-kost-een-website`.

---

## Een blog toevoegen

1. Maak `src/pages/ArticlesJournal/MijnBlog.jsx` met `BlogArticle` (zie `AiInMijnWerk.jsx` als voorbeeld).
2. Registreer het in `ArticleRoute.jsx` (lazy import, `ARTICLE_META`, `views`).
3. Voeg het toe aan `src/content/contentJournal.json`.
4. Voeg titel en samenvatting toe in `journalSection.articles` en `seo.journal` (nl en en).
5. Voeg een omslag toe in `public/journal/` (`-400w`, `-800w`, `-1200w`, AVIF en WebP).
6. Voeg de social preview toe in `netlify/edge-functions/og-inject.js`.
7. Voeg beide URL's (NL en EN) toe aan `public/sitemap.xml`.

Schrijf zonder lange streepjes (— en –).

---

## SEO en AI-vindbaarheid

- Prerendering: elke pagina uit de sitemap staat als volledige HTML online
- Eigen titel, beschrijving en canonical per pagina, plus hreflang voor NL en EN
- JSON-LD in `index.html`: Person, WebSite en ProfessionalService (met diensten, tarieven en reviews)
- `robots.txt` staat GPTBot, ClaudeBot, PerplexityBot en Google-Extended expliciet toe
- `llms.txt` met een samenvatting voor AI-assistenten
- Houd de reviews in de JSON-LD gelijk aan de reviews op de site

---

## Privacy en cookies

Google Analytics en de Google Maps-kaart laden pas na toestemming via de cookiebanner (`CookieConsent.jsx`, `consent.js`). Zonder keuze of na weigeren wordt geen `_ga`-cookie geplaatst. Bezoekers wijzigen hun keuze via "Cookie-instellingen" in de footer.

---

## Contactformulier

Verwerkt via **Netlify Forms**. De verborgen formulierdefinitie in `index.html` zorgt dat Netlify het formulier herkent bij de build.

---

## Onderhoud

- **Dependabot** (`.github/dependabot.yml`) opent maandelijks een pull request voor verouderde npm-pakketten.
- Afbeeldingen maak je met sharp (zie `scripts/resize.mjs`) en commit je naar `public/`.

---

## Huisstijl

```css
--bg:         #FFFFFF   /* achtergrond */
--bg-alt:     #F5F5F7   /* afwisselende secties, kaarten */
--text:       #1D1D1F   /* tekst en knoppen */
--muted:      #6E6E73   /* secundaire tekst */
--accent:     #FF6B1A   /* oranje accent: iconen, labels, hover */
--accent-ink: #C2410C   /* oranje voor tekstlinks (beter leesbaar) */
```

---

## Licentie

Code en content © Manon Keeman. Alle rechten voorbehouden.
