import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SiLinkedin, SiGoogle } from "react-icons/si";

const REVIEW_META = [
    {
        id: "saskia",
        name: "Saskia Zwaan",
        rating: 5,
        photo: "/reviews/saskia-zwaan.png",
        bgPos: "center center",
        bgSize: "cover",
        source: "LinkedIn",
    },
    {
        id: "marie",
        name: "Marie H. Boddaert",
        rating: 5,
        photo: "/reviews/marie-boddaert.png",
        bgPos: "center 10%",
        bgSize: "120%",
    },
    {
        id: "villa",
        name: "Maxim Staal",
        rating: 5,
        photo: "/reviews/maxim-staal.png",
        bgPos: "center center",
        bgSize: "110%",
        company: "Villa Vredestein",
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

function Avatar({ initials, photo, bgPos, bgSize }) {
    if (photo) {
        return (
            <div
                className="review-avatar"
                aria-hidden="true"
                style={{
                    backgroundImage: `url('${photo}')`,
                    backgroundSize: bgSize || "cover",
                    backgroundPosition: bgPos || "center center",
                    backgroundRepeat: "no-repeat",
                }}
            />
        );
    }
    return <div className="review-avatar" aria-hidden="true">{initials}</div>;
}

export default function Testimonials() {
    const { t } = useTranslation();
    const [googleReviews, setGoogleReviews] = useState([]);
    const [googleRating, setGoogleRating] = useState(null);
    const [totalRatings, setTotalRatings] = useState(0);

    useEffect(() => {
        fetch("/.netlify/functions/google-reviews")
            .then((r) => r.json())
            .then((data) => {
                if (data.reviews?.length) setGoogleReviews(data.reviews);
                if (data.rating) setGoogleRating(data.rating);
                if (data.totalRatings) setTotalRatings(data.totalRatings);
            })
            .catch(() => {});
    }, []);

    return (
        <section id="reviews" className="section testimonials-section">
            <div className="section-head">
                <p className="eyebrow">{t("testimonials.label")}</p>
                <h2>{t("testimonials.title")}</h2>
                <p>{t("testimonials.sub")}</p>
            </div>

            <div className="reviews-track">
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
                            <Avatar initials={r.initials} photo={r.photo} bgPos={r.bgPos} bgSize={r.bgSize} />
                            <div>
                                <p className="review-name">{r.name}</p>
                                <p className="review-role">
                                    {r.company
                                        ? r.company
                                        : t(`testimonials.reviews.${r.id}.role`)}
                                </p>
                            </div>
                        </footer>
                    </article>
                ))}

                {/* Live Google reviews */}
                {googleReviews.map((r, i) => (
                    <article key={`google-${i}`} className="review-card">
                        <div className="review-card-top">
                            <Stars count={r.rating} />
                            <span className="review-source review-source--google" title="Google review">
                                <SiGoogle />
                            </span>
                        </div>
                        <blockquote className="review-quote">
                            &ldquo;{r.text}&rdquo;
                        </blockquote>
                        <footer className="review-footer">
                            <Avatar
                                photo={r.photo}
                                bgPos="center center"
                                bgSize="cover"
                                initials={r.author?.[0] || "?"}
                            />
                            <div>
                                <p className="review-name">{r.author}</p>
                                <p className="review-role">{r.time}</p>
                            </div>
                        </footer>
                    </article>
                ))}

            </div>

            {/* CTA onder de reviews */}
            <div className="review-cta-row">
                {googleRating && (
                    <p className="cta-google-rating">
                        <SiGoogle style={{ color: "#4285F4", verticalAlign: "middle" }} />
                        {" "}<strong>{googleRating.toFixed(1)}</strong> / 5 &nbsp;·&nbsp; {totalRatings} {totalRatings === 1 ? "review" : "reviews"}
                    </p>
                )}
                <a
                    href="https://g.page/r/CU8Tt-dWqRrqEAE/review"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                >
                    {t("testimonials.cta")}
                </a>
            </div>

            <style>{`
        .testimonials-section {
          background: var(--bg);
          padding: clamp(56px, 8vw, 96px) 20px;
        }

        .reviews-track {
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .review-card {
          background: var(--bg-alt);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .review-cta-row {
          margin-top: 40px;
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }
        .cta-google-rating { margin: 0; font-size: .9rem; color: var(--muted); }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .review-source { font-size: 1.2rem; display: flex; align-items: center; color: #0a66c2; }
        .review-source--google { color: #4285F4; }
        .review-stars  { display: flex; gap: 3px; font-size: 1.1rem; }
        .star--on  { color: var(--accent); }
        .star--off { color: var(--border); }

        .review-quote {
          margin: 0;
          font-size: 1rem;
          line-height: 1.65;
          color: var(--text);
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
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--bordeaux);
          color: var(--bg);
          font-size: .82rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .review-name { margin: 0; font-size: .92rem; font-weight: 600; color: var(--text); }
        .review-role { margin: 0; font-size: .82rem; color: var(--muted); }

        @media (max-width: 480px) {
          .testimonials-section { padding: 48px 16px; }
          .reviews-track { grid-template-columns: 1fr; }
          .review-card { padding: 22px; }
        }
      `}</style>
        </section>
    );
}
