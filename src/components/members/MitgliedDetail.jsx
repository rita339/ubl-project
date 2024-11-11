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
      <h1>{member.name}</h1>
      <img src={member.image} alt={member.name} />
      <p>Position: {member.position}</p>
      <h3>Ausschüsse:</h3>
      <ul>
        {member.committees.map((committee) => (
          <li key={committee}>{committee}</li>
        ))}
      </ul>
      {member.description.map((desc, index) => (
        <p key={index}>{desc}</p>
      ))}
      <h3>Hobbys:</h3>
      <ul>
        {member.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default MitgliedDetail;
