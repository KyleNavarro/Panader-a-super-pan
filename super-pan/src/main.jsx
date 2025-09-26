import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Sedes from "./assets/Sedes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>
);
