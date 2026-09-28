import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const SITE = "https://thebigthree.nl";

const content = {
    nl: {
        title: "Vrijheid en vertrouwen: een website bouwen voor The Big Three",
        date: "2026-09-28",
        dateLabel: "28 september 2026",
        minutes: 3,
        shareText: "Wat er gebeurt als een klant je de ruimte geeft: de website van The Big Three in Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Sommige opdrachten beginnen met een lijst eisen. Deze begon met een garage vol
                    Amerikaanse auto's en een eigenaar die zei: laat maar zien wat je ervan maakt.
                </p>

                <h2>Een garage met karakter</h2>
                <p>
                    The Big Three, in het Nederlands De Grote Drie, is een garage in Nunspeet voor
                    Amerikaanse auto's. Campers, pick-ups en klassiekers: David verkoopt ze, onderhoudt ze
                    en zet ze weer in de oude glorie. Hij werkte jarenlang in de Verenigde Staten, en dat
                    vakmanschap zie je terug in alles wat er in zijn werkplaats staat.
                </p>
                <p>
                    Zo'n bedrijf verdient geen standaard website met een paar foto's en een contactformulier.
                    Het verdient een site die voelt als de auto's zelf.
                </p>

                <h2>De ruimte om iets te maken</h2>
                <p>
                    David gaf me iets wat niet elke klant geeft: vrijheid. Geen dichtgetimmerde briefing, geen
                    tien voorbeelden van websites die hij mooi vond. Hij vertelde over zijn werk, zijn auto's
                    en zijn klanten, en vertrouwde erop dat ik daar iets goeds van zou maken.
                </p>
                <p>
                    Die vrijheid werd een donker ontwerp dat voelt als een filmposter. Stevige letters, rood,
                    wit en blauw als accent en grote beelden van de auto's. Op de homepage staat meteen een
                    knop om David te bellen, want zo doen zijn klanten zaken.
                </p>

                <h2>Vrijheid met een stevige basis</h2>
                <p>Onder dat stoere uiterlijk zit een website die gewoon zijn werk doet:</p>
                <ul>
                    <li>Een CMS, zodat David zelf voertuigen en teksten toevoegt zonder mij te bellen</li>
                    <li>SEO, zodat mensen die zoeken naar Amerikaanse auto's in de buurt hem vinden</li>
                    <li>Drie talen, Nederlands, Engels en Duits, want liefhebbers van Amerikaanse auto's zitten niet alleen in Nederland</li>
                    <li>Een site die op de telefoon net zo goed werkt als op een groot scherm</li>
                </ul>

                <h2>Wat een fijne samenwerking oplevert</h2>
                <p>
                    Het fijnste aan dit project was de samenwerking zelf. Korte lijnen, eerlijke reacties en
                    een klant die enthousiast werd van elke nieuwe stap. Als iets niet goed voelde, zei hij
                    dat. Als iets wel goed was, ook. Zo kom je samen snel tot iets waar je allebei trots op bent.
                </p>
                <p>
                    Wat ik ervan meeneem: vertrouwen levert beter werk op dan controle. Een klant die zijn
                    vak kent en de ruimte geeft aan het mijne, krijgt een website die niemand anders heeft.
                </p>

                <h2>Zelf kijken?</h2>
                <p>
                    Bekijk de website op{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> of lees meer over het
                    project op de <Link to="/thebigthree">projectpagina</Link>. Heb je zelf een bedrijf met
                    karakter dat een website verdient die daarbij past? Plan een gratis gesprek.
                </p>
            </>
        ),
    },
    en: {
        title: "Freedom and trust: building a website for The Big Three",
        date: "2026-09-28",
        dateLabel: "28 September 2026",
        minutes: 3,
        shareText: "What happens when a client gives you room to work: the website for The Big Three in Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Some projects start with a list of requirements. This one started with a garage full of
                    American cars and an owner who said: show me what you can make of it.
                </p>

                <h2>A garage with character</h2>
                <p>
                    The Big Three is a garage in Nunspeet for American cars. Campers, pick-ups and classics:
                    David sells them, services them and restores them to their former glory. He worked in the
                    United States for years, and you can see that craftsmanship in everything in his workshop.
                </p>
                <p>
                    A business like that doesn't deserve a standard website with a few photos and a contact
                    form. It deserves a site that feels like the cars themselves.
                </p>

                <h2>Room to create</h2>
                <p>
                    David gave me something not every client gives: freedom. No rigid brief, no ten example
                    websites he liked. He told me about his work, his cars and his customers, and trusted me
                    to turn that into something good.
                </p>
                <p>
                    That freedom became a dark design that feels like a movie poster. Bold type, red, white
                    and blue accents and big images of the cars. The homepage has a button to call David right
                    away, because that's how his customers do business.
                </p>

                <h2>Freedom on a solid foundation</h2>
                <p>Under that bold look is a website that simply does its job:</p>
                <ul>
                    <li>A CMS, so David adds vehicles and copy himself without calling me</li>
                    <li>SEO, so people looking for American cars nearby can find him</li>
                    <li>Three languages, Dutch, English and German, because fans of American cars aren't only in the Netherlands</li>
                    <li>A site that works just as well on a phone as on a big screen</li>
                </ul>

                <h2>What a good collaboration brings</h2>
                <p>
                    The best part of this project was the collaboration itself. Short lines, honest feedback
                    and a client who got excited about every new step. If something didn't feel right, he said
                    so. If it did, he said that too. That's how you quickly arrive at something you're both proud of.
                </p>
                <p>
                    What I take away from it: trust produces better work than control. A client who knows his
                    trade and gives room to mine gets a website nobody else has.
                </p>

                <h2>Take a look?</h2>
                <p>
                    Visit the website at{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> or read more on the{" "}
                    <Link to="/thebigthree">project page</Link>. Do you run a business with character that
                    deserves a website to match? Book a free intro call.
                </p>
            </>
        ),
    },
    de: {
        title: "Freiheit und Vertrauen: eine Website für The Big Three",
        date: "2026-09-28",
        dateLabel: "28. September 2026",
        minutes: 3,
        shareText: "Was passiert, wenn ein Kunde dir Raum gibt: die Website von The Big Three in Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Manche Aufträge beginnen mit einer Liste von Anforderungen. Dieser begann mit einer
                    Werkstatt voller amerikanischer Autos und einem Inhaber, der sagte: Zeig mir, was du daraus machst.
                </p>

                <h2>Eine Werkstatt mit Charakter</h2>
                <p>
                    The Big Three, auf Niederländisch De Grote Drie, ist eine Werkstatt in Nunspeet für
                    amerikanische Autos. Camper, Pick-ups und Klassiker: David verkauft, wartet und restauriert
                    sie. Er hat jahrelang in den USA gearbeitet, und dieses Handwerk sieht man in allem, was in
                    seiner Werkstatt steht.
                </p>
                <p>
                    So ein Betrieb verdient keine Standard-Website mit ein paar Fotos und einem Kontaktformular.
                    Er verdient eine Website, die sich anfühlt wie die Autos selbst.
                </p>

                <h2>Raum, etwas zu schaffen</h2>
                <p>
                    David gab mir etwas, das nicht jeder Kunde gibt: Freiheit. Kein starres Briefing, keine
                    zehn Beispiel-Websites. Er erzählte von seiner Arbeit, seinen Autos und seinen Kunden und
                    vertraute darauf, dass ich daraus etwas Gutes mache.
                </p>
                <p>
                    Aus dieser Freiheit wurde ein dunkles Design, das sich wie ein Filmplakat anfühlt. Kräftige
                    Schrift, Rot, Weiß und Blau als Akzente und große Bilder der Autos. Auf der Startseite gibt
                    es direkt einen Button, um David anzurufen, denn so machen seine Kunden Geschäfte.
                </p>

                <h2>Freiheit mit solidem Fundament</h2>
                <p>Unter dem markanten Look steckt eine Website, die einfach funktioniert:</p>
                <ul>
                    <li>Ein CMS, damit David Fahrzeuge und Texte selbst pflegt, ohne mich anzurufen</li>
                    <li>SEO, damit Menschen, die amerikanische Autos in der Nähe suchen, ihn finden</li>
                    <li>Drei Sprachen, Niederländisch, Englisch und Deutsch, denn Fans amerikanischer Autos gibt es nicht nur in den Niederlanden</li>
                    <li>Eine Website, die auf dem Handy genauso gut funktioniert wie auf einem großen Bildschirm</li>
                </ul>

                <h2>Was gute Zusammenarbeit bringt</h2>
                <p>
                    Das Schönste an diesem Projekt war die Zusammenarbeit selbst. Kurze Wege, ehrliches
                    Feedback und ein Kunde, der sich über jeden neuen Schritt freute. Wenn sich etwas nicht
                    richtig anfühlte, sagte er es. Wenn doch, auch. So kommt man schnell zu etwas, auf das beide stolz sind.
                </p>
                <p>
                    Was ich mitnehme: Vertrauen bringt bessere Arbeit als Kontrolle. Ein Kunde, der sein
                    Handwerk kennt und meinem Raum gibt, bekommt eine Website, die niemand sonst hat.
                </p>

                <h2>Selbst ansehen?</h2>
                <p>
                    Besuche die Website auf{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> oder lies mehr auf der{" "}
                    <Link to="/thebigthree">Projektseite</Link>. Hast du ein Unternehmen mit Charakter, das eine
                    passende Website verdient? Buche ein kostenloses Gespräch.
                </p>
            </>
        ),
    },
    fr: {
        title: "Liberté et confiance : un site web pour The Big Three",
        date: "2026-09-28",
        dateLabel: "28 septembre 2026",
        minutes: 3,
        shareText: "Ce qui se passe quand un client vous laisse de la place : le site de The Big Three à Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Certains projets commencent par une liste d'exigences. Celui-ci a commencé par un garage
                    rempli de voitures américaines et un propriétaire qui a dit : montre-moi ce que tu en fais.
                </p>

                <h2>Un garage qui a du caractère</h2>
                <p>
                    The Big Three, De Grote Drie en néerlandais, est un garage à Nunspeet spécialisé dans les
                    voitures américaines. Camping-cars, pick-ups et classiques : David les vend, les entretient
                    et les restaure. Il a travaillé de longues années aux États-Unis, et ce savoir-faire se
                    retrouve dans tout ce qui passe par son atelier.
                </p>
                <p>
                    Une telle entreprise ne mérite pas un site standard avec quelques photos et un formulaire
                    de contact. Elle mérite un site qui ressemble à ses voitures.
                </p>

                <h2>De la place pour créer</h2>
                <p>
                    David m'a donné ce que tous les clients ne donnent pas : de la liberté. Pas de cahier des
                    charges rigide, pas de dix sites d'exemple. Il m'a parlé de son métier, de ses voitures et
                    de ses clients, et m'a fait confiance pour en faire quelque chose de bien.
                </p>
                <p>
                    Cette liberté est devenue un design sombre qui fait penser à une affiche de cinéma.
                    Typographie forte, accents rouge, blanc et bleu et grandes images des voitures. Sur la page
                    d'accueil, un bouton permet d'appeler David directement, car c'est ainsi que ses clients travaillent.
                </p>

                <h2>La liberté sur des bases solides</h2>
                <p>Sous ce look affirmé se cache un site qui fait simplement son travail :</p>
                <ul>
                    <li>Un CMS, pour que David ajoute lui-même véhicules et textes sans m'appeler</li>
                    <li>Du SEO, pour que ceux qui cherchent des voitures américaines près de chez eux le trouvent</li>
                    <li>Trois langues, néerlandais, anglais et allemand, car les amateurs de voitures américaines ne sont pas qu'aux Pays-Bas</li>
                    <li>Un site qui fonctionne aussi bien sur téléphone que sur grand écran</li>
                </ul>

                <h2>Ce qu'apporte une bonne collaboration</h2>
                <p>
                    Le meilleur de ce projet, c'était la collaboration elle-même. Des échanges directs, des
                    retours honnêtes et un client enthousiaste à chaque nouvelle étape. Quand quelque chose ne
                    lui plaisait pas, il le disait. Quand ça lui plaisait, aussi. C'est comme ça qu'on arrive
                    vite à un résultat dont on est fiers tous les deux.
                </p>
                <p>
                    Ce que j'en retiens : la confiance donne un meilleur travail que le contrôle. Un client qui
                    connaît son métier et laisse de la place au mien obtient un site que personne d'autre n'a.
                </p>

                <h2>Envie de voir ?</h2>
                <p>
                    Découvrez le site sur{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> ou lisez-en plus sur la{" "}
                    <Link to="/thebigthree">page du projet</Link>. Vous avez une entreprise avec du caractère qui
                    mérite un site à sa hauteur ? Réservez un échange gratuit.
                </p>
            </>
        ),
    },
    es: {
        title: "Libertad y confianza: una web para The Big Three",
        date: "2026-09-28",
        dateLabel: "28 de septiembre de 2026",
        minutes: 3,
        shareText: "Qué pasa cuando un cliente te da espacio: la web de The Big Three en Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Algunos proyectos empiezan con una lista de requisitos. Este empezó con un taller lleno de
                    coches americanos y un dueño que dijo: enséñame qué puedes hacer con esto.
                </p>

                <h2>Un taller con carácter</h2>
                <p>
                    The Big Three, De Grote Drie en neerlandés, es un taller en Nunspeet de coches americanos.
                    Autocaravanas, pick-ups y clásicos: David los vende, los mantiene y los restaura. Trabajó
                    durante años en Estados Unidos, y ese oficio se nota en todo lo que pasa por su taller.
                </p>
                <p>
                    Un negocio así no merece una web estándar con unas fotos y un formulario de contacto.
                    Merece una web que se sienta como sus coches.
                </p>

                <h2>Espacio para crear</h2>
                <p>
                    David me dio algo que no todos los clientes dan: libertad. Nada de un briefing cerrado ni
                    diez webs de ejemplo. Me habló de su trabajo, sus coches y sus clientes, y confió en que yo
                    haría algo bueno con ello.
                </p>
                <p>
                    Esa libertad se convirtió en un diseño oscuro que parece un cartel de cine. Tipografía
                    potente, acentos rojo, blanco y azul e imágenes grandes de los coches. En la portada hay un
                    botón para llamar a David al momento, porque así hacen negocios sus clientes.
                </p>

                <h2>Libertad con una base sólida</h2>
                <p>Bajo ese aspecto potente hay una web que simplemente cumple su función:</p>
                <ul>
                    <li>Un CMS, para que David añada él mismo vehículos y textos sin llamarme</li>
                    <li>SEO, para que quien busque coches americanos cerca lo encuentre</li>
                    <li>Tres idiomas, neerlandés, inglés y alemán, porque los fans de los coches americanos no están solo en los Países Bajos</li>
                    <li>Una web que funciona igual de bien en el móvil que en una pantalla grande</li>
                </ul>

                <h2>Lo que aporta una buena colaboración</h2>
                <p>
                    Lo mejor de este proyecto fue la propia colaboración. Comunicación directa, opiniones
                    sinceras y un cliente que se ilusionaba con cada paso. Si algo no le convencía, lo decía.
                    Si le gustaba, también. Así se llega rápido a algo de lo que ambos estamos orgullosos.
                </p>
                <p>
                    Lo que me llevo: la confianza da mejor trabajo que el control. Un cliente que conoce su
                    oficio y deja espacio al mío recibe una web que nadie más tiene.
                </p>

                <h2>¿Quieres verla?</h2>
                <p>
                    Visita la web en{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> o lee más en la{" "}
                    <Link to="/thebigthree">página del proyecto</Link>. ¿Tienes un negocio con carácter que
                    merece una web a su altura? Reserva una llamada gratuita.
                </p>
            </>
        ),
    },
    it: {
        title: "Libertà e fiducia: un sito web per The Big Three",
        date: "2026-09-28",
        dateLabel: "28 settembre 2026",
        minutes: 3,
        shareText: "Cosa succede quando un cliente ti lascia spazio: il sito di The Big Three a Nunspeet.",
        Body: () => (
            <>
                <p className="lead">
                    Alcuni progetti iniziano con un elenco di requisiti. Questo è iniziato con un'officina
                    piena di auto americane e un titolare che ha detto: fammi vedere cosa ne tiri fuori.
                </p>

                <h2>Un'officina con carattere</h2>
                <p>
                    The Big Three, in olandese De Grote Drie, è un'officina a Nunspeet per auto americane.
                    Camper, pick-up e classiche: David le vende, le mantiene e le riporta all'antico splendore.
                    Ha lavorato per anni negli Stati Uniti, e quella maestria si vede in tutto ciò che passa
                    dalla sua officina.
                </p>
                <p>
                    Un'attività così non merita un sito standard con qualche foto e un modulo di contatto.
                    Merita un sito che trasmetta la stessa sensazione delle sue auto.
                </p>

                <h2>Spazio per creare</h2>
                <p>
                    David mi ha dato qualcosa che non tutti i clienti danno: libertà. Nessun brief rigido,
                    nessun elenco di dieci siti d'esempio. Mi ha raccontato il suo lavoro, le sue auto e i suoi
                    clienti, e si è fidato che ne avrei fatto qualcosa di buono.
                </p>
                <p>
                    Quella libertà è diventata un design scuro che ricorda un poster cinematografico.
                    Tipografia decisa, accenti rosso, bianco e blu e grandi immagini delle auto. In homepage c'è
                    subito un pulsante per chiamare David, perché è così che i suoi clienti fanno affari.
                </p>

                <h2>Libertà su basi solide</h2>
                <p>Sotto quell'aspetto grintoso c'è un sito che fa semplicemente il suo lavoro:</p>
                <ul>
                    <li>Un CMS, così David aggiunge da solo veicoli e testi senza chiamarmi</li>
                    <li>SEO, così chi cerca auto americane in zona lo trova</li>
                    <li>Tre lingue, olandese, inglese e tedesco, perché gli appassionati di auto americane non sono solo nei Paesi Bassi</li>
                    <li>Un sito che funziona bene sul telefono quanto su un grande schermo</li>
                </ul>

                <h2>Cosa porta una bella collaborazione</h2>
                <p>
                    La parte più bella di questo progetto è stata la collaborazione stessa. Contatti diretti,
                    feedback sinceri e un cliente entusiasta a ogni nuovo passo. Se qualcosa non lo convinceva,
                    lo diceva. Se gli piaceva, pure. Così si arriva in fretta a qualcosa di cui si è fieri entrambi.
                </p>
                <p>
                    Cosa porto con me: la fiducia produce un lavoro migliore del controllo. Un cliente che
                    conosce il suo mestiere e lascia spazio al mio ottiene un sito che nessun altro ha.
                </p>

                <h2>Vuoi vederlo?</h2>
                <p>
                    Visita il sito su{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> o leggi di più nella{" "}
                    <Link to="/thebigthree">pagina del progetto</Link>. Hai un'attività con carattere che merita
                    un sito all'altezza? Prenota un colloquio gratuito.
                </p>
            </>
        ),
    },
    uk: {
        title: "Свобода й довіра: сайт для The Big Three",
        date: "2026-09-28",
        dateLabel: "28 вересня 2026",
        minutes: 3,
        shareText: "Що буває, коли клієнт дає тобі простір: сайт The Big Three в Нунспіті.",
        Body: () => (
            <>
                <p className="lead">
                    Деякі проєкти починаються зі списку вимог. Цей почався з майстерні, повної американських
                    авто, і власника, який сказав: покажи, що ти з цього зробиш.
                </p>

                <h2>Майстерня з характером</h2>
                <p>
                    The Big Three, нідерландською De Grote Drie, це майстерня в Нунспіті для американських
                    авто. Кемпери, пікапи й класика: Девід їх продає, обслуговує й повертає до колишньої
                    слави. Він роками працював у США, і цю майстерність видно в усьому, що є в його майстерні.
                </p>
                <p>
                    Такий бізнес заслуговує не на стандартний сайт із кількома фото й контактною формою, а на
                    сайт, який відчувається як самі ці авто.
                </p>

                <h2>Простір для творчості</h2>
                <p>
                    Девід дав мені те, що дає не кожен клієнт: свободу. Жодного жорсткого брифу, жодних десяти
                    прикладів сайтів. Він розповів про свою роботу, авто й клієнтів і довірився мені, що я
                    зроблю з цього щось добре.
                </p>
                <p>
                    Ця свобода перетворилася на темний дизайн, що нагадує кіноафішу. Виразні шрифти,
                    червоний, білий і синій як акценти та великі фото авто. На головній одразу є кнопка, щоб
                    зателефонувати Девіду, бо саме так працюють його клієнти.
                </p>

                <h2>Свобода на міцній основі</h2>
                <p>Під цим сміливим виглядом ховається сайт, який просто робить свою справу:</p>
                <ul>
                    <li>CMS, щоб Девід сам додавав авто й тексти, не телефонуючи мені</li>
                    <li>SEO, щоб його знаходили ті, хто шукає американські авто поруч</li>
                    <li>Три мови, нідерландська, англійська й німецька, бо шанувальники американських авто є не лише в Нідерландах</li>
                    <li>Сайт, що однаково добре працює на телефоні й на великому екрані</li>
                </ul>

                <h2>Що дає приємна співпраця</h2>
                <p>
                    Найкращим у цьому проєкті була сама співпраця. Коротка комунікація, чесні відгуки й
                    клієнт, який радів кожному новому кроку. Якщо щось не подобалося, він казав. Якщо
                    подобалося, теж. Так швидко доходиш до результату, яким пишаються обоє.
                </p>
                <p>
                    Що я з цього виношу: довіра дає кращу роботу, ніж контроль. Клієнт, який знає свою справу
                    й дає простір моїй, отримує сайт, якого немає ні в кого іншого.
                </p>

                <h2>Хочете подивитися?</h2>
                <p>
                    Відвідайте сайт{" "}
                    <a href={SITE} target="_blank" rel="noreferrer">thebigthree.nl</a> або читайте більше на{" "}
                    <Link to="/thebigthree">сторінці проєкту</Link>. Маєте бізнес із характером, що заслуговує
                    на відповідний сайт? Заплануйте безкоштовну розмову.
                </p>
            </>
        ),
    },
};

export default function SamenwerkingTheBigThree() {
    return (
        <BlogArticle
            id="samenwerking-the-big-three"
            cover="/Portfolio/de-grote-drie-mockup"
            coverAlt="Website The Big Three op desktop en mobiel"
            coverHeight={800}
            content={content}
        />
    );
}
