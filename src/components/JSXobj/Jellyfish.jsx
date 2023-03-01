import React, { useRef, useEffect} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { EffectComposer, SelectiveBloom, Select, Selection } from '@react-three/postprocessing';

export default function Jellyfish(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./obj/jellyfish.glb')
  const { actions, names } = useAnimations(animations, group)
  useEffect( () => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={500}>
          <group name="be6cb34c61504b27b338712779116422fbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode">
              <group name="root">
                <group name="node_id30" scale={0} />
              </group>
            </group>
          </group>
        </group>
        <group name="Armature" position={[-0.01, 2.38, 0]} rotation={[-Math.PI, 0, 0]} scale={0.02} />
        <group name="Armature001" position={[0.08, 9.88, -0.08]} rotation={[3.14, 0, 0]} scale={2.4}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone005} />
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.Bone009} />
          <primitive object={nodes.Bone010} />
          <primitive object={nodes.Bone011} />
          <primitive object={nodes.Bone013} />
          <primitive object={nodes.Bone014} />
          <primitive object={nodes.Bone015} />
          <primitive object={nodes.Bone016} />
          <primitive object={nodes.Bone019} />
          <primitive object={nodes.Bone023} />
          <primitive object={nodes.Bone041} />
          <primitive object={nodes.Bone004} />
          <skinnedMesh name="node_id30_Material_51_0" geometry={nodes.node_id30_Material_51_0.geometry} material={materials.Material_51} skeleton={nodes.node_id30_Material_51_0.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./obj/jellyfish.glb')
