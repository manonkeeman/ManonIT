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
                    gaat veilig via JWT, en alles praat met elkaar via een REST API. In gewone taal: een
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
                    Herken je die volle Excel-sheet? Bekijk wat CasaCrew kan op de{" "}
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
                    secured with JWT, and everything talks through a REST API. In plain language: a solid
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
                    Recognise that overflowing spreadsheet? See what CasaCrew can do on the{" "}
                    <Link to="/backendstudentendashboard">project page</Link>, or book a free intro call.
                    I'll show you the app and we'll see together whether it fits your situation.
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
