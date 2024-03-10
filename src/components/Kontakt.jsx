import { Link } from "react-router-dom";
import "./Kontakt.css";

export const Kontakt = () => {
  const email = "fraktion@ubl-2020.de";
  const tel = "0240683125";
  return (
    <section className="Kontakt">
      <div>
        <h1>Kontakt</h1>
        <div className="kontakt-container">
          <div className="kontakt-header">
            <h4>UBL 2020 - Herzogenrath</h4>
            <p>Fraktionsmitarbeiter:</p>
            <p>Heinz Bekeschus</p>
            <div className="kontakt-group">
              <p>Tel.:</p>
              <a href={`tel:${tel}`}>02406 / 83-125</a>
            </div>
            <div className="kontakt-group">
              <p>Email: </p>
              <a href={`mailto:${email}`}>{email}</a>
            </div>
          </div>

          <div className="kontakt-header">
            <h4>Unsere Sprechzeiten:</h4>
            <ul className="sprechzeiten">
              <div>
                <li>Montag:</li>
                <span>17.00 - 18.00 Uhr</span>
              </div>
              <div>
                <li>Dienstag:</li>
                <span>10.00 - 13.00 Uhr</span>
              </div>
              <div>
                <li>Donnerstag:</li>
                <span>10.00 - 13.00 Uhr</span>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <form>
        <h2>Senden Sie uns eine Nachricht:</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name*"
          required
          minLength={2}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-Mail*"
          required
        />
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Betreff*"
          required
          minLength={3}
        />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          required
          placeholder="Nachricht..."
        ></textarea>

        <label>
          <input type="checkbox" name="agreement" id="agreement" />
          <p>
            Mit dem Absenden dieses Formulars wird der{" "}
            <Link to="/datenschutz">Datenschutzerklärung</Link> dieser Website
            und der Speicherung der übermittelten Daten zugestimmt.
          </p>
        </label>

        <div className="kontakt-btn">
          <button>
            Absenden
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </form>
    </section>
  );
};
