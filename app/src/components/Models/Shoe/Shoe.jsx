import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useTexture } from "@react-three/drei";
import { useAtom } from "jotai";
import { selectedMeshState } from "../../../states/selectedMesh";

export default function Shoe({ ...props }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF("/models/shoe_compress.glb");
  const [mesh, setMesh] = useAtom(selectedMeshState);
  console.log(mesh);
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
      onPointerDown={(event) => {
        event.stopPropagation();
        setMesh(event.object.material.name);
      }}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  );
}

useGLTF.preload("/shoe_compress.glb");
