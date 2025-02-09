import { useEffect } from "react";
import "./SchulenProgramm.css";
export const SchulenProgramm = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <section className="SchulenProgramm">
      <h1>Schulen</h1>
      <ul>
        <li>
          Erhalt aller Grundschulstandorte und Gewähr für wohnortnahe Beschulung
          aller Grundschulkinder
        </li>
        <li>
          {" "}
          Notwendige Erweiterung der zur Verfügung stehenden Räume an
          verschiedenen Grundschule, z.B. Regenbogenschule
        </li>
        <li>
          Notwendige Raumerweiterung für die "Offenen Ganztagsschulen" (OGS) an
          Standorten der Grundschulen
        </li>
        <li>
          Ausreichende finanzielle Zuwendung an die OGS-Träger, damit diese ihre
          pädagogischen Aufgaben erfüllen können
        </li>
        <li>
          Aufrechterhaltung der Forderung einer "Gebundenen Ganztagsgrundschule"
          als Pilotprojekt
        </li>
        <li>
          Beschleunigung der Planung und Umsetzung des Umzugs der
          Käthe-Kollwitz-Schule
        </li>
        <li>
          Umsetzung der erforderlichen Ausbau-/Umbau- und Sanierungsmaßnahmen an
          den Weiterführenden Schulen
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
