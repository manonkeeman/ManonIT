import { Link } from "../../assets/Components/LocaleLink.jsx";
import { useTranslation } from "react-i18next";


import ArticleFooter from "../../assets/Components/ArticleFooter.jsx";

const bodies = {
    nl: () => (
        <>
            <p>
                Ik schrijf een boek dat nog geen boek is. Het is een verzameling scènes, losse fragmenten, momenten die me nooit meer
                losgelaten hebben. Soms schrijf ik een alinea alsof het een kort verhaal is, soms een losse flard van een herinnering
                die pas later een plek krijgt.
            </p>
            <p>
                Bij de Schrijversacademie in Amsterdam ontdekte mijn lerares Tanja Heimans, zelf schrijfster van onder andere{" "}
                <em>De Huurmoeder</em>, iets dat ik zelf niet durfde te geloven: dat ik talent had. Vooral de stukken waarin ik schreef
                over mijn jeugd raakten haar. Ze zei: "Dit is je stem. Hier zit je kracht." Zonder haar aanmoediging had ik dit project
                misschien nooit serieus genomen.
            </p>
            <p>Het resultaat is een boek dat nog onderweg is. Geen afgerond werk, maar een proces dat zichtbaar mag zijn. Een boek in wording.</p>
            <h2>Waarover ik schrijf</h2>
            <p>Over mijn jeugd. Over een moeder die de werkelijkheid naar haar hand zette, en over een kind dat leerde om daar doorheen te kijken. Over instanties die de verkeerde kant op keken, over kleine momenten die groot bleken te zijn, en over de absurditeit die ontstaat als niets is wat het lijkt.</p>
            <p>Dat klinkt zwaar, en soms is het dat ook. Maar veel scènes zijn vooral absurd. Zo absurd dat je er alleen nog om kunt lachen. Die zwarte humor is geen trucje. Het is hoe ik het heb overleefd, en hoe ik het nu kan vertellen.</p>
            <h2>Hoe ik schrijf</h2>
            <p>Ik schrijf in scènes, niet in hoofdstukken. Een geur, een zin die iemand zei, een voorwerp op de keukentafel: daar begint het. Vanuit dat ene beeld schrijf ik het moment uit, zo precies mogelijk, zonder uit te leggen wat het betekent. De lezer mag het zelf voelen.</p>
            <p>Niet elk fragment komt in één keer. Sommige staan er in een kwartier, andere laat ik lang liggen voordat ik ze durf af te maken. Ik schrap veel. Wat overblijft moet kloppen: geen woord te veel en geen emotie die ik de lezer opdring.</p>
            <p>De vorm van 365 fragmenten geeft me houvast. Ik hoef niet in één keer een heel leven te vertellen. Elke dag één moment. Samen vormen ze het verhaal, ook als ze niet op volgorde staan.</p>
            <blockquote>
                <strong>365 keer opnieuw beginnen</strong>
                <br />
                Sommige moeders bakken appeltaarten. De mijne bakte beschuldigingen. Ze sneed niet alleen groenten in de keuken, maar ook
                mijn reputatie bij instanties.
                <br /><br />
                Wat doe je met een jeugd vol bizarre scènes die eerder op een absurde film lijken dan op een familiegeschiedenis? Je
                schrijft ze op. Een voor elke dag. 365 keer.
                <br /><br />
                In dit boek vind je fragmenten die soms wrang, soms wat zwarte humor, en altijd ongelooflijk echt zijn. Van nagelriemen tot
                het moment dat mijn moeder me bij jeugdzorg aanmeldde als kindermishandelaar.
                <br /><br />
                Het is geen ode aan haar, maar een inventaris van de absurditeit. Een jaar lang opnieuw beginnen, niet omdat ik dat wilde,
                maar omdat het de enige manier was om te overleven.
            </blockquote>
            <p>
                Misschien is dit boek straks een roman, misschien een bundel fragmenten. Misschien blijft het iets ertussenin. Maar wat ik
                zeker weet: dit keer blijf ik schrijven. Niet om terug te kijken, maar om vooruit te bewegen. 365 keer.
            </p>
        </>
    ),
    en: () => (
        <>
            <p>
                I am writing a book that is not yet a book. It is a collection of scenes, loose fragments, moments that have never let
                go of me. Sometimes I write a paragraph as if it were a short story, sometimes a loose shred of a memory that will only
                find its place later.
            </p>
            <p>
                At the Writers Academy in Amsterdam, my teacher Tanja Heimans, herself the author of among other things{" "}
                <em>De Huurmoeder</em>, discovered something I did not dare believe myself: that I had talent. Especially the pieces in
                which I wrote about my childhood moved her. She said: "This is your voice. This is where your strength lies." Without
                her encouragement I might never have taken this project seriously.
            </p>
            <p>The result is a book still in progress. Not a finished work, but a process that is allowed to be visible. A book in the making.</p>
            <h2>What I write about</h2>
            <p>About my childhood. About a mother who bent reality to her will, and about a child who learned to see through it. About institutions that looked the wrong way, about small moments that turned out to be big, and about the absurdity that arises when nothing is what it seems.</p>
            <p>That sounds heavy, and sometimes it is. But many scenes are above all absurd. So absurd that all you can do is laugh. That dark humour isn't a trick. It's how I survived it, and how I can tell it now.</p>
            <h2>How I write</h2>
            <p>I write in scenes, not chapters. A smell, a sentence someone said, an object on the kitchen table: that's where it starts. From that one image I write out the moment, as precisely as I can, without explaining what it means. The reader gets to feel it.</p>
            <p>Not every fragment comes at once. Some are done in fifteen minutes, others I leave for a long time before I dare to finish them. I cut a lot. What remains has to be right: not one word too many, and no emotion forced on the reader.</p>
            <p>The form of 365 fragments gives me something to hold on to. I don't have to tell a whole life in one go. One moment a day. Together they form the story, even when they're not in order.</p>
            <blockquote>
                <strong>365 times starting over</strong>
                <br />
                Some mothers bake apple pies. Mine baked accusations. She did not only cut vegetables in the kitchen, but also my
                reputation at institutions.
                <br /><br />
                What do you do with a childhood full of bizarre scenes that resemble an absurd film more than a family history? You
                write them down. One for each day. 365 times.
                <br /><br />
                In this book you find fragments that are sometimes bitter, sometimes dark humour, and always incredibly real. From nail
                clippings to the moment my mother reported me to child services as a child abuser.
                <br /><br />
                It is not an ode to her, but an inventory of the absurdity. A year of starting over, not because I wanted to, but
                because it was the only way to survive.
            </blockquote>
            <p>
                Maybe this book will become a novel, maybe a bundle of fragments. Maybe it will stay something in between. But what I
                know for certain: this time I will keep writing. Not to look back, but to move forward. 365 times.
            </p>
        </>
    ),
    fr: () => (
        <>
            <p>
                J'écris un livre qui n'est pas encore un livre. C'est une collection de scènes, de fragments épars, de moments qui ne
                m'ont jamais quittée. Parfois j'écris un paragraphe comme si c'était une nouvelle, parfois un lambeau de souvenir qui
                ne trouvera sa place que plus tard.
            </p>
            <p>
                A l'Académie des écrivains d'Amsterdam, ma professeure Tanja Heimans, elle-même auteure notamment de{" "}
                <em>De Huurmoeder</em>, a découvert quelque chose que je n'osais pas croire moi-même: que j'avais du talent. Surtout
                les textes dans lesquels j'écrivais sur mon enfance la touchaient. Elle a dit: "C'est ta voix. C'est là que réside ta
                force." Sans ses encouragements, je n'aurais peut-être jamais pris ce projet au sérieux.
            </p>
            <p>Le résultat est un livre encore en cours. Pas une oeuvre achevée, mais un processus qui peut être visible. Un livre en devenir.</p>
            <h2>Ce sur quoi j'écris</h2>
            <p>Sur mon enfance. Sur une mère qui pliait la réalité à sa volonté, et sur une enfant qui a appris à voir au travers. Sur des institutions qui regardaient ailleurs, sur de petits moments qui se sont révélés immenses, et sur l'absurdité qui naît quand rien n'est ce qu'il paraît.</p>
            <p>Cela semble lourd, et parfois ça l'est. Mais beaucoup de scènes sont surtout absurdes. Si absurdes qu'on ne peut qu'en rire. Cet humour noir n'est pas un artifice. C'est ainsi que j'ai survécu, et c'est ainsi que je peux le raconter aujourd'hui.</p>
            <h2>Comment j'écris</h2>
            <p>J'écris en scènes, pas en chapitres. Une odeur, une phrase que quelqu'un a dite, un objet sur la table de la cuisine : tout part de là. À partir de cette seule image, j'écris le moment, aussi précisément que possible, sans expliquer ce qu'il signifie. Le lecteur peut le ressentir lui-même.</p>
            <p>Tous les fragments ne viennent pas d'un coup. Certains sont écrits en un quart d'heure, d'autres restent longtemps de côté avant que j'ose les terminer. Je coupe beaucoup. Ce qui reste doit être juste : pas un mot de trop, et aucune émotion imposée au lecteur.</p>
            <p>La forme des 365 fragments me donne un cadre. Je n'ai pas à raconter toute une vie d'un coup. Un moment par jour. Ensemble, ils forment l'histoire, même s'ils ne sont pas dans l'ordre.</p>
            <blockquote>
                <strong>365 fois recommencer</strong>
                <br />
                Certaines mères font des tartes aux pommes. La mienne faisait des accusations. Elle ne coupait pas seulement des légumes
                dans la cuisine, mais aussi ma réputation auprès des institutions.
                <br /><br />
                Que fait-on d'une enfance pleine de scènes bizarres qui ressemblent davantage à un film absurde qu'à une histoire
                familiale? On les écrit. Une pour chaque jour. 365 fois.
                <br /><br />
                Dans ce livre, vous trouverez des fragments parfois amers, parfois avec un humour noir, et toujours incroyablement
                vrais. Des ongles coupés au moment où ma mère m'a signalée à la protection de l'enfance comme maltraitante.
                <br /><br />
                Ce n'est pas une ode à elle, mais un inventaire de l'absurdité. Une année à recommencer, non pas parce que je le
                voulais, mais parce que c'était la seule façon de survivre.
            </blockquote>
            <p>
                Peut-être que ce livre deviendra un roman, peut-être un recueil de fragments. Peut-être restera-t-il quelque chose
                entre les deux. Mais ce que je sais avec certitude: cette fois je continuerai à écrire. Non pas pour regarder en
                arrière, mais pour aller de l'avant. 365 fois.
            </p>
        </>
    ),
    de: () => (
        <>
            <p>
                Ich schreibe ein Buch, das noch kein Buch ist. Es ist eine Sammlung von Szenen, losen Fragmenten, Momenten, die mich
                nie losgelassen haben. Manchmal schreibe ich einen Absatz, als wäre er eine Kurzgeschichte, manchmal ein loses Fetzen
                einer Erinnerung, die erst später einen Platz findet.
            </p>
            <p>
                An der Schriftstellerakademie in Amsterdam entdeckte meine Lehrerin Tanja Heimans, selbst Autorin unter anderem von{" "}
                <em>De Huurmoeder</em>, etwas, was ich selbst nicht zu glauben wagte: dass ich Talent hatte. Besonders die Stücke,
                in denen ich über meine Kindheit schrieb, berührten sie. Sie sagte: "Das ist deine Stimme. Hier liegt deine Stärke."
                Ohne ihre Ermutigung hätte ich dieses Projekt vielleicht nie ernsthaft betrieben.
            </p>
            <p>Das Ergebnis ist ein Buch, das noch unterwegs ist. Kein fertiges Werk, sondern ein Prozess, der sichtbar sein darf. Ein Buch im Entstehen.</p>
            <h2>Worüber ich schreibe</h2>
            <p>Über meine Kindheit. Über eine Mutter, die sich die Wirklichkeit zurechtbog, und über ein Kind, das lernte, hindurchzusehen. Über Behörden, die in die falsche Richtung schauten, über kleine Momente, die sich als groß herausstellten, und über die Absurdität, die entsteht, wenn nichts ist, wie es scheint.</p>
            <p>Das klingt schwer, und manchmal ist es das auch. Aber viele Szenen sind vor allem absurd. So absurd, dass man nur noch darüber lachen kann. Dieser schwarze Humor ist kein Trick. So habe ich es überlebt, und so kann ich es heute erzählen.</p>
            <h2>Wie ich schreibe</h2>
            <p>Ich schreibe in Szenen, nicht in Kapiteln. Ein Geruch, ein Satz, den jemand gesagt hat, ein Gegenstand auf dem Küchentisch: Dort fängt es an. Von diesem einen Bild aus schreibe ich den Moment aus, so genau wie möglich, ohne zu erklären, was er bedeutet. Der Leser darf ihn selbst fühlen.</p>
            <p>Nicht jedes Fragment kommt auf einmal. Manche stehen in einer Viertelstunde, andere lasse ich lange liegen, bevor ich mich traue, sie fertigzuschreiben. Ich streiche viel. Was bleibt, muss stimmen: kein Wort zu viel und keine Emotion, die ich dem Leser aufdränge.</p>
            <p>Die Form von 365 Fragmenten gibt mir Halt. Ich muss nicht auf einmal ein ganzes Leben erzählen. Jeden Tag ein Moment. Zusammen ergeben sie die Geschichte, auch wenn sie nicht in der richtigen Reihenfolge stehen.</p>
            <blockquote>
                <strong>365 mal neu anfangen</strong>
                <br />
                Manche Mütter backen Apfelkuchen. Meine buk Anschuldigungen. Sie schnitt in der Küche nicht nur Gemüse, sondern auch
                meinen Ruf bei Behörden.
                <br /><br />
                Was macht man mit einer Kindheit voller bizarrer Szenen, die eher einem absurden Film als einer Familiengeschichte
                ähneln? Man schreibt sie auf. Eine für jeden Tag. 365 Mal.
                <br /><br />
                In diesem Buch finden Sie Fragmente, die manchmal bitter, manchmal schwarzhumorig und immer unglaublich echt sind. Von
                Nagelresten bis zu dem Moment, als meine Mutter mich beim Jugendamt als Kindesmisshandlerin meldete.
                <br /><br />
                Es ist keine Ode an sie, sondern ein Inventar der Absurdität. Ein Jahr lang neu anfangen, nicht weil ich das wollte,
                sondern weil es der einzige Weg war zu überleben.
            </blockquote>
            <p>
                Vielleicht wird dieses Buch ein Roman, vielleicht ein Fragmentband. Vielleicht bleibt es etwas dazwischen. Aber was
                ich mit Sicherheit weiß: diesmal bleibe ich am Schreiben. Nicht um zurückzublicken, sondern um vorwärtszugehen.
                365 Mal.
            </p>
        </>
    ),
    es: () => (
        <>
            <p>
                Estoy escribiendo un libro que todavía no es un libro. Es una colección de escenas, fragmentos sueltos, momentos que
                nunca me han soltado. A veces escribo un párrafo como si fuera un cuento corto, a veces un trozo suelto de un recuerdo
                que solo encontrará su lugar más adelante.
            </p>
            <p>
                En la Academia de Escritores de Amsterdam, mi profesora Tanja Heimans, ella misma autora de entre otras cosas{" "}
                <em>De Huurmoeder</em>, descubrió algo que yo misma no me atrevía a creer: que tenía talento. Especialmente los textos
                en los que escribía sobre mi infancia la conmovían. Dijo: "Esta es tu voz. Aquí está tu fuerza." Sin su aliento, quizás
                nunca hubiera tomado este proyecto en serio.
            </p>
            <p>El resultado es un libro que aún está en camino. No una obra terminada, sino un proceso que puede ser visible. Un libro en construcción.</p>
            <h2>Sobre qué escribo</h2>
            <p>Sobre mi infancia. Sobre una madre que doblaba la realidad a su antojo, y sobre una niña que aprendió a ver a través de ella. Sobre instituciones que miraban hacia otro lado, sobre pequeños momentos que resultaron ser enormes, y sobre el absurdo que surge cuando nada es lo que parece.</p>
            <p>Suena duro, y a veces lo es. Pero muchas escenas son sobre todo absurdas. Tan absurdas que solo puedes reírte. Ese humor negro no es un truco. Es como lo sobreviví, y como puedo contarlo ahora.</p>
            <h2>Cómo escribo</h2>
            <p>Escribo en escenas, no en capítulos. Un olor, una frase que alguien dijo, un objeto sobre la mesa de la cocina: ahí empieza todo. Desde esa única imagen escribo el momento, con la mayor precisión posible, sin explicar lo que significa. El lector puede sentirlo por sí mismo.</p>
            <p>No todos los fragmentos salen de una vez. Algunos los escribo en un cuarto de hora, otros los dejo reposar mucho tiempo antes de atreverme a terminarlos. Tacho mucho. Lo que queda tiene que encajar: ni una palabra de más, ni una emoción impuesta al lector.</p>
            <p>La forma de 365 fragmentos me da un punto de apoyo. No tengo que contar toda una vida de golpe. Un momento al día. Juntos forman la historia, aunque no estén en orden.</p>
            <blockquote>
                <strong>365 veces empezar de nuevo</strong>
                <br />
                Algunas madres hornean tartas de manzana. La mía horneaba acusaciones. No solo cortaba verduras en la cocina, sino
                también mi reputación ante las instituciones.
                <br /><br />
                ¿Qué haces con una infancia llena de escenas bizarras que se parecen más a una película absurda que a una historia
                familiar? Las escribes. Una por cada día. 365 veces.
                <br /><br />
                En este libro encontrarás fragmentos que a veces son amargos, a veces con humor negro, y siempre increíblemente
                reales. Desde cutículas hasta el momento en que mi madre me denunció a los servicios de protección infantil como
                maltratadora.
                <br /><br />
                No es una oda a ella, sino un inventario de lo absurdo. Un año empezando de nuevo, no porque quisiera, sino porque
                era la única manera de sobrevivir.
            </blockquote>
            <p>
                Quizás este libro se convierta en una novela, quizás en una colección de fragmentos. Quizás se quede en algo
                intermedio. Pero lo que sé con certeza: esta vez seguiré escribiendo. No para mirar atrás, sino para avanzar.
                365 veces.
            </p>
        </>
    ),
    it: () => (
        <>
            <p>
                Sto scrivendo un libro che non e' ancora un libro. E' una raccolta di scene, frammenti sciolti, momenti che non mi
                hanno mai lasciato andare. A volte scrivo un paragrafo come se fosse un racconto breve, a volte un brandello sciolto
                di un ricordo che trovera' il suo posto solo piu' tardi.
            </p>
            <p>
                All'Accademia degli scrittori di Amsterdam, la mia insegnante Tanja Heimans, lei stessa autrice tra l'altro di{" "}
                <em>De Huurmoeder</em>, ha scoperto qualcosa che io stessa non osavo credere: che avevo talento. Specialmente i
                pezzi in cui scrivevo della mia infanzia la commovevano. Ha detto: "Questa e' la tua voce. Qui c'e' la tua forza."
                Senza il suo incoraggiamento forse non avrei mai preso sul serio questo progetto.
            </p>
            <p>Il risultato e' un libro ancora in corso. Non un'opera finita, ma un processo che puo' essere visibile. Un libro in divenire.</p>
            <h2>Di cosa scrivo</h2>
            <p>Della mia infanzia. Di una madre che piegava la realtà al suo volere, e di una bambina che ha imparato a guardarci attraverso. Di istituzioni che guardavano dall'altra parte, di piccoli momenti che si sono rivelati enormi, e dell'assurdità che nasce quando niente è come sembra.</p>
            <p>Sembra pesante, e a volte lo è. Ma molte scene sono soprattutto assurde. Così assurde che puoi solo riderne. Quell'umorismo nero non è un espediente. È il modo in cui sono sopravvissuta, e il modo in cui ora posso raccontarlo.</p>
            <h2>Come scrivo</h2>
            <p>Scrivo per scene, non per capitoli. Un odore, una frase detta da qualcuno, un oggetto sul tavolo della cucina: è da lì che parte tutto. Da quell'unica immagine scrivo il momento, con la massima precisione possibile, senza spiegare cosa significa. Il lettore può sentirlo da solo.</p>
            <p>Non tutti i frammenti arrivano subito. Alcuni li scrivo in un quarto d'ora, altri li lascio riposare a lungo prima di avere il coraggio di finirli. Taglio molto. Ciò che resta deve essere giusto: nessuna parola di troppo e nessuna emozione imposta al lettore.</p>
            <p>La forma dei 365 frammenti mi dà un appiglio. Non devo raccontare un'intera vita tutta insieme. Un momento al giorno. Insieme formano la storia, anche se non sono in ordine.</p>
            <blockquote>
                <strong>365 volte ricominciare</strong>
                <br />
                Alcune madri fanno le torte di mele. La mia faceva le accuse. Non tagliava solo le verdure in cucina, ma anche la
                mia reputazione presso le istituzioni.
                <br /><br />
                Cosa si fa con un'infanzia piena di scene bizzarre che assomigliano piu' a un film assurdo che a una storia di
                famiglia? Le si scrive. Una per ogni giorno. 365 volte.
                <br /><br />
                In questo libro troverai frammenti a volte amari, a volte con umorismo nero, e sempre incredibilmente reali. Dalle
                cuticole al momento in cui mia madre mi ha segnalato ai servizi sociali come maltrattante.
                <br /><br />
                Non e' un'ode a lei, ma un inventario dell'assurdita'. Un anno a ricominciare, non perche' lo volessi, ma perche'
                era l'unico modo per sopravvivere.
            </blockquote>
            <p>
                Forse questo libro diventer&agrave; un romanzo, forse una raccolta di frammenti. Forse resters qualcosa nel mezzo.
                Ma quello che so con certezza: questa volta continuo a scrivere. Non per guardare indietro, ma per andare avanti.
                365 volte.
            </p>
        </>
    ),
    uk: () => (
        <>
            <p>
                Я пишу книгу, яка ще не є книгою. Це збірка сцен, окремих фрагментів, моментів, що ніколи
                мене не відпускали. Іноді пишу абзац, ніби це коротке оповідання, іноді уривок спогаду,
                який знайде своє місце пізніше.
            </p>
            <p>
                У Школі письменників в Амстердамі моя вчителька Таня Хайманс, сама авторка, зокрема книги{" "}
                <em>De Huurmoeder</em>, помітила те, в що я сама боялася вірити: що я маю талант. Особливо
                її зворушували уривки про моє дитинство. Вона сказала: «Це твій голос. Тут твоя сила».
                Без її підтримки я б, мабуть, так і не поставилася серйозно до цього проєкту.
            </p>
            <p>Результат: книга в процесі. Не завершена робота, а процес, якому дозволено бути видимим. Книга в становленні.</p>
            <h2>Про що я пишу</h2>
            <p>Про своє дитинство. Про матір, яка перекроювала реальність під себе, і про дитину, яка навчилася бачити крізь це. Про установи, що дивилися не в той бік, про дрібні моменти, які виявилися великими, і про абсурд, що виникає, коли ніщо не є тим, чим здається.</p>
            <p>Звучить важко, і часом так і є. Але багато сцен передусім абсурдні. Настільки, що лишається тільки сміятися. Цей чорний гумор не прийом. Так я це пережила, і так можу розповісти про це тепер.</p>
            <h2>Як я пишу</h2>
            <p>Я пишу сценами, а не розділами. Запах, фраза, яку хтось сказав, предмет на кухонному столі: з цього все починається. Від цього одного образу я прописую момент якомога точніше, не пояснюючи, що він означає. Читач може відчути це сам.</p>
            <p>Не кожен фрагмент приходить одразу. Деякі з'являються за чверть години, інші я довго відкладаю, перш ніж наважуюся закінчити. Я багато викреслюю. Те, що лишається, має бути правдивим: жодного зайвого слова й жодних емоцій, нав'язаних читачеві.</p>
            <p>Форма з 365 фрагментів дає мені опору. Не треба розповідати ціле життя за один раз. Один момент на день. Разом вони складають історію, навіть якщо стоять не по порядку.</p>
            <blockquote>
                <strong>365 разів починати заново</strong>
                <br />
                Деякі матері печуть яблучні пироги. Моя пекла звинувачення. Вона різала не лише овочі на кухні,
                але й мою репутацію перед установами.
                <br /><br />
                Що робити з дитинством, повним дивних сцен, що більше схожі на абсурдне кіно, ніж на сімейну
                історію? Записуєш їх. По одній на кожен день. 365 разів.
                <br /><br />
                У цій книзі знайдеш фрагменти, що іноді гіркі, іноді з чорним гумором, і завжди неймовірно
                справжні. Від кутикул до моменту, коли моя мати подала на мене в органи опіки як на кривдника.
                <br /><br />
                Це не ода їй, а інвентар абсурду. Рік за роком починати заново, не тому що хотіла, а тому
                що це був єдиний спосіб вижити.
            </blockquote>
            <p>
                Можливо, ця книга стане романом, можливо, збіркою фрагментів. Можливо, залишиться чимось
                посередині. Але що знаю точно: цього разу продовжую писати. Не щоб дивитися назад, а щоб
                рухатися вперед. 365 разів.
            </p>
        </>
    ),
};

const ui = {
    nl: { back: "← Terug naar journal", date: "25 september 2025", read: "~6 min lezen", title: "Het boek in wording: 365 fragmenten van wat achterbleef en weer opnieuw begon", shareTitle: "365 fragmenten van wat er achterbleef en weer opnieuw begon", shareText: "Het boek in wording: fragmenten uit een verleden die eerder absurd dan gewoon was." },
    en: { back: "← Back to journal", date: "September 25, 2025", read: "~6 min read", title: "The Book in Progress: 365 Fragments of What Remained and Began Again", shareTitle: "365 fragments of what remained and began again", shareText: "The book in progress: fragments from a past that was more absurd than ordinary." },
    fr: { back: "← Retour au journal", date: "25 septembre 2025", read: "~6 min de lecture", title: "Le livre en devenir: 365 fragments de ce qui est reste et a recommence", shareTitle: "365 fragments de ce qui est reste et a recommence", shareText: "Le livre en devenir: fragments d'un passe plus absurde qu'ordinaire." },
    de: { back: "← Zurück zum Journal", date: "25. September 2025", read: "~6 Min. Lesezeit", title: "Das Buch im Entstehen: 365 Fragmente von dem, was blieb und neu begann", shareTitle: "365 Fragmente von dem, was blieb und neu begann", shareText: "Das Buch im Entstehen: Fragmente einer Vergangenheit, die eher absurd als gewohnlich war." },
    es: { back: "← Volver al diario", date: "25 de septiembre de 2025", read: "~6 min de lectura", title: "El libro en construccion: 365 fragmentos de lo que quedo y empezo de nuevo", shareTitle: "365 fragmentos de lo que quedo y empezo de nuevo", shareText: "El libro en construccion: fragmentos de un pasado mas absurdo que ordinario." },
    it: { back: "← Torna al journal", date: "25 settembre 2025", read: "~6 min di lettura", title: "Il libro in divenire: 365 frammenti di cio' che rimase e ricominciò", shareTitle: "365 frammenti di cio che rimase e ricominciò", shareText: "Il libro in divenire: frammenti di un passato piu' assurdo che ordinario." },
    uk: { back: "← Назад до журналу", date: "25 вересня 2025", read: "~6 хв читання", title: "Книга в становленні: 365 фрагментів того, що залишилося і почалося заново", shareTitle: "365 фрагментів того, що залишилося і почалося заново", shareText: "Книга в становленні: фрагменти минулого, більш абсурдного, ніж звичайного." },
};

export default function BoekArtikel() {
    const { t: tr, i18n } = useTranslation();
    const lang = i18n.language.split("-")[0];
    const t = ui[lang] || ui.en;
    const Body = bodies[lang] || bodies.en;
    const base = "/journal/cover365fragmenten";

    return (
        <section id="boek" className="section section-alt">
            <div className="container article-container">
                <Link to="/#journal" className="back-link">{t.back}</Link>
                <nav aria-label="Breadcrumb" className="breadcrumbs">
                    <Link to="/">{tr('nav.home')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <Link to="/#journal">{tr('nav.journal')}</Link>
                    <span className="breadcrumb-sep" aria-hidden="true">›</span>
                    <span aria-current="page">{t.shareTitle}</span>
                </nav>

                <figure className="story-cover story-cover--contain">
                    <picture>
                        <source type="image/avif" srcSet={`${base}-400w.avif 400w, ${base}-800w.avif 800w, ${base}-1200w.avif 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <source type="image/webp" srcSet={`${base}-400w.webp 400w, ${base}-800w.webp 800w, ${base}-1200w.webp 1200w`} sizes="(max-width: 920px) 100vw, 1200px" />
                        <img src={`${base}-800w.webp`} alt="Cover 365 keer opnieuw beginnen" loading="eager" fetchPriority="high" decoding="async" />
                    </picture>
                </figure>

                <header className="story-header">
                    <h1>{t.title}</h1>
                    <p className="small meta">
                        <time dateTime="2025-09-25">{t.date}</time> • {t.read}
                    </p>
                </header>

                <article className="story-body card">
                    <Body />
                </article>

                <ArticleFooter shareTitle={t.shareTitle} shareText={t.shareText} />
                <div className="story-back-bottom">
                    <Link to="/#journal" className="back-link">{t.back}</Link>
                </div>
            </div>

            <style>{`
        .story-back-bottom{margin-top:24px;padding-top:8px;border-top:1px solid var(--border);}
        .back-link{display:inline-block;margin:14px 0 8px;text-decoration:none;color:var(--accent-ink);}
        .back-link:hover{text-decoration:underline;}
        .article-container{max-width:72rem;margin:0 auto;padding:0 clamp(16px,3vw,48px);}
        .story-cover{margin:8px auto 16px;max-width:68ch;}
        .story-cover img{display:block;width:100%;border-radius:14px;}
        .story-cover--contain img{
          width:100%;
          height:auto;
          object-fit:contain;
          border-radius:14px;
          display:block;
        }
        .story-header{text-align:center;margin-bottom:12px;}
        .story-header h1{margin:8px 0 6px;line-height:1.15;}
        .meta{margin:0;color:var(--muted);}
        .story-body{
          max-width:68ch;margin:0 auto;
          padding:clamp(16px,2.2vw,24px);
          border:1px solid var(--border);
          border-radius:14px;
          background:var(--bg-alt);
          box-shadow:var(--shadow);
        }
        .story-body p{margin:0 0 12px;line-height:1.68;}
        .story-body blockquote{
          margin:20px 0;
          padding:16px;
          border-left:4px solid var(--accent);
          background:rgba(255,255,255,0.05);
          border-radius:8px;
          font-style:italic;
        }
      `}</style>
        </section>
    );
}