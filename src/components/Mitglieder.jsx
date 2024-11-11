import { useEffect } from "react";
import "./Mitglieder.css";
import members from "../data-01.js";
import mitglieder from "../data-02.js";
import { Link } from "react-router-dom";

export const Mitglieder = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
        {members.map((member) => (
          <div key={member.name} className="card">
            {/* Front */}
            <div className="flip-card-front">
              <img src={member.image} alt={member.name} />
            </div>
            {/* Back */}
            <div className="flip-card-back">
              <Link to={`/mitglieder/${member.id}`}>
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                {member.committees.map((committee) => (
                  <p key={committee}>{committee}</p>
                ))}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h3>Stimmberechtigte Ausschussmitglieder</h3>

      <div className="flip-card-wrapper">
        {mitglieder.map((mitglied) => (
          <div key={mitglied.name} className="card">
            {/* Front */}
            <div className="flip-card-front">
              <img src={mitglied.image} alt={mitglied.name} />
            </div>
            {/* Back */}
            <div className="flip-card-back">
              <Link to={`/mitglieder/${mitglied.id}`}>
                <h4>{mitglied.name}</h4>
                <p>{mitglied.position}</p>
                <p>{mitglied.committee}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
