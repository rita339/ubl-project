import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Aktuelles } from "./components/Aktuelles.jsx";
import { Kontakt } from "./components/Kontakt.jsx";
import { Programm } from "./components/Programm.jsx";
import { Mitglieder } from "./components/Mitglieder.jsx";

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
        path: "/aktuelles",
        element: <Aktuelles />,
      },
      {
        path: "/programm",
        element: <Programm />,
      },
      {
        path: "/mitglieder",
        element: <Mitglieder />,
      },
      {
        path: "/Kontakt",
        element: <Kontakt />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
