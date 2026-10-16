import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Seo from "../../assets/Components/Seo.jsx";
import JsonLd from "../../assets/Components/JsonLd.jsx";

// Artikelen — elk apart lazy geladen
const Korteverhalen365           = lazy(() => import("./365Korteverhalen.jsx"));
const PastelVanBuiten            = lazy(() => import("./PastelVanBuiten.jsx"));
const AiInMijnWerk               = lazy(() => import("./AiInMijnWerk.jsx"));
const VerhaalAchterCasaCrew      = lazy(() => import("./VerhaalAchterCasaCrew.jsx"));
const SamenwerkingTheBigThree    = lazy(() => import("./SamenwerkingTheBigThree.jsx"));
const WebsiteVillaVredestein     = lazy(() => import("./WebsiteVillaVredestein.jsx"));
const WordpressOfMaatwerk = lazy(() => import("./WordpressOfMaatwerk.jsx"));
const WebsiteVakantiehuis = lazy(() => import("./WebsiteVakantiehuis.jsx"));
const MeertaligeWebsite = lazy(() => import("./MeertaligeWebsite.jsx"));
const WebsiteOnderhoud = lazy(() => import("./WebsiteOnderhoud.jsx"));

function NotFound({ slug }) {
    const { t } = useTranslation();
    return (
        <section className="section">
            <Helmet><meta name="robots" content="noindex, follow" /></Helmet>
            <div className="container">
                <h2>{t('article.notFound')}</h2>
                <p>{t('article.notFoundText')}{slug ? ` (slug: ${slug})` : ""}</p>
            </div>
        </section>
    );
}

const normalize = (s = "") =>
    s
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9-]/g, "");

const ARTICLE_META = {
    "365korteverhalen": {
        date: "2025-09-12",
        title: "365 Korte verhalen: van idee naar boek",
        image: "https://manonit.com/og/journal-365korteverhalen.jpg",
        words: 400,
    },
    pastelvanbuiten: {
        date: "2026-06-19",
        title: "Pastel van buiten, verrassend van binnen",
        image: "https://manonit.com/og/journal-pastelvanbuiten.jpg",
        words: 400,
    },
    "ai-in-mijn-werk": {
        date: "2026-09-28",
        title: "Hoe ik AI gebruik in mijn werk (en waar niet)",
        image: "https://manonit.com/og/journal-ai-in-mijn-werk.jpg",
        words: 820,
    },
    "verhaal-achter-casacrew": {
        date: "2026-09-28",
        title: "Van Excel-sheet naar eigen app: het verhaal achter CasaCrew",
        image: "https://manonit.com/og/journal-verhaal-achter-casacrew.jpg",
        words: 760,
    },
    "samenwerking-the-big-three": {
        date: "2026-09-28",
        title: "Vrijheid en vertrouwen: een website bouwen voor The Big Three",
        image: "https://manonit.com/og/project-the-big-three.jpg",
        words: 520,
    },
    "website-villa-vredestein": {
        date: "2026-09-28",
        title: "Villa Vredestein: een huis met een verhaal, nu ook online",
        image: "https://manonit.com/og/project-villa-vredestein.jpg",
        words: 470,
    },
    "wordpress-of-maatwerk": {
        date: "2026-10-09",
        title: "WordPress of maatwerk: wat past bij het bedrijf?",
        image: "https://manonit.com/og/project-acupuncture.jpg",
        words: 620,
    },
    "website-vakantiehuis": {
        date: "2026-10-09",
        title: "Een website voor een vakantiehuis: wat is er nodig?",
        image: "https://manonit.com/og/default.jpg",
        words: 640,
    },
    "meertalige-website": {
        date: "2026-10-09",
        title: "Een meertalige website laten maken: wat komt erbij kijken?",
        image: "https://manonit.com/og/project-villa-vredestein.jpg",
        words: 560,
    },
    "website-onderhoud": {
        date: "2026-10-09",
        title: "Wat zit er in website-onderhoud, en is het nodig?",
        image: "https://manonit.com/og/project-the-big-three.jpg",
        words: 560,
    },
};

export default function ArticleRoute() {
    const { slug = "" } = useParams();
    const { t } = useTranslation();
    const key = normalize(slug);

    const views = {
        "365korteverhalen": <Korteverhalen365 />,
        pastelvanbuiten: <PastelVanBuiten />,
        "ai-in-mijn-werk": <AiInMijnWerk />,
        "verhaal-achter-casacrew": <VerhaalAchterCasaCrew />,
        "samenwerking-the-big-three": <SamenwerkingTheBigThree />,
        "website-villa-vredestein": <WebsiteVillaVredestein />,
        "wordpress-of-maatwerk": <WordpressOfMaatwerk />,
        "website-vakantiehuis": <WebsiteVakantiehuis />,
        "meertalige-website": <MeertaligeWebsite />,
        "website-onderhoud": <WebsiteOnderhoud />,
    };

    const article = views[key];
    if (!article) return <NotFound slug={slug} />;

    const meta = ARTICLE_META[key];
    const articleSchema = meta ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": t(`seo.journal.${key}.title`, { defaultValue: meta.title }),
        "description": t(`seo.journal.${key}.description`, { defaultValue: "" }),
        "url": `https://manonit.com/journal/${slug}`,
        "image": meta.image,
        "datePublished": meta.date,
        "dateModified": meta.date,
        "wordCount": meta.words,
        "inLanguage": "nl",
        "author": {
            "@type": "Person",
            "@id": "https://manonit.com/#manon",
            "name": "Manon Keeman",
            "url": "https://manonit.com",
        },
        "publisher": {
            "@type": "Person",
            "@id": "https://manonit.com/#manon",
            "name": "Manon Keeman",
            "logo": { "@type": "ImageObject", "url": "https://manonit.com/MKlogo.png" },
        },
        "isPartOf": { "@id": "https://manonit.com/#website" },
    } : null;

    return (
        <>
            <Seo
                title={t(`seo.journal.${key}.title`, { defaultValue: "Manon Keeman — Journal" })}
                description={t(`seo.journal.${key}.description`, { defaultValue: "" })}
                path={`/journal/${slug}`}
                type="article"
                image={meta?.image}
            />
            {articleSchema && <JsonLd data={articleSchema} />}
            <Suspense fallback={
                <div data-page-loader style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "var(--muted)", fontSize: "0.95rem" }}>Loading…</span>
                </div>
            }>
                {article}
            </Suspense>
        </>
    );
}