import React, { Suspense, useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'

export function Model(props) {
  let Position = props.pos / 200
  const { nodes, materials } = useGLTF('/free_bmw_m3_e30.glb')
  const meshRef = useRef()
  useFrame((state, delta) => (meshRef.current.rotation.y = -Position))
  useFrame((state, delta) => (meshRef.current.rotation.x = Position/50))
  
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <group position={[0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]}>
        <mesh geometry={nodes.Object_21.geometry} material={materials.Brembo_Calipers} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.Logo_Plane} rotation={[0, -0.501, 0]} />
      </group>
      <group position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]}>
        <mesh geometry={nodes.Object_31.geometry} material={materials.Brembo_Calipers} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.Logo_Plane} rotation={[-Math.PI, -0.354, 0]} />
      </group>
      <group position={[0.709, 0.311, -1.241]}>
        <mesh geometry={nodes.Object_41.geometry} material={materials.Brembo_Calipers} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.Logo_Plane} />
      </group>
      <group position={[-0.709, 0.311, -1.241]}>
        <mesh geometry={nodes.Object_51.geometry} material={materials.Brembo_Calipers} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Logo_Plane} />
      </group>
      <mesh geometry={nodes.Object_4.geometry} material={materials.BMW_E30_M3_PAINT} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.BMW_E30_M3_PLASTIC} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.BMW_E30_M3_CHROME} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.BMW_E30_M3_WINDOWS} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.BMW_E30_M3_BLACKOUT} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.BMW_E30_M3_SIDE_MIRROR} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.BMW_E30_M3_TAILLIGHT_REFLECTOR} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.BMW_E30_M3_HEADLIGHT_REFLECTOR} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.BMW_E30_M3_EMBLEMS} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.BMW_E30_M3_LENS} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.BMW_E30_M3_RIM} position={[0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.BMW_E30_M3_TIRE} position={[0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.Brake_Disc} position={[0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.BMW_E30_M3_RIM} position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.BMW_E30_M3_TIRE} position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.Brake_Disc} position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.BMW_E30_M3_RIM} position={[0.709, 0.311, -1.241]} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.BMW_E30_M3_TIRE} position={[0.709, 0.311, -1.241]} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.Brake_Disc} position={[0.709, 0.311, -1.241]} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.BMW_E30_M3_RIM} position={[-0.709, 0.311, -1.241]} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.BMW_E30_M3_TIRE} position={[-0.709, 0.311, -1.241]} />
      <mesh geometry={nodes.Object_49.geometry} material={materials.Brake_Disc} position={[-0.709, 0.311, -1.241]} />
    </group>
  )
}
function BMW ({ pos, camera, color }) {
  const [inCamera, setInCamera] = useState({})
  useEffect(() => {
    setInCamera(camera)

  }, [camera])
  // const [responsiveZoom, setResponsiveZoom] = useState()
  // useEffect(() => {
  //   if (window.innerWidth < 900 ){
  //     setResponsiveZoom(20)
  //   }else {
  //     setResponsiveZoom(50)
  //   }
  // }, [zoom])
  console.log(color)
  console.log(inCamera)

  return (
    <div style={{width: "100%", height: "80vh", zIndex: 0}} className="render">    
      <Canvas camera={inCamera}>
        <ambientLight intensity={0.9} />
        <pointLight position={[135, 135, 0]} intensity={0.5} color={color.color1} />
        <pointLight position={[0, 135, 0]} intensity={0.5} color={"white"} />
        <pointLight position={[-135, 135, 0]} intensity={1.5} color={color.color2} />
        <pointLight position={[-135, 135, 0]} intensity={1} color={"white"} />
        <Suspense fallback={null}>
          <Model pos={pos} position={[0, -0.5, -10]}/>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}

export default BMW 