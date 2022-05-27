import { Suspense } from "react";
import propTypes, { element } from "prop-types";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

import SceneWrapper from "./SceneWrapper";
function Scene({ children }) {
  return (
    <SceneWrapper>
      <Canvas
        style={{
          background:
            "radial-gradient(circle, rgba(255,187,57,1) 0%, rgba(134,91,10,1) 83%)",
        }}
        camera={{ position: [0, 0, 2] }}
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
    </SceneWrapper>
  );
}
Scene.propTypes = {
  className: propTypes.string,
  children: propTypes.element || propTypes.arrayOf(propTypes.element),
};
export default Scene;
