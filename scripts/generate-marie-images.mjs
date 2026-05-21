import sharp from "sharp";
import { mkdirSync } from "fs";

mkdirSync("public/Portfolio", { recursive: true });

// Echte kleuren van marie-boddaert.netlify.app:
// Header: pastelgradiënt lila (#c4b2d6) → roze (#e0a0b8) → perzik (#f0c4a0)
// Quote-balk: zachte roze (#f0c0c8)
// Blog-kaart 1: zalmroze (#f2c4c4)
// Blog-kaart 2: muntgroen (#b8d8c4)
// Blog-kaart 3: perzik (#f0c8a4)
// Navigatieknop: donker navy (#252535)
// Tekst: #2a2535

// ── Browser mockup (page hero) ───────────────────────────────────────────────
const mockupSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
  <defs>
    <!-- Pastelgradiënt header: lila → roze → perzik (horizontaal) -->
    <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#c4b2d6"/>
      <stop offset="45%"  stop-color="#e0a0b8"/>
      <stop offset="100%" stop-color="#f0c4a0"/>
    </linearGradient>
    <!-- Quote-balk gradiënt: zachte roze -->
    <linearGradient id="quoteGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#e8b4c0"/>
      <stop offset="50%"  stop-color="#f0bcc8"/>
      <stop offset="100%" stop-color="#e8b8c4"/>
    </linearGradient>
    <!-- Buitenste desktop-achtergrond -->
    <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ddd0e8"/>
      <stop offset="100%" stop-color="#c8bcd8"/>
    </linearGradient>
    <!-- Fade onderaan website -->
    <linearGradient id="fadeBot" x1="0" y1="0" x2="0" y2="1">
      <stop offset="55%" stop-color="#faf8f6" stop-opacity="0"/>
      <stop offset="100%" stop-color="#f5f0ea" stop-opacity="1"/>
    </linearGradient>
    <clipPath id="siteClip">
      <rect x="40" y="72" width="1120" height="608"/>
    </clipPath>
    <clipPath id="browserClip">
      <rect x="40" y="24" width="1120" height="656" rx="12"/>
    </clipPath>
  </defs>

  <!-- Desktop achtergrond (dezelfde pastelsfeer) -->
  <rect width="1200" height="720" fill="url(#deskGrad)"/>

  <!-- Browser shell -->
  <rect x="40" y="24" width="1120" height="656" rx="12" fill="#e0d4ec" stroke="#c8bcdc" stroke-width="1.5"/>

  <!-- Browser chrome bar -->
  <rect x="40" y="24" width="1120" height="48" rx="12" fill="#d4c8e4"/>
  <rect x="40" y="52" width="1120" height="20" fill="#d4c8e4"/>

  <!-- Traffic lights -->
  <circle cx="72" cy="48" r="7" fill="#ff5f57"/>
  <circle cx="96" cy="48" r="7" fill="#febc2e"/>
  <circle cx="120" cy="48" r="7" fill="#28c840"/>

  <!-- URL-balk -->
  <rect x="168" y="33" width="680" height="28" rx="14" fill="#f0ecf6" stroke="#c0b4d4" stroke-width="1"/>
  <text x="508" y="52" font-family="ui-monospace, monospace" font-size="12" fill="#7060a0" text-anchor="middle">marie-boddaert.netlify.app</text>

  <!-- ── Website inhoud ── -->

  <!-- Header met pastelgradiënt (nav + titel) -->
  <rect x="40" y="72" width="1120" height="220" fill="url(#headerGrad)" clip-path="url(#browserClip)"/>

  <!-- Site-navigatie balk -->
  <rect x="40" y="72" width="1120" height="52" fill="rgba(255,255,255,0.15)" clip-path="url(#browserClip)"/>

  <!-- Nav items -->
  <rect x="110" y="82" width="56" height="32" rx="4" fill="rgba(255,255,255,0.9)"/>
  <text x="138" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="#2a2535" text-anchor="middle" font-weight="600">HOME</text>

  <text x="236" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="rgba(42,37,53,0.85)" text-anchor="middle">VERHALEN</text>
  <text x="336" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="rgba(42,37,53,0.85)" text-anchor="middle">GEDICHTEN</text>
  <text x="455" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="rgba(42,37,53,0.85)" text-anchor="middle">KATTENBELLEN</text>
  <text x="556" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="rgba(42,37,53,0.85)" text-anchor="middle">OVER</text>
  <text x="640" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" fill="rgba(42,37,53,0.85)" text-anchor="middle">CONTACT</text>

  <!-- Nieuwsbrief-knop (donker navy) -->
  <rect x="700" y="82" width="110" height="32" rx="4" fill="#252535"/>
  <text x="755" y="102" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="600">NIEUWSBRIEF</text>

  <!-- Zoekbalk -->
  <rect x="440" y="128" width="320" height="30" rx="4" fill="rgba(255,255,255,0.7)" stroke="rgba(42,37,53,0.2)" stroke-width="1"/>
  <text x="570" y="148" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(42,37,53,0.4)" text-anchor="middle">Zoeken...</text>
  <text x="748" y="148" font-family="ui-sans-serif, system-ui" font-size="14" fill="rgba(42,37,53,0.5)" text-anchor="middle">🔍</text>

  <!-- Blog-titel (groot, script-achtig) -->
  <text x="600" y="220" font-family="Georgia, 'Times New Roman', serif" font-size="52" fill="#2a2535" text-anchor="middle" font-style="italic" font-weight="700">Blog</text>

  <!-- Auteursnaam onder titel -->
  <text x="600" y="252" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#2a2535" text-anchor="middle" letter-spacing="3">MARIE H. BODDAERT</text>

  <!-- Quote-balk (zacht roze) -->
  <rect x="40" y="292" width="1120" height="110" fill="url(#quoteGrad)" clip-path="url(#browserClip)"/>
  <text x="600" y="342" font-family="Georgia, 'Times New Roman', serif" font-size="18" fill="#4a2535" text-anchor="middle" font-style="italic">"Alles is hetzelfde, maar alles is anders. Dit is mijn nieuw hoofdstuk."</text>

  <!-- Slider-stippen -->
  <circle cx="576" cy="378" r="5" fill="#4a2535"/>
  <circle cx="594" cy="378" r="4" fill="rgba(74,37,53,0.3)"/>
  <circle cx="610" cy="378" r="4" fill="rgba(74,37,53,0.3)"/>
  <circle cx="626" cy="378" r="4" fill="rgba(74,37,53,0.3)"/>

  <!-- Witte content-achtergrond -->
  <rect x="40" y="402" width="1120" height="330" fill="#faf8f6" clip-path="url(#browserClip)"/>

  <!-- "Recente posts" label -->
  <text x="110" y="438" font-family="Georgia, 'Times New Roman', serif" font-size="20" fill="#2a2535" font-style="italic">Recente posts</text>
  <text x="288" y="438" font-family="ui-sans-serif, system-ui" font-size="12" fill="#9090a0">27 posts</text>
  <line x1="110" y1="448" x2="1090" y2="448" stroke="#d4c8dc" stroke-width="1"/>

  <!-- Blog-kaart 1 — zalmroze -->
  <rect x="80" y="462" width="310" height="190" rx="8" fill="#f2c4c4" stroke="#e0b0b0" stroke-width="1"/>
  <rect x="80" y="516" width="310" height="136" rx="0" fill="#fdfaf9"/>
  <rect x="80" y="620" width="310" height="32" rx="8" fill="#fdfaf9"/>
  <text x="100" y="498" font-family="Georgia, serif" font-size="14" fill="#2a2535" font-weight="600">Een stille ochtend</text>
  <text x="100" y="538" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">21 mei 2026</text>
  <text x="100" y="556" font-family="ui-sans-serif, system-ui" font-size="11" fill="#908898">4 min leestijd</text>
  <text x="100" y="580" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">Lang geleden schreef ik alleen</text>
  <text x="100" y="596" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">voor mezelf. Nu schrijf ik voor…</text>

  <!-- Blog-kaart 2 — muntgroen -->
  <rect x="445" y="462" width="310" height="190" rx="8" fill="#b8d8c4" stroke="#a0c4b0" stroke-width="1"/>
  <rect x="445" y="516" width="310" height="136" rx="0" fill="#fdfaf9"/>
  <rect x="445" y="620" width="310" height="32" rx="8" fill="#fdfaf9"/>
  <text x="465" y="498" font-family="Georgia, serif" font-size="14" fill="#2a2535" font-weight="600">Lente, in vier regels</text>
  <text x="465" y="538" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">15 mei 2026</text>
  <text x="465" y="556" font-family="ui-sans-serif, system-ui" font-size="11" fill="#908898">2 min leestijd</text>
  <text x="465" y="580" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880" font-style="italic">De eerste dag dat het warm was /</text>
  <text x="465" y="596" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880" font-style="italic">stond ik buiten zonder jas…</text>

  <!-- Blog-kaart 3 — perzik -->
  <rect x="810" y="462" width="310" height="190" rx="8" fill="#f0c8a4" stroke="#dab890" stroke-width="1"/>
  <rect x="810" y="516" width="310" height="136" rx="0" fill="#fdfaf9"/>
  <rect x="810" y="620" width="310" height="32" rx="8" fill="#fdfaf9"/>
  <text x="830" y="498" font-family="Georgia, serif" font-size="14" fill="#2a2535" font-weight="600">Kattenbel #47</text>
  <text x="830" y="538" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">10 mei 2026</text>
  <text x="830" y="556" font-family="ui-sans-serif, system-ui" font-size="11" fill="#908898">1 min leestijd</text>
  <text x="830" y="580" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">De postbode belde twee keer.</text>
  <text x="830" y="596" font-family="ui-sans-serif, system-ui" font-size="11" fill="#706880">De kat ook. Geen idee…</text>

  <!-- Fade onderaan -->
  <rect x="40" y="560" width="1120" height="120" fill="url(#fadeBot)" clip-path="url(#browserClip)"/>
</svg>`;

// ── OG image (1200×630) — ManonIT-branded, pastelpreview rechts ──────────────
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1214"/>
      <stop offset="100%" stop-color="#241820"/>
    </linearGradient>
    <!-- Pastelsfeer die doorlekt vanuit de preview -->
    <linearGradient id="pastelBleed" x1="0" y1="0.5" x2="1" y2="0.5">
      <stop offset="0%" stop-color="#c4b2d6" stop-opacity="0"/>
      <stop offset="100%" stop-color="#c4b2d6" stop-opacity="0.08"/>
    </linearGradient>
    <!-- Header-gradiënt in de minipreview -->
    <linearGradient id="previewHeader" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#c4b2d6"/>
      <stop offset="45%"  stop-color="#e0a0b8"/>
      <stop offset="100%" stop-color="#f0c4a0"/>
    </linearGradient>
    <linearGradient id="previewQuote" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"  stop-color="#e8b4c0"/>
      <stop offset="100%" stop-color="#f0bcc8"/>
    </linearGradient>
    <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
      <stop offset="60%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#241820" stop-opacity="0.85"/>
    </linearGradient>
    <linearGradient id="fadeB2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="65%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#241820" stop-opacity="0.95"/>
    </linearGradient>
    <clipPath id="previewClip">
      <rect x="640" y="50" width="510" height="530" rx="12"/>
    </clipPath>
  </defs>

  <!-- Donkere ManonIT-achtergrond -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#pastelBleed)"/>

  <!-- Accent bar links -->
  <rect x="80" y="120" width="3" height="230" fill="#c9a96e"/>

  <!-- Separator lijn boven -->
  <rect x="80" y="90" width="470" height="1" fill="rgba(201,169,110,0.22)"/>

  <!-- Hoofdtitel -->
  <text x="100" y="202" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#f5f0e8" font-weight="400" letter-spacing="-0.5">Marie H. Boddaert</text>

  <!-- Label -->
  <text x="100" y="250" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#c9a96e" letter-spacing="4">SCHRIJVERSWEBSITE CONCEPT</text>

  <!-- Beschrijving -->
  <text x="100" y="298" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" fill="rgba(245,240,232,0.5)">Verhalen · Gedichten · Kattenbellen</text>

  <!-- Tags -->
  <rect x="100" y="326" width="94" height="26" rx="13" fill="none" stroke="#c9a96e" stroke-width="1.2"/>
  <text x="147" y="343" font-family="ui-sans-serif, system-ui" font-size="12" fill="#c9a96e" text-anchor="middle">HTML / CSS</text>

  <rect x="208" y="326" width="88" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.18)" stroke-width="1.2"/>
  <text x="252" y="343" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.45)" text-anchor="middle">Webdesign</text>

  <rect x="310" y="326" width="74" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.18)" stroke-width="1.2"/>
  <text x="347" y="343" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.45)" text-anchor="middle">Netlify</text>

  <!-- URL -->
  <text x="100" y="396" font-family="ui-monospace, monospace" font-size="13" fill="rgba(245,240,232,0.22)">marie-boddaert.netlify.app</text>

  <!-- Lijn onder -->
  <rect x="80" y="420" width="470" height="1" fill="rgba(201,169,110,0.1)"/>

  <!-- ManonIT branding -->
  <text x="100" y="565" font-family="ui-sans-serif, system-ui" font-size="13" fill="rgba(245,240,232,0.22)" letter-spacing="1">ManonIT.com</text>

  <!-- ── Rechts: minipreview van de echte site ── -->
  <rect x="640" y="50" width="510" height="530" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- Browser chrome -->
  <rect x="640" y="50" width="510" height="36" rx="12" fill="rgba(255,255,255,0.05)"/>
  <rect x="640" y="70" width="510" height="16" fill="rgba(255,255,255,0.05)"/>
  <circle cx="662" cy="68" r="5" fill="rgba(255,255,255,0.15)"/>
  <circle cx="678" cy="68" r="5" fill="rgba(255,255,255,0.15)"/>
  <circle cx="694" cy="68" r="5" fill="rgba(255,255,255,0.15)"/>
  <rect x="716" y="58" width="200" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="0.8"/>

  <!-- Pastel header in preview -->
  <rect x="640" y="86" width="510" height="120" fill="url(#previewHeader)" clip-path="url(#previewClip)"/>

  <!-- Nav balk in preview -->
  <rect x="640" y="86" width="510" height="28" fill="rgba(255,255,255,0.12)" clip-path="url(#previewClip)"/>
  <rect x="655" y="93" width="28" height="14" rx="2" fill="rgba(255,255,255,0.7)"/>
  <rect x="694" y="96" width="36" height="8" rx="4" fill="rgba(42,37,53,0.4)"/>
  <rect x="742" y="96" width="42" height="8" rx="4" fill="rgba(42,37,53,0.35)"/>
  <rect x="796" y="96" width="60" height="8" rx="4" fill="rgba(42,37,53,0.35)"/>
  <rect x="868" y="92" width="52" height="16" rx="3" fill="#252535"/>

  <!-- Blog titel in preview -->
  <text x="895" y="155" font-family="Georgia, serif" font-size="28" fill="rgba(42,37,53,0.85)" text-anchor="middle" font-style="italic" font-weight="700">Blog</text>
  <text x="895" y="175" font-family="ui-sans-serif, system-ui" font-size="9" fill="rgba(42,37,53,0.65)" text-anchor="middle" letter-spacing="2">MARIE H. BODDAERT</text>

  <!-- Quote-balk in preview -->
  <rect x="640" y="206" width="510" height="55" fill="url(#previewQuote)" clip-path="url(#previewClip)"/>
  <rect x="660" y="218" width="340" height="6" rx="3" fill="rgba(74,37,53,0.3)"/>
  <rect x="700" y="232" width="260" height="5" rx="2.5" fill="rgba(74,37,53,0.2)"/>

  <!-- Witte inhoud -->
  <rect x="640" y="261" width="510" height="319" fill="rgba(250,248,246,0.92)" clip-path="url(#previewClip)"/>

  <!-- Kaarten in preview -->
  <rect x="656" y="285" width="148" height="90" rx="5" fill="#f2c4c4" stroke="#ddb0b0" stroke-width="0.8"/>
  <rect x="656" y="318" width="148" height="57" rx="0" fill="#fdfaf9"/>
  <rect x="668" y="327" width="80" height="5" rx="2.5" fill="rgba(42,37,53,0.35)"/>
  <rect x="668" y="338" width="60" height="4" rx="2" fill="rgba(112,104,128,0.3)"/>
  <rect x="668" y="349" width="100" height="3" rx="1.5" fill="rgba(112,104,128,0.2)"/>

  <rect x="818" y="285" width="148" height="90" rx="5" fill="#b8d8c4" stroke="#a0c4b0" stroke-width="0.8"/>
  <rect x="818" y="318" width="148" height="57" rx="0" fill="#fdfaf9"/>
  <rect x="830" y="327" width="80" height="5" rx="2.5" fill="rgba(42,37,53,0.35)"/>
  <rect x="830" y="338" width="60" height="4" rx="2" fill="rgba(112,104,128,0.3)"/>
  <rect x="830" y="349" width="100" height="3" rx="1.5" fill="rgba(112,104,128,0.2)"/>

  <rect x="980" y="285" width="148" height="90" rx="5" fill="#f0c8a4" stroke="#dab890" stroke-width="0.8"/>
  <rect x="980" y="318" width="148" height="57" rx="0" fill="#fdfaf9"/>
  <rect x="992" y="327" width="80" height="5" rx="2.5" fill="rgba(42,37,53,0.35)"/>
  <rect x="992" y="338" width="60" height="4" rx="2" fill="rgba(112,104,128,0.3)"/>
  <rect x="992" y="349" width="100" height="3" rx="1.5" fill="rgba(112,104,128,0.2)"/>

  <!-- Fade-overlay over de preview (rechts en onderin) -->
  <rect x="640" y="50" width="510" height="530" fill="url(#fadeR)" clip-path="url(#previewClip)"/>
  <rect x="640" y="420" width="510" height="160" fill="url(#fadeB2)" clip-path="url(#previewClip)"/>
</svg>`;

await sharp(Buffer.from(mockupSvg))
    .resize(1200, 720)
    .png({ quality: 95 })
    .toFile("public/Portfolio/marie-boddaert-mockup.png");

await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile("public/og-marie-boddaert.jpg");

console.log("Klaar:");
console.log("  public/Portfolio/marie-boddaert-mockup.png");
console.log("  public/og-marie-boddaert.jpg");
