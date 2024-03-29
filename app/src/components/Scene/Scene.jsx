import { Suspense } from "react";
import propTypes from "prop-types";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
function Scene({ children }) {
  return (
    <Canvas
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,200,200,1) 83%)",
      }}
      camera={{ position: [1, 0.5, 1.5] }}
    >
      <ambientLight intensity={0.3} />
      <spotLight
        intensity={0.3}
        angle={0.1}
        penumbra={1}
        position={[5, 25, 25]}
      />
      <Suspense fallback={null}>
        {children}
        <Environment files="/hdr/royal_esplanade_1k.hdr" />
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -0.8, 0]}
          opacity={0.5}
        />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
Scene.propTypes = {
  className: propTypes.string,
  children: propTypes.element || propTypes.arrayOf(propTypes.element),
};
export default Scene;
