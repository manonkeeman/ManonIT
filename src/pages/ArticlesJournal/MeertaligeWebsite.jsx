import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Een meertalige website laten maken: wat komt erbij kijken?",
        date: "2026-10-09",
        dateLabel: "9 oktober 2026",
        minutes: 4,
        shareText: "Wat komt er kijken bij een website in meerdere talen? Mijn ervaring met Villa Vredestein in zes talen.",
        Body: () => (
            <>
                <p className="lead">
                    Een website in meerdere talen klinkt groot, maar voor veel kleine bedrijven is het
                    haalbaar. Mijn eigen site staat in zeven talen, en de site van Villa Vredestein in zes.
                    Dit is wat ik daarvan geleerd heb.
                </p>

                <h2>Heb je het echt nodig?</h2>
                <p>
                    Begin met de vraag wie je bezoekers zijn. Verhuur je een vakantiehuis aan Duitsers of
                    Fransen? Dan scoort een site in hun eigen taal veel beter dan alleen Engels. Heb je een
                    lokaal bedrijf voor Nederlandse klanten? Dan is één taal genoeg en bespaar je geld en
                    onderhoud.
                </p>

                <h2>Wat er technisch bij hoort</h2>
                <ul>
                    <li>Een eigen URL per taal, bijvoorbeeld <code>/en/about</code>, zodat Google elke versie kan vinden.</li>
                    <li>Hreflang-tags, zodat zoekmachines weten welke taalversie bij welke bezoeker hoort.</li>
                    <li>Een taalkeuze op de site zelf, die onthouden wordt.</li>
                    <li>Vertaalde titels en beschrijvingen, niet alleen vertaalde pagina's.</li>
                </ul>
                <p>
                    Een veelgemaakte fout is alleen de zichtbare tekst vertalen. Dan blijft de titel in Google
                    Nederlands en komt de buitenlandse bezoeker niet op je pagina.
                </p>

                <h2>Vertalen: wat doet AI, wat doe ik</h2>
                <p>
                    AI maakt de eerste vertaling en bespaart veel tijd. Daarna controleer ik toon en vakwoorden.
                    Voor een vakantiehuis of een praktijk is dat verschil belangrijk: een tekst moet warm en
                    natuurlijk klinken, niet als een vertaalmachine. Heb je een taal waar je zelf niets van
                    snapt, laat dan altijd een moedertaalspreker meelezen.
                </p>

                <p>
                    Ik heb zelf in München gewoond en op mijn zestiende stage gelopen in Frankrijk. Daar hield ik een groepje vaste vrienden aan over, met wie ik nog steeds contact heb. Zo onderhoud ik mijn Duits en Frans. Dat helpt bij mijn werk: ik hoor meteen als een zin klopt maar niet klinkt zoals iemand het echt zegt. Beleefdheidsvormen, uitdrukkingen en toon (u of je, Sie of du, vous of tu) leer je niet uit een woordenboek. Bij die twee talen kan ik dus zelf controleren, in plaats van alleen op de vertaling te vertrouwen.
                </p>

                <h2>Wat het kost</h2>
                <p>
                    Elke extra taal betekent meer tekst om te vertalen, te controleren en later bij te houden.
                    Daarom reken ik meertaligheid mee in de offerte, meestal bij volledig maatwerk of een site
                    met CMS. Een tweede taal is overzichtelijk. Zes talen vraagt echt om een goede opzet. Mijn
                    tarieven staan op de <Link to="/tarieven">pagina Tarieven</Link>.
                </p>

                <h2>Het voorbeeld Villa Vredestein</h2>
                <p>
                    Villa Vredestein in Driebergen trekt gasten uit meerdere landen. Daarom staat die website in
                    zes talen. Lees het verhaal in{" "}
                    <Link to="/journal/website-villa-vredestein">Villa Vredestein: een huis met een verhaal</Link>
                    {" "}of bekijk het <Link to="/frontendvredestein">project</Link>.
                </p>

                <h2>Mijn advies</h2>
                <p>
                    Begin met de taal van je belangrijkste groep bezoekers, doe die goed, en voeg later talen
                    toe als je ziet dat er vraag is. Een halve vertaling is slechter dan geen.
                </p>
            </>
        ),
    },
    en: {
        title: "Getting a multilingual website: what does it involve?",
        date: "2026-10-09",
        dateLabel: "9 October 2026",
        minutes: 4,
        shareText: "What does a multilingual website involve? My experience with Villa Vredestein in six languages.",
        Body: () => (
            <>
                <p className="lead">
                    A website in several languages sounds big, but for many small businesses it is within
                    reach. My own site runs in seven languages, and the Villa Vredestein site in six. Here is
                    what I learned.
                </p>

                <h2>Do you really need it?</h2>
                <p>
                    Start by asking who your visitors are. Do you rent out a holiday home to German or French
                    guests? Then a site in their own language works far better than English alone. Do you run a
                    local business for Dutch clients? Then one language is enough and saves money and upkeep.
                </p>

                <h2>The technical side</h2>
                <ul>
                    <li>A separate URL per language, for example <code>/en/about</code>, so Google can find each version.</li>
                    <li>Hreflang tags, so search engines know which language version suits which visitor.</li>
                    <li>A language switch on the site itself that remembers the choice.</li>
                    <li>Translated titles and descriptions, not just translated pages.</li>
                </ul>
                <p>
                    A common mistake is translating only the visible text. Then the title in Google stays Dutch
                    and the foreign visitor never reaches your page.
                </p>

                <h2>Translating: what AI does, what I do</h2>
                <p>
                    AI makes the first translation and saves a lot of time. Then I check tone and technical
                    terms. For a holiday home or a practice that difference matters: a text should sound warm
                    and natural, not like a translation machine. If you don't speak a language yourself, always
                    have a native speaker read along.
                </p>

                <p>
                    I lived in Munich myself and did an internship in France when I was 16. That left me with a small group of lasting friends I am still in touch with, which is how I keep my German and French alive. It helps in my work: I hear at once when a sentence is correct but doesn't sound like something a person would really say. Forms of address, idioms and tone (Sie or du, vous or tu) are not something you learn from a dictionary. For those two languages I can check things myself instead of relying on the translation alone.
                </p>

                <h2>What it costs</h2>
                <p>
                    Every extra language means more text to translate, check and keep up to date later. That is
                    why I include multilingual work in the quote, usually with fully custom builds or a site
                    with CMS. A second language is manageable. Six languages needs a proper set-up. My rates are
                    on the <Link to="/tarieven">Pricing page</Link>.
                </p>

                <h2>The Villa Vredestein example</h2>
                <p>
                    Villa Vredestein in Driebergen hosts guests from several countries, which is why its website
                    runs in six languages. Read the story in{" "}
                    <Link to="/journal/website-villa-vredestein">Villa Vredestein: a house with a story</Link>
                    {" "}or see the <Link to="/frontendvredestein">project</Link>.
                </p>

                <h2>My advice</h2>
                <p>
                    Start with the language of your most important group of visitors, do it well, and add
                    languages later when you see demand. A half translation is worse than none.
                </p>
            </>
        ),
    },
    fr: {
        title: "Faire créer un site multilingue : que faut-il prévoir ?",
        date: "2026-10-09",
        dateLabel: "9 octobre 2026",
        minutes: 4,
        shareText: "Que faut-il prévoir pour un site multilingue ? Mon expérience avec Villa Vredestein en six langues.",
        Body: () => (
            <>
                <p className="lead">
                    Un site en plusieurs langues semble grand, mais pour beaucoup de petites
                    entreprises, c'est à portée de main. Mon propre site existe en sept langues, et
                    celui de Villa Vredestein en six. Voici ce que j'en ai appris.
                </p>

                <h2>En avez-vous vraiment besoin ?</h2>

                <p>
                    Commencez par vous demander qui sont vos visiteurs. Louez-vous une maison de
                    vacances à des Allemands ou des Français ? Alors un site dans leur langue
                    fonctionne bien mieux que l'anglais seul. Avez-vous une entreprise locale pour
                    des clients néerlandais ? Alors une langue suffit et vous économisez de l'argent
                    et de l'entretien.
                </p>

                <h2>Le côté technique</h2>

                <ul>
                    <li>Une URL propre à chaque langue, par exemple <code>/en/about</code>, pour que Google trouve chaque version.</li>
                    <li>Des balises hreflang, pour que les moteurs de recherche sachent quelle version convient à quel visiteur.</li>
                    <li>Un choix de langue sur le site lui-même, qui est mémorisé.</li>
                    <li>Des titres et descriptions traduits, pas seulement des pages traduites.</li>
                </ul>

                <p>
                    Une erreur fréquente est de ne traduire que le texte visible. Le titre dans
                    Google reste alors en néerlandais et le visiteur étranger n'arrive jamais sur
                    votre page.
                </p>

                <h2>Traduire : ce que fait l'IA, ce que je fais</h2>

                <p>
                    L'IA fait la première traduction et fait gagner beaucoup de temps. Ensuite, je
                    vérifie le ton et les termes spécialisés. Pour une maison de vacances ou un
                    cabinet, cette différence compte : un texte doit sonner chaleureux et naturel,
                    pas comme une machine à traduire. Si vous ne maîtrisez pas une langue, faites
                    toujours relire par un locuteur natif.
                </p>

                <p>
                    J'ai moi-même vécu à Munich et fait un stage en France à 16 ans. J'en ai gardé un petit groupe d'amis fidèles, avec qui je suis toujours en contact, et c'est ainsi que j'entretiens mon allemand et mon français. Cela aide dans mon travail : j'entends tout de suite quand une phrase est correcte mais ne sonne pas comme quelqu'un la dirait vraiment. Les formules de politesse, les expressions et le ton (Sie ou du, vous ou tu) ne s'apprennent pas dans un dictionnaire. Pour ces deux langues, je peux donc vérifier moi-même au lieu de me fier uniquement à la traduction.
                </p>

                <h2>Ce que ça coûte</h2>

                <p>
                    Chaque langue supplémentaire signifie plus de texte à traduire, à vérifier et à
                    tenir à jour. C'est pourquoi j'inclus le multilinguisme dans le devis, en
                    général pour du sur mesure complet ou un site avec CMS. Une deuxième langue
                    reste simple. Six langues demandent une vraie structure. Mes tarifs sont sur la
                    <Link to="/tarieven">page Tarifs</Link>.
                </p>

                <h2>L'exemple de Villa Vredestein</h2>

                <p>
                    Villa Vredestein, à Driebergen, accueille des hôtes de plusieurs pays, c'est
                    pourquoi son site existe en six langues. Lisez l'histoire dans <Link
                    to="/journal/website-villa-vredestein">Villa Vredestein : une maison avec une
                    histoire</Link> ou voyez le <Link to="/frontendvredestein">projet</Link>.
                </p>

                <h2>Mon conseil</h2>

                <p>
                    Commencez par la langue de votre groupe de visiteurs le plus important,
                    faites-le bien, puis ajoutez des langues quand vous voyez qu'il y a une demande.
                    Une demi-traduction est pire que pas de traduction.
                </p>
            </>
        ),
    },
    de: {
        title: "Eine mehrsprachige Website erstellen lassen: Was gehört dazu?",
        date: "2026-10-09",
        dateLabel: "9. Oktober 2026",
        minutes: 4,
        shareText: "Was gehört zu einer mehrsprachigen Website? Meine Erfahrung mit der Villa Vredestein in sechs Sprachen.",
        Body: () => (
            <>
                <p className="lead">
                    Eine Website in mehreren Sprachen klingt groß, ist für viele kleine Unternehmen
                    aber machbar. Meine eigene Seite gibt es in sieben Sprachen, die der Villa
                    Vredestein in sechs. Das habe ich dabei gelernt.
                </p>

                <h2>Brauchen Sie das wirklich?</h2>

                <p>
                    Fragen Sie sich zuerst, wer Ihre Besucher sind. Vermieten Sie ein Ferienhaus an
                    Deutsche oder Franzosen? Dann funktioniert eine Seite in deren Sprache viel
                    besser als nur Englisch. Haben Sie ein lokales Unternehmen für niederländische
                    Kunden? Dann reicht eine Sprache und Sie sparen Geld und Pflegeaufwand.
                </p>

                <h2>Die technische Seite</h2>

                <ul>
                    <li>Eine eigene URL pro Sprache, zum Beispiel <code>/en/about</code>, damit Google jede Version finden kann.</li>
                    <li>Hreflang-Tags, damit Suchmaschinen wissen, welche Sprachversion zu welchem Besucher passt.</li>
                    <li>Eine Sprachauswahl auf der Seite selbst, die gemerkt wird.</li>
                    <li>Übersetzte Titel und Beschreibungen, nicht nur übersetzte Seiten.</li>
                </ul>

                <p>
                    Ein häufiger Fehler ist, nur den sichtbaren Text zu übersetzen. Dann bleibt der
                    Titel in Google niederländisch und der ausländische Besucher landet nie auf
                    Ihrer Seite.
                </p>

                <h2>Übersetzen: Was die KI macht, was ich mache</h2>

                <p>
                    Die KI liefert die erste Übersetzung und spart viel Zeit. Danach prüfe ich Ton
                    und Fachbegriffe. Bei einem Ferienhaus oder einer Praxis ist dieser Unterschied
                    wichtig: Ein Text soll warm und natürlich klingen, nicht wie eine
                    Übersetzungsmaschine. Sprechen Sie eine Sprache selbst nicht, lassen Sie immer
                    einen Muttersprachler mitlesen.
                </p>

                <p>
                    Ich habe selbst in München gewohnt und mit 16 ein Praktikum in Frankreich gemacht. Daraus ist ein fester Freundeskreis entstanden, mit dem ich bis heute in Kontakt bin, und so halte ich mein Deutsch und Französisch lebendig. Das hilft bei meiner Arbeit: Ich höre sofort, wenn ein Satz richtig ist, aber nicht so klingt, wie ihn jemand wirklich sagen würde. Anredeformen, Redewendungen und Ton (Sie oder du, vous oder tu) lernt man nicht aus dem Wörterbuch. Bei diesen beiden Sprachen kann ich also selbst prüfen, statt mich nur auf die Übersetzung zu verlassen.
                </p>

                <h2>Was es kostet</h2>

                <p>
                    Jede zusätzliche Sprache bedeutet mehr Text, der übersetzt, geprüft und später
                    aktuell gehalten werden muss. Deshalb rechne ich Mehrsprachigkeit im Angebot
                    mit, meist bei kompletter Maßanfertigung oder einer Seite mit CMS. Eine zweite
                    Sprache ist überschaubar. Sechs Sprachen brauchen einen guten Aufbau. Meine
                    Preise stehen auf der <Link to="/tarieven">Seite Preise</Link>.
                </p>

                <h2>Das Beispiel Villa Vredestein</h2>

                <p>
                    Die Villa Vredestein in Driebergen hat Gäste aus mehreren Ländern, deshalb läuft
                    ihre Website in sechs Sprachen. Lesen Sie die Geschichte in <Link
                    to="/journal/website-villa-vredestein">Villa Vredestein: ein Haus mit
                    Geschichte</Link> oder sehen Sie sich das <Link
                    to="/frontendvredestein">Projekt</Link> an.
                </p>

                <h2>Mein Rat</h2>

                <p>
                    Beginnen Sie mit der Sprache Ihrer wichtigsten Besuchergruppe, machen Sie sie
                    gut, und ergänzen Sie später Sprachen, wenn Sie Nachfrage sehen. Eine halbe
                    Übersetzung ist schlechter als keine.
                </p>
            </>
        ),
    },
    es: {
        title: "Una web multilingüe: ¿qué hay que tener en cuenta?",
        date: "2026-10-09",
        dateLabel: "9 de octubre de 2026",
        minutes: 4,
        shareText: "¿Qué implica una web multilingüe? Mi experiencia con Villa Vredestein en seis idiomas.",
        Body: () => (
            <>
                <p className="lead">
                    Una web en varios idiomas suena grande, pero para muchas pequeñas empresas está
                    al alcance. Mi propia web está en siete idiomas, y la de Villa Vredestein en
                    seis. Esto es lo que aprendí.
                </p>

                <h2>¿Lo necesitas de verdad?</h2>

                <p>
                    Empieza preguntándote quiénes son tus visitantes. ¿Alquilas una casa de
                    vacaciones a alemanes o franceses? Entonces una web en su idioma funciona mucho
                    mejor que solo en inglés. ¿Tienes un negocio local para clientes neerlandeses?
                    Entonces con un idioma basta y ahorras dinero y mantenimiento.
                </p>

                <h2>El lado técnico</h2>

                <ul>
                    <li>Una URL propia por idioma, por ejemplo <code>/en/about</code>, para que Google pueda encontrar cada versión.</li>
                    <li>Etiquetas hreflang, para que los buscadores sepan qué versión corresponde a cada visitante.</li>
                    <li>Un selector de idioma en la propia web, que recuerde la elección.</li>
                    <li>Títulos y descripciones traducidos, no solo páginas traducidas.</li>
                </ul>

                <p>
                    Un error habitual es traducir solo el texto visible. Entonces el título en
                    Google sigue en neerlandés y el visitante extranjero nunca llega a tu página.
                </p>

                <h2>Traducir: qué hace la IA, qué hago yo</h2>

                <p>
                    La IA hace la primera traducción y ahorra mucho tiempo. Después reviso el tono y
                    los términos técnicos. Para una casa de vacaciones o una consulta esa diferencia
                    importa: un texto debe sonar cálido y natural, no como una máquina de traducir.
                    Si no hablas un idioma, pide siempre que lo lea un hablante nativo.
                </p>

                <p>
                    Yo misma viví en Múnich y hice unas prácticas en Francia a los 16 años. De ahí me quedó un pequeño grupo de amigos fijos con los que sigo en contacto, y así mantengo vivos mi alemán y mi francés. Eso ayuda en mi trabajo: oigo enseguida cuando una frase es correcta pero no suena como la diría alguien de verdad. Las formas de trato, las expresiones y el tono (Sie o du, vous o tu) no se aprenden en un diccionario. En esos dos idiomas puedo comprobarlo yo misma, en lugar de fiarme solo de la traducción.
                </p>

                <h2>Cuánto cuesta</h2>

                <p>
                    Cada idioma extra significa más texto que traducir, revisar y mantener al día.
                    Por eso incluyo la multilingüidad en el presupuesto, normalmente en proyectos a
                    medida o con CMS. Un segundo idioma es manejable. Seis idiomas requieren una
                    buena estructura. Mis tarifas están en la <Link to="/tarieven">página de Tarifas</Link>.
                </p>

                <h2>El ejemplo de Villa Vredestein</h2>

                <p>
                    Villa Vredestein, en Driebergen, recibe huéspedes de varios países, por eso su
                    web está en seis idiomas. Lee la historia en <Link
                    to="/journal/website-villa-vredestein">Villa Vredestein: una casa con
                    historia</Link> o mira el <Link to="/frontendvredestein">proyecto</Link>.
                </p>

                <h2>Mi consejo</h2>

                <p>
                    Empieza con el idioma de tu grupo de visitantes más importante, hazlo bien y
                    añade idiomas después, cuando veas que hay demanda. Una traducción a medias es
                    peor que ninguna.
                </p>
            </>
        ),
    },
    it: {
        title: "Un sito multilingue: cosa bisogna sapere?",
        date: "2026-10-09",
        dateLabel: "9 ottobre 2026",
        minutes: 4,
        shareText: "Cosa comporta un sito multilingue? La mia esperienza con Villa Vredestein in sei lingue.",
        Body: () => (
            <>
                <p className="lead">
                    Un sito in più lingue sembra grande, ma per molte piccole imprese è alla
                    portata. Il mio sito è in sette lingue, e quello di Villa Vredestein in sei.
                    Ecco cosa ho imparato.
                </p>

                <h2>Ti serve davvero?</h2>

                <p>
                    Parti chiedendoti chi sono i tuoi visitatori. Affitti una casa vacanze a
                    tedeschi o francesi? Allora un sito nella loro lingua funziona molto meglio del
                    solo inglese. Hai un'attività locale per clienti olandesi? Allora una lingua
                    basta e risparmi denaro e manutenzione.
                </p>

                <h2>Il lato tecnico</h2>

                <ul>
                    <li>Un URL proprio per ogni lingua, per esempio <code>/en/about</code>, così Google può trovare ogni versione.</li>
                    <li>Tag hreflang, così i motori di ricerca sanno quale versione è adatta a quale visitatore.</li>
                    <li>Una scelta della lingua sul sito stesso, che viene ricordata.</li>
                    <li>Titoli e descrizioni tradotti, non solo pagine tradotte.</li>
                </ul>

                <p>
                    Un errore frequente è tradurre solo il testo visibile. Allora il titolo su
                    Google resta in olandese e il visitatore straniero non arriva mai alla tua
                    pagina.
                </p>

                <h2>Tradurre: cosa fa l'IA, cosa faccio io</h2>

                <p>
                    L'IA fa la prima traduzione e fa risparmiare molto tempo. Poi controllo tono e
                    termini tecnici. Per una casa vacanze o uno studio questa differenza conta: un
                    testo deve suonare caldo e naturale, non come una macchina traduttrice. Se non
                    conosci una lingua, fai sempre leggere il testo a un madrelingua.
                </p>

                <p>
                    Ho vissuto io stessa a Monaco di Baviera e a 16 anni ho fatto uno stage in Francia. Me ne è rimasto un piccolo gruppo di amici fissi con cui sono ancora in contatto, ed è così che tengo vivi il mio tedesco e il mio francese. Aiuta nel mio lavoro: sento subito quando una frase è corretta ma non suona come la direbbe davvero una persona. Le forme di cortesia, le espressioni e il tono (Sie o du, vous o tu) non si imparano dal dizionario. In queste due lingue posso quindi controllare io stessa, invece di fidarmi solo della traduzione.
                </p>

                <h2>Quanto costa</h2>

                <p>
                    Ogni lingua in più significa più testo da tradurre, controllare e tenere
                    aggiornato. Per questo includo il multilinguismo nel preventivo, di solito con
                    un su misura completo o un sito con CMS. Una seconda lingua è gestibile. Sei
                    lingue richiedono una buona impostazione. Le mie tariffe sono nella <Link
                    to="/tarieven">pagina Tariffe</Link>.
                </p>

                <h2>L'esempio di Villa Vredestein</h2>

                <p>
                    Villa Vredestein a Driebergen ospita ospiti da più paesi, ecco perché il suo
                    sito è in sei lingue. Leggi la storia in <Link
                    to="/journal/website-villa-vredestein">Villa Vredestein: una casa con una
                    storia</Link> o guarda il <Link to="/frontendvredestein">progetto</Link>.
                </p>

                <h2>Il mio consiglio</h2>

                <p>
                    Parti dalla lingua del tuo gruppo di visitatori più importante, falla bene e
                    aggiungi lingue più avanti, quando vedi che c'è richiesta. Una traduzione a metà
                    è peggio di nessuna.
                </p>
            </>
        ),
    },
    uk: {
        title: "Багатомовний сайт: що потрібно врахувати?",
        date: "2026-10-09",
        dateLabel: "9 жовтня 2026",
        minutes: 4,
        shareText: "Що потрібно для багатомовного сайту? Мій досвід із Villa Vredestein шістьма мовами.",
        Body: () => (
            <>
                <p className="lead">
                    Сайт кількома мовами звучить масштабно, але для багатьох малих компаній це
                    цілком реально. Мій власний сайт існує сімома мовами, а сайт Villa Vredestein —
                    шістьма. Ось що я зрозуміла.
                </p>

                <h2>Чи справді він вам потрібен?</h2>

                <p>
                    Почніть із запитання, хто ваші відвідувачі. Ви здаєте будинок для відпочинку
                    німцям чи французам? Тоді сайт їхньою мовою працює набагато краще, ніж лише
                    англійською. Маєте місцевий бізнес для нідерландських клієнтів? Тоді вистачить
                    однієї мови, і ви заощадите гроші та зусилля на підтримку.
                </p>

                <h2>Технічна сторона</h2>

                <ul>
                    <li>Окрема URL-адреса для кожної мови, наприклад <code>/en/about</code>, щоб Google міг знайти кожну версію.</li>
                    <li>Теги hreflang, щоб пошукові системи знали, яка мовна версія підходить якому відвідувачеві.</li>
                    <li>Вибір мови на самому сайті, який запам'ятовується.</li>
                    <li>Перекладені заголовки та описи, а не лише перекладені сторінки.</li>
                </ul>

                <p>
                    Часта помилка — перекладати лише видимий текст. Тоді заголовок у Google
                    лишається нідерландським, і іноземний відвідувач ніколи не потрапляє на вашу
                    сторінку.
                </p>

                <h2>Переклад: що робить ШІ, а що я</h2>

                <p>
                    ШІ робить перший переклад і заощаджує багато часу. Потім я перевіряю тон і
                    професійні терміни. Для будинку відпочинку чи кабінету ця різниця важлива: текст
                    має звучати тепло й природно, а не як машинний переклад. Якщо ви самі не знаєте
                    мови, завжди просіть носія прочитати текст.
                </p>

                <p>
                    Я сама жила в Мюнхені й у 16 років проходила стажування у Франції. Звідти в мене залишилося невелике коло постійних друзів, з якими я досі на зв'язку, і так я підтримую німецьку та французьку. Це допомагає в роботі: я одразу чую, коли речення правильне, але звучить не так, як сказала б жива людина. Форми звертання, вислови й тон (Sie чи du, vous чи tu) не вивчиш зі словника. Тож у цих двох мовах я можу перевірити сама, а не покладатися лише на переклад.
                </p>

                <h2>Скільки це коштує</h2>

                <p>
                    Кожна додаткова мова — це більше тексту, який треба перекласти, перевірити й
                    пізніше підтримувати. Тому я враховую багатомовність у пропозиції, зазвичай для
                    повністю індивідуальних проєктів або сайтів із CMS. Друга мова — це зрозуміло й
                    керовано. Шість мов потребують продуманої структури. Мої тарифи — на <Link
                    to="/tarieven">сторінці «Тарифи»</Link>.
                </p>

                <h2>Приклад Villa Vredestein</h2>

                <p>
                    Villa Vredestein у Дрібергені приймає гостей із кількох країн, тому її сайт
                    шістьма мовами. Прочитайте історію в <Link
                    to="/journal/website-villa-vredestein">Villa Vredestein: дім з історією</Link>
                    або подивіться <Link to="/frontendvredestein">проєкт</Link>.
                </p>

                <h2>Моя порада</h2>

                <p>
                    Почніть із мови вашої найважливішої групи відвідувачів, зробіть це добре, а інші
                    мови додайте згодом, коли побачите попит. Половинчастий переклад гірший, ніж
                    жодного.
                </p>
            </>
        ),
    },
};

export default function MeertaligeWebsite() {
    return (
        <BlogArticle
            id="meertalige-website"
            cover="/journal/blog-meertalig"
            coverAlt="Illustratie: een wereldbol omringd door begroetingen in meerdere talen"
            coverHeight={800}
            content={content}
        />
    );
}
