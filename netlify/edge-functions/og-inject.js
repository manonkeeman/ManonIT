const SITE = "https://manonit.com";

const ARTICLES = {
    fullstackdeveloper: {
        title: "Van vliegtuigsleper tot Full Stack Developer | Manon Keeman",
        description: "Hoe ik van KLM pushback belandde in de wereld van code en systemen.",
        image: `${SITE}/journal/klm-pushback-1200w.webp`,
    },
    scrummaster: {
        title: "Van vliegtuigsleper tot Full Stack Developer | Manon Keeman",
        description: "Hoe ik van KLM pushback belandde in de wereld van code en systemen.",
        image: `${SITE}/journal/klm-pushback-1200w.webp`,
    },
    designchaos: {
        title: "Chaos ordenen met code en design | Manon Keeman",
        description: "Waarom structuur niet saai is maar vrijheid geeft.",
        image: `${SITE}/journal/Design-Chaos-1200w.webp`,
    },
    storytelling: {
        title: "Storytelling in IT | Manon Keeman",
        description: "Waarom verhalen onmisbaar zijn in technologie.",
        image: `${SITE}/journal/storytelling-it-1200w.webp`,
    },
    luchtvaartfamilie2018: {
        title: "Luchtvaartfamilie (Up in the Sky) | Manon Keeman",
        description: "Een kijkje in onze luchtvaartfamilie. Interview Up in the Sky, 2018.",
        image: `${SITE}/journal/luchtvaartfamilie2018-1200w.webp`,
    },
    "365korteverhalen": {
        title: "365 Korte verhalen: van idee naar boek | Manon Keeman",
        description: "Een boek in wording: 365 scènes van absurditeit en overleven.",
        image: `${SITE}/journal/cover365fragmenten-1200w.webp`,
    },
    toekomsttech: {
        title: "De toekomst van tech | Manon Keeman",
        description: "AI, remote werken en de rol van creativiteit.",
        image: `${SITE}/journal/toekomst-it-1200w.webp`,
    },
    pastelvanbuiten: {
        title: "Pastel van buiten, verrassend van binnen | Manon Keeman",
        description: "Hoe ik de website van mijn nichtje Marie bouwde: zoet van buiten, doordacht van binnen.",
        image: `${SITE}/journal/marie-boddaert-og.png`,
    },
};

const BOT_RE = /facebookexternalhit|linkedin|twitterbot|whatsapp|telegrambot|slackbot|discordbot|applebot|pinterest|bingbot|googlebot|iframely|prerender|screaming.frog/i;

export default async (request, context) => {
    const ua = request.headers.get("user-agent") || "";
    if (!BOT_RE.test(ua)) return;

    const { pathname } = new URL(request.url);
    const slug = pathname.replace(/^\/journal\//, "").replace(/\/$/, "").toLowerCase();
    const meta = ARTICLES[slug];
    if (!meta) return;

    const canonical = `${SITE}/journal/${slug}`;

    const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="ManonIT">
<meta property="og:locale" content="nl_NL">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:image" content="${meta.image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="675">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@manonkeeman">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<meta name="twitter:image" content="${meta.image}">
</head>
<body></body>
</html>`;

    return new Response(html, {
        headers: { "content-type": "text/html;charset=UTF-8" },
    });
};

