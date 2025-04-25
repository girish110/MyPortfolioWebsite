// src/components/FloatingObjects.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Icosahedron } from "@react-three/drei";

function FloatingObjects() {
  return (
    <Canvas style={{ position: "absolute", inset: 0, zIndex: 0 , pointerEvents: "none"}}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* Float multiple 3D shapes */}
      {[...Array(10)].map((_, i) => (
        <Float key={i} speed={1} rotationIntensity={2} floatIntensity={2}>
          <Icosahedron
            args={[0.5, 0]}
            position={[
              Math.random() * 10 - 5,
              Math.random() * 5 - 2.5,
              Math.random() * 5 - 2.5,
            ]}
          >
            <meshStandardMaterial
              color={"#88e0ef"}
              transparent
              opacity={0.3}
              roughness={0.2}
              metalness={0.9}
            />
          </Icosahedron>
        </Float>
      ))}

      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true}/>
    </Canvas>
  );
}

export default FloatingObjects;
