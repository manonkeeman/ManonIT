import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const SITE = "https://villavredestein.com";

const content = {
    nl: {
        title: "Villa Vredestein: een huis met een verhaal, nu ook online",
        date: "2026-09-28",
        dateLabel: "28 september 2026",
        minutes: 3,
        shareText: "Hoe ik het verhaal van een villa uit 1906 vertaalde naar een website zonder opsmuk.",
        Body: () => (
            <>
                <p className="lead">
                    Sommige gebouwen vertellen hun verhaal vanzelf. Villa Vredestein is er zo een. Mijn taak
                    was om dat verhaal online net zo goed te laten klinken als aan de borreltafel.
                </p>

                <h2>Een villa uit 1906</h2>
                <p>
                    Villa Vredestein staat sinds 1906 in het hart van Driebergen-Rijsenburg, op de Utrechtse
                    Heuvelrug. Hoge plafonds, oude details en een ziel die je voelt zodra je binnenstapt. Het
                    is een plek om te wonen, te verblijven en elkaar te ontmoeten, met een deur die letterlijk
                    en figuurlijk openstaat.
                </p>

                <h2>Ons eigen project</h2>
                <p>
                    Villa Vredestein is ons eigen project. We verhuren kamers aan studenten en verbouwen het huis zo dat er op den duur ook een luxe Airbnb kan komen. Daarnaast willen we het huis aantrekkelijk maken voor fotoshoots en filmopnames.
                </p>
                <p>
                    Het is een klushuis dat van binnen volledig is verbouwd en gemoderniseerd, van isolatie tot vloerverwarming. De oude details komen terug of blijven behouden. De website vertelt het verhaal van die hele rebuild.
                </p>
                <p>
                    We wilden een site die voelt zoals het huis zelf: warm, eerlijk en zonder poespas. Geen visitekaartje dat indruk moet maken, maar een plek waar je graag even blijft. Een paar pagina's leek genoeg, maar ik vroeg door: over de geschiedenis van het huis, de mensen die er wonen en wat bezoekers moeten voelen als ze de site openen. In een review stond:
                </p>
                <p className="note">
                    "Manon vroeg door tot ze het verhaal van Villa Vredestein beter kon vertellen dan ikzelf aan
                    de borreltafel. Het resultaat: een site zonder opsmuk, precies zoals wij zijn, en toch
                    verrassend genoeg om bezoekers langer te laten lezen dan gepland."
                </p>

                <h2>Wat er op de site staat</h2>
                <ul>
                    <li>Het verhaal van de verbouwing, van isolatie tot vloerverwarming</li>
                    <li>Een tijdlijn met de geschiedenis van het huis sinds 1906</li>
                    <li>Een galerij met foto's van binnen en buiten</li>
                    <li>De omgeving van de Utrechtse Heuvelrug</li>
                    <li>Informatie over verblijven en verhuur</li>
                    <li>Een pagina met wat de pers over de villa schreef</li>
                </ul>
                <p>
                    Het ontwerp is donker met warme gouden accenten: rustig, stijlvol en passend bij een huis
                    met zoveel geschiedenis. In zes talen, snel en net zo prettig op de telefoon als op
                    een groot scherm.
                </p>

                <h2>En toen kwam de Excel-sheet</h2>
                <p>
                    Tijdens dit project kwam er nog iets op tafel: het verhuren van de kamers liep via één
                    volle Excel-sheet. Daaruit groeide CasaCrew, een verhuurapp voor hospita's. Dat verhaal
                    lees je in{" "}
                    <Link to="/journal/verhaal-achter-casacrew">het verhaal achter CasaCrew</Link>.
                </p>

                <h2>Zelf kijken?</h2>
                <p>
                    Bekijk de website op{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> of lees meer op de{" "}
                    <Link to="/frontendvredestein">projectpagina</Link>. Heeft jouw plek ook een verhaal dat
                    verteld moet worden? Plan een gratis gesprek.
                </p>
            </>
        ),
    },
    en: {
        title: "Villa Vredestein: a house with a story, now online too",
        date: "2026-09-28",
        dateLabel: "28 September 2026",
        minutes: 3,
        shareText: "How I translated the story of a villa from 1906 into a website without frills.",
        Body: () => (
            <>
                <p className="lead">
                    Some buildings tell their own story. Villa Vredestein is one of them. My job was to make
                    that story sound just as good online as it does over drinks.
                </p>

                <h2>A villa from 1906</h2>
                <p>
                    Villa Vredestein has stood in the heart of Driebergen-Rijsenburg, on the Utrechtse
                    Heuvelrug, since 1906. High ceilings, old details and a soul you feel as soon as you step
                    inside. It's a place to live, to stay and to meet, with a door that is open, literally and
                    figuratively.
                </p>

                <h2>Our own project</h2>
                <p>
                    Villa Vredestein is our own project. We rent rooms to students and are renovating the house so that in time it can also become a luxury Airbnb. We also want to make the house attractive for photo shoots and film shoots.
                </p>
                <p>
                    It is a fixer-upper that has been completely renovated and modernised inside, from insulation to underfloor heating. The old details come back or are preserved. The website tells the story of the whole rebuild.
                </p>
                <p>
                    We wanted a site that feels like the house itself: warm, honest and without fuss. Not a business card meant to impress, but a place where you like to stay a while. A few pages seemed enough, but I kept asking: about the history of the house, the people who live there and what visitors should feel when they open the site. A review said:
                </p>
                <p className="note">
                    "Manon kept asking questions until she could tell the story of Villa Vredestein better than
                    I could myself over drinks. The result: a site without frills, exactly as we are, yet
                    surprising enough to keep visitors reading longer than planned."
                </p>

                <h2>What's on the site</h2>
                <ul>
                    <li>The story of the renovation, from insulation to underfloor heating</li>
                    <li>A timeline with the history of the house since 1906</li>
                    <li>A gallery with photos inside and out</li>
                    <li>The surroundings of the Utrechtse Heuvelrug</li>
                    <li>Information about stays and rentals</li>
                    <li>A page with what the press wrote about the villa</li>
                </ul>
                <p>
                    The design is dark with warm golden accents: calm, stylish and fitting for a house with so
                    much history. In six languages, fast and just as pleasant on a phone as on a big screen.
                </p>

                <h2>And then came the spreadsheet</h2>
                <p>
                    During this project something else came up: renting out the rooms ran on one overflowing
                    spreadsheet. That grew into CasaCrew, a rental app for landlords. Read that story in{" "}
                    <Link to="/journal/verhaal-achter-casacrew">the story behind CasaCrew</Link>.
                </p>

                <h2>Take a look?</h2>
                <p>
                    Visit the website at{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> or read more on the{" "}
                    <Link to="/frontendvredestein">project page</Link>. Does your place have a story that needs
                    telling too? Book a free intro call.
                </p>
            </>
        ),
    },
    de: {
        title: "Villa Vredestein: ein Haus mit Geschichte, jetzt auch online",
        date: "2026-09-28",
        dateLabel: "28. September 2026",
        minutes: 3,
        shareText: "Wie ich die Geschichte einer Villa von 1906 in eine Website ohne Schnickschnack übersetzt habe.",
        Body: () => (
            <>
                <p className="lead">
                    Manche Gebäude erzählen ihre Geschichte von selbst. Die Villa Vredestein ist so eines.
                    Meine Aufgabe war, diese Geschichte online genauso gut klingen zu lassen wie am Stammtisch.
                </p>

                <h2>Eine Villa von 1906</h2>
                <p>
                    Die Villa Vredestein steht seit 1906 im Herzen von Driebergen-Rijsenburg auf dem Utrechtse
                    Heuvelrug. Hohe Decken, alte Details und eine Seele, die man spürt, sobald man eintritt. Ein
                    Ort zum Wohnen, Verweilen und Begegnen, mit einer Tür, die im wörtlichen und übertragenen
                    Sinn offen steht.
                </p>

                <h2>Unser eigenes Projekt</h2>
                <p>
                    Die Villa Vredestein ist unser eigenes Projekt. Wir vermieten Zimmer an Studierende und bauen das Haus so um, dass mit der Zeit auch ein luxuriöses Airbnb entstehen kann. Außerdem möchten wir das Haus für Fotoshootings und Filmaufnahmen attraktiv machen.
                </p>
                <p>
                    Es ist ein Renovierungsobjekt, das innen komplett umgebaut und modernisiert wurde, von der Dämmung bis zur Fußbodenheizung. Die alten Details kehren zurück oder bleiben erhalten. Die Website erzählt die Geschichte des gesamten Umbaus.
                </p>
                <p>
                    Wir wollten eine Seite, die sich anfühlt wie das Haus selbst: warm, ehrlich und ohne Schnickschnack. Keine Visitenkarte, die beeindrucken soll, sondern ein Ort, an dem man gern verweilt. Ein paar Seiten schienen zu reichen, aber ich fragte nach: nach der Geschichte des Hauses, den Menschen, die dort wohnen, und was Besucher fühlen sollen, wenn sie die Seite öffnen. In einer Bewertung stand:
                </p>
                <p className="note">
                    "Manon hat so lange nachgefragt, bis sie die Geschichte der Villa Vredestein besser erzählen
                    konnte als ich selbst am Stammtisch. Das Ergebnis: eine Website ohne Schnickschnack, genau
                    wie wir sind, und doch überraschend genug, dass Besucher länger lesen als geplant."
                </p>

                <h2>Was auf der Website steht</h2>
                <ul>
                    <li>Die Geschichte des Umbaus, von der Dämmung bis zur Fußbodenheizung</li>
                    <li>Eine Zeitleiste mit der Geschichte des Hauses seit 1906</li>
                    <li>Eine Galerie mit Fotos von innen und außen</li>
                    <li>Die Umgebung des Utrechtse Heuvelrug</li>
                    <li>Informationen zu Aufenthalt und Vermietung</li>
                    <li>Eine Seite mit Presseberichten über die Villa</li>
                </ul>
                <p>
                    Das Design ist dunkel mit warmen goldenen Akzenten: ruhig, stilvoll und passend zu einem
                    Haus mit so viel Geschichte. In sechs Sprachen, schnell und auf dem Handy genauso angenehm
                    wie auf einem großen Bildschirm.
                </p>

                <h2>Und dann kam die Excel-Tabelle</h2>
                <p>
                    Während dieses Projekts kam noch etwas auf den Tisch: Die Vermietung der Zimmer lief über
                    eine volle Excel-Tabelle. Daraus entstand CasaCrew, eine Vermietungs-App für Zimmervermieter.
                    Diese Geschichte liest du in{" "}
                    <Link to="/journal/verhaal-achter-casacrew">der Geschichte hinter CasaCrew</Link>.
                </p>

                <h2>Selbst ansehen?</h2>
                <p>
                    Besuche die Website auf{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> oder lies mehr auf der{" "}
                    <Link to="/frontendvredestein">Projektseite</Link>. Hat dein Ort auch eine Geschichte, die
                    erzählt werden will? Buche ein kostenloses Gespräch.
                </p>
            </>
        ),
    },
    fr: {
        title: "Villa Vredestein : une maison avec une histoire, désormais en ligne",
        date: "2026-09-28",
        dateLabel: "28 septembre 2026",
        minutes: 3,
        shareText: "Comment j'ai traduit l'histoire d'une villa de 1906 en un site sans fioritures.",
        Body: () => (
            <>
                <p className="lead">
                    Certains bâtiments racontent leur histoire d'eux-mêmes. La Villa Vredestein en fait partie.
                    Ma mission : que cette histoire sonne aussi bien en ligne qu'autour d'un verre.
                </p>

                <h2>Une villa de 1906</h2>
                <p>
                    La Villa Vredestein se dresse depuis 1906 au cœur de Driebergen-Rijsenburg, sur l'Utrechtse
                    Heuvelrug. De hauts plafonds, des détails d'époque et une âme qu'on ressent dès qu'on entre.
                    Un lieu pour vivre, séjourner et se rencontrer, avec une porte ouverte au sens propre comme au figuré.
                </p>

                <h2>Notre propre projet</h2>
                <p>
                    La Villa Vredestein est notre propre projet. Nous louons des chambres à des étudiants et rénovons la maison pour qu'elle puisse à terme devenir aussi un Airbnb de luxe. Nous voulons aussi la rendre attrayante pour des séances photo et des tournages.
                </p>
                <p>
                    C'est une maison à rénover, entièrement transformée et modernisée à l'intérieur, de l'isolation au chauffage au sol. Les détails anciens reviennent ou sont conservés. Le site raconte l'histoire de toute cette rénovation.
                </p>
                <p>
                    Nous voulions un site qui ressemble à la maison : chaleureux, honnête et sans chichis. Pas une carte de visite qui cherche à impressionner, mais un endroit où l'on aime s'attarder. Quelques pages semblaient suffire, mais j'ai posé des questions : sur l'histoire de la maison, les gens qui y vivent et ce que les visiteurs doivent ressentir en ouvrant le site. Un avis disait :
                </p>
                <p className="note">
                    « Manon a posé des questions jusqu'à ce qu'elle puisse raconter l'histoire de la Villa
                    Vredestein mieux que moi autour d'un verre. Le résultat : un site sans fioritures, à notre
                    image, et pourtant assez surprenant pour que les visiteurs lisent plus longtemps que prévu. »
                </p>

                <h2>Ce que contient le site</h2>
                <ul>
                    <li>L'histoire de la rénovation, de l'isolation au chauffage au sol</li>
                    <li>Une frise chronologique de l'histoire de la maison depuis 1906</li>
                    <li>Une galerie de photos, intérieur et extérieur</li>
                    <li>Les environs de l'Utrechtse Heuvelrug</li>
                    <li>Des informations sur les séjours et la location</li>
                    <li>Une page sur ce que la presse a écrit sur la villa</li>
                </ul>
                <p>
                    Le design est sombre avec de chaleureux accents dorés : calme, élégant et à la hauteur d'une
                    maison chargée d'histoire. En six langues, rapide et aussi agréable sur téléphone que sur grand écran.
                </p>

                <h2>Puis est arrivé le tableur</h2>
                <p>
                    Pendant ce projet, autre chose est apparu : la location des chambres reposait sur un seul
                    tableur Excel débordant. C'est de là qu'est né CasaCrew, une application pour loueurs de
                    chambres. Lisez cette histoire dans{" "}
                    <Link to="/journal/verhaal-achter-casacrew">l'histoire de CasaCrew</Link>.
                </p>

                <h2>Envie de voir ?</h2>
                <p>
                    Découvrez le site sur{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> ou lisez-en plus sur la{" "}
                    <Link to="/frontendvredestein">page du projet</Link>. Votre lieu a lui aussi une histoire à
                    raconter ? Réservez un échange gratuit.
                </p>
            </>
        ),
    },
    es: {
        title: "Villa Vredestein: una casa con historia, ahora también online",
        date: "2026-09-28",
        dateLabel: "28 de septiembre de 2026",
        minutes: 3,
        shareText: "Cómo traduje la historia de una villa de 1906 a una web sin adornos.",
        Body: () => (
            <>
                <p className="lead">
                    Algunos edificios cuentan su historia solos. Villa Vredestein es uno de ellos. Mi tarea era
                    que esa historia sonara igual de bien online que en una charla con una copa.
                </p>

                <h2>Una villa de 1906</h2>
                <p>
                    Villa Vredestein está desde 1906 en el corazón de Driebergen-Rijsenburg, en la Utrechtse
                    Heuvelrug. Techos altos, detalles antiguos y un alma que se siente nada más entrar. Un lugar
                    para vivir, alojarse y encontrarse, con una puerta abierta en sentido literal y figurado.
                </p>

                <h2>Nuestro propio proyecto</h2>
                <p>
                    Villa Vredestein es nuestro propio proyecto. Alquilamos habitaciones a estudiantes y reformamos la casa para que con el tiempo pueda ser también un Airbnb de lujo. Además queremos que la casa resulte atractiva para sesiones de fotos y rodajes.
                </p>
                <p>
                    Es una casa de reforma, completamente renovada y modernizada por dentro, del aislamiento a la calefacción por suelo radiante. Los detalles antiguos vuelven o se conservan. La web cuenta la historia de toda la reforma.
                </p>
                <p>
                    Queríamos una web que se sintiera como la propia casa: cálida, honesta y sin florituras. No una tarjeta de visita que quiere impresionar, sino un lugar donde apetece quedarse un rato. Unas pocas páginas parecían suficientes, pero yo seguí preguntando: por la historia de la casa, las personas que viven allí y lo que deben sentir los visitantes al abrir la web. En una reseña se leía:
                </p>
                <p className="note">
                    "Manon siguió preguntando hasta que pudo contar la historia de Villa Vredestein mejor que yo
                    mismo en una charla. El resultado: una web sin adornos, tal como somos, y aun así lo bastante
                    sorprendente para que los visitantes lean más de lo previsto."
                </p>

                <h2>Qué hay en la web</h2>
                <ul>
                    <li>La historia de la reforma, del aislamiento a la calefacción por suelo radiante</li>
                    <li>Una línea de tiempo con la historia de la casa desde 1906</li>
                    <li>Una galería con fotos de dentro y de fuera</li>
                    <li>El entorno de la Utrechtse Heuvelrug</li>
                    <li>Información sobre estancias y alquiler</li>
                    <li>Una página con lo que la prensa escribió sobre la villa</li>
                </ul>
                <p>
                    El diseño es oscuro con cálidos acentos dorados: tranquilo, elegante y a la altura de una
                    casa con tanta historia. En seis idiomas, rápida e igual de agradable en el móvil que en una
                    pantalla grande.
                </p>

                <h2>Y entonces llegó la hoja de Excel</h2>
                <p>
                    Durante este proyecto surgió algo más: el alquiler de las habitaciones dependía de una sola
                    hoja de Excel desbordada. De ahí nació CasaCrew, una app para caseros. Lee esa historia en{" "}
                    <Link to="/journal/verhaal-achter-casacrew">la historia de CasaCrew</Link>.
                </p>

                <h2>¿Quieres verla?</h2>
                <p>
                    Visita la web en{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> o lee más en la{" "}
                    <Link to="/frontendvredestein">página del proyecto</Link>. ¿Tu lugar también tiene una
                    historia que contar? Reserva una llamada gratuita.
                </p>
            </>
        ),
    },
    it: {
        title: "Villa Vredestein: una casa con una storia, ora anche online",
        date: "2026-09-28",
        dateLabel: "28 settembre 2026",
        minutes: 3,
        shareText: "Come ho tradotto la storia di una villa del 1906 in un sito senza fronzoli.",
        Body: () => (
            <>
                <p className="lead">
                    Alcuni edifici raccontano la loro storia da soli. Villa Vredestein è uno di questi. Il mio
                    compito era farla suonare online bene quanto davanti a un aperitivo.
                </p>

                <h2>Una villa del 1906</h2>
                <p>
                    Villa Vredestein si trova dal 1906 nel cuore di Driebergen-Rijsenburg, sull'Utrechtse
                    Heuvelrug. Soffitti alti, dettagli d'epoca e un'anima che senti appena entri. Un luogo per
                    vivere, soggiornare e incontrarsi, con una porta aperta in senso letterale e figurato.
                </p>

                <h2>Il nostro progetto</h2>
                <p>
                    Villa Vredestein è il nostro progetto. Affittiamo stanze a studenti e stiamo ristrutturando la casa perché col tempo possa diventare anche un Airbnb di lusso. Vogliamo inoltre renderla attraente per servizi fotografici e riprese cinematografiche.
                </p>
                <p>
                    È una casa da ristrutturare, completamente rinnovata e modernizzata all'interno, dall'isolamento al riscaldamento a pavimento. I dettagli originali tornano o vengono conservati. Il sito racconta la storia dell'intera ristrutturazione.
                </p>
                <p>
                    Volevamo un sito che si sentisse come la casa stessa: caldo, onesto e senza fronzoli. Non un biglietto da visita che vuole fare colpo, ma un posto dove ci si ferma volentieri. Poche pagine sembravano bastare, ma io ho continuato a chiedere: della storia della casa, delle persone che ci vivono e di cosa devono provare i visitatori aprendo il sito. In una recensione si leggeva:
                </p>
                <p className="note">
                    "Manon ha continuato a fare domande finché non ha saputo raccontare la storia di Villa
                    Vredestein meglio di me davanti a un aperitivo. Il risultato: un sito senza fronzoli,
                    proprio come siamo, eppure abbastanza sorprendente da far leggere i visitatori più del previsto."
                </p>

                <h2>Cosa c'è sul sito</h2>
                <ul>
                    <li>La storia della ristrutturazione, dall'isolamento al riscaldamento a pavimento</li>
                    <li>Una linea del tempo con la storia della casa dal 1906</li>
                    <li>Una galleria di foto dell'interno e dell'esterno</li>
                    <li>I dintorni dell'Utrechtse Heuvelrug</li>
                    <li>Informazioni su soggiorni e affitti</li>
                    <li>Una pagina con ciò che la stampa ha scritto sulla villa</li>
                </ul>
                <p>
                    Il design è scuro con caldi accenti dorati: tranquillo, elegante e all'altezza di una casa
                    con tanta storia. In sei lingue, veloce e piacevole sul telefono quanto su un grande schermo.
                </p>

                <h2>E poi è arrivato il foglio Excel</h2>
                <p>
                    Durante questo progetto è emerso anche altro: l'affitto delle stanze passava per un unico
                    foglio Excel strapieno. Da lì è nata CasaCrew, un'app per chi affitta stanze. Leggi quella
                    storia ne{" "}
                    <Link to="/journal/verhaal-achter-casacrew">la storia di CasaCrew</Link>.
                </p>

                <h2>Vuoi vederlo?</h2>
                <p>
                    Visita il sito su{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> o leggi di più nella{" "}
                    <Link to="/frontendvredestein">pagina del progetto</Link>. Anche il tuo luogo ha una storia
                    da raccontare? Prenota un colloquio gratuito.
                </p>
            </>
        ),
    },
    uk: {
        title: "Villa Vredestein: дім з історією, тепер і онлайн",
        date: "2026-09-28",
        dateLabel: "28 вересня 2026",
        minutes: 3,
        shareText: "Як я переклала історію вілли 1906 року на мову сайту без зайвих прикрас.",
        Body: () => (
            <>
                <p className="lead">
                    Деякі будівлі розповідають свою історію самі. Villa Vredestein саме така. Моє завдання було
                    зробити так, щоб ця історія онлайн звучала так само добре, як за келихом у дружньому колі.
                </p>

                <h2>Вілла 1906 року</h2>
                <p>
                    Villa Vredestein стоїть із 1906 року в самому серці Дрібергена-Рейзенбюрга, на височині
                    Утрехтсе Хьовелрюг. Високі стелі, старовинні деталі й душа, яку відчуваєш, щойно заходиш.
                    Це місце, щоб жити, гостювати й зустрічатися, з дверима, відчиненими в прямому й переносному сенсі.
                </p>

                <h2>Наш власний проєкт</h2>
                <p>
                    Villa Vredestein це наш власний проєкт. Ми здаємо кімнати студентам і перебудовуємо будинок так, щоб згодом тут могло з'явитися й розкішне Airbnb. Крім того, ми хочемо зробити будинок привабливим для фотосесій і зйомок фільмів.
                </p>
                <p>
                    Це будинок під ремонт, який усередині повністю перебудовано й модернізовано: від утеплення до теплої підлоги. Старі деталі повертаються або зберігаються. Сайт розповідає історію всієї цієї реконструкції.
                </p>
                <p>
                    Ми хотіли сайт, що відчувається так само, як сам будинок: теплий, чесний і без пафосу. Не візитівка, що має вразити, а місце, де приємно затриматися. Кількох сторінок здавалося досить, але я розпитувала далі: про історію будинку, людей, які там живуть, і що мають відчути відвідувачі, відкриваючи сайт. У відгуку було сказано:
                </p>
                <p className="note">
                    «Манон розпитувала доти, доки не змогла розповісти історію Villa Vredestein краще, ніж я
                    сам у дружньому колі. Результат: сайт без зайвих прикрас, саме такий, як ми, і водночас
                    достатньо несподіваний, щоб відвідувачі читали довше, ніж планували.»
                </p>

                <h2>Що є на сайті</h2>
                <ul>
                    <li>Історія реконструкції: від утеплення до теплої підлоги</li>
                    <li>Хронологія історії будинку з 1906 року</li>
                    <li>Галерея фото зсередини й ззовні</li>
                    <li>Околиці Утрехтсе Хьовелрюг</li>
                    <li>Інформація про проживання й оренду</li>
                    <li>Сторінка з тим, що писала про віллу преса</li>
                </ul>
                <p>
                    Дизайн темний із теплими золотими акцентами: спокійний, стильний і гідний будинку з такою
                    історією. Шістьма мовами, швидкий і однаково зручний на телефоні й великому екрані.
                </p>

                <h2>А потім з'явилася таблиця Excel</h2>
                <p>
                    Під час цього проєкту зринуло ще дещо: оренда кімнат трималася на одній переповненій
                    таблиці Excel. З цього виріс CasaCrew, застосунок для власників кімнат. Цю історію читайте в{" "}
                    <Link to="/journal/verhaal-achter-casacrew">історії CasaCrew</Link>.
                </p>

                <h2>Хочете подивитися?</h2>
                <p>
                    Відвідайте сайт{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">villavredestein.com</a> або читайте більше на{" "}
                    <Link to="/frontendvredestein">сторінці проєкту</Link>. Ваше місце теж має історію, яку
                    варто розповісти? Заплануйте безкоштовну розмову.
                </p>
            </>
        ),
    },
};

export default function WebsiteVillaVredestein() {
    return (
        <BlogArticle
            id="website-villa-vredestein"
            cover="/Portfolio/villa-vredestein-mockup"
            coverAlt="Website Villa Vredestein op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
