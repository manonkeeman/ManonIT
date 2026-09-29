import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/courier-prime/latin-400.css";
import "@fontsource/courier-prime/latin-400-italic.css";
import "@fontsource/courier-prime/latin-700.css";
import "./Styles.css";
import './i18n';

const app = (
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>
);

const root = document.getElementById('root');

if (window.__PRERENDER__) {
    // Alleen tijdens de build (scripts/prerender.mjs), in twee stappen na elkaar
    // (twee React-renders tegelijk in één pagina zitten elkaars context in de weg):
    // 1. normaal renderen, zodat titels, meta-tags en <html lang> in de <head> komen;
    // 2. de inhoud van #root maken met React's eigen prerender. Die HTML bevat de
    //    markeringen waarmee de browser de pagina later kan overnemen (hydrateren).
    (async () => {
        const headRoot = document.createElement('div');
        headRoot.hidden = true;
        document.body.appendChild(headRoot); // moet in de pagina hangen, anders komen titels niet in <head>
        const shadow = ReactDOM.createRoot(headRoot);
        shadow.render(app);
        const settled = () => headRoot.querySelector('footer') && !headRoot.querySelector('[data-page-loader]');
        for (let i = 0; i < 100 && !settled(); i++) await new Promise((r) => setTimeout(r, 100));
        await new Promise((r) => setTimeout(r, 300));
        const headHTML = document.head.innerHTML;
        const lang = document.documentElement.lang;
        shadow.unmount();
        headRoot.remove();

        const { prerender } = await import('react-dom/static');
        const { prelude } = await prerender(app);
        root.innerHTML = await new Response(prelude).text();
        // title/meta/link horen in de <head>: die zetten we terug uit stap 1
        root.querySelectorAll('title, meta, link[rel="canonical"], link[rel="alternate"]').forEach((el) => el.remove());
        document.head.innerHTML = headHTML;
        document.documentElement.lang = lang;
        window.__PRERENDER_DONE__ = true;
    })();
} else if (root.hasChildNodes()) {
    // Voorgerenderde pagina: de bestaande HTML overnemen in plaats van opnieuw
    // opbouwen. Zo blijft de inhoud staan terwijl lazy delen laden en springt
    // de layout niet.
    ReactDOM.hydrateRoot(root, app);
} else {
    ReactDOM.createRoot(root).render(app);
}
