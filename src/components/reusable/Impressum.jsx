import "./Impressum.css";

export const Impressum = () => {
  const email = "brunobarth@web.de";

  return (
    <section className="Impressum">
      <h1>Impressum</h1>
      <article className="impressum-group">
        <h3>Unabhängige BürgerListe Herzogenrath</h3>
        <p>
          <strong>Verantwortlicher:</strong> Bruno Barth
        </p>
        <div className="email-link-container">
          <p>E-Mail:</p>
          <a href={`mailto:${email}`}> {email} </a>
        </div>
      </article>

      <article className="impressum-block">
        <h4>Haftungshinweis für diese Homepage:</h4>
        <p>
          Die Wählervereinigung ( im folgendem UBL ) übernimmt keine Garantie
          dafür, dass die auf dieser Web Site bereitgestellten Informationen
          vollständig, richtig und in jedem Fall aktuell sind. Dies gilt auch
          für alle Verbindungen ("links"), auf die diese Web Site direkt oder
          indirekt verweist. Die Praxis ist für den Inhalt einer Seite, die mit
          einem solchen link erreicht wird, nicht verantwortlich.
        </p>
      </article>

      <article className="impressum-block">
        <p>
          Die UBL behält sich das Recht vor, ohne vorherige Ankündigung,
          Änderungen oder Ergänzungen der bereitgestellte Informationen
          vorzunehmen.
        </p>
      </article>
      <article className="impressum-block">
        <p>
          Die UBL begründet durch die Bereitstellung dieser Informationen kein
          Vertragsangebot über Auskünfte, Beratung oder ähnliche
          Vertragsbeziehungen. Jegliche Haftung für die Nutzung der Inhalte der
          Website oder die Richtigkeit der Inhalte oder die Erreichbarkeit der
          Web-Site wird ausgeschlossen.
        </p>
      </article>

      <article className="impressum-block">
        <p>
          Die UBL haftet daher nicht für konkrete, mittelbare und unmittelbare
          Schäden oder Schäden, die durch fehlende Nutzungsmöglichkeiten,
          Datenverluste oder entgangene Gewinne entstehen können, die im
          Zusammenhang mit der Nutzung von Dokumenten oder Informationen
          entstehen, die auf dieser Web Site zugänglich sind.
        </p>
      </article>

      <article className="impressum-block">
        <p>
          <strong>Keine Abmahnung ohne vorherigen Kontakt!</strong> Sollte der
          Inhalt oder die Aufmachung dieser Seite Rechte Dritter oder
          gesetzliche Bestimmungen verletzen, so bitten wir um eine
          entsprechende Nachricht ohne Kostennote. Wir garantieren, dass zu
          Recht beanstandete Passagen unverzüglich entfernt werden, ohne dass
          von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich
          ist. Sollten Sie gleichwohl einen Anwalt beauftragen, können sie
          dessen Kosten gem. § 254 BGB nicht geltend machen.
        </p>
      </article>
    </section>
  );
};
