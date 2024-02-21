import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { Header } from "./Header.jsx";
import "./Navbar.css";

export const Sidebar = ({ isActive, setIsActive }) => {
  return (
    <>
      <ul className="Sidebar">
        <i
          className="fa-solid fa-xmark"
          onClick={() => setIsActive(!isActive)}
        ></i>
        <NavLink
          to="/"
          className="nav-link"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-house "></i>
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/aktuelles"
          className="nav-link"
          // id="nav-link-mq"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-bell"></i>
          <p>Aktuelles</p>
        </NavLink>

        <NavLink
          to="/programm"
          className="nav-link"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-book"></i>
          <p>Programm</p>
        </NavLink>

        <NavLink
          to="/mitglieder"
          className="nav-link"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-user"></i>
          <p>Mitglieder</p>
        </NavLink>

        <NavLink
          to="/kontakt"
          className="nav-link"
          onClick={() => setIsActive(!isActive)}
        >
          <i className="fa-solid fa-envelope"></i>
          <p>Kontakt</p>
        </NavLink>
      </ul>
      <Header />
    </>
  );
};
