import React, { Suspense } from "react";
import NavBar from "../components/UI/nav-bar/NavBar";
import BlackPanther from "../components/3D/black-panther/BlackPanther";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Boxes from "../components/3D/boxes/Boxes";

function TestZone() {
  return (
    <>
    <NavBar />
    <div className="container d-flex justify-content-around pt-5">
      Test Zone
    </div>
    <div style={{width: "60%", height: "80vh"}} className="mx-auto">
      <Boxes />
    </div>

    <div style={{width: "60%", height: "80vh"}} className="mx-auto">
      <Canvas camera={{zoom: 20, position: [0, 0, 90], fov: 50}}>
        <ambientLight intensity={0.9} />
        <pointLight position={[35, 35, 0]} intensity={1} />
        <pointLight position={[-35, 35, 0]} intensity={1} />
        <Suspense fallback={null}>
          <BlackPanther />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>

    

    </>
  );
}

export default TestZone;
