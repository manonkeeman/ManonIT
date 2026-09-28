import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";
import ArticleFooter from "../../assets/Components/ArticleFooter.jsx";
import { useLangPrefix } from "../../assets/Components/useLangPrefix.js";

const UI = {
    nl: { back: "← Terug naar Journal", read: (m) => `${m} min leestijd`, cta: "Plan een gratis gesprek" },
    en: { back: "← Back to Journal", read: (m) => `${m} min read`, cta: "Book a free intro call" },
};

// Gedeelde opmaak voor nieuwe blogartikelen.
// content = { nl: { title, date, dateLabel, minutes, shareText, Body }, en: {...} }
export default function BlogArticle({ id, cover, coverAlt, content }) {
    const { t: tr, i18n } = useTranslation();
    const prefix = useLangPrefix();
    const lang = i18n.language.split("-")[0];
    const c = content[lang] || content.nl;
    const ui = UI[lang] || UI.nl;
    const { Body } = c;

    return (
        <section id={`article-${id}`} className="section section-alt">
            <div className="container blog-container">
                <nav aria-label="Breadcrumb" className="breadcrumbs">
                    <Link to="/">{tr("nav.home")}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <Link to="/journal">{tr("nav.journal")}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <span aria-current="page">{c.title}</span>
                </nav>

                <header className="blog-header">
                    <h1>{c.title}</h1>
                    <p className="blog-meta">
                        <time dateTime={c.date}>{c.dateLabel}</time> · {ui.read(c.minutes)} · Manon Keeman
                    </p>
                </header>

                <figure className="blog-cover">
                    <picture>
                        <source type="image/avif" srcSet={`${cover}-800w.avif 800w, ${cover}-1200w.avif 1200w`} sizes="(max-width: 800px) 100vw, 760px" />
                        <source type="image/webp" srcSet={`${cover}-800w.webp 800w, ${cover}-1200w.webp 1200w`} sizes="(max-width: 800px) 100vw, 760px" />
                        <img src={`${cover}-1200w.webp`} width="1200" height="675" alt={coverAlt} loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <article className="blog-body">
                    <Body />
                    <div className="blog-cta">
                        <a href={`${prefix}/#contact`} className="btn btn-primary" data-arrow>{ui.cta}</a>
                    </div>
                </article>

                <ArticleFooter shareTitle={c.title} shareText={c.shareText} />

                <Link to="/journal" className="blog-back">{ui.back}</Link>
            </div>

            <style>{`
        .blog-container { max-width: 760px; margin: 0 auto; padding: 0 clamp(16px, 3vw, 24px); }
        .blog-header { margin: 24px 0 28px; }
        .blog-header h1 { font-size: clamp(2rem, 4.4vw, 3rem); line-height: 1.1; margin: 0 0 12px; }
        .blog-meta { color: var(--muted); font-size: .92rem; margin: 0; }
        .blog-cover { margin: 0 0 36px; }
        .blog-cover img { width: 100%; height: auto; border-radius: 20px; }
        .blog-body { font-size: 1.08rem; line-height: 1.75; color: var(--text); }
        .blog-body p { margin: 0 0 20px; }
        .blog-body h2 { font-size: clamp(1.4rem, 2.6vw, 1.75rem); margin: 44px 0 14px; }
        .blog-body h3 { font-size: 1.15rem; margin: 28px 0 8px; }
        .blog-body ul { margin: 0 0 20px; padding-left: 22px; }
        .blog-body li { margin-bottom: 8px; }
        .blog-body li::marker { color: var(--accent); }
        .blog-body a { color: var(--accent-ink); text-decoration: underline; }
        .blog-body .lead { font-size: 1.22rem; line-height: 1.6; color: var(--muted); }
        .blog-body .note { background: #fff; border-radius: 16px; padding: 20px 24px; margin: 0 0 20px; }
        .blog-cta { margin: 40px 0 8px; }
        .blog-back { display: inline-block; margin: 28px 0 8px; color: var(--accent-ink); font-weight: 600; }
      `}</style>
        </section>
    );
}
