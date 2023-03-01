import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Land(props) {
  const { nodes, materials } = useGLTF('./obj/land.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.05, 5.2, -27.11]} rotation={[-Math.PI, 0, -Math.PI]} scale={[28.31, 2.64, 12.63]}>
        <mesh receiveShadow geometry={nodes.Mesh.geometry} material={materials.grass} />
        <mesh receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.sand} />
      </group>
    </group>
  )
}

useGLTF.preload('./obj/land.glb')
