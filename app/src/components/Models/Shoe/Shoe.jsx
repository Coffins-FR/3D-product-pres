import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useAtom } from "jotai";
import { selectedMeshState } from "@states/selectedMesh";
import { selectedColor } from "@states/colorState";

export default function Shoe({ ...props }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/shoe_compress.glb");
  const [mesh, setMesh] = useAtom(selectedMeshState);
  const [color, setColor] = useAtom(selectedColor);
  const [hovered, setHovered] = useState(null);
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.z = -0.2 - (1 + Math.sin(time / 1.5)) / 20;
    ref.current.position.y = (1 + Math.sin(time / 1.5)) / 10;
  });
  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(event.object.material.name);
      }}
      onPointerOut={(event) =>
        event.intersections.length === 0 && setHovered(null)
      }
      onPointerDown={(event) => {
        event.stopPropagation();
        setMesh(event.object.material.name);
      }}
      onPointerMissed={() => {
        setMesh(null);
      }}
    >
      <mesh
        material-color={color.laces}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        material-color={color.mesh}
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        material-color={color.caps}
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        material-color={color.inner}
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        material-color={color.sole}
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        material-color={color.stripes}
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        material-color={color.band}
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        material-color={color.patch}
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}

useGLTF.preload("/shoe_compress.glb");
