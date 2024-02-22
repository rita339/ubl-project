import { Link } from "react-router-dom";
import "./Footer.css";
// import { Kontakt } from "../Kontakt.jsx";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="Footer">
      {/* <Kontakt /> */}
      <ul>
        <h5>Mitglied werden:</h5>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a href="/Satzung_UBL.pdf" target="_blank" rel="noreferrer">
            Satzung
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a href="/Antragsformular.pdf" target="_blank" rel="noreferrer">
            Mitgliedsantrag
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a href="#" target="_blank" rel="noreferrer">
            Anträge / Anfragen
          </a>
        </li>
      </ul>

      <ul>
        <h5>Unsere Zusammenarbeit:</h5>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="https://www.herzogenrath.de/"
            target="_blank"
            rel="noreferrer"
          >
            Stadt Herzogenrath
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="http://www.naturfreunde-merkstein.de/"
            target="_blank"
            rel="noreferrer"
          >
            Naturfreunde Merkstein
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="https://www.radschnellweg-panorama.info/"
            target="_blank"
            rel="noreferrer"
          >
            Radschnellweg-Panorama
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="https://www.betreute-schule-ac.de/"
            target="_blank"
            rel="noreferrer"
          >
            Betreute Schulen e.V.
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="https://www.sjd-die-falken-merkstein.info/"
            target="_blank"
            rel="noreferrer"
          >
            Wir Falken
          </a>
        </li>
        <li>
          <i className="fa-solid fa-check-double"></i>
          <a
            href="https://www.fotowerkbosch.de/"
            target="_blank"
            rel="noreferrer"
          >
            Heike Bosch
          </a>
        </li>
      </ul>

      <div>
        <h5 id="icons-header">Kontaktieren Sie uns:</h5>
        <ul className="footer-icons">
          <li>
            <a href="#">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-square-x-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p> © {currentYear} UBL 2020 - Herzogenrath </p>
        <div className="copy-link-container">
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  );
};
