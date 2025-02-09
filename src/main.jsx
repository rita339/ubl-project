import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Aktuelles } from "./components/Aktuelles.jsx";
import { Kontakt } from "./components/Kontakt.jsx";
import { Programm } from "./components/Programm.jsx";
import Archiv from "./components/Archiv.jsx";
import { Mitglieder } from "./components/Mitglieder.jsx";
import { KitaProgramm } from "./components/KitaProgramm.jsx";
import { UmweltProgramm } from "./components/UmweltProgramm.jsx";
import { JugendProgramm } from "./components/JugendProgramm.jsx";
import { StadtKohlscheid } from "./components/StadtKohlscheid.jsx";
import { StadtMerkstein } from "./components/StadtMerkstein.jsx";
import { StadtHerzMitte } from "./components/StadtHerzMitte.jsx";
import { SportProgramm } from "./components/SportProgramm.jsx";
import { SozialesProgramm } from "./components/SozialesProgramm.jsx";
import { Datenschutz } from "./components/reusable/Datenschutz.jsx";
import { Impressum } from "./components/reusable/Impressum.jsx";
import MitgliedDetail from "./components/members/MitgliedDetail.jsx";
import Antraege from "./components/reusable/Antraege.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // nur die Componenten, die geladen werden sollen.
        path: "/",
        element: <Home />,
      },
      {
        path: "aktuelles",
        element: <Aktuelles />,
      },
      {
        path: "archiv",
        element: <Archiv />,
      },
      {
        path: "programm",
        element: <Programm />,
      },
      {
        path: "kita",
        element: <KitaProgramm />,
      },
      {
        path: "umwelt",
        element: <UmweltProgramm />,
      },
      {
        path: "jugend",
        element: <JugendProgramm />,
      },
      {
        path: "stadt-kohlscheid",
        element: <StadtKohlscheid />,
      },
      {
        path: "stadt-merkstein",
        element: <StadtMerkstein />,
      },
      {
        path: "stadt-herzogenrath-mitte",
        element: <StadtHerzMitte />,
      },
      {
        path: "sport",
        element: <SportProgramm />,
      },
      {
        path: "soziales",
        element: <SozialesProgramm />,
      },
      {
        path: "mitglieder",
        element: <Mitglieder />,
      },
      {
        path: "mitglieder/:id", // dynamische Route
        element: <MitgliedDetail />,
      },
      {
        path: "antraege",
        element: <Antraege />,
      },
      {
        path: "kontakt",
        element: <Kontakt />,
      },
      {
        path: "datenschutz",
        element: <Datenschutz />,
      },
      {
        path: "impressum",
        element: <Impressum />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
