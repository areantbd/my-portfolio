import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import ang1 from "./images/angular1.png"
import ang2 from "./images/angular2.png";
import ang3 from "./images/angular3.png";
import ang4 from "./images/angular4.png";

function AngularColection() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);
  return (
    <div>
      <div
        id="carouselAngularApp"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={ang1} className="d-block w-75 mx-auto rounded caroussel-img" alt={ang1} />
          </div>
          <div className="carousel-item">
            <img src={ang2} className="d-block w-75 mx-auto rounded caroussel-img" alt={ang2} />
          </div>
          <div className="carousel-item">
            <img src={ang3} className="d-block w-75 mx-auto rounded caroussel-img" alt={ang3} />
          </div>
          <div className="carousel-item">
            <img src={ang4} className="d-block w-75 mx-auto rounded caroussel-img" alt={ang4} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselAngularApp"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon text-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselAngularApp"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {lang?.lang === "esp" ? (
        <>
          <h4 className="mt-3 container">
            Colección de aplicaciones.
            <br />
            Aplicaciones creadas durante un curso de Angular en Udemy, la aplicación donde unifico los proyectos es 100% código personal usando los conocimientos del curso. <br />
            Es completamente responsive, pero creada mobile first. <br />
            Está desplegada en Netlify haciendo uso del archivo _redirects para reparar los problemas con las rutas.
          </h4>
          <div className="text-center">
            <a
              href="https://aplicaciones-curso-angular.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Ir al proyecto.
            </a>
          </div>
        </>
      ) : (
        <>
          <h4 className="mt-3 container">
            Apps collection.
            <br />
            Applications created during an Angular course at Udemy, the application where I unify the projects is 100% personal code, using course knowledge.<br />
            It is fully responsive, but created mobile first. <br />
            Deployed in Netlify, using _redirects file to repair routes problems.
          </h4>
          <div className="text-center">
            <a
              href="https://aplicaciones-curso-angular.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Go to the project.
            </a>
          </div>
        </>
      )}
    </div>
  );
}

export default AngularColection;
