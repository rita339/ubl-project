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
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              commodi quasi alias accusantium necessitatibus expedita sed saepe
              consequatur, error, quisquam quod asperiores facere rem corporis
              ducimus facilis officiis. Nihil, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
          </div>
          <img src="./pic.jpg" alt="Fake Bild" />
        </div>
        {/* zweiter Block */}
        <div className="home-group">
          <img src="./pic.jpg" alt="Fake Bild" />
          <div className="group-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              commodi quasi alias accusantium necessitatibus expedita sed saepe
              consequatur, error, quisquam quod asperiores facere rem corporis
              ducimus facilis officiis. Nihil, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
          </div>
        </div>
        {/* Driiter Block */}
        <div className="home-group">
          <div className="group-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              commodi quasi alias accusantium necessitatibus expedita sed saepe
              consequatur, error, quisquam quod asperiores facere rem corporis
              ducimus facilis officiis. Nihil, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
          </div>
          <img src="./pic.jpg" alt="Fake Bild" />
        </div>
        {/* Vierter Block */}
        <div className="home-group">
          <img src="./pic.jpg" alt="Fake Bild" />
          <div className="group-content">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              commodi quasi alias accusantium necessitatibus expedita sed saepe
              consequatur, error, quisquam quod asperiores facere rem corporis
              ducimus facilis officiis. Nihil, eligendi.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              sed ipsa, omnis eaque nobis error!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
