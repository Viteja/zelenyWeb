import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";

import { useCustomization } from "./context/Customization";

// Table komponenta pro zobrazení modelu

const Table = (props) => {
  const { nodes, materials } = useGLTF("/models/cvrkec.gltf"); // Cesta k modelu
  const { shape, edge, legs, material, legColor, delka, sirka, vyska, tloustka } = useCustomization();

  const wood1TextureProps = useTexture({
    map: "../../textures/Wood/Wood_011_Base_Color.jpg",
    normalMap: "../../textures/Wood/Wood_011_Normal.jpg",
  });
  const wood2TextureProps = useTexture({
    map: "../../textures/Wood/Wood_013_COLOR.jpg",
    normalMap: "../../textures/Wood/Wood_013_NORM.jpg",
  });

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ctverec.geometry} position={[0, 0, 0]} scale={[delka / 100, tloustka / 1000, sirka / 100]} visible={shape === 1}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes.Kruh.geometry} position={[0, 0, 0]} scale={[sirka / 100, tloustka / 1000, sirka / 100]} visible={shape === 2}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes.Natural.geometry} position={[0, 0, 0]} scale={[delka / 90, tloustka / 1000, sirka / 90]} visible={shape === 3}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes.hexagon.geometry} scale={[sirka / 100, tloustka / 20, sirka / 100]} visible={shape === 4}>
        <meshStandardMaterial {...(material === "wood1" ? wood1TextureProps : wood2TextureProps)} />
      </mesh>
      <mesh geometry={nodes["1Noha14"].geometry} position={[delka / 200 + delka / 200 - 0.1, -vyska / 100, -(sirka / 200 + sirka / 200 - 0.1)]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 1 || shape === 3}>
        <meshStandardMaterial color={legColor} />{" "}
      </mesh>
      <mesh geometry={nodes["1Noha44"].geometry} position={[delka / 200 + delka / 200 - 0.1, -vyska / 100, sirka / 200 + sirka / 200 - 0.1]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 1 || shape === 3}>
        <meshStandardMaterial color={legColor} />{" "}
      </mesh>
      <mesh geometry={nodes["1Noha34"].geometry} position={[-(delka / 200 + delka / 200) + 0.1, -vyska / 100, -(sirka / 200 + sirka / 200 - 0.1)]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 1 || shape === 3}>
        <meshStandardMaterial color={legColor} />{" "}
      </mesh>
      <mesh geometry={nodes["1Noha24"].geometry} position={[-(delka / 200 + delka / 200) + 0.1, -vyska / 100, sirka / 200 + sirka / 200 - 0.1]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 1 || shape === 3}>
        <meshStandardMaterial color={legColor} />{" "}
      </mesh>
      <mesh geometry={nodes["2Noha14"].geometry} position={[sirka / 200 + sirka / 200 - sirka / 200, -vyska / 100, -(sirka / 200 + sirka / 200 - sirka / 200)]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 2 || shape === 4}>
        <meshStandardMaterial color={legColor} />{" "}
      </mesh>
      <mesh geometry={nodes["2Noha24"].geometry} position={[sirka / 200 + sirka / 200 - sirka / 200, -vyska / 100, sirka / 200 + sirka / 200 - sirka / 200]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 2 || shape === 4}>
        <meshStandardMaterial color={legColor} />
      </mesh>
      <mesh geometry={nodes["2Noha34"].geometry} position={[-(sirka / 200 + sirka / 200) + sirka / 200, -vyska / 100, sirka / 200 + sirka / 200 - sirka / 200]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 2 || shape === 4}>
        <meshStandardMaterial color={legColor} />
      </mesh>
      <mesh geometry={nodes["2Noha44"].geometry} position={[-(sirka / 200 + sirka / 200) + sirka / 200, -vyska / 100, -(sirka / 200 + sirka / 200 - sirka / 200)]} scale={[0.05, vyska / 100, 0.05]} visible={shape === 2 || shape === 4}>
        <meshStandardMaterial color={legColor} />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/cvrkec.gltf");
export default Table;
