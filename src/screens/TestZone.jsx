import React from "react";
import NavBar from "../components/UI/nav-bar/NavBar";
import BlackPanther from "../components/3D/BlackPanther";

function TestZone() {
  return (
    <>
    <NavBar />
    <div className="container d-flex justify-content-around pt-5">
      Test Zone
    </div>

    <BlackPanther />
    </>
  );
}

export default TestZone;
