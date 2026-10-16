import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "WordPress of maatwerk? Zo zit het bij ManonIT",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "WordPress of maatwerk? Een abonnement is altijd maatwerk, een pakket kan ook WordPress zijn.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT levert maatwerk. Toch hoeft een website niet altijd vanaf nul gebouwd te worden:
                    bij een pakket kan WordPress een slimme keuze zijn. Dit is precies hoe het zit.
                </p>

                <h2>Abonnementen: altijd maatwerk</h2>
                <p>
                    Start, Groei en Merk zijn volledig op maat. Een eigen ontwerp in de huisstijl van de klant,
                    eigen teksten en een eigen opbouw, zonder standaardsjabloon en zonder WordPress-thema.
                </p>

                <h2>Pakketten: maatwerk of WordPress</h2>
                <p>
                    Bij een pakket (eenmalig, vanaf €1.200) kan WordPress worden ingezet. Daar zijn twee redenen
                    voor: een bestaand sjabloon drukt de kosten in de pakketprijs, of de klant wil teksten,
                    foto's en blog zelf beheren. Dat laatste heet een CMS.
                </p>
                <ul>
                    <li><strong>Abonnement (Start, Groei, Merk):</strong> altijd maatwerk.</li>
                    <li><strong>Basis website:</strong> maatwerk, of een WordPress-sjabloon om de kosten laag te houden.</li>
                    <li><strong>Website met CMS:</strong> WordPress, of een eigen CMS op maat.</li>
                    <li><strong>Volledig maatwerk:</strong> altijd eigen code.</li>
                </ul>
                <p>
                    De prijzen en het verschil tussen abonnement en pakket staan op de{" "}
                    <Link to="/tarieven">tarievenpagina</Link>. Alle prijzen zijn exclusief btw.
                </p>

                <h2>Wanneer WordPress past</h2>
                <p>
                    WordPress past als de site vooral informeert en de klant zelf teksten, foto's en blogs wil
                    aanpassen, met een beperkt budget. Zo bouwde ik{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: rustig, snel te lezen en
                    eenvoudig bij te werken.
                </p>

                <h2>Wanneer eigen code past</h2>
                <p>
                    Eigen code past als de site meer moet doen dan informeren: inloggen, betalingen of koppelingen
                    met andere systemen. Een voorbeeld is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, een verhuurapp voor hospita's, gebouwd
                    met Spring Boot en OAuth2. Dat los je niet op met plug-ins.
                </p>

                <h2>Onderhoud bij WordPress</h2>
                <p>
                    WordPress vraagt regelmatig updates; een verouderde plug-in is de meest voorkomende oorzaak van
                    een gehackte site. Daarom is onderhoud bij een WordPress-pakket aan te raden, vanaf €120 per
                    maand. Meer daarover staat in het blog{" "}
                    <Link to="/journal/website-onderhoud">Wat zit er in website-onderhoud</Link>. Hosting en domein
                    betaalt de klant zelf.
                </p>

                <h2>Zo kiezen</h2>
                <p>
                    Drie vragen helpen. Moet het ontwerp volledig op maat zijn? Dan een abonnement of volledig
                    maatwerk. Is een lager budget belangrijk, of moeten teksten zelf aangepast kunnen worden? Dan
                    een pakket met WordPress. Moeten bezoekers kunnen inloggen of betalen? Dan eigen code.
                </p>

                <h2>Vragen?</h2>
                <p>
                    Twijfel over wat past? Plan een kennismaking van 30 minuten, vrijblijvend. Ik adviseer op wat
                    het project nodig heeft, ook als dat minder is dan verwacht.
                </p>
            </>
        ),
    },
    en: {
        title: "WordPress or custom? How it works at ManonIT",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "WordPress or custom? A subscription is always custom, a package can also be WordPress.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT delivers custom work. Still, a website does not always have to be built from scratch:
                    with a package, WordPress can be a smart choice. This is exactly how it works.
                </p>

                <h2>Subscriptions: always custom</h2>
                <p>
                    Start, Growth and Brand are fully custom. Its own design in the client's house style, its own
                    copy and its own structure, with no stock template and no WordPress theme.
                </p>

                <h2>Packages: custom or WordPress</h2>
                <p>
                    With a package (one-off, from €1,200) WordPress can be used. There are two reasons: an existing
                    template lowers the cost within the package price, or the client wants to manage texts, photos
                    and blog personally. That last option is called a CMS.
                </p>
                <ul>
                    <li><strong>Subscription (Start, Growth, Brand):</strong> always custom.</li>
                    <li><strong>Basic website:</strong> custom, or a WordPress template to keep costs low.</li>
                    <li><strong>Website with CMS:</strong> WordPress, or a custom-built CMS.</li>
                    <li><strong>Fully custom:</strong> always custom code.</li>
                </ul>
                <p>
                    Prices and the difference between subscription and package are on the{" "}
                    <Link to="/tarieven">pricing page</Link>. All prices exclude VAT.
                </p>

                <h2>When WordPress fits</h2>
                <p>
                    WordPress fits when the site mainly informs and the client wants to edit texts, photos and
                    blogs, on a limited budget. That is how I built{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: calm, quick to read and easy to
                    update.
                </p>

                <h2>When custom code fits</h2>
                <p>
                    Custom code fits when the site has to do more than inform: logins, payments or links with other
                    systems. An example is <Link to="/backendstudentendashboard">CasaCrew</Link>, a rental app for
                    landladies, built with Spring Boot and OAuth2. Plug-ins do not solve that.
                </p>

                <h2>Maintenance with WordPress</h2>
                <p>
                    WordPress needs regular updates; an outdated plug-in is the most common cause of a hacked site.
                    That is why maintenance is advisable with a WordPress package, from €120 per month. More on
                    this in the blog{" "}
                    <Link to="/journal/website-onderhoud">What does website maintenance include</Link>. The client
                    pays hosting and domain.
                </p>

                <h2>How to choose</h2>
                <p>
                    Three questions help. Does the design have to be fully custom? Then a subscription or fully
                    custom. Is a lower budget important, or must texts be editable by the client? Then a package
                    with WordPress. Do visitors need to log in or pay? Then custom code.
                </p>

                <h2>Questions?</h2>
                <p>
                    Unsure what fits? Book a 30-minute introduction, no obligation. I advise on what the project
                    needs, even when that is less than expected.
                </p>
            </>
        ),
    },
    fr: {
        title: "WordPress ou sur mesure ? Comment cela fonctionne chez ManonIT",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 4,
        shareText: "WordPress ou sur mesure ? Un abonnement est toujours sur mesure, un forfait peut aussi être WordPress.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT livre du sur mesure. Pourtant, un site ne doit pas toujours être construit de zéro :
                    avec un forfait, WordPress peut être un choix judicieux. Voici exactement comment cela
                    fonctionne.
                </p>

                <h2>Abonnements : toujours sur mesure</h2>
                <p>
                    Départ, Croissance et Marque sont entièrement sur mesure. Un design propre dans l'identité du
                    client, des textes propres et une structure propre, sans modèle standard ni thème WordPress.
                </p>

                <h2>Forfaits : sur mesure ou WordPress</h2>
                <p>
                    Avec un forfait (en une fois, dès 1 200 €), WordPress peut être utilisé. Deux raisons : un
                    modèle existant réduit le coût dans le prix du forfait, ou le client veut gérer lui-même
                    textes, photos et blog. Cette dernière option s'appelle un CMS.
                </p>
                <ul>
                    <li><strong>Abonnement (Départ, Croissance, Marque) :</strong> toujours sur mesure.</li>
                    <li><strong>Site de base :</strong> sur mesure, ou un modèle WordPress pour garder les coûts bas.</li>
                    <li><strong>Site avec CMS :</strong> WordPress, ou un CMS réalisé sur mesure.</li>
                    <li><strong>Entièrement sur mesure :</strong> toujours du code propre.</li>
                </ul>
                <p>
                    Les prix et la différence entre abonnement et forfait figurent sur la{" "}
                    <Link to="/tarieven">page des tarifs</Link>. Tous les prix sont hors TVA.
                </p>

                <h2>Quand WordPress convient</h2>
                <p>
                    WordPress convient quand le site informe surtout et que le client veut modifier textes, photos
                    et blogs, avec un budget limité. C'est ainsi que j'ai construit{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link> : calme, rapide à lire et facile
                    à mettre à jour.
                </p>

                <h2>Quand le code sur mesure convient</h2>
                <p>
                    Le code sur mesure convient quand le site doit faire plus qu'informer : connexion, paiements ou
                    liens avec d'autres systèmes. Exemple :{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, une application de location pour
                    logeuses, construite avec Spring Boot et OAuth2. Des plug-ins ne suffisent pas pour cela.
                </p>

                <h2>La maintenance avec WordPress</h2>
                <p>
                    WordPress demande des mises à jour régulières ; un plug-in obsolète est la cause la plus
                    fréquente d'un site piraté. C'est pourquoi la maintenance est conseillée avec un forfait
                    WordPress, dès 120 € par mois. Plus d'informations dans le blog{" "}
                    <Link to="/journal/website-onderhoud">Que comprend la maintenance d'un site</Link>.
                    L'hébergement et le domaine sont à la charge du client.
                </p>

                <h2>Comment choisir</h2>
                <p>
                    Trois questions aident. Le design doit-il être entièrement sur mesure ? Alors un abonnement ou
                    du sur mesure complet. Un budget plus bas est-il important, ou les textes doivent-ils être
                    modifiables par le client ? Alors un forfait avec WordPress. Les visiteurs doivent-ils se
                    connecter ou payer ? Alors du code sur mesure.
                </p>

                <h2>Des questions ?</h2>
                <p>
                    Un doute sur ce qui convient ? Planifiez un entretien de 30 minutes, sans engagement. Je
                    conseille ce dont le projet a besoin, même si c'est moins que prévu.
                </p>
            </>
        ),
    },
    de: {
        title: "WordPress oder Maßarbeit? So funktioniert es bei ManonIT",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 4,
        shareText: "WordPress oder Maßarbeit? Ein Abo ist immer Maßarbeit, ein Paket kann auch WordPress sein.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT liefert Maßarbeit. Trotzdem muss eine Website nicht immer von Grund auf gebaut werden:
                    Bei einem Paket kann WordPress eine kluge Wahl sein. So funktioniert es genau.
                </p>

                <h2>Abonnements: immer Maßarbeit</h2>
                <p>
                    Start, Wachstum und Marke sind vollständig maßgeschneidert. Ein eigenes Design im Erscheinungsbild
                    des Kunden, eigene Texte und ein eigener Aufbau, ohne Standardvorlage und ohne
                    WordPress-Theme.
                </p>

                <h2>Pakete: Maßarbeit oder WordPress</h2>
                <p>
                    Bei einem Paket (einmalig, ab 1.200 €) kann WordPress eingesetzt werden. Dafür gibt es zwei
                    Gründe: Eine bestehende Vorlage senkt die Kosten im Paketpreis, oder der Kunde möchte Texte,
                    Fotos und Blog selbst verwalten. Letzteres heißt CMS.
                </p>
                <ul>
                    <li><strong>Abonnement (Start, Wachstum, Marke):</strong> immer Maßarbeit.</li>
                    <li><strong>Basis-Website:</strong> Maßarbeit oder eine WordPress-Vorlage, um die Kosten niedrig zu halten.</li>
                    <li><strong>Website mit CMS:</strong> WordPress oder ein maßgeschneidertes CMS.</li>
                    <li><strong>Vollständige Maßarbeit:</strong> immer eigener Code.</li>
                </ul>
                <p>
                    Preise und der Unterschied zwischen Abonnement und Paket stehen auf der{" "}
                    <Link to="/tarieven">Preisseite</Link>. Alle Preise verstehen sich ohne MwSt.
                </p>

                <h2>Wann WordPress passt</h2>
                <p>
                    WordPress passt, wenn die Website vor allem informiert und der Kunde Texte, Fotos und Blogs
                    selbst ändern möchte, bei begrenztem Budget. So entstand{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: ruhig, schnell lesbar und
                    leicht zu pflegen.
                </p>

                <h2>Wann eigener Code passt</h2>
                <p>
                    Eigener Code passt, wenn die Website mehr leisten muss als informieren: Login, Zahlungen oder
                    Anbindungen an andere Systeme. Ein Beispiel ist{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, eine Vermietungs-App für
                    Zimmerwirtinnen, gebaut mit Spring Boot und OAuth2. Das lässt sich nicht mit Plug-ins lösen.
                </p>

                <h2>Wartung bei WordPress</h2>
                <p>
                    WordPress braucht regelmäßige Updates; ein veraltetes Plug-in ist die häufigste Ursache für eine
                    gehackte Seite. Deshalb ist Wartung bei einem WordPress-Paket ratsam, ab 120 € pro Monat. Mehr
                    dazu im Blog <Link to="/journal/website-onderhoud">Was Website-Wartung umfasst</Link>. Hosting
                    und Domain zahlt der Kunde selbst.
                </p>

                <h2>So wählen Sie</h2>
                <p>
                    Drei Fragen helfen. Soll das Design vollständig maßgeschneidert sein? Dann ein Abonnement oder
                    vollständige Maßarbeit. Ist ein kleineres Budget wichtig, oder sollen Texte selbst änderbar
                    sein? Dann ein Paket mit WordPress. Sollen Besucher sich anmelden oder bezahlen können? Dann
                    eigener Code.
                </p>

                <h2>Fragen?</h2>
                <p>
                    Unsicher, was passt? Vereinbaren Sie ein unverbindliches Kennenlerngespräch von 30 Minuten.
                    Ich berate nach dem, was das Projekt braucht, auch wenn das weniger ist als erwartet.
                </p>
            </>
        ),
    },
    es: {
        title: "¿WordPress o a medida? Así funciona en ManonIT",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 4,
        shareText: "¿WordPress o a medida? Una suscripción siempre es a medida, un paquete también puede ser WordPress.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT ofrece trabajo a medida. Aun así, un sitio no siempre tiene que construirse desde
                    cero: con un paquete, WordPress puede ser una elección inteligente. Así funciona exactamente.
                </p>

                <h2>Suscripciones: siempre a medida</h2>
                <p>
                    Inicio, Crecimiento y Marca son totalmente a medida. Un diseño propio con la imagen del
                    cliente, textos propios y una estructura propia, sin plantilla estándar y sin tema de
                    WordPress.
                </p>

                <h2>Paquetes: a medida o WordPress</h2>
                <p>
                    Con un paquete (pago único, desde 1.200 €) se puede usar WordPress. Hay dos razones: una
                    plantilla existente reduce el coste dentro del precio del paquete, o el cliente quiere
                    gestionar él mismo textos, fotos y blog. Eso último se llama CMS.
                </p>
                <ul>
                    <li><strong>Suscripción (Inicio, Crecimiento, Marca):</strong> siempre a medida.</li>
                    <li><strong>Web básica:</strong> a medida, o una plantilla de WordPress para mantener el coste bajo.</li>
                    <li><strong>Web con CMS:</strong> WordPress, o un CMS hecho a medida.</li>
                    <li><strong>Totalmente a medida:</strong> siempre código propio.</li>
                </ul>
                <p>
                    Los precios y la diferencia entre suscripción y paquete están en la{" "}
                    <Link to="/tarieven">página de tarifas</Link>. Todos los precios excluyen IVA.
                </p>

                <h2>Cuándo encaja WordPress</h2>
                <p>
                    WordPress encaja cuando el sitio sobre todo informa y el cliente quiere editar textos, fotos y
                    blogs, con un presupuesto limitado. Así construí{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquilo, rápido de leer y
                    fácil de actualizar.
                </p>

                <h2>Cuándo encaja el código propio</h2>
                <p>
                    El código propio encaja cuando el sitio debe hacer más que informar: acceso de usuarios, pagos o
                    conexiones con otros sistemas. Un ejemplo es{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, una app de alquiler para anfitrionas,
                    creada con Spring Boot y OAuth2. Eso no se resuelve con plug-ins.
                </p>

                <h2>Mantenimiento con WordPress</h2>
                <p>
                    WordPress necesita actualizaciones periódicas; un plug-in desactualizado es la causa más común
                    de un sitio hackeado. Por eso se recomienda el mantenimiento con un paquete de WordPress,
                    desde 120 € al mes. Más información en el blog{" "}
                    <Link to="/journal/website-onderhoud">Qué incluye el mantenimiento web</Link>. El alojamiento y
                    el dominio los paga el cliente.
                </p>

                <h2>Cómo elegir</h2>
                <p>
                    Tres preguntas ayudan. ¿Debe el diseño ser totalmente a medida? Entonces, una suscripción o un
                    proyecto totalmente a medida. ¿Importa un presupuesto menor, o deben poder editarse los
                    textos? Entonces, un paquete con WordPress. ¿Deben los visitantes iniciar sesión o pagar?
                    Entonces, código propio.
                </p>

                <h2>¿Preguntas?</h2>
                <p>
                    ¿Dudas sobre qué encaja? Reserva una charla de 30 minutos, sin compromiso. Aconsejo según lo
                    que el proyecto necesita, aunque sea menos de lo esperado.
                </p>
            </>
        ),
    },
    it: {
        title: "WordPress o su misura? Come funziona da ManonIT",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 4,
        shareText: "WordPress o su misura? Un abbonamento è sempre su misura, un pacchetto può essere anche WordPress.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT realizza lavori su misura. Eppure un sito non deve sempre essere costruito da zero:
                    con un pacchetto, WordPress può essere una scelta intelligente. Ecco esattamente come
                    funziona.
                </p>

                <h2>Abbonamenti: sempre su misura</h2>
                <p>
                    Avvio, Crescita e Marchio sono completamente su misura. Un design proprio nell'identità del
                    cliente, testi propri e una struttura propria, senza modello standard e senza tema WordPress.
                </p>

                <h2>Pacchetti: su misura o WordPress</h2>
                <p>
                    Con un pacchetto (una tantum, da 1.200 €) si può usare WordPress. Ci sono due motivi: un modello
                    esistente riduce il costo nel prezzo del pacchetto, oppure il cliente vuole gestire da sé testi,
                    foto e blog. Quest'ultimo si chiama CMS.
                </p>
                <ul>
                    <li><strong>Abbonamento (Avvio, Crescita, Marchio):</strong> sempre su misura.</li>
                    <li><strong>Sito base:</strong> su misura, o un modello WordPress per tenere i costi bassi.</li>
                    <li><strong>Sito con CMS:</strong> WordPress, o un CMS realizzato su misura.</li>
                    <li><strong>Completamente su misura:</strong> sempre codice proprio.</li>
                </ul>
                <p>
                    I prezzi e la differenza tra abbonamento e pacchetto sono nella{" "}
                    <Link to="/tarieven">pagina delle tariffe</Link>. Tutti i prezzi sono IVA esclusa.
                </p>

                <h2>Quando WordPress è adatto</h2>
                <p>
                    WordPress è adatto quando il sito informa soprattutto e il cliente vuole modificare testi, foto
                    e blog, con un budget limitato. Così ho costruito{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquillo, veloce da leggere e
                    facile da aggiornare.
                </p>

                <h2>Quando è adatto il codice proprio</h2>
                <p>
                    Il codice proprio è adatto quando il sito deve fare più che informare: accesso utenti, pagamenti
                    o collegamenti con altri sistemi. Un esempio è{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, un'app per gli affitti dedicata a chi
                    ospita studenti, costruita con Spring Boot e OAuth2. Con i plug-in non si risolve.
                </p>

                <h2>Manutenzione con WordPress</h2>
                <p>
                    WordPress richiede aggiornamenti regolari; un plug-in obsoleto è la causa più comune di un sito
                    violato. Per questo la manutenzione è consigliata con un pacchetto WordPress, da 120 € al mese.
                    Altre informazioni nel blog{" "}
                    <Link to="/journal/website-onderhoud">Cosa comprende la manutenzione di un sito</Link>. Hosting
                    e dominio li paga il cliente.
                </p>

                <h2>Come scegliere</h2>
                <p>
                    Tre domande aiutano. Il design deve essere completamente su misura? Allora un abbonamento o un
                    progetto completamente su misura. Un budget più basso è importante, o i testi devono poter
                    essere modificati dal cliente? Allora un pacchetto con WordPress. I visitatori devono poter
                    accedere o pagare? Allora codice proprio.
                </p>

                <h2>Domande?</h2>
                <p>
                    Dubbi su cosa sia adatto? Prenota un colloquio di 30 minuti, senza impegno. Consiglio ciò di
                    cui il progetto ha bisogno, anche se è meno del previsto.
                </p>
            </>
        ),
    },
    uk: {
        title: "WordPress чи індивідуальне рішення? Як це працює в ManonIT",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 4,
        shareText: "WordPress чи індивідуальне рішення? Підписка завжди індивідуальна, пакет може бути й на WordPress.",
        Body: () => (
            <>
                <p className="lead">
                    ManonIT виконує індивідуальну роботу. Проте сайт не завжди потрібно створювати з нуля: у
                    пакеті WordPress може бути розумним вибором. Ось як саме це працює.
                </p>

                <h2>Підписки: завжди індивідуально</h2>
                <p>
                    Старт, Зростання та Бренд — повністю індивідуальні. Власний дизайн у фірмовому стилі клієнта,
                    власні тексти та власна структура, без стандартного шаблону й без теми WordPress.
                </p>

                <h2>Пакети: індивідуально або WordPress</h2>
                <p>
                    У пакеті (разово, від 1 200 €) можна використати WordPress. Є дві причини: готовий шаблон
                    знижує витрати в ціні пакета, або клієнт хоче сам вести тексти, фото й блог. Останнє
                    називається CMS.
                </p>
                <ul>
                    <li><strong>Підписка (Старт, Зростання, Бренд):</strong> завжди індивідуально.</li>
                    <li><strong>Базовий сайт:</strong> індивідуально або шаблон WordPress, щоб утримати витрати низькими.</li>
                    <li><strong>Сайт із CMS:</strong> WordPress або індивідуально створена CMS.</li>
                    <li><strong>Повністю індивідуально:</strong> завжди власний код.</li>
                </ul>
                <p>
                    Ціни та різниця між підпискою й пакетом — на <Link to="/tarieven">сторінці цін</Link>. Усі
                    ціни без ПДВ.
                </p>

                <h2>Коли підходить WordPress</h2>
                <p>
                    WordPress підходить, коли сайт здебільшого інформує, а клієнт хоче сам змінювати тексти, фото
                    й блоги, за обмеженого бюджету. Так я створила{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: спокійний, зручний для читання й
                    простий в оновленні.
                </p>

                <h2>Коли підходить власний код</h2>
                <p>
                    Власний код підходить, коли сайт має робити більше, ніж інформувати: вхід користувачів, платежі
                    чи зв'язок з іншими системами. Приклад —{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, застосунок для оренди, створений на
                    Spring Boot та OAuth2. Плагінами це не вирішити.
                </p>

                <h2>Підтримка в WordPress</h2>
                <p>
                    WordPress потребує регулярних оновлень; застарілий плагін — найчастіша причина зламаного
                    сайту. Тому для пакета на WordPress підтримку варто підключити, від 120 € на місяць. Докладніше
                    — у блозі <Link to="/journal/website-onderhoud">Що входить у підтримку сайту</Link>. Хостинг і
                    домен оплачує клієнт.
                </p>

                <h2>Як обрати</h2>
                <p>
                    Допоможуть три запитання. Чи має дизайн бути повністю індивідуальним? Тоді підписка або повністю
                    індивідуальний проєкт. Чи важливий менший бюджет, або тексти мають редагуватися самостійно?
                    Тоді пакет на WordPress. Чи мають відвідувачі входити або платити? Тоді власний код.
                </p>

                <h2>Є запитання?</h2>
                <p>
                    Сумніваєтеся, що підходить? Запишіться на безкоштовну розмову на 30 хвилин, без зобов'язань.
                    Я раджу те, що потрібно проєкту, навіть якщо це менше, ніж очікувалося.
                </p>
            </>
        ),
    },
};

export default function WordpressOfMaatwerk() {
    return (
        <BlogArticle
            id="wordpress-of-maatwerk"
            cover="/journal/blog-maatwerk"
            coverAlt="Illustratie: standaardblokken naast een op maat gemaakt ontwerp"
            coverHeight={800}
            content={content}
        />
    );
}
