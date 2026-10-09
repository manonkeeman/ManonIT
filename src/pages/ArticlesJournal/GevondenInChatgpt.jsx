import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Gevonden worden in ChatGPT en Perplexity: wat werkt echt?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 5,
        shareText: "Wat ik zelf doe om mijn website zichtbaar te maken in ChatGPT, Claude en Perplexity.",
        Body: () => (
            <>
                <p className="lead">
                    Steeds meer mensen stellen hun vraag aan ChatGPT of Perplexity in plaats van aan Google.
                    Wie daar genoemd wordt, krijgt klanten. Er is veel hype over, dus hier schrijf ik op wat ik
                    zelf gedaan heb aan mijn eigen website en wat ik daarvan geloof.
                </p>

                <h2>Eerst: kunnen ze je site lezen?</h2>
                <p>
                    AI-crawlers zoals GPTBot, ClaudeBot en PerplexityBot voeren meestal geen JavaScript uit. Een
                    moderne React-site kan voor hen leeg lijken. Daarom maak ik van elke pagina vooraf een
                    volledige HTML-versie (prerendering), zodat de tekst direct leesbaar is. Dit is de basis.
                    Zonder dit helpt de rest niet.
                </p>

                <h2>Laat ze binnen</h2>
                <p>
                    Controleer je <code>robots.txt</code>. Sommige systemen blokkeren AI-bots standaard. Op mijn
                    site staan ze er bewust in met een <code>Allow</code>. Ik heb ook een <code>llms.txt</code>:
                    een korte samenvatting in gewone taal van wie ik ben, wat ik doe, wat het kost en welke
                    pagina's belangrijk zijn. Niet elk AI-systeem gebruikt het, maar het kost bijna niets en
                    helpt waar het wel gelezen wordt.
                </p>

                <h2>Schrijf antwoorden, geen slogans</h2>
                <p>
                    AI haalt zinnen uit je tekst om vragen te beantwoorden. Een zin als "Wij bieden
                    innovatieve oplossingen" is daarvoor onbruikbaar. Een zin als "Een basis website kost bij mij
                    vanaf €1.200 en is klaar in 3 tot 4 weken" is precies wat het kan overnemen. Zet je
                    prijzen, je werkwijze, je plaats en je doelgroep dus gewoon in tekst op de pagina.
                </p>

                <h2>Structured data</h2>
                <p>
                    Met schema.org-markup (JSON-LD) vertel je zoekmachines in een vast formaat wie je bent: je
                    naam, je bedrijf, je diensten, je werkgebied en je reviews. Het is geen toverformule, maar
                    het haalt twijfel weg.
                </p>

                <h2>Ben je ook buiten je eigen site te vinden?</h2>
                <p>
                    Dit is het deel dat veel mensen vergeten. AI vertrouwt wat het op meerdere plekken terugvindt.
                    Een volledig Google Bedrijfsprofiel, een LinkedIn-pagina, vermeldingen in lijstjes en echte
                    reviews wegen vaak zwaarder dan je eigen website. Gebruik overal dezelfde naam en dezelfde
                    omschrijving.
                </p>

                <h2>Wat ik niet kan beloven</h2>
                <p>
                    Niemand kan garanderen dat jij in een antwoord van ChatGPT verschijnt. De modellen
                    veranderen en de bronnen ook. Wat je wel kunt doen is zorgen dat je site leesbaar is, dat je
                    duidelijk bent en dat je op meer plekken bestaat. Dat is een goede basis voor Google én voor
                    AI.
                </p>

                <h2>Zelf testen</h2>
                <p>
                    Vraag ChatGPT, Claude en Perplexity eens: "Wie is een goede webdesigner voor [jouw branche]
                    in [jouw regio]?" Doe dat elke paar weken en schrijf op wat er verandert. Zo zie je of je
                    werk effect heeft. Hoe ik zelf AI inzet, lees je in{" "}
                    <Link to="/journal/ai-in-mijn-werk">Hoe ik AI gebruik in mijn werk</Link>.
                </p>
                <p>
                    Wil je dat ik naar jouw website kijk? Plan een gratis gesprek.
                </p>
            </>
        ),
    },
    en: {
        title: "Getting found in ChatGPT and Perplexity: what really works?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 5,
        shareText: "What I do myself to make my website visible in ChatGPT, Claude and Perplexity.",
        Body: () => (
            <>
                <p className="lead">
                    More and more people ask ChatGPT or Perplexity instead of Google. Being named there brings
                    clients. There is a lot of hype around it, so here is what I did on my own website and what
                    I believe about it.
                </p>

                <h2>First: can they read your site?</h2>
                <p>
                    AI crawlers like GPTBot, ClaudeBot and PerplexityBot mostly do not run JavaScript. A modern
                    React site can look empty to them. That is why I generate a complete HTML version of every
                    page in advance (prerendering), so the text is readable right away. This is the foundation.
                    Without it, the rest doesn't help.
                </p>

                <h2>Let them in</h2>
                <p>
                    Check your <code>robots.txt</code>. Some systems block AI bots by default. On my site they
                    are allowed on purpose with an <code>Allow</code>. I also have an <code>llms.txt</code>: a
                    short plain-language summary of who I am, what I do, what it costs and which pages matter.
                    Not every AI system uses it, but it costs almost nothing and helps where it is read.
                </p>

                <h2>Write answers, not slogans</h2>
                <p>
                    AI pulls sentences from your text to answer questions. A line like "We offer innovative
                    solutions" is useless for that. A line like "A basic website with me starts at €1,200 and is
                    ready in 3 to 4 weeks" is exactly what it can quote. So put your prices, your process, your
                    location and your audience in plain text on the page.
                </p>

                <h2>Structured data</h2>
                <p>
                    With schema.org markup (JSON-LD) you tell search engines in a fixed format who you are: your
                    name, your business, your services, your service area and your reviews. It is not a magic
                    formula, but it removes doubt.
                </p>

                <h2>Are you findable outside your own site?</h2>
                <p>
                    This is the part many people forget. AI trusts what it finds in several places. A complete
                    Google Business Profile, a LinkedIn page, mentions in lists and real reviews often weigh
                    more than your own website. Use the same name and the same description everywhere.
                </p>

                <h2>What I can't promise</h2>
                <p>
                    Nobody can guarantee that you appear in a ChatGPT answer. The models change and so do their
                    sources. What you can do is make sure your site is readable, that you are clear, and that
                    you exist in more than one place. That is a good base for Google and for AI.
                </p>

                <h2>Test it yourself</h2>
                <p>
                    Ask ChatGPT, Claude and Perplexity: "Who is a good web designer for [your industry] in
                    [your region]?" Do it every few weeks and write down what changes. That shows whether your
                    work has an effect. How I use AI myself is in{" "}
                    <Link to="/journal/ai-in-mijn-werk">How I use AI in my work</Link>.
                </p>
                <p>
                    Want me to look at your website? Book a free call.
                </p>
            </>
        ),
    },
};

export default function GevondenInChatgpt() {
    return (
        <BlogArticle
            id="gevonden-in-chatgpt"
            cover="/journal/ai-in-mijn-werk"
            coverAlt="Gevonden worden in AI-zoekmachines"
            content={content}
        />
    );
}
