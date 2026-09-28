import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiMapPin } from "react-icons/fi";
import { useConsent } from "../assets/Helpers/consent.js";

export default function Contact() {
    const [city, setCity] = useState("Bakkum");
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const { t } = useTranslation();
    const consent = useConsent();
    const [mapClicked, setMapClicked] = useState(false);
    const showMap = consent === "granted" || mapClicked;

    const ADDRESSES = {
        Bakkum: "Van Renesselaan 19, Bakkum",
        Driebergen: "Hoofdstraat 147, Driebergen",
    };

    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESSES[city])}&output=embed`;
    const routeHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESSES[city])}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        const fd = new FormData(e.target);
        const body = new URLSearchParams(fd).toString();
        try {
            const res = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body,
            });
            if (res.ok) {
                setStatus("sent");
                e.target.reset();
                // GA4 conversion event
                if (typeof window.gtag === "function") {
                    window.gtag("event", "form_submit", { event_category: "contact" });
                }
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    const points = t("contact.points", { returnObjects: true });

    return (
        <div className="contact-wrap">
            <div className="section-head">
                <p className="eyebrow">{t('contact.label')}</p>
                <h2>{t('contact.title')}</h2>
                <p>{t('contact.intro')}</p>
            </div>

            <div className="contact-grid">

                {/* Infopaneel links */}
                <aside className="contact-info">
                    <div className="contact-person">
                        <picture>
                            <source type="image/avif" srcSet="/hero-400w.avif" />
                            <source type="image/webp" srcSet="/hero-400w.webp" />
                            <img src="/hero-400w.webp" width="64" height="64" alt="Manon Keeman" loading="lazy" decoding="async" />
                        </picture>
                        <div>
                            <strong>Manon Keeman</strong>
                            <span>{t('contact.personRole')}</span>
                        </div>
                    </div>

                    {Array.isArray(points) && (
                        <ul className="contact-points">
                            {points.map((p) => <li key={p}><FiCheck aria-hidden="true"/>{p}</li>)}
                        </ul>
                    )}

                    <a href="https://wa.me/31624766568" target="_blank" rel="noreferrer" className="contact-wa">
                        <FaWhatsapp aria-hidden="true"/> {t('contact.whatsapp')}
                    </a>

                    <div className="contact-loc">
                        <p className="contact-loc-title"><FiMapPin aria-hidden="true"/> {t('contact.locations')}</p>
                        <div className="chip-row">
                            {Object.keys(ADDRESSES).map((c) => (
                                <button
                                    key={c}
                                    type="button"
                                    className={`chip ${city === c ? "active" : ""}`}
                                    onClick={() => setCity(c)}
                                    aria-pressed={city === c}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                        <div className="map-wrap">
                            {showMap ? (
                                <iframe
                                    title={`Map ${city}`}
                                    src={mapSrc}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            ) : (
                                // Google Maps plaatst cookies: pas laden na toestemming of een klik
                                <div className="map-placeholder">
                                    <p>{ADDRESSES[city]}</p>
                                    <button type="button" className="chip" onClick={() => setMapClicked(true)}>
                                        {t('cookies.loadMap')}
                                    </button>
                                    <small>{t('cookies.mapNote')}</small>
                                </div>
                            )}
                        </div>
                        <a href={routeHref} target="_blank" rel="noreferrer" className="contact-route">
                            {t('contact.directions')} →
                        </a>
                    </div>
                </aside>

                {/* Formulier rechts */}
                <div className="contact-card">
                    <h3>{t('contact.formTitle')}</h3>
                    <p className="card-intro">{t('contact.formSub')}</p>

                        {status === "sent" ? (
                            <p className="form-success">{t('contact.form.success')}</p>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="contact-form"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <p style={{ display: "none" }}><input name="bot-field" /></p>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-name">{t('contact.form.name')}</label>
                                    <input
                                        id="cf-name"
                                        type="text"
                                        name="name"
                                        className="form-input"
                                        placeholder={t('contact.form.namePlaceholder')}
                                        required
                                        autoComplete="name"
                                    />
                                </div>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-email">{t('contact.form.email')}</label>
                                    <input
                                        id="cf-email"
                                        type="email"
                                        name="email"
                                        className="form-input"
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        required
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="form-row">
                                    <label className="form-label" htmlFor="cf-message">{t('contact.form.message')}</label>
                                    <textarea
                                        id="cf-message"
                                        name="message"
                                        className="form-input form-textarea"
                                        placeholder={t('contact.form.messagePlaceholder')}
                                        rows={4}
                                        required
                                    />
                                </div>

                                {status === "error" && (
                                    <p className="form-error">{t('contact.form.error')}</p>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary form-submit"
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? t('contact.form.sending') : t('contact.form.send')}
                                </button>
                            </form>
                        )}
                </div>
            </div>

            <style>{`
        .contact-wrap{
          max-width:1160px; margin:0 auto;
          padding: clamp(56px, 8vw, 96px) 20px;
        }
        .contact-grid{
          display:grid; grid-template-columns: .9fr 1.1fr; gap:24px;
          align-items:start;
        }

        /* Infopaneel */
        .contact-info{
          background: var(--bg-alt); color: var(--text);
          border-radius: 20px;
          padding: clamp(24px, 3vw, 36px);
          display:flex; flex-direction:column; gap:22px;
        }
        .contact-person{ display:flex; align-items:center; gap:14px; }
        .contact-person img{
          width:64px; height:64px; border-radius:50%; object-fit:cover; object-position: 50% 18%;
          background:#fff;
          border: 2px solid #fff;
          box-shadow: 0 0 0 1px var(--border);
        }
        .contact-person strong{ display:block; font-size:1.1rem; }
        .contact-person span{ font-size:.85rem; color:var(--muted); }
        .contact-points{ list-style:none; margin:0; padding:0; display:grid; gap:10px; }
        .contact-points li{ display:flex; align-items:center; gap:10px; font-size:.95rem; }
        .contact-points svg{
          flex-shrink:0; width:22px; height:22px; padding:4px; border-radius:50%;
          background: color-mix(in srgb, var(--accent) 14%, #fff); color: var(--accent-ink);
        }
        .contact-wa{
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:#fff; color:var(--text) !important; font-weight:600;
          border:1px solid var(--border);
          padding:13px 18px; border-radius:980px;
          text-decoration:none !important;
          transition: filter .2s ease, transform .15s ease;
        }
        .contact-wa svg{ color:#25D366; font-size:1.2rem; }
        .contact-wa:hover{ border-color:var(--text); }
        .contact-loc{ border-top:1px solid var(--border); padding-top:20px; }
        .contact-loc-title svg{ color:var(--accent); }
        .contact-loc-title{ display:flex; align-items:center; gap:8px; font-weight:600; margin:0 0 12px; }
        .chip-row{ display:flex; gap:8px; flex-wrap:wrap; margin:0 0 12px; }
        .chip{
          font: inherit; font-size:.85rem; font-weight:600;
          padding:7px 14px; border-radius:999px; cursor:pointer;
          background:#fff; color:var(--text);
          border:1px solid var(--border);
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .chip:hover{ border-color: var(--text); }
        .chip.active{ background:var(--text); border-color:var(--text); color:#fff; }
        .map-wrap{ border-radius:12px; overflow:hidden; aspect-ratio:16/9; background: #fff; }
        .map-wrap iframe{ width:100%; height:100%; border:0; display:block; }
        .map-placeholder{
          height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:10px; padding:16px; text-align:center;
        }
        .map-placeholder p{ margin:0; font-weight:600; }
        .map-placeholder small{ color:var(--muted); font-size:.78rem; }
        .contact-route{ display:inline-block; margin-top:12px; color:var(--accent-ink) !important; font-weight:600; font-size:.92rem; }

        /* Formulierkaart */
        .contact-card{
          background:#fff; border:1px solid var(--border); border-radius:20px;
          padding: clamp(24px, 3vw, 40px);
          box-shadow: 0 4px 24px rgba(0,0,0,.06);
        }
        .contact-card h3{ margin:0 0 6px; font-size:1.4rem; }
        .card-intro{ line-height:1.55; margin:0 0 22px; color:var(--muted); }

        .contact-form{ display:flex; flex-direction:column; gap:16px; }
        .form-row{ display:flex; flex-direction:column; gap:6px; }
        .form-label{ font-size:.88rem; font-weight:600; color:var(--text); }
        .form-input{
          background: var(--bg-alt);
          border: 1px solid transparent;
          border-radius: 12px;
          color: var(--text);
          font-family: inherit;
          font-size: 1rem;
          padding: 12px 14px;
          transition: border-color .18s ease, box-shadow .18s ease, background .18s ease;
          outline: none;
          resize: vertical;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input:focus{
          background:#fff;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
        }
        .form-input::placeholder{ color: color-mix(in srgb, var(--text) 35%, transparent); }
        .form-textarea{ min-height: 140px; }
        .form-submit{ width:100%; margin-top:4px; }
        .form-submit:disabled{ opacity:.65; cursor:not-allowed; }
        .form-success{
          padding: 14px 16px; border-radius: 10px;
          background: color-mix(in srgb, #1FA34A 12%, #fff);
          border: 1px solid #1FA34A; color: var(--text);
          margin: 0;
        }
        .form-error{ color: #B42318; font-size: .9rem; margin: 0; }

        @media (max-width: 920px){
          .contact-grid{ grid-template-columns:1fr; }
          .contact-card{ order:-1; }
        }
        @media (max-width: 480px){
          .contact-wrap{ padding: 48px 16px; }
        }
      `}</style>
        </div>
    );
}
