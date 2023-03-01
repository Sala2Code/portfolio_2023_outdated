import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Octopus(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./obj/octopus.glb')
  const { actions, names, mixer } = useAnimations(animations, group)

  const clickTime = useRef(0);

  // Set again natural animation
  useEffect(() => {
    const fn = () => {
      mixer.stopAllAction();
      actions[names[2]].time = actions[names[props.event[1]]]._clip.duration;
      actions[names[2]].play();
    };
    
    mixer.addEventListener('finished', fn)
    return () => {
      mixer.removeEventListener('finished', fn)
    };
  }, [mixer]);

  // 1 : right
  // 2 : natural 
  // 3 : left
  // props.event[1] is either 0 or 2;
  // Block click during animation
  function clickSquid(){
    actions[names[props.event[1]]].repetitions=false;
    const currentTime = Date.now();
    if (currentTime - clickTime.current > actions[names[props.event[1]]]._clip.duration * 1000) {

      actions[names[props.event[1]]].reset().fadeIn(0.5).play();
      actions[names[2]].fadeOut(0.5);

      clickTime.current = Date.now();
    }
  }; 

  // Natural animation
  useEffect( () => {
    actions[names[2]].reset().fadeIn(0.5).play();
  }, []);

  // Angelfish click
  useEffect( () => {
    clickSquid();
  }, [props.event]);

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" position={[0, 1.18, 0]}>
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone005} />
          <primitive object={nodes.Bone007} />
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.Bone010} />
          <primitive object={nodes.Bone012} />
          <primitive object={nodes.neutral_bone} />
          <group name="Sphere">
            <skinnedMesh name="Sphere_1" geometry={nodes.Sphere_1.geometry} material={materials.skin} skeleton={nodes.Sphere_1.skeleton} />
            <skinnedMesh name="Sphere_2" geometry={nodes.Sphere_2.geometry} material={materials.ventouse} skeleton={nodes.Sphere_2.skeleton} />
            <skinnedMesh name="Sphere_3" geometry={nodes.Sphere_3.geometry} material={materials.eye} skeleton={nodes.Sphere_3.skeleton} />
            <skinnedMesh name="Sphere_4" geometry={nodes.Sphere_4.geometry} material={materials.pupille} skeleton={nodes.Sphere_4.skeleton} />
          </group>
        </group>
        <mesh name="rock" geometry={nodes.rock.geometry} material={materials.color3} position={[-1.55, -3.49, 0.9]} rotation={[Math.PI / 2, 0, 3.03]} scale={1.29} />
        <mesh name="rock001" geometry={nodes.rock001.geometry} material={materials.color3} position={[-9.96, 1.14, 2.29]} rotation={[Math.PI / 2, 0, -2.11]} scale={[1.29, 1.29, 2.74]} />
      </group>
    </group>
  )
}

useGLTF.preload('./obj/octopus.glb')
