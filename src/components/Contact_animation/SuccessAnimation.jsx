import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleBurst = () => {
  const ref = useRef();
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 5;
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x += 0.001;
    }
  });

  return (
    <Points ref={ref} positions={positions}>
      <PointMaterial color="#00ffff" size={0.05} depthWrite={false} />
    </Points>
  );
};

export default function SuccessAnimation() {
  return (
    <Canvas style={{ height: "300px" }}>
      <ambientLight />
      <ParticleBurst />
    </Canvas>
  );
}
