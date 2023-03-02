import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Island(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./obj/island.glb')
  const { actions, names } = useAnimations(animations, group)
  useEffect( () => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty" position={[0, -0.97, 0]} scale={3.82} />
        <group name="plant017" position={[-0.76, 1.14, -18.82]} rotation={[0.16, 0.87, -1.57]} scale={1.14} />
        <mesh name="Plane" castShadow  geometry={nodes.Plane.geometry} material={materials['Material.050']} position={[0.05, -4.27, -0.01]} rotation={[Math.PI / 2, 0, 0]} scale={[-21.66, -6.65, -2.46]} />
        <mesh name="Plane004" castShadow  geometry={nodes.Plane004.geometry} material={materials['Material.002']} position={[0.05, -1.8, -13.01]} rotation={[-Math.PI, 0, -Math.PI]} scale={[69.51, 12.96, 17.7]} />
        <mesh name="coque" castShadow  geometry={nodes.coque.geometry} material={materials.woodBoat} position={[0.84, -0.91, -16.08]} rotation={[-2.9, -1.23, -Math.PI]} scale={0.95} />
        <mesh name="rame001" castShadow  geometry={nodes.rame001.geometry} material={materials.woodPalm} position={[1.26, -0.34, -16.56]} rotation={[0.27, 0.1, 1.66]} scale={[0.05, 0.83, 0.04]} />
        <mesh name="rame" castShadow  geometry={nodes.rame.geometry} material={materials.woodPalm} position={[0.93, -0.65, -15.31]} rotation={[0.28, -0.62, 1.67]} scale={[0.05, 0.83, 0.04]} />
        <mesh name="Куб008" castShadow  geometry={nodes.Куб008.geometry} material={materials['Material.005']} position={[-1.83, -1.16, -15.94]} rotation={[-0.8, 0.48, 0.93]} scale={0.39} />
        <mesh name="Куб009" castShadow  geometry={nodes.Куб009.geometry} material={materials['Material.005']} position={[-2.77, -1.46, -14.8]} rotation={[-0.8, 0.48, 0.93]} scale={0.76} />
        <mesh name="Куб010" castShadow  geometry={nodes.Куб010.geometry} material={materials['Material.005']} position={[-2.2, -0.23, -18.17]} rotation={[1.28, -0.18, 3.07]} scale={0.33} />
        <mesh name="Цилиндр004" castShadow  geometry={nodes.Цилиндр004.geometry} material={materials.woodBoat} position={[2.12, -0.62, -17.45]} rotation={[0.16, Math.PI / 2, 0]} scale={[0.04, 0.55, 0.04]} />
        <mesh name="Куб011" castShadow  geometry={nodes.Куб011.geometry} material={materials.woodStick} position={[2.15, -0.65, -15.54]} rotation={[0.99, 0.94, -0.68]} scale={[0.03, 0.16, 0.03]} />
        <mesh name="КриваяБезье002" castShadow  geometry={nodes.КриваяБезье002.geometry} material={materials['Material.001']} position={[2.13, -0.39, -16.43]} rotation={[-1.41, -1.39, Math.PI / 2]} scale={0.99} />
        <mesh name="Плоскость032" castShadow  geometry={nodes.Плоскость032.geometry} material={materials.plant} position={[-1.86, -0.43, -18.03]} rotation={[2.69, 0.2, -3.01]} scale={0.03} />
        <mesh name="Плоскость036" castShadow  geometry={nodes.Плоскость036.geometry} material={materials.plant} position={[-1.85, -0.43, -18.03]} rotation={[2.44, -0.94, 1.93]} scale={0.03} />
        <mesh name="Плоскость037" castShadow  geometry={nodes.Плоскость037.geometry} material={materials.plant} position={[-1.86, -0.43, -18.03]} rotation={[0.65, -0.17, -0.18]} scale={0.03} />
        <mesh name="Плоскость046" castShadow  geometry={nodes.Плоскость046.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[2.54, 0.61, -2.65]} scale={0.02} />
        <mesh name="Плоскость047" castShadow  geometry={nodes.Плоскость047.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[1.08, 0.37, 0.3]} scale={0.02} />
        <mesh name="Плоскость048" castShadow  geometry={nodes.Плоскость048.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[1.6, -0.86, 1.48]} scale={0.02} />
        <mesh name="Плоскость049" castShadow  geometry={nodes.Плоскость049.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[1.99, 0.75, -1.36]} scale={0.02} />
        <mesh name="Плоскость050" castShadow  geometry={nodes.Плоскость050.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[2.76, -0.53, 2.39]} scale={0.02} />
        <mesh name="Плоскость051" castShadow  geometry={nodes.Плоскость051.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[0.96, -0.46, 0.32]} scale={0.02} />
        <mesh name="Плоскость052" castShadow  geometry={nodes.Плоскость052.geometry} material={materials.plant} position={[2.2, -0.61, -17.48]} rotation={[2.55, -0.05, -2.94]} scale={0.02} />
        <mesh name="dy021" castShadow  geometry={nodes.dy021.geometry} material={materials['Material.046']} position={[-5.02, 0.11, -21.14]} rotation={[0.16, 0.87, 0]} scale={0.16} />
        <mesh name="Icosphere001" castShadow  geometry={nodes.Icosphere001.geometry} material={materials['Material.047']} position={[-3.86, 0.29, -26]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Icosphere003" castShadow  geometry={nodes.Icosphere003.geometry} material={materials['Material.047']} position={[-3.75, 0.1, -26.23]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Icosphere004" castShadow  geometry={nodes.Icosphere004.geometry} material={materials['Material.047']} position={[-3.75, 0.28, -26.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Icosphere005" castShadow  geometry={nodes.Icosphere005.geometry} material={materials['Material.047']} position={[-3.86, 0.23, -26]} rotation={[Math.PI / 2, 0, 0]} scale={0.52} />
        <mesh name="Icosphere007" castShadow  geometry={nodes.Icosphere007.geometry} material={materials['Material.048']} position={[16.45, -0.28, -23.32]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere008" castShadow  geometry={nodes.Icosphere008.geometry} material={materials['Material.048']} position={[16.45, -0.28, -23.32]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere009" castShadow  geometry={nodes.Icosphere009.geometry} material={materials['Material.048']} position={[16.45, -0.35, -23.32]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere012" castShadow  geometry={nodes.Icosphere012.geometry} material={materials['Material.048']} position={[16.45, -0.4, -23.32]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere002" castShadow  geometry={nodes.Icosphere002.geometry} material={materials['Material.049']} position={[4.41, -0.16, -24.17]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere011" castShadow  geometry={nodes.Icosphere011.geometry} material={materials['Material.049']} position={[4.41, -0.12, -24.17]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere013" castShadow  geometry={nodes.Icosphere013.geometry} material={materials['Material.049']} position={[4.41, -0.04, -24.17]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <mesh name="Icosphere014" castShadow  geometry={nodes.Icosphere014.geometry} material={materials['Material.049']} position={[4.41, -0.04, -24.17]} rotation={[Math.PI / 2, 0, -0.61]} scale={0.43} />
        <group name="Cube" position={[7.08, 0.76, -20.01]} rotation={[0, -0.23, 0]} scale={[0.9, 1, 1]}>
          <mesh name="Cube_1" castShadow  geometry={nodes.Cube_1.geometry} material={materials.hut} />
          <mesh name="Cube_2" castShadow  geometry={nodes.Cube_2.geometry} material={materials.woodPalm} />
          <mesh name="Cube_3" castShadow  geometry={nodes.Cube_3.geometry} material={materials['sheethut.001']} />
        </group>
        <group name="WallBuche" position={[6.23, -0.24, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder" castShadow  geometry={nodes.Cylinder.geometry} material={materials.woodPalm} />
          <mesh name="Cylinder_1" castShadow  geometry={nodes.Cylinder_1.geometry} material={materials.inBuche} />
        </group>
        <group name="WallBuche001" position={[6.23, 0.03, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder010" castShadow  geometry={nodes.Cylinder010.geometry} material={materials['woodPalm.001']} />
          <mesh name="Cylinder010_1" castShadow  geometry={nodes.Cylinder010_1.geometry} material={materials['inBuche.005']} />
        </group>
        <group name="WallBuche002" position={[6.23, 0.6, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder011" castShadow  geometry={nodes.Cylinder011.geometry} material={materials['woodPalm.002']} />
          <mesh name="Cylinder011_1" castShadow  geometry={nodes.Cylinder011_1.geometry} material={materials['inBuche.006']} />
        </group>
        <group name="WallBuche003" position={[6.23, 0.32, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder012" castShadow  geometry={nodes.Cylinder012.geometry} material={materials['woodPalm.003']} />
          <mesh name="Cylinder012_1" castShadow  geometry={nodes.Cylinder012_1.geometry} material={materials['inBuche.007']} />
        </group>
        <group name="WallBuche004" position={[6.23, 1.44, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder013" castShadow  geometry={nodes.Cylinder013.geometry} material={materials['woodPalm.004']} />
          <mesh name="Cylinder013_1" castShadow  geometry={nodes.Cylinder013_1.geometry} material={materials['inBuche.010']} />
        </group>
        <group name="WallBuche006" position={[6.23, 1.15, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder015" castShadow  geometry={nodes.Cylinder015.geometry} material={materials['woodPalm.006']} />
          <mesh name="Cylinder015_1" castShadow  geometry={nodes.Cylinder015_1.geometry} material={materials['inBuche.012']} />
        </group>
        <group name="WallBuche007" position={[6.23, 0.88, -20.21]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder016" castShadow  geometry={nodes.Cylinder016.geometry} material={materials['woodPalm.007']} />
          <mesh name="Cylinder016_1" castShadow  geometry={nodes.Cylinder016_1.geometry} material={materials['inBuche.013']} />
        </group>
        <group name="WallBuche005" position={[7.93, 0.88, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder024" castShadow  geometry={nodes.Cylinder024.geometry} material={materials['woodPalm.015']} />
          <mesh name="Cylinder024_1" castShadow  geometry={nodes.Cylinder024_1.geometry} material={materials['inBuche.032']} />
        </group>
        <group name="WallBuche008" position={[7.93, 1.15, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder025" castShadow  geometry={nodes.Cylinder025.geometry} material={materials['woodPalm.016']} />
          <mesh name="Cylinder025_1" castShadow  geometry={nodes.Cylinder025_1.geometry} material={materials['inBuche.033']} />
        </group>
        <group name="WallBuche009" position={[7.93, 1.44, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder026" castShadow  geometry={nodes.Cylinder026.geometry} material={materials['woodPalm.017']} />
          <mesh name="Cylinder026_1" castShadow  geometry={nodes.Cylinder026_1.geometry} material={materials['inBuche.034']} />
        </group>
        <group name="WallBuche010" position={[7.93, 0.32, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder027" castShadow  geometry={nodes.Cylinder027.geometry} material={materials['woodPalm.018']} />
          <mesh name="Cylinder027_1" castShadow  geometry={nodes.Cylinder027_1.geometry} material={materials['inBuche.035']} />
        </group>
        <group name="WallBuche011" position={[7.93, 0.6, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder028" castShadow  geometry={nodes.Cylinder028.geometry} material={materials['woodPalm.019']} />
          <mesh name="Cylinder028_1" castShadow  geometry={nodes.Cylinder028_1.geometry} material={materials['inBuche.036']} />
        </group>
        <group name="WallBuche012" position={[7.93, 0.03, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder029" castShadow  geometry={nodes.Cylinder029.geometry} material={materials['woodPalm.020']} />
          <mesh name="Cylinder029_1" castShadow  geometry={nodes.Cylinder029_1.geometry} material={materials['inBuche.037']} />
        </group>
        <group name="WallBuche013" position={[7.93, -0.24, -19.81]} rotation={[Math.PI / 2, 0, 0.23]} scale={[0.15, 1.1, 0.15]}>
          <mesh name="Cylinder030" castShadow  geometry={nodes.Cylinder030.geometry} material={materials['woodPalm.021']} />
          <mesh name="Cylinder030_1" castShadow  geometry={nodes.Cylinder030_1.geometry} material={materials['inBuche.038']} />
        </group>
        <mesh name="poutre" castShadow  geometry={nodes.poutre.geometry} material={materials.woodPalm} position={[6.85, 1.65, -19.03]} rotation={[-Math.PI, 0.23, -Math.PI]} scale={[-1.06, -0.07, -0.07]} />
        <mesh name="poutre001" castShadow  geometry={nodes.poutre001.geometry} material={materials['woodPalm.022']} position={[6.84, 0.94, -18.99]} rotation={[0, -0.23, -Math.PI]} scale={[0.57, 0.07, 0.07]} />
        <mesh name="poutre002" castShadow  geometry={nodes.poutre002.geometry} material={materials['woodPalm.023']} position={[6.55, 0.45, -19.06]} rotation={[0, -0.23, Math.PI / 2]} scale={[0.73, 0.07, 0.07]} />
        <mesh name="poutre003" castShadow  geometry={nodes.poutre003.geometry} material={materials['woodPalm.024']} position={[7.13, 0.45, -18.92]} rotation={[0, -0.23, Math.PI / 2]} scale={[0.73, 0.07, 0.07]} />
        <group name="WallBuche014" position={[6.88, 0.88, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder031" castShadow  geometry={nodes.Cylinder031.geometry} material={materials['woodPalm.025']} />
          <mesh name="Cylinder031_1" castShadow  geometry={nodes.Cylinder031_1.geometry} material={materials['inBuche.046']} />
        </group>
        <group name="WallBuche015" position={[6.88, 1.15, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder032" castShadow  geometry={nodes.Cylinder032.geometry} material={materials['woodPalm.026']} />
          <mesh name="Cylinder032_1" castShadow  geometry={nodes.Cylinder032_1.geometry} material={materials['inBuche.047']} />
        </group>
        <group name="WallBuche016" position={[6.88, 1.44, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder033" castShadow  geometry={nodes.Cylinder033.geometry} material={materials['woodPalm.027']} />
          <mesh name="Cylinder033_1" castShadow  geometry={nodes.Cylinder033_1.geometry} material={materials['inBuche.033']} />
        </group>
        <group name="WallBuche017" position={[6.88, 0.32, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder034" castShadow  geometry={nodes.Cylinder034.geometry} material={materials['woodPalm.028']} />
          <mesh name="Cylinder034_1" castShadow  geometry={nodes.Cylinder034_1.geometry} material={materials['inBuche.049']} />
        </group>
        <group name="WallBuche018" position={[6.88, 0.6, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder035" castShadow  geometry={nodes.Cylinder035.geometry} material={materials['woodPalm.029']} />
          <mesh name="Cylinder035_1" castShadow  geometry={nodes.Cylinder035_1.geometry} material={materials['inBuche.050']} />
        </group>
        <group name="WallBuche019" position={[6.88, 0.03, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder036" castShadow  geometry={nodes.Cylinder036.geometry} material={materials['woodPalm.030']} />
          <mesh name="Cylinder036_1" castShadow  geometry={nodes.Cylinder036_1.geometry} material={materials['inBuche.051']} />
        </group>
        <group name="WallBuche020" position={[6.88, -0.24, -19.15]} rotation={[Math.PI / 2, 0, -1.34]} scale={[0.15, 1.17, 0.15]}>
          <mesh name="Cylinder037" castShadow  geometry={nodes.Cylinder037.geometry} material={materials['woodPalm.031']} />
          <mesh name="Cylinder037_1" castShadow  geometry={nodes.Cylinder037_1.geometry} material={materials['inBuche.052']} />
        </group>
        <mesh name="door" castShadow  geometry={nodes.door.geometry} material={materials.hut} position={[6.84, 0.29, -18.99]} rotation={[-Math.PI / 2, 0, -0.23]} scale={[-0.25, -1, -0.58]} />
        <mesh name="Plane001" castShadow  geometry={nodes.Plane001.geometry} material={materials['sheethut.006']} position={[7.06, 2.83, -19.93]} rotation={[0, -0.23, -Math.PI]} scale={[-0.3, -1, -1.27]} />
        <mesh name="Plane002" castShadow  geometry={nodes.Plane002.geometry} material={materials['sheethut.002']} position={[5.85, 1.53, -20.19]} rotation={[-3.14, 0.22, 2.13]} scale={[0.11, 1, 1.1]} />
        <mesh name="Plane003" castShadow  geometry={nodes.Plane003.geometry} material={materials['sheethut.037']} position={[8.26, 1.53, -19.62]} rotation={[-0.01, -0.22, -1.02]} scale={[0.11, 1, 1.1]} />
        <mesh name="plant033" castShadow  geometry={nodes.plant033.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[-2.7, 1.08, 3.1]} scale={0.16} />
        <mesh name="plant034" castShadow  geometry={nodes.plant034.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[0.31, 0.17, -0.5]} scale={0.16} />
        <mesh name="plant035" castShadow  geometry={nodes.plant035.geometry} material={materials['.021']} position={[4.71, 2.49, -21.56]} rotation={[2.81, -0.85, 2.68]} scale={0.16} />
        <mesh name="plant036" castShadow  geometry={nodes.plant036.geometry} material={materials['.021']} position={[4.76, 2.52, -21.6]} rotation={[1.33, 1.29, -0.95]} scale={0.16} />
        <mesh name="plant037" castShadow  geometry={nodes.plant037.geometry} material={materials['.021']} position={[4.77, 2.5, -21.6]} rotation={[-2.96, 0.06, -2.83]} scale={0.16} />
        <mesh name="plant038" castShadow  geometry={nodes.plant038.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[0.13, -1.28, 0.26]} scale={0.16} />
        <mesh name="plant040" castShadow  geometry={nodes.plant040.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[-2.6, 0.76, 2.91]} scale={0.16} />
        <mesh name="plant041" castShadow  geometry={nodes.plant041.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[0.17, 0.8, -0.02]} scale={0.16} />
        <mesh name="plant042" castShadow  geometry={nodes.plant042.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[-2.23, -0.67, -2.66]} scale={0.16} />
        <mesh name="plant043" castShadow  geometry={nodes.plant043.geometry} material={materials['.021']} position={[4.77, 2.49, -21.6]} rotation={[-0.25, -0.55, -0.33]} scale={0.16} />
        <mesh name="plant046" castShadow  geometry={nodes.plant046.geometry} material={materials['woodPalm.049']} position={[5.42, -0.97, -21.69]} rotation={[0.01, -0.26, 0.16]} scale={0.16} />
        <mesh name="plant047" castShadow  geometry={nodes.plant047.geometry} material={materials['woodPalm.050']} position={[3.6, -1.5, -22.27]} rotation={[0.01, 0.59, 0.15]} scale={0.23} />
        <mesh name="plant048" castShadow  geometry={nodes.plant048.geometry} material={materials['Material.024']} position={[3.12, 3.31, -21.57]} rotation={[0.16, 0.87, 0]} scale={0.17} />
        <mesh name="plant050" castShadow  geometry={nodes.plant050.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[-0.25, -0.55, -0.33]} scale={0.23} />
        <mesh name="plant051" castShadow  geometry={nodes.plant051.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[-2.23, -0.67, -2.66]} scale={0.23} />
        <mesh name="plant052" castShadow  geometry={nodes.plant052.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[0.17, 0.8, -0.02]} scale={0.23} />
        <mesh name="plant053" castShadow  geometry={nodes.plant053.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[-2.6, 0.76, 2.91]} scale={0.23} />
        <mesh name="plant055" castShadow  geometry={nodes.plant055.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[0.13, -1.28, 0.26]} scale={0.23} />
        <mesh name="plant056" castShadow  geometry={nodes.plant056.geometry} material={materials['.022']} position={[3.08, 3.52, -21.47]} rotation={[-2.96, 0.06, -2.83]} scale={0.23} />
        <mesh name="plant057" castShadow  geometry={nodes.plant057.geometry} material={materials['.022']} position={[3.08, 3.54, -21.46]} rotation={[1.33, 1.29, -0.95]} scale={0.23} />
        <mesh name="plant058" castShadow  geometry={nodes.plant058.geometry} material={materials['.022']} position={[3.06, 3.49, -21.37]} rotation={[2.81, -0.85, 2.68]} scale={0.23} />
        <mesh name="plant059" castShadow  geometry={nodes.plant059.geometry} material={materials['.022']} position={[3.08, 3.51, -21.47]} rotation={[0.31, 0.17, -0.5]} scale={0.23} />
        <mesh name="plant060" castShadow  geometry={nodes.plant060.geometry} material={materials['.022']} position={[3.08, 3.49, -21.47]} rotation={[-2.7, 1.08, 3.1]} scale={0.23} />
        <mesh name="plant061" castShadow  geometry={nodes.plant061.geometry} material={materials['.022']} position={[3.06, 3.52, -21.47]} rotation={[0.96, -0.63, 0.63]} scale={0.23} />
        <mesh name="plant062" castShadow  geometry={nodes.plant062.geometry} material={materials['woodPalm.051']} position={[9.07, -1.09, -19.24]} rotation={[0.01, 0.57, 0.15]} scale={0.11} />
        <mesh name="plant065" castShadow  geometry={nodes.plant065.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[-0.25, -0.55, -0.33]} scale={0.11} />
        <mesh name="plant066" castShadow  geometry={nodes.plant066.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[-2.23, -0.67, -2.66]} scale={0.11} />
        <mesh name="plant067" castShadow  geometry={nodes.plant067.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[0.17, 0.8, -0.02]} scale={0.11} />
        <mesh name="plant068" castShadow  geometry={nodes.plant068.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[-2.6, 0.76, 2.91]} scale={0.11} />
        <mesh name="plant069" castShadow  geometry={nodes.plant069.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[0.19, -0.05, 0.09]} scale={0.11} />
        <mesh name="plant071" castShadow  geometry={nodes.plant071.geometry} material={materials['.023']} position={[8.82, 1.19, -18.88]} rotation={[-2.96, 0.06, -2.83]} scale={0.11} />
        <mesh name="plant072" castShadow  geometry={nodes.plant072.geometry} material={materials['.023']} position={[8.82, 1.2, -18.88]} rotation={[1.33, 1.29, -0.95]} scale={0.11} />
        <mesh name="plant073" castShadow  geometry={nodes.plant073.geometry} material={materials['.023']} position={[8.81, 1.18, -18.83]} rotation={[2.81, -0.85, 2.68]} scale={0.11} />
        <mesh name="plant074" castShadow  geometry={nodes.plant074.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[0.31, 0.17, -0.5]} scale={0.11} />
        <mesh name="plant075" castShadow  geometry={nodes.plant075.geometry} material={materials['.023']} position={[8.82, 1.18, -18.88]} rotation={[-2.7, 1.08, 3.1]} scale={0.11} />
        <mesh name="plant077" castShadow  geometry={nodes.plant077.geometry} material={materials['woodPalm.052']} position={[-2.31, -1.16, -24.38]} rotation={[0.17, 1.5, -0.01]} scale={0.21} />
        <mesh name="plant080" castShadow  geometry={nodes.plant080.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[-0.25, -0.55, -0.33]} scale={0.21} />
        <mesh name="plant081" castShadow  geometry={nodes.plant081.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[-2.23, -0.67, -2.66]} scale={0.21} />
        <mesh name="plant082" castShadow  geometry={nodes.plant082.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[0.17, 0.8, -0.02]} scale={0.21} />
        <mesh name="plant083" castShadow  geometry={nodes.plant083.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[-2.6, 0.76, 2.91]} scale={0.21} />
        <mesh name="plant085" castShadow  geometry={nodes.plant085.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[0.13, -1.28, 0.26]} scale={0.21} />
        <mesh name="plant086" castShadow  geometry={nodes.plant086.geometry} material={materials['.024']} position={[-2.03, 3.39, -23.56]} rotation={[-2.96, 0.06, -2.83]} scale={0.21} />
        <mesh name="plant087" castShadow  geometry={nodes.plant087.geometry} material={materials['.024']} position={[-2.03, 3.41, -23.56]} rotation={[1.33, 1.29, -0.95]} scale={0.21} />
        <mesh name="plant088" castShadow  geometry={nodes.plant088.geometry} material={materials['.024']} position={[-1.98, 3.36, -23.49]} rotation={[2.81, -0.85, 2.68]} scale={0.21} />
        <mesh name="plant089" castShadow  geometry={nodes.plant089.geometry} material={materials['.024']} position={[-2.04, 3.37, -23.56]} rotation={[0.31, 0.17, -0.5]} scale={0.21} />
        <mesh name="plant090" castShadow  geometry={nodes.plant090.geometry} material={materials['.024']} position={[-2.04, 3.36, -23.56]} rotation={[-2.7, 1.08, 3.1]} scale={0.21} />
        <mesh name="plant091" castShadow  geometry={nodes.plant091.geometry} material={materials['.024']} position={[-2.05, 3.39, -23.55]} rotation={[0.96, -0.63, 0.63]} scale={0.21} />
        <mesh name="plant092" castShadow  geometry={nodes.plant092.geometry} material={materials['woodPalm.053']} position={[0.16, -0.97, -22.09]} rotation={[0.01, 0.52, 0.15]} scale={0.16} />
        <mesh name="plant093" castShadow  geometry={nodes.plant093.geometry} material={materials['Material.027']} position={[-0.2, 2.36, -21.64]} rotation={[0.16, 0.87, 0]} scale={0.12} />
        <mesh name="plant095" castShadow  geometry={nodes.plant095.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[-0.25, -0.55, -0.33]} scale={0.16} />
        <mesh name="plant096" castShadow  geometry={nodes.plant096.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[-2.23, -0.67, -2.66]} scale={0.16} />
        <mesh name="plant097" castShadow  geometry={nodes.plant097.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[0.17, 0.8, -0.02]} scale={0.16} />
        <mesh name="plant098" castShadow  geometry={nodes.plant098.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[-2.6, 0.76, 2.91]} scale={0.16} />
        <mesh name="plant100" castShadow  geometry={nodes.plant100.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[0.13, -1.28, 0.26]} scale={0.16} />
        <mesh name="plant101" castShadow  geometry={nodes.plant101.geometry} material={materials['.025']} position={[-0.23, 2.5, -21.57]} rotation={[-2.96, 0.06, -2.83]} scale={0.16} />
        <mesh name="plant102" castShadow  geometry={nodes.plant102.geometry} material={materials['.025']} position={[-0.24, 2.52, -21.56]} rotation={[1.33, 1.29, -0.95]} scale={0.16} />
        <mesh name="plant103" castShadow  geometry={nodes.plant103.geometry} material={materials['.025']} position={[-0.25, 2.49, -21.5]} rotation={[2.81, -0.85, 2.68]} scale={0.16} />
        <mesh name="plant104" castShadow  geometry={nodes.plant104.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[0.31, 0.17, -0.5]} scale={0.16} />
        <mesh name="plant105" castShadow  geometry={nodes.plant105.geometry} material={materials['.025']} position={[-0.23, 2.49, -21.57]} rotation={[-2.7, 1.08, 3.1]} scale={0.16} />
        <mesh name="plant106" castShadow  geometry={nodes.plant106.geometry} material={materials['.025']} position={[-0.25, 2.51, -21.57]} rotation={[0.96, -0.63, 0.63]} scale={0.16} />
        <mesh name="plant107" castShadow  geometry={nodes.plant107.geometry} material={materials['woodPalm.054']} position={[3.8, -1.24, -18.37]} rotation={[0.01, -0.26, 0.16]} scale={0.12} />
        <mesh name="plant108" castShadow  geometry={nodes.plant108.geometry} material={materials['Material.028']} position={[3.35, 1.29, -18.32]} rotation={[0.16, 0.87, 0]} scale={0.09} />
        <mesh name="dy008" castShadow  geometry={nodes.dy008.geometry} material={materials['Material.028']} position={[3.32, 1.19, -18.41]} rotation={[0.16, 0.87, 0]} scale={0.09} />
        <mesh name="plant110" castShadow  geometry={nodes.plant110.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[-0.25, -0.55, -0.33]} scale={0.12} />
        <mesh name="plant111" castShadow  geometry={nodes.plant111.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[-2.23, -0.67, -2.66]} scale={0.12} />
        <mesh name="plant112" castShadow  geometry={nodes.plant112.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[0.17, 0.8, -0.02]} scale={0.12} />
        <mesh name="plant113" castShadow  geometry={nodes.plant113.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[-2.6, 0.76, 2.91]} scale={0.12} />
        <mesh name="plant114" castShadow  geometry={nodes.plant114.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[0.19, -0.05, 0.09]} scale={0.12} />
        <mesh name="plant115" castShadow  geometry={nodes.plant115.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[0.13, -1.28, 0.26]} scale={0.12} />
        <mesh name="plant116" castShadow  geometry={nodes.plant116.geometry} material={materials['.026']} position={[3.3, 1.4, -18.3]} rotation={[-2.96, 0.06, -2.83]} scale={0.12} />
        <mesh name="plant117" castShadow  geometry={nodes.plant117.geometry} material={materials['.026']} position={[3.3, 1.42, -18.3]} rotation={[1.33, 1.29, -0.95]} scale={0.12} />
        <mesh name="plant118" castShadow  geometry={nodes.plant118.geometry} material={materials['.026']} position={[3.25, 1.39, -18.27]} rotation={[2.81, -0.85, 2.68]} scale={0.12} />
        <mesh name="plant120" castShadow  geometry={nodes.plant120.geometry} material={materials['.026']} position={[3.3, 1.39, -18.3]} rotation={[-2.7, 1.08, 3.1]} scale={0.12} />
        <mesh name="plant121" castShadow  geometry={nodes.plant121.geometry} material={materials['.026']} position={[3.29, 1.41, -18.31]} rotation={[0.96, -0.63, 0.63]} scale={0.12} />
        <mesh name="plant122" castShadow  geometry={nodes.plant122.geometry} material={materials['woodPalm.055']} position={[10.16, -1.79, -23.82]} rotation={[0.01, -0.26, 0.16]} scale={0.27} />
        <mesh name="plant126" castShadow  geometry={nodes.plant126.geometry} material={materials['.027']} position={[9.07, 3.95, -23.67]} rotation={[-2.23, -0.67, -2.66]} scale={0.27} />
        <mesh name="plant127" castShadow  geometry={nodes.plant127.geometry} material={materials['.027']} position={[9.07, 3.95, -23.67]} rotation={[0.17, 0.8, -0.02]} scale={0.27} />
        <mesh name="plant128" castShadow  geometry={nodes.plant128.geometry} material={materials['.027']} position={[9.07, 3.95, -23.67]} rotation={[-2.6, 0.76, 2.91]} scale={0.27} />
        <mesh name="plant130" castShadow  geometry={nodes.plant130.geometry} material={materials['.027']} position={[9.07, 3.95, -23.67]} rotation={[0.13, -1.28, 0.26]} scale={0.27} />
        <mesh name="plant131" castShadow  geometry={nodes.plant131.geometry} material={materials['.027']} position={[9.07, 3.98, -23.67]} rotation={[-2.96, 0.06, -2.83]} scale={0.27} />
        <mesh name="plant132" castShadow  geometry={nodes.plant132.geometry} material={materials['.027']} position={[9.06, 4.01, -23.67]} rotation={[1.33, 1.29, -0.95]} scale={0.27} />
        <mesh name="plant133" castShadow  geometry={nodes.plant133.geometry} material={materials['.027']} position={[8.97, 3.95, -23.61]} rotation={[2.81, -0.85, 2.68]} scale={0.27} />
        <mesh name="plant134" castShadow  geometry={nodes.plant134.geometry} material={materials['.027']} position={[9.07, 3.96, -23.67]} rotation={[0.31, 0.17, -0.5]} scale={0.27} />
        <mesh name="plant135" castShadow  geometry={nodes.plant135.geometry} material={materials['.027']} position={[9.07, 3.95, -23.67]} rotation={[-2.7, 1.08, 3.1]} scale={0.27} />
        <mesh name="plant136" castShadow  geometry={nodes.plant136.geometry} material={materials['.027']} position={[9.06, 3.98, -23.69]} rotation={[0.96, -0.63, 0.63]} scale={0.27} />
        <mesh name="plant137" castShadow  geometry={nodes.plant137.geometry} material={materials['woodPalm.056']} position={[6.89, -1.6, -26.58]} rotation={[0.02, 0.96, 0.14]} scale={0.26} />
        <mesh name="plant141" castShadow  geometry={nodes.plant141.geometry} material={materials['.028']} position={[6.66, 4.03, -25.53]} rotation={[-2.23, -0.67, -2.66]} scale={0.26} />
        <mesh name="plant142" castShadow  geometry={nodes.plant142.geometry} material={materials['.028']} position={[6.66, 4.03, -25.53]} rotation={[0.17, 0.8, -0.02]} scale={0.26} />
        <mesh name="plant143" castShadow  geometry={nodes.plant143.geometry} material={materials['.028']} position={[6.66, 4.03, -25.53]} rotation={[-2.6, 0.76, 2.91]} scale={0.26} />
        <mesh name="plant145" castShadow  geometry={nodes.plant145.geometry} material={materials['.028']} position={[6.66, 4.03, -25.53]} rotation={[0.13, -1.28, 0.26]} scale={0.26} />
        <mesh name="plant146" castShadow  geometry={nodes.plant146.geometry} material={materials['.028']} position={[6.67, 4.06, -25.52]} rotation={[-2.96, 0.06, -2.83]} scale={0.26} />
        <mesh name="plant147" castShadow  geometry={nodes.plant147.geometry} material={materials['.028']} position={[6.67, 4.08, -25.52]} rotation={[1.33, 1.29, -0.95]} scale={0.26} />
        <mesh name="plant148" castShadow  geometry={nodes.plant148.geometry} material={materials['.028']} position={[6.68, 4.03, -25.41]} rotation={[2.81, -0.85, 2.68]} scale={0.26} />
        <mesh name="plant149" castShadow  geometry={nodes.plant149.geometry} material={materials['.028']} position={[6.66, 4.04, -25.53]} rotation={[0.31, 0.17, -0.5]} scale={0.26} />
        <mesh name="plant150" castShadow  geometry={nodes.plant150.geometry} material={materials['.028']} position={[6.66, 4.03, -25.53]} rotation={[-2.7, 1.08, 3.1]} scale={0.26} />
        <mesh name="plant151" castShadow  geometry={nodes.plant151.geometry} material={materials['.028']} position={[6.65, 4.06, -25.52]} rotation={[0.96, -0.63, 0.63]} scale={0.26} />
        <mesh name="plant152" castShadow  geometry={nodes.plant152.geometry} material={materials['woodPalm.057']} position={[1.25, -0.97, -24.74]} rotation={[3.13, 0.26, -2.98]} scale={0.16} />
        <mesh name="plant155" castShadow  geometry={nodes.plant155.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[-0.25, -0.55, -0.33]} scale={0.16} />
        <mesh name="plant156" castShadow  geometry={nodes.plant156.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[-2.29, -0.6, -2.66]} scale={0.16} />
        <mesh name="plant157" castShadow  geometry={nodes.plant157.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[0.17, 0.8, -0.02]} scale={0.16} />
        <mesh name="plant158" castShadow  geometry={nodes.plant158.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[-2.42, 0.83, 2.69]} scale={0.16} />
        <mesh name="plant160" castShadow  geometry={nodes.plant160.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[-0.41, -1.34, -0.39]} scale={0.16} />
        <mesh name="plant161" castShadow  geometry={nodes.plant161.geometry} material={materials['.029']} position={[1.9, 2.5, -24.83]} rotation={[-2.79, 0.13, -2.79]} scale={0.16} />
        <mesh name="plant162" castShadow  geometry={nodes.plant162.geometry} material={materials['.029']} position={[1.91, 2.52, -24.83]} rotation={[1.22, 1.33, -0.84]} scale={0.16} />
        <mesh name="plant163" castShadow  geometry={nodes.plant163.geometry} material={materials['.029']} position={[1.96, 2.49, -24.86]} rotation={[2.98, -0.85, 2.86]} scale={0.16} />
        <mesh name="plant164" castShadow  geometry={nodes.plant164.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[0.31, 0.17, -0.5]} scale={0.16} />
        <mesh name="plant165" castShadow  geometry={nodes.plant165.geometry} material={materials['.029']} position={[1.9, 2.49, -24.83]} rotation={[-2.82, 1.06, 3.07]} scale={0.16} />
        <mesh name="plant166" castShadow  geometry={nodes.plant166.geometry} material={materials['.029']} position={[1.91, 2.51, -24.82]} rotation={[0.93, -0.74, 0.5]} scale={0.16} />
        <mesh name="plant167" castShadow  geometry={nodes.plant167.geometry} material={materials['woodPalm.058']} position={[12.07, -1.46, -21.18]} rotation={[3.13, -0.44, -2.99]} scale={0.16} />
        <mesh name="plant172" castShadow  geometry={nodes.plant172.geometry} material={materials['.030']} position={[12.52, 2, -21.67]} rotation={[0.17, 0.8, -0.02]} scale={0.16} />
        <mesh name="plant173" castShadow  geometry={nodes.plant173.geometry} material={materials['.030']} position={[12.52, 2, -21.67]} rotation={[-2.6, 0.76, 2.91]} scale={0.16} />
        <mesh name="plant174" castShadow  geometry={nodes.plant174.geometry} material={materials['.030']} position={[12.52, 2, -21.67]} rotation={[0.19, -0.05, 0.09]} scale={0.16} />
        <mesh name="plant176" castShadow  geometry={nodes.plant176.geometry} material={materials['.030']} position={[12.52, 2.01, -21.67]} rotation={[-2.96, 0.06, -2.83]} scale={0.16} />
        <mesh name="plant177" castShadow  geometry={nodes.plant177.geometry} material={materials['.030']} position={[12.52, 2.03, -21.67]} rotation={[1.33, 1.29, -0.95]} scale={0.16} />
        <mesh name="plant178" castShadow  geometry={nodes.plant178.geometry} material={materials['.030']} position={[12.54, 2, -21.73]} rotation={[2.81, -0.85, 2.68]} scale={0.16} />
        <mesh name="plant179" castShadow  geometry={nodes.plant179.geometry} material={materials['.030']} position={[12.52, 2, -21.67]} rotation={[0.31, 0.17, -0.5]} scale={0.16} />
        <mesh name="plant180" castShadow  geometry={nodes.plant180.geometry} material={materials['.030']} position={[12.52, 2, -21.67]} rotation={[-2.7, 1.08, 3.1]} scale={0.16} />
        <mesh name="plant181" castShadow  geometry={nodes.plant181.geometry} material={materials['.030']} position={[12.53, 2.02, -21.67]} rotation={[0.96, -0.63, 0.63]} scale={0.16} />
        <mesh name="plant182" castShadow  geometry={nodes.plant182.geometry} material={materials['woodPalm.059']} position={[14.96, -1.7, -21.82]} rotation={[0.05, -1.31, 0.21]} scale={0.21} />
        <mesh name="plant186" castShadow  geometry={nodes.plant186.geometry} material={materials['.031']} position={[14.43, 2.87, -22.51]} rotation={[-2.23, -0.67, -2.66]} scale={0.21} />
        <mesh name="plant187" castShadow  geometry={nodes.plant187.geometry} material={materials['.031']} position={[14.43, 2.87, -22.51]} rotation={[0.17, 0.8, -0.02]} scale={0.21} />
        <mesh name="plant189" castShadow  geometry={nodes.plant189.geometry} material={materials['.031']} position={[14.43, 2.87, -22.51]} rotation={[0.19, -0.05, 0.09]} scale={0.21} />
        <mesh name="plant190" castShadow  geometry={nodes.plant190.geometry} material={materials['.031']} position={[14.43, 2.87, -22.51]} rotation={[0.13, -1.28, 0.26]} scale={0.21} />
        <mesh name="plant191" castShadow  geometry={nodes.plant191.geometry} material={materials['.031']} position={[14.42, 2.9, -22.51]} rotation={[-2.62, 0.06, -2.83]} scale={0.21} />
        <mesh name="plant192" castShadow  geometry={nodes.plant192.geometry} material={materials['.031']} position={[14.42, 2.92, -22.51]} rotation={[1.33, 1.29, -0.95]} scale={0.21} />
        <mesh name="plant193" castShadow  geometry={nodes.plant193.geometry} material={materials['.031']} position={[14.35, 2.87, -22.56]} rotation={[2.81, -0.85, 2.68]} scale={0.21} />
        <mesh name="plant194" castShadow  geometry={nodes.plant194.geometry} material={materials['.031']} position={[14.42, 2.88, -22.51]} rotation={[0.31, 0.17, -0.5]} scale={0.21} />
        <mesh name="plant195" castShadow  geometry={nodes.plant195.geometry} material={materials['.031']} position={[14.43, 2.87, -22.51]} rotation={[-2.7, 1.08, 3.1]} scale={0.21} />
        <mesh name="plant196" castShadow  geometry={nodes.plant196.geometry} material={materials['.031']} position={[14.43, 2.9, -22.52]} rotation={[0.96, -0.63, 0.63]} scale={0.21} />
        <mesh name="plant197" castShadow  geometry={nodes.plant197.geometry} material={materials['woodPalm.060']} position={[-4.78, -1.53, -21.53]} rotation={[3.13, 0.26, -2.98]} scale={0.25} />
        <mesh name="plant200" castShadow  geometry={nodes.plant200.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[-0.25, -0.55, -0.33]} scale={0.25} />
        <mesh name="plant201" castShadow  geometry={nodes.plant201.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[-2.23, -0.67, -2.66]} scale={0.25} />
        <mesh name="plant202" castShadow  geometry={nodes.plant202.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[0.17, 0.8, -0.02]} scale={0.25} />
        <mesh name="plant203" castShadow  geometry={nodes.plant203.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[-2.6, 0.76, 2.91]} scale={0.25} />
        <mesh name="plant204" castShadow  geometry={nodes.plant204.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[0.19, -0.05, 0.09]} scale={0.25} />
        <mesh name="plant205" castShadow  geometry={nodes.plant205.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[0.13, -1.28, 0.26]} scale={0.25} />
        <mesh name="plant206" castShadow  geometry={nodes.plant206.geometry} material={materials['.032']} position={[-3.78, 3.8, -21.67]} rotation={[-2.96, 0.06, -2.83]} scale={0.25} />
        <mesh name="plant207" castShadow  geometry={nodes.plant207.geometry} material={materials['.032']} position={[-3.78, 3.83, -21.67]} rotation={[1.33, 1.29, -0.95]} scale={0.25} />
        <mesh name="plant208" castShadow  geometry={nodes.plant208.geometry} material={materials['.032']} position={[-3.69, 3.77, -21.72]} rotation={[2.81, -0.85, 2.68]} scale={0.25} />
        <mesh name="plant210" castShadow  geometry={nodes.plant210.geometry} material={materials['.032']} position={[-3.78, 3.77, -21.67]} rotation={[-2.7, 1.08, 3.1]} scale={0.25} />
        <mesh name="plant211" castShadow  geometry={nodes.plant211.geometry} material={materials['.032']} position={[-3.77, 3.81, -21.65]} rotation={[0.96, -0.63, 0.63]} scale={0.25} />
        <mesh name="plant212" castShadow  geometry={nodes.plant212.geometry} material={materials['woodPalm.061']} position={[-3.44, -1.04, -19.03]} rotation={[0.01, -0.26, 0.16]} scale={0.12} />
        <mesh name="plant215" castShadow  geometry={nodes.plant215.geometry} material={materials['.033']} position={[-3.91, 1.47, -18.97]} rotation={[-0.25, -0.55, -0.33]} scale={0.12} />
        <mesh name="plant218" castShadow  geometry={nodes.plant218.geometry} material={materials['.033']} position={[-3.91, 1.47, -18.97]} rotation={[-2.6, 0.76, 2.91]} scale={0.12} />
        <mesh name="plant219" castShadow  geometry={nodes.plant219.geometry} material={materials['.033']} position={[-3.91, 1.47, -18.97]} rotation={[0.19, -0.05, 0.09]} scale={0.12} />
        <mesh name="plant220" castShadow  geometry={nodes.plant220.geometry} material={materials['.033']} position={[-3.91, 1.47, -18.97]} rotation={[0.13, -1.28, 0.26]} scale={0.12} />
        <mesh name="plant222" castShadow  geometry={nodes.plant222.geometry} material={materials['.033']} position={[-3.92, 1.5, -18.96]} rotation={[1.33, 1.29, -0.95]} scale={0.12} />
        <mesh name="plant223" castShadow  geometry={nodes.plant223.geometry} material={materials['.033']} position={[-3.96, 1.47, -18.94]} rotation={[2.81, -0.85, 2.68]} scale={0.12} />
        <mesh name="plant225" castShadow  geometry={nodes.plant225.geometry} material={materials['.033']} position={[-3.91, 1.47, -18.97]} rotation={[-2.7, 1.08, 3.1]} scale={0.12} />
        <mesh name="plant226" castShadow  geometry={nodes.plant226.geometry} material={materials['.033']} position={[-3.92, 1.49, -18.97]} rotation={[0.96, -0.63, 0.63]} scale={0.12} />
        <mesh name="dy016" castShadow  geometry={nodes.dy016.geometry} material={materials['Material.036']} position={[15.35, -0.34, -20.92]} rotation={[0.16, 0.87, 0]} scale={0.16} />
        <mesh name="dy017" castShadow  geometry={nodes.dy017.geometry} material={materials['Material.037']} position={[9.34, -0.37, -18.88]} rotation={[0.16, 0.87, 0]} scale={0.16} />
        <mesh name="dy018" castShadow  geometry={nodes.dy018.geometry} material={materials['Material.038']} position={[12.87, -0.73, -18.49]} rotation={[0.16, 0.87, 0]} scale={0.16} />
        <mesh name="Куб001" castShadow  geometry={nodes.Куб001.geometry} material={materials['Material.039']} position={[10.91, -0.06, -21.8]} rotation={[-0.8, 0.48, 0.93]} scale={0.77} />
        <mesh name="Куб002" castShadow  geometry={nodes.Куб002.geometry} material={materials['Material.040']} position={[16.36, -0.77, -19.45]} rotation={[-0.8, 0.48, 0.93]} scale={0.3} />
        <mesh name="Куб003" castShadow  geometry={nodes.Куб003.geometry} material={materials['Material.041']} position={[-11.42, 0.53, -21.12]} rotation={[-0.8, 0.48, 0.93]} scale={[1.94, 1.62, 1.69]} />
        <mesh name="Куб004" castShadow  geometry={nodes.Куб004.geometry} material={materials['Material.042']} position={[-7.8, -0.15, -20]} rotation={[1.1, -0.26, -1.21]} scale={[1.02, 0.85, 0.88]} />
        <mesh name="Куб005" castShadow  geometry={nodes.Куб005.geometry} material={materials['Material.043']} position={[-13.41, -0.58, -18.98]} rotation={[0.75, -0.33, -2.56]} scale={0.55} />
        <mesh name="plant227" castShadow  geometry={nodes.plant227.geometry} material={materials['.034']} position={[-7.95, 1.79, -23.15]} rotation={[0.96, -0.63, 0.63]} scale={0.12} />
        <mesh name="plant228" castShadow  geometry={nodes.plant228.geometry} material={materials['.034']} position={[-7.95, 1.77, -23.15]} rotation={[-2.7, 1.08, 3.1]} scale={0.12} />
        <mesh name="plant229" castShadow  geometry={nodes.plant229.geometry} material={materials['.034']} position={[-7.95, 1.78, -23.15]} rotation={[0.31, 0.17, -0.5]} scale={0.12} />
        <mesh name="plant230" castShadow  geometry={nodes.plant230.geometry} material={materials['.034']} position={[-7.9, 1.77, -23.16]} rotation={[2.81, -0.85, 2.68]} scale={0.12} />
        <mesh name="plant231" castShadow  geometry={nodes.plant231.geometry} material={materials['.034']} position={[-7.95, 1.8, -23.16]} rotation={[1.33, 1.29, -0.95]} scale={0.12} />
        <mesh name="plant232" castShadow  geometry={nodes.plant232.geometry} material={materials['.034']} position={[-7.95, 1.78, -23.16]} rotation={[-2.96, 0.06, -2.83]} scale={0.12} />
        <mesh name="plant233" castShadow  geometry={nodes.plant233.geometry} material={materials['.034']} position={[-7.95, 1.77, -23.15]} rotation={[0.13, -1.28, 0.26]} scale={0.12} />
        <mesh name="plant235" castShadow  geometry={nodes.plant235.geometry} material={materials['.034']} position={[-7.95, 1.77, -23.15]} rotation={[-2.6, 0.76, 2.91]} scale={0.12} />
        <mesh name="plant237" castShadow  geometry={nodes.plant237.geometry} material={materials['.034']} position={[-7.95, 1.77, -23.15]} rotation={[-2.23, -0.67, -2.66]} scale={0.12} />
        <mesh name="plant238" castShadow  geometry={nodes.plant238.geometry} material={materials['.034']} position={[-7.95, 1.77, -23.15]} rotation={[-0.25, -0.55, -0.33]} scale={0.12} />
        <mesh name="plant240" castShadow  geometry={nodes.plant240.geometry} material={materials['Material.044']} position={[-8.01, 1.68, -23.16]} rotation={[0.16, 0.87, 0]} scale={0.09} />
        <mesh name="dy019" castShadow  geometry={nodes.dy019.geometry} material={materials['Material.044']} position={[-8.01, 1.58, -23.06]} rotation={[0.16, 0.87, 0]} scale={0.09} />
        <mesh name="plant241" castShadow  geometry={nodes.plant241.geometry} material={materials['woodPalm.062']} position={[-8.42, -0.74, -23.25]} rotation={[3.13, 0.6, -2.97]} scale={0.12} />
        <mesh name="plant242" castShadow  geometry={nodes.plant242.geometry} material={materials['.035']} position={[-6.19, 2.78, -22.93]} rotation={[0.96, -0.63, 0.63]} scale={0.19} />
        <mesh name="plant243" castShadow  geometry={nodes.plant243.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[-2.7, 1.08, 3.1]} scale={0.19} />
        <mesh name="plant245" castShadow  geometry={nodes.plant245.geometry} material={materials['.035']} position={[-6.22, 2.76, -22.86]} rotation={[2.81, -0.85, 2.68]} scale={0.19} />
        <mesh name="plant246" castShadow  geometry={nodes.plant246.geometry} material={materials['.035']} position={[-6.18, 2.8, -22.92]} rotation={[1.33, 1.29, -0.95]} scale={0.19} />
        <mesh name="plant247" castShadow  geometry={nodes.plant247.geometry} material={materials['.035']} position={[-6.18, 2.78, -22.92]} rotation={[-2.96, 0.06, -2.83]} scale={0.19} />
        <mesh name="plant248" castShadow  geometry={nodes.plant248.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[0.13, -1.28, 0.26]} scale={0.19} />
        <mesh name="plant250" castShadow  geometry={nodes.plant250.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[-2.6, 0.76, 2.91]} scale={0.19} />
        <mesh name="plant251" castShadow  geometry={nodes.plant251.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[0.17, 0.8, -0.02]} scale={0.19} />
        <mesh name="plant252" castShadow  geometry={nodes.plant252.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[-2.23, -0.67, -2.66]} scale={0.19} />
        <mesh name="plant253" castShadow  geometry={nodes.plant253.geometry} material={materials['.035']} position={[-6.18, 2.76, -22.93]} rotation={[-0.25, -0.55, -0.33]} scale={0.19} />
        <mesh name="plant256" castShadow  geometry={nodes.plant256.geometry} material={materials['woodPalm.063']} position={[-5.57, -1.26, -23.4]} rotation={[0.01, 0.26, 0.16]} scale={0.19} />
        <mesh name="plant001" castShadow  geometry={nodes.plant001.geometry} material={materials['.019']} position={[-0.79, 2.37, -18.57]} rotation={[0.96, -0.63, 0.63]} scale={0.17} />
        <mesh name="plant002" castShadow  geometry={nodes.plant002.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[-2.7, 1.08, 3.1]} scale={0.17} />
        <mesh name="plant004" castShadow  geometry={nodes.plant004.geometry} material={materials['woodPalm.048']} position={[2.23, -2.6, -19.55]} rotation={[0.02, 0.79, 0.15]} scale={0.27} />
        <mesh name="plant005" castShadow  geometry={nodes.plant005.geometry} material={materials['Material.022']} position={[1.84, 2.96, -18.65]} rotation={[0.16, 0.87, 0]} scale={0.2} />
        <mesh name="plant007" castShadow  geometry={nodes.plant007.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.5]} rotation={[2.81, -0.85, 2.68]} scale={0.17} />
        <mesh name="plant009" castShadow  geometry={nodes.plant009.geometry} material={materials['.019']} position={[-0.78, 2.38, -18.56]} rotation={[1.33, 1.29, -0.95]} scale={0.17} />
        <mesh name="plant010" castShadow  geometry={nodes.plant010.geometry} material={materials['.019']} position={[-0.78, 2.37, -18.57]} rotation={[-2.96, 0.06, -2.83]} scale={0.17} />
        <mesh name="plant011" castShadow  geometry={nodes.plant011.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[0.13, -1.28, 0.26]} scale={0.17} />
        <mesh name="plant012" castShadow  geometry={nodes.plant012.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[0.19, -0.05, 0.09]} scale={0.17} />
        <mesh name="plant013" castShadow  geometry={nodes.plant013.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[-2.6, 0.76, 2.91]} scale={0.17} />
        <mesh name="plant015" castShadow  geometry={nodes.plant015.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[-2.23, -0.67, -2.66]} scale={0.17} />
        <mesh name="Object" castShadow  geometry={nodes.Object.geometry} material={materials['.019']} position={[-0.78, 2.35, -18.57]} rotation={[-0.25, -0.55, -0.33]} scale={0.17} />
        <mesh name="plant019" castShadow  geometry={nodes.plant019.geometry} material={materials['Material.021']} position={[-0.76, 2.21, -18.65]} rotation={[0.16, 0.87, 0]} scale={0.13} />
        <mesh name="plant020" castShadow  geometry={nodes.plant020.geometry} material={materials['woodPalm.047']} position={[-0.76, -1.27, -19.21]} rotation={[0.16, 1.49, 0]} scale={0.17} />
        <mesh name="plant021" castShadow  geometry={nodes.plant021.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[-0.25, -0.55, -0.33]} scale={0.27} />
        <mesh name="plant022" castShadow  geometry={nodes.plant022.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[-2.23, -0.67, -2.66]} scale={0.27} />
        <mesh name="plant023" castShadow  geometry={nodes.plant023.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[0.17, 0.8, -0.02]} scale={0.27} />
        <mesh name="plant024" castShadow  geometry={nodes.plant024.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[-2.6, 0.76, 2.91]} scale={0.27} />
        <mesh name="plant025" castShadow  geometry={nodes.plant025.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[0.19, -0.05, 0.09]} scale={0.27} />
        <mesh name="plant026" castShadow  geometry={nodes.plant026.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[0.13, -1.28, 0.26]} scale={0.27} />
        <mesh name="plant027" castShadow  geometry={nodes.plant027.geometry} material={materials['.020']} position={[1.82, 3.21, -18.52]} rotation={[-2.96, 0.06, -2.83]} scale={0.27} />
        <mesh name="plant028" castShadow  geometry={nodes.plant028.geometry} material={materials['.020']} position={[1.82, 3.23, -18.52]} rotation={[1.33, 1.29, -0.95]} scale={0.27} />
        <mesh name="plant029" castShadow  geometry={nodes.plant029.geometry} material={materials['.020']} position={[1.81, 3.18, -18.41]} rotation={[2.81, -0.85, 2.68]} scale={0.27} />
        <mesh name="plant031" castShadow  geometry={nodes.plant031.geometry} material={materials['.020']} position={[1.82, 3.18, -18.53]} rotation={[-2.7, 1.08, 3.1]} scale={0.27} />
        <mesh name="plant032" castShadow  geometry={nodes.plant032.geometry} material={materials['.020']} position={[1.79, 3.21, -18.52]} rotation={[0.96, -0.63, 0.63]} scale={0.27} />
        <mesh name="Plane005" castShadow  geometry={nodes.Plane005.geometry} material={materials['Material.050']} morphTargetDictionary={nodes.Plane005.morphTargetDictionary} morphTargetInfluences={nodes.Plane005.morphTargetInfluences} position={[0, -1.4, -4]} scale={3.82} />
      </group>
    </group>
  )
}

useGLTF.preload('./obj/island.glb')
