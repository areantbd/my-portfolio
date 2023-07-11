import React, { useEffect, useState } from "react";
import NavBar from "../components/UI/nav-bar/NavBar";
//import BlackPanther from "../components/3D/black-panther/BlackPanther";
import BMW from "../components/3D/bmw/BMW";
// import BMW2 from "../components/3D/bmw-2/BMW2";

function TestZone() {
  const [pos, setPos] = useState(0)
  const [zoom, setZoom] = useState(50)

  useEffect(() => {
    if (window.innerWidth < 900 ){
      setZoom(20)
    }else {
      setZoom(50)
    }
  }, [])

  window.onscroll = () => {
    scrollFunction()
    zoomFunction()
  }
  function scrollFunction() {
    if (document.documentElement.scrollTop > 0){
      setPos(document.documentElement.scrollTop)
    }
  }
  
  function zoomFunction() {
    if (window.innerWidth < 900 ){
      setZoom(20)
    }else {
      setZoom(50)
    }
  }
  console.log("zoom", zoom)
  return (
    <div style={{height: "2000px", width: "100%"}}>
    <NavBar />

    {/* <BlackPanther pos={pos}/> */}
    <BMW pos={pos} zoom={zoom} />
    
    {/* <BMW2 pos={pos} /> */}

      <div className="container car-text" style={{position: "absolute", zIndex: 1}} >
        <h1>Lorem Ipsum</h1>
        <h1>dolor sit amet,</h1>
        <h1>onsectetur adipiscing elit,</h1>
        <h1>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua,</h1>
        <h1>Ut enim ad minim veniam</h1>
        <h1>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
        <h1>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h1>
        <h1>Excepteur sint occaecat cupidatat non proident,</h1>
        <h1>sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
      </div>
    

    </div>
  );
}

export default TestZone;
