import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, MeshDistortMaterial } from '@react-three/drei';

const ScrollAnimatedObject = ({ scrollYProgress }) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current && scrollYProgress) {
      // Basic continuous rotation
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Scale based on scroll
      const scrollValue = scrollYProgress.get() || 0;
      const scale = 1.5 + scrollValue * 3;
      meshRef.current.scale.set(scale, scale, scale);
      
      // Move slightly based on scroll
      meshRef.current.position.y = scrollValue * -5;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 200, 32]} scale={1.5}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.4}
        speed={1}
        roughness={0.2}
        metalness={0.8}
        wireframe={true}
      />
    </TorusKnot>
  );
};

const Campus3D = ({ scrollYProgress }) => {
  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#3b82f6" />
      <directionalLight position={[-10, -10, -5]} intensity={1} color="#8b5cf6" />
      <ScrollAnimatedObject scrollYProgress={scrollYProgress} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Campus3D;
