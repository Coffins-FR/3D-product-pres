function Plane() {
  return (
    <mesh position={[0, -1, 0]} rotation={[0, 90, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default Plane;
