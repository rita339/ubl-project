import { useEffect } from "react";
import "./Aktuelles.css";
import { Link } from "react-router-dom";
import aktuellesData from "../aktuellesData.js";

export const Aktuelles = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <section className="Aktuelles">
      <h1>Aktuelles</h1>
      <div className="aktuelles-wrapper">
        {aktuellesData.map((item, index) => (
          <div key={index} className="aktuelles-card">
            {item.image && (
              <div className="aktuelles-pic">
                <img src={item.image} alt={item.title} />
              </div>
            )}
            <div className="aktuelles-content">
              <h3>{item.title}</h3>
              <p className="aktuelles-date">{item.date}</p>
              <p>
                {Array.isArray(item.content)
                  ? item.content[0].slice(0, 150) + "..."
                  : item.content.slice(0, 150) + "..."}
              </p>
              <Link to={`/aktuelles/${item.id}`} className="aktuelles-link">
                <p>weiterlesen</p>
                <i className="fa-solid fa-check-double"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
