import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "WordPress of maatwerk? Altijd maatwerk, als abonnement of als pakket",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "WordPress of maatwerk? Bij ManonIT is het altijd maatwerk. De keuze zit in hoe het wordt betaald.",
        Body: () => (
            <>
                <p className="lead">
                    De vraag 'WordPress of maatwerk?' hoort bij een oude tegenstelling. Elke website van ManonIT
                    is maatwerk: een eigen ontwerp, eigen teksten, gebouwd voor één opdrachtgever. De keuze die
                    er echt toe doet, is een andere: hoe wordt de site betaald, en welke techniek past erbij.
                </p>

                <h2>Altijd maatwerk</h2>
                <p>
                    Ook een WordPress-site is geen standaardthema met andere kleuren. Ontwerp en teksten worden
                    gemaakt voor het merk en de bezoekers. De techniek eronder is een middel, geen uitgangspunt.
                </p>

                <h2>Twee manieren om te betalen</h2>
                <ul>
                    <li><strong>Abonnement:</strong> een eenmalige opstart en een vast bedrag per maand, vanaf €39 per maand. Hosting, beveiligingsupdates, back-ups en kleine wijzigingen zitten erin. De looptijd is 24 maanden, daarna is de website van de klant.</li>
                    <li><strong>Pakket (project):</strong> eenmalig, met een vaste prijs vooraf, vanaf €1.200. Geen looptijd. Onderhoud is optioneel.</li>
                </ul>
                <p>
                    Het verschil staat overzichtelijk op de <Link to="/tarieven">tarievenpagina</Link>. Alle prijzen
                    zijn exclusief btw.
                </p>

                <h2>Welke techniek past</h2>
                <p>
                    <strong>WordPress of een ander CMS</strong> past als teksten, foto's en blogs zelf beheerd
                    moeten worden. Zo bouwde ik <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>:
                    rustig, snel te lezen en eenvoudig bij te werken.
                </p>
                <p>
                    <strong>Eigen code</strong> past als de site meer moet doen dan informeren: inloggen,
                    betalingen of koppelingen met andere systemen. Een voorbeeld is{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, een verhuurapp voor hospita's,
                    gebouwd met Spring Boot en OAuth2.
                </p>

                <h2>Wat dit betekent voor onderhoud</h2>
                <p>
                    WordPress vraagt regelmatig updates; een verouderde plug-in is de meest voorkomende oorzaak van
                    een gehackte site. Bij een abonnement is dat onderhoud inbegrepen. Bij een pakket kan het
                    erbij worden genomen vanaf €120 per maand. Meer daarover staat in het blog{" "}
                    <Link to="/journal/website-onderhoud">Wat zit er in website-onderhoud</Link>.
                </p>

                <h2>Zo kiezen</h2>
                <p>
                    Drie vragen helpen. Moet de site zonder gedoe online komen, met een laag instapbedrag? Dan
                    een abonnement. Is het een uitgebreide of op maat gebouwde site, en past een eenmalige
                    investering beter? Dan een pakket. En moeten teksten zelf aangepast kunnen worden? Dan een
                    CMS, in beide gevallen.
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
        title: "WordPress or custom? Always custom, as a subscription or a package",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "WordPress or custom? At ManonIT it is always custom. The choice is in how it is paid.",
        Body: () => (
            <>
                <p className="lead">
                    The question 'WordPress or custom?' belongs to an old opposition. Every ManonIT website is
                    custom work: its own design, its own copy, built for one client. The choice that really
                    matters is a different one: how the site is paid for, and which technology fits.
                </p>

                <h2>Always custom</h2>
                <p>
                    Even a WordPress site is not a stock theme with different colours. Design and copy are made for
                    the brand and its visitors. The technology underneath is a means, not a starting point.
                </p>

                <h2>Two ways to pay</h2>
                <ul>
                    <li><strong>Subscription:</strong> a one-off setup and a fixed amount per month, from €39 per month. Hosting, security updates, backups and small changes are included. The term is 24 months, after which the website belongs to the client.</li>
                    <li><strong>Package (project):</strong> one-off, with a fixed price in advance, from €1,200. No term. Maintenance is optional.</li>
                </ul>
                <p>
                    The difference is laid out on the <Link to="/tarieven">pricing page</Link>. All prices exclude VAT.
                </p>

                <h2>Which technology fits</h2>
                <p>
                    <strong>WordPress or another CMS</strong> fits when texts, photos and blogs need to be managed
                    by the client. That is how I built <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>:
                    calm, quick to read and easy to update.
                </p>
                <p>
                    <strong>Custom code</strong> fits when the site has to do more than inform: logins, payments or
                    links with other systems. An example is <Link to="/backendstudentendashboard">CasaCrew</Link>,
                    a rental app for landladies, built with Spring Boot and OAuth2.
                </p>

                <h2>What this means for maintenance</h2>
                <p>
                    WordPress needs regular updates; an outdated plug-in is the most common cause of a hacked site.
                    With a subscription that maintenance is included. With a package it can be added from €120 per
                    month. More on this in the blog{" "}
                    <Link to="/journal/website-onderhoud">What does website maintenance include</Link>.
                </p>

                <h2>How to choose</h2>
                <p>
                    Three questions help. Does the site need to get online without hassle and with a low entry
                    price? Then a subscription. Is it a larger or custom-built site, and does a one-off investment
                    suit better? Then a package. And do texts need to be editable by the client? Then a CMS, in
                    both cases.
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
        title: "WordPress ou sur mesure ? Toujours sur mesure, en abonnement ou en forfait",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 4,
        shareText: "WordPress ou sur mesure ? Chez ManonIT, c'est toujours du sur mesure. Le choix porte sur le mode de paiement.",
        Body: () => (
            <>
                <p className="lead">
                    La question « WordPress ou sur mesure ? » relève d'une vieille opposition. Chaque site ManonIT
                    est du sur mesure : un design propre, des textes propres, construit pour un seul client. Le
                    choix qui compte vraiment est autre : comment le site est payé, et quelle technique convient.
                </p>

                <h2>Toujours sur mesure</h2>
                <p>
                    Même un site WordPress n'est pas un thème standard aux couleurs changées. Le design et les
                    textes sont créés pour la marque et ses visiteurs. La technique en dessous est un moyen, pas
                    un point de départ.
                </p>

                <h2>Deux façons de payer</h2>
                <ul>
                    <li><strong>Abonnement :</strong> une mise en route unique et un montant fixe par mois, dès 39 € par mois. L'hébergement, les mises à jour de sécurité, les sauvegardes et les petites modifications sont inclus. La durée est de 24 mois, après quoi le site appartient au client.</li>
                    <li><strong>Forfait (projet) :</strong> en une fois, à prix fixe annoncé d'avance, dès 1 200 €. Sans durée. La maintenance est facultative.</li>
                </ul>
                <p>
                    La différence est présentée clairement sur la <Link to="/tarieven">page des tarifs</Link>. Tous
                    les prix sont hors TVA.
                </p>

                <h2>Quelle technique convient</h2>
                <p>
                    <strong>WordPress ou un autre CMS</strong> convient quand textes, photos et blog doivent être
                    gérés par le client. C'est ainsi que j'ai construit{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link> : calme, rapide à lire et facile à
                    mettre à jour.
                </p>
                <p>
                    <strong>Du code sur mesure</strong> convient quand le site doit faire plus qu'informer :
                    connexion, paiements ou liens avec d'autres systèmes. Exemple :{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, une application de location pour
                    logeuses, construite avec Spring Boot et OAuth2.
                </p>

                <h2>Ce que cela change pour la maintenance</h2>
                <p>
                    WordPress demande des mises à jour régulières ; un plug-in obsolète est la cause la plus
                    fréquente d'un site piraté. Avec un abonnement, cette maintenance est incluse. Avec un forfait,
                    elle peut être ajoutée dès 120 € par mois. Plus d'informations dans le blog{" "}
                    <Link to="/journal/website-onderhoud">Que comprend la maintenance d'un site</Link>.
                </p>

                <h2>Comment choisir</h2>
                <p>
                    Trois questions aident. Le site doit-il être en ligne sans souci, avec un faible coût
                    d'entrée ? Alors un abonnement. S'agit-il d'un site plus complet ou construit sur mesure, et un
                    investissement unique convient-il mieux ? Alors un forfait. Et les textes doivent-ils être
                    modifiables par le client ? Alors un CMS, dans les deux cas.
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
        title: "WordPress oder Maßarbeit? Immer Maßarbeit, als Abonnement oder als Paket",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 4,
        shareText: "WordPress oder Maßarbeit? Bei ManonIT ist es immer Maßarbeit. Die Wahl liegt in der Bezahlung.",
        Body: () => (
            <>
                <p className="lead">
                    Die Frage „WordPress oder Maßarbeit?“ gehört zu einem alten Gegensatz. Jede ManonIT-Website
                    ist Maßarbeit: eigenes Design, eigene Texte, gebaut für einen einzelnen Auftraggeber. Die
                    Wahl, die wirklich zählt, ist eine andere: wie die Website bezahlt wird und welche Technik
                    passt.
                </p>

                <h2>Immer Maßarbeit</h2>
                <p>
                    Auch eine WordPress-Seite ist kein Standardtheme mit anderen Farben. Design und Texte werden
                    für die Marke und ihre Besucher gemacht. Die Technik darunter ist ein Mittel, kein
                    Ausgangspunkt.
                </p>

                <h2>Zwei Arten der Bezahlung</h2>
                <ul>
                    <li><strong>Abonnement:</strong> eine einmalige Einrichtung und ein fester Betrag pro Monat, ab 39 € pro Monat. Hosting, Sicherheitsupdates, Backups und kleine Änderungen sind enthalten. Die Laufzeit beträgt 24 Monate, danach gehört die Website dem Kunden.</li>
                    <li><strong>Paket (Projekt):</strong> einmalig, mit Festpreis im Voraus, ab 1.200 €. Keine Laufzeit. Wartung ist optional.</li>
                </ul>
                <p>
                    Der Unterschied ist auf der <Link to="/tarieven">Preisseite</Link> übersichtlich dargestellt.
                    Alle Preise verstehen sich ohne MwSt.
                </p>

                <h2>Welche Technik passt</h2>
                <p>
                    <strong>WordPress oder ein anderes CMS</strong> passt, wenn Texte, Fotos und Blog selbst
                    verwaltet werden sollen. So entstand{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: ruhig, schnell lesbar und
                    leicht zu pflegen.
                </p>
                <p>
                    <strong>Eigener Code</strong> passt, wenn die Website mehr leisten muss als informieren:
                    Login, Zahlungen oder Anbindungen an andere Systeme. Ein Beispiel ist{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, eine Vermietungs-App für Zimmerwirtinnen,
                    gebaut mit Spring Boot und OAuth2.
                </p>

                <h2>Was das für die Wartung bedeutet</h2>
                <p>
                    WordPress braucht regelmäßige Updates; ein veraltetes Plug-in ist die häufigste Ursache für
                    eine gehackte Seite. Beim Abonnement ist diese Wartung enthalten. Beim Paket kann sie ab 120 €
                    pro Monat hinzugenommen werden. Mehr dazu im Blog{" "}
                    <Link to="/journal/website-onderhoud">Was Website-Wartung umfasst</Link>.
                </p>

                <h2>So wählen Sie</h2>
                <p>
                    Drei Fragen helfen. Soll die Website ohne Aufwand und mit niedrigem Einstiegspreis online
                    gehen? Dann ein Abonnement. Ist sie umfangreich oder maßgeschneidert, und passt eine einmalige
                    Investition besser? Dann ein Paket. Und sollen Texte selbst änderbar sein? Dann ein CMS, in
                    beiden Fällen.
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
        title: "¿WordPress o a medida? Siempre a medida, como suscripción o como paquete",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 4,
        shareText: "¿WordPress o a medida? En ManonIT siempre es a medida. La elección está en cómo se paga.",
        Body: () => (
            <>
                <p className="lead">
                    La pregunta «¿WordPress o a medida?» pertenece a una oposición antigua. Cada sitio de ManonIT
                    es a medida: diseño propio, textos propios, construido para un solo cliente. La elección que
                    de verdad importa es otra: cómo se paga el sitio y qué tecnología encaja.
                </p>

                <h2>Siempre a medida</h2>
                <p>
                    Incluso un sitio WordPress no es una plantilla estándar con otros colores. El diseño y los
                    textos se crean para la marca y sus visitantes. La tecnología de debajo es un medio, no un
                    punto de partida.
                </p>

                <h2>Dos formas de pagar</h2>
                <ul>
                    <li><strong>Suscripción:</strong> una puesta en marcha única y una cuota fija al mes, desde 39 € al mes. Incluye alojamiento, actualizaciones de seguridad, copias de seguridad y cambios pequeños. La duración es de 24 meses; después el sitio es del cliente.</li>
                    <li><strong>Paquete (proyecto):</strong> de una vez, con precio fijo de antemano, desde 1.200 €. Sin duración. El mantenimiento es opcional.</li>
                </ul>
                <p>
                    La diferencia se muestra con claridad en la <Link to="/tarieven">página de tarifas</Link>. Todos
                    los precios excluyen IVA.
                </p>

                <h2>Qué tecnología encaja</h2>
                <p>
                    <strong>WordPress u otro CMS</strong> encaja cuando textos, fotos y blog debe gestionarlos el
                    cliente. Así construí{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquilo, rápido de leer y
                    fácil de actualizar.
                </p>
                <p>
                    <strong>Código propio</strong> encaja cuando el sitio debe hacer más que informar: acceso de
                    usuarios, pagos o conexiones con otros sistemas. Un ejemplo es{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, una app de alquiler para anfitrionas,
                    creada con Spring Boot y OAuth2.
                </p>

                <h2>Qué significa para el mantenimiento</h2>
                <p>
                    WordPress necesita actualizaciones periódicas; un plug-in desactualizado es la causa más común
                    de un sitio hackeado. Con suscripción, ese mantenimiento está incluido. Con paquete, puede
                    añadirse desde 120 € al mes. Más información en el blog{" "}
                    <Link to="/journal/website-onderhoud">Qué incluye el mantenimiento web</Link>.
                </p>

                <h2>Cómo elegir</h2>
                <p>
                    Tres preguntas ayudan. ¿Debe el sitio estar en línea sin complicaciones y con poca inversión
                    inicial? Entonces, suscripción. ¿Es un sitio más amplio o hecho a medida, y encaja mejor una
                    inversión única? Entonces, paquete. ¿Y deben poder editarse los textos? Entonces, un CMS, en
                    ambos casos.
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
        title: "WordPress o su misura? Sempre su misura, in abbonamento o come pacchetto",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 4,
        shareText: "WordPress o su misura? Da ManonIT è sempre su misura. La scelta sta nel modo di pagare.",
        Body: () => (
            <>
                <p className="lead">
                    La domanda «WordPress o su misura?» appartiene a una vecchia contrapposizione. Ogni sito
                    ManonIT è su misura: design proprio, testi propri, costruito per un solo cliente. La scelta
                    che conta davvero è un'altra: come si paga il sito e quale tecnologia è adatta.
                </p>

                <h2>Sempre su misura</h2>
                <p>
                    Anche un sito WordPress non è un tema standard con altri colori. Design e testi sono creati
                    per il marchio e i suoi visitatori. La tecnologia sotto è un mezzo, non un punto di partenza.
                </p>

                <h2>Due modi di pagare</h2>
                <ul>
                    <li><strong>Abbonamento:</strong> un avvio una tantum e un importo fisso al mese, da 39 € al mese. Hosting, aggiornamenti di sicurezza, backup e piccole modifiche sono inclusi. La durata è di 24 mesi, poi il sito è del cliente.</li>
                    <li><strong>Pacchetto (progetto):</strong> una tantum, con prezzo fisso in anticipo, da 1.200 €. Nessuna durata. La manutenzione è facoltativa.</li>
                </ul>
                <p>
                    La differenza è illustrata con chiarezza nella <Link to="/tarieven">pagina delle tariffe</Link>.
                    Tutti i prezzi sono IVA esclusa.
                </p>

                <h2>Quale tecnologia è adatta</h2>
                <p>
                    <strong>WordPress o un altro CMS</strong> è adatto quando testi, foto e blog devono essere
                    gestiti dal cliente. Così ho costruito{" "}
                    <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>: tranquillo, veloce da leggere e
                    facile da aggiornare.
                </p>
                <p>
                    <strong>Codice proprio</strong> è adatto quando il sito deve fare più che informare: accesso
                    utenti, pagamenti o collegamenti con altri sistemi. Un esempio è{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, un'app per gli affitti dedicata a chi
                    ospita studenti, costruita con Spring Boot e OAuth2.
                </p>

                <h2>Cosa significa per la manutenzione</h2>
                <p>
                    WordPress richiede aggiornamenti regolari; un plug-in obsoleto è la causa più comune di un sito
                    violato. Con l'abbonamento questa manutenzione è inclusa. Con il pacchetto si può aggiungere da
                    120 € al mese. Altre informazioni nel blog{" "}
                    <Link to="/journal/website-onderhoud">Cosa comprende la manutenzione di un sito</Link>.
                </p>

                <h2>Come scegliere</h2>
                <p>
                    Tre domande aiutano. Il sito deve andare online senza pensieri e con un basso costo iniziale?
                    Allora un abbonamento. È un sito più ampio o costruito su misura e un investimento unico è più
                    adatto? Allora un pacchetto. E i testi devono poter essere modificati dal cliente? Allora un
                    CMS, in entrambi i casi.
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
        title: "WordPress чи індивідуальне рішення? Завжди індивідуальне: підпискою або пакетом",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 4,
        shareText: "WordPress чи індивідуальне рішення? У ManonIT це завжди індивідуальна робота. Вибір — у способі оплати.",
        Body: () => (
            <>
                <p className="lead">
                    Питання «WordPress чи індивідуальне рішення?» належить до старої суперечності. Кожен сайт
                    ManonIT — це індивідуальна робота: власний дизайн, власні тексти, створено для одного
                    замовника. Справді важливий вибір інший: як оплачується сайт і яка технологія підходить.
                </p>

                <h2>Завжди індивідуально</h2>
                <p>
                    Навіть сайт на WordPress — не стандартна тема з іншими кольорами. Дизайн і тексти створюються
                    для бренду та його відвідувачів. Технологія під ними — засіб, а не відправна точка.
                </p>

                <h2>Два способи оплати</h2>
                <ul>
                    <li><strong>Підписка:</strong> разовий запуск і фіксована сума щомісяця, від 39 € на місяць. Хостинг, оновлення безпеки, резервні копії та дрібні зміни включено. Строк — 24 місяці, після чого сайт належить клієнтові.</li>
                    <li><strong>Пакет (проєкт):</strong> разово, з фіксованою ціною наперед, від 1 200 €. Без строку. Підтримка за бажанням.</li>
                </ul>
                <p>
                    Різницю наочно показано на <Link to="/tarieven">сторінці цін</Link>. Усі ціни без ПДВ.
                </p>

                <h2>Яка технологія підходить</h2>
                <p>
                    <strong>WordPress або інша CMS</strong> підходить, коли тексти, фото й блог має вести сам
                    клієнт. Так я створила <Link to="/webdesignacupuncture">Acupuncture by Saskia</Link>:
                    спокійний, зручний для читання й простий в оновленні.
                </p>
                <p>
                    <strong>Власний код</strong> підходить, коли сайт має робити більше, ніж інформувати: вхід
                    користувачів, платежі чи зв'язок з іншими системами. Приклад —{" "}
                    <Link to="/backendstudentendashboard">CasaCrew</Link>, застосунок для оренди, створений на
                    Spring Boot та OAuth2.
                </p>

                <h2>Що це означає для підтримки</h2>
                <p>
                    WordPress потребує регулярних оновлень; застарілий плагін — найчастіша причина зламаного
                    сайту. У підписці така підтримка включена. У пакеті її можна додати від 120 € на місяць.
                    Докладніше — у блозі <Link to="/journal/website-onderhoud">Що входить у підтримку сайту</Link>.
                </p>

                <h2>Як обрати</h2>
                <p>
                    Допоможуть три запитання. Чи має сайт вийти в мережу без клопоту й з невеликим стартовим
                    внеском? Тоді підписка. Чи це більший або індивідуально створений сайт, і чи краще підходить
                    разова інвестиція? Тоді пакет. А чи мають тексти редагуватися самостійно? Тоді CMS, в обох
                    випадках.
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
