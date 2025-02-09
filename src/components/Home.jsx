import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <section className="Home">
      <div className="header-home">
        <div className="header-inhalt">
          <div className="header-title">
            <h1>
              <span>U</span>nabhängige <span>B</span>ürger<span>L</span>iste -
              Herzogenrath
            </h1>
            <ul>
              <li>Bürgernah</li>
              <li>Ökologisch</li>
              <li>Sozial</li>
            </ul>
          </div>
          <Link to="/kontakt" className="header-btn">
            <button>
              Kontakt
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </Link>
        </div>
        <img src="./Startbild.jpg" alt="startbild" />
      </div>

      <div className="home-wrapper">
        {/* Erster Block */}
        <div className="home-group">
          <div className="group-content">
            <h3>UBL-Bürgersprechstunde mit Ute Kurig</h3>
            <p>
              Die nächste Bürgersprechstunde der "Unabhängigen Bürgerliste
              Herzogenrath" (UBL) findet am kommenden Montag, 2. Dezember, von
              17-18 Uhr statt. In dieser Zeit ist Ute Kurig für Fragen,
              Anregungen, Hinweisen, Kritik zu kommunalpolitischen Themen
              telefonisch unter 02406/83125 zu erreichen; sie kann auch
              persönlich im Rathaus in Raum 105 (1. Etage) aufgesucht werden.
              Ute Kurig gehört dem Vorstand der Wählergemeinschaft UBL an; sie
              vertritt die Fraktion als Sprecherin im "Ausschuss für Hochbau und
              Gebäudemanagement". Dieser Ausschuss kommt am 5. Dezember zu
              seiner nächsten Sitzung zusammen.
            </p>

            <div className="home-pic">
              <img src="./Ute-1.png" alt="Ute Bild" />
            </div>
          </div>
        </div>
        {/* zweiter Block */}
        <div className="home-group">
          <div className="group-content">
            <h3>Bürgersprechstunde der UBL</h3>
            <p>
              Die nächste Bürgersprechstunde der "Unabhängigen Bürgerliste
              Herzogenrath" (UBL) findet am kommenden Montag, 25.11., von 17-18
              Uhr statt. In dieser Zeit ist Ralf Hardt telefonisch unter
              02406/83125 für Fragen, Anregungen, Kritik zu kommunalpolitischen
              Fragen zu erreichen. Er kann auch persönlich im Rathaus in Raum
              105 (1. Etage) aufgesucht werden. Ralf Hardt vertritt die UBL als
              deren Sprecher im "Ausschuss für Mobilität und Tiefbau"; dieser
              Ausschuss kommt am 28.11. zu seiner nächsten Sitzung zusammen.
            </p>

            <div className="home-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
        {/* Driiter Block */}
        <div className="home-group">
          <div className="group-content">
            <h3>Schulen und Bildung haben für die UBL absolute Priorität!</h3>
            <p>
              Die notwendige Erweiterung des Städtischen Gymnasiums, die
              Sanierung des kompletten C-Traktes an der Europaschule in
              Merkstein ...
            </p>

            <div className="home-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
