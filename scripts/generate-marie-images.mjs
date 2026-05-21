import sharp from "sharp";
import { mkdirSync } from "fs";

mkdirSync("public/Portfolio", { recursive: true });

const SCREENSHOT = "/Users/manonkeeman/Desktop/MANONIT/marieboddaert/MarieBoddaert.com.png";

// ── 1. Mockup — echte screenshot, op 1200×720 gezet met browser-chrome ───────
const screenshotBuf = await sharp(SCREENSHOT)
    .resize(1120, 608, { fit: "cover", position: "top" })
    .toBuffer();

// Browser-chrome SVG (alleen het frame, screenshot erin als composite)
const chromeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720">
  <defs>
    <linearGradient id="desk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ddd0e8"/>
      <stop offset="100%" stop-color="#c8bcd8"/>
    </linearGradient>
  </defs>
  <!-- Desktop achtergrond -->
  <rect width="1200" height="720" fill="url(#desk)"/>
  <!-- Browser shell -->
  <rect x="40" y="24" width="1120" height="656" rx="12" fill="#e0d4ec" stroke="#c8bcdc" stroke-width="1.5"/>
  <!-- Chrome bar -->
  <rect x="40" y="24" width="1120" height="48" rx="12" fill="#d4c8e4"/>
  <rect x="40" y="52" width="1120" height="20" fill="#d4c8e4"/>
  <!-- Traffic lights -->
  <circle cx="72" cy="48" r="7" fill="#ff5f57"/>
  <circle cx="96" cy="48" r="7" fill="#febc2e"/>
  <circle cx="120" cy="48" r="7" fill="#28c840"/>
  <!-- URL-balk -->
  <rect x="168" y="33" width="680" height="28" rx="14" fill="#f0ecf6" stroke="#c0b4d4" stroke-width="1"/>
  <text x="508" y="52" font-family="ui-monospace, monospace" font-size="12" fill="#7060a0" text-anchor="middle">marie-boddaert.netlify.app</text>
</svg>`;

const chromeBuf = Buffer.from(chromeSvg);

await sharp(chromeBuf)
    .composite([{ input: screenshotBuf, top: 72, left: 40 }])
    .png({ quality: 95 })
    .toFile("public/Portfolio/marie-boddaert-mockup.png");

// ── 2. OG-afbeelding (1200×630) — dark ManonIT-panel + echte screenshot ─────
const ogLabelSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1a1214"/>
      <stop offset="100%" stop-color="#241820"/>
    </linearGradient>
    <!-- Subtiele pasteltint vanuit de screenshot -->
    <linearGradient id="bleed" x1="0" y1="0.5" x2="1" y2="0.5">
      <stop offset="0%" stop-color="#c4b2d6" stop-opacity="0"/>
      <stop offset="100%" stop-color="#c4b2d6" stop-opacity="0.06"/>
    </linearGradient>
    <!-- Fade zodat screenshot vloeiend in donker opgaat -->
    <linearGradient id="fadeR" x1="0" y1="0" x2="1" y2="0">
      <stop offset="55%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#241820" stop-opacity="0.92"/>
    </linearGradient>
    <linearGradient id="fadeB" x1="0" y1="0" x2="0" y2="1">
      <stop offset="60%" stop-color="#1a1214" stop-opacity="0"/>
      <stop offset="100%" stop-color="#241820" stop-opacity="0.97"/>
    </linearGradient>
    <clipPath id="previewClip">
      <rect x="560" y="40" width="600" height="550" rx="12"/>
    </clipPath>
  </defs>

  <!-- Achtergrond -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#bleed)"/>

  <!-- Accent bar links -->
  <rect x="80" y="112" width="3" height="230" fill="#c9a96e"/>
  <!-- Lijn boven -->
  <rect x="80" y="84" width="420" height="1" fill="rgba(201,169,110,0.22)"/>

  <!-- Naam -->
  <text x="100" y="196" font-family="Georgia, 'Times New Roman', serif" font-size="58" fill="#f5f0e8" font-weight="400" letter-spacing="-0.5">Marie H. Boddaert</text>
  <!-- Label -->
  <text x="100" y="244" font-family="ui-sans-serif, system-ui, sans-serif" font-size="13" fill="#c9a96e" letter-spacing="4">SCHRIJVERSWEBSITE CONCEPT</text>
  <!-- Beschrijving -->
  <text x="100" y="292" font-family="ui-sans-serif, system-ui, sans-serif" font-size="15" fill="rgba(245,240,232,0.48)">Verhalen · Gedichten · Kattenbellen</text>

  <!-- Tags -->
  <rect x="100" y="320" width="94" height="26" rx="13" fill="none" stroke="#c9a96e" stroke-width="1.2"/>
  <text x="147" y="337" font-family="ui-sans-serif, system-ui" font-size="12" fill="#c9a96e" text-anchor="middle">HTML / CSS</text>
  <rect x="208" y="320" width="88" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.18)" stroke-width="1.2"/>
  <text x="252" y="337" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.42)" text-anchor="middle">Webdesign</text>
  <rect x="310" y="320" width="74" height="26" rx="13" fill="none" stroke="rgba(245,240,232,0.18)" stroke-width="1.2"/>
  <text x="347" y="337" font-family="ui-sans-serif, system-ui" font-size="12" fill="rgba(245,240,232,0.42)" text-anchor="middle">Netlify</text>

  <!-- URL -->
  <text x="100" y="390" font-family="ui-monospace, monospace" font-size="12" fill="rgba(245,240,232,0.2)">marie-boddaert.netlify.app</text>

  <!-- Lijn onder -->
  <rect x="80" y="414" width="420" height="1" fill="rgba(201,169,110,0.1)"/>

  <!-- ManonIT -->
  <text x="100" y="570" font-family="ui-sans-serif, system-ui" font-size="13" fill="rgba(245,240,232,0.2)" letter-spacing="1">ManonIT.com</text>

  <!-- Browser-frame rondom de screenshot -->
  <rect x="556" y="36" width="608" height="558" rx="14" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
  <!-- Chrome-balk boven screenshot -->
  <rect x="556" y="36" width="608" height="38" rx="14" fill="rgba(224,212,236,0.18)"/>
  <rect x="556" y="56" width="608" height="18" fill="rgba(224,212,236,0.18)"/>
  <circle cx="578" cy="55" r="5" fill="rgba(255,95,87,0.5)"/>
  <circle cx="594" cy="55" r="5" fill="rgba(254,188,46,0.5)"/>
  <circle cx="610" cy="55" r="5" fill="rgba(40,200,64,0.5)"/>
  <rect x="630" y="46" width="200" height="18" rx="9" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.1)" stroke-width="0.8"/>

  <!-- Fade-overlays over de screenshot -->
  <rect x="556" y="36" width="608" height="558" fill="url(#fadeR)" clip-path="url(#previewClip)"/>
  <rect x="556" y="36" width="608" height="558" fill="url(#fadeB)" clip-path="url(#previewClip)"/>
</svg>`;

// Screenshot klaarmaken voor de OG-preview: 600×550, bijgesneden bovenaan
const ogScreenshot = await sharp(SCREENSHOT)
    .resize(600, 550, { fit: "cover", position: "top" })
    .toBuffer();

// Samenvoegen: donker panel (SVG) + screenshot op positie 560,74 + overlays eroverheen
await sharp(Buffer.from(ogLabelSvg))
    .composite([
        { input: ogScreenshot, top: 74, left: 560, blend: "over" },
    ])
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile("public/og-marie-boddaert.jpg");

console.log("Klaar:");
console.log("  public/Portfolio/marie-boddaert-mockup.png  (echte screenshot)");
console.log("  public/og-marie-boddaert.jpg               (OG met echte screenshot)");
