import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { FiCheck } from "react-icons/fi";

const SOCIALS = [
    { href: "https://www.linkedin.com/in/manonkeeman/", label: "LinkedIn", Icon: FaLinkedin },
    { href: "https://www.instagram.com/manonkeeman", label: "Instagram", Icon: FaInstagram },
    { href: "https://www.facebook.com/editor.lifestyle/", label: "Facebook", Icon: FaFacebook },
    { href: "https://manonkeeman.substack.com", label: "Substack", Icon: SiSubstack },
    { href: "https://github.com/manonkeeman", label: "GitHub", Icon: FaGithub },
];

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const { t } = useTranslation();
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

                    <div className="contact-social">
                        <p className="contact-social-title">{t('contact.onLocation')}</p>
                        <p className="contact-social-sub">{t('contact.follow')}</p>
                        <div className="contact-social-row">
                            {SOCIALS.map(({ href, label, Icon }) => (
                                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                                    <Icon aria-hidden="true" />
                                </a>
                            ))}
                        </div>
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
        .contact-social{ border-top:1px solid var(--border); padding-top:20px; }
        .contact-social-title{ font-weight:600; margin:0 0 4px; }
        .contact-social-sub{ font-size:.9rem; color:var(--muted); margin:0 0 14px; }
        .contact-social-row{ display:flex; gap:10px; flex-wrap:wrap; }
        .contact-social-row a{
          width:44px; height:44px; border-radius:12px;
          display:inline-flex; align-items:center; justify-content:center;
          background:#fff; color:var(--text) !important; font-size:1.15rem;
          border:1px solid var(--border);
          transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .contact-social-row a:hover{ background:var(--text); color:#fff !important; border-color:var(--text); }

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
