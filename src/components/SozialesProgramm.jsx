import "./SozialesProgramm.css";

export const SozialesProgramm = () => {
  return (
    <section className="SozialesProgramm">
      <h1>Senioren, Soziales & Integration</h1>
      <ul>
        <li>
          Wiederaufnahme der kostenlosen „Seniorenfahrten“ der Stadt für die
          Menschen, die 70 Jahre und älter sind, im jährlichen Wechsel mit der
          „Woche der Senioren“
        </li>
        <li>
          Schaffung von „Seniorengerechten Wohnungen“ durch entsprechende
          Festlegungen in den Bebauungsplänen
        </li>
        <li>Erhöhung des prozentualen Anteils preisgebunden Wohnraums</li>
        <li>Förderung/Unterstützung für Projekte für „Betreutes Wohnen“</li>
        <li>
          Unterstützung des „Stadtteilbüros Merkstein“ und perspektivisch
          Schaffung analoger Angebote in Kohlscheid und Herzogenrath-Mitte.
        </li>
        <li>
          Quartierskonferenzen in den Stadtteilen als Instrument der
          Bedarfsermittlung und des Austausches.
        </li>
        <li>
          In Zusammenarbeit mit dem „Koordinationsbüro Rund ums Alter“ und dem
          „Seniorenbeirat“ der Stadt Entwicklung eines Handlungskonzepts aus den
          Daten zum „Demographischen Wandel“ in Bezug auf Aufenthalts-,
          Betreuungs- und Freizeitangebote
        </li>
        <li>
          Zügige Umsetzung der vorhandenen Teile des „Integrationskonzepts der
          Stadt Herzogenrath“ mit:
          <ul className="senioren-list">
            <li>
              {" "}
              Erreichbare Kursangebote zum Erlernen der deutschen Sprache mit
              verbindlichem Charakter, Bereitstellung geeigneter Räume, ggf. mit
              Kinderbetreuung
            </li>
            <li>
              {" "}
              Bildung eines Pools mit Nachhilfelehrerinnen/-lehrern und Werbung
              von ehrenamtlichen „Sprachpaten“ mit entsprechender Fortbildung
              von Interessenten.
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
