// Datums en leestijd in de taal van de bezoeker
const LOCALES = { nl: "nl-NL", en: "en-GB", fr: "fr-FR", de: "de-DE", es: "es-ES", it: "it-IT", uk: "uk-UA" };
const READ = {
    nl: (m) => `${m} min leestijd`, en: (m) => `${m} min read`, fr: (m) => `${m} min de lecture`,
    de: (m) => `${m} Min. Lesezeit`, es: (m) => `${m} min de lectura`, it: (m) => `${m} min di lettura`,
    uk: (m) => `${m} хв читання`,
};
const base = (lang = "nl") => (lang || "nl").split("-")[0];

// "2025-08-10" -> "10 augustus 2025" / "10 August 2025"
export function formatDate(date, lang) {
    return new Date(date).toLocaleDateString(LOCALES[base(lang)] || "nl-NL", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

// "3 maanden geleden" / "3 months ago"
export function ageFrom(date, lang) {
    const rtf = new Intl.RelativeTimeFormat(LOCALES[base(lang)] || "nl-NL", { numeric: "auto" });
    const days = Math.floor((Date.now() - new Date(date)) / 86400000);
    const months = Math.floor(days / 30);
    return months < 1 ? rtf.format(-days, "day") : rtf.format(-months, "month");
}

// Leestijd obv woorden
export function readTimeFromWords(words, lang, wpm = 225) {
    const mins = Math.max(1, Math.ceil((words || 0) / wpm));
    return (READ[base(lang)] || READ.nl)(mins);
}

// Uniformeer artikeldata naar kaart
export function toCard(item, lang) {
    return {
        slug: item.slug,
        title: item.title,
        dateISO: item.date,
        dateLabel: formatDate(item.date, lang),
        ageLabel: ageFrom(item.date, lang),
        readLabel: item.words ? readTimeFromWords(item.words, lang) : "",
        cover: item.cover,
        imgPosition: item.imgPosition ?? "center center",
        excerpt: item.excerpt ?? "",
    };
}
