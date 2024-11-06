import { useEffect, useState } from "react";
import "./Mitglieder.css";
import members from "../data-01.js";
import mitglieder from "../data-02.js";

export const Mitglieder = () => {
  const [activeCardMembers, setActiveCardMembers] = useState(null);
  const [activeCardMitglieder, setActiveCardMitglieder] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!e.target.closest(".card")) {
        setActiveCardMembers(null);
        setActiveCardMitglieder(null);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);
    // Clean-up Function
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  const handleFlip = (index, type) => {
    if (type === "members") {
      setActiveCardMembers(index === activeCardMembers ? null : index);
      setActiveCardMitglieder(null); // Schließe die Karte in dem anderen Block
    } else {
      setActiveCardMitglieder(index === activeCardMitglieder ? null : index);
      setActiveCardMembers(null);
    }
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
        {members.map((member, index) => (
          <div
            key={member.name}
            className={`card ${activeCardMembers === index ? "cardFlip" : ""}`}
            onClick={() => handleFlip(index, "members")}
          >
            {/* Front */}
            <div className="flip-card-front">
              <img src={member.image} alt="image" />
            </div>
            {/* Back */}
            <div className="flip-card-back">
              <h4>{member.name}</h4>
              <p>{member.position}</p>
              {member.committees.map((committee) => (
                <p key={committee}>{committee}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3>Stimmberechtigte Ausschussmitglieder</h3>

      <div className="flip-card-wrapper">
        {mitglieder.map((mitglied, index) => (
          <div
            key={mitglied.name}
            className={`card ${
              activeCardMitglieder === index ? "cardFlip" : ""
            }`}
            onClick={() => handleFlip(index, "mitglieder")}
          >
            {/* Front */}
            <div className="flip-card-front">
              <img src={mitglied.image} alt="image" />
            </div>
            {/* Back */}
            <div className="flip-card-back">
              <h4>{mitglied.name}</h4>
              <p>{mitglied.position}</p>
              <p>{mitglied.committee}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
