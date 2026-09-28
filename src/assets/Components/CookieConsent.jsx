import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { getConsent, setConsent, OPEN_SETTINGS_EVENT } from "../Helpers/consent.js";

export default function CookieConsent() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(() => getConsent() === null);

    useEffect(() => {
        const show = () => setOpen(true);
        window.addEventListener(OPEN_SETTINGS_EVENT, show);
        return () => window.removeEventListener(OPEN_SETTINGS_EVENT, show);
    }, []);

    if (!open) return null;

    const choose = (value) => {
        setOpen(false);
        setConsent(value);
    };

    return (
        <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={t("cookies.title")}>
            <p className="cookie-title">{t("cookies.title")}</p>
            <p className="cookie-text">
                {t("cookies.text")}{" "}
                {/* Plain RouterLink: privacybeleid is NL-only */}
                <RouterLink to="/privacy">{t("cookies.more")}</RouterLink>
            </p>
            <div className="cookie-actions">
                <button type="button" className="btn btn-ghost" onClick={() => choose("denied")}>
                    {t("cookies.decline")}
                </button>
                <button type="button" className="btn btn-primary" onClick={() => choose("granted")}>
                    {t("cookies.accept")}
                </button>
            </div>

            <style>{`
        .cookie-banner {
          position: fixed;
          left: 20px; bottom: 20px;
          z-index: 10000;
          width: min(400px, calc(100vw - 32px));
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 18px;
          box-shadow: 0 20px 50px -12px rgba(0,0,0,.25);
          padding: 20px 22px;
        }
        .cookie-title { font-weight: 600; margin: 0 0 6px; color: var(--text); }
        .cookie-text { font-size: .88rem; line-height: 1.55; color: var(--muted); margin: 0 0 16px; }
        .cookie-text a { color: var(--accent-ink); text-decoration: underline; }
        .cookie-actions { display: flex; gap: 10px; }
        .cookie-actions .btn { flex: 1; min-height: 42px; padding: 10px 16px; font-size: .92rem; }
        @media (max-width: 480px) {
          .cookie-banner { left: 16px; right: 16px; bottom: 16px; width: auto; }
        }
      `}</style>
        </div>
    );
}
