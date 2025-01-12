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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
              Herzogenrath" (UBL) findet am kommenden Montag...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>

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
              Herzogenrath" (UBL) findet am kommenden Montag...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
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
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
            <div className="home-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
