import { useState, useEffect } from "react";
import { SiSubstack, SiX, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { FiLink, FiShare2, FiCheck } from "react-icons/fi";

const SUBSTACK = "https://manonkeeman.substack.com";

export default function ArticleFooter({ shareTitle, shareText }) {
    const [copied, setCopied] = useState(false);
    const [canNativeShare, setCanNativeShare] = useState(false);
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(window.location.href);
        setCanNativeShare(typeof navigator.share === "function");
    }, []);

    const encoded = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(shareTitle || "");
    const encodedText = encodeURIComponent(`${shareTitle} — door Manon Keeman`);

    const platforms = [
        {
            key: "linkedin",
            label: "LinkedIn",
            icon: <SiLinkedin />,
            href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
        },
        {
            key: "x",
            label: "X",
            icon: <SiX />,
            href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedText}&via=manonkeeman`,
        },
        {
            key: "facebook",
            label: "Facebook",
            icon: <SiFacebook />,
            href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}&quote=${encodedTitle}`,
        },
        {
            key: "instagram",
            label: "Instagram",
            icon: <SiInstagram />,
            href: null, // app-only — copy link
            action: "copy",
            tooltip: "Kopieer de link en plak hem in je Instagram-verhaal of bio",
        },
    ];

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        } catch {
            // fallback: select text
        }
    };

    const handleNativeShare = async () => {
        try {
            await navigator.share({ title: shareTitle, text: shareText, url });
        } catch {
            // cancelled
        }
    };

    return (
        <footer className="af-wrap">
            <a href={SUBSTACK} target="_blank" rel="noreferrer" className="af-substack">
                <SiSubstack />
                Volg mij op Substack
            </a>

            <div className="af-share-section">
                <span className="af-share-label">Deel dit artikel</span>
                <div className="af-btns">
                    {platforms.map(({ key, label, icon, href, action, tooltip }) =>
                        href ? (
                            <a
                                key={key}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                className={`af-btn af-btn--${key}`}
                                title={label}
                                onClick={() => window.open(href, "_blank", "width=600,height=480,noopener,noreferrer")}
                            >
                                {icon}
                                <span>{label}</span>
                            </a>
                        ) : (
                            <button
                                key={key}
                                className={`af-btn af-btn--${key}`}
                                title={tooltip}
                                onClick={handleCopy}
                            >
                                {icon}
                                <span>{label}</span>
                            </button>
                        )
                    )}

                    <button
                        className={`af-btn af-btn--copy ${copied ? "af-btn--copied" : ""}`}
                        onClick={handleCopy}
                        title="Link kopiëren"
                    >
                        {copied ? <FiCheck /> : <FiLink />}
                        <span>{copied ? "Gekopieerd!" : "Link"}</span>
                    </button>

                    {canNativeShare && (
                        <button
                            className="af-btn af-btn--share"
                            onClick={handleNativeShare}
                            title="Meer opties"
                        >
                            <FiShare2 />
                            <span>Meer</span>
                        </button>
                    )}
                </div>
            </div>

            <style>{`
        .af-wrap {
          max-width: 68ch;
          margin: 32px auto 0;
          padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .af-substack {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 26px;
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
        .af-share-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          width: 100%;
        }
        .af-share-label {
          font-size: .78rem;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .af-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .af-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-size: .85rem;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          text-decoration: none;
          transition: border-color .15s ease, color .15s ease, background .15s ease;
          white-space: nowrap;
          line-height: 1;
        }
        .af-btn svg { font-size: 1rem; flex-shrink: 0; }
        .af-btn:hover { color: var(--text); border-color: var(--accent); }

        /* Platform hover kleuren */
        .af-btn--linkedin:hover { color: #0a66c2; border-color: #0a66c2; }
        .af-btn--x:hover        { color: var(--text); border-color: var(--text); }
        .af-btn--facebook:hover { color: #1877f2; border-color: #1877f2; }
        .af-btn--instagram:hover{ color: #e1306c; border-color: #e1306c; }
        .af-btn--copy:hover     { color: var(--accent); border-color: var(--accent); }
        .af-btn--share:hover    { color: var(--accent); border-color: var(--accent); }

        .af-btn--copied {
          color: var(--accent);
          border-color: var(--accent);
        }

        @media (max-width: 480px) {
          .af-btns { gap: 6px; }
          .af-btn { padding: 7px 11px; font-size: .82rem; }
        }
      `}</style>
        </footer>
    );
}
