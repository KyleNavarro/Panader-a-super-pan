import { useState } from "react";
import "./App.css";

let vacio = "";

function App() {
  const OpenCloseMenu = () => {
    const menuDesplegable = document.getElementById("menu");
    const closeButton = document.getElementById("x");
    menuDesplegable.classList.toggle("openMenu");
    closeButton.classList.toggle("putX");
  };

  return (
    <>
      <header>
        <div className="barras">
          <button onClick={OpenCloseMenu} className="buttonMenu" id="x">
            soy el boton
          </button>
        </div>
        <nav id="menu" className="desplegable">
          <ul>
            <li>
              <a href="#">
                <img id="logo" src="src\assets\logo.png" alt="" />
              </a>
            </li>
            <li>
              <a href={vacio}>Nuestros Puntos</a>
            </li>
            <li>
              <a href={vacio}>3043564668</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
