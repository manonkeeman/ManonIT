import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "WordPress of maatwerk: wat past bij het bedrijf?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "WordPress of een maatwerk website? Zo kies je, vanuit mijn eigen ervaring met beide.",
        Body: () => (
            <>
                <p className="lead">
                    Bijna elke ondernemer die een website wil, stelt me dezelfde vraag: moet het WordPress
                    worden, of iets op maat? Het eerlijke antwoord is dat beide goed kunnen zijn. Het hangt af
                    van wat je site moet doen.
                </p>

                <h2>Wanneer WordPress een goede keuze is</h2>
                <p>
                    Voor de meeste zzp'ers en kleine bedrijven werkt WordPress prima. Je site bestaat uit
                    pagina's, teksten, foto's en misschien een blog, en je wilt dat zelf kunnen aanpassen
                    zonder mij te bellen. Zo bouwde ik bijvoorbeeld de website van{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: rustig, snel te lezen en
                    makkelijk bij te werken.
                </p>
                <ul>
                    <li>Je wilt zelf teksten, foto's en blogs beheren.</li>
                    <li>Je site is vooral informatief: wie ben je, wat doe je, wat kost het, hoe neem ik contact op.</li>
                    <li>Je budget is beperkt en je wilt snel online.</li>
                    <li>Je wilt later makkelijk uitbreiden met een agenda, formulier of kleine webshop.</li>
                </ul>

                <h2>Wanneer maatwerk beter past</h2>
                <p>
                    Maatwerk loont als je website meer moet doen dan informeren. Denk aan inloggen, betalingen,
                    contracten of koppelingen met andere systemen. Een voorbeeld is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, een verhuurapp voor hospita's die ik
                    bouwde met Spring Boot en OAuth2. Dat los je niet op met plug-ins.
                </p>
                <ul>
                    <li>Gebruikers moeten veilig kunnen inloggen en eigen gegevens beheren.</li>
                    <li>Je hebt een eigen werkwijze die in geen enkel standaardpakket past.</li>
                    <li>Je wilt volledige controle over snelheid, veiligheid en ontwerp.</li>
                    <li>De site is de kern van je bedrijf, niet alleen een visitekaartje.</li>
                </ul>

                <h2>Wat het verschil in de praktijk betekent</h2>
                <p>
                    Bij WordPress betaal je minder in het begin en kun je veel zelf. Daar staat tegenover dat
                    updates en plug-ins onderhoud vragen. Een verouderde plug-in is de meest voorkomende reden
                    dat een WordPress-site gehackt wordt. Bij maatwerk is de start duurder en ben je voor
                    aanpassingen vaker van mij afhankelijk, maar je krijgt precies wat je nodig hebt en niets
                    wat je niet gebruikt.
                </p>
                <p>
                    Mijn tarieven zie je op de <Link to="/#tarieven">homepage</Link>: een basis website vanaf
                    €1.200, een website met CMS vanaf €2.450 en volledig maatwerk vanaf €4.250, allemaal
                    exclusief btw en met een vaste prijs in de offerte.
                </p>

                <h2>Zo kies je</h2>
                <p>
                    Stel jezelf drie vragen. Wil ik zelf teksten kunnen aanpassen? Dan WordPress of een CMS.
                    Moeten mensen kunnen inloggen of betalen op een manier die niet standaard is? Dan maatwerk.
                    Weet ik het nog niet? Dan is WordPress bijna altijd het veiligste begin, want je kunt later
                    altijd groeien.
                </p>

                <h2>Twijfel je nog?</h2>
                <p>
                    In een gratis gesprek van 30 minuten kijk ik met je mee naar wat je nodig hebt. Soms is het
                    antwoord dat je minder nodig hebt dan je dacht, en dat zeg ik dan ook.
                </p>
            </>
        ),
    },
    en: {
        title: "WordPress or custom build: which fits your business?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "WordPress or a custom website? How to choose, from my own experience with both.",
        Body: () => (
            <>
                <p className="lead">
                    Almost every business owner who wants a website asks me the same thing: should it be
                    WordPress, or something custom? The honest answer is that both can be right. It depends on
                    what your site has to do.
                </p>

                <h2>When WordPress is a good choice</h2>
                <p>
                    For most freelancers and small businesses, WordPress works well. Your site is made of
                    pages, text, photos and maybe a blog, and you want to edit it yourself without calling me.
                    That is how I built the website for{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: calm, easy to read and easy
                    to update.
                </p>
                <ul>
                    <li>You want to manage your own text, photos and blog posts.</li>
                    <li>Your site is mostly informative: who you are, what you do, what it costs, how to get in touch.</li>
                    <li>Your budget is limited and you want to go live quickly.</li>
                    <li>You may want to add a calendar, form or small shop later.</li>
                </ul>

                <h2>When custom fits better</h2>
                <p>
                    Custom pays off when your website has to do more than inform. Think logins, payments,
                    contracts or links with other systems. An example is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, a rental app for landladies that I
                    built with Spring Boot and OAuth2. You cannot solve that with plug-ins.
                </p>
                <ul>
                    <li>Users need to log in securely and manage their own data.</li>
                    <li>You have a way of working that fits no standard package.</li>
                    <li>You want full control over speed, security and design.</li>
                    <li>The site is the core of your business, not just a business card.</li>
                </ul>

                <h2>What the difference means in practice</h2>
                <p>
                    With WordPress you pay less at the start and can do a lot yourself. The trade-off is that
                    updates and plug-ins need maintenance. An outdated plug-in is the most common reason a
                    WordPress site gets hacked. With custom work the start costs more and you depend on me more
                    for changes, but you get exactly what you need and nothing you don't use.
                </p>
                <p>
                    You can see my rates on the <Link to="/#tarieven">homepage</Link>: a basic website from
                    €1,200, a website with CMS from €2,450 and fully custom from €4,250, all excluding VAT and
                    with a fixed price in the quote.
                </p>

                <h2>How to choose</h2>
                <p>
                    Ask yourself three questions. Do I want to edit text myself? Then WordPress or a CMS. Do
                    people need to log in or pay in a way that isn't standard? Then custom. Not sure yet? Then
                    WordPress is almost always the safest start, because you can always grow later.
                </p>

                <h2>Still unsure?</h2>
                <p>
                    In a free 30-minute call I'll look at what you need. Sometimes the answer is that you need
                    less than you thought, and I'll tell you.
                </p>
            </>
        ),
    },
    fr: {
        title: "WordPress ou sur mesure : qu'est-ce qui convient à votre entreprise ?",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 4,
        shareText: "WordPress ou site sur mesure ? Comment choisir, d'après mon expérience avec les deux.",
        Body: () => (
            <>
                <p className="lead">
                    Presque tous les entrepreneurs qui veulent un site me posent la même question :
                    WordPress ou du sur mesure ? La réponse honnête, c'est que les deux peuvent être
                    de bons choix. Cela dépend de ce que votre site doit faire.
                </p>

                <h2>Quand WordPress est un bon choix</h2>

                <p>
                    Pour la plupart des indépendants et des petites entreprises, WordPress
                    fonctionne très bien. Votre site se compose de pages, de textes, de photos et
                    peut-être d'un blog, et vous voulez le modifier vous-même sans m'appeler. C'est
                    ainsi que j'ai construit le site de <Link to="/webdesignacupuncture">Acupuncture
                    by Saskia</Link> : calme, facile à lire et facile à mettre à jour.
                </p>

                <ul>
                    <li>Vous voulez gérer vous-même vos textes, vos photos et votre blog.</li>
                    <li>Votre site est surtout informatif : qui vous êtes, ce que vous faites, combien ça coûte, comment vous contacter.</li>
                    <li>Votre budget est limité et vous voulez être en ligne rapidement.</li>
                    <li>Vous voulez pouvoir ajouter plus tard un agenda, un formulaire ou une petite boutique.</li>
                </ul>

                <h2>Quand le sur mesure convient mieux</h2>

                <p>
                    Le sur mesure vaut la peine quand votre site doit faire plus qu'informer :
                    connexion, paiements, contrats ou liens avec d'autres systèmes. Un exemple :
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, une application de
                    location pour logeuses que j'ai construite avec Spring Boot et OAuth2. Avec des
                    extensions, ce n'est pas possible.
                </p>

                <ul>
                    <li>Les utilisateurs doivent pouvoir se connecter en toute sécurité et gérer leurs propres données.</li>
                    <li>Vous avez une façon de travailler qui ne rentre dans aucun logiciel standard.</li>
                    <li>Vous voulez un contrôle total sur la vitesse, la sécurité et le design.</li>
                    <li>Le site est au cœur de votre activité, pas seulement une carte de visite.</li>
                </ul>

                <h2>Ce que la différence signifie en pratique</h2>

                <p>
                    Avec WordPress, vous payez moins au départ et vous pouvez faire beaucoup
                    vous-même. En contrepartie, les mises à jour et les extensions demandent de la
                    maintenance. Une extension obsolète est la raison la plus fréquente du piratage
                    d'un site WordPress. Avec le sur mesure, le départ coûte plus cher et vous
                    dépendez davantage de moi pour les modifications, mais vous obtenez exactement
                    ce qu'il vous faut et rien d'inutile.
                </p>

                <p>
                    Mes tarifs figurent sur la <Link to="/#tarieven">page d'accueil</Link> : un site
                    de base à partir de 1 200 €, un site avec CMS à partir de 2 450 € et du sur
                    mesure complet à partir de 4 250 €, hors TVA et avec un prix fixe dans le devis.
                </p>

                <h2>Comment choisir</h2>

                <p>
                    Posez-vous trois questions. Est-ce que je veux modifier mes textes moi-même ?
                    Alors WordPress ou un CMS. Des personnes doivent-elles se connecter ou payer
                    d'une manière hors norme ? Alors du sur mesure. Vous ne savez pas encore ?
                    WordPress est presque toujours le départ le plus sûr, car vous pourrez toujours
                    évoluer ensuite.
                </p>

                <h2>Encore un doute ?</h2>

                <p>
                    Lors d'un échange gratuit de 30 minutes, je regarde avec vous ce dont vous avez
                    besoin. Parfois la réponse est que vous avez besoin de moins que ce que vous
                    pensiez, et je vous le dis.
                </p>
            </>
        ),
    },
    de: {
        title: "WordPress oder Maßanfertigung: Was passt zu Ihrem Unternehmen?",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 4,
        shareText: "WordPress oder eine maßgeschneiderte Website? So entscheiden Sie, aus meiner Erfahrung mit beiden.",
        Body: () => (
            <>
                <p className="lead">
                    Fast jeder Unternehmer, der eine Website möchte, stellt mir dieselbe Frage:
                    WordPress oder etwas Maßgeschneidertes? Die ehrliche Antwort ist, dass beides
                    richtig sein kann. Es hängt davon ab, was Ihre Website leisten soll.
                </p>

                <h2>Wann WordPress eine gute Wahl ist</h2>

                <p>
                    Für die meisten Selbstständigen und kleinen Unternehmen funktioniert WordPress
                    sehr gut. Ihre Website besteht aus Seiten, Texten, Fotos und vielleicht einem
                    Blog, und Sie möchten sie selbst anpassen, ohne mich anzurufen. So habe ich die
                    Website von <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>
                    gebaut: ruhig, gut lesbar und leicht zu aktualisieren.
                </p>

                <ul>
                    <li>Sie möchten Texte, Fotos und Blogbeiträge selbst verwalten.</li>
                    <li>Ihre Website ist vor allem informativ: wer Sie sind, was Sie tun, was es kostet, wie man Kontakt aufnimmt.</li>
                    <li>Ihr Budget ist begrenzt und Sie möchten schnell online gehen.</li>
                    <li>Sie möchten später einen Kalender, ein Formular oder einen kleinen Shop ergänzen können.</li>
                </ul>

                <h2>Wann Maßanfertigung besser passt</h2>

                <p>
                    Maßanfertigung lohnt sich, wenn Ihre Website mehr tun soll als informieren:
                    Login, Zahlungen, Verträge oder Verbindungen zu anderen Systemen. Ein Beispiel
                    ist <Link to="/backendstudentendashboard">CasaCrew</Link>, eine Vermietungs-App
                    für Vermieterinnen, die ich mit Spring Boot und OAuth2 gebaut habe. Das lässt
                    sich nicht mit Plug-ins lösen.
                </p>

                <ul>
                    <li>Nutzer müssen sich sicher anmelden und ihre eigenen Daten verwalten können.</li>
                    <li>Sie haben eine Arbeitsweise, die in kein Standardpaket passt.</li>
                    <li>Sie möchten volle Kontrolle über Geschwindigkeit, Sicherheit und Design.</li>
                    <li>Die Website ist das Herzstück Ihres Unternehmens, nicht nur eine Visitenkarte.</li>
                </ul>

                <h2>Was der Unterschied in der Praxis bedeutet</h2>

                <p>
                    Bei WordPress zahlen Sie am Anfang weniger und können vieles selbst tun. Dafür
                    brauchen Updates und Plug-ins Pflege. Ein veraltetes Plug-in ist der häufigste
                    Grund, warum eine WordPress-Seite gehackt wird. Bei Maßanfertigung kostet der
                    Start mehr und Sie sind für Änderungen öfter auf mich angewiesen, aber Sie
                    bekommen genau das, was Sie brauchen, und nichts, was Sie nicht nutzen.
                </p>

                <p>
                    Meine Preise finden Sie auf der <Link to="/#tarieven">Startseite</Link>: eine
                    Basis-Website ab 1.200 €, eine Website mit CMS ab 2.450 € und komplette
                    Maßanfertigung ab 4.250 €, jeweils zzgl. MwSt. und mit Festpreis im Angebot.
                </p>

                <h2>So entscheiden Sie</h2>

                <p>
                    Stellen Sie sich drei Fragen. Möchte ich Texte selbst ändern? Dann WordPress
                    oder ein CMS. Sollen Menschen sich anmelden oder auf eine Weise bezahlen, die
                    nicht Standard ist? Dann Maßanfertigung. Wissen Sie es noch nicht? Dann ist
                    WordPress fast immer der sicherste Start, denn wachsen können Sie später immer
                    noch.
                </p>

                <h2>Noch unsicher?</h2>

                <p>
                    In einem kostenlosen Gespräch von 30 Minuten schaue ich mit Ihnen, was Sie
                    brauchen. Manchmal lautet die Antwort, dass Sie weniger brauchen, als Sie
                    dachten, und das sage ich Ihnen dann auch.
                </p>
            </>
        ),
    },
    es: {
        title: "WordPress o a medida: ¿qué encaja con tu negocio?",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 4,
        shareText: "¿WordPress o una web a medida? Cómo elegir, desde mi experiencia con ambas.",
        Body: () => (
            <>
                <p className="lead">
                    Casi todos los empresarios que quieren una web me hacen la misma pregunta:
                    ¿WordPress o algo a medida? La respuesta sincera es que ambas opciones pueden
                    ser buenas. Depende de lo que tu web tenga que hacer.
                </p>

                <h2>Cuándo WordPress es una buena opción</h2>

                <p>
                    Para la mayoría de autónomos y pequeñas empresas, WordPress funciona muy bien.
                    Tu web se compone de páginas, textos, fotos y quizá un blog, y quieres poder
                    editarla tú mismo sin llamarme. Así construí la web de <Link
                    to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquila, fácil de
                    leer y fácil de actualizar.
                </p>

                <ul>
                    <li>Quieres gestionar tú mismo los textos, las fotos y el blog.</li>
                    <li>Tu web es sobre todo informativa: quién eres, qué haces, cuánto cuesta, cómo contactar.</li>
                    <li>Tu presupuesto es limitado y quieres estar online pronto.</li>
                    <li>Quieres poder añadir más adelante un calendario, un formulario o una pequeña tienda.</li>
                </ul>

                <h2>Cuándo encaja mejor lo a medida</h2>

                <p>
                    Lo a medida compensa cuando tu web tiene que hacer más que informar: inicio de
                    sesión, pagos, contratos o conexiones con otros sistemas. Un ejemplo es <Link
                    to="/backendstudentendashboard">CasaCrew</Link>, una aplicación de alquiler para
                    propietarias que construí con Spring Boot y OAuth2. Eso no se resuelve con
                    plugins.
                </p>

                <ul>
                    <li>Los usuarios tienen que poder iniciar sesión de forma segura y gestionar sus propios datos.</li>
                    <li>Tienes una forma de trabajar que no encaja en ningún paquete estándar.</li>
                    <li>Quieres control total sobre la velocidad, la seguridad y el diseño.</li>
                    <li>La web es el núcleo de tu negocio, no solo una tarjeta de visita.</li>
                </ul>

                <h2>Qué significa la diferencia en la práctica</h2>

                <p>
                    Con WordPress pagas menos al principio y puedes hacer mucho tú mismo. A cambio,
                    las actualizaciones y los plugins necesitan mantenimiento. Un plugin
                    desactualizado es la razón más habitual por la que hackean una web de WordPress.
                    Con lo a medida el comienzo cuesta más y dependes más de mí para los cambios,
                    pero obtienes exactamente lo que necesitas y nada que no uses.
                </p>

                <p>
                    Mis tarifas están en la <Link to="/#tarieven">página de inicio</Link>: una web
                    básica desde 1.200 €, una web con CMS desde 2.450 € y a medida completa desde
                    4.250 €, todo sin IVA y con precio fijo en el presupuesto.
                </p>

                <h2>Cómo elegir</h2>

                <p>
                    Hazte tres preguntas. ¿Quiero poder cambiar yo mismo los textos? Entonces
                    WordPress o un CMS. ¿Las personas tienen que iniciar sesión o pagar de una forma
                    no estándar? Entonces a medida. ¿Todavía no lo sabes? Entonces WordPress es casi
                    siempre el comienzo más seguro, porque siempre puedes crecer después.
                </p>

                <h2>¿Sigues dudando?</h2>

                <p>
                    En una llamada gratuita de 30 minutos veo contigo lo que necesitas. A veces la
                    respuesta es que necesitas menos de lo que pensabas, y te lo digo.
                </p>
            </>
        ),
    },
    it: {
        title: "WordPress o su misura: cosa si adatta alla tua attività?",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 4,
        shareText: "WordPress o un sito su misura? Come scegliere, dalla mia esperienza con entrambi.",
        Body: () => (
            <>
                <p className="lead">
                    Quasi ogni imprenditore che vuole un sito mi fa la stessa domanda: WordPress o
                    qualcosa su misura? La risposta onesta è che entrambi possono essere giusti.
                    Dipende da ciò che il tuo sito deve fare.
                </p>

                <h2>Quando WordPress è una buona scelta</h2>

                <p>
                    Per la maggior parte dei freelance e delle piccole imprese WordPress funziona
                    benissimo. Il tuo sito è fatto di pagine, testi, foto e magari un blog, e vuoi
                    poterlo modificare da solo senza chiamarmi. Così ho costruito il sito di <Link
                    to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquillo, facile da
                    leggere e facile da aggiornare.
                </p>

                <ul>
                    <li>Vuoi gestire tu stesso testi, foto e articoli del blog.</li>
                    <li>Il tuo sito è soprattutto informativo: chi sei, cosa fai, quanto costa, come contattarti.</li>
                    <li>Il tuo budget è limitato e vuoi andare online in fretta.</li>
                    <li>Vuoi poter aggiungere più avanti un calendario, un modulo o un piccolo negozio.</li>
                </ul>

                <h2>Quando il su misura è più adatto</h2>

                <p>
                    Il su misura vale la pena quando il tuo sito deve fare più che informare:
                    accesso con login, pagamenti, contratti o collegamenti con altri sistemi. Un
                    esempio è <Link to="/backendstudentendashboard">CasaCrew</Link>, un'app di
                    affitto per padrone di casa che ho costruito con Spring Boot e OAuth2. Con i
                    plugin non si risolve.
                </p>

                <ul>
                    <li>Gli utenti devono poter accedere in sicurezza e gestire i propri dati.</li>
                    <li>Hai un modo di lavorare che non rientra in nessun pacchetto standard.</li>
                    <li>Vuoi il pieno controllo su velocità, sicurezza e design.</li>
                    <li>Il sito è il cuore della tua attività, non solo un biglietto da visita.</li>
                </ul>

                <h2>Cosa significa la differenza nella pratica</h2>

                <p>
                    Con WordPress paghi meno all'inizio e puoi fare molto da solo. In cambio,
                    aggiornamenti e plugin richiedono manutenzione. Un plugin obsoleto è il motivo
                    più comune per cui un sito WordPress viene hackerato. Con il su misura l'inizio
                    costa di più e per le modifiche dipendi più da me, ma ottieni esattamente ciò
                    che ti serve e nulla che non usi.
                </p>

                <p>
                    Le mie tariffe sono nella <Link to="/#tarieven">home page</Link>: un sito base
                    da 1.200 €, un sito con CMS da 2.450 € e un su misura completo da 4.250 €, tutto
                    IVA esclusa e con prezzo fisso nel preventivo.
                </p>

                <h2>Come scegliere</h2>

                <p>
                    Fatti tre domande. Voglio poter cambiare i testi da solo? Allora WordPress o un
                    CMS. Le persone devono accedere o pagare in un modo non standard? Allora su
                    misura. Non lo sai ancora? Allora WordPress è quasi sempre l'inizio più sicuro,
                    perché potrai sempre crescere dopo.
                </p>

                <h2>Hai ancora dubbi?</h2>

                <p>
                    In un colloquio gratuito di 30 minuti guardo con te di cosa hai bisogno. A volte
                    la risposta è che ti serve meno di quanto pensavi, e te lo dico.
                </p>
            </>
        ),
    },
    uk: {
        title: "WordPress чи індивідуальна розробка: що підходить вашому бізнесу?",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 4,
        shareText: "WordPress чи сайт на замовлення? Як обрати, з мого досвіду роботи з обома.",
        Body: () => (
            <>
                <p className="lead">
                    Майже кожен підприємець, який хоче сайт, ставить мені те саме запитання:
                    WordPress чи щось індивідуальне? Чесна відповідь: обидва варіанти можуть бути
                    правильними. Все залежить від того, що має робити ваш сайт.
                </p>

                <h2>Коли WordPress — хороший вибір</h2>

                <p>
                    Для більшості фрилансерів і малих компаній WordPress працює чудово. Ваш сайт
                    складається зі сторінок, текстів, фото й, можливо, блогу, і ви хочете самі його
                    редагувати, не телефонуючи мені. Так я зробила сайт <Link
                    to="/webdesignacupuncture">Acupuncture by Saskia</Link>: спокійний, легкий для
                    читання й для оновлення.
                </p>

                <ul>
                    <li>Ви хочете самі керувати текстами, фото та блогом.</li>
                    <li>Ваш сайт здебільшого інформаційний: хто ви, що робите, скільки це коштує, як зв'язатися.</li>
                    <li>Ваш бюджет обмежений, і ви хочете швидко вийти в мережу.</li>
                    <li>Ви хочете мати змогу згодом додати календар, форму чи невеликий магазин.</li>
                </ul>

                <h2>Коли краще підходить індивідуальна розробка</h2>

                <p>
                    Індивідуальна розробка виправдовує себе, коли сайт має робити більше, ніж
                    інформувати: вхід в акаунт, оплата, договори чи зв'язок з іншими системами.
                    Приклад — <Link to="/backendstudentendashboard">CasaCrew</Link>, застосунок для
                    орендодавиць, який я створила на Spring Boot і OAuth2. Плагінами це не вирішити.
                </p>

                <ul>
                    <li>Користувачі мають безпечно входити й керувати власними даними.</li>
                    <li>У вас особливий спосіб роботи, який не вписується в жоден стандартний пакет.</li>
                    <li>Ви хочете повного контролю над швидкістю, безпекою та дизайном.</li>
                    <li>Сайт — основа вашого бізнесу, а не просто візитівка.</li>
                </ul>

                <h2>Що ця різниця означає на практиці</h2>

                <p>
                    З WordPress ви платите менше на старті й багато можете робити самі. Натомість
                    оновлення та плагіни потребують догляду. Застарілий плагін — найчастіша причина
                    злому сайтів на WordPress. З індивідуальною розробкою старт коштує дорожче, і
                    для змін ви більше залежите від мене, але отримуєте саме те, що потрібно, і
                    нічого зайвого.
                </p>

                <p>
                    Мої тарифи ви знайдете на <Link to="/#tarieven">головній сторінці</Link>:
                    базовий сайт від 1 200 €, сайт із CMS від 2 450 € і повністю індивідуальний від
                    4 250 €, усе без ПДВ і з фіксованою ціною в пропозиції.
                </p>

                <h2>Як обрати</h2>

                <p>
                    Поставте собі три запитання. Чи хочу я самостійно змінювати тексти? Тоді
                    WordPress або CMS. Чи мають люди входити або платити нестандартним способом?
                    Тоді індивідуальна розробка. Ще не знаєте? Тоді WordPress майже завжди
                    найбезпечніший початок, адже рости можна й пізніше.
                </p>

                <h2>Ще вагаєтеся?</h2>

                <p>
                    На безкоштовній розмові на 30 хвилин я разом з вами подивлюся, що вам потрібно.
                    Іноді відповідь така: вам потрібно менше, ніж ви думали, і я так і скажу.
                </p>
            </>
        ),
    },
};

export default function WordpressOfMaatwerk() {
    return (
        <BlogArticle
            id="wordpress-of-maatwerk"
            cover="/Portfolio/acupuncture-mockup"
            coverAlt="Website Acupuncture by Saskia op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
