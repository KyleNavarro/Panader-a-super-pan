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
              <a href={vacio}>Nuestras sedes</a>
            </li>
            <li>
              <a href="https://wa.me/573043564668" target="_blank">
                3043564668
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/superpan_bucaramanga/"
                target="_blank"
              >
                <img src="src\assets\instagram.svg" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="sliderContainer">
        <div className="slider position">
          <h1 className="sliderText">
            Prueba el mejor pan de Bucaramanga en alguno de nuestros 7 puntos en
            la ciudad
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
