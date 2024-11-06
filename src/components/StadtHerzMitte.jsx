import { useEffect } from "react";
import "./StadtHerzMitte.css";

export const StadtHerzMitte = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="StadtHerzMitte">
      <h1>Stadtplanung Herzogenrath Mitte</h1>
      <ul>
        <li>
          Zentrale Außenstelle von Ordnungsamt und Polizei (z.B. im von der
          Stadt gekauften „Bockreiterzentrum“ am Ferdinand-Schmetz-Platz)
        </li>
        <li>
          „Ordnungsbehördlicher Präsenzdienst“ über die „normale“ Dienstzeit
          hinaus mit entsprechender Personalausstattung
        </li>
        <li>
          Städtische Initiative zur Reduzierung von Leerstand in Zusammenarbeit
          mit dem „Stadtmarketing der Stadt Herzogenrath; z.B. Ladenlokale für
          Kulturschaffende zur Verfügung stellen
        </li>
        <li>
          Belebung Innenstadtbereiche: z.B. Thematischer Aktionstag oder
          Aktionsabend
        </li>
        <li>
          Ausweisung von räumlich abgegrenzten „Alkohol-Sperrgebieten“ z.B. an
          bestimmten Bushaltestellen wie Bahnhof Herzogenrath und Markt
          Kohlscheid
        </li>
        <li>
          Positive Begleitung der Umsetzung der Pläne „Integriertes
          Handlungskonzept“ für den Bereich Ferdinand-Schmetz-Platz,
          Kreuzungsbereich Ufer-/Kleikstraße, Umgestaltung Vorplatz Kirche St.
          Mariä Himmelfahrt und Commerzbank, „Wurmpromenade“
        </li>
        <li>
          Zwingende Notwendigkeit einer Verkehrsreduzierung Eygelshovener Straße
          als Voraussetzung für ein Gelingen Umgestaltung Kirchenvorplatz mit
          Aufenthaltsqualität.
        </li>
        <li>
          Verlängerung der „Wurmpromenade“ über den ehemaligen Friedhof
          Eygelshovener Straße hinaus bis zur Grenze und damit direkte Anbindung
          an den Rolducer-Wald
        </li>
        <li>
          Attraktivitätssteigerung im Innenstadtbereich durch einzelne Maßnahmen
        </li>
        <li>
          Keine Großgolfanlage im Rolducer Wald / Unterstützung des Widerstands
          auf der Kerkrader Seite
        </li>
      </ul>
      <p>
        Zu all diesen Ideen möchten wir mit Ihnen ins Gespräch kommen, wir
        möchten gerne Ihre Meinung zu unseren Vorstellungen hören und mit Ihnen
        diskutieren.
      </p>
    </section>
  );
};
