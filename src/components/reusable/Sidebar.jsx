import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Header } from "./Header.jsx";
import "./Navbar.css";

export const Sidebar = ({ isActive, setIsActive }) => {
  const handleClick = () => {
    if (window.innerWidth >= 1200) {
      setIsActive(isActive);
    } else {
      setIsActive(!isActive);
    }
  };
  return (
    <>
      <ul className="Sidebar">
        <i
          className="fa-solid fa-xmark"
          onClick={() => setIsActive(!isActive)}
        ></i>
        <NavLink to="/" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Home</p>
        </NavLink>
        <li className="divider"></li>

        <NavLink to="/aktuelles" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Aktuelles</p>
        </NavLink>
        <li className="divider"></li>

        <NavLink to="/archiv" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Archiv</p>
        </NavLink>
        <li className="divider"></li>

        <NavLink to="/programm" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Programm</p>
        </NavLink>
        <li className="divider"></li>

        <NavLink to="/mitglieder" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Mitglieder</p>
        </NavLink>
        <li className="divider"></li>

        <NavLink to="/kontakt" className="nav-link" onClick={handleClick}>
          <i className="fa-solid fa-check-double"></i>
          <p>Kontakt</p>
        </NavLink>
        <li className="divider"></li>
      </ul>
      <Header />
    </>
  );
};
