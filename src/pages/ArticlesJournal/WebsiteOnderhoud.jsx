import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Wat zit er in website-onderhoud, en heb je het nodig?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "Wat doet website-onderhoud eigenlijk, en wanneer heb je het nodig?",
        Body: () => (
            <>
                <p className="lead">
                    Een website is niet af op de dag dat hij live gaat. Software veroudert, beveiliging
                    verandert en je bedrijf groeit. Onderhoud is het stille werk dat zorgt dat je site blijft
                    doen wat hij moet doen.
                </p>

                <h2>Wat onderhoud inhoudt</h2>
                <ul>
                    <li><strong>Updates:</strong> WordPress, thema's, plug-ins en andere onderdelen worden regelmatig bijgewerkt. Een verouderde plug-in is een van de grootste veiligheidsrisico's.</li>
                    <li><strong>Back-ups:</strong> gaat er iets mis, dan kun je terug naar een werkende versie.</li>
                    <li><strong>Monitoring:</strong> ik zie het als je site niet bereikbaar is, voordat jouw klant het ziet.</li>
                    <li><strong>Kleine aanpassingen:</strong> een nieuwe tekst, een foto, een prijs of een extra pagina.</li>
                    <li><strong>Doorlopende verbetering:</strong> snelheid, vindbaarheid en wat bezoekers wel of niet doen.</li>
                </ul>

                <h2>Wat ik aanbied</h2>
                <p>
                    <strong>Onderhoud Basis</strong> kost €120 per maand en bevat 2 uur werk, updates, back-ups
                    en monitoring. <strong>Onderhoud &amp; Groei</strong> kost €240 per maand en bevat 4 uur
                    werk, plus SEO en GEO en een maandrapport. Beide abonnementen lopen minimaal 3 maanden en
                    zijn daarna maandelijks opzegbaar. Losse uren kosten €65. Alle prijzen zijn exclusief btw,
                    en je vindt ze ook op de <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Heb je onderhoud nodig?</h2>
                <p>
                    Het hangt af van je site. Een eenvoudige site zonder inlog en zonder veel plug-ins kan
                    jarenlang goed blijven. Maar heb je WordPress, een webshop, een formulier waar mensen je
                    mee bereiken of een app met gebruikers, dan is onderhoud geen luxe. Een vraag die helpt:
                    wat kost het jou als je site een week niet werkt?
                </p>

                <h2>Zelf doen of uitbesteden</h2>
                <p>
                    Sommige ondernemers doen updates graag zelf. Dat kan, als je het ook echt regelmatig doet en
                    weet wat je moet doen als iets stukgaat. Voor de meeste mensen is het fijner om dit uit
                    handen te geven aan degene die de site gebouwd heeft, omdat die precies weet hoe alles in
                    elkaar zit. Dat is bij mij zo: ik bouw en onderhoud zelf, zonder tussenpersonen.
                </p>

                <h2>Een voorbeeld</h2>
                <p>
                    Bij projecten als <Link to="/thebigthree">The Big Three</Link> en{" "}
                    <Link to="/frontendvredestein">Villa Vredestein</Link> blijft de site na oplevering in
                    beweging: nieuwe teksten, nieuwe foto's, nieuwe wensen. Dan is een vast contactpersoon
                    handiger dan elke keer opnieuw uitleggen waar je mee bezig bent.
                </p>

                <h2>Vragen?</h2>
                <p>
                    Weet je niet zeker of je onderhoud nodig hebt? Plan een gratis gesprek van 30 minuten. Ik
                    kijk met je mee en zeg het eerlijk als het niet nodig is.
                </p>
            </>
        ),
    },
    en: {
        title: "What does website maintenance include, and do you need it?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "What does website maintenance actually do, and when do you need it?",
        Body: () => (
            <>
                <p className="lead">
                    A website is not finished the day it goes live. Software ages, security changes and your
                    business grows. Maintenance is the quiet work that keeps your site doing what it should.
                </p>

                <h2>What maintenance includes</h2>
                <ul>
                    <li><strong>Updates:</strong> WordPress, themes, plug-ins and other components are updated regularly. An outdated plug-in is one of the biggest security risks.</li>
                    <li><strong>Backups:</strong> if something goes wrong, you can go back to a working version.</li>
                    <li><strong>Monitoring:</strong> I see when your site is down before your customer does.</li>
                    <li><strong>Small changes:</strong> a new text, a photo, a price or an extra page.</li>
                    <li><strong>Ongoing improvement:</strong> speed, findability and what visitors do or don't do.</li>
                </ul>

                <h2>What I offer</h2>
                <p>
                    <strong>Maintenance Basic</strong> costs €120 per month and includes 2 hours of work,
                    updates, backups and monitoring. <strong>Maintenance &amp; Growth</strong> costs €240 per
                    month and includes 4 hours of work, plus SEO and GEO and a monthly report. Both plans run
                    for at least 3 months and can be cancelled monthly after that. Extra hours cost €65. All
                    prices exclude VAT, and you can also find them on the <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Do you need maintenance?</h2>
                <p>
                    It depends on your site. A simple site with no login and few plug-ins can stay fine for
                    years. But if you have WordPress, a shop, a form people use to reach you or an app with
                    users, maintenance is not a luxury. One question that helps: what does it cost you if your
                    site doesn't work for a week?
                </p>

                <h2>Do it yourself or outsource</h2>
                <p>
                    Some business owners like doing updates themselves. That works if you really do it
                    regularly and know what to do when something breaks. For most people it is easier to hand
                    this to whoever built the site, because they know exactly how everything fits together.
                    That is how I work: I build and maintain it myself, without middlemen.
                </p>

                <h2>An example</h2>
                <p>
                    With projects like <Link to="/thebigthree">The Big Three</Link> and{" "}
                    <Link to="/frontendvredestein">Villa Vredestein</Link> the site keeps moving after
                    delivery: new texts, new photos, new wishes. Then a fixed contact person is easier than
                    explaining what you are working on every time.
                </p>

                <h2>Questions?</h2>
                <p>
                    Not sure if you need maintenance? Book a free 30-minute call. I'll look with you and tell
                    you honestly if you don't.
                </p>
            </>
        ),
    },
};

export default function WebsiteOnderhoud() {
    return (
        <BlogArticle
            id="website-onderhoud"
            cover="/Portfolio/de-grote-drie-mockup"
            coverAlt="Website The Big Three op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
