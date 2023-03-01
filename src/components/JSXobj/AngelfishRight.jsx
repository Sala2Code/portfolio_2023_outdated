import React, { useRef, useState, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function AngelfishRight(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./obj/angelfishRight.gltf')
  const { actions, names, mixer } = useAnimations(animations, group)

  // Natural animation
  useEffect( () => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  const clickTime = useRef(0);

  // Set again natural animation 
  useEffect(() => {
    const fn = () => {
      mixer.stopAllAction();
      actions[names[0]].time = actions[names[0]]._clip.duration;
      actions[names[0]].play();
    };
    
    mixer.addEventListener('finished', fn)
    return () => {
      mixer.removeEventListener('finished', fn)
    };
  }, [mixer]);

  // 0 : natural animation
  // 1 : turn
  const turnAngel = () => {
    actions[names[1]].repetitions=false;
    const currentTime = Date.now();
    if (currentTime - clickTime.current > actions[names[1]]._clip.duration * 1000) {

      actions[names[1]].reset().fadeIn(0.5).play();
      actions[names[0]].fadeOut(0.5);

      clickTime.current = Date.now();
    }
  }; 

  useEffect(() => {
    if(props.event[0]=="R"){
      turnAngel();
    }
  }, [props.event]);


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0.02, 0.02, 0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.54} />
        <group name="Armature001" position={[0.11, 0.25, -0.11]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone004} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone008} />
          <group name="Plane">
            <skinnedMesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials.eye} skeleton={nodes.Plane_1.skeleton} />
            <skinnedMesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials.skin} skeleton={nodes.Plane_2.skeleton} />
            <skinnedMesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials.fee} skeleton={nodes.Plane_3.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./obj/angelfishRight.gltf')
