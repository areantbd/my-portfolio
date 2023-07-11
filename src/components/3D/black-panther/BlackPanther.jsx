
import React, { Suspense, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'

function Model(props) {
  let xPosition = props.pos / 200
  const { nodes, materials } = useGLTF('/disney_infinity_3.0_-_avg_black_panther-transformed.glb')
  const meshRef = useRef()
  useFrame((state, delta) => (meshRef.current.rotation.y = xPosition))
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta/10))
  
  const [hovered, setHover] = useState(false)
  console.log(hovered)
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh 
        geometry={nodes.AVG_Black_Panther_Body_AVG_Black_Panther_0.geometry} 
        material={materials.AVG_Black_Panther} 
        scale={2}           
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
      </mesh>
        
    </group>
  )
}

function BlackPanther({ pos }) {
  return (
    <div style={{width: "100%", height: "80vh", zIndex: 0}} className="mx-auto render">
      <Canvas camera={{zoom: 20, position: [0, -10, 90], fov: 50}}>
        <ambientLight intensity={0.9} />
        <pointLight position={[135, 135, 0]} intensity={3} color={"blue"} />
        <pointLight position={[-135, 135, 0]} intensity={5} color={"red"} />
        <Suspense fallback={null}>
          <Model pos={pos} position={[0, 0, -20]}/>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}

export default BlackPanther

// useGLTF.preload('/disney_infinity_3.0_-_avg_black_panther-transformed.glb')
