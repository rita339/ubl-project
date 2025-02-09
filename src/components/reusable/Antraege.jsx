import "./Antraege.css";
import { antraegeList } from "../../antraegeList.js";

const Antraege = () => {
  return (
    <div className="Antraege">
      <h1>Anträge</h1>
      <p>Hier finden Sie alle aktuellen Anträge als PDF-Download.</p>

      <table className="antraege-table">
        <thead>
          <tr>
            <th>Titel</th>
            <th>Datum</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {antraegeList.map((antrag, index) => (
            <tr key={index}>
              <td>{antrag.title}</td>
              <td>{antrag.date}</td>
              <td>
                <a href={antrag.link} target="_blank" rel="noopener noreferrer">
                  📄 PDF öffnen
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Antraege;
