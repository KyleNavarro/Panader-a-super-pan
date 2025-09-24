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
              <a href="#sedes">Nuestras sedes</a>
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
      <main>
        <div className="cardContainer">
          <h2>Nuestras sedes</h2>
          <section className="cards" id="sedes">
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio Porvenir</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio Coaviconsa</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio San Anto. Carrizal</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio campo hermoso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio villas don juan</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio oasis</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
            <div className="card">
              <img src="/src/assets/fotico.jpg" alt="" />
              <h3>Barrio cuaviconsa</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nobis
              </p>
              <button>Ver Mas</button>
            </div>
          </section>
        </div>

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
      </main>
    </>
  );
}

export default App;
