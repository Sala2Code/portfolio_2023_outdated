import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei'
import * as THREE from "three"
import { getMouseDegrees } from "components/js/utils/utils";
import { useFrame, useThree } from '@react-three/fiber'

function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.MathUtils.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.MathUtils.degToRad(joint.rotation.yD)
}



export default function Creator(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./obj/creator.glb')
  const { actions, names, mixer } = useAnimations(animations, group)

    const clickTime = useRef(0); // Animation Hello
    const headTime = useRef(0); // Head lookAt cursor

    // Set again natural animation
    useEffect(() => {
      const fn = () => {
        mixer.stopAllAction();
        actions[names[1]].play();
      };
      
      mixer.addEventListener('finished', fn)
      return () => {
        mixer.removeEventListener('finished', fn)
      };
    }, [mixer]);
  
    function clickHello(){
      actions[names[0]].repetitions=false;
      const currentTime = Date.now();
      if (currentTime - clickTime.current > actions[names[0]]._clip.duration * 1000) {
  
        actions[names[0]].reset().fadeIn(0.1).play();
        actions[names[1]].fadeOut(0.1);
  
        clickTime.current = Date.now();
      }
    }; 
    useEffect( () => {
      clickHello();
    }, [props.event]);

    useEffect( () => {
      actions[names[1]].reset().fadeIn(0.1).play();
    }, []);

    const { size } = useThree()
    useFrame((state, delta) => {
      if(Date.now() - headTime.current > 50){
        mixer.update(delta)
        const mouse = { x: (state.mouse.x * size.width) / 2, y: size.height / 2 + (-state.mouse.y * size.height) / 2 }
        moveJoint(mouse, nodes.Head, 40)
        headTime.current = Date.now();

      }
      
    })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips}  />
          <skinnedMesh name="Wolf3D_Body" geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
          <skinnedMesh name="Wolf3D_Hair"  geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom" geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials['Material.001']} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear" geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top" geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.PULL} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./obj/creator.glb')
