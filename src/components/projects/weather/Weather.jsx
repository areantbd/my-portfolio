import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import wea1 from "./images/weather1.png"
import wea2 from "./images/weather2.png";
import wea3 from "./images/weather3.png";

function TvTracker() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);
  return (
    <div>
      <div
        id="carouselWeather"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={wea1} className="d-block w-75 mx-auto rounded caroussel-img" alt={wea1} />
          </div>
          <div className="carousel-item">
            <img src={wea2} className="d-block w-75 mx-auto rounded caroussel-img" alt={wea2} />
          </div>
          <div className="carousel-item">
            <img src={wea3} className="d-block w-75 mx-auto rounded caroussel-img" alt={wea3} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselWeather"
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
          data-bs-target="#carouselWeather"
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
            Mi aplicación del tiempo es un proyecto para asentar mis conocimientos de React.
            <br />
            Para su creación he utilizado React, Axios para comunicarme con el API, SASS para los estilos y 
            Google Maps para pintar la ubicación del municipio en cada componente, además de BootStrap para el layout y
            algún componente. <br />
            He usado un API de terceros, en este caso ha sido la de <a href="https://www.el-tiempo.net/api" target="_blank" rel="noreferrer" className="text-decoration-none fw-bold fs-4">El tiempo.net</a> <br />
            Es completamente responsive, pero creada mobile first. <br />
            Está desplegada en Netlify, pero aún sin terminar.
          </h4>
          <div className="text-center">
            <a
              href="https://miappdeltiempo.netlify.app/"
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
            My weather app is a project to settle my knowledge of React.
            <br />
            For its creation I used React, Axios to communicate with the API, SASS for the styles and Google Maps to paint the 
            location of each component, Google Maps to paint the location of the town in each component, plus BootStrap for the 
            layout and some component some components.<br />
            I used a third party API, in this case it was <a href="https://www.el-tiempo.net/api" target="_blank" rel="noreferrer" className="text-decoration-none fw-bold fs-4">El tiempo.net</a> <br />
            It is fully responsive, but created mobile first. <br />
            Deployed in Netlify, but still unfinished.
          </h4>
          <div className="text-center">
            <a
              href="https://miappdeltiempo.netlify.app/"
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

export default TvTracker;
