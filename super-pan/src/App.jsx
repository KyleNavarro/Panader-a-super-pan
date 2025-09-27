import { useState } from "react";
import "./App.css";
import Sedes from "./assets/Sedes";
import About from "./about";

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
      <div className="page">
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
                <a href="#sedes">Nuestras sedes</a>
              </li>
              <li>
                <a href="#nosotros">Sobre Nosotros</a>
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
              Con 9 años de experiencia y 7 sedes en Bucaramanga, ofrecemos la
              frescura y calidad que nos distingue.
            </h1>
          </div>
        </div>

        <div className="cardContainer">
          <h2 id="sedes">Nuestras sedes</h2>
          <Sedes />
        </div>

        <article id="nosotros">
          <About />
        </article>

        <footer>
          <ul>
            <li>
              <a href="https://wa.me/573043564668" target="_blank">
                3043564668
              </a>
            </li>
            <li>correo@correo.com</li>
            <li>
              <a
                href="https://www.instagram.com/superpan_bucaramanga/"
                target="_blank"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#sedes">Nuestras sedes</a>
            </li>
          </ul>
          <span>
            <a
              href="https://www.linkedin.com/in/kyle-navarro-geek/"
              target="_blank"
            >
              Elaborado por: Kyle Navarro
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}

export default App;
