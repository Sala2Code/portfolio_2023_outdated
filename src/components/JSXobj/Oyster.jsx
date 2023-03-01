import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Oyster(props) {
  const { nodes, materials } = useGLTF('./obj/oyster.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Coral001.geometry} material={materials.pink} position={[8.42, -1.14, 7.85]} scale={6.13} />
      <mesh geometry={nodes.Coral002.geometry} material={materials.orange} position={[2.7, -0.88, 9.57]} scale={6.13} />
      <mesh geometry={nodes.Coral003.geometry} material={materials.Coral} position={[10.23, -0.73, -20.64]} scale={6.13} />
      <mesh geometry={nodes.Coral005.geometry} material={materials.green} position={[1.66, -0.54, -5.7]} scale={6.13} />
      <mesh geometry={nodes.Coral006.geometry} material={materials['Material.002']} position={[-0.4, -0.89, 2.89]} scale={6.13} />
      <group position={[2.48, 0, 0]} scale={[1.91, 0.83, 1.91]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={materials['in']} />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials.out} />
        <mesh geometry={nodes.Sphere_3.geometry} material={materials.pearl} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} position={[2.06, -0.36, -2.12]} scale={[12.17, 12.17, 15.83]} />
    </group>
  )
}

useGLTF.preload('/oyster.glb')
