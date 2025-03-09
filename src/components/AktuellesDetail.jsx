import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./AktuellesDetail.css";
import aktuellesData from "../aktuellesData.js";

const AktuellesDetail = () => {
  const { id } = useParams();
  const article = aktuellesData.find((item) => item.id === id);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!article) {
    return <p className="error-message">Artikel nicht gefunden.</p>;
  }

  return (
    <div className="AktuellesDetail">
      <h1>{article.title}</h1>
      <p className="date">Veröffentlicht am: {article.date}</p>
      <img className="detail-image" src={article.image} alt={article.title} />
      <div className="detail-text">
        {Array.isArray(article.content) ? (
          article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{article.content}</p> // Falls es nur ein String ist, einfach ausgeben
        )}
      </div>
      <div>
        <button className="back-button" onClick={() => navigate("/aktuelles")}>
          Zurück
        </button>
      </div>
    </div>
  );
};

export default AktuellesDetail;
