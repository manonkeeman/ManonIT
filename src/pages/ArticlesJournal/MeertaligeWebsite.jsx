import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Een meertalige website laten maken: wat komt erbij kijken?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "Wat komt er kijken bij een website in meerdere talen? Mijn ervaring met Villa Vredestein in zes talen.",
        Body: () => (
            <>
                <p className="lead">
                    Een website in meerdere talen klinkt groot, maar voor veel kleine bedrijven is het
                    haalbaar. Mijn eigen site staat in zeven talen, en de site van Villa Vredestein in zes.
                    Dit is wat ik daarvan geleerd heb.
                </p>

                <h2>Heb je het echt nodig?</h2>
                <p>
                    Begin met de vraag wie je bezoekers zijn. Verhuur je een vakantiehuis aan Duitsers of
                    Fransen? Dan scoort een site in hun eigen taal veel beter dan alleen Engels. Heb je een
                    lokaal bedrijf voor Nederlandse klanten? Dan is één taal genoeg en bespaar je geld en
                    onderhoud.
                </p>

                <h2>Wat er technisch bij hoort</h2>
                <ul>
                    <li>Een eigen URL per taal, bijvoorbeeld <code>/en/about</code>, zodat Google elke versie kan vinden.</li>
                    <li>Hreflang-tags, zodat zoekmachines weten welke taalversie bij welke bezoeker hoort.</li>
                    <li>Een taalkeuze op de site zelf, die onthouden wordt.</li>
                    <li>Vertaalde titels en beschrijvingen, niet alleen vertaalde pagina's.</li>
                </ul>
                <p>
                    Een veelgemaakte fout is alleen de zichtbare tekst vertalen. Dan blijft de titel in Google
                    Nederlands en komt de buitenlandse bezoeker niet op je pagina.
                </p>

                <h2>Vertalen: wat doet AI, wat doe ik</h2>
                <p>
                    AI maakt de eerste vertaling en bespaart veel tijd. Daarna controleer ik toon en vakwoorden.
                    Voor een vakantiehuis of een praktijk is dat verschil belangrijk: een tekst moet warm en
                    natuurlijk klinken, niet als een vertaalmachine. Heb je een taal waar je zelf niets van
                    snapt, laat dan altijd een moedertaalspreker meelezen.
                </p>

                <h2>Wat het kost</h2>
                <p>
                    Elke extra taal betekent meer tekst om te vertalen, te controleren en later bij te houden.
                    Daarom reken ik meertaligheid mee in de offerte, meestal bij volledig maatwerk of een site
                    met CMS. Een tweede taal is overzichtelijk. Zes talen vraagt echt om een goede opzet. Mijn
                    tarieven staan op de <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Het voorbeeld Villa Vredestein</h2>
                <p>
                    Villa Vredestein in Driebergen trekt gasten uit meerdere landen. Daarom staat die website in
                    zes talen. Lees het verhaal in{" "}
                    <Link to="/journal/website-villa-vredestein">Villa Vredestein: een huis met een verhaal</Link>
                    {" "}of bekijk het <Link to="/frontendvredestein">project</Link>.
                </p>

                <h2>Mijn advies</h2>
                <p>
                    Begin met de taal van je belangrijkste groep bezoekers, doe die goed, en voeg later talen
                    toe als je ziet dat er vraag is. Een halve vertaling is slechter dan geen.
                </p>
            </>
        ),
    },
    en: {
        title: "Getting a multilingual website: what does it involve?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "What does a multilingual website involve? My experience with Villa Vredestein in six languages.",
        Body: () => (
            <>
                <p className="lead">
                    A website in several languages sounds big, but for many small businesses it is within
                    reach. My own site runs in seven languages, and the Villa Vredestein site in six. Here is
                    what I learned.
                </p>

                <h2>Do you really need it?</h2>
                <p>
                    Start by asking who your visitors are. Do you rent out a holiday home to German or French
                    guests? Then a site in their own language works far better than English alone. Do you run a
                    local business for Dutch clients? Then one language is enough and saves money and upkeep.
                </p>

                <h2>The technical side</h2>
                <ul>
                    <li>A separate URL per language, for example <code>/en/about</code>, so Google can find each version.</li>
                    <li>Hreflang tags, so search engines know which language version suits which visitor.</li>
                    <li>A language switch on the site itself that remembers the choice.</li>
                    <li>Translated titles and descriptions, not just translated pages.</li>
                </ul>
                <p>
                    A common mistake is translating only the visible text. Then the title in Google stays Dutch
                    and the foreign visitor never reaches your page.
                </p>

                <h2>Translating: what AI does, what I do</h2>
                <p>
                    AI makes the first translation and saves a lot of time. Then I check tone and technical
                    terms. For a holiday home or a practice that difference matters: a text should sound warm
                    and natural, not like a translation machine. If you don't speak a language yourself, always
                    have a native speaker read along.
                </p>

                <h2>What it costs</h2>
                <p>
                    Every extra language means more text to translate, check and keep up to date later. That is
                    why I include multilingual work in the quote, usually with fully custom builds or a site
                    with CMS. A second language is manageable. Six languages needs a proper set-up. My rates are
                    on the <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>The Villa Vredestein example</h2>
                <p>
                    Villa Vredestein in Driebergen hosts guests from several countries, which is why its website
                    runs in six languages. Read the story in{" "}
                    <Link to="/journal/website-villa-vredestein">Villa Vredestein: a house with a story</Link>
                    {" "}or see the <Link to="/frontendvredestein">project</Link>.
                </p>

                <h2>My advice</h2>
                <p>
                    Start with the language of your most important group of visitors, do it well, and add
                    languages later when you see demand. A half translation is worse than none.
                </p>
            </>
        ),
    },
};

export default function MeertaligeWebsite() {
    return (
        <BlogArticle
            id="meertalige-website"
            cover="/Portfolio/villa-vredestein-mockup"
            coverAlt="Meertalige website Villa Vredestein op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
