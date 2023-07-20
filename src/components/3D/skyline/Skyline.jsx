
import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'

function Model(props) {
  let xPosition = props.pos / 200
  const { nodes } = useGLTF('/areantbd-2022.glb')
  const meshRef = useRef()
  useFrame((state, delta) => (meshRef.current.rotation.y = xPosition))
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta/10))
  
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.stlmesh.geometry} material={nodes.stlmesh.material} />
    </group>
  )
}

function Skyline() {
  return (
    <div style={{width: "100%", height: "80vh", zIndex: 0}} className="mx-auto render">
      <Canvas camera={{zoom: 20, position: [0, 90, 0], fov: 0}}>
        <ambientLight intensity={1} />
        <pointLight position={[135, 135, 0]} intensity={3} color={"blue"} />
        <pointLight position={[-135, 135, 0]} intensity={5} color={"red"} />
        <Suspense fallback={null}>
          <Model position={[0, 0, -20]}/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Skyline

// useGLTF.preload('/disney_infinity_3.0_-_avg_black_panther-transformed.glb')
