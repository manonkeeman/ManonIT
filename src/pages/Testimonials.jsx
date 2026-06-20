import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SiLinkedin } from "react-icons/si";

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
        bgPos: "center top",
        bgSize: "130%",
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
    const trackRef = useRef(null);

    const scroll = (dir) => {
        const track = trackRef.current;
        if (!track) return;
        const card = track.querySelector(".review-card");
        const cardW = card ? card.offsetWidth + 24 : 360;
        track.scrollBy({ left: dir * cardW, behavior: "smooth" });
    };

    return (
        <section id="reviews" className="section testimonials-section">
            <div className="testimonials-header">
                <div>
                    <p className="testimonials-label small">{t("testimonials.label")}</p>
                    <h2 className="testimonials-title">{t("testimonials.title")}</h2>
                </div>
                <div className="review-arrows">
                    <button className="arrow-btn" onClick={() => scroll(-1)} aria-label="Vorige">←</button>
                    <button className="arrow-btn" onClick={() => scroll(1)}  aria-label="Volgende">→</button>
                </div>
            </div>

            <div className="reviews-track" ref={trackRef}>
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

                {/* CTA-kaart */}
                <article className="review-card review-card--cta">
                    <p className="cta-review-label">{t("testimonials.label")}</p>
                    <p className="cta-review-sub">{t("testimonials.sub")}</p>
                    <a
                        href="https://maps.app.goo.gl/2PDjcuArvZMu6SWs8"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-review-cta"
                    >
                        {t("testimonials.cta")} →
                    </a>
                </article>
            </div>

            <style>{`
        .testimonials-section {
          background: var(--bg);
          padding: 64px 0 80px;
          overflow-x: clip;
        }

        .testimonials-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto 32px;
          padding: 0 40px;
        }
        .testimonials-label {
          color: var(--accent);
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin: 0 0 8px;
        }
        .testimonials-title { margin: 0; }

        .review-arrows { display: flex; gap: 10px; }
        .arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--bg-alt);
          color: var(--text);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: border-color .2s, color .2s, transform .15s;
        }
        .arrow-btn:hover { border-color: var(--accent); color: var(--accent); transform: scale(1.08); }

        .reviews-track {
          display: flex;
          gap: 24px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 8px 40px 24px;
          scrollbar-width: none;
        }
        .reviews-track::-webkit-scrollbar { display: none; }

        .review-card {
          flex: 0 0 340px;
          scroll-snap-align: start;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 28px;
          box-shadow: var(--shadow);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .review-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent);
          box-shadow: 0 12px 36px rgba(0,0,0,.4);
        }

        .review-card--cta {
          background: linear-gradient(145deg, var(--bg-alt), color-mix(in srgb, var(--accent) 8%, var(--bg-alt)));
          border-color: color-mix(in srgb, var(--accent) 30%, var(--border));
          justify-content: center;
          align-items: flex-start;
          gap: 14px;
        }
        .cta-review-label {
          color: var(--accent);
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin: 0;
        }
        .cta-review-sub {
          color: var(--muted);
          font-size: .9rem;
          line-height: 1.55;
          margin: 0;
        }
        .btn-review-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent);
          font-weight: 600;
          font-size: .95rem;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color .2s, gap .2s;
          margin-top: 4px;
        }
        .btn-review-cta:hover { border-color: var(--accent); gap: 10px; }

        .review-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .review-source { color: #0a66c2; font-size: 1.2rem; display: flex; align-items: center; }
        .review-stars  { display: flex; gap: 3px; font-size: 1.1rem; }
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

        @media (max-width: 720px) {
          .testimonials-header { padding: 0 16px; }
          .reviews-track { padding: 8px 16px 24px; }
          .review-card { flex: 0 0 290px; }
        }
      `}</style>
        </section>
    );
}
