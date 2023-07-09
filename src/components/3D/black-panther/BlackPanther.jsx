
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function BlackPanther(props) {
  const { nodes, materials } = useGLTF('/disney_infinity_3.0_-_avg_black_panther-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.AVG_Black_Panther_Body_AVG_Black_Panther_0.geometry} material={materials.AVG_Black_Panther} scale={0.885} />
    </group>
  )
}

useGLTF.preload('/disney_infinity_3.0_-_avg_black_panther-transformed.glb')
