import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "WordPress of maatwerk: wat past bij jouw bedrijf?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "WordPress of een maatwerk website? Zo kies je, vanuit mijn eigen ervaring met beide.",
        Body: () => (
            <>
                <p className="lead">
                    Bijna elke ondernemer die een website wil, stelt me dezelfde vraag: moet het WordPress
                    worden, of iets op maat? Het eerlijke antwoord is dat beide goed kunnen zijn. Het hangt af
                    van wat je site moet doen.
                </p>

                <h2>Wanneer WordPress een goede keuze is</h2>
                <p>
                    Voor de meeste zzp'ers en kleine bedrijven werkt WordPress prima. Je site bestaat uit
                    pagina's, teksten, foto's en misschien een blog, en je wilt dat zelf kunnen aanpassen
                    zonder mij te bellen. Zo bouwde ik bijvoorbeeld de website van{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: rustig, snel te lezen en
                    makkelijk bij te werken.
                </p>
                <ul>
                    <li>Je wilt zelf teksten, foto's en blogs beheren.</li>
                    <li>Je site is vooral informatief: wie ben je, wat doe je, wat kost het, hoe neem ik contact op.</li>
                    <li>Je budget is beperkt en je wilt snel online.</li>
                    <li>Je wilt later makkelijk uitbreiden met een agenda, formulier of kleine webshop.</li>
                </ul>

                <h2>Wanneer maatwerk beter past</h2>
                <p>
                    Maatwerk loont als je website meer moet doen dan informeren. Denk aan inloggen, betalingen,
                    contracten of koppelingen met andere systemen. Een voorbeeld is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, een verhuurapp voor hospita's die ik
                    bouwde met Spring Boot en OAuth2. Dat los je niet op met plug-ins.
                </p>
                <ul>
                    <li>Gebruikers moeten veilig kunnen inloggen en eigen gegevens beheren.</li>
                    <li>Je hebt een eigen werkwijze die in geen enkel standaardpakket past.</li>
                    <li>Je wilt volledige controle over snelheid, veiligheid en ontwerp.</li>
                    <li>De site is de kern van je bedrijf, niet alleen een visitekaartje.</li>
                </ul>

                <h2>Wat het verschil in de praktijk betekent</h2>
                <p>
                    Bij WordPress betaal je minder in het begin en kun je veel zelf. Daar staat tegenover dat
                    updates en plug-ins onderhoud vragen. Een verouderde plug-in is de meest voorkomende reden
                    dat een WordPress-site gehackt wordt. Bij maatwerk is de start duurder en ben je voor
                    aanpassingen vaker van mij afhankelijk, maar je krijgt precies wat je nodig hebt en niets
                    wat je niet gebruikt.
                </p>
                <p>
                    Mijn tarieven zie je op de <Link to="/#tarieven">homepage</Link>: een basis website vanaf
                    €1.200, een website met CMS vanaf €2.450 en volledig maatwerk vanaf €4.250, allemaal
                    exclusief btw en met een vaste prijs in de offerte.
                </p>

                <h2>Zo kies je</h2>
                <p>
                    Stel jezelf drie vragen. Wil ik zelf teksten kunnen aanpassen? Dan WordPress of een CMS.
                    Moeten mensen kunnen inloggen of betalen op een manier die niet standaard is? Dan maatwerk.
                    Weet ik het nog niet? Dan is WordPress bijna altijd het veiligste begin, want je kunt later
                    altijd groeien.
                </p>

                <h2>Twijfel je nog?</h2>
                <p>
                    In een gratis gesprek van 30 minuten kijk ik met je mee naar wat je nodig hebt. Soms is het
                    antwoord dat je minder nodig hebt dan je dacht, en dat zeg ik dan ook.
                </p>
            </>
        ),
    },
    en: {
        title: "WordPress or custom build: which fits your business?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "WordPress or a custom website? How to choose, from my own experience with both.",
        Body: () => (
            <>
                <p className="lead">
                    Almost every business owner who wants a website asks me the same thing: should it be
                    WordPress, or something custom? The honest answer is that both can be right. It depends on
                    what your site has to do.
                </p>

                <h2>When WordPress is a good choice</h2>
                <p>
                    For most freelancers and small businesses, WordPress works well. Your site is made of
                    pages, text, photos and maybe a blog, and you want to edit it yourself without calling me.
                    That is how I built the website for{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: calm, easy to read and easy
                    to update.
                </p>
                <ul>
                    <li>You want to manage your own text, photos and blog posts.</li>
                    <li>Your site is mostly informative: who you are, what you do, what it costs, how to get in touch.</li>
                    <li>Your budget is limited and you want to go live quickly.</li>
                    <li>You may want to add a calendar, form or small shop later.</li>
                </ul>

                <h2>When custom fits better</h2>
                <p>
                    Custom pays off when your website has to do more than inform. Think logins, payments,
                    contracts or links with other systems. An example is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, a rental app for landladies that I
                    built with Spring Boot and OAuth2. You cannot solve that with plug-ins.
                </p>
                <ul>
                    <li>Users need to log in securely and manage their own data.</li>
                    <li>You have a way of working that fits no standard package.</li>
                    <li>You want full control over speed, security and design.</li>
                    <li>The site is the core of your business, not just a business card.</li>
                </ul>

                <h2>What the difference means in practice</h2>
                <p>
                    With WordPress you pay less at the start and can do a lot yourself. The trade-off is that
                    updates and plug-ins need maintenance. An outdated plug-in is the most common reason a
                    WordPress site gets hacked. With custom work the start costs more and you depend on me more
                    for changes, but you get exactly what you need and nothing you don't use.
                </p>
                <p>
                    You can see my rates on the <Link to="/#tarieven">homepage</Link>: a basic website from
                    €1,200, a website with CMS from €2,450 and fully custom from €4,250, all excluding VAT and
                    with a fixed price in the quote.
                </p>

                <h2>How to choose</h2>
                <p>
                    Ask yourself three questions. Do I want to edit text myself? Then WordPress or a CMS. Do
                    people need to log in or pay in a way that isn't standard? Then custom. Not sure yet? Then
                    WordPress is almost always the safest start, because you can always grow later.
                </p>

                <h2>Still unsure?</h2>
                <p>
                    In a free 30-minute call I'll look at what you need. Sometimes the answer is that you need
                    less than you thought, and I'll tell you.
                </p>
            </>
        ),
    },
};

export default function WordpressOfMaatwerk() {
    return (
        <BlogArticle
            id="wordpress-of-maatwerk"
            cover="/Portfolio/acupuncture-mockup"
            coverAlt="Website Acupuncture by Saskia op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
