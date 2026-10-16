import { Link } from "../../assets/Components/LocaleLink.jsx";
import BlogArticle from "./BlogArticle.jsx";

const content = {
    nl: {
        title: "Phishing herkennen: zo blijven website en mailbox veilig",
        date: "2026-10-16",
        dateLabel: "16 oktober 2026",
        minutes: 4,
        shareText: "Phishing herkennen en wat ik doe om websites veilig te houden",
        Body: () => (
            <>
                <p className="lead">
                    Wie een website heeft, krijgt vroeg of laat een mail die er officieel uitziet maar het niet is.
                    Een domein dat 'bijna verloopt', een site die 'gehackt' zou zijn, een factuur van een bedrijf
                    waar nooit mee is gewerkt. Dat is phishing: een nepbericht dat tot haastig klikken moet verleiden.
                </p>

                <h2>Waarom juist websiteklanten het krijgen</h2>
                <p>
                    Domeinnamen en bedrijfsgegevens staan openbaar in registers. Oplichters gebruiken die lijsten
                    om gericht mails te sturen over verlenging, beveiliging of vindbaarheid. Een kleine ondernemer,
                    een verhuurder of een maker heeft zelden een ICT-afdeling die meekijkt, en dat maakt de mail
                    overtuigend.
                </p>

                <h2>Vijf signalen dat een mail niet klopt</h2>
                <ul>
                    <li><strong>Het afzenderadres wijkt af.</strong> Niet alleen de naam telt, maar het adres erachter. Een mail 'van de bank' vanaf een gratis mailadres is nep.</li>
                    <li><strong>Er is haast.</strong> 'Binnen 24 uur', 'laatste waarschuwing', 'account wordt geblokkeerd'. Echte partijen werken zelden met zulke druk.</li>
                    <li><strong>De link gaat ergens anders heen.</strong> Met de muis boven de link (zonder klikken) verschijnt het echte adres. Klopt dat niet met de afzender, dan niet openen.</li>
                    <li><strong>Er wordt gevraagd om inloggegevens of een betaling.</strong> Wachtwoorden en pincodes horen nooit per mail of chat verstuurd te worden.</li>
                    <li><strong>Een onverwachte bijlage.</strong> Facturen als .zip, .html of .exe zijn bijna altijd kwaadaardig.</li>
                </ul>

                <h2>Wat te doen bij twijfel</h2>
                <p>
                    Niet klikken en niet antwoorden. Contact opnemen met de afzender via een kanaal dat al bekend
                    is, bijvoorbeeld het telefoonnummer op de eigen factuur, en niet via de mail zelf. Krijgt een
                    klant van mij zo'n bericht, dan mag het altijd doorgestuurd worden naar{" "}
                    <a href="mailto:lets@manonit.com">lets@manonit.com</a>. Ik kijk mee en zeg eerlijk of het
                    klopt.
                </p>

                <h2>Wat ik doe om websites veilig te houden</h2>
                <ul>
                    <li><strong>Beveiligde verbinding (SSL)</strong> op elke site, zodat bezoekers en formulieren versleuteld verbinden.</li>
                    <li><strong>Beveiligingsupdates</strong> zitten in het abonnement, omdat verouderde software de grootste kans op misbruik geeft.</li>
                    <li><strong>Dagelijkse back-ups.</strong> Gaat er iets mis, dan is een werkende versie snel terug.</li>
                    <li><strong>Monitoring</strong> bij onderhoudsabonnementen, zodat een storing direct opvalt.</li>
                    <li><strong>Domein op naam van de klant.</strong> Niemand anders kan het verlengen, overdragen of laten verlopen zonder dat de klant het weet.</li>
                    <li><strong>Cookie- en privacyverklaring volgens de AVG</strong> bij elke site.</li>
                </ul>

                <h2>Formulieren en contact via de website</h2>
                <p>
                    Ook een contactformulier kan een zwakke plek zijn: nepberichten, spam en bezoekers die persoonlijke gegevens invullen op een onveilige pagina. Zo bouw ik formulieren en contact:
                </p>
                <ul>
                    <li><strong>Verborgen spamveld (honeypot):</strong> geautomatiseerde berichten worden tegengehouden zonder dat bezoekers een puzzel hoeven op te lossen.</li>
                    <li><strong>Beveiligde verbinding:</strong> formuliergegevens gaan versleuteld (HTTPS) naar een beveiligde formulierdienst.</li>
                    <li><strong>Alleen wat nodig is:</strong> naam, e-mailadres en bericht. Een formulier vraagt nooit om een wachtwoord, pincode of betaalgegevens.</li>
                    <li><strong>Beperkte bewaartermijn:</strong> gegevens worden niet langer bewaard dan nodig (bij ManonIT maximaal een jaar), zoals in het privacybeleid staat.</li>
                    <li><strong>Serverinstellingen:</strong> beveiligingsheaders voorkomen dat de website in een nepsite wordt ingeladen en beperken welke scripts mogen draaien.</li>
                    <li><strong>Contact via WhatsApp of mail:</strong> antwoorden komen altijd van lets@manonit.com of via WhatsApp.</li>
                </ul>

                <h2>Een voorbeeld uit de praktijk</h2>
                <p>
                    Bij <Link to="/frontendvredestein">Villa Vredestein</Link> en{" "}
                    <Link to="/thebigthree">The Big Three</Link> staat het domein op naam van de eigenaar, draait
                    de site via een beveiligde verbinding, worden dagelijks back-ups gemaakt en hoort er een
                    overdrachtsdocument bij. Dat klinkt saai, en dat is precies de bedoeling: beveiliging hoort
                    zo geregeld te zijn dat er niemand over na hoeft te denken.
                </p>

                <h2>Zo is een mail van ManonIT te herkennen</h2>
                <p>
                    Berichten komen van <strong>lets@manonit.com</strong> of via WhatsApp. Ik vraag nooit om een
                    wachtwoord per mail en nooit om een betaling buiten een gewone factuur om. Twijfel? Een korte
                    appje is genoeg.
                </p>

                <h2>Eerlijk over de grenzen</h2>
                <p>
                    Geen enkele website is honderd procent veilig, en geen enkel mailfilter vangt alles. Goede
                    gewoontes, actuele software en back-ups maken het risico klein en de schade beperkt. Meer lezen
                    over wat erbij hoort? Kijk bij de <Link to="/faq">veelgestelde vragen</Link> of bij{" "}
                    <Link to="/tarieven#onderhoud">onderhoud</Link>.
                </p>
            </>
        ),
    },
    en: {
        title: "Spotting phishing: how to keep a website and mailbox safe",
        date: "2026-10-16",
        dateLabel: "16 October 2026",
        minutes: 4,
        shareText: "How to spot phishing, and what I do to keep websites safe",
        Body: () => (
            <>
                <p className="lead">
                    Anyone with a website sooner or later gets an email that looks official but isn't. A domain
                    that is 'about to expire', a site that was 'hacked', an invoice from a company you never
                    worked with. That is phishing: a fake message meant to make you click in a hurry.
                </p>

                <h2>Why website owners get them</h2>
                <p>
                    Domain names and company details are listed in public registers. Scammers use those lists to
                    send targeted emails about renewals, security or search ranking. A small business owner, a
                    holiday-home host or a maker rarely has an IT department looking over their shoulder, which
                    makes the email convincing.
                </p>

                <h2>Five signs an email is not right</h2>
                <ul>
                    <li><strong>The sender address is off.</strong> The name is not enough; check the address behind it. An email 'from the bank' sent from a free mail address is fake.</li>
                    <li><strong>There is a rush.</strong> 'Within 24 hours', 'final warning', 'account will be blocked'. Real companies rarely apply that pressure.</li>
                    <li><strong>The link goes somewhere else.</strong> Hover over the link (without clicking) to see the real address. If it doesn't match the sender, don't open it.</li>
                    <li><strong>It asks for login details or a payment.</strong> Passwords and PINs should never be sent by email or chat.</li>
                    <li><strong>An unexpected attachment.</strong> Invoices as .zip, .html or .exe files are almost always malicious.</li>
                </ul>

                <h2>What to do when in doubt</h2>
                <p>
                    Don't click and don't reply. Contact the sender through a channel you already know, such as
                    the phone number on your own invoice, not through the email itself. If a client of mine gets
                    a message like this, it can always be forwarded to{" "}
                    <a href="mailto:lets@manonit.com">lets@manonit.com</a>. I'll take a look and tell you
                    honestly whether it's genuine.
                </p>

                <h2>What I do to keep websites safe</h2>
                <ul>
                    <li><strong>Secure connection (SSL)</strong> on every site, so visitors and forms connect encrypted.</li>
                    <li><strong>Security updates</strong> are part of the subscription, because outdated software is the biggest risk.</li>
                    <li><strong>Daily backups.</strong> If something goes wrong, a working version is back quickly.</li>
                    <li><strong>Monitoring</strong> with maintenance plans, so a problem is noticed right away.</li>
                    <li><strong>Domain in the client's name.</strong> No one else can renew, transfer or let it expire without the client knowing.</li>
                    <li><strong>Cookie and privacy statement under the GDPR</strong> on every site.</li>
                </ul>

                <h2>Forms and contact through the website</h2>
                <p>
                    A contact form can also be a weak spot: fake messages, spam and visitors who enter personal details on an unsafe page. This is how I build forms and contact:
                </p>
                <ul>
                    <li><strong>Hidden spam field (honeypot):</strong> automated messages are stopped without visitors having to solve a puzzle.</li>
                    <li><strong>Secure connection:</strong> form data is sent encrypted (HTTPS) to a secure form service.</li>
                    <li><strong>Only what is needed:</strong> name, email address and message. A form never asks for a password, PIN or payment details.</li>
                    <li><strong>Limited retention:</strong> data is not kept longer than necessary (at ManonIT a maximum of one year), as stated in the privacy policy.</li>
                    <li><strong>Server settings:</strong> security headers prevent the website from being loaded inside a fake site and limit which scripts may run.</li>
                    <li><strong>Contact by WhatsApp or email:</strong> replies always come from lets@manonit.com or via WhatsApp.</li>
                </ul>

                <h2>An example from practice</h2>
                <p>
                    With <Link to="/frontendvredestein">Villa Vredestein</Link> and{" "}
                    <Link to="/thebigthree">The Big Three</Link> the domain is in the owner's name, the site runs
                    over a secure connection, backups are made daily and a handover document comes with it. That
                    sounds dull, and that is the point: security should be arranged so well that nobody has to
                    think about it.
                </p>

                <h2>How to recognise an email from ManonIT</h2>
                <p>
                    Messages come from <strong>lets@manonit.com</strong> or via WhatsApp. I never ask for a
                    password by email and never for a payment outside a regular invoice. In doubt? A quick
                    WhatsApp message is enough.
                </p>

                <h2>Honest about the limits</h2>
                <p>
                    No website is one hundred percent safe, and no mail filter catches everything. Good habits,
                    current software and backups keep the risk small and the damage limited. Want to read more
                    about what is included? See the <Link to="/faq">FAQ</Link> or{" "}
                    <Link to="/tarieven#onderhoud">maintenance</Link>.
                </p>
            </>
        ),
    },
    fr: {
        title: "Reconnaître le phishing : garder site web et messagerie en sécurité",
        date: "2026-10-16",
        dateLabel: "16 octobre 2026",
        minutes: 4,
        shareText: "Reconnaître le phishing et ce que je fais pour sécuriser les sites",
        Body: () => (
            <>
                <p className="lead">
                    Quiconque possède un site web reçoit tôt ou tard un e-mail d'apparence officielle qui ne
                    l'est pas : un domaine « sur le point d'expirer », un site « piraté », une facture d'une
                    entreprise avec laquelle on n'a jamais travaillé. C'est du phishing : un faux message conçu
                    pour pousser à cliquer dans la précipitation.
                </p>

                <h2>Pourquoi les propriétaires de sites sont ciblés</h2>
                <p>
                    Les noms de domaine et les données des entreprises figurent dans des registres publics. Les
                    escrocs s'en servent pour envoyer des e-mails ciblés sur un renouvellement, la sécurité ou le
                    référencement. Un petit entrepreneur, un loueur ou un créateur n'a presque jamais de service
                    informatique pour vérifier, et l'e-mail paraît donc convaincant.
                </p>

                <h2>Cinq signes qu'un e-mail est suspect</h2>
                <ul>
                    <li><strong>L'adresse de l'expéditeur est étrange.</strong> Le nom ne suffit pas, il faut regarder l'adresse. Un e-mail « de la banque » envoyé depuis une adresse gratuite est faux.</li>
                    <li><strong>On presse le destinataire.</strong> « Sous 24 heures », « dernier avertissement », « compte bloqué ». Les vrais prestataires font rarement pression ainsi.</li>
                    <li><strong>Le lien mène ailleurs.</strong> En survolant le lien sans cliquer, l'adresse réelle s'affiche. Si elle ne correspond pas à l'expéditeur, ne pas l'ouvrir.</li>
                    <li><strong>On demande des identifiants ou un paiement.</strong> Mots de passe et codes ne s'envoient jamais par e-mail ou par chat.</li>
                    <li><strong>Une pièce jointe inattendue.</strong> Des factures en .zip, .html ou .exe sont presque toujours malveillantes.</li>
                </ul>

                <h2>Que faire en cas de doute</h2>
                <p>
                    Ne pas cliquer et ne pas répondre. Contacter l'expéditeur par un canal déjà connu, par exemple
                    le numéro figurant sur sa propre facture, et non via l'e-mail lui-même. Si un client reçoit
                    un tel message, il peut toujours le transférer à{" "}
                    <a href="mailto:lets@manonit.com">lets@manonit.com</a>. Je regarde et je dis honnêtement si
                    c'est authentique.
                </p>

                <h2>Ce que je fais pour sécuriser les sites</h2>
                <ul>
                    <li><strong>Connexion sécurisée (SSL)</strong> sur chaque site, pour que visiteurs et formulaires soient chiffrés.</li>
                    <li><strong>Mises à jour de sécurité</strong> incluses dans l'abonnement, car un logiciel obsolète est le plus grand risque.</li>
                    <li><strong>Sauvegardes quotidiennes.</strong> En cas de problème, une version fonctionnelle revient vite.</li>
                    <li><strong>Surveillance</strong> avec les formules de maintenance, pour qu'une panne soit vue aussitôt.</li>
                    <li><strong>Domaine au nom du client.</strong> Personne d'autre ne peut le renouveler, le transférer ou le laisser expirer à son insu.</li>
                    <li><strong>Déclaration de cookies et de confidentialité conforme au RGPD</strong> sur chaque site.</li>
                </ul>

                <h2>Formulaires et contact via le site</h2>
                <p>
                    Un formulaire de contact peut aussi être un point faible : faux messages, spam et visiteurs qui saisissent des données personnelles sur une page peu sûre. Voici comment je construis formulaires et contact :
                </p>
                <ul>
                    <li><strong>Champ anti-spam caché (honeypot) :</strong> les messages automatisés sont bloqués sans que les visiteurs aient à résoudre une énigme.</li>
                    <li><strong>Connexion sécurisée :</strong> les données du formulaire sont envoyées chiffrées (HTTPS) vers un service de formulaires sécurisé.</li>
                    <li><strong>Seulement le nécessaire :</strong> nom, adresse e-mail et message. Un formulaire ne demande jamais de mot de passe, de code PIN ni de données de paiement.</li>
                    <li><strong>Durée de conservation limitée :</strong> les données ne sont pas conservées plus longtemps que nécessaire (chez ManonIT, un an maximum), comme indiqué dans la politique de confidentialité.</li>
                    <li><strong>Paramètres du serveur :</strong> les en-têtes de sécurité empêchent le site d'être chargé dans un faux site et limitent les scripts autorisés.</li>
                    <li><strong>Contact par WhatsApp ou e-mail :</strong> les réponses viennent toujours de lets@manonit.com ou via WhatsApp.</li>
                </ul>

                <h2>Un exemple concret</h2>
                <p>
                    Pour <Link to="/frontendvredestein">Villa Vredestein</Link> et{" "}
                    <Link to="/thebigthree">The Big Three</Link>, le domaine est au nom du propriétaire, le site
                    fonctionne en connexion sécurisée, des sauvegardes sont faites chaque jour et un document de
                    passation est remis. Cela paraît banal, et c'est voulu : la sécurité doit être réglée si bien
                    que personne n'a à y penser.
                </p>

                <h2>Comment reconnaître un e-mail de ManonIT</h2>
                <p>
                    Mes messages viennent de <strong>lets@manonit.com</strong> ou de WhatsApp. Je ne demande jamais
                    de mot de passe par e-mail ni de paiement en dehors d'une facture classique. Un doute ? Un
                    court message WhatsApp suffit.
                </p>

                <h2>Honnête sur les limites</h2>
                <p>
                    Aucun site n'est sûr à cent pour cent et aucun filtre n'arrête tout. De bonnes habitudes, des
                    logiciels à jour et des sauvegardes réduisent le risque et limitent les dégâts. Pour en savoir
                    plus, voir la <Link to="/faq">FAQ</Link> ou la <Link to="/tarieven#onderhoud">maintenance</Link>.
                </p>
            </>
        ),
    },
    de: {
        title: "Phishing erkennen: So bleiben Website und Postfach sicher",
        date: "2026-10-16",
        dateLabel: "16. Oktober 2026",
        minutes: 4,
        shareText: "Phishing erkennen und was ich für sichere Websites tue",
        Body: () => (
            <>
                <p className="lead">
                    Wer eine Website hat, bekommt früher oder später eine E-Mail, die offiziell aussieht, es aber
                    nicht ist: eine Domain, die „bald abläuft“, eine Website, die „gehackt“ wurde, eine Rechnung
                    von einer Firma, mit der man nie zu tun hatte. Das ist Phishing: eine gefälschte Nachricht, die
                    zu übereiltem Klicken verleiten soll.
                </p>

                <h2>Warum gerade Website-Besitzer betroffen sind</h2>
                <p>
                    Domainnamen und Firmendaten stehen in öffentlichen Registern. Betrüger nutzen diese Listen für
                    gezielte E-Mails zu Verlängerung, Sicherheit oder Auffindbarkeit. Kleine Unternehmen,
                    Vermieter und Kreative haben selten eine IT-Abteilung, die mitliest, und deshalb wirkt die
                    Mail überzeugend.
                </p>

                <h2>Fünf Anzeichen, dass eine Mail nicht stimmt</h2>
                <ul>
                    <li><strong>Die Absenderadresse weicht ab.</strong> Der Name allein zählt nicht, entscheidend ist die Adresse dahinter. Eine Mail „von der Bank“ von einer kostenlosen Adresse ist gefälscht.</li>
                    <li><strong>Es wird gedrängt.</strong> „Innerhalb von 24 Stunden“, „letzte Warnung“, „Konto wird gesperrt“. Seriöse Anbieter setzen selten so unter Druck.</li>
                    <li><strong>Der Link führt woanders hin.</strong> Wer mit der Maus über den Link fährt (ohne zu klicken), sieht die echte Adresse. Passt sie nicht zum Absender, nicht öffnen.</li>
                    <li><strong>Nach Zugangsdaten oder einer Zahlung wird gefragt.</strong> Passwörter und PINs gehören nie in eine Mail oder einen Chat.</li>
                    <li><strong>Ein unerwarteter Anhang.</strong> Rechnungen als .zip, .html oder .exe sind fast immer schädlich.</li>
                </ul>

                <h2>Was bei Zweifeln zu tun ist</h2>
                <p>
                    Nicht klicken und nicht antworten. Den Absender über einen bereits bekannten Weg kontaktieren,
                    etwa die Telefonnummer auf der eigenen Rechnung, nicht über die Mail selbst. Erhält ein Kunde
                    von mir so eine Nachricht, kann er sie jederzeit an{" "}
                    <a href="mailto:lets@manonit.com">lets@manonit.com</a> weiterleiten. Ich schaue nach und sage
                    ehrlich, ob sie echt ist.
                </p>

                <h2>Was ich für sichere Websites tue</h2>
                <ul>
                    <li><strong>Sichere Verbindung (SSL)</strong> auf jeder Website, damit Besucher und Formulare verschlüsselt verbunden sind.</li>
                    <li><strong>Sicherheitsupdates</strong> sind im Abonnement enthalten, denn veraltete Software ist das größte Risiko.</li>
                    <li><strong>Tägliche Backups.</strong> Geht etwas schief, ist schnell eine funktionierende Version zurück.</li>
                    <li><strong>Überwachung</strong> bei Wartungsabonnements, damit eine Störung sofort auffällt.</li>
                    <li><strong>Domain auf den Namen des Kunden.</strong> Niemand sonst kann sie verlängern, übertragen oder auslaufen lassen, ohne dass der Kunde es merkt.</li>
                    <li><strong>Cookie- und Datenschutzerklärung nach DSGVO</strong> bei jeder Website.</li>
                </ul>

                <h2>Formulare und Kontakt über die Website</h2>
                <p>
                    Auch ein Kontaktformular kann eine Schwachstelle sein: gefälschte Nachrichten, Spam und Besucher, die persönliche Daten auf einer unsicheren Seite eingeben. So baue ich Formulare und Kontakt:
                </p>
                <ul>
                    <li><strong>Verstecktes Spam-Feld (Honeypot):</strong> automatisierte Nachrichten werden abgefangen, ohne dass Besucher ein Rätsel lösen müssen.</li>
                    <li><strong>Sichere Verbindung:</strong> Formulardaten werden verschlüsselt (HTTPS) an einen sicheren Formulardienst gesendet.</li>
                    <li><strong>Nur das Nötige:</strong> Name, E-Mail-Adresse und Nachricht. Ein Formular fragt nie nach Passwort, PIN oder Zahlungsdaten.</li>
                    <li><strong>Begrenzte Speicherdauer:</strong> Daten werden nicht länger gespeichert als nötig (bei ManonIT höchstens ein Jahr), wie in der Datenschutzerklärung steht.</li>
                    <li><strong>Servereinstellungen:</strong> Sicherheits-Header verhindern, dass die Website in eine gefälschte Seite eingebettet wird, und begrenzen, welche Skripte laufen dürfen.</li>
                    <li><strong>Kontakt per WhatsApp oder Mail:</strong> Antworten kommen immer von lets@manonit.com oder über WhatsApp.</li>
                </ul>

                <h2>Ein Beispiel aus der Praxis</h2>
                <p>
                    Bei <Link to="/frontendvredestein">Villa Vredestein</Link> und{" "}
                    <Link to="/thebigthree">The Big Three</Link> steht die Domain auf den Namen der Eigentümer,
                    die Website läuft über eine sichere Verbindung, täglich werden Backups gemacht und eine
                    Übergabedokumentation gehört dazu. Das klingt langweilig, und genau das ist gewollt:
                    Sicherheit sollte so geregelt sein, dass niemand darüber nachdenken muss.
                </p>

                <h2>So ist eine Mail von ManonIT zu erkennen</h2>
                <p>
                    Nachrichten kommen von <strong>lets@manonit.com</strong> oder über WhatsApp. Ich frage nie per
                    Mail nach einem Passwort und nie nach einer Zahlung außerhalb einer normalen Rechnung. Unsicher?
                    Eine kurze WhatsApp-Nachricht genügt.
                </p>

                <h2>Ehrlich zu den Grenzen</h2>
                <p>
                    Keine Website ist hundertprozentig sicher, und kein Mailfilter fängt alles ab. Gute Gewohnheiten,
                    aktuelle Software und Backups halten das Risiko klein und den Schaden begrenzt. Mehr dazu in den{" "}
                    <Link to="/faq">häufigen Fragen</Link> oder unter <Link to="/tarieven#onderhoud">Wartung</Link>.
                </p>
            </>
        ),
    },
    es: {
        title: "Reconocer el phishing: cómo mantener seguros el sitio web y el correo",
        date: "2026-10-16",
        dateLabel: "16 de octubre de 2026",
        minutes: 4,
        shareText: "Cómo reconocer el phishing y qué hago para proteger los sitios web",
        Body: () => (
            <>
                <p className="lead">
                    Quien tiene un sitio web recibe tarde o temprano un correo que parece oficial y no lo es: un
                    dominio que «está a punto de caducar», un sitio «hackeado», una factura de una empresa con la
                    que nunca se ha trabajado. Eso es phishing: un mensaje falso pensado para que se haga clic con
                    prisa.
                </p>

                <h2>Por qué les llega a los dueños de sitios web</h2>
                <p>
                    Los nombres de dominio y los datos de las empresas figuran en registros públicos. Los
                    estafadores usan esas listas para enviar correos dirigidos sobre renovaciones, seguridad o
                    posicionamiento. Un pequeño empresario, un anfitrión de casas vacacionales o un creador casi
                    nunca tiene un departamento de informática que revise, y por eso el correo resulta creíble.
                </p>

                <h2>Cinco señales de que un correo no es de fiar</h2>
                <ul>
                    <li><strong>La dirección del remitente no cuadra.</strong> No basta el nombre; hay que mirar la dirección. Un correo «del banco» desde una dirección gratuita es falso.</li>
                    <li><strong>Hay prisa.</strong> «En 24 horas», «último aviso», «cuenta bloqueada». Las empresas serias rara vez presionan así.</li>
                    <li><strong>El enlace lleva a otro sitio.</strong> Al pasar el ratón por encima (sin hacer clic) aparece la dirección real. Si no coincide con el remitente, no abrirlo.</li>
                    <li><strong>Piden datos de acceso o un pago.</strong> Contraseñas y PIN nunca se envían por correo ni por chat.</li>
                    <li><strong>Un adjunto inesperado.</strong> Facturas en .zip, .html o .exe son casi siempre maliciosas.</li>
                </ul>

                <h2>Qué hacer ante la duda</h2>
                <p>
                    No hacer clic ni responder. Contactar con el remitente por un canal que ya se conozca, como el
                    teléfono de su propia factura, y no a través del correo. Si un cliente recibe un mensaje así,
                    puede reenviarlo siempre a <a href="mailto:lets@manonit.com">lets@manonit.com</a>. Lo reviso y
                    digo con honestidad si es auténtico.
                </p>

                <h2>Qué hago para mantener seguros los sitios</h2>
                <ul>
                    <li><strong>Conexión segura (SSL)</strong> en cada sitio, para que visitantes y formularios conecten cifrados.</li>
                    <li><strong>Actualizaciones de seguridad</strong> incluidas en la suscripción, porque el software desactualizado es el mayor riesgo.</li>
                    <li><strong>Copias de seguridad diarias.</strong> Si algo falla, una versión que funciona vuelve rápido.</li>
                    <li><strong>Monitorización</strong> en los planes de mantenimiento, para que una avería se note enseguida.</li>
                    <li><strong>Dominio a nombre del cliente.</strong> Nadie más puede renovarlo, transferirlo o dejarlo caducar sin que el cliente lo sepa.</li>
                    <li><strong>Declaración de cookies y privacidad conforme al RGPD</strong> en cada sitio.</li>
                </ul>

                <h2>Formularios y contacto a través del sitio</h2>
                <p>
                    Un formulario de contacto también puede ser un punto débil: mensajes falsos, spam y visitantes que introducen datos personales en una página poco segura. Así construyo formularios y contacto:
                </p>
                <ul>
                    <li><strong>Campo antispam oculto (honeypot):</strong> los mensajes automáticos se detienen sin que los visitantes tengan que resolver un acertijo.</li>
                    <li><strong>Conexión segura:</strong> los datos del formulario se envían cifrados (HTTPS) a un servicio de formularios seguro.</li>
                    <li><strong>Solo lo necesario:</strong> nombre, correo y mensaje. Un formulario nunca pide contraseña, PIN ni datos de pago.</li>
                    <li><strong>Conservación limitada:</strong> los datos no se guardan más tiempo del necesario (en ManonIT, un año como máximo), como indica la política de privacidad.</li>
                    <li><strong>Configuración del servidor:</strong> las cabeceras de seguridad impiden que el sitio se cargue dentro de uno falso y limitan qué scripts pueden ejecutarse.</li>
                    <li><strong>Contacto por WhatsApp o correo:</strong> las respuestas siempre llegan de lets@manonit.com o por WhatsApp.</li>
                </ul>

                <h2>Un ejemplo real</h2>
                <p>
                    En <Link to="/frontendvredestein">Villa Vredestein</Link> y{" "}
                    <Link to="/thebigthree">The Big Three</Link> el dominio está a nombre del propietario, el sitio
                    funciona con conexión segura, se hacen copias diarias y se entrega un documento de traspaso.
                    Suena aburrido, y esa es la idea: la seguridad debe estar tan bien resuelta que nadie tenga que
                    pensar en ella.
                </p>

                <h2>Cómo reconocer un correo de ManonIT</h2>
                <p>
                    Los mensajes llegan de <strong>lets@manonit.com</strong> o por WhatsApp. Nunca pido una
                    contraseña por correo ni un pago fuera de una factura normal. ¿Dudas? Basta un mensaje corto
                    por WhatsApp.
                </p>

                <h2>Honestidad sobre los límites</h2>
                <p>
                    Ningún sitio es cien por cien seguro y ningún filtro lo detecta todo. Buenos hábitos, software
                    al día y copias de seguridad mantienen el riesgo bajo y el daño limitado. Más información en
                    las <Link to="/faq">preguntas frecuentes</Link> o en <Link to="/tarieven#onderhoud">mantenimiento</Link>.
                </p>
            </>
        ),
    },
    it: {
        title: "Riconoscere il phishing: come tenere al sicuro sito web e posta",
        date: "2026-10-16",
        dateLabel: "16 ottobre 2026",
        minutes: 4,
        shareText: "Come riconoscere il phishing e cosa faccio per proteggere i siti",
        Body: () => (
            <>
                <p className="lead">
                    Chi ha un sito web prima o poi riceve un'e-mail che sembra ufficiale ma non lo è: un dominio
                    «in scadenza», un sito «hackerato», una fattura di un'azienda con cui non si è mai lavorato.
                    Questo è il phishing: un messaggio falso pensato per far cliccare di fretta.
                </p>

                <h2>Perché capita proprio ai proprietari di siti</h2>
                <p>
                    I nomi di dominio e i dati delle aziende sono in registri pubblici. I truffatori usano quegli
                    elenchi per inviare e-mail mirate su rinnovi, sicurezza o posizionamento. Un piccolo
                    imprenditore, chi affitta una casa vacanze o un creativo ha raramente un reparto informatico
                    che controlla, e così l'e-mail sembra credibile.
                </p>

                <h2>Cinque segnali che un'e-mail non è affidabile</h2>
                <ul>
                    <li><strong>L'indirizzo del mittente non torna.</strong> Non basta il nome, conta l'indirizzo. Una mail «della banca» da un indirizzo gratuito è falsa.</li>
                    <li><strong>C'è fretta.</strong> «Entro 24 ore», «ultimo avviso», «account bloccato». Le aziende serie raramente fanno pressione così.</li>
                    <li><strong>Il link porta altrove.</strong> Passando il mouse sul link (senza cliccare) compare l'indirizzo vero. Se non corrisponde al mittente, non aprirlo.</li>
                    <li><strong>Chiedono credenziali o un pagamento.</strong> Password e PIN non vanno mai inviati per e-mail o chat.</li>
                    <li><strong>Un allegato inatteso.</strong> Fatture in .zip, .html o .exe sono quasi sempre dannose.</li>
                </ul>

                <h2>Cosa fare in caso di dubbio</h2>
                <p>
                    Non cliccare e non rispondere. Contattare il mittente tramite un canale già noto, come il
                    numero di telefono sulla propria fattura, e non tramite l'e-mail stessa. Se un cliente riceve
                    un messaggio simile, può sempre inoltrarlo a{" "}
                    <a href="mailto:lets@manonit.com">lets@manonit.com</a>. Do un'occhiata e dico onestamente se è
                    autentico.
                </p>

                <h2>Cosa faccio per tenere sicuri i siti</h2>
                <ul>
                    <li><strong>Connessione sicura (SSL)</strong> su ogni sito, così visitatori e moduli sono cifrati.</li>
                    <li><strong>Aggiornamenti di sicurezza</strong> inclusi nell'abbonamento, perché il software obsoleto è il rischio maggiore.</li>
                    <li><strong>Backup giornalieri.</strong> Se qualcosa va storto, una versione funzionante torna rapidamente.</li>
                    <li><strong>Monitoraggio</strong> con i piani di manutenzione, così un guasto si nota subito.</li>
                    <li><strong>Dominio intestato al cliente.</strong> Nessun altro può rinnovarlo, trasferirlo o lasciarlo scadere senza che il cliente lo sappia.</li>
                    <li><strong>Informativa su cookie e privacy conforme al GDPR</strong> su ogni sito.</li>
                </ul>

                <h2>Moduli e contatto tramite il sito</h2>
                <p>
                    Anche un modulo di contatto può essere un punto debole: messaggi falsi, spam e visitatori che inseriscono dati personali in una pagina poco sicura. Ecco come costruisco moduli e contatto:
                </p>
                <ul>
                    <li><strong>Campo antispam nascosto (honeypot):</strong> i messaggi automatici vengono bloccati senza che i visitatori debbano risolvere un enigma.</li>
                    <li><strong>Connessione sicura:</strong> i dati del modulo vengono inviati cifrati (HTTPS) a un servizio di moduli sicuro.</li>
                    <li><strong>Solo il necessario:</strong> nome, indirizzo e-mail e messaggio. Un modulo non chiede mai password, PIN o dati di pagamento.</li>
                    <li><strong>Conservazione limitata:</strong> i dati non vengono conservati più a lungo del necessario (da ManonIT al massimo un anno), come indicato nell'informativa sulla privacy.</li>
                    <li><strong>Impostazioni del server:</strong> le intestazioni di sicurezza impediscono che il sito venga caricato dentro un sito falso e limitano gli script consentiti.</li>
                    <li><strong>Contatto via WhatsApp o e-mail:</strong> le risposte arrivano sempre da lets@manonit.com o via WhatsApp.</li>
                </ul>

                <h2>Un esempio concreto</h2>
                <p>
                    Per <Link to="/frontendvredestein">Villa Vredestein</Link> e{" "}
                    <Link to="/thebigthree">The Big Three</Link> il dominio è intestato al proprietario, il sito
                    funziona con connessione sicura, i backup si fanno ogni giorno e viene consegnato un documento
                    di passaggio. Sembra noioso, ed è proprio l'idea: la sicurezza deve essere sistemata così bene
                    che nessuno debba pensarci.
                </p>

                <h2>Come riconoscere una mail di ManonIT</h2>
                <p>
                    I messaggi arrivano da <strong>lets@manonit.com</strong> o via WhatsApp. Non chiedo mai una
                    password per e-mail né un pagamento al di fuori di una normale fattura. Dubbi? Basta un breve
                    messaggio su WhatsApp.
                </p>

                <h2>Onesti sui limiti</h2>
                <p>
                    Nessun sito è sicuro al cento per cento e nessun filtro blocca tutto. Buone abitudini, software
                    aggiornato e backup mantengono il rischio basso e i danni limitati. Per saperne di più, vedere
                    le <Link to="/faq">domande frequenti</Link> o la <Link to="/tarieven#onderhoud">manutenzione</Link>.
                </p>
            </>
        ),
    },
    uk: {
        title: "Як розпізнати фішинг: безпека сайту й пошти",
        date: "2026-10-16",
        dateLabel: "16 жовтня 2026",
        minutes: 4,
        shareText: "Як розпізнати фішинг і що я роблю для безпеки сайтів",
        Body: () => (
            <>
                <p className="lead">
                    Хто має сайт, рано чи пізно отримує лист, який виглядає офіційно, але не є таким: домен, що
                    «скоро закінчується», сайт, який «зламали», рахунок від компанії, з якою ніколи не працювали.
                    Це фішинг: фальшиве повідомлення, що має змусити клікнути поспіхом.
                </p>

                <h2>Чому це отримують саме власники сайтів</h2>
                <p>
                    Доменні імена та дані компаній є в публічних реєстрах. Шахраї використовують ці списки для
                    цілеспрямованих листів про продовження, безпеку чи пошукову видимість. Малий підприємець,
                    орендодавець або творець рідко має ІТ-відділ, який перевірить лист, тому він виглядає
                    переконливо.
                </p>

                <h2>П'ять ознак, що лист підозрілий</h2>
                <ul>
                    <li><strong>Адреса відправника дивна.</strong> Ім'я нічого не означає, важлива адреса. Лист «від банку» з безкоштовної адреси — підробка.</li>
                    <li><strong>Підганяють.</strong> «Протягом 24 годин», «останнє попередження», «акаунт заблокують». Справжні компанії рідко так тиснуть.</li>
                    <li><strong>Посилання веде в інше місце.</strong> Якщо навести курсор (не клікаючи), видно справжню адресу. Якщо вона не збігається з відправником, не відкривати.</li>
                    <li><strong>Просять дані для входу або оплату.</strong> Паролі та PIN-коди ніколи не надсилають поштою чи в чаті.</li>
                    <li><strong>Несподіване вкладення.</strong> Рахунки у форматі .zip, .html або .exe майже завжди шкідливі.</li>
                </ul>

                <h2>Що робити, якщо є сумніви</h2>
                <p>
                    Не клікати й не відповідати. Зв'язатися з відправником відомим каналом, наприклад за номером
                    телефону з власного рахунку, а не через сам лист. Якщо клієнт отримає таке повідомлення, його
                    завжди можна переслати на <a href="mailto:lets@manonit.com">lets@manonit.com</a>. Я перегляну
                    і чесно скажу, чи воно справжнє.
                </p>

                <h2>Що я роблю для безпеки сайтів</h2>
                <ul>
                    <li><strong>Захищене з'єднання (SSL)</strong> на кожному сайті, щоб відвідувачі й форми з'єднувалися зашифровано.</li>
                    <li><strong>Оновлення безпеки</strong> входять у підписку, бо застаріле програмне забезпечення — найбільший ризик.</li>
                    <li><strong>Щоденні резервні копії.</strong> Якщо щось піде не так, робоча версія швидко повертається.</li>
                    <li><strong>Моніторинг</strong> у планах підтримки, щоб збій було помітно одразу.</li>
                    <li><strong>Домен на ім'я клієнта.</strong> Ніхто інший не може продовжити, передати чи дати йому закінчитися без відома клієнта.</li>
                    <li><strong>Заява про cookie та конфіденційність за GDPR</strong> на кожному сайті.</li>
                </ul>

                <h2>Форми та контакт через сайт</h2>
                <p>
                    Контактна форма теж може бути слабким місцем: фальшиві повідомлення, спам і відвідувачі, які вводять особисті дані на небезпечній сторінці. Ось як я створюю форми й контакт:
                </p>
                <ul>
                    <li><strong>Прихований антиспам-поле (honeypot):</strong> автоматичні повідомлення блокуються, а відвідувачам не доводиться розв'язувати головоломки.</li>
                    <li><strong>Захищене з'єднання:</strong> дані форми надсилаються зашифровано (HTTPS) до захищеного сервісу форм.</li>
                    <li><strong>Лише необхідне:</strong> ім'я, e-mail і повідомлення. Форма ніколи не просить пароль, PIN-код чи платіжні дані.</li>
                    <li><strong>Обмежений строк зберігання:</strong> дані зберігаються не довше, ніж потрібно (у ManonIT — щонайбільше рік), як зазначено в політиці конфіденційності.</li>
                    <li><strong>Налаштування сервера:</strong> заголовки безпеки не дозволяють завантажити сайт усередині фальшивого та обмежують, які скрипти можуть працювати.</li>
                    <li><strong>Контакт через WhatsApp або пошту:</strong> відповіді завжди надходять з lets@manonit.com або через WhatsApp.</li>
                </ul>

                <h2>Приклад із практики</h2>
                <p>
                    У <Link to="/frontendvredestein">Villa Vredestein</Link> та{" "}
                    <Link to="/thebigthree">The Big Three</Link> домен записаний на власника, сайт працює через
                    захищене з'єднання, щодня створюються резервні копії, а до проєкту додається документ
                    передачі. Це звучить нудно, і в цьому суть: безпека має бути налагоджена так, щоб ніхто не
                    мусив про неї думати.
                </p>

                <h2>Як упізнати лист від ManonIT</h2>
                <p>
                    Повідомлення приходять з <strong>lets@manonit.com</strong> або через WhatsApp. Я ніколи не прошу
                    пароль поштою й ніколи не прошу оплату поза звичайним рахунком. Є сумніви? Досить короткого
                    повідомлення у WhatsApp.
                </p>

                <h2>Чесно про межі</h2>
                <p>
                    Жоден сайт не безпечний на сто відсотків, і жоден поштовий фільтр не ловить усе. Добрі звички,
                    актуальне програмне забезпечення й резервні копії зменшують ризик і обмежують шкоду. Більше
                    читайте в <Link to="/faq">поширених запитаннях</Link> або в розділі{" "}
                    <Link to="/tarieven#onderhoud">підтримка</Link>.
                </p>
            </>
        ),
    },
};

export default function PhishingBeveiliging() {
    return (
        <BlogArticle
            id="phishing-en-beveiliging"
            cover="/journal/blog-phishing"
            coverAlt="Illustratie: een e-mail aan een vishaak naast een schild met vinkje"
            coverHeight={800}
            content={content}
        />
    );
}
