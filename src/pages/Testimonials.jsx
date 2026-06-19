import { useTranslation } from "react-i18next";
import { SiLinkedin } from "react-icons/si";

const REVIEW_META = [
    {
        id: "saskia",
        name: "Saskia Zwaan",
        rating: 5,
        photo: "/reviews/saskia-zwaan.png",
        source: "LinkedIn",
    },
    {
        id: "marie",
        name: "Marie H. Boddaert",
        rating: 5,
        initials: "MB",
    },
    {
        id: "villa",
        name: "Villa Vredestein",
        rating: 5,
        initials: "VV",
    },
];

function Stars({ count }) {
    return (
        <div className="review-stars" aria-label={`${count} van 5 sterren`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < count ? "star star--on" : "star star--off"}>★</span>
            ))}
        </div>
    );
}

function Avatar({ initials, photo }) {
    if (photo) {
        return (
            <img
                src={photo}
                alt=""
                aria-hidden="true"
                className="review-avatar review-avatar--photo"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
            />
        );
    }
    return <div className="review-avatar" aria-hidden="true">{initials}</div>;
}

export default function Testimonials() {
    const { t } = useTranslation();

    return (
        <section id="reviews" className="section testimonials-section">
            <div className="testimonials-inner">
                <p className="testimonials-label small">{t("testimonials.label")}</p>
                <h2 className="testimonials-title">{t("testimonials.title")}</h2>
                <p className="testimonials-sub">{t("testimonials.sub")}</p>

                <div className="reviews-grid">
                    {REVIEW_META.map((r) => (
                        <article key={r.id} className="review-card">
                            <div className="review-card-top">
                                <Stars count={r.rating} />
                                {r.source === "LinkedIn" && (
                                    <span className="review-source" title="LinkedIn aanbeveling">
                                        <SiLinkedin />
                                    </span>
                                )}
                            </div>
                            <blockquote className="review-quote">
                                &ldquo;{t(`testimonials.reviews.${r.id}.quote`)}&rdquo;
                            </blockquote>
                            <footer className="review-footer">
                                <Avatar initials={r.initials} photo={r.photo} />
                                <div>
                                    <p className="review-name">{r.name}</p>
                                    <p className="review-role">{t(`testimonials.reviews.${r.id}.role`)}</p>
                                </div>
                            </footer>
                        </article>
                    ))}
                </div>

                <div className="reviews-cta">
                    <a
                        href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-review-cta"
                    >
                        {t("testimonials.cta")}
                    </a>
                </div>
            </div>

            <style>{`
        .testimonials-section {
          background: var(--bg);
          padding: 80px 20px;
        }
        .testimonials-inner {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .testimonials-label {
          color: var(--accent);
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin: 0 0 10px;
        }
        .testimonials-title {
          margin: 0 0 10px;
        }
        .testimonials-sub {
          color: var(--muted);
          font-size: .95rem;
          margin: 0 0 48px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: left;
        }

        .review-card {
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,.35);
        }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .review-source {
          color: #0a66c2;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }
        .review-stars {
          display: flex;
          gap: 3px;
          font-size: 1.1rem;
        }
        .star--on  { color: #f5a623; }
        .star--off { color: var(--border); }

        .review-quote {
          margin: 0;
          font-size: .95rem;
          line-height: 1.7;
          color: var(--text);
          font-style: italic;
          flex: 1;
        }

        .review-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid var(--border);
          padding-top: 14px;
          margin-top: auto;
        }

        .review-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bordeaux);
          color: var(--bg);
          font-size: .82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          letter-spacing: .03em;
        }
        .review-avatar--photo {
          object-fit: cover;
          background: none;
        }

        .review-name {
          margin: 0;
          font-size: .92rem;
          font-weight: 600;
          color: var(--text);
        }
        .review-role {
          margin: 0;
          font-size: .82rem;
          color: var(--muted);
        }

        .reviews-cta {
          margin-top: 40px;
        }
        .btn-review-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
          font-size: .92rem;
          font-weight: 600;
          text-decoration: none;
          transition: background .18s ease, color .18s ease;
        }
        .btn-review-cta:hover {
          background: var(--accent);
          color: var(--bg);
        }

        @media (max-width: 860px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .testimonials-section { padding: 56px 16px; }
        }
      `}</style>
        </section>
    );
}
