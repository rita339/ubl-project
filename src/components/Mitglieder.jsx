import { useState } from "react";
import "./Mitglieder.css";

export const Mitglieder = () => {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = (index, closeIndex) => {
    setActiveCard(index === closeIndex ? false : index);
  };
  return (
    <section className="Mitglieder">
      <div className="mitglied-header">
        <h1>Ratsmitglieder</h1>
        <p>
          Wählervereinigung <strong>UBL</strong>
        </p>
        <p>Unabhängige BürgerListe Herzogenrath</p>
      </div>

      <h3>Unsere Stadtratsmitglieder</h3>

      <div className="flip-card-wrapper">
        <div
          className={`card ${activeCard === 0 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(0, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Bruno Barth</h4>
            <p>Fraktionsvorsitzender</p>
            <p>Ausschuss für Bildung</p>
            <p>Haupt- und Finanzausschuss</p>
          </div>
        </div>

        <div
          className={` card ${activeCard === 1 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(1, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Hartmut Prast</h4>
            <p>stellv. Fraktionsvorsitzender</p>
            <p>Klima und Umwelt</p>
            <p>Arbeit, Soziales und Quartiersentwicklung</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 2 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(2, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./femaleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back ">
            <h4>Roxana Shad-Matzutt</h4>
            <p>Stadtratsmitglied</p>
            <p>Jugendhilfe-Ausschuss</p>
            <p>Kultur, Sport und Tourismus</p>
          </div>
        </div>
      </div>

      {/* Headline 2 */}
      <h3>Stimmberechtigte Ausschussmitglieder </h3>
      <div className="flip-card-wrapper">
        <div
          className={`card ${activeCard === 3 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(3, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Ute Kurig</h4>
            <p>sachkundige Bürgerin</p>
            <p>Hochbau und Gebäudemanagement</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 4 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(4, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./femaleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Ralf Hardt</h4>
            <p>sachkundiger Bürger</p>
            <p>Mobilität und Tiefbau</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 5 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(5, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Dr. Klaus Schillings</h4>
            <p>sachkundiger Bürger</p>
            <p>Stadtentwicklung und Planung</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 6 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(6, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./femaleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Franz-Josef Mahr</h4>
            <p>sachkundiger Bürger</p>
            <p>Rechnungsprüfungsausschuss</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 7 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(7, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Tatjana Krampitz</h4>
            <p>stellv. sachkundige Bürgerin</p>
            <p>Arbeit, Soziales und Quartiersentwicklung</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 8 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(8, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./femaleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>Wilfried Leisten</h4>
            <p>stellv. sachkundiger Bürger</p>
            <p>Bildung, Kultur, Sport und Tourismus</p>
          </div>
        </div>

        <div
          className={`card ${activeCard === 9 ? "cardFlip" : ""}`}
          onClick={() => handleFlip(9, activeCard)}
        >
          {/* front */}
          <div className="flip-card-front">
            <img src="./maleProfile.jpg" alt="image" />
          </div>
          {/* back */}
          <div className="flip-card-back">
            <h4>NAME</h4>
            <p>sachkundiger Bürger</p>
            <p>Stadtentwicklung und Planung</p>
          </div>
        </div>
      </div>
    </section>
  );
};
