import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

import * as THREE from "three";
import { useCustomization } from "./context/Customization";

// Table komponenta pro zobrazení modelu
const Table = (props) => {
  const { nodes, materials } = useGLTF("/models/table.gltf"); // Cesta k modelu
  const { shape, setShape, legs, setLegs, material } = useCustomization();

  const wood1TextureProps = useTexture({
    map: "../../textures/Wood/Wood_011_Base_Color.jpg",
    normalMap: "../../textures/Wood/Wood_011_Normal.jpg",
    roughnessMap: "../../textures/Wood/Wood_011_Roughness.jpg",
    aoMap: "../../textures/Wood/Wood_011_ambientOcclusion.jpg",
  });
  const wood2TextureProps = useTexture({
    map: "../../textures/Wood/Wood_013_COLOR.jpg",
    normalMap: "../../textures/Wood/Wood_013_NORM.jpg",
    roughnessMap: "../../textures/Wood/Wood_013_ROUGH.jpg",
    aoMap: "../../textures/Wood/Wood_013_OCC.jpg",
  });
  const metalTextureProps = useTexture({
    map: "../../textures/Metal/Metal_Gold_Foil_001_basecolor.png",
    normalMap: "../../textures/Metal/Metal_Gold_Foil_001_normal.png",
    roughnessMap: "../../textures/Metal/Metal_Gold_Foil_001_roughness.png",
    aoMap: "../../textures/Metal/Metal_Gold_Foil_001_ambientOcclusion.png",
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes["6table"].geometry} material={nodes["6table"].material} position={[0, 1.302, 0]} scale={[1.425, 0.043, 1.425]} visible={shape === 6}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes["8table"].geometry} material={nodes["8table"].material} position={[0, 1.302, 0]} scale={[1.425, 0.043, 1.425]} visible={shape === 5}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>

      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[0, 1.342, 0]} rotation={[-Math.PI, -1.571, 0]} scale={[1.639, 1, 1.2]} visible={shape === 4}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>

      <mesh geometry={nodes.obdelnik.geometry} position={[0, 1.302, 0]} scale={[1.129, 0.043, 1.129]} visible={shape === 1}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes.cverec1.geometry} material={materials["Material.005"]} position={[0, 1.295, 0]} scale={[1.174, 0.037, 1.174]} visible={shape === 2}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes.kruh.geometry} material={materials.dřevo} position={[0, 1.302, 0]} scale={[1.455, 0.043, 1.455]} visible={shape === 3}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>

      <mesh geometry={nodes.ctverec003.geometry} material={materials["Material.011"]} position={[0, 1.295, 0]} scale={[0.918, 0.037, 0.918]} visible={shape === 50} />
      <mesh geometry={nodes.ctverec2.geometry} material={materials["Material.014"]} position={[0, 1.295, 0]} scale={[1.174, 0.037, 1.174]} visible={shape === 51} />
      <mesh geometry={nodes.Nohy001.geometry} material={materials["Material.010"]} position={[0, 1.295, 0]} scale={[1, 0.037, 1]} visible={legs === 1} />
      <mesh geometry={nodes.Nohy001.geometry} material={materials["Material.010"]} position={[0, 1.295, 1.7]} scale={[1, 0.037, 1]} visible={legs === 1} />
      <mesh geometry={nodes.Nohy02.geometry} material={materials["Material.010"]} position={[0, 0.602, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.208, 0.033, 0.72]} visible={legs === 2} />
      <mesh geometry={nodes.Nohy02.geometry} material={materials["Material.010"]} position={[0, 0.602, 1.6]} rotation={[0, Math.PI / 2, 0]} scale={[0.208, 0.033, 0.72]} visible={legs === 2} />
      <mesh geometry={nodes.nohy03.geometry} material={materials["Material.010"]} position={[0, 1.295, 0]} scale={[0.918, 0.037, 0.918]} visible={legs === 3} />
      <mesh geometry={nodes.nohy03.geometry} material={materials["Material.010"]} position={[0, 1.295, 0, 4]} rotation={[0, Math.PI, 0]} scale={[0.918, 0.037, 0.918]} visible={legs === 3} />
      <mesh geometry={nodes.nohy04.geometry} material={materials["Material.010"]} position={[0, 1.312, 0]} scale={[0.918, 0.049, 0.918]} visible={legs === 4} />
      <mesh geometry={nodes.nohy04.geometry} material={materials["Material.010"]} position={[0, 1.312, 1.2]} scale={[0.918, 0.049, 0.918]} visible={legs === 4} />
      <mesh geometry={nodes.nohy05.geometry} material={materials["Material.010"]} position={[0, 1.295, 0]} scale={[0.918, 0.037, 0.918]} visible={legs === 5} />

      <mesh geometry={nodes.nohy05.geometry} material={materials["Material.010"]} position={[0, 1.295, 0.08]} rotation={[0, Math.PI, 0]} scale={[0.918, 0.037, 0.918]} visible={legs === 5} />
      <mesh geometry={nodes.nohy06.geometry} material={materials["Material.010"]} position={[0, 0.602, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.208, 0.033, 0.72]} visible={legs === 6} />

      <mesh geometry={nodes.nohy07.geometry} material={materials["Material.010"]} position={[0, 1.295, 0]} rotation={[0, Math.PI / 2, 0]} scale={[1.011, 0.032, 1.011]} visible={legs === 7} />
      <mesh geometry={nodes.nohy07.geometry} material={materials["Material.010"]} position={[0, 1.295, 1]} rotation={[0, Math.PI / 2, 0]} scale={[1.011, 0.032, 1.011]} visible={legs === 7} />
    </group>
  );
};
useGLTF.preload("/models/table.gltf");
export default Table;
