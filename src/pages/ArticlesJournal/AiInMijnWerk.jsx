import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Hoe ik AI gebruik in mijn werk (en waar niet)",
        date: "2026-09-28",
        dateLabel: "28 september 2026",
        minutes: 4,
        shareText: "Hoe ik AI gebruik in mijn werk, en waar bewust niet.",
        Body: () => (
            <>
                <p className="lead">
                    Klanten vragen het me steeds vaker: gebruik jij ook AI? Het eerlijke antwoord is ja,
                    elke dag. Maar waarschijnlijk anders dan je denkt.
                </p>

                <h2>Een collega, geen vervanger</h2>
                <p>
                    Ik werk alleen. Dat betekent dat ik ontwerper, developer, tekstschrijver en
                    projectleider tegelijk ben. AI is voor mij de collega die nooit moe wordt: iemand om
                    mee te sparren, die het saaie werk sneller maakt en meekijkt als ik iets over het
                    hoofd zie.
                </p>
                <p>
                    De keuzes maak ik zelf. Wat er live gaat, heb ik gecontroleerd. Dat is het
                    belangrijkste verschil tussen AI gebruiken en AI het werk laten doen.
                </p>

                <h2>Waar ik AI voor gebruik</h2>

                <h3>Sneller bouwen</h3>
                <p>
                    Ik gebruik Claude als programmeerassistent. Het schrijft een eerste versie van een
                    stuk code, helpt bugs opsporen en denkt mee over de aanpak. Werk dat vroeger een
                    middag kostte, staat er nu in een uur. Die tijd steek ik in wat een website echt
                    beter maakt: het ontwerp, de teksten en de details die bezoekers opvallen.
                </p>

                <h3>Websites in meerdere talen</h3>
                <p>
                    Mijn eigen website is er in zeven talen. Zonder AI was dat voor een kleine
                    ondernemer nauwelijks te betalen geweest. AI maakt de eerste vertaling, daarna
                    controleer ik de toon en de vakwoorden. Zo wordt een meertalige site ook voor
                    kleinere bedrijven haalbaar.
                </p>

                <h3>Vindbaar in Google én in AI</h3>
                <p>
                    Steeds meer mensen zoeken niet alleen via Google, maar stellen hun vraag aan
                    ChatGPT, Claude of Perplexity. Wil je daar genoemd worden, dan moet je website
                    daar klaar voor zijn: heldere teksten, een logische opbouw en gestructureerde
                    gegevens, zodat een AI begrijpt wie je bent, wat je doet en waar je zit.
                </p>
                <p>
                    Dit heet GEO: Generative Engine Optimization. Ik pas het toe op mijn eigen site en
                    op de websites van klanten met{" "}
                    <Link to="/#onderhoud">Onderhoud & Groei</Link>.
                </p>

                <h3>Meten of het werkt</h3>
                <p>
                    Elke maand stel ik voor die klanten dezelfde vragen aan verschillende AI-assistenten.
                    Bijvoorbeeld: welke acupuncturist in Bakkum raad je aan? Wordt de klant genoemd, of
                    niet? Zo zie je zwart op wit of je zichtbaar bent op de plekken waar je klanten
                    tegenwoordig zoeken.
                </p>

                <h2>Waar ik AI bewust niet voor gebruik</h2>
                <ul>
                    <li>
                        <strong>Jouw verhaal.</strong> Waarom klanten voor jou kiezen, haal ik uit een
                        gesprek met jou. Niet uit een taalmodel.
                    </li>
                    <li>
                        <strong>Het eindoordeel.</strong> AI doet voorstellen. Ik beslis wat klopt, wat
                        bij je past en wat er live gaat.
                    </li>
                    <li>
                        <strong>Teksten zonder menselijke hand.</strong> AI-teksten herken je vaak meteen:
                        te glad, te veel opsommingen en overal dezelfde lange streepjes. Ik schrijf zelf
                        en gebruik AI hooguit als klankbord.
                    </li>
                </ul>

                <h2>Wat heb jij eraan?</h2>
                <p>
                    Je website staat sneller online en je betaalt minder uren voor hetzelfde resultaat.
                    Meerdere talen worden betaalbaar, en je wordt gevonden op de plekken waar mensen nu
                    zoeken. Ondertussen praat je nog steeds met één persoon die het hele plaatje overziet.
                </p>
                <p>
                    Benieuwd wat AI voor jouw website kan betekenen? Plan een gratis kennismaking van
                    30 minuten. Dan kijken we samen waar de kansen liggen.
                </p>
            </>
        ),
    },
    en: {
        title: "How I use AI in my work (and where I don't)",
        date: "2026-09-28",
        dateLabel: "28 September 2026",
        minutes: 4,
        shareText: "How I use AI in my work, and where I deliberately don't.",
        Body: () => (
            <>
                <p className="lead">
                    Clients ask me more and more often: do you use AI too? The honest answer is yes,
                    every day. But probably not in the way you think.
                </p>

                <h2>A colleague, not a replacement</h2>
                <p>
                    I work on my own. That means I am the designer, developer, copywriter and project
                    lead all at once. For me, AI is the colleague who never gets tired: someone to think
                    things through with, who speeds up the boring work and catches what I might miss.
                </p>
                <p>
                    I make the decisions. Whatever goes live, I have checked. That is the key difference
                    between using AI and letting AI do the work.
                </p>

                <h2>What I use AI for</h2>

                <h3>Building faster</h3>
                <p>
                    I use Claude as a programming assistant. It writes a first version of a piece of
                    code, helps track down bugs and thinks along about the approach. Work that used to
                    take an afternoon now takes an hour. I spend that time on what really makes a website
                    better: the design, the copy and the details visitors notice.
                </p>

                <h3>Websites in multiple languages</h3>
                <p>
                    My own website is available in seven languages. Without AI, that would hardly have
                    been affordable for a small business. AI makes the first translation, then I check
                    the tone and the terminology. That makes a multilingual site realistic for smaller
                    companies too.
                </p>

                <h3>Findable on Google and in AI</h3>
                <p>
                    More and more people don't just search on Google, they ask ChatGPT, Claude or
                    Perplexity. If you want to be mentioned there, your website needs to be ready for it:
                    clear copy, a logical structure and structured data, so an AI understands who you
                    are, what you do and where you are.
                </p>
                <p>
                    This is called GEO: Generative Engine Optimization. I apply it to my own site and to
                    client websites with <Link to="/#onderhoud">Maintenance & Growth</Link>.
                </p>

                <h3>Measuring whether it works</h3>
                <p>
                    Every month I ask several AI assistants the same questions for those clients. For
                    example: which acupuncturist in Bakkum would you recommend? Is the client mentioned
                    or not? That shows in black and white whether you are visible where your customers
                    are searching today.
                </p>

                <h2>What I deliberately don't use AI for</h2>
                <ul>
                    <li>
                        <strong>Your story.</strong> Why clients choose you is something I learn from a
                        conversation with you. Not from a language model.
                    </li>
                    <li>
                        <strong>The final call.</strong> AI makes suggestions. I decide what is right,
                        what suits you and what goes live.
                    </li>
                    <li>
                        <strong>Copy without a human touch.</strong> You can often spot AI copy right
                        away: too smooth, too many lists and the same long dashes everywhere. I write
                        myself and use AI as a sounding board at most.
                    </li>
                </ul>

                <h2>What's in it for you?</h2>
                <p>
                    Your website goes live sooner and you pay for fewer hours for the same result.
                    Multiple languages become affordable, and you get found where people search today.
                    Meanwhile you still talk to one person who sees the whole picture.
                </p>
                <p>
                    Curious what AI could do for your website? Book a free 30 minute intro call and
                    we'll look at the opportunities together.
                </p>
            </>
        ),
    },
};

export default function AiInMijnWerk() {
    return (
        <BlogArticle
            id="ai-in-mijn-werk"
            cover="/journal/ai-in-mijn-werk"
            coverAlt="Hoe ik AI gebruik in mijn werk"
            content={content}
        />
    );
}
