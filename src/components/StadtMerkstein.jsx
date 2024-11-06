import { useEffect } from "react";
import "./StadtMerkstein.css";

export const StadtMerkstein = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="StadtMerkstein">
      <h1>Stadtplanung Merkstein</h1>
      <ul>
        <li>
          Erstellung eines Gesamtentwicklungsplans für Merkstein-Positive
          Begleitung bei der Umsetzung der Pläne zur Attraktivierung des
          August-Schmidt-Platzes
        </li>
        <li>
          Weiterentwicklung des Grube-Adolf-Parks im unteren Bereich im Hinblick
          auf Wohnbebauung (es gibt einen gültigen Bebauungsplan)
        </li>
        <li>
          Städtebaulich angepasste Schließung von Baulücken, z.B. in der Kolonie
          Streiffeld, in der Weißen Siedlung, Am Raubusch, in der
          Freiheitsstraße
        </li>
        <li>Wohnumfeldverbesserung in Alt-Merkstein</li>
        <li>Attraktivierung des Wochenmarktes</li>
        <li>
          Veranstaltungen wie z.B. Planung und Durchführung eines Straßenfestes
          rund um den August-Schmidt-Platz (Geilenkirchener-, Kirchrather
          Straße) zur Eröffnung des „neuen August-Schmidt-Platzes“ oder Eisbahn
          im Winter mit Weihnachtsmarkt
        </li>
        <li>
          Sommerkonzerte im Grube-Adolf-Park und/oder auf dem
          August-Schmidt-Platz
        </li>
        <li>
          Schwimm-und Badeveranstaltungen im Freibad: Ideenwerkstatt dazu mit
          dem Badepersonal, dem Stadtsportverband, den Schwimmvereinen
        </li>
        <li>
          Ablehnung der Planung zu einem Restaurant auf dem
          August-Schmidt-Platzes
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
