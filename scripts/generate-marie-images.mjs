import sharp from "sharp";
import { mkdirSync } from "fs";

mkdirSync("public/Portfolio", { recursive: true });

// ── Browser mockup (page hero) ──────────────────────────────────────────────
const mockupSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e8e2d9"/>
      <stop offset="100%" stop-color="#d6cfc4"/>
    </linearGradient>
    <linearGradient id="fadeBot" x1="0" y1="0" x2="0" y2="1">
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="100%" stop-color="#f5f0e8" stop-opacity="1"/>
    </linearGradient>
    <clipPath id="browserClip">
      <rect x="40" y="24" width="1120" height="656" rx="12"/>
    </clipPath>
  </defs>

  <!-- Outer background -->
  <rect width="1200" height="720" fill="url(#bgGrad)"/>

  <!-- Browser shell -->
  <rect x="40" y="24" width="1120" height="656" rx="12" fill="#e2dbd0" stroke="#c8bfb2" stroke-width="1.5"/>

  <!-- Browser chrome bar -->
  <rect x="40" y="24" width="1120" height="48" rx="12" fill="#d4cdc3"/>
  <rect x="40" y="54" width="1120" height="18" fill="#d4cdc3"/>

  <!-- Traffic lights -->
  <circle cx="72" cy="48" r="7" fill="#ff5f57"/>
  <circle cx="96" cy="48" r="7" fill="#febc2e"/>
  <circle cx="120" cy="48" r="7" fill="#28c840"/>

  <!-- URL bar -->
  <rect x="168" y="33" width="680" height="28" rx="14" fill="#f5f2ed" stroke="#bfb8ad" stroke-width="1"/>
  <text x="508" y="52" font-family="ui-monospace, monospace" font-size="12" fill="#6b6560" text-anchor="middle">marie-boddaert.netlify.app</text>

  <!-- Website body -->
  <rect x="40" y="72" width="1120" height="608" fill="#fdfcf9" clip-path="url(#browserClip)"/>

  <!-- Site nav bar -->
  <rect x="40" y="72" width="1120" height="60" fill="#fdfcf9"/>
  <line x1="40" y1="132" x2="1160" y2="132" stroke="#e6e0d6" stroke-width="1.5"/>

  <!-- Site name -->
  <text x="110" y="110" font-family="Georgia, 'Times New Roman', serif" font-size="22" fill="#2c2826" font-weight="600" letter-spacing="-0.3">Marie H. Boddaert</text>

  <!-- Nav items -->
  <text x="600" y="110" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#6b6560" text-anchor="middle">Verhalen</text>
  <text x="698" y="110" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#6b6560" text-anchor="middle">Gedichten</text>
  <text x="816" y="110" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#6b6560" text-anchor="middle">Kattenbellen</text>
  <text x="920" y="110" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#6b6560" text-anchor="middle">Over</text>
  <text x="1010" y="110" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#6b6560" text-anchor="middle">Contact</text>

  <!-- Hero quote -->
  <text x="600" y="186" font-family="Georgia, serif" font-size="17" fill="#4a4542" text-anchor="middle" font-style="italic">"Alles is hetzelfde, maar alles is anders. Dit is mijn nieuw hoofdstuk."</text>
  <line x1="480" y1="204" x2="720" y2="204" stroke="#c9a96e" stroke-width="1"/>

  <!-- Blog cards row -->
  <!-- Card 1 -->
  <rect x="80" y="230" width="320" height="190" rx="10" fill="#faf8f4" stroke="#e6e0d6" stroke-width="1"/>
  <rect x="80" y="230" width="320" height="110" rx="10" fill="#f0ebe2"/>
  <rect x="80" y="300" width="320" height="40" fill="#f0ebe2"/>
  <text x="110" y="268" font-family="Georgia, serif" font-size="15" fill="#2c2826" font-weight="600">Een stille ochtend</text>
  <text x="110" y="290" font-family="ui-sans-serif, system-ui" font-size="11" fill="#9b948c">21 mei 2026 · 4 min leestijd</text>
  <text x="110" y="358" font-family="ui-sans-serif, system-ui" font-size="12" fill="#5c5550">Lang geleden schreef ik alleen voor mezelf. Nu schrijf ik…</text>
  <rect x="97" y="388" width="72" height="20" rx="10" fill="none" stroke="#c9a96e" stroke-width="1"/>
  <text x="133" y="402" font-family="ui-sans-serif, system-ui" font-size="10" fill="#c9a96e" text-anchor="middle">Verhalen</text>

  <!-- Card 2 -->
  <rect x="440" y="230" width="320" height="190" rx="10" fill="#faf8f4" stroke="#e6e0d6" stroke-width="1"/>
  <rect x="440" y="230" width="320" height="110" rx="10" fill="#e8e4dc"/>
  <rect x="440" y="300" width="320" height="40" fill="#e8e4dc"/>
  <text x="470" y="268" font-family="Georgia, serif" font-size="15" fill="#2c2826" font-weight="600">Lente, in vier regels</text>
  <text x="470" y="290" font-family="ui-sans-serif, system-ui" font-size="11" fill="#9b948c">15 mei 2026 · 2 min leestijd</text>
  <text x="470" y="358" font-family="ui-sans-serif, system-ui" font-size="12" fill="#5c5550" font-style="italic">De eerste dag dat het warm was / stond ik buiten…</text>
  <rect x="457" y="388" width="72" height="20" rx="10" fill="none" stroke="#9b948c" stroke-width="1"/>
  <text x="493" y="402" font-family="ui-sans-serif, system-ui" font-size="10" fill="#9b948c" text-anchor="middle">Gedichten</text>

  <!-- Card 3 -->
  <rect x="800" y="230" width="320" height="190" rx="10" fill="#faf8f4" stroke="#e6e0d6" stroke-width="1"/>
  <rect x="800" y="230" width="320" height="110" rx="10" fill="#ede8df"/>
  <rect x="800" y="300" width="320" height="40" fill="#ede8df"/>
  <text x="830" y="268" font-family="Georgia, serif" font-size="15" fill="#2c2826" font-weight="600">Kattenbel #47</text>
  <text x="830" y="290" font-family="ui-sans-serif, system-ui" font-size="11" fill="#9b948c">10 mei 2026 · 1 min leestijd</text>
  <text x="830" y="358" font-family="ui-sans-serif, system-ui" font-size="12" fill="#5c5550">De postbode belde twee keer. De kat ook. Geen idee…</text>
  <rect x="817" y="388" width="90" height="20" rx="10" fill="none" stroke="#9b948c" stroke-width="1"/>
  <text x="862" y="402" font-family="ui-sans-serif, system-ui" font-size="10" fill="#9b948c" text-anchor="middle">Kattenbellen</text>

  <!-- Newsletter strip -->
  <rect x="80" y="450" width="1040" height="100" rx="12" fill="#f5f0e8" stroke="#e6e0d6" stroke-width="1"/>
  <text x="600" y="490" font-family="Georgia, serif" font-size="16" fill="#2c2826" text-anchor="middle" font-weight="600">Nieuwe artikelen in je inbox</text>
  <text x="600" y="514" font-family="ui-sans-serif, system-ui" font-size="12" fill="#9b948c" text-anchor="middle">Via Substack. Geen spam. Alleen als er iets nieuws is.</text>
  <rect x="430" y="528" width="210" height="26" rx="13" fill="#ffffff" stroke="#c8bfb2" stroke-width="1"/>
  <text x="535" y="545" font-family="ui-sans-serif, system-ui" font-size="11" fill="#b0a89e" text-anchor="middle">jouw@email.nl</text>
  <rect x="654" y="528" width="100" height="26" rx="13" fill="#5c1a1b"/>
  <text x="704" y="545" font-family="ui-sans-serif, system-ui" font-size="11" fill="#f5f0e8" text-anchor="middle" font-weight="600">Inschrijven</text>

  <!-- Fade overlay at bottom -->
  <rect x="40" y="500" width="1120" height="180" fill="url(#fadeBot)" clip-path="url(#browserClip)"/>
</svg>`;

// ── OG image (1200×630, social sharing) ────────────────────────────────────
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1214"/>
      <stop offset="100%" stop-color="#241820"/>
    </linearGradient>
    <linearGradient id="glowRight" x1="0" y1="0.5" x2="1" y2="0.5">
      <stop offset="0%" stop-color="#5c1a1b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#5c1a1b" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <!-- Subtle right glow -->
  <rect x="600" y="0" width="600" height="630" fill="url(#glowRight)"/>
  <!-- Horizontal rule top -->
  <rect x="80" y="88" width="480" height="1" fill="rgba(201,169,110,0.25)"/>
  <!-- Accent bar -->
  <rect x="80" y="120" width="3" height="220" fill="#c9a96e"/>

  <!-- Title -->
  <text x="100" y="200" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#f5f0e8" font-weight="400" letter-spacing="-1">Marie H. Boddaert</text>

  <!-- Subtitle label -->
  <text x="100" y="248" font-family="ui-sans-serif, system-ui, sans-serif" font-size="14" fill="#c9a96e" letter-spacing="4">SCHRIJVERSWEBSITE CONCEPT</text>

  <!-- Description -->
  <text x="100" y="296" font-family="ui-sans-serif, system-ui, sans-serif" font-size="16" fill="rgba(245,240,232,0.55)">Verhalen · Gedichten · Kattenbellen</text>

  <!-- Tags -->
  <rect x="100" y="324" width="94" height="26" rx="13" fill="none" stroke="#c9a96e" stroke-width="1.2"/>
  <text x="147" y="341" font-family="ui-sans-serif, system-ui" font-size="12" fill="#c9a96e" text-anchor="middle">HTML / CSS</text>

  <rect x="208" y="324" width="88" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.2)" stroke-width="1.2"/>
  <text x="252" y="341" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.5)" text-anchor="middle">Webdesign</text>

  <rect x="310" y="324" width="74" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.2)" stroke-width="1.2"/>
  <text x="347" y="341" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.5)" text-anchor="middle">Netlify</text>

  <!-- URL -->
  <text x="100" y="395" font-family="ui-monospace, monospace" font-size="13" fill="rgba(245,240,232,0.25)">marie-boddaert.netlify.app</text>

  <!-- Horizontal rule bottom left -->
  <rect x="80" y="420" width="480" height="1" fill="rgba(201,169,110,0.12)"/>

  <!-- ManonIT.com branding -->
  <text x="100" y="560" font-family="ui-sans-serif, system-ui" font-size="13" fill="rgba(245,240,232,0.25)" letter-spacing="1">ManonIT.com</text>

  <!-- Right side — ghosted browser mockup -->
  <rect x="680" y="60" width="460" height="510" rx="14" fill="none" stroke="rgba(245,240,232,0.07)" stroke-width="1.5"/>
  <!-- Chrome bar -->
  <rect x="680" y="60" width="460" height="42" rx="14" fill="rgba(245,240,232,0.035)"/>
  <rect x="680" y="80" width="460" height="22" fill="rgba(245,240,232,0.035)"/>
  <circle cx="704" cy="81" r="5.5" fill="rgba(245,240,232,0.12)"/>
  <circle cx="722" cy="81" r="5.5" fill="rgba(245,240,232,0.12)"/>
  <circle cx="740" cy="81" r="5.5" fill="rgba(245,240,232,0.12)"/>
  <!-- URL bar ghost -->
  <rect x="762" y="69" width="240" height="24" rx="12" fill="rgba(245,240,232,0.04)" stroke="rgba(245,240,232,0.08)" stroke-width="1"/>

  <!-- Site name in mockup -->
  <text x="706" y="136" font-family="Georgia, serif" font-size="14" fill="rgba(245,240,232,0.35)" font-weight="600">Marie H. Boddaert</text>
  <line x1="694" y1="148" x2="1130" y2="148" stroke="rgba(245,240,232,0.07)" stroke-width="1"/>

  <!-- Nav ghost -->
  <rect x="860" y="122" width="56" height="8" rx="4" fill="rgba(245,240,232,0.12)"/>
  <rect x="930" y="122" width="70" height="8" rx="4" fill="rgba(245,240,232,0.08)"/>
  <rect x="1014" y="122" width="44" height="8" rx="4" fill="rgba(245,240,232,0.08)"/>

  <!-- Content lines -->
  <rect x="706" y="170" width="380" height="3" rx="1.5" fill="rgba(245,240,232,0.18)"/>
  <rect x="706" y="182" width="260" height="2" rx="1" fill="rgba(245,240,232,0.1)"/>
  <rect x="694" y="200" width="1" height="80" fill="rgba(201,169,110,0.5)"/>

  <!-- Card ghosts -->
  <rect x="706" y="216" width="128" height="100" rx="7" fill="rgba(245,240,232,0.04)" stroke="rgba(245,240,232,0.08)" stroke-width="1"/>
  <rect x="844" y="216" width="128" height="100" rx="7" fill="rgba(245,240,232,0.04)" stroke="rgba(245,240,232,0.08)" stroke-width="1"/>
  <rect x="982" y="216" width="128" height="100" rx="7" fill="rgba(245,240,232,0.04)" stroke="rgba(245,240,232,0.08)" stroke-width="1"/>

  <rect x="718" y="230" width="80" height="3" rx="1.5" fill="rgba(245,240,232,0.22)"/>
  <rect x="718" y="242" width="56" height="2" rx="1" fill="rgba(245,240,232,0.1)"/>
  <rect x="718" y="256" width="66" height="2" rx="1" fill="rgba(245,240,232,0.08)"/>

  <rect x="856" y="230" width="80" height="3" rx="1.5" fill="rgba(245,240,232,0.22)"/>
  <rect x="856" y="242" width="56" height="2" rx="1" fill="rgba(245,240,232,0.1)"/>
  <rect x="856" y="256" width="66" height="2" rx="1" fill="rgba(245,240,232,0.08)"/>

  <rect x="994" y="230" width="80" height="3" rx="1.5" fill="rgba(245,240,232,0.22)"/>
  <rect x="994" y="242" width="56" height="2" rx="1" fill="rgba(245,240,232,0.1)"/>
  <rect x="994" y="256" width="66" height="2" rx="1" fill="rgba(245,240,232,0.08)"/>

  <!-- Newsletter ghost -->
  <rect x="706" y="336" width="404" height="60" rx="8" fill="rgba(245,240,232,0.03)" stroke="rgba(245,240,232,0.07)" stroke-width="1"/>
  <rect x="716" y="350" width="140" height="3" rx="1.5" fill="rgba(245,240,232,0.15)"/>
  <rect x="716" y="362" width="200" height="2" rx="1" fill="rgba(245,240,232,0.07)"/>

  <!-- Fade right edge -->
  <defs>
    <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
      <stop offset="70%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1a1214" stop-opacity="0.6"/>
    </linearGradient>
    <linearGradient id="fadeB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="70%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#241820" stop-opacity="0.9"/>
    </linearGradient>
  </defs>
  <rect x="680" y="60" width="520" height="510" fill="url(#fadeR)"/>
  <rect x="680" y="400" width="520" height="170" fill="url(#fadeB)"/>
</svg>`;

await sharp(Buffer.from(mockupSvg))
    .resize(1200, 720)
    .png({ quality: 95 })
    .toFile("public/Portfolio/marie-boddaert-mockup.png");

await sharp(Buffer.from(ogSvg))
    .resize(1200, 630)
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile("public/og-marie-boddaert.jpg");

console.log("Images generated:");
console.log("  public/Portfolio/marie-boddaert-mockup.png");
console.log("  public/og-marie-boddaert.jpg");
