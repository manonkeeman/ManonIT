import { useState } from "react";
import { SiSubstack } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { useTranslation } from "react-i18next";

export default function ArticleFooter({ shareTitle, shareText }) {
    const { t } = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        const url = window.location.href;
        if (navigator.share) {
            try {
                await navigator.share({ title: shareTitle, text: shareText, url });
            } catch {
                // cancelled
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            // clipboard not available
        }
    };

    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`;

    return (
        <footer className="af-wrap">
            <a
                href="https://manonkeeman.substack.com"
                target="_blank"
                rel="noreferrer"
                className="af-substack"
            >
                <SiSubstack />
                Volg mij op Substack
            </a>

            <div className="af-share-row">
                <span className="af-share-label">{t("share.label")}</span>
                <div className="af-share-btns">
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="af-btn"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                    <button className="af-btn" onClick={handleCopy}>
                        <FiLink />
                        {copied ? t("share.copied") : "Link kopiëren"}
                    </button>
                </div>
            </div>

            <style>{`
        .af-wrap {
          max-width: 68ch;
          margin: 24px auto 0;
          padding-top: 24px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
        .af-substack {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 24px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: var(--accent);
          background: transparent;
          font-size: .95rem;
          font-weight: 600;
          text-decoration: none;
          transition: background .18s ease, color .18s ease;
        }
        .af-substack:hover {
          background: var(--accent);
          color: var(--bg);
        }
        .af-share-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .af-share-label {
          font-size: .82rem;
          font-weight: 600;
          letter-spacing: .04em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .af-share-btns {
          display: flex;
          gap: 8px;
        }
        .af-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 16px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-size: .88rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: border-color .18s ease, color .18s ease;
          white-space: nowrap;
        }
        .af-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
        </footer>
    );
}
