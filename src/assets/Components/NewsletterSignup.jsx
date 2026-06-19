import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SiSubstack } from "react-icons/si";

const SUBSTACK_URL = "https://manonkeeman.substack.com";

export default function NewsletterSignup() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const dest = email.trim()
            ? `${SUBSTACK_URL}/subscribe?email=${encodeURIComponent(email.trim())}`
            : `${SUBSTACK_URL}/subscribe`;
        window.open(dest, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="newsletter-wrap">
            <p className="newsletter-label">{t("newsletter.label")}</p>
            <p className="newsletter-sub">{t("newsletter.sub")}</p>

            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("newsletter.placeholder")}
                    className="newsletter-input"
                />
                <button type="submit" className="btn btn-primary newsletter-btn">
                    <SiSubstack style={{ fontSize: "1em" }} />
                    {t("newsletter.btn")}
                </button>
            </form>

            <style>{`
                .newsletter-wrap {
                    margin-top: 48px;
                    padding: 32px;
                    background: var(--bg-alt);
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                }
                .newsletter-label {
                    margin: 0 0 6px;
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--text);
                }
                .newsletter-sub {
                    margin: 0 0 20px;
                    font-size: .87rem;
                    color: var(--muted);
                }
                .newsletter-form {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .newsletter-input {
                    flex: 1;
                    min-width: 200px;
                    padding: 10px 14px;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    background: var(--bg);
                    color: var(--text);
                    font-size: .95rem;
                    outline: none;
                    transition: border-color .2s;
                }
                .newsletter-input:focus { border-color: var(--accent); }
                .newsletter-input::placeholder { color: var(--muted); }
                .newsletter-btn {
                    white-space: nowrap;
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                }
            `}</style>
        </div>
    );
}
