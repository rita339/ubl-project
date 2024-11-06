import { useEffect } from "react";
import "./UmweltProgramm.css";

export const UmweltProgramm = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <section className="UmweltProgramm">
      <h1>Umwelt & Verkehr</h1>
      <ul>
        <li>
          Förderung Artenschutz, Umsetzung der Forderungen der Natur-und
          Umweltschutzorganisationen vom November 2017
        </li>
        <li>
          Umsetzung der bzgl. „Klimanotstand“ gefassten Beschlüsse in der
          Stadtratssitzung vom 9. Juli 2019
        </li>
        <li>
          Festlegung in neuen Bebauungsplänen zur deutlichen Reduzierung von
          Schotter, Kies und Steinen in den Vorgärten
        </li>
        <li>
          Lebensraum Wurmtal: Unterstützung des Antrags der AG Wurmtal e.V. vom
          April 2016 auf Erweiterung des Naturschutzgebietes Wurmtal auf die
          andere Bahnseite im Bereich Straß
        </li>
        <li>
          Städtische Unterstützung für ein „Repair-Cafe“ (z.B. im
          „Bockreiterzentrum“ in Herzogenrath)
        </li>
        <li>
          Umsetzung unseres Antrags vom 26. Februar 2019 „Entwicklung eines
          Radverkehrskonzeptes“ und eine entsprechende Personalausstattung der
          Stadtverwaltung
        </li>
        <li>
          Ablehnung einer Trassenführung des geplanten Radschnellwegs Aachen -
          Herzogenrath durch Schutzgebiete im Wurmtal und über die
          Eisenbahnstraße direkt am Wohngebiet Hundforter-Benden vorbei in die
          Innenstadt
        </li>
        <li>
          Maßnahmen zur deutlichen Reduzierung des KFZ-Durchgangsverkehres an
          der „Alten Mühle“ im Wurmtal zwischen Kohlscheid und Bardenberg –
          ggfs. durch Sperrung der Straße und Wanderparkplätze auf beiden Seiten
          der Wurmbrücke-Bau einer Fußgängerbrücke
        </li>
        <li>
          Radfahrerbrücke in der Verlängerung Pilgramsweg ins Wurmtal (als
          Ersatz für die abgerissene Brücke)
        </li>
        <li>
          Abschaffung der Anliegerbeiträge beim Straßenbau nach dem
          Kommunalabgabegesetz (KAG - Beiträge)
        </li>
        <li>
          Einsetzen eines eigenständigen „Umweltausschusses“ in der neuen
          Legislaturperiode
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
