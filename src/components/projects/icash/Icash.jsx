import React, { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../contexts/LangContext";
import ica1 from "./images/ica1.jpeg";
import ica2 from "./images/ica2.jpeg";
import ica3 from "./images/ica3.jpeg";

function TvTracker() {
  const languaje = useContext(LangContext);
  const [lang, setLang] = useState(undefined);

  useEffect(() => {
    setLang(languaje);
  }, [languaje]);
  return (
    <div>
      <div
        id="carouselIcash"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <img src={ica1} className="d-block w-25 mx-auto rounded caroussel-img" alt={ica1} />
          </div>
          <div className="carousel-item">
            <img src={ica2} className="d-block w-25 mx-auto rounded caroussel-img" alt={ica2} />
          </div>
          <div className="carousel-item">
            <img src={ica3} className="d-block w-25 mx-auto rounded caroussel-img" alt={ica3} />
          </div>
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselIcash"
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
          data-bs-target="#carouselIcash"
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
            Icash es un proyecto realizado durante una formación de React Native.
            <br />
            Es una app pequeña pero con la que se aprenden las bases de la 
            creación de componentes con React Native. <br />
            Desplegado en Google Play Store.
          </h4>
          <div className="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.guezetatech.prestamos"
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
            Icash is a project developed during a React Native training.
            <br />
            It is a small app but with which you can learn the basics of creating 
            component creation with React Native.<br />
            Deployed in Google Play Store
          </h4>
          <div className="text-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.guezetatech.prestamos"
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
