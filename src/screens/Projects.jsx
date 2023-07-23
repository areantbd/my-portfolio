import React, { useContext } from "react";
import Section from "../components/UI/section/Section";
import NavBar from "../components/UI/nav-bar/NavBar";
import Otfn from "../components/projects/otfn/Otfn";
import Portfolio from "../components/projects/portfolio/Portfolio";
import Rick from "../components/projects/rick&morty/Rick&Morty";
import ScubaDiver from "../components/projects/scuba-diver/ScubaDiver";
import ShippingBids from "../components/projects/shipping-bids/ShippingBids";
import TvTracker from "../components/projects/tv-tracker/TvTracker";
import { ThemeContext } from "../contexts/ThemeContext";
import Weather from "../components/projects/weather/Weather";
import Icash from "../components/projects/icash/Icash";

function Projects() {
  const theme = useContext(ThemeContext);

  return theme?.theme === "dark" ? (
    <>
      <NavBar />
      <div classNameName="pb-5 container">
        <div
          className="accordion bg-dark  container py-5"
          id="accordionFlushExample"
        >
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header" id="flush-headingWeather">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseWeather"
              aria-expanded="false"
              aria-controls="flush-collapseWeather"
            >
              <Section title="Weather App" classNameName="pt-4" />
            </button>
          </h2>
          <div
            id="flush-collapseWeather"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingWeather"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <Weather />
            </div>
          </div>
        </div>
        <div className="accordion-item bg-dark text-light">
          <h2 className="accordion-header" id="flush-headingIcash">
            <button
              className="accordion-button collapsed bg-dark text-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseIcash"
              aria-expanded="false"
              aria-controls="flush-collapseIcash"
            >
              <Section title="Icash" classNameName="pt-4" />
            </button>
          </h2>
          <div
            id="flush-collapseIcash"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingIcash"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <Icash />
            </div>
          </div>
        </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingRick">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseRick"
                aria-expanded="false"
                aria-controls="flush-collapseRick"
              >
                <Section title="Rick & Morty Pedia" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseRick"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingRick"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Rick />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <Section title="My Portfolio" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Portfolio />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <Section title="Shipping Bids" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ShippingBids />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <Section title="Tv-Tracker" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <TvTracker />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <Section title="ScubaDiver" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ScubaDiver />
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark text-light">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <Section title="Online tool for noobs" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Otfn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <NavBar />
      <div>
        <div className="accordion container py-5" id="accordionFlushExample">
        {/* <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingRick">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseWeather"
                aria-expanded="false"
                aria-controls="flush-collapseWeather"
              >
                <Section title="Weather App" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseWeather"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingRick"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Weather />
              </div>
            </div>
          </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingRick">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseIcash"
                aria-expanded="false"
                aria-controls="flush-collapseIcash"
              >
                <Section title="Icash" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseIcash"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingRick"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Icash />
              </div>
            </div>
          </div> */}
          
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingWeather">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseWeather"
              aria-expanded="false"
              aria-controls="flush-collapseWeather"
            >
              <Section title="Weather App" classNameName="pt-4" />
            </button>
          </h2>
          <div
            id="flush-collapseWeather"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingWeather"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <Weather />
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingIcash">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseIcash"
              aria-expanded="false"
              aria-controls="flush-collapseIcash"
            >
              <Section title="Icash" classNameName="pt-4" />
            </button>
          </h2>
          <div
            id="flush-collapseIcash"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingIcash"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <Icash />
            </div>
          </div>
        </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingRick">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseRick"
                aria-expanded="false"
                aria-controls="flush-collapseRick"
              >
                <Section title="Rick & Morty Pedia" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseRick"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingRick"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Rick />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <Section title="My Portfolio" classNameName="pt-4" />
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Portfolio />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <Section title="Shipping Bids" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ShippingBids />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <Section title="Tv-Tracker" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <TvTracker />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                <Section title="ScubaDiver" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ScubaDiver />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                <Section title="Online tool for noobs" classNameName="pt-3" />
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <Otfn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
