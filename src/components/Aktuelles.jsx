import { useEffect } from "react";
import "./Aktuelles.css";
import { Link } from "react-router-dom";

export const Aktuelles = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  return (
    <section className="Aktuelles">
      <h1>Aktuelles</h1>

      <div className="aktuelles-wrapper">
        {/* Card 1 */}
        <div className="aktuelles-card">
          <div className="aktuelles-content">
            <h3>UBL-Bürgersprechstunde mit Ute Kurig</h3>
            <p>
              Die nächste Bürgersprechstunde der "Unabhängigen Bürgerliste
              Herzogenrath" (UBL) findet am...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
            <div className="aktuelles-pic">
              <img src="./Ute-1.png" alt="Ute Bild" />
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="aktuelles-card">
          <div className="aktuelles-content">
            <h3>Bürgersprechstunde der UBL</h3>
            <p>
              Die nächste Bürgersprechstunde der "Unabhängigen Bürgerliste
              Herzogenrath" (UBL) findet am kommenden Montag...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
            <div className="aktuelles-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="aktuelles-card">
          <div className="aktuelles-content">
            <h3>Schulen und Bildung haben für die UBL absolute Priorität!</h3>
            <p>
              Die notwendige Erweiterung des Städtischen Gymnasiums, die
              Sanierung des kompletten...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
            <div className="aktuelles-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="aktuelles-card">
          <div className="aktuelles-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              commodi quasi alias accusantium necessitatibus expedita sed saepe
              consequatur...
            </p>
            <Link to="/aktuelles" className="aktuelles-link">
              <p>weiterlesen</p>
              <i className="fa-solid fa-check-double"></i>
            </Link>
            <div className="aktuelles-pic">
              <img src="./pic.jpg" alt="Fake Bild" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
