import "./MitgliedDetail.css";

// MitgliedDetail.jsx
import { useParams } from "react-router-dom";
import { memberTexts } from "../../memberTexts.js";

const MitgliedDetail = () => {
  const { id } = useParams();
  const member = memberTexts[id];

  if (!member) {
    return <p>Mitglied nicht gefunden!</p>;
  }

  return (
    <section className="MitgliedDetail">
      <img src={member.image} alt={member.name} />
      <div>
        <h1>{member.name}</h1>
        <p>Position: {member.position}</p>
        <p>Jahrgang: {member.year}</p>
        <h3>Ausschüsse:</h3>
        <ul>
          {member.committees.map((committee) => (
            <li key={committee}>{committee}</li>
          ))}
        </ul>

        <div className="description-container">
          {member.description.map((desc, index) => (
            <div key={index}>
              <p>{desc}</p>
            </div>
          ))}
        </div>
        <h3>Hobbys:</h3>
        <ul>
          {member.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MitgliedDetail;
