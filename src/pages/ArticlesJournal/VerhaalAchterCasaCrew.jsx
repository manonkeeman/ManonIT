import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Van Excel-sheet naar eigen app: het verhaal achter CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 september 2026",
        minutes: 4,
        shareText: "Hoe een Excel-sheet vol kamerhuur uitgroeide tot CasaCrew, een verhuurapp voor hospita's.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew begon niet als idee voor een app. Het begon met een website voor Villa
                    Vredestein, en een vraag die ik stelde toen die website al bijna af was.
                </p>

                <h2>Eerst de website</h2>
                <p>
                    Maxim Staal vroeg me om een website voor Villa Vredestein, een historische villa in
                    Driebergen waar hij kamers verhuurt aan studenten. Een paar pagina's, dacht hij. Ik
                    vroeg door, over het huis, de geschiedenis en de mensen die er wonen. Dat werd de
                    website.
                </p>
                <p>
                    Maar tijdens die gesprekken kwam er iets anders op tafel. Het verhuren zelf. Wie heeft
                    er betaald? Welk contract loopt wanneer af? Wie is deze week aan de beurt voor de
                    badkamer? Dat stond allemaal in één Excel-sheet. En die sheet werd steeds voller.
                </p>

                <h2>Het echte probleem</h2>
                <p>
                    Een hospita doet veel meer dan een kamer verhuren. Je bent boekhouder, planner,
                    huisbaas en soms scheidsrechter. Het werk is niet moeilijk, maar het is versnipperd.
                    En versnipperd werk kost tijd, vooral als je het elke maand opnieuw moet uitzoeken.
                </p>
                <p>
                    Daar hoeft geen dure software voor te komen met honderd functies die je nooit gebruikt.
                    Wel iets dat precies doet wat nodig is, en niet meer.
                </p>

                <h2>Wat CasaCrew doet</h2>
                <ul>
                    <li>Een overzicht van alle betalingen, met automatische herinneringen</li>
                    <li>Digitale contracten en huisregels, altijd bij de hand</li>
                    <li>Een schoonmaakrooster per woning, zodat niemand hoeft te onthouden wie er aan de beurt is</li>
                    <li>Een eigen account voor elke huurder</li>
                    <li>Aparte rechten voor hospita en huurder: iedereen ziet alleen wat voor hem bedoeld is</li>
                </ul>
                <p>Maxim zei het later in zijn review kort en krachtig:</p>
                <p className="note">
                    "Daarna bouwde ze ook nog een verhuurdashboard voor onze studentenkamers, compleet
                    met betalingen, contracten en schoonmaakrooster, en ineens hoefde ik geen
                    Excel-sheet meer te vervloeken."
                </p>

                <h2>Hoe ik het bouwde</h2>
                <p>
                    Voor wie het wil weten: de basis is Spring Boot met een PostgreSQL-database. Inloggen
                    gaat veilig via OAuth2, en alles praat met elkaar via een REST API. In gewone taal: een
                    stevige motor onder de motorkap, zodat de app kan meegroeien. Van één huis naar tien,
                    van vijf huurders naar vijftig.
                </p>
                <p>
                    Het ontwerp hield ik bewust rustig. Een hospita opent de app tussen andere dingen door.
                    Dan wil je in één oogopslag zien wat er speelt, niet eerst zoeken.
                </p>

                <h2>Wat ik ervan leerde</h2>
                <p>
                    De beste projecten beginnen niet met een opdracht, maar met een vraag. Had ik alleen
                    gedaan wat er gevraagd werd, dan had Villa Vredestein een mooie website gehad en had
                    Maxim nog steeds met zijn Excel-sheet gezeten.
                </p>
                <p>
                    En wat voor één hospita werkt, werkt vaak ook voor anderen. Daarom is CasaCrew nu een
                    eigen app, beschikbaar voor andere verhuurders.
                </p>

                <h2>Verhuur jij kamers?</h2>
                <p>
                    Herken je die volle Excel-sheet? Kijk op{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>{" "}
                    wat de app kan, lees meer op de{" "}
                    <Link to="/backendstudentendashboard">projectpagina</Link>, of plan een gratis
                    gesprek. Dan laat ik je de app zien en kijken we samen of hij bij jouw situatie past.
                </p>
            </>
        ),
    },
    en: {
        title: "From spreadsheet to app: the story behind CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 September 2026",
        minutes: 4,
        shareText: "How a spreadsheet full of room rentals grew into CasaCrew, a rental app for landlords.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew didn't start as an idea for an app. It started with a website for Villa
                    Vredestein, and a question I asked when that website was almost finished.
                </p>

                <h2>First, the website</h2>
                <p>
                    Maxim Staal asked me to build a website for Villa Vredestein, a historic villa in
                    Driebergen where he rents out rooms to students. Just a few pages, he thought. I kept
                    asking about the house, its history and the people who live there. That became the website.
                </p>
                <p>
                    But during those conversations, something else came up. The renting itself. Who has
                    paid? Which contract ends when? Whose turn is it to clean the bathroom this week? It was
                    all in one spreadsheet. And that spreadsheet kept growing.
                </p>

                <h2>The real problem</h2>
                <p>
                    A landlord renting out rooms does much more than rent out rooms. You are the bookkeeper,
                    the planner, the landlord and sometimes the referee. The work isn't hard, but it is
                    scattered. And scattered work takes time, especially when you have to piece it together
                    again every month.
                </p>
                <p>
                    That doesn't call for expensive software with a hundred features you'll never use. It
                    calls for something that does exactly what is needed, and nothing more.
                </p>

                <h2>What CasaCrew does</h2>
                <ul>
                    <li>An overview of all payments, with automatic reminders</li>
                    <li>Digital contracts and house rules, always at hand</li>
                    <li>A cleaning schedule per house, so nobody has to remember whose turn it is</li>
                    <li>A personal account for every tenant</li>
                    <li>Separate access for landlord and tenant: everyone only sees what is meant for them</li>
                </ul>
                <p>Maxim later put it simply in his review:</p>
                <p className="note">
                    "Then she also built a rental dashboard for our student rooms, complete with payments,
                    contracts and a cleaning schedule, and suddenly I no longer had to curse an Excel sheet."
                </p>

                <h2>How I built it</h2>
                <p>
                    For those who want to know: it runs on Spring Boot with a PostgreSQL database. Login is
                    secured with OAuth2, and everything talks through a REST API. In plain language: a solid
                    engine under the hood, so the app can grow along. From one house to ten, from five
                    tenants to fifty.
                </p>
                <p>
                    I deliberately kept the design calm. A landlord opens the app in between other things.
                    You want to see what's going on at a glance, not go looking for it.
                </p>

                <h2>What I learned</h2>
                <p>
                    The best projects don't start with a brief, but with a question. Had I only done what I
                    was asked, Villa Vredestein would have had a nice website and Maxim would still be stuck
                    with his spreadsheet.
                </p>
                <p>
                    And what works for one landlord often works for others. That's why CasaCrew is now an
                    app of its own, available to other landlords.
                </p>

                <h2>Do you rent out rooms?</h2>
                <p>
                    Recognise that overflowing spreadsheet? See what the app can do at{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>, read more on the{" "}
                    <Link to="/backendstudentendashboard">project page</Link>, or book a free intro call.
                    I'll show you the app and we'll see together whether it fits your situation.
                </p>
            </>
        ),
    },
    de: {
        title: "Von der Excel-Tabelle zur eigenen App: die Geschichte hinter CasaCrew",
        date: "2026-09-28",
        dateLabel: "28. September 2026",
        minutes: 4,
        shareText: "Wie aus einer vollen Excel-Tabelle CasaCrew wurde, eine Vermietungs-App für Zimmervermieter.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew begann nicht als Idee für eine App. Es begann mit einer Website für die Villa
                    Vredestein, und mit einer Frage, die ich stellte, als diese Website fast fertig war.
                </p>

                <h2>Zuerst die Website</h2>
                <p>
                    Maxim Staal bat mich um eine Website für die Villa Vredestein, eine historische Villa in
                    Driebergen, in der er Zimmer an Studierende vermietet. Ein paar Seiten, dachte er. Ich
                    fragte nach, über das Haus, die Geschichte und die Menschen, die dort wohnen. Daraus wurde die Website.
                </p>
                <p>
                    Doch in diesen Gesprächen kam noch etwas anderes auf den Tisch: das Vermieten selbst. Wer
                    hat bezahlt? Welcher Vertrag läuft wann aus? Wer ist diese Woche mit dem Bad dran? Das
                    stand alles in einer einzigen Excel-Tabelle. Und die wurde immer voller.
                </p>

                <h2>Das eigentliche Problem</h2>
                <p>
                    Wer Zimmer vermietet, macht viel mehr als vermieten. Du bist Buchhalter, Planer,
                    Hausverwalter und manchmal Schiedsrichter. Die Arbeit ist nicht schwer, aber zersplittert.
                    Und zersplitterte Arbeit kostet Zeit, vor allem wenn du sie jeden Monat neu zusammensuchen musst.
                </p>
                <p>
                    Dafür braucht es keine teure Software mit hundert Funktionen, die man nie nutzt. Sondern
                    etwas, das genau das tut, was nötig ist, und nicht mehr.
                </p>

                <h2>Was CasaCrew kann</h2>
                <ul>
                    <li>Eine Übersicht aller Zahlungen, mit automatischen Erinnerungen</li>
                    <li>Digitale Verträge und Hausregeln, immer griffbereit</li>
                    <li>Ein Putzplan pro Haus, damit niemand sich merken muss, wer dran ist</li>
                    <li>Ein eigenes Konto für jeden Mieter</li>
                    <li>Getrennte Rechte für Vermieter und Mieter: Jeder sieht nur, was für ihn bestimmt ist</li>
                </ul>
                <p>Maxim fasste es später in seiner Bewertung kurz zusammen:</p>
                <p className="note">
                    "Danach baute sie auch noch ein Vermietungs-Dashboard für unsere Studentenzimmer, mit
                    Zahlungen, Verträgen und Putzplan, und plötzlich musste ich keine Excel-Tabelle mehr verfluchen."
                </p>

                <h2>Wie ich es gebaut habe</h2>
                <p>
                    Für alle, die es wissen wollen: Die Basis ist Spring Boot mit einer PostgreSQL-Datenbank.
                    Die Anmeldung läuft sicher über OAuth2, und alles kommuniziert über eine REST API. Einfach
                    gesagt: ein solider Motor unter der Haube, damit die App mitwachsen kann. Von einem Haus
                    auf zehn, von fünf Mietern auf fünfzig.
                </p>
                <p>
                    Das Design habe ich bewusst ruhig gehalten. Vermieter öffnen die App zwischendurch. Dann
                    willst du auf einen Blick sehen, was los ist, und nicht erst suchen.
                </p>

                <h2>Was ich daraus gelernt habe</h2>
                <p>
                    Die besten Projekte beginnen nicht mit einem Auftrag, sondern mit einer Frage. Hätte ich
                    nur getan, worum ich gebeten wurde, hätte die Villa Vredestein eine schöne Website und
                    Maxim säße immer noch vor seiner Excel-Tabelle.
                </p>
                <p>
                    Und was für einen Vermieter funktioniert, funktioniert oft auch für andere. Deshalb ist
                    CasaCrew jetzt eine eigene App, verfügbar für andere Vermieter.
                </p>

                <h2>Vermietest du Zimmer?</h2>
                <p>
                    Kommt dir die volle Excel-Tabelle bekannt vor? Auf{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>{" "}
                    siehst du, was die App kann. Mehr dazu auf der{" "}
                    <Link to="/backendstudentendashboard">Projektseite</Link>, oder buche ein kostenloses
                    Gespräch. Dann zeige ich dir die App und wir schauen gemeinsam, ob sie zu dir passt.
                </p>
            </>
        ),
    },
    fr: {
        title: "Du tableur à l'application : l'histoire de CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 septembre 2026",
        minutes: 4,
        shareText: "Comment un tableur débordant est devenu CasaCrew, une application pour loueurs de chambres.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew n'est pas né d'une idée d'application. Tout a commencé avec un site web pour la
                    Villa Vredestein, et une question que j'ai posée quand ce site était presque terminé.
                </p>

                <h2>D'abord le site web</h2>
                <p>
                    Maxim Staal m'a demandé un site pour la Villa Vredestein, une villa historique à
                    Driebergen où il loue des chambres à des étudiants. Quelques pages, pensait-il. J'ai posé
                    des questions sur la maison, son histoire et les gens qui y vivent. C'est devenu le site.
                </p>
                <p>
                    Mais au fil de ces conversations, autre chose est apparu : la location elle-même. Qui a
                    payé ? Quel contrat se termine quand ? À qui le tour de nettoyer la salle de bain cette
                    semaine ? Tout était dans un seul tableur Excel. Et ce tableur ne cessait de grossir.
                </p>

                <h2>Le vrai problème</h2>
                <p>
                    Louer des chambres, c'est bien plus que louer des chambres. On est comptable,
                    planificateur, propriétaire et parfois arbitre. Le travail n'est pas difficile, mais il est
                    éparpillé. Et un travail éparpillé prend du temps, surtout quand il faut tout reconstituer chaque mois.
                </p>
                <p>
                    Pas besoin pour autant d'un logiciel coûteux avec cent fonctions inutilisées. Il faut
                    quelque chose qui fasse exactement ce qui est nécessaire, et rien de plus.
                </p>

                <h2>Ce que fait CasaCrew</h2>
                <ul>
                    <li>Une vue d'ensemble de tous les paiements, avec des rappels automatiques</li>
                    <li>Des contrats et des règles de la maison numériques, toujours à portée de main</li>
                    <li>Un planning de ménage par maison, pour que personne n'ait à retenir à qui c'est le tour</li>
                    <li>Un compte personnel pour chaque locataire</li>
                    <li>Des accès séparés pour le loueur et le locataire : chacun ne voit que ce qui le concerne</li>
                </ul>
                <p>Maxim l'a résumé plus tard dans son avis :</p>
                <p className="note">
                    « Ensuite, elle a aussi construit un tableau de bord de location pour nos chambres
                    d'étudiants, avec paiements, contrats et planning de ménage, et d'un coup je n'ai plus eu
                    à maudire un tableur Excel. »
                </p>

                <h2>Comment je l'ai construit</h2>
                <p>
                    Pour ceux que ça intéresse : la base est Spring Boot avec une base de données PostgreSQL.
                    La connexion est sécurisée par OAuth2, et tout communique via une API REST. En clair : un
                    moteur solide sous le capot, pour que l'application puisse grandir. D'une maison à dix,
                    de cinq locataires à cinquante.
                </p>
                <p>
                    J'ai volontairement gardé un design calme. On ouvre l'application entre deux choses. On
                    veut voir d'un coup d'œil ce qui se passe, pas chercher.
                </p>

                <h2>Ce que j'en ai appris</h2>
                <p>
                    Les meilleurs projets ne commencent pas par une commande, mais par une question. Si
                    j'avais seulement fait ce qu'on me demandait, la Villa Vredestein aurait eu un joli site
                    et Maxim serait toujours coincé avec son tableur.
                </p>
                <p>
                    Et ce qui marche pour un loueur marche souvent pour d'autres. C'est pourquoi CasaCrew est
                    aujourd'hui une application à part entière, disponible pour d'autres loueurs.
                </p>

                <h2>Vous louez des chambres ?</h2>
                <p>
                    Ce tableur débordant vous dit quelque chose ? Découvrez ce que fait l'application sur{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>, lisez-en
                    plus sur la <Link to="/backendstudentendashboard">page du projet</Link>, ou réservez un
                    échange gratuit. Je vous montre l'application et nous voyons ensemble si elle vous convient.
                </p>
            </>
        ),
    },
    es: {
        title: "De la hoja de cálculo a una app propia: la historia de CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 de septiembre de 2026",
        minutes: 4,
        shareText: "Cómo una hoja de Excel desbordada se convirtió en CasaCrew, una app para caseros.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew no empezó como una idea de app. Empezó con una web para Villa Vredestein, y con
                    una pregunta que hice cuando esa web estaba casi terminada.
                </p>

                <h2>Primero, la web</h2>
                <p>
                    Maxim Staal me pidió una web para Villa Vredestein, una villa histórica en Driebergen
                    donde alquila habitaciones a estudiantes. Unas pocas páginas, pensaba él. Yo seguí
                    preguntando por la casa, su historia y las personas que viven allí. Eso se convirtió en la web.
                </p>
                <p>
                    Pero en esas conversaciones salió otra cosa: el propio alquiler. ¿Quién ha pagado? ¿Qué
                    contrato vence cuándo? ¿A quién le toca limpiar el baño esta semana? Todo estaba en una
                    sola hoja de Excel. Y esa hoja no paraba de crecer.
                </p>

                <h2>El problema real</h2>
                <p>
                    Alquilar habitaciones es mucho más que alquilar habitaciones. Eres contable, planificador,
                    casero y a veces árbitro. El trabajo no es difícil, pero está disperso. Y el trabajo
                    disperso cuesta tiempo, sobre todo si tienes que reconstruirlo cada mes.
                </p>
                <p>
                    Para eso no hace falta un software caro con cien funciones que nunca usarás. Hace falta
                    algo que haga exactamente lo necesario, y nada más.
                </p>

                <h2>Qué hace CasaCrew</h2>
                <ul>
                    <li>Un resumen de todos los pagos, con recordatorios automáticos</li>
                    <li>Contratos y normas de la casa digitales, siempre a mano</li>
                    <li>Un calendario de limpieza por casa, para que nadie tenga que recordar a quién le toca</li>
                    <li>Una cuenta propia para cada inquilino</li>
                    <li>Permisos separados para casero e inquilino: cada uno ve solo lo que le corresponde</li>
                </ul>
                <p>Maxim lo resumió después en su reseña:</p>
                <p className="note">
                    "Después también construyó un panel de alquiler para nuestras habitaciones de
                    estudiantes, con pagos, contratos y calendario de limpieza, y de repente ya no tuve que
                    maldecir ninguna hoja de Excel."
                </p>

                <h2>Cómo lo construí</h2>
                <p>
                    Para quien quiera saberlo: la base es Spring Boot con una base de datos PostgreSQL. El
                    inicio de sesión es seguro gracias a OAuth2, y todo se comunica mediante una API REST. En
                    pocas palabras: un motor sólido bajo el capó, para que la app pueda crecer. De una casa a
                    diez, de cinco inquilinos a cincuenta.
                </p>
                <p>
                    Mantuve el diseño tranquilo a propósito. La app se abre entre una cosa y otra. Quieres
                    ver de un vistazo lo que pasa, no ponerte a buscar.
                </p>

                <h2>Lo que aprendí</h2>
                <p>
                    Los mejores proyectos no empiezan con un encargo, sino con una pregunta. Si solo hubiera
                    hecho lo que me pedían, Villa Vredestein tendría una web bonita y Maxim seguiría con su
                    hoja de Excel.
                </p>
                <p>
                    Y lo que funciona para un casero suele funcionar para otros. Por eso CasaCrew es ahora una
                    app propia, disponible para otros caseros.
                </p>

                <h2>¿Alquilas habitaciones?</h2>
                <p>
                    ¿Te suena esa hoja de Excel desbordada? Mira lo que hace la app en{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>, lee más
                    en la <Link to="/backendstudentendashboard">página del proyecto</Link>, o reserva una
                    llamada gratuita. Te enseño la app y vemos juntos si encaja contigo.
                </p>
            </>
        ),
    },
    it: {
        title: "Dal foglio Excel alla propria app: la storia di CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 settembre 2026",
        minutes: 4,
        shareText: "Come un foglio Excel strapieno è diventato CasaCrew, un'app per chi affitta stanze.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew non è nata come idea per un'app. È iniziata con un sito per Villa Vredestein, e
                    con una domanda che ho fatto quando quel sito era quasi finito.
                </p>

                <h2>Prima il sito</h2>
                <p>
                    Maxim Staal mi ha chiesto un sito per Villa Vredestein, una villa storica a Driebergen
                    dove affitta stanze a studenti. Qualche pagina, pensava. Io ho continuato a fare domande
                    sulla casa, sulla sua storia e sulle persone che ci vivono. Da lì è nato il sito.
                </p>
                <p>
                    Ma durante quelle conversazioni è emerso qualcos'altro: l'affitto stesso. Chi ha pagato?
                    Quale contratto scade quando? A chi tocca pulire il bagno questa settimana? Era tutto in
                    un unico foglio Excel. E quel foglio si riempiva sempre di più.
                </p>

                <h2>Il vero problema</h2>
                <p>
                    Chi affitta stanze fa molto più che affittare stanze. Sei contabile, pianificatore,
                    padrone di casa e a volte arbitro. Il lavoro non è difficile, ma è frammentato. E il
                    lavoro frammentato costa tempo, soprattutto se devi rimetterlo insieme ogni mese.
                </p>
                <p>
                    Non serve un software costoso con cento funzioni che non userai mai. Serve qualcosa che
                    faccia esattamente ciò che è necessario, e niente di più.
                </p>

                <h2>Cosa fa CasaCrew</h2>
                <ul>
                    <li>Una panoramica di tutti i pagamenti, con promemoria automatici</li>
                    <li>Contratti e regole della casa digitali, sempre a portata di mano</li>
                    <li>Un calendario delle pulizie per casa, così nessuno deve ricordare a chi tocca</li>
                    <li>Un account personale per ogni inquilino</li>
                    <li>Accessi separati per proprietario e inquilino: ognuno vede solo ciò che lo riguarda</li>
                </ul>
                <p>Maxim l'ha riassunto più tardi nella sua recensione:</p>
                <p className="note">
                    "Poi ha costruito anche una dashboard per l'affitto delle nostre stanze per studenti,
                    con pagamenti, contratti e calendario delle pulizie, e all'improvviso non ho più dovuto
                    maledire nessun foglio Excel."
                </p>

                <h2>Come l'ho costruita</h2>
                <p>
                    Per chi vuole saperlo: la base è Spring Boot con un database PostgreSQL. L'accesso è
                    protetto con OAuth2, e tutto comunica tramite una API REST. In parole semplici: un motore
                    solido sotto il cofano, così che l'app possa crescere. Da una casa a dieci, da cinque
                    inquilini a cinquanta.
                </p>
                <p>
                    Ho mantenuto volutamente un design tranquillo. L'app si apre tra una cosa e l'altra.
                    Vuoi vedere a colpo d'occhio cosa succede, non metterti a cercare.
                </p>

                <h2>Cosa ho imparato</h2>
                <p>
                    I progetti migliori non iniziano con un incarico, ma con una domanda. Se avessi fatto
                    solo ciò che mi era stato chiesto, Villa Vredestein avrebbe un bel sito e Maxim sarebbe
                    ancora alle prese con il suo foglio Excel.
                </p>
                <p>
                    E ciò che funziona per un proprietario spesso funziona anche per altri. Per questo
                    CasaCrew ora è un'app a sé, disponibile per altri proprietari.
                </p>

                <h2>Affitti stanze?</h2>
                <p>
                    Ti ricorda qualcosa quel foglio Excel strapieno? Scopri cosa fa l'app su{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>, leggi di
                    più nella <Link to="/backendstudentendashboard">pagina del progetto</Link>, oppure
                    prenota un colloquio gratuito. Ti mostro l'app e vediamo insieme se fa per te.
                </p>
            </>
        ),
    },
    uk: {
        title: "Від таблиці Excel до власного застосунку: історія CasaCrew",
        date: "2026-09-28",
        dateLabel: "28 вересня 2026",
        minutes: 4,
        shareText: "Як переповнена таблиця Excel перетворилася на CasaCrew, застосунок для власників кімнат.",
        Body: () => (
            <>
                <p className="lead">
                    CasaCrew не починався як ідея застосунку. Усе почалося із сайту для Villa Vredestein і
                    з одного запитання, яке я поставила, коли сайт був майже готовий.
                </p>

                <h2>Спочатку сайт</h2>
                <p>
                    Максим Стал попросив мене зробити сайт для Villa Vredestein, історичної вілли в
                    Дрібергені, де він здає кімнати студентам. Кілька сторінок, думав він. Я розпитувала
                    про будинок, його історію та людей, які там живуть. Так з'явився сайт.
                </p>
                <p>
                    Але під час цих розмов зринуло ще дещо: сама оренда. Хто заплатив? Коли закінчується
                    який договір? Чия черга прибирати ванну цього тижня? Усе це було в одній таблиці
                    Excel. І вона ставала дедалі більшою.
                </p>

                <h2>Справжня проблема</h2>
                <p>
                    Здавати кімнати означає набагато більше, ніж просто здавати кімнати. Ти бухгалтер,
                    планувальник, господар і часом суддя. Робота нескладна, але розпорошена. А розпорошена
                    робота забирає час, особливо коли щомісяця доводиться збирати все докупи наново.
                </p>
                <p>
                    Для цього не потрібна дорога програма зі ста функціями, якими ви ніколи не
                    скористаєтеся. Потрібне те, що робить саме необхідне, і нічого зайвого.
                </p>

                <h2>Що вміє CasaCrew</h2>
                <ul>
                    <li>Огляд усіх платежів з автоматичними нагадуваннями</li>
                    <li>Цифрові договори й правила будинку, завжди під рукою</li>
                    <li>Графік прибирання для кожного будинку, щоб нікому не доводилося пам'ятати, чия черга</li>
                    <li>Окремий обліковий запис для кожного орендаря</li>
                    <li>Різні права для власника й орендаря: кожен бачить лише те, що призначене йому</li>
                </ul>
                <p>Згодом Максим коротко підсумував це у своєму відгуку:</p>
                <p className="note">
                    «Потім вона ще й створила панель оренди для наших студентських кімнат, з платежами,
                    договорами й графіком прибирання, і раптом мені більше не треба було проклинати таблицю Excel.»
                </p>

                <h2>Як я це створила</h2>
                <p>
                    Для тих, кому цікаво: основа це Spring Boot з базою даних PostgreSQL. Вхід захищено
                    через OAuth2, а все спілкується через REST API. Простими словами: надійний двигун під
                    капотом, щоб застосунок міг рости. Від одного будинку до десяти, від п'яти орендарів до п'ятдесяти.
                </p>
                <p>
                    Дизайн я свідомо зробила спокійним. Застосунок відкривають між іншими справами. Хочеться
                    одразу побачити, що відбувається, а не шукати.
                </p>

                <h2>Чого я навчилася</h2>
                <p>
                    Найкращі проєкти починаються не із завдання, а із запитання. Якби я робила лише те, про
                    що мене просили, у Villa Vredestein був би гарний сайт, а Максим досі мучився б зі своєю таблицею.
                </p>
                <p>
                    А те, що працює для одного власника, часто працює й для інших. Тому CasaCrew тепер
                    окремий застосунок, доступний для інших орендодавців.
                </p>

                <h2>Здаєте кімнати?</h2>
                <p>
                    Знайома переповнена таблиця Excel? Подивіться, що вміє застосунок, на{" "}
                    <a href="https://casacrew.nl" target="_blank" rel="noreferrer">casacrew.nl</a>, читайте
                    більше на <Link to="/backendstudentendashboard">сторінці проєкту</Link> або заплануйте
                    безкоштовну розмову. Я покажу вам застосунок, і ми разом подивимося, чи він вам підходить.
                </p>
            </>
        ),
    },
};

export default function VerhaalAchterCasaCrew() {
    return (
        <BlogArticle
            id="verhaal-achter-casacrew"
            cover="/Portfolio/casacrew-mockup"
            coverAlt="CasaCrew verhuurapp op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
