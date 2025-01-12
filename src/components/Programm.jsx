import { Link } from "react-router-dom";
import "./Programm.css";
import { useEffect } from "react";

export const Programm = () => {
  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.classList.contains("programm-group")) {
        window.scrollTo({ top: 0 });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <section className="Programm">
      <div className="programm-header">
        <h1>Unser Programm</h1>
        <p>
          Wir haben unser Wahlprogramm nach intensiver Arbeit in der
          vorliegenden Form zusammengestellt und beschlossen. Es ist ein
          Programm für die nächsten Jahre. Die Corona-Pandemie führt zu
          finanziellen Einbußen für die kommunalen Haushalte, die z.Z. noch
          nicht genau beziffert werden können.
        </p>
        <p>
          Wir werden verantwortungsbewusst handeln, nicht das „Blaue vom Himmel“
          versprechen und die Finanzsituation unserer Stadt bei unseren Anliegen
          und Anträgen im Blick haben.
        </p>
      </div>
      <div className="cards-container">
        <Link to="/kita" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-school"></i> */}
            <img src="2_Bruno.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>KiTa, Schulen & Kinder</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm</p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/umwelt" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-seedling"></i> */}
            <img src="Ralf-1.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Umwelt & Verkehr</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm</p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/jugend" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-regular fa-face-grin-wide"></i> */}
            <img src="Roxanna-1.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Jugend</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/stadt-kohlscheid" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-tree-city"></i> */}
            <img src="Heinz-removebg.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Stadtplanung Kohlscheid</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/stadt-merkstein" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-tree-city"></i> */}
            <img src="Ute-removebg.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Stadtplanung Herzogenrath-Merkstein</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/stadt-herzogenrath-mitte" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-tree-city"></i> */}
            <img src="Franz-Josef-removebg.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Stadtplanung Herzogenrath-Mitte</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/sport" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-basketball"></i> */}
            <img src="Wilfried-removebg.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Sport</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>

        <Link to="/soziales" className="programm-group">
          <div className="programm-icon">
            {/* <i className="fa-solid fa-hand-holding-heart"></i> */}
            <img src="Tatjana-removebg.png" alt="Programm Icon" />
          </div>
          <div className="programm-content">
            <h3>Senioren, Soziales & Integration</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              eum iure. Distinctio vero veritatis culpa.
            </p>
          </div>
          <div className="programm-footer">
            <p>zum Programm </p>
            <i className="fa-solid fa-check-double"></i>
          </div>
        </Link>
      </div>
    </section>
  );
};
