// Gedeelde stijlen voor Services (home), Pricing (/tarieven) en Faq (/faq)
export default function ServiceStyles() {
    return (
            <style>{`
                .sub-btn{
                    width:100%; margin-top:auto; padding:14px 20px;
                    background:linear-gradient(135deg, var(--accent-ink), #D9480F);
                    color:#fff; border-color:transparent; text-align:left;
                    box-shadow:0 10px 22px -10px rgba(185,58,9,.65);
                    transition:transform .15s ease, box-shadow .2s ease, filter .2s ease;
                }
                .sub-btn span{ flex:1; line-height:1.25 }
                .sub-btn svg{ flex-shrink:0; width:18px; height:18px }
                .sub-btn-arrow{ transition:transform .2s ease }
                .sub-btn:hover, .sub-btn:focus-visible{
                    color:#fff; filter:brightness(1.08); transform:translateY(-2px);
                    box-shadow:0 16px 28px -12px rgba(185,58,9,.75);
                }
                .sub-btn:hover .sub-btn-arrow{ transform:translateX(4px) }
                .svc-section {
                    padding: clamp(56px, 8vw, 96px) 20px;
                }
                .svc-steps-section {
                    padding: clamp(56px, 8vw, 96px) 20px;
                }
                .svc-label {
                    font-size: 0.75rem;
                    font-weight: 700;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                    color: var(--accent-ink);
                    margin: 0 0 10px;
                }
                .svc-intro {
                    color: var(--muted);
                    font-size: 0.96rem;
                    max-width: 58ch;
                    line-height: 1.65;
                    margin: 8px 0 40px;
                }

                /* Services grid */
                .svc-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                }
                @media (max-width: 760px) {
                    .svc-grid { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 480px) {
                    .svc-grid { grid-template-columns: 1fr; }
                }

                .svc-card {
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 18px;
                    padding: 28px 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
                }
                .svc-card:hover {
                    border-color: color-mix(in srgb, var(--accent) 45%, transparent);
                    box-shadow: 0 18px 40px -18px rgba(0,0,0,.25);
                    transform: translateY(-3px);
                }
                .svc-icon {
                    width: 48px; height: 48px;
                    border-radius: 14px;
                    display: inline-flex; align-items: center; justify-content: center;
                    background: color-mix(in srgb, var(--accent) 12%, #fff);
                    color: var(--accent-ink);
                    font-size: 1.35rem;
                    margin-bottom: 6px;
                }
                .svc-name {
                    font-size: 1.15rem;
                    font-weight: 700;
                    margin: 0;
                    color: var(--text);
                }
                .svc-desc {
                    font-size: 0.93rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                    flex: 1;
                }
                .svc-tags {
                    font-size: 0.75rem;
                    color: var(--muted);
                    margin: 0;
                    font-weight: 600;
                    letter-spacing: 0.03em;
                }

                /* Tarieven */
                .svc-price-section { padding: clamp(56px, 8vw, 96px) 20px; }
                .price-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    align-items: stretch;
                }
                .price-card {
                    position: relative;
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 32px 28px;
                    display: flex;
                    flex-direction: column;
                }
                .price-card--featured {
                    border: 2px solid var(--accent);
                    box-shadow: 0 24px 48px -24px rgba(0,0,0,.18);
                }
                .price-badge {
                    position: absolute; top: -13px; left: 28px;
                    background: var(--accent-ink); color: #fff;
                    font-size: .75rem; font-weight: 600;
                    padding: 5px 12px; border-radius: 980px;
                }
                .price-name { font-size: 1.25rem; margin: 0 0 6px; }
                .price-tagline { color: var(--muted); font-size: .92rem; line-height: 1.5; margin: 0 0 20px; min-height: 2.8em; }
                .price-amount { display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap; margin: 0 0 22px; }
                .price-amount strong { font-size: 2.3rem; font-weight: 700; letter-spacing: -.03em; color: var(--text); line-height: 1; }
                .price-from, .price-vat { font-size: .85rem; color: var(--muted); }
                .price-list {
                    list-style: none; margin: 0 0 20px; padding: 20px 0 0;
                    border-top: 1px solid var(--border);
                    display: grid; gap: 10px;
                    flex: 1;
                    align-content: start;
                }
                .price-list li { display: flex; gap: 10px; font-size: .93rem; line-height: 1.45; }
                .price-list svg { flex-shrink: 0; margin-top: 3px; color: var(--accent-ink); }
                .price-time { font-size: .85rem; color: var(--muted); margin: 0 0 16px; }
                .price-extras {
                    margin-top: 32px;
                    background: var(--bg-alt);
                    border-radius: 18px;
                    padding: 24px 28px;
                    font-size: .92rem; line-height: 1.6; color: var(--muted);
                }
                .price-extras p { margin: 0 0 8px; }
                .price-extras strong { color: var(--text); font-weight: 600; }
                @media (max-width: 900px) {
                    .price-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; gap: 28px; }
                    .price-tagline { min-height: 0; }
                }

                /* Onderhoud */
                .care {
                    scroll-margin-top: calc(var(--nav-h) + 16px);
                    margin-top: 48px;
                    background: var(--bg-alt);
                    border-radius: 24px;
                    padding: clamp(24px, 4vw, 48px);
                    display: grid;
                    grid-template-columns: .9fr 1.6fr;
                    gap: clamp(24px, 4vw, 48px);
                    align-items: center;
                }
                .care-icon {
                    width: 48px; height: 48px; border-radius: 14px;
                    display: flex; align-items: center; justify-content: center;
                    background: #fff; color: var(--accent-ink); font-size: 1.35rem;
                    margin-bottom: 16px;
                }
                .care-title { font-size: clamp(1.5rem, 2.4vw, 2rem); margin: 0 0 12px; }
                .care-text { color: var(--muted); line-height: 1.65; margin: 0; }
                .care-terms {
                    display: inline-block; margin: 16px 0 0;
                    font-size: .85rem; font-weight: 500; color: var(--text);
                    background: #fff; border-radius: 10px; padding: 8px 14px;
                }
                .care-plans { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
                .care-plan {
                    position: relative;
                    background: #fff;
                    border: 1px solid var(--border);
                    border-radius: 20px;
                    padding: 28px 24px;
                    display: flex; flex-direction: column;
                }
                .care-plan--featured { border: 2px solid var(--accent); }
                .care-plan-name { font-size: 1.1rem; font-weight: 700; margin: 0 0 12px; letter-spacing: -.01em; }
                .care-plan .price-amount { margin-bottom: 4px; }
                .care-hours { font-size: .88rem; color: var(--muted); margin: 0 0 18px; }
                @media (max-width: 900px) {
                    .care { grid-template-columns: 1fr; }
                }
                @media (max-width: 600px) {
                    .care-plans { grid-template-columns: 1fr; gap: 28px; }
                }

                /* Abonnement */
                .sub-setup { font-size: .92rem; color: var(--muted); margin: -10px 0 20px; }
                .sub-setup strong { color: var(--text); font-weight: 700; }
                .sub-info {
                    margin-top: 32px;
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                    gap: 20px;
                }
                .sub-card { background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 28px; }
                .sub-card h3 { font-size: 1.15rem; margin: 0 0 14px; }
                .sub-card p { color: var(--muted); line-height: 1.6; margin: 0 0 12px; font-size: .95rem; }
                .sub-terms { border-top: 0; padding-top: 0; margin: 0; }
                .sub-byline { color: var(--text) !important; font-weight: 500; }
                @media (max-width: 900px) {
                    .sub-info { grid-template-columns: 1fr; }
                }

                /* Veelgestelde vragen */
                .svc-faq-section { padding: clamp(56px, 8vw, 96px) 20px; }
                .faq-groups { display: grid; grid-template-columns: 1fr 1fr; gap: 32px 40px; align-items: start; }
                .faq-group-title { font-size: 1.05rem; margin: 0 0 12px; color: var(--accent-ink); }
                .faq-item { border-top: 1px solid var(--border); padding: 14px 0; }
                .faq-item:last-child { border-bottom: 1px solid var(--border); }
                .faq-item summary { cursor: pointer; font-weight: 600; line-height: 1.4; }
                .faq-item p { color: var(--muted); line-height: 1.65; margin: 10px 0 0; font-size: .95rem; }
                .faq-item a { color: var(--accent-ink); font-weight: 600; }
                @media (max-width: 900px) {
                    .faq-groups { grid-template-columns: 1fr; }
                }

                /* Steps */
                .svc-steps {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    position: relative;
                }
                @media (max-width: 760px) {
                    .svc-steps { grid-template-columns: 1fr 1fr; }
                }
                @media (max-width: 440px) {
                    .svc-steps { grid-template-columns: 1fr; }
                }

                .svc-step {
                    background: #fff;
                    border-radius: 18px;
                    padding: 28px 24px;
                }
                .svc-step-nr {
                    width: 44px; height: 44px;
                    border-radius: 50%;
                    display: inline-flex; align-items: center; justify-content: center;
                    background: color-mix(in srgb, var(--accent) 14%, #fff);
                    color: var(--accent-ink);
                    font-size: .95rem;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .svc-step-title {
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin: 0 0 8px;
                    color: var(--text);
                }
                .svc-step-text {
                    font-size: 0.86rem;
                    color: var(--muted);
                    margin: 0;
                    line-height: 1.6;
                }

                .svc-steps-cta {
                    margin-top: 44px;
                    text-align: center;
                }
            
                /* Compacte tarievenband op de homepage */
                .home-pricing{ padding-top: clamp(32px, 5vw, 56px); padding-bottom: clamp(32px, 5vw, 56px); }
                .home-pricing-inner{
                    display:flex; align-items:center; justify-content:space-between; gap:24px 40px; flex-wrap:wrap;
                    background:var(--bg-alt); border:1px solid var(--border); border-radius:20px;
                    padding: clamp(24px, 4vw, 40px);
                }
                .home-pricing-copy{ flex:1 1 360px; max-width:640px }
                .home-pricing-copy h2{ margin:0 0 8px; font-size:clamp(1.4rem, 2.6vw, 1.9rem) }
                .home-pricing-copy p{ margin:0; color:var(--muted); line-height:1.6 }
                .home-pricing-actions{ display:flex; align-items:center; gap:16px 24px; flex-wrap:wrap }
                .home-pricing-faq{ font-weight:600; color:var(--text); text-decoration:underline; text-underline-offset:4px }
                .home-pricing-faq:hover{ color:var(--accent-ink) }
                .page-head{ padding-bottom: 0 }
                .page-head .section-head{ margin-bottom: 0 }
                @media (max-width:480px){ .home-pricing-actions .btn{ flex:1 1 100% } }
            `}</style>
    );
}
