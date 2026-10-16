import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Een website voor een vakantiehuis: wat is er nodig?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 5,
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
                    Voor Casa Reille bouw ik een voordelige website voor de verhuur van een vakantiehuis bij
                    Atri in Abruzzo, Italië. Geen webshop, geen ingewikkeld systeem, maar een rustige site die
                    het huis laat zien en waarmee gasten gemakkelijk contact kunnen opnemen. De site is nog in ontwikkeling. De
                    huidige versie staat op <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    Het is een huis waar wij zelf graag komen. Het contact ontstond doordat ik er een paar
                    jaar geleden heb meegeholpen met het plukken van de olijven. We werden verliefd op de
                    streek: bergen en zee dicht bij elkaar, een ruig landschap, authentieke Italianen en weinig
                    toeristen.
                </p>

                <h2>Een site die de streek laat voelen</h2>
                <p>
                    Die sfeer moet terugkomen in de site: geen glimmende brochure, maar rust, echte foto's en
                    ruimte voor het landschap. Abruzzo is voor veel gasten nog onbekend. De site legt daarom
                    ook uit waarom de streek de moeite waard is, van wandelen in de bergen tot een dag aan zee
                    en de dorpen rond Atri.
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
                    taal veel beter dan alleen Nederlands. Bij Casa Reille houd ik daar vanaf het begin
                    rekening mee, in de opbouw én in de SEO: per taal eigen teksten, titels en beschrijvingen,
                    zodat gasten die zoeken op bijvoorbeeld "vakantiehuis Abruzzo" of "Ferienhaus Abruzzen" de
                    site in hun eigen taal vinden. Omdat Abruzzo minder bekend is dan Toscane, zijn zoektermen
                    op streek en dorp minstens zo belangrijk als op het huis zelf. Lees meer in{" "}
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
                    CMS. Mijn tarieven staan op de <Link to="/tarieven">pagina Tarieven</Link>.
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
        minutes: 5,
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
                    For Casa Reille I am building an affordable website for renting out a holiday home near
                    Atri in Abruzzo, Italy. No shop, no complicated system, but a calm site that shows the
                    house and lets guests get in touch. The site is still in progress. The current version is
                    at <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    It is a house we love to visit ourselves. We got in touch because a few years ago I helped
                    pick the olives there. We fell in love with the region: mountains and sea close together,
                    a rugged landscape, authentic Italians and few tourists.
                </p>

                <h2>A site that lets you feel the region</h2>
                <p>
                    That atmosphere has to come through in the site: not a glossy brochure, but calm, real
                    photos and room for the landscape. Abruzzo is still unknown to many guests, so the site
                    also explains why the region is worth a visit, from hiking in the mountains to a day at
                    the sea and the villages around Atri.
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
                    language works far better than Dutch alone. For Casa Reille I take this into account from
                    the start, in the structure and in the SEO: separate texts, titles and descriptions per
                    language, so guests searching for "vakantiehuis Abruzzo" or "Ferienhaus Abruzzen" find the
                    site in their own language. Because Abruzzo is less known than Tuscany, search terms for
                    the region and village matter at least as much as those for the house itself. Read more in{" "}
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
                    the <Link to="/tarieven">Pricing page</Link>.
                </p>

                <h2>Want this too?</h2>
                <p>
                    Do you have a holiday home, a B&amp;B or another place to rent out? Book a free 30-minute
                    call. I'll look at what you really need, and what you can leave out.
                </p>
            </>
        ),
    },
    fr: {
        title: "Un site pour votre maison de vacances : de quoi avez-vous besoin ?",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 5,
        shareText: "De quoi un site de maison de vacances a-t-il besoin ? Mon expérience avec Casa Reille dans les Abruzzes.",
        Body: () => (
            <>
                <p className="lead">
                    On ne loue pas une maison de vacances avec un long site plein de fonctions. Les
                    hôtes veulent voir rapidement où elle se trouve, à quoi elle ressemble, combien
                    elle coûte et comment réserver. C'est presque tout.
                </p>

                <h2>L'exemple : Casa Reille dans les Abruzzes</h2>
                <p>
                    Pour Casa Reille, je construis un site abordable pour la location d'une maison de
                    vacances près d'Atri, dans les Abruzzes, en Italie. Pas de boutique, pas de système
                    compliqué, mais un site calme qui montre la maison et permet aux hôtes de prendre contact.
                    Le site est encore en cours de réalisation. La version actuelle est sur <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    C'est une maison où nous aimons venir nous-mêmes. Le contact est né parce que j'y ai aidé
                    à cueillir les olives il y a quelques années. Nous sommes tombés amoureux de la région :
                    montagnes et mer côte à côte, un paysage sauvage, des Italiens authentiques et peu de
                    touristes.
                </p>

                <h2>Un site qui fait sentir la région</h2>
                <p>
                    Cette atmosphère doit se retrouver dans le site : pas une brochure clinquante, mais du
                    calme, de vraies photos et de la place pour le paysage. Les Abruzzes sont encore peu
                    connues de nombreux hôtes. Le site explique donc aussi pourquoi la région vaut le détour,
                    de la randonnée en montagne à une journée à la mer et aux villages autour d'Atri.
                </p>

                <h2>Ce que les hôtes veulent savoir</h2>

                <ul>
                    <li><strong>De belles photos.</strong> C'est la première chose que les hôtes jugent. Investissez-y.</li>
                    <li><strong>La situation.</strong> Où c'est, ce qu'il y a à proximité et comment s'y rendre.</li>
                    <li><strong>Couchages et équipements.</strong> Combien de personnes, quelles chambres, ce qui est disponible.</li>
                    <li><strong>Prix et disponibilités.</strong> Ou simplement une façon claire de les demander.</li>
                    <li><strong>Un moyen simple de vous contacter.</strong> Un formulaire ou WhatsApp, sans détour.</li>
                </ul>

                <h2>Pensez à la langue de vos hôtes</h2>
                <p>
                    Louez-vous à des hôtes des Pays-Bas, d'Allemagne ou de France ? Alors un site dans leur
                    langue fonctionne bien mieux que le néerlandais seul. Pour Casa Reille, j'en tiens compte
                    dès le départ, dans la structure et dans le SEO : textes, titres et descriptions propres à
                    chaque langue, pour que les hôtes qui cherchent « vakantiehuis Abruzzo » ou « Ferienhaus
                    Abruzzen » trouvent le site dans leur langue. Les Abruzzes étant moins connues que la
                    Toscane, les mots-clés sur la région et le village comptent au moins autant que ceux de la
                    maison elle-même. Lisez-en plus dans{" "}
                    <Link to="/journal/meertalige-website">faire créer un site multilingue</Link>.
                </p>

                <h2>Réserver en direct ou via des plateformes ?</h2>

                <p>
                    Des plateformes comme Airbnb amènent des hôtes, mais prélèvent une part des
                    revenus. Votre propre site vous donne un endroit où les hôtes peuvent vous
                    trouver directement et où vous les accueillez vous-même. Beaucoup de
                    propriétaires font les deux : la plateforme pour la visibilité, leur site pour
                    les hôtes fidèles. Votre site n'a donc pas à tout remplacer.
                </p>

                <h2>Ce que ça coûte</h2>

                <p>
                    Un site de location simple entre dans ma formule de base, à partir de 1 200 €
                    hors TVA pour jusqu'à 5 pages. Si vous voulez modifier vous-même textes et
                    photos, nous regardons un site avec CMS. Tous les tarifs figurent sur la <Link
                    to="/tarieven">page Tarifs</Link>.
                </p>

                <h2>Envie de la même chose ?</h2>

                <p>
                    Vous avez une maison de vacances, un B&amp;B ou un autre lieu à louer ?
                    Planifiez un échange gratuit de 30 minutes. Je regarde ce dont vous avez
                    vraiment besoin, et ce que vous pouvez laisser de côté.
                </p>
            </>
        ),
    },
    de: {
        title: "Eine Website für Ihr Ferienhaus: Was brauchen Sie?",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 5,
        shareText: "Was braucht eine Ferienhaus-Website? Meine Erfahrung mit Casa Reille in den Abruzzen.",
        Body: () => (
            <>
                <p className="lead">
                    Ein Ferienhaus vermietet man nicht mit einer langen Website voller Funktionen.
                    Gäste wollen schnell sehen, wo es liegt, wie es aussieht, was es kostet und wie
                    man bucht. Das ist fast alles.
                </p>

                <h2>Das Beispiel: Casa Reille in den Abruzzen</h2>
                <p>
                    Für Casa Reille baue ich eine günstige Website für die Vermietung eines Ferienhauses bei
                    Atri in den Abruzzen, Italien. Kein Shop, kein kompliziertes System, sondern eine ruhige
                    Seite, die das Haus zeigt und Gäste Kontakt aufnehmen lässt. Die Seite ist noch in
                    Arbeit. Die aktuelle Version steht auf <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    Es ist ein Haus, in das wir selbst gern kommen. Der Kontakt entstand, weil ich dort vor
                    einigen Jahren beim Pflücken der Oliven geholfen habe. Wir haben uns in die Gegend
                    verliebt: Berge und Meer nah beieinander, eine raue Landschaft, authentische Italiener und
                    wenige Touristen.
                </p>

                <h2>Eine Seite, die die Gegend spüren lässt</h2>
                <p>
                    Diese Stimmung soll sich in der Seite wiederfinden: keine Hochglanzbroschüre, sondern
                    Ruhe, echte Fotos und Raum für die Landschaft. Die Abruzzen sind vielen Gästen noch
                    unbekannt. Die Seite erklärt deshalb auch, warum sich die Gegend lohnt, vom Wandern in den
                    Bergen über einen Tag am Meer bis zu den Dörfern rund um Atri.
                </p>

                <h2>Was Gäste wissen wollen</h2>

                <ul>
                    <li><strong>Schöne Fotos.</strong> Das beurteilen Gäste als Erstes. Investieren Sie darin.</li>
                    <li><strong>Lage.</strong> Wo es liegt, was in der Nähe ist und wie man hinkommt.</li>
                    <li><strong>Schlafplätze und Ausstattung.</strong> Wie viele Personen, welche Zimmer, was vorhanden ist.</li>
                    <li><strong>Preise und Verfügbarkeit.</strong> Oder einfach ein klarer Weg, sie anzufragen.</li>
                    <li><strong>Eine einfache Kontaktmöglichkeit.</strong> Ein Formular oder WhatsApp, ohne Umwege.</li>
                </ul>

                <h2>Denken Sie an die Sprache Ihrer Gäste</h2>
                <p>
                    Vermieten Sie an Gäste aus den Niederlanden, Deutschland oder Frankreich? Dann
                    funktioniert eine Seite in deren Sprache viel besser als nur Niederländisch. Bei Casa
                    Reille berücksichtige ich das von Anfang an, im Aufbau und in der SEO: eigene Texte,
                    Titel und Beschreibungen pro Sprache, damit Gäste, die nach "vakantiehuis Abruzzo" oder
                    "Ferienhaus Abruzzen" suchen, die Seite in ihrer Sprache finden. Da die Abruzzen weniger
                    bekannt sind als die Toskana, sind Suchbegriffe zu Region und Dorf mindestens so wichtig
                    wie die zum Haus selbst. Mehr dazu in{" "}
                    <Link to="/journal/meertalige-website">eine mehrsprachige Website erstellen lassen</Link>.
                </p>

                <h2>Direkt buchen oder über Plattformen?</h2>

                <p>
                    Plattformen wie Airbnb bringen Gäste, behalten aber einen Teil der Einnahmen.
                    Eine eigene Website gibt Ihnen einen Ort, an dem Gäste Sie direkt finden und Sie
                    sie selbst empfangen können. Viele Vermieter machen beides: die Plattform für
                    Reichweite, die eigene Seite für wiederkehrende Gäste. Ihre eigene Seite muss
                    also nichts ersetzen.
                </p>

                <h2>Was es kostet</h2>

                <p>
                    Eine einfache Vermietungs-Website passt in mein Basispaket, ab 1.200 € zzgl.
                    MwSt. für bis zu 5 Seiten. Möchten Sie Texte und Fotos selbst ändern, schauen
                    wir uns eine Seite mit CMS an. Alle Preise stehen auf der <Link
                    to="/tarieven">Seite Preise</Link>.
                </p>

                <h2>Möchten Sie das auch?</h2>

                <p>
                    Haben Sie ein Ferienhaus, ein B&amp;B oder einen anderen Ort zum Vermieten?
                    Planen Sie ein kostenloses Gespräch von 30 Minuten. Ich schaue, was Sie wirklich
                    brauchen und was Sie weglassen können.
                </p>
            </>
        ),
    },
    es: {
        title: "Una web para tu casa de vacaciones: ¿qué necesitas?",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 5,
        shareText: "¿Qué necesita una web para una casa de vacaciones? Mi experiencia con Casa Reille en los Abruzos.",
        Body: () => (
            <>
                <p className="lead">
                    Una casa de vacaciones no se alquila con una web larga llena de funciones. Los
                    huéspedes quieren ver rápido dónde está, qué aspecto tiene, cuánto cuesta y cómo
                    reservar. Eso es casi todo.
                </p>

                <h2>El ejemplo: Casa Reille en los Abruzos</h2>
                <p>
                    Para Casa Reille estoy construyendo una web económica para el alquiler de una casa de
                    vacaciones cerca de Atri, en los Abruzos, Italia. Sin tienda, sin sistemas complicados,
                    sino una web tranquila que muestra la casa y permite a los huéspedes ponerse en contacto.
                    La web aún está en desarrollo. La versión actual está en <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    Es una casa a la que nos gusta ir. El contacto surgió porque hace unos años ayudé allí a
                    recoger las aceitunas. Nos enamoramos de la región: montañas y mar muy cerca, un paisaje
                    agreste, italianos auténticos y pocos turistas.
                </p>

                <h2>Una web que deja sentir la región</h2>
                <p>
                    Esa atmósfera debe reflejarse en la web: no un folleto brillante, sino calma, fotos
                    reales y espacio para el paisaje. Los Abruzos todavía son desconocidos para muchos
                    huéspedes. Por eso la web también explica por qué merece la pena la región, desde las
                    rutas por la montaña hasta un día en el mar y los pueblos de los alrededores de Atri.
                </p>

                <h2>Lo que los huéspedes quieren saber</h2>

                <ul>
                    <li><strong>Buenas fotos.</strong> Es lo primero que juzgan los huéspedes. Invierte en ello.</li>
                    <li><strong>Ubicación.</strong> Dónde está, qué hay cerca y cómo llegar.</li>
                    <li><strong>Camas y comodidades.</strong> Cuántas personas, qué habitaciones, qué hay disponible.</li>
                    <li><strong>Precios y disponibilidad.</strong> O simplemente una forma clara de pedirlos.</li>
                    <li><strong>Una forma fácil de contactar.</strong> Un formulario o WhatsApp, sin rodeos.</li>
                </ul>

                <h2>Piensa en el idioma de tus huéspedes</h2>
                <p>
                    ¿Alquilas a huéspedes de los Países Bajos, Alemania o Francia? Entonces una web en su
                    idioma funciona mucho mejor que solo en neerlandés. En Casa Reille lo tengo en cuenta
                    desde el principio, en la estructura y en el SEO: textos, títulos y descripciones propios
                    por idioma, para que los huéspedes que buscan "vakantiehuis Abruzzo" o "Ferienhaus
                    Abruzzen" encuentren la web en su idioma. Como los Abruzos son menos conocidos que la
                    Toscana, las palabras clave de la región y del pueblo importan al menos tanto como las de
                    la propia casa. Lee más en{" "}
                    <Link to="/journal/meertalige-website">una web multilingüe</Link>.
                </p>

                <h2>¿Reserva directa o a través de plataformas?</h2>

                <p>
                    Plataformas como Airbnb traen huéspedes, pero se quedan con parte de los
                    ingresos. Tu propia web te da un lugar donde los huéspedes te encuentran
                    directamente y donde tú los recibes. Muchos anfitriones hacen ambas cosas: la
                    plataforma para el alcance, su web para los huéspedes que repiten. Así que tu
                    web no tiene que sustituir nada.
                </p>

                <h2>Cuánto cuesta</h2>

                <p>
                    Una web de alquiler sencilla encaja en mi paquete básico, desde 1.200 € sin IVA
                    para hasta 5 páginas. Si quieres cambiar tú mismo textos y fotos, miramos una
                    web con CMS. Todas las tarifas están en la <Link to="/tarieven">página de Tarifas</Link>.
                </p>

                <h2>¿Quieres lo mismo?</h2>

                <p>
                    ¿Tienes una casa de vacaciones, un B&amp;B u otro lugar para alquilar? Reserva
                    una llamada gratuita de 30 minutos. Veo lo que de verdad necesitas y lo que
                    puedes dejar fuera.
                </p>
            </>
        ),
    },
    it: {
        title: "Un sito per la tua casa vacanze: di cosa hai bisogno?",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 5,
        shareText: "Di cosa ha bisogno il sito di una casa vacanze? La mia esperienza con Casa Reille in Abruzzo.",
        Body: () => (
            <>
                <p className="lead">
                    Una casa vacanze non si affitta con un sito lungo pieno di funzioni. Gli ospiti
                    vogliono vedere subito dove si trova, com'è, quanto costa e come prenotare. È
                    quasi tutto.
                </p>

                <h2>L'esempio: Casa Reille in Abruzzo</h2>
                <p>
                    Per Casa Reille sto costruendo un sito economico per l'affitto di una casa vacanze vicino
                    ad Atri, in Abruzzo. Niente negozio, niente sistemi complicati, ma un sito tranquillo che
                    mostra la casa e permette agli ospiti di mettersi in contatto. Il sito è ancora in
                    sviluppo. La versione attuale è su <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    È una casa dove andiamo volentieri anche noi. Il contatto è nato perché qualche anno fa ho
                    aiutato a raccogliere le olive. Ci siamo innamorati della zona: montagne e mare vicini, un
                    paesaggio aspro, italiani autentici e pochi turisti.
                </p>

                <h2>Un sito che fa sentire il territorio</h2>
                <p>
                    Questa atmosfera deve riflettersi nel sito: non un opuscolo patinato, ma calma, foto vere
                    e spazio per il paesaggio. L'Abruzzo è ancora poco conosciuto da molti ospiti. Il sito
                    spiega quindi anche perché il territorio vale la visita, dalle escursioni in montagna a
                    una giornata al mare e ai borghi intorno ad Atri.
                </p>

                <h2>Cosa vogliono sapere gli ospiti</h2>

                <ul>
                    <li><strong>Belle foto.</strong> È la prima cosa che gli ospiti giudicano. Investici.</li>
                    <li><strong>Posizione.</strong> Dove si trova, cosa c'è nei dintorni e come arrivarci.</li>
                    <li><strong>Posti letto e servizi.</strong> Quante persone, quali camere, cosa c'è.</li>
                    <li><strong>Prezzi e disponibilità.</strong> O semplicemente un modo chiaro per richiederli.</li>
                    <li><strong>Un modo semplice per contattarti.</strong> Un modulo o WhatsApp, senza giri.</li>
                </ul>

                <h2>Pensa alla lingua dei tuoi ospiti</h2>
                <p>
                    Affitti a ospiti di Paesi Bassi, Germania o Francia? Allora un sito nella loro lingua
                    funziona molto meglio del solo olandese. Per Casa Reille ne tengo conto fin dall'inizio,
                    nella struttura e nella SEO: testi, titoli e descrizioni propri per ogni lingua, così gli
                    ospiti che cercano "vakantiehuis Abruzzo" o "Ferienhaus Abruzzen" trovano il sito nella
                    loro lingua. Poiché l'Abruzzo è meno noto della Toscana, le parole chiave su zona e
                    paese contano almeno quanto quelle sulla casa. Leggi di più in{" "}
                    <Link to="/journal/meertalige-website">un sito multilingue</Link>.
                </p>

                <h2>Prenotare direttamente o tramite piattaforme?</h2>

                <p>
                    Piattaforme come Airbnb portano ospiti, ma trattengono una parte dei ricavi. Un
                    sito tuo ti dà un posto dove gli ospiti ti trovano direttamente e dove li
                    accogli tu. Molti host fanno entrambe le cose: la piattaforma per la visibilità,
                    il sito per gli ospiti che tornano. Quindi il tuo sito non deve sostituire
                    nulla.
                </p>

                <h2>Quanto costa</h2>

                <p>
                    Un semplice sito di affitto rientra nel mio pacchetto base, da 1.200 € IVA
                    esclusa per un massimo di 5 pagine. Se vuoi modificare tu stesso testi e foto,
                    valutiamo un sito con CMS. Tutte le tariffe sono nella <Link
                    to="/tarieven">pagina Tariffe</Link>.
                </p>

                <h2>Vuoi lo stesso anche tu?</h2>

                <p>
                    Hai una casa vacanze, un B&amp;B o un altro posto da affittare? Prenota un
                    colloquio gratuito di 30 minuti. Vedo di cosa hai davvero bisogno e cosa puoi
                    lasciare fuori.
                </p>
            </>
        ),
    },
    uk: {
        title: "Сайт для вашого будинку відпочинку: що вам потрібно?",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 5,
        shareText: "Що потрібно сайту будинку відпочинку? Мій досвід із Casa Reille в Абруццо.",
        Body: () => (
            <>
                <p className="lead">
                    Будинок для відпочинку не здають через довгий сайт, повний функцій. Гості хочуть
                    швидко побачити, де він розташований, як виглядає, скільки коштує і як
                    забронювати. Це майже все.
                </p>

                <h2>Приклад: Casa Reille в Абруццо</h2>
                <p>
                    Для Casa Reille я створюю недорогий сайт для оренди будинку відпочинку поблизу Атрі в
                    Абруццо, Італія. Без магазину, без складних систем, а спокійний сайт, який показує
                    будинок і дає гостям змогу зв'язатися. Сайт ще в розробці. Поточну версію можна
                    побачити на <a href="http://russo.nl/Home/" target="_blank" rel="noreferrer">russo.nl</a>.
                </p>
                <p>
                    Це будинок, куди ми самі любимо приїздити. Знайомство відбулося тому, що кілька років
                    тому я допомагала там збирати оливки. Ми закохалися в цей край: гори й море поруч,
                    суворий краєвид, справжні італійці та мало туристів.
                </p>

                <h2>Сайт, який дає відчути край</h2>
                <p>
                    Ця атмосфера має відображатися на сайті: не глянцева брошура, а спокій, справжні фото
                    та місце для краєвиду. Абруццо для багатьох гостей ще невідоме. Тому сайт також
                    пояснює, чому цей край вартий візиту: від походів у горах до дня на морі та сіл навколо
                    Атрі.
                </p>

                <h2>Що хочуть знати гості</h2>

                <ul>
                    <li><strong>Гарні фото.</strong> Це перше, що оцінюють гості. Інвестуйте в це.</li>
                    <li><strong>Розташування.</strong> Де це, що поблизу і як дістатися.</li>
                    <li><strong>Спальні місця й зручності.</strong> Скільки людей, які кімнати, що є в наявності.</li>
                    <li><strong>Ціни та доступність.</strong> Або просто зрозумілий спосіб їх дізнатися.</li>
                    <li><strong>Простий спосіб зв'язатися.</strong> Форма чи WhatsApp, без обхідних шляхів.</li>
                </ul>

                <h2>Подумайте про мову ваших гостей</h2>
                <p>
                    Здаєте гостям із Нідерландів, Німеччини чи Франції? Тоді сайт їхньою мовою працює
                    набагато краще, ніж лише нідерландською. Для Casa Reille я враховую це від початку, і в
                    структурі, і в SEO: окремі тексти, заголовки й описи для кожної мови, щоб гості, які
                    шукають "vakantiehuis Abruzzo" чи "Ferienhaus Abruzzen", знаходили сайт своєю мовою.
                    Оскільки Абруццо менш відоме, ніж Тоскана, пошукові запити про край і село не менш
                    важливі, ніж про сам будинок. Читайте більше в статті{" "}
                    <Link to="/journal/meertalige-website">багатомовний сайт</Link>.
                </p>

                <h2>Бронювати напряму чи через платформи?</h2>

                <p>
                    Платформи на кшталт Airbnb приводять гостей, але забирають частину доходу.
                    Власний сайт дає вам місце, де гості можуть знайти вас напряму, а ви можете
                    прийняти їх самі. Багато господарів роблять і те, і те: платформа для охоплення,
                    власний сайт для гостей, що повертаються. Тож власний сайт не мусить нічого
                    замінювати.
                </p>

                <h2>Скільки це коштує</h2>

                <p>
                    Простий сайт для оренди вписується в мій базовий пакет, від 1 200 € без ПДВ до 5
                    сторінок. Якщо ви хочете самі змінювати тексти та фото, розглянемо сайт із CMS.
                    Усі тарифи — на <Link to="/tarieven">сторінці «Тарифи»</Link>.
                </p>

                <h2>Хочете так само?</h2>

                <p>
                    Маєте будинок для відпочинку, B&amp;B чи інше місце для оренди? Запишіться на
                    безкоштовну розмову на 30 хвилин. Я подивлюся, що вам справді потрібно, а що
                    можна не робити.
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
