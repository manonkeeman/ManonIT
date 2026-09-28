// Cookie-toestemming voor Google Analytics en Google Maps.
// De keuze staat in localStorage ('granted' | 'denied'); geen keuze = banner tonen.
import { useEffect, useState } from "react";

const KEY = "cookie-consent";
const EVENT = "cookie-consent-change";
export const OPEN_SETTINGS_EVENT = "cookie-settings-open";

export function getConsent() {
    try {
        return localStorage.getItem(KEY);
    } catch {
        return null;
    }
}

// Verwijdert de _ga-cookies op het huidige domein en het hoofddomein.
function clearGaCookies() {
    const host = window.location.hostname;
    const domains = ["", host, "." + host.split(".").slice(-2).join(".")];
    document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim();
        if (!name.startsWith("_ga")) return;
        domains.forEach((d) => {
            document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
        });
    });
}

export function setConsent(value) {
    const previous = getConsent();
    try {
        localStorage.setItem(KEY, value);
    } catch {
        // Opslag geblokkeerd: de keuze geldt dan alleen voor deze pagina.
    }

    if (value === "granted" && typeof window.loadGA === "function") {
        window.loadGA();
        window.gtag("event", "page_view", {
            page_path: window.location.pathname + window.location.search,
            page_location: window.location.href,
            page_title: document.title,
        });
    }

    // Toestemming ingetrokken terwijl GA al draaide: cookies weg en herladen
    // zodat het script niet meer actief is.
    if (value === "denied" && previous === "granted") {
        clearGaCookies();
        window.location.reload();
        return;
    }

    window.dispatchEvent(new Event(EVENT));
}

export function openCookieSettings() {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

// Hook: huidige keuze, en re-render zodra die verandert.
export function useConsent() {
    const [consent, setState] = useState(getConsent);
    useEffect(() => {
        const update = () => setState(getConsent());
        window.addEventListener(EVENT, update);
        return () => window.removeEventListener(EVENT, update);
    }, []);
    return consent;
}
