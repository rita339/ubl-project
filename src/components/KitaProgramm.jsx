import { useEffect } from "react";
import "./KitaProgramm.css";
export const KitaProgramm = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <section className="KitaProgramm">
      <h1>KiTa, Schulen & Kinder</h1>
      <ul>
        <li>
          Ausreichende Anzahl institutioneller Plätze in KiTas, auch für den
          U-3-Bereich
        </li>
        <li>Verlängerte Öffnungszeiten (Bedarf müsste ermittelt werden!)</li>
        <li>
          Erhalt aller Grundschulstandorte und Gewähr für wohnortnahe Beschulung
          aller Grundschüler
        </li>
        <li>Sanierung von Toilettenanlagen an verschiedenen Grundschulen</li>
        <li>Adäquater Ausbau der OGS-Räumlichkeiten</li>
        <li>OGS-Platz für alle Kinder, deren Eltern dies wünschen</li>
        <li>
          Aufrechterhaltung der Forderung einer „Gebundenen Ganztagsgrundschule“
          als Pilotprojekt
        </li>
        <li>
          Verlässliche Personalausstattung des Abenteuerspielplatzes in
          Herzogenrath-Mitte
        </li>
        <li>
          Finanzielle und ggf. logistische Unterstützung des „Fördervereins des
          städt. Gymnasiums“ zum Erhalt des Landschulheims in Rollesbroich
        </li>
        <li>
          Neue notwendige Kooperationen in der Oberstufe der Weiterführenden
          Schulen von Gymnasium und Gesamtschulen untereinander und nicht mit
          außerstädtischen Schulen
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
