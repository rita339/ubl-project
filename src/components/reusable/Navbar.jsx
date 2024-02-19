import { NavLink } from "react-router-dom";
import Logoimage from "/Logo_UBL.png";
import { Sidebar } from "./Sidebar.jsx";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  //  isActive-Zustand wird basierend auf der Bildschirmbreite dynamisch aktualisiert und die Sidebar entsprechend geöffnet oder geschlossen wird, wenn sich die Bildschirmbreite ändert.
  useEffect(() => {
    const handleResize = () => {
      // window als Teil des Browser-Objektmodells (BOM), um auf bestimmte Browserfunktionen zuzugreifen.
      setIsActive(window.innerWidth >= 992);
    };

    handleResize(); // Initialisierung beim Laden der Komponente

    window.addEventListener("resize", handleResize);

    // Cleanup-Funktion für den Event Listener. Sie entfernt den zuvor hinzugefügten Event Listener, um Speicherlecks oder unerwünschte Nebeneffekte zu vermeiden.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Abhängigkeitsarray leer, um das Abonnieren und Abbestellen des Event Listeners nur einmalig beim Laden der Komponente durchzuführen

  return (
    <>
      <nav className="Navbar">
        <NavLink to="/" className="img-logo">
          <img src={Logoimage} alt="Logo_UBL" />
        </NavLink>
        <i className="fa-solid fa-bars" onClick={() => setIsActive(true)}></i>
        {isActive && <Sidebar isActive={isActive} setIsActive={setIsActive} />}
      </nav>
    </>
  );
};
