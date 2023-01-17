import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import rick1 from "./images/rick1.png";
import rick2 from "./images/rick2.png";
import rick3 from "./images/rick3.png";
import rick4 from "./images/rick4.png";

function ScubaDiver() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);

  return (
    <div>
      <div
        id="carousel-rick"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img
              src={rick1}
              className="d-block w-75 mx-auto rounded caroussel-img"
              alt={rick1}
            />
          </div>
          <div className="carousel-item">
            <img
              src={rick2}
              className="d-block w-75 mx-auto rounded caroussel-img"
              alt={rick2}
            />
          </div>
          <div className="carousel-item">
            <img
              src={rick3}
              className="d-block w-75 mx-auto rounded caroussel-img"
              alt={rick3}
            />
          </div>
          <div className="carousel-item">
            <img
              src={rick4}
              className="d-block w-75 mx-auto rounded caroussel-img"
              alt={rick4}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carousel-rick"
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
          data-bs-target="#carousel-rick"
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
            Esta app es un proyecto personal a modo de práctica de React.
            <br />
            Ha sido creado utilizando React y una <a className="api-anchor" href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">API</a> de terceros.
            <br />
            Es una aplicación donde poder ver todos los personajes y ubicaciones disponibles del mundo de Rick & Morty y algunos datos sobre ellos.
            <br />
            El reto más grande ha sido lidiar con las diferentes formas en que se obtienen los datos de la API y generar componentes que pudiesen utilizarlas todas.
          </h4>
          <div className="text-center">
            <a
              href="https://myrickandmortypedia.netlify.app/"
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
            This app is a personal project as a React practice.
            <br />
            It has been created using React and a third party <a className="api-anchor" href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">API</a>.
            <br />
            It is an application where you can see all the characters and locations available in the world of Rick & Morty and some data about them.
            <br />
            The biggest challenge has been to deal with the different ways to get the data from the API and generate components that could use all of them.
          </h4>
          <div className="text-center">
            <a
              href="hhttps://myrickandmortypedia.netlify.app/"
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

export default ScubaDiver;
