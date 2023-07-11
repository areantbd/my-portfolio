import React, { Suspense, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'

export function Model(props) {
  let Position = props.pos / 200
  const { nodes, materials } = useGLTF('/bmw_m6_gt3_shiny__evil.glb')
  const meshRef = useRef()
  useFrame((state, delta) => (meshRef.current.rotation.y = -Position))
  useFrame((state, delta) => (meshRef.current.rotation.x = Position/50))
  
  return (
    <group ref={meshRef} {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.BADGES} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.BLUERED} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.BMW_M6_GT3_by_Alex_Ka} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_7.geometry} material={materials.BOTTOM} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.BRAKEDISC} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.BRAKELIGHT} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_11.geometry} material={materials.DETAILS} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_12.geometry} material={materials.EMBLEM} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.FOFLIGHT} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_14.geometry} material={materials.FUELcap} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_15.geometry} material={materials.GRILL} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.HEADLIGHT} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_17.geometry} material={materials.INTERIOR} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.material} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_19.geometry} material={materials.RADIATORfront} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_21.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.SUPORT1} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_23.geometry} material={materials.WINDOWS} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.WINDOWrear} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_25.geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_26.geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_27.geometry} material={materials.brakelightsglass} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_28.geometry} material={materials.carshadow} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_29.geometry} material={materials.decal} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_30.geometry} material={materials.detailplastic} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_31.geometry} material={materials.detailsmatte} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.exhausthole} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_33.geometry} material={materials.floor} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_34.geometry} material={materials.fogglass} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_35.geometry} material={materials.headlightsglass} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.mirrorinterior} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_38.geometry} material={materials.mirrors} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_39.geometry} material={materials.plate} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_40.geometry} material={materials.supportlogo} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
      <mesh geometry={nodes.Object_41.geometry} material={materials.tire} rotation={[-Math.PI / 2, 0, 0]} scale={1.087} />
    </group>
  )
}

function BMW2 ({ pos }) {
  return (
    <div style={{width: "100%", height: "70vh", zIndex: 0}} className="mx-auto render">
      <Canvas camera={{zoom: 40, position: [0, 0, 90], fov: 50}}>
        <ambientLight intensity={0.9} />
        <pointLight position={[135, 135, 0]} intensity={0.5} color={"blue"} />
        <pointLight position={[0, 135, 0]} intensity={0.5} color={"white"} />
        <pointLight position={[-135, 135, 0]} intensity={1} color={"blue"} />
        <pointLight position={[-135, 135, 0]} intensity={1} color={"white"} />
        <Suspense fallback={null}>
          <Model pos={pos} position={[0, -0.5, -10]}/>
        </Suspense>
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  )
}

export default BMW2 