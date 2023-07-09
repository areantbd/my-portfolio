import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta*2))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      // scale={active ? 1.5 : 1}
      onClick={() => alert("you won")}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'grey'} />
    </mesh>
  )
}

function Box2(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  useFrame((state, delta) => (meshRef.current.rotation.y += delta*2))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      // scale={active ? 1.5 : 1}
      // onClick={(event) => setActive(!active)}
      
      onClick={() => alert("you lost")}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'grey'} />
    </mesh>
  )
}

function Boxes() {
  return (
    <div className='container '>
      <Canvas style={{height: "600px"}}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1, 0, 0]} />
        <Box2 position={[1, 0, 0]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Boxes