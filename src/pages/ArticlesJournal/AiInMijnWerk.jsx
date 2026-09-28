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
    de: {
        title: "Wie ich KI in meiner Arbeit nutze (und wo nicht)",
        date: "2026-09-28",
        dateLabel: "28. September 2026",
        minutes: 4,
        shareText: "Wie ich KI in meiner Arbeit nutze, und wo bewusst nicht.",
        Body: () => (
            <>
                <p className="lead">
                    Kunden fragen mich immer öfter: Nutzt du auch KI? Die ehrliche Antwort ist ja, jeden
                    Tag. Aber wahrscheinlich anders, als du denkst.
                </p>

                <h2>Eine Kollegin, kein Ersatz</h2>
                <p>
                    Ich arbeite allein. Das heißt, ich bin Designerin, Entwicklerin, Texterin und
                    Projektleiterin zugleich. KI ist für mich die Kollegin, die nie müde wird: jemand zum
                    Nachdenken, die langweilige Arbeit schneller macht und mitschaut, wenn mir etwas entgeht.
                </p>
                <p>
                    Die Entscheidungen treffe ich selbst. Was live geht, habe ich geprüft. Das ist der
                    wichtigste Unterschied zwischen KI nutzen und KI die Arbeit machen lassen.
                </p>

                <h2>Wofür ich KI nutze</h2>

                <h3>Schneller bauen</h3>
                <p>
                    Ich nutze Claude als Programmierassistenten. Es schreibt eine erste Version eines
                    Codeabschnitts, hilft beim Finden von Fehlern und denkt beim Vorgehen mit. Arbeit, die
                    früher einen Nachmittag dauerte, ist jetzt in einer Stunde erledigt. Diese Zeit stecke
                    ich in das, was eine Website wirklich besser macht: das Design, die Texte und die
                    Details, die Besuchern auffallen.
                </p>

                <h3>Websites in mehreren Sprachen</h3>
                <p>
                    Meine eigene Website gibt es in sieben Sprachen. Ohne KI wäre das für ein kleines
                    Unternehmen kaum bezahlbar gewesen. KI macht die erste Übersetzung, danach prüfe ich
                    Ton und Fachbegriffe. So wird eine mehrsprachige Website auch für kleinere Firmen machbar.
                </p>

                <h3>Auffindbar bei Google und in KI</h3>
                <p>
                    Immer mehr Menschen suchen nicht nur bei Google, sondern stellen ihre Frage an ChatGPT,
                    Claude oder Perplexity. Wer dort genannt werden will, braucht eine Website, die dafür
                    bereit ist: klare Texte, ein logischer Aufbau und strukturierte Daten, damit eine KI
                    versteht, wer du bist, was du tust und wo du bist.
                </p>
                <p>
                    Das nennt man GEO: Generative Engine Optimization. Ich setze es auf meiner eigenen
                    Website ein und bei Kunden mit{" "}
                    <Link to="/#onderhoud">Wartung & Wachstum</Link>.
                </p>

                <h3>Messen, ob es wirkt</h3>
                <p>
                    Jeden Monat stelle ich für diese Kunden verschiedenen KI-Assistenten dieselben Fragen.
                    Zum Beispiel: Welche Akupunkteurin in Bakkum empfiehlst du? Wird der Kunde genannt oder
                    nicht? So siehst du schwarz auf weiß, ob du dort sichtbar bist, wo deine Kunden heute suchen.
                </p>

                <h2>Wofür ich KI bewusst nicht nutze</h2>
                <ul>
                    <li>
                        <strong>Deine Geschichte.</strong> Warum Kunden dich wählen, erfahre ich im Gespräch
                        mit dir. Nicht von einem Sprachmodell.
                    </li>
                    <li>
                        <strong>Das letzte Wort.</strong> KI macht Vorschläge. Ich entscheide, was stimmt,
                        was zu dir passt und was live geht.
                    </li>
                    <li>
                        <strong>Texte ohne menschliche Hand.</strong> KI-Texte erkennt man oft sofort: zu
                        glatt, zu viele Aufzählungen und überall dieselben langen Gedankenstriche. Ich schreibe
                        selbst und nutze KI höchstens als Sparringspartner.
                    </li>
                </ul>

                <h2>Was hast du davon?</h2>
                <p>
                    Deine Website ist schneller online und du zahlst weniger Stunden für dasselbe Ergebnis.
                    Mehrere Sprachen werden bezahlbar, und du wirst dort gefunden, wo Menschen heute suchen.
                    Dabei sprichst du immer noch mit einer Person, die das große Ganze im Blick hat.
                </p>
                <p>
                    Neugierig, was KI für deine Website tun kann? Buche ein kostenloses Gespräch von
                    30 Minuten. Dann schauen wir gemeinsam, wo die Chancen liegen.
                </p>
            </>
        ),
    },
    fr: {
        title: "Comment j'utilise l'IA dans mon travail (et où je ne l'utilise pas)",
        date: "2026-09-28",
        dateLabel: "28 septembre 2026",
        minutes: 4,
        shareText: "Comment j'utilise l'IA dans mon travail, et où je ne l'utilise délibérément pas.",
        Body: () => (
            <>
                <p className="lead">
                    Mes clients me le demandent de plus en plus souvent : tu utilises l'IA toi aussi ? La
                    réponse honnête est oui, tous les jours. Mais sans doute pas comme vous le pensez.
                </p>

                <h2>Une collègue, pas une remplaçante</h2>
                <p>
                    Je travaille seule. Je suis donc à la fois designer, développeuse, rédactrice et cheffe
                    de projet. Pour moi, l'IA est la collègue qui ne se fatigue jamais : quelqu'un avec qui
                    réfléchir, qui accélère le travail ennuyeux et qui repère ce qui pourrait m'échapper.
                </p>
                <p>
                    Les décisions, c'est moi qui les prends. Ce qui est mis en ligne, je l'ai vérifié.
                    C'est toute la différence entre utiliser l'IA et laisser l'IA faire le travail.
                </p>

                <h2>À quoi me sert l'IA</h2>

                <h3>Construire plus vite</h3>
                <p>
                    J'utilise Claude comme assistant de programmation. Il écrit une première version d'un
                    morceau de code, aide à trouver les bugs et réfléchit avec moi à l'approche. Un travail
                    qui prenait un après-midi prend maintenant une heure. Ce temps, je l'investis dans ce qui
                    rend vraiment un site meilleur : le design, les textes et les détails que les visiteurs remarquent.
                </p>

                <h3>Des sites en plusieurs langues</h3>
                <p>
                    Mon propre site existe en sept langues. Sans l'IA, cela aurait été difficilement
                    abordable pour une petite entreprise. L'IA fait la première traduction, puis je vérifie
                    le ton et la terminologie. Un site multilingue devient ainsi réaliste pour les petites entreprises aussi.
                </p>

                <h3>Visible sur Google et dans l'IA</h3>
                <p>
                    De plus en plus de gens ne cherchent plus seulement sur Google : ils posent leur question
                    à ChatGPT, Claude ou Perplexity. Pour y être cité, votre site doit être prêt : des textes
                    clairs, une structure logique et des données structurées, pour qu'une IA comprenne qui
                    vous êtes, ce que vous faites et où vous êtes.
                </p>
                <p>
                    C'est ce qu'on appelle le GEO : Generative Engine Optimization. Je l'applique sur mon
                    propre site et chez les clients avec{" "}
                    <Link to="/#onderhoud">Maintenance & Croissance</Link>.
                </p>

                <h3>Mesurer si ça marche</h3>
                <p>
                    Chaque mois, je pose pour ces clients les mêmes questions à plusieurs assistants IA. Par
                    exemple : quelle acupunctrice à Bakkum recommandes-tu ? Le client est-il cité ou non ?
                    Vous voyez ainsi noir sur blanc si vous êtes visible là où vos clients cherchent aujourd'hui.
                </p>

                <h2>Ce pour quoi je n'utilise délibérément pas l'IA</h2>
                <ul>
                    <li>
                        <strong>Votre histoire.</strong> Pourquoi vos clients vous choisissent, je l'apprends
                        en discutant avec vous. Pas grâce à un modèle de langage.
                    </li>
                    <li>
                        <strong>Le dernier mot.</strong> L'IA fait des propositions. C'est moi qui décide de
                        ce qui est juste, de ce qui vous correspond et de ce qui est mis en ligne.
                    </li>
                    <li>
                        <strong>Des textes sans main humaine.</strong> On reconnaît souvent tout de suite un
                        texte d'IA : trop lisse, trop de listes et les mêmes longs tirets partout. J'écris
                        moi-même et j'utilise l'IA tout au plus comme interlocutrice.
                    </li>
                </ul>

                <h2>Qu'est-ce que vous y gagnez ?</h2>
                <p>
                    Votre site est en ligne plus vite et vous payez moins d'heures pour le même résultat.
                    Plusieurs langues deviennent abordables, et vous êtes trouvé là où les gens cherchent
                    aujourd'hui. Et vous parlez toujours à une seule personne qui a une vue d'ensemble.
                </p>
                <p>
                    Curieux de savoir ce que l'IA peut apporter à votre site ? Réservez un échange gratuit de
                    30 minutes. Nous verrons ensemble où sont les opportunités.
                </p>
            </>
        ),
    },
    es: {
        title: "Cómo uso la IA en mi trabajo (y dónde no)",
        date: "2026-09-28",
        dateLabel: "28 de septiembre de 2026",
        minutes: 4,
        shareText: "Cómo uso la IA en mi trabajo, y dónde deliberadamente no.",
        Body: () => (
            <>
                <p className="lead">
                    Los clientes me lo preguntan cada vez más: ¿tú también usas IA? La respuesta sincera es
                    sí, todos los días. Pero probablemente no como piensas.
                </p>

                <h2>Una compañera, no un reemplazo</h2>
                <p>
                    Trabajo sola. Eso significa que soy diseñadora, desarrolladora, redactora y jefa de
                    proyecto a la vez. Para mí, la IA es la compañera que nunca se cansa: alguien con quien
                    pensar, que acelera el trabajo aburrido y que se fija en lo que a mí se me escapa.
                </p>
                <p>
                    Las decisiones las tomo yo. Lo que se publica, lo he revisado. Esa es la gran diferencia
                    entre usar la IA y dejar que la IA haga el trabajo.
                </p>

                <h2>Para qué uso la IA</h2>

                <h3>Construir más rápido</h3>
                <p>
                    Uso Claude como asistente de programación. Escribe una primera versión de un fragmento
                    de código, ayuda a encontrar errores y piensa conmigo el enfoque. Un trabajo que antes
                    llevaba una tarde ahora está listo en una hora. Ese tiempo lo dedico a lo que de verdad
                    mejora una web: el diseño, los textos y los detalles que notan los visitantes.
                </p>

                <h3>Webs en varios idiomas</h3>
                <p>
                    Mi propia web está en siete idiomas. Sin IA, eso habría sido casi inasumible para una
                    pequeña empresa. La IA hace la primera traducción y después reviso el tono y los términos
                    técnicos. Así una web multilingüe también es viable para empresas más pequeñas.
                </p>

                <h3>Visible en Google y en la IA</h3>
                <p>
                    Cada vez más personas no solo buscan en Google, sino que preguntan a ChatGPT, Claude o
                    Perplexity. Si quieres que te mencionen allí, tu web tiene que estar preparada: textos
                    claros, una estructura lógica y datos estructurados, para que una IA entienda quién eres,
                    qué haces y dónde estás.
                </p>
                <p>
                    Esto se llama GEO: Generative Engine Optimization. Lo aplico en mi propia web y en las
                    de los clientes con{" "}
                    <Link to="/#onderhoud">Mantenimiento y Crecimiento</Link>.
                </p>

                <h3>Medir si funciona</h3>
                <p>
                    Cada mes hago a varios asistentes de IA las mismas preguntas para esos clientes. Por
                    ejemplo: ¿qué acupuntora en Bakkum me recomiendas? ¿Mencionan al cliente o no? Así ves
                    negro sobre blanco si eres visible donde tus clientes buscan hoy.
                </p>

                <h2>Para qué no uso la IA a propósito</h2>
                <ul>
                    <li>
                        <strong>Tu historia.</strong> Por qué te eligen tus clientes lo descubro hablando
                        contigo. No con un modelo de lenguaje.
                    </li>
                    <li>
                        <strong>La última palabra.</strong> La IA hace propuestas. Yo decido qué es correcto,
                        qué encaja contigo y qué se publica.
                    </li>
                    <li>
                        <strong>Textos sin mano humana.</strong> Un texto de IA se reconoce a menudo al
                        instante: demasiado pulido, demasiadas listas y las mismas rayas largas por todas
                        partes. Escribo yo misma y uso la IA como mucho para contrastar ideas.
                    </li>
                </ul>

                <h2>¿Qué ganas tú?</h2>
                <p>
                    Tu web está online antes y pagas menos horas por el mismo resultado. Varios idiomas se
                    vuelven asequibles, y te encuentran donde la gente busca hoy. Y sigues hablando con una
                    sola persona que tiene la visión completa.
                </p>
                <p>
                    ¿Quieres saber qué puede hacer la IA por tu web? Reserva una llamada gratuita de 30
                    minutos y veremos juntos dónde están las oportunidades.
                </p>
            </>
        ),
    },
    it: {
        title: "Come uso l'IA nel mio lavoro (e dove no)",
        date: "2026-09-28",
        dateLabel: "28 settembre 2026",
        minutes: 4,
        shareText: "Come uso l'IA nel mio lavoro, e dove volutamente no.",
        Body: () => (
            <>
                <p className="lead">
                    I clienti me lo chiedono sempre più spesso: usi anche tu l'IA? La risposta sincera è sì,
                    ogni giorno. Ma probabilmente non come pensi.
                </p>

                <h2>Una collega, non una sostituta</h2>
                <p>
                    Lavoro da sola. Significa che sono designer, sviluppatrice, copywriter e project manager
                    allo stesso tempo. Per me l'IA è la collega che non si stanca mai: qualcuno con cui
                    ragionare, che velocizza il lavoro noioso e che nota ciò che potrebbe sfuggirmi.
                </p>
                <p>
                    Le decisioni le prendo io. Ciò che va online l'ho controllato. È questa la differenza
                    più importante tra usare l'IA e lasciare che l'IA faccia il lavoro.
                </p>

                <h2>Per cosa uso l'IA</h2>

                <h3>Costruire più velocemente</h3>
                <p>
                    Uso Claude come assistente di programmazione. Scrive una prima versione di un pezzo di
                    codice, aiuta a trovare i bug e ragiona con me sull'approccio. Un lavoro che prima
                    richiedeva un pomeriggio ora è pronto in un'ora. Quel tempo lo dedico a ciò che rende
                    davvero migliore un sito: il design, i testi e i dettagli che i visitatori notano.
                </p>

                <h3>Siti in più lingue</h3>
                <p>
                    Il mio sito è disponibile in sette lingue. Senza l'IA sarebbe stato difficilmente
                    sostenibile per una piccola impresa. L'IA fa la prima traduzione, poi controllo il tono e
                    la terminologia. Così un sito multilingue diventa possibile anche per le aziende più piccole.
                </p>

                <h3>Trovabili su Google e nell'IA</h3>
                <p>
                    Sempre più persone non cercano solo su Google, ma fanno la loro domanda a ChatGPT, Claude
                    o Perplexity. Per essere citato lì, il tuo sito deve essere pronto: testi chiari, una
                    struttura logica e dati strutturati, così che un'IA capisca chi sei, cosa fai e dove sei.
                </p>
                <p>
                    Si chiama GEO: Generative Engine Optimization. Lo applico al mio sito e a quelli dei
                    clienti con <Link to="/#onderhoud">Manutenzione & Crescita</Link>.
                </p>

                <h3>Misurare se funziona</h3>
                <p>
                    Ogni mese faccio per questi clienti le stesse domande a diversi assistenti IA. Per
                    esempio: quale agopuntrice a Bakkum mi consigli? Il cliente viene citato o no? Così vedi
                    nero su bianco se sei visibile dove i tuoi clienti cercano oggi.
                </p>

                <h2>Per cosa non uso volutamente l'IA</h2>
                <ul>
                    <li>
                        <strong>La tua storia.</strong> Perché i clienti scelgono te lo scopro parlando con
                        te. Non da un modello linguistico.
                    </li>
                    <li>
                        <strong>L'ultima parola.</strong> L'IA fa proposte. Sono io a decidere cosa è
                        giusto, cosa ti rappresenta e cosa va online.
                    </li>
                    <li>
                        <strong>Testi senza mano umana.</strong> Un testo scritto dall'IA spesso si
                        riconosce subito: troppo levigato, troppi elenchi e gli stessi trattini lunghi
                        ovunque. Scrivo io e uso l'IA al massimo come interlocutrice.
                    </li>
                </ul>

                <h2>Cosa ci guadagni?</h2>
                <p>
                    Il tuo sito è online prima e paghi meno ore per lo stesso risultato. Più lingue diventano
                    accessibili, e vieni trovato dove le persone cercano oggi. E parli sempre con una sola
                    persona che ha la visione d'insieme.
                </p>
                <p>
                    Curioso di sapere cosa può fare l'IA per il tuo sito? Prenota un colloquio gratuito di
                    30 minuti e vediamo insieme dove sono le opportunità.
                </p>
            </>
        ),
    },
    uk: {
        title: "Як я використовую ШІ у своїй роботі (і де ні)",
        date: "2026-09-28",
        dateLabel: "28 вересня 2026",
        minutes: 4,
        shareText: "Як я використовую ШІ у своїй роботі, і де свідомо ні.",
        Body: () => (
            <>
                <p className="lead">
                    Клієнти все частіше питають: ти теж користуєшся ШІ? Чесна відповідь: так, щодня. Але,
                    мабуть, не так, як ви думаєте.
                </p>

                <h2>Колега, а не заміна</h2>
                <p>
                    Я працюю сама. Тобто я водночас дизайнерка, розробниця, копірайтерка й керівниця
                    проєкту. Для мене ШІ це колега, яка ніколи не втомлюється: з нею можна порадитися, вона
                    пришвидшує рутину й помічає те, що я можу пропустити.
                </p>
                <p>
                    Рішення ухвалюю я. Усе, що з'являється на сайті, я перевірила. У цьому головна різниця
                    між тим, щоб користуватися ШІ, і тим, щоб дозволити ШІ робити роботу замість тебе.
                </p>

                <h2>Для чого я використовую ШІ</h2>

                <h3>Швидше створювати</h3>
                <p>
                    Я використовую Claude як помічника з програмування. Він пише першу версію фрагмента
                    коду, допомагає шукати помилки й обмірковує підхід разом зі мною. Робота, яка раніше
                    забирала пів дня, тепер готова за годину. Цей час я вкладаю в те, що справді робить сайт
                    кращим: дизайн, тексти й деталі, які помічають відвідувачі.
                </p>

                <h3>Сайти кількома мовами</h3>
                <p>
                    Мій власний сайт доступний сімома мовами. Без ШІ це було б майже непідйомно для малого
                    бізнесу. ШІ робить перший переклад, а потім я перевіряю тон і терміни. Так
                    багатомовний сайт стає реальним і для невеликих компаній.
                </p>

                <h3>Помітність у Google і в ШІ</h3>
                <p>
                    Дедалі більше людей шукають не лише в Google, а ставлять запитання ChatGPT, Claude чи
                    Perplexity. Щоб вас там згадували, сайт має бути до цього готовий: зрозумілі тексти,
                    логічна структура й структуровані дані, аби ШІ розумів, хто ви, чим займаєтеся й де ви є.
                </p>
                <p>
                    Це називається GEO: Generative Engine Optimization. Я застосовую це на власному сайті
                    та на сайтах клієнтів із тарифом{" "}
                    <Link to="/#onderhoud">Підтримка й Зростання</Link>.
                </p>

                <h3>Вимірювати, чи це працює</h3>
                <p>
                    Щомісяця я ставлю різним ШІ-асистентам однакові запитання для цих клієнтів. Наприклад:
                    якого акупунктуриста в Баккумі ти порадиш? Чи згадують клієнта? Так ви чорним по білому
                    бачите, чи помітні там, де сьогодні шукають ваші клієнти.
                </p>

                <h2>Для чого я свідомо не використовую ШІ</h2>
                <ul>
                    <li>
                        <strong>Ваша історія.</strong> Чому клієнти обирають саме вас, я дізнаюся з розмови
                        з вами. Не з мовної моделі.
                    </li>
                    <li>
                        <strong>Останнє слово.</strong> ШІ пропонує. Я вирішую, що правильно, що вам
                        пасує і що з'явиться на сайті.
                    </li>
                    <li>
                        <strong>Тексти без людської руки.</strong> Текст від ШІ часто впізнаєш одразу:
                        надто гладкий, забагато списків і скрізь однакові довгі тире. Я пишу сама й
                        використовую ШІ щонайбільше як співрозмовника.
                    </li>
                </ul>

                <h2>Що це дає вам?</h2>
                <p>
                    Ваш сайт запускається швидше, а ви платите за менше годин за той самий результат.
                    Кілька мов стають доступними, і вас знаходять там, де люди шукають сьогодні. При цьому
                    ви й далі спілкуєтеся з однією людиною, яка бачить усю картину.
                </p>
                <p>
                    Цікаво, що ШІ може зробити для вашого сайту? Заплануйте безкоштовну 30-хвилинну розмову,
                    і ми разом подивимося, де ваші можливості.
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
