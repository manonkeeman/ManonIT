import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Wat zit er in website-onderhoud, en heb je het nodig?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "Wat doet website-onderhoud eigenlijk, en wanneer heb je het nodig?",
        Body: () => (
            <>
                <p className="lead">
                    Een website is niet af op de dag dat hij live gaat. Software veroudert, beveiliging
                    verandert en je bedrijf groeit. Onderhoud is het stille werk dat zorgt dat je site blijft
                    doen wat hij moet doen.
                </p>

                <h2>Wat onderhoud inhoudt</h2>
                <ul>
                    <li><strong>Updates:</strong> WordPress, thema's, plug-ins en andere onderdelen worden regelmatig bijgewerkt. Een verouderde plug-in is een van de grootste veiligheidsrisico's.</li>
                    <li><strong>Back-ups:</strong> gaat er iets mis, dan kun je terug naar een werkende versie.</li>
                    <li><strong>Monitoring:</strong> ik zie het als je site niet bereikbaar is, voordat jouw klant het ziet.</li>
                    <li><strong>Kleine aanpassingen:</strong> een nieuwe tekst, een foto, een prijs of een extra pagina.</li>
                    <li><strong>Doorlopende verbetering:</strong> snelheid, vindbaarheid en wat bezoekers wel of niet doen.</li>
                </ul>

                <h2>Wat ik aanbied</h2>
                <p>
                    <strong>Onderhoud Basis</strong> kost €120 per maand en bevat 2 uur werk, updates, back-ups
                    en monitoring. <strong>Onderhoud &amp; Groei</strong> kost €240 per maand en bevat 4 uur
                    werk, plus SEO en GEO en een maandrapport. Beide abonnementen lopen minimaal 3 maanden en
                    zijn daarna maandelijks opzegbaar. Losse uren kosten €65. Alle prijzen zijn exclusief btw,
                    en je vindt ze ook op de <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Heb je onderhoud nodig?</h2>
                <p>
                    Het hangt af van je site. Een eenvoudige site zonder inlog en zonder veel plug-ins kan
                    jarenlang goed blijven. Maar heb je WordPress, een webshop, een formulier waar mensen je
                    mee bereiken of een app met gebruikers, dan is onderhoud geen luxe. Een vraag die helpt:
                    wat kost het jou als je site een week niet werkt?
                </p>

                <h2>Zelf doen of uitbesteden</h2>
                <p>
                    Sommige ondernemers doen updates graag zelf. Dat kan, als je het ook echt regelmatig doet en
                    weet wat je moet doen als iets stukgaat. Voor de meeste mensen is het fijner om dit uit
                    handen te geven aan degene die de site gebouwd heeft, omdat die precies weet hoe alles in
                    elkaar zit. Dat is bij mij zo: ik bouw en onderhoud zelf, zonder tussenpersonen.
                </p>

                <h2>Een voorbeeld</h2>
                <p>
                    Bij projecten als <Link to="/thebigthree">The Big Three</Link> en{" "}
                    <Link to="/frontendvredestein">Villa Vredestein</Link> blijft de site na oplevering in
                    beweging: nieuwe teksten, nieuwe foto's, nieuwe wensen. Dan is een vast contactpersoon
                    handiger dan elke keer opnieuw uitleggen waar je mee bezig bent.
                </p>

                <h2>Vragen?</h2>
                <p>
                    Weet je niet zeker of je onderhoud nodig hebt? Plan een gratis gesprek van 30 minuten. Ik
                    kijk met je mee en zeg het eerlijk als het niet nodig is.
                </p>
            </>
        ),
    },
    en: {
        title: "What does website maintenance include, and do you need it?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "What does website maintenance actually do, and when do you need it?",
        Body: () => (
            <>
                <p className="lead">
                    A website is not finished the day it goes live. Software ages, security changes and your
                    business grows. Maintenance is the quiet work that keeps your site doing what it should.
                </p>

                <h2>What maintenance includes</h2>
                <ul>
                    <li><strong>Updates:</strong> WordPress, themes, plug-ins and other components are updated regularly. An outdated plug-in is one of the biggest security risks.</li>
                    <li><strong>Backups:</strong> if something goes wrong, you can go back to a working version.</li>
                    <li><strong>Monitoring:</strong> I see when your site is down before your customer does.</li>
                    <li><strong>Small changes:</strong> a new text, a photo, a price or an extra page.</li>
                    <li><strong>Ongoing improvement:</strong> speed, findability and what visitors do or don't do.</li>
                </ul>

                <h2>What I offer</h2>
                <p>
                    <strong>Maintenance Basic</strong> costs €120 per month and includes 2 hours of work,
                    updates, backups and monitoring. <strong>Maintenance &amp; Growth</strong> costs €240 per
                    month and includes 4 hours of work, plus SEO and GEO and a monthly report. Both plans run
                    for at least 3 months and can be cancelled monthly after that. Extra hours cost €65. All
                    prices exclude VAT, and you can also find them on the <Link to="/#tarieven">homepage</Link>.
                </p>

                <h2>Do you need maintenance?</h2>
                <p>
                    It depends on your site. A simple site with no login and few plug-ins can stay fine for
                    years. But if you have WordPress, a shop, a form people use to reach you or an app with
                    users, maintenance is not a luxury. One question that helps: what does it cost you if your
                    site doesn't work for a week?
                </p>

                <h2>Do it yourself or outsource</h2>
                <p>
                    Some business owners like doing updates themselves. That works if you really do it
                    regularly and know what to do when something breaks. For most people it is easier to hand
                    this to whoever built the site, because they know exactly how everything fits together.
                    That is how I work: I build and maintain it myself, without middlemen.
                </p>

                <h2>An example</h2>
                <p>
                    With projects like <Link to="/thebigthree">The Big Three</Link> and{" "}
                    <Link to="/frontendvredestein">Villa Vredestein</Link> the site keeps moving after
                    delivery: new texts, new photos, new wishes. Then a fixed contact person is easier than
                    explaining what you are working on every time.
                </p>

                <h2>Questions?</h2>
                <p>
                    Not sure if you need maintenance? Book a free 30-minute call. I'll look with you and tell
                    you honestly if you don't.
                </p>
            </>
        ),
    },
    fr: {
        title: "Que comprend la maintenance d'un site, et en avez-vous besoin ?",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 4,
        shareText: "Que fait vraiment la maintenance d'un site, et quand en avez-vous besoin ?",
        Body: () => (
            <>
                <p className="lead">
                    Un site n'est pas terminé le jour de sa mise en ligne. Les logiciels
                    vieillissent, la sécurité évolue et votre entreprise grandit. La maintenance,
                    c'est le travail discret qui garantit que votre site continue de faire ce qu'il
                    doit faire.
                </p>

                <h2>Ce que comprend la maintenance</h2>

                <ul>
                    <li><strong>Mises à jour :</strong> WordPress, thèmes, extensions et autres composants sont mis à jour régulièrement. Une extension obsolète est l'un des plus grands risques de sécurité.</li>
                    <li><strong>Sauvegardes :</strong> si quelque chose tourne mal, vous pouvez revenir à une version qui fonctionne.</li>
                    <li><strong>Surveillance :</strong> je vois que votre site est hors ligne avant votre client.</li>
                    <li><strong>Petites modifications :</strong> un nouveau texte, une photo, un prix ou une page en plus.</li>
                    <li><strong>Amélioration continue :</strong> vitesse, visibilité et ce que font ou ne font pas les visiteurs.</li>
                </ul>

                <h2>Ce que je propose</h2>

                <p>
                    <strong>Maintenance Base</strong> coûte 120 € par mois et comprend 2 heures de
                    travail, les mises à jour, les sauvegardes et la surveillance.
                    <strong>Maintenance &amp; Croissance</strong> coûte 240 € par mois et comprend 4
                    heures de travail, plus le SEO et le GEO et un rapport mensuel. Les deux
                    formules durent au moins 3 mois, puis sont résiliables chaque mois. Les heures
                    supplémentaires coûtent 65 €. Tous les prix sont hors TVA et figurent aussi sur
                    la <Link to="/#tarieven">page d'accueil</Link>.
                </p>

                <h2>En avez-vous besoin ?</h2>

                <p>
                    Cela dépend de votre site. Un site simple, sans connexion et avec peu
                    d'extensions, peut rester en bon état pendant des années. Mais si vous avez
                    WordPress, une boutique, un formulaire par lequel on vous contacte ou une
                    application avec des utilisateurs, la maintenance n'est pas un luxe. Une
                    question utile : combien cela vous coûte-t-il si votre site ne fonctionne pas
                    pendant une semaine ?
                </p>

                <h2>Le faire soi-même ou externaliser</h2>

                <p>
                    Certains entrepreneurs aiment faire les mises à jour eux-mêmes. C'est possible
                    si vous le faites vraiment régulièrement et que vous savez quoi faire quand
                    quelque chose casse. Pour la plupart des gens, il est plus simple de confier
                    cela à la personne qui a construit le site, car elle sait exactement comment
                    tout s'articule. C'est ma façon de travailler : je construis et je maintiens
                    moi-même, sans intermédiaires.
                </p>

                <h2>Un exemple</h2>

                <p>
                    Pour des projets comme <Link to="/thebigthree">The Big Three</Link> et <Link
                    to="/frontendvredestein">Villa Vredestein</Link>, le site continue d'évoluer
                    après la livraison : nouveaux textes, nouvelles photos, nouvelles envies. Dans
                    ce cas, un interlocuteur fixe est plus simple que de réexpliquer à chaque fois
                    ce sur quoi vous travaillez.
                </p>

                <h2>Des questions ?</h2>

                <p>
                    Vous ne savez pas si vous avez besoin de maintenance ? Planifiez un échange
                    gratuit de 30 minutes. Je regarde avec vous et je vous dis honnêtement si ce
                    n'est pas nécessaire.
                </p>
            </>
        ),
    },
    de: {
        title: "Was gehört zur Website-Wartung, und brauchen Sie sie?",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 4,
        shareText: "Was macht Website-Wartung eigentlich, und wann brauchen Sie sie?",
        Body: () => (
            <>
                <p className="lead">
                    Eine Website ist nicht fertig, wenn sie online geht. Software veraltet,
                    Sicherheit ändert sich und Ihr Unternehmen wächst. Wartung ist die stille
                    Arbeit, die dafür sorgt, dass Ihre Seite weiter tut, was sie soll.
                </p>

                <h2>Was Wartung umfasst</h2>

                <ul>
                    <li><strong>Updates:</strong> WordPress, Themes, Plug-ins und andere Komponenten werden regelmäßig aktualisiert. Ein veraltetes Plug-in ist eines der größten Sicherheitsrisiken.</li>
                    <li><strong>Backups:</strong> Geht etwas schief, können Sie zu einer funktionierenden Version zurück.</li>
                    <li><strong>Monitoring:</strong> Ich sehe, wenn Ihre Seite nicht erreichbar ist, bevor Ihr Kunde es merkt.</li>
                    <li><strong>Kleine Anpassungen:</strong> ein neuer Text, ein Foto, ein Preis oder eine zusätzliche Seite.</li>
                    <li><strong>Laufende Verbesserung:</strong> Geschwindigkeit, Auffindbarkeit und was Besucher tun oder nicht tun.</li>
                </ul>

                <h2>Was ich anbiete</h2>

                <p>
                    <strong>Wartung Basis</strong> kostet 120 € pro Monat und enthält 2 Stunden
                    Arbeit, Updates, Backups und Monitoring. <strong>Wartung &amp; Wachstum</strong>
                    kostet 240 € pro Monat und enthält 4 Stunden Arbeit, dazu SEO und GEO sowie
                    einen Monatsbericht. Beide Abos laufen mindestens 3 Monate und sind danach
                    monatlich kündbar. Einzelne Stunden kosten 65 €. Alle Preise verstehen sich
                    zzgl. MwSt. und stehen auch auf der <Link to="/#tarieven">Startseite</Link>.
                </p>

                <h2>Brauchen Sie Wartung?</h2>

                <p>
                    Das hängt von Ihrer Seite ab. Eine einfache Seite ohne Login und mit wenigen
                    Plug-ins kann jahrelang problemlos laufen. Aber haben Sie WordPress, einen Shop,
                    ein Formular, über das man Sie erreicht, oder eine App mit Nutzern, ist Wartung
                    kein Luxus. Eine hilfreiche Frage: Was kostet es Sie, wenn Ihre Seite eine Woche
                    nicht funktioniert?
                </p>

                <h2>Selbst machen oder auslagern</h2>

                <p>
                    Manche Unternehmer machen Updates gern selbst. Das geht, wenn Sie es wirklich
                    regelmäßig tun und wissen, was zu tun ist, wenn etwas kaputtgeht. Für die
                    meisten ist es angenehmer, das der Person zu überlassen, die die Seite gebaut
                    hat, weil sie genau weiß, wie alles zusammenhängt. So arbeite ich: Ich baue und
                    warte selbst, ohne Zwischenstellen.
                </p>

                <h2>Ein Beispiel</h2>

                <p>
                    Bei Projekten wie <Link to="/thebigthree">The Big Three</Link> und <Link
                    to="/frontendvredestein">Villa Vredestein</Link> bleibt die Seite nach der
                    Übergabe in Bewegung: neue Texte, neue Fotos, neue Wünsche. Dann ist ein fester
                    Ansprechpartner einfacher, als jedes Mal neu zu erklären, woran Sie gerade
                    arbeiten.
                </p>

                <h2>Fragen?</h2>

                <p>
                    Sie wissen nicht sicher, ob Sie Wartung brauchen? Planen Sie ein kostenloses
                    Gespräch von 30 Minuten. Ich schaue mit Ihnen und sage ehrlich, wenn Sie es
                    nicht brauchen.
                </p>
            </>
        ),
    },
    es: {
        title: "¿Qué incluye el mantenimiento de una web y lo necesitas?",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 4,
        shareText: "¿Qué hace realmente el mantenimiento web y cuándo lo necesitas?",
        Body: () => (
            <>
                <p className="lead">
                    Una web no está terminada el día que sale en línea. El software envejece, la
                    seguridad cambia y tu negocio crece. El mantenimiento es el trabajo silencioso
                    que hace que tu web siga haciendo lo que debe.
                </p>

                <h2>Qué incluye el mantenimiento</h2>

                <ul>
                    <li><strong>Actualizaciones:</strong> WordPress, temas, plugins y otros componentes se actualizan con regularidad. Un plugin desactualizado es uno de los mayores riesgos de seguridad.</li>
                    <li><strong>Copias de seguridad:</strong> si algo sale mal, puedes volver a una versión que funcione.</li>
                    <li><strong>Monitorización:</strong> veo que tu web está caída antes de que lo vea tu cliente.</li>
                    <li><strong>Pequeños cambios:</strong> un texto nuevo, una foto, un precio o una página extra.</li>
                    <li><strong>Mejora continua:</strong> velocidad, visibilidad y lo que los visitantes hacen o no hacen.</li>
                </ul>

                <h2>Lo que ofrezco</h2>

                <p>
                    <strong>Mantenimiento Básico</strong> cuesta 120 € al mes e incluye 2 horas de
                    trabajo, actualizaciones, copias de seguridad y monitorización.
                    <strong>Mantenimiento y Crecimiento</strong> cuesta 240 € al mes e incluye 4
                    horas de trabajo, más SEO y GEO y un informe mensual. Ambas suscripciones duran
                    al menos 3 meses y después se pueden cancelar mensualmente. Las horas sueltas
                    cuestan 65 €. Todos los precios son sin IVA y también están en la <Link
                    to="/#tarieven">página de inicio</Link>.
                </p>

                <h2>¿Necesitas mantenimiento?</h2>

                <p>
                    Depende de tu web. Una web sencilla, sin inicio de sesión y con pocos plugins,
                    puede seguir bien durante años. Pero si tienes WordPress, una tienda, un
                    formulario por el que te contactan o una aplicación con usuarios, el
                    mantenimiento no es un lujo. Una pregunta que ayuda: ¿cuánto te cuesta que tu
                    web no funcione durante una semana?
                </p>

                <h2>Hacerlo tú o externalizarlo</h2>

                <p>
                    A algunos empresarios les gusta hacer las actualizaciones ellos mismos. Se
                    puede, si de verdad lo haces con regularidad y sabes qué hacer cuando algo se
                    rompe. Para la mayoría es más cómodo dejárselo a quien construyó la web, porque
                    sabe exactamente cómo encaja todo. Así trabajo yo: construyo y mantengo yo
                    misma, sin intermediarios.
                </p>

                <h2>Un ejemplo</h2>

                <p>
                    En proyectos como <Link to="/thebigthree">The Big Three</Link> y <Link
                    to="/frontendvredestein">Villa Vredestein</Link>, la web sigue en movimiento
                    tras la entrega: textos nuevos, fotos nuevas, deseos nuevos. Entonces es más
                    práctico tener una persona de contacto fija que explicar cada vez en qué estás
                    trabajando.
                </p>

                <h2>¿Preguntas?</h2>

                <p>
                    ¿No sabes si necesitas mantenimiento? Reserva una llamada gratuita de 30
                    minutos. Lo miro contigo y te digo con sinceridad si no hace falta.
                </p>
            </>
        ),
    },
    it: {
        title: "Cosa comprende la manutenzione di un sito, e ti serve?",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 4,
        shareText: "Cosa fa davvero la manutenzione di un sito, e quando ti serve?",
        Body: () => (
            <>
                <p className="lead">
                    Un sito non è finito il giorno in cui va online. Il software invecchia, la
                    sicurezza cambia e la tua attività cresce. La manutenzione è il lavoro
                    silenzioso che fa sì che il tuo sito continui a fare ciò che deve.
                </p>

                <h2>Cosa comprende la manutenzione</h2>

                <ul>
                    <li><strong>Aggiornamenti:</strong> WordPress, temi, plugin e altri componenti vengono aggiornati regolarmente. Un plugin obsoleto è uno dei maggiori rischi per la sicurezza.</li>
                    <li><strong>Backup:</strong> se qualcosa va storto, puoi tornare a una versione funzionante.</li>
                    <li><strong>Monitoraggio:</strong> vedo quando il tuo sito è irraggiungibile prima del tuo cliente.</li>
                    <li><strong>Piccole modifiche:</strong> un testo nuovo, una foto, un prezzo o una pagina in più.</li>
                    <li><strong>Miglioramento continuo:</strong> velocità, visibilità e cosa fanno o non fanno i visitatori.</li>
                </ul>

                <h2>Cosa offro</h2>

                <p>
                    <strong>Manutenzione Base</strong> costa 120 € al mese e comprende 2 ore di
                    lavoro, aggiornamenti, backup e monitoraggio. <strong>Manutenzione e
                    Crescita</strong> costa 240 € al mese e comprende 4 ore di lavoro, più SEO e GEO
                    e un report mensile. Entrambi gli abbonamenti durano almeno 3 mesi e poi sono
                    disdicibili mensilmente. Le ore singole costano 65 €. Tutti i prezzi sono IVA
                    esclusa e si trovano anche nella <Link to="/#tarieven">home page</Link>.
                </p>

                <h2>Ti serve la manutenzione?</h2>

                <p>
                    Dipende dal tuo sito. Un sito semplice, senza login e con pochi plugin, può
                    restare in buono stato per anni. Ma se hai WordPress, un negozio, un modulo con
                    cui ti contattano o un'app con utenti, la manutenzione non è un lusso. Una
                    domanda utile: quanto ti costa se il tuo sito non funziona per una settimana?
                </p>

                <h2>Farlo da solo o affidarlo</h2>

                <p>
                    Ad alcuni imprenditori piace fare gli aggiornamenti da soli. Si può, se lo fai
                    davvero con regolarità e sai cosa fare quando qualcosa si rompe. Per la maggior
                    parte delle persone è più comodo affidarlo a chi ha costruito il sito, perché sa
                    esattamente come funziona tutto. È così che lavoro io: costruisco e mantengo da
                    sola, senza intermediari.
                </p>

                <h2>Un esempio</h2>

                <p>
                    Con progetti come <Link to="/thebigthree">The Big Three</Link> e <Link
                    to="/frontendvredestein">Villa Vredestein</Link> il sito resta in movimento dopo
                    la consegna: nuovi testi, nuove foto, nuovi desideri. Allora un referente fisso
                    è più comodo che spiegare ogni volta a cosa stai lavorando.
                </p>

                <h2>Domande?</h2>

                <p>
                    Non sai se ti serve la manutenzione? Prenota un colloquio gratuito di 30 minuti.
                    Guardo con te e ti dico onestamente se non serve.
                </p>
            </>
        ),
    },
    uk: {
        title: "Що входить у підтримку сайту, і чи вона вам потрібна?",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 4,
        shareText: "Що насправді робить підтримка сайту і коли вона потрібна?",
        Body: () => (
            <>
                <p className="lead">
                    Сайт не завершений у день запуску. Програмне забезпечення старіє, безпека
                    змінюється, а ваш бізнес росте. Підтримка — це тиха робота, завдяки якій сайт і
                    далі робить те, що має.
                </p>

                <h2>Що входить у підтримку</h2>

                <ul>
                    <li><strong>Оновлення:</strong> WordPress, теми, плагіни та інші компоненти регулярно оновлюються. Застарілий плагін — один із найбільших ризиків для безпеки.</li>
                    <li><strong>Резервні копії:</strong> якщо щось піде не так, ви зможете повернутися до робочої версії.</li>
                    <li><strong>Моніторинг:</strong> я бачу, що сайт недоступний, раніше за вашого клієнта.</li>
                    <li><strong>Дрібні правки:</strong> новий текст, фото, ціна чи додаткова сторінка.</li>
                    <li><strong>Постійне вдосконалення:</strong> швидкість, видимість і те, що відвідувачі роблять або не роблять.</li>
                </ul>

                <h2>Що я пропоную</h2>

                <p>
                    <strong>Підтримка Базова</strong> коштує 120 € на місяць і включає 2 години
                    роботи, оновлення, резервні копії та моніторинг. <strong>Підтримка і
                    Зростання</strong> коштує 240 € на місяць і включає 4 години роботи, а також
                    SEO, GEO та щомісячний звіт. Обидві підписки діють щонайменше 3 місяці, а потім
                    їх можна скасувати щомісяця. Окремі години коштують 65 €. Усі ціни без ПДВ, їх
                    також видно на <Link to="/#tarieven">головній сторінці</Link>.
                </p>

                <h2>Чи потрібна вам підтримка?</h2>

                <p>
                    Це залежить від вашого сайту. Простий сайт без входу й з кількома плагінами може
                    роками працювати без проблем. Але якщо у вас WordPress, магазин, форма, через
                    яку з вами зв'язуються, або застосунок із користувачами, підтримка — не розкіш.
                    Корисне запитання: скільки вам коштуватиме, якщо сайт не працюватиме тиждень?
                </p>

                <h2>Робити самому чи довірити</h2>

                <p>
                    Дехто з підприємців охоче оновлює сайт сам. Це можливо, якщо ви справді робите
                    це регулярно й знаєте, що робити, коли щось ламається. Більшості зручніше
                    довірити це тому, хто створив сайт, бо вона точно знає, як усе влаштовано. Так
                    працюю я: сама створюю й підтримую, без посередників.
                </p>

                <h2>Приклад</h2>

                <p>
                    У проєктах на кшталт <Link to="/thebigthree">The Big Three</Link> і <Link
                    to="/frontendvredestein">Villa Vredestein</Link> сайт і після здачі не стоїть на
                    місці: нові тексти, нові фото, нові побажання. Тоді постійна контактна особа
                    зручніша, ніж щоразу пояснювати, над чим ви працюєте.
                </p>

                <h2>Є запитання?</h2>

                <p>
                    Не впевнені, чи потрібна вам підтримка? Запишіться на безкоштовну розмову на 30
                    хвилин. Я подивлюся разом з вами й чесно скажу, якщо вона не потрібна.
                </p>
            </>
        ),
    },
};

export default function WebsiteOnderhoud() {
    return (
        <BlogArticle
            id="website-onderhoud"
            cover="/Portfolio/de-grote-drie-mockup"
            coverAlt="Website The Big Three op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
