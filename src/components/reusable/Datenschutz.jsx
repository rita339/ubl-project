import { useEffect } from "react";
import "./Datenschutz.css";

export const Datenschutz = () => {
  const email = "brunobarth@web.de";
  const tel = "0240683125";

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="Datenschutz">
      <h1>Datenschutzerklärung</h1>
      <article className="datenschutz-group">
        <h2>
          Name und Kontaktdaten des für die Verarbeitung des Verantwortlichen
        </h2>
        <p>
          Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
        </p>
        <ul className="datenschutz-header">
          <h4>Unabhängige Bürgerliste Herzogenrath (UBL)</h4>
          <li>Rathaus Herzogenrath </li>
          <li>Rathausplatz 1</li>
          <li>52134 Herzogenrath</li>
          <li>Deutschland</li>

          <div className="email-link-container">
            <p>E-Mail:</p>
            <a href={`mailto:${email}`}> {email} </a>
          </div>
          <div className="tel-link-container">
            <p>Telefon:</p>
            <a href={`tel:${tel}`}> 02406 / 83-125 </a>
          </div>
        </ul>

        <div className="datenschutz-person">
          <strong>Verantwortlicher: </strong>
          <p>Bruno Barth</p>
        </div>
      </article>

      <article className="datenschutz-group">
        <h2>
          Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck
          von deren Verwendung
        </h2>
        <h3>Beim Besuch der Website</h3>
        <p>
          Beim Aufrufen unserer Website{" "}
          <a
            href="http://www.ubl-2020.de"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="link-datenschutz"
          >
            www.ubl-2020.de
          </a>{" "}
          werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser
          automatisch Informationen an den Server unserer Website gesendet.
          Diese Informationen werden temporär in einem sog. Logfile gespeichert.
          Die Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 S. 1
          lit. f DSGVO. Unser berechtigtes Interesse folgt aus oben
          aufgelisteten Zwecken zur Datenerhebung.
        </p>

        <p>
          Folgende Informationen werden dabei ohne Ihr Zutun erfasst und bis zur
          automatisierten Löschung gespeichert:
        </p>
        <ul className="list">
          <li>IP-Adresse des anfragenden Rechners</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Name und URL der abgerufenen Datei</li>
          <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
          <li>
            verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie
            der Name Ihres Access-Providers.
          </li>
        </ul>

        <p>
          Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:
        </p>
        <ul className="list">
          <li>
            Gewährleistung eines reibungslosen Verbindungsaufbaus der Website
          </li>
          <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
          <li>
            Auswertung der Systemsicherheit und -stabilität sowie zu weiteren
            administrativen Zwecken
          </li>
        </ul>
        <p>
          In keinem Fall verwenden wir die erhobenen Daten zu dem Zweck,
          Rückschlüsse auf Ihre Person zu ziehen.
        </p>
        <p>
          Darüber hinaus setzen wir beim Besuch unserer Website Cookies sowie
          Analysedienste ein. Nähere Erläuterungen dazu erhalten Sie unter den
          Ziff. 4 und 5 dieser Datenschutzerklärung.
        </p>
        <div className="datenschutz-block">
          <h3>Bei Anmeldung für unseren Newsletter</h3>
          <p>
            Sofern Sie nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrücklich
            eingewilligt haben, verwenden wir Ihre E-Mail-Adresse dafür, Ihnen
            regelmäßig unseren Newsletter zu übersenden. Für den Empfang des
            Newsletters ist die Angabe einer E-Mail-Adresse ausreichend. Die
            Abmeldung ist jederzeit möglich, zum Beispiel über einen Link am
            Ende eines jeden Newsletters. Alternativ können Sie Ihren
            Abmeldewunsch gerne auch jederzeit an{" "}
            <a
              href="mailto:info@ubl-herzogenrath.de"
              className="link-datenschutz"
            >
              per E-Mail senden
            </a>
            .
          </p>
        </div>

        <div className="datenschutz-block">
          <h3>Bei Nutzung unseres Kontaktformulars</h3>
          <ul className="list">
            <li>
              Bei Fragen jeglicher Art bieten wir Ihnen die Möglichkeit, mit uns
              über ein auf der Website bereitgestelltes Formular Kontakt
              aufzunehmen. Dabei ist die Angabe einer gültigen E-Mail-Adresse
              erforderlich, damit wir wissen, von wem die Anfrage stammt und um
              diese beantworten zu können. Weitere Angaben können freiwillig
              getätigt werden.
            </li>
            <li>
              Die Datenverarbeitung zum Zwecke der Kontaktaufnahme mit uns
              erfolgt nach Art. 6 Abs. 1 S. 1 lit. a DSGVO auf Grundlage Ihrer
              freiwillig erteilten Einwilligung.
            </li>
            <li>
              Die für die Benutzung des Kontaktformulars von uns erhobenen
              personenbezogenen Daten werden nach Erledigung der von Ihnen
              gestellten Anfrage automatisch gelöscht.
            </li>
          </ul>
        </div>

        <div className="datenschutz-block">
          <h3>Weitergabe von Daten</h3>
          <p>
            Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als
            den im Folgenden aufgeführten Zwecken findet nicht statt.
          </p>
          <p>Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
          <ul className="list">
            <li>
              Sie Ihre nach Art. 6 Abs. 1 S. 1 lit. a DSGVO ausdrückliche
              Einwilligung dazu erteilt haben
            </li>
            <li>
              die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
              Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              erforderlich ist und kein Grund zur Annahme besteht
            </li>
            <li>
              dass Sie ein überwiegendes schutzwürdiges Interesse an der
              Nichtweitergabe Ihrer Daten haben
            </li>
            <li>
              für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit.
              c DSGVO eine gesetzliche Verpflichtung besteht, sowie
            </li>
            <li>
              dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. B DSGVO
              für die Abwicklung von Vertragsverhältnissen mit Ihnen
              erforderlich ist.
            </li>
          </ul>
        </div>

        <div className="datenschutz-block">
          <h3>Cookies</h3>
          <p>
            Wir setzen auf unserer Seite Cookies ein. Hierbei handelt es sich um
            kleine Dateien, die Ihr Browser automatisch erstellt und die auf
            Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden,
            wenn Sie unsere Seite besuchen. Cookies richten auf Ihrem Endgerät
            keinen Schaden an, enthalten keine Viren, Trojaner oder sonstige
            Schadsoftware.
          </p>
          <p>
            In dem Cookie werden Informationen abgelegt, die sich jeweils im
            Zusammenhang mit dem spezifisch eingesetzten Endgerät ergeben. Dies
            bedeutet jedoch nicht, dass wir dadurch unmittelbar Kenntnis von
            Ihrer Identität erhalten.
          </p>
          <p>
            Der Einsatz von Cookies dient einerseits dazu, die Nutzung unseres
            Angebots für Sie angenehmer zu gestalten. So setzen wir sogenannte
            Session-Cookies ein, um zu erkennen, dass Sie einzelne Seiten
            unserer Website bereits besucht haben. Diese werden nach Verlassen
            unserer Seite automatisch gelöscht.
          </p>
          <p>
            Darüber hinaus setzen wir ebenfalls zur Optimierung der
            Benutzerfreundlichkeit temporäre Cookies ein, die für einen
            bestimmten festgelegten Zeitraum auf Ihrem Endgerät gespeichert
            werden. Besuchen Sie unsere Seite erneut, um unsere Dienste in
            Anspruch zu nehmen, wird automatisch erkannt, dass Sie bereits bei
            uns waren und welche Eingaben und Einstellungen sie getätigt haben,
            um diese nicht noch einmal eingeben zu müssen. Zum anderen setzten
            wir Cookies ein, um die Nutzung unserer Website statistisch zu
            erfassen und zum Zwecke der Optimierung unseres Angebotes für Sie
            auszuwerten (siehe Ziff. 5).
          </p>
          <p>
            Diese Cookies ermöglichen es uns, bei einem erneuten Besuch unserer
            Seite automatisch zu erkennen, dass Sie bereits bei uns waren. Diese
            Cookies werden nach einer jeweils definierten Zeit automatisch
            gelöscht.
          </p>
          <p>
            Die durch Cookies verarbeiteten Daten sind für die genannten Zwecke
            zur Wahrung unserer berechtigten Interessen sowie der Dritter nach
            Art. 6 Abs. 1 S. 1 lit. f DSGVO erforderlich.
          </p>
          <p>
            Die meisten Browser akzeptieren Cookies automatisch. Sie können
            Ihren Browser jedoch so konfigurieren, dass keine Cookies auf Ihrem
            Computer gespeichert werden oder stets ein Hinweis erscheint, bevor
            ein neuer Cookie angelegt wird. Die vollständige Deaktivierung von
            Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen
            unserer Website nutzen können.
          </p>
        </div>
      </article>

      <article className="datenschutz-group">
        <h2>Analyse-Tools</h2>
        <p className="">a) Google Analytics</p>
        <p>
          Die nachfolgend genannten und von uns eingesetzten Tracking-Maßnahmen
          werden auf Grundlage von Art. 6 Abs. 1 S. 1 lit. f DSGVO durchgeführt.
          Mit den eingesetzten Tracking-Maßnahmen wollen wir eine
          bedarfsgerechte Gestaltung und die fortlaufende Optimierung unserer
          Webseite sicherstellen.
        </p>
        <p>
          Zum anderen setzen wir die Tracking-Maßnahmen ein, um die Nutzung
          unserer Webseite statistisch zu erfassen und zum Zwecke der
          Optimierung unseres Angebotes für Sie auszuwerten. Diese Interessen
          sind als berechtigt im Sinne der vorgenannten Vorschrift anzusehen.
          Die jeweiligen Datenverarbeitungszwecke und Datenkategorien sind aus
          den entsprechenden Tracking-Tools zu entnehmen.
        </p>
        <p>b) Google Analytics</p>
        <p>
          (Datenschutzbehörden verlangen für den zulässigen Einsatz von Google
          Analytics den Abschluss einer Auftragsdatenverarbeitungs-Vereinbarung.
          Eine entsprechende Vorlage wird unter{" "}
          <a
            href="http://www.google.com/analytics/terms/de.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="link-datenschutz"
          >
            http://www.google.com/analytics/terms/de.pdf
          </a>{" "}
          von Google angeboten.)
        </p>
        <p>
          Zum Zwecke der bedarfsgerechten Gestaltung und fortlaufenden
          Optimierung unserer Seiten nutzen wir Google Analytics, ein
          Webanalysedienst der Google Inc. (
          <a
            href="https://www.google.de/intl/de/about/"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="link-datenschutz"
          >
            https://www.google.de/intl/de/about/
          </a>{" "}
          (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; im Folgenden
          „Google“). In diesem Zusammenhang werden pseudonymisierte
          Nutzungsprofile erstellt und Cookies (siehe Ziff. 4) verwendet. Die
          durch den Cookie erzeugten Informationen über Ihre Benutzung dieser
          Website wie:
        </p>
        <ul className="list">
          <li>Browser-Typ/-Version</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer-URL (die zuvor besuchte Seite)</li>
          <li>Hostname des zugreifenden Rechners (IP-Adresse)</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p>
          werden an einen Server von Google in den USA übertragen und dort
          gespeichert. Die Informationen werden verwendet, um die Nutzung der
          Website auszuwerten, um Reports über die Websiteaktivitäten
          zusammenzustellen und um weitere mit der Websitenutzung und der
          Internetnutzung verbundene Dienstleistungen zu Zwecken der
          Marktforschung und bedarfsgerechten Gestaltung dieser Internetseiten
          zu erbringen.
        </p>
        <p>
          Auch werden diese Informationen gegebenenfalls an Dritte übertragen,
          sofern dies gesetzlich vorgeschrieben ist oder soweit Dritte diese
          Daten im Auftrag verarbeiten. Es wird in keinem Fall Ihre IP-Adresse
          mit anderen Daten von Google zusammengeführt. Die IP-Adressen werden
          anonymisiert, so dass eine Zuordnung nicht möglich ist (IP-Masking).
        </p>
        <p>
          Sie können die Installation der Cookies durch eine entsprechende
          Einstellung der Browser-Software verhindern; wir weisen jedoch darauf
          hin, dass in diesem Fall gegebenenfalls nicht sämtliche Funktionen
          dieser Website vollumfänglich genutzt werden können.
        </p>
        <p>
          Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten
          und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
          IP-Adresse) sowie die Verarbeitung dieser Daten durch Google
          verhindern, indem Sie ein Browser-Add-on herunterladen und
          installieren (
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="link-datenschutz"
          >
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          ).
        </p>
        <p>
          Alternativ zum Browser-Add-on, insbesondere bei Browsern auf mobilen
          Endgeräten, können Sie die Erfassung durch Google Analytics zudem
          verhindern, indem Sie auf diesen Link klicken. Es wird ein
          Opt-out-Cookie gesetzt, das die zukünftige Erfassung Ihrer Daten beim
          Besuch dieser Website verhindert. Der Opt-out-Cookie gilt nur in
          diesem Browser und nur für unsere Website und wird auf Ihrem Gerät
          abgelegt.
        </p>
        <p>
          Löschen Sie die Cookies in diesem Browser, müssen Sie das
          Opt-out-Cookie erneut setzen. Weitere Informationen zum Datenschutz im
          Zusammenhang mit Google Analytics finden Sie etwa in der Google
          Analytics-Hilfe (
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=de"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="link-datenschutz"
          >
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
          ).
        </p>
        <p>c) Google Adwords Conversion Tracking</p>
        <p>
          Um die Nutzung unserer Webseite statistisch zu erfassen und zum Zwecke
          der Optimierung unserer Website für Sie auszuwerten, nutzen wir ferner
          das Google Conversion Tracking. Dabei wird von Google Adwords ein
          Cookie (siehe Ziffer 4) auf Ihrem Rechner gesetzt, sofern Sie über
          eine Google-Anzeige auf unsere Webseite gelangt sind. Diese Cookies
          verlieren nach 30 Tagen ihre Gültigkeit und dienen nicht der
          persönlichen Identifizierung. Besucht der Nutzer bestimmte Seiten der
          Webseite des Adwords-Kunden und das Cookie ist noch nicht abgelaufen,
          können Google und der Kunde erkennen, dass der Nutzer auf die Anzeige
          geklickt hat und zu dieser Seite weitergeleitet wurde.
        </p>
      </article>

      <article className="datenschutz-group">
        <h2>Social Media Plug-ins</h2>
        <p>
          Wir setzen auf unserer Website auf Grundlage des Art. 6 Abs. 1 S. 1
          lit. f DSGVO Social Plug-ins der sozialen Netzwerke Facebook, Twitter
          und Instagram ein, um die <strong>UBL</strong> hier über bekannter zu
          machen. Der dahinterstehende werbliche Zweck ist als berechtigtes
          Interesse im Sinne der DSGVO anzusehen. Die Verantwortung für den
          datenschutzkonformen Betrieb ist durch deren jeweiligen Anbieter zu
          gewährleisten. Die Einbindung dieser Plug-ins durch uns erfolgt im
          Wege der sogenannten Zwei-Klick-Methode um Besucher unserer Webseite
          bestmöglich zu schützen.
        </p>
        <p>
          Durch die Einbindung der Plugins erhält Facebook die Information, dass
          Ihr Browser die entsprechende Seite unseres Webauftritts aufgerufen
          hat, auch wenn Sie kein Facebook- Konto besitzen oder gerade nicht bei
          Facebook eingeloggt sind. Diese Information (einschließlich Ihrer
          IP-Adresse) wird von Ihrem Browser direkt an einen Server von Facebook
          in den USA übermittelt und dort gespeichert. Sind Sie bei Facebook
          eingeloggt, kann Facebook den Besuch unserer Website Ihrem
          Facebook-Konto direkt zuordnen.
        </p>
        <p>
          Wenn Sie mit den Plugins interagieren, zum Beispiel den „LIKE“ oder
          „TEILEN“-Button betätigen, wird die entsprechende Information
          ebenfalls direkt an einen Server von Facebook übermittelt und dort
          gespeichert. Die Informationen werden zudem auf Facebook
          veröffentlicht und Ihren Facebook-Freunden angezeigt. Facebook kann
          diese Informationen zum Zwecke der Werbung, Marktforschung und
          bedarfsgerechten Gestaltung der Facebook-Seiten benutzen. Hierzu
          werden von Facebook Nutzungs-, Interessen- und Beziehungsprofile
          erstellt, z.B. um Ihre Nutzung unserer Website im Hinblick auf die
          Ihnen bei Facebook eingeblendeten Werbeanzeigen auszuwerten, andere
          Facebook-Nutzer über Ihre Aktivitäten auf unserer Website zu
          informieren und um weitere mit der Nutzung von Facebook verbundene
          Dienstleistungen zu erbringen.
        </p>
        <p>
          Wenn Sie nicht möchten, dass Facebook die über unseren Webauftritt
          gesammelten Daten Ihrem Facebook-Konto zuordnet, müssen Sie sich vor
          Ihrem Besuch unserer Website bei Facebook ausloggen. Zweck und Umfang
          der Datenerhebung und die weitere Verarbeitung und Nutzung der Daten
          durch Facebook sowie Ihre diesbezüglichen Rechte und
          Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen Sie
          bitte den Datenschutzhinweisen (
          <a
            href="https://www.facebook.com/about/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-datenschutz"
          >
            https://www.facebook.com/about/privacy/
          </a>
          ) von Facebook.
        </p>
      </article>

      <article className="datenschutz-group">
        <h2>Betroffenenrechte</h2>
        <p>Sie haben das Recht:</p>
        <ul className="list">
          <li>
            gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten
            personenbezogenen Daten zu verlangen. Insbesondere können Sie
            Auskunft über die Verarbeitungszwecke, die Kategorie der
            personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
            denen Ihre Daten offengelegt wurden oder werden, die geplante
            Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung,
            Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines
            Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei
            uns erhoben wurden, sowie über das Bestehen einer automatisierten
            Entscheidungsfindung einschließlich Profiling und ggf.
            aussagekräftigen Informationen zu deren Einzelheiten verlangen
          </li>
          <li>
            gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder
            Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
            Daten zu verlangen
          </li>
          <li>
            gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten
            personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung
            zur Ausübung des Rechts auf freie Meinungsäußerung und Information,
            zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des
            öffentlichen Interesses oder zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen erforderlich ist
          </li>
          <li>
            gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen, soweit die Richtigkeit der
            Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig ist,
            Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
            benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
            DSGVO Widerspruch gegen die Verarbeitung eingelegt haben
          </li>
          <li>
            gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns
            bereitgestellt haben, in einem strukturierten, gängigen und
            maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
            anderen Verantwortlichen zu verlangen
          </li>
          <li>
            gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung
            jederzeit gegenüber uns zu widerrufen. Dies hat zur Folge, dass wir
            die Datenverarbeitung, die auf dieser Einwilligung beruhte, für die
            Zukunft nicht mehr fortführen dürfen und
          </li>
          <li>
            gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.
            In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres
            üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres
            Kanzleisitzes wenden.
          </li>
        </ul>
      </article>
      <article className="datenschutz-group">
        <p>
          Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten
          Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden,
          haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die
          Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür
          Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder
          sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall
          haben Sie ein generelles Widerspruchsrecht, das ohne Angabe einer
          besonderen Situation von uns umgesetzt wird.
        </p>
        <p>
          Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
          machen, genügt eine E-Mail an <strong>WEN???</strong>
        </p>
      </article>

      <article className="datenschutz-group">
        <h2>Datensicherheit</h2>
        <p>
          Wir verwenden innerhalb des Website-Besuchs das verbreitete
          SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils
          höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt
          wird. In der Regel handelt es sich dabei um eine 256 Bit
          Verschlüsselung. Falls Ihr Browser keine 256-Bit Verschlüsselung
          unterstützt, greifen wir stattdessen auf 128-Bit v3 Technologie
          zurück. Ob eine einzelne Seite unseres Internetauftrittes
          verschlüsselt übertragen wird, erkennen Sie an der geschlossenen
          Darstellung des Schüssel- beziehungsweise Schloss-Symbols in der
          unteren Statusleiste Ihres Browsers.
        </p>
        <p>
          Wir bedienen uns im Übrigen geeigneter technischer und
          organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige
          oder vorsätzliche Manipulationen, teilweisen oder vollständigen
          Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu
          schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der
          technologischen Entwicklung fortlaufend verbessert.
        </p>
      </article>

      <article className="datenschutz-group">
        <h2>
          Aktualität und Änderung dieser Datenschutzerklärung. Diese
          Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.
        </h2>
        <p>
          Durch die Weiterentwicklung unserer Website und Angebote darüber oder
          aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
          kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die
          jeweils aktuelle Datenschutzerklärung kann jederzeit auf der Website
          unter{" "}
          <a
            href="https://www.ubl-2020.de/images/datenschutz/DVO-Mai18.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-datenschutz"
          >
            https://www.ubl-2020.de/images/datenschutz/DVO-Mai18.pdf
          </a>{" "}
          von Ihnen abgerufen und ausgedruckt werden.
        </p>
      </article>
    </section>
  );
};
