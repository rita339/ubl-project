import { Link } from "react-router-dom";
import "./Kontakt.css";

export const Kontakt = () => {
  const email = "brunobarth@web.de";
  return (
    <section className="Kontakt">
      <h1>Kontakt</h1>
      <div className="kontakt-header">
        <h4>UBL 2020 - Herzogenrath</h4>
        <p>UBL Vorsitzender:</p>
        <p>Bruno Barth</p>
        <a href={`mailto:${email}`}>{email}</a>
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
