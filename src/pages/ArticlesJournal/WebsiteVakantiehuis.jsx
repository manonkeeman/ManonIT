import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Een website voor je vakantiehuis: wat heb je nodig?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "Wat heeft een website voor een vakantiehuis nodig? Mijn ervaring met Casa Reille in Abruzzo.",
        Body: () => (
            <>
                <p className="lead">
                    Een vakantiehuis verhuur je niet met een lange website vol functies. Gasten willen snel
                    zien waar het ligt, hoe het eruitziet, wat het kost en hoe ze kunnen boeken. Dat is bijna
                    alles.
                </p>

                <h2>Het voorbeeld: Casa Reille in Abruzzo</h2>
                <p>
                    Voor Casa Reille bouwde ik een voordelige website voor de verhuur van een vakantiehuis bij
                    Atri in Abruzzo, Italië. Geen webshop, geen ingewikkeld systeem, maar een rustige site die
                    het huis laat zien en gasten laat contact opnemen. Je kunt de site bekijken op{" "}
                    <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>

                <h2>Wat gasten willen weten</h2>
                <ul>
                    <li><strong>Mooie foto's.</strong> Dit is het eerste wat gasten beoordelen. Investeer hierin.</li>
                    <li><strong>Ligging.</strong> Waar is het, wat is er in de buurt en hoe kom je er.</li>
                    <li><strong>Slaapplekken en voorzieningen.</strong> Hoeveel personen, welke kamers, wat is aanwezig.</li>
                    <li><strong>Prijzen en beschikbaarheid.</strong> Of gewoon duidelijk hoe je ze opvraagt.</li>
                    <li><strong>Een makkelijke manier om contact op te nemen.</strong> Een formulier of WhatsApp, zonder omwegen.</li>
                </ul>

                <h2>Denk aan de taal van je gasten</h2>
                <p>
                    Verhuur je aan gasten uit Nederland, Duitsland of Frankrijk? Dan scoort een site in hun
                    taal veel beter dan alleen Nederlands. Lees meer in{" "}
                    <Link to="/journal/meertalige-website">een meertalige website laten maken</Link>.
                </p>

                <h2>Zelf boeken of via platforms?</h2>
                <p>
                    Platforms zoals Airbnb brengen gasten, maar nemen een deel van de opbrengst. Een eigen
                    website geeft je een eigen plek waar gasten je direct kunnen vinden en je ze zelf kunt
                    ontvangen. Veel verhuurders doen allebei: het platform voor bereik, de eigen site voor
                    terugkerende gasten. Een eigen site hoeft dus geen vervanging te zijn.
                </p>

                <h2>Wat het kost</h2>
                <p>
                    Een eenvoudige verhuursite past in mijn basispakket, vanaf €1.200 exclusief btw voor tot 5
                    pagina's. Wil je zelf teksten en foto's kunnen aanpassen, dan kijken we naar een site met
                    CMS. Alle tarieven staan op de <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Wil je dit ook?</h2>
                <p>
                    Heb je een vakantiehuis, een B&amp;B of een andere plek om te verhuren? Plan een gratis
                    gesprek van 30 minuten. Dan kijk ik wat je echt nodig hebt, en wat je kunt laten.
                </p>
            </>
        ),
    },
    en: {
        title: "A website for your holiday home: what do you need?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "What does a holiday home website need? My experience with Casa Reille in Abruzzo.",
        Body: () => (
            <>
                <p className="lead">
                    You don't rent out a holiday home with a long website full of features. Guests want to see
                    quickly where it is, what it looks like, what it costs and how to book. That is almost
                    everything.
                </p>

                <h2>The example: Casa Reille in Abruzzo</h2>
                <p>
                    For Casa Reille I built an affordable website for renting out a holiday home near Atri in
                    Abruzzo, Italy. No shop, no complicated system, but a calm site that shows the house and
                    lets guests get in touch. You can see it at{" "}
                    <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>

                <h2>What guests want to know</h2>
                <ul>
                    <li><strong>Good photos.</strong> This is the first thing guests judge. Invest in it.</li>
                    <li><strong>Location.</strong> Where it is, what is nearby and how to get there.</li>
                    <li><strong>Sleeping places and facilities.</strong> How many people, which rooms, what is there.</li>
                    <li><strong>Prices and availability.</strong> Or simply a clear way to ask for them.</li>
                    <li><strong>An easy way to get in touch.</strong> A form or WhatsApp, no detours.</li>
                </ul>

                <h2>Think about your guests' language</h2>
                <p>
                    Do you rent to guests from the Netherlands, Germany or France? Then a site in their
                    language works far better than Dutch alone. Read more in{" "}
                    <Link to="/journal/meertalige-website">getting a multilingual website</Link>.
                </p>

                <h2>Book direct or through platforms?</h2>
                <p>
                    Platforms like Airbnb bring guests, but take part of the income. Your own website gives you
                    a place where guests can find you directly and you can welcome them yourself. Many hosts do
                    both: the platform for reach, their own site for returning guests. So your own site doesn't
                    have to replace anything.
                </p>

                <h2>What it costs</h2>
                <p>
                    A simple rental site fits my basic package, from €1,200 excluding VAT for up to 5 pages. If
                    you want to edit text and photos yourself, we look at a site with a CMS. All rates are on
                    the <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Want this too?</h2>
                <p>
                    Do you have a holiday home, a B&amp;B or another place to rent out? Book a free 30-minute
                    call. I'll look at what you really need, and what you can leave out.
                </p>
            </>
        ),
    },
};

export default function WebsiteVakantiehuis() {
    return (
        <BlogArticle
            id="website-vakantiehuis"
            cover="/Portfolio/casa-reille-mockup"
            coverAlt="Website Casa Reille op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
