import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls, Environment, ContactShadows, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = () => {
  const count = 800;
  const mesh = useRef();
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * Math.PI * 2;
      const r = 4 + Math.random() * 3;
      const x = Math.cos(t) * r;
      const z = Math.sin(t) * r;
      const y = (Math.random() - 0.5) * 2;
      temp.push({ t, factor: Math.random() * 0.5 + 0.5, speed: Math.random() * 0.01 + 0.005, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      t = particle.t += speed;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      dummy.position.set(x * a, y + Math.cos(t * factor), z * b);
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x += 0.0005;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
    </instancedMesh>
  );
};

const AbstractCore = () => {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
        <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.6} speed={1.5} roughness={0.1} metalness={1} clearcoat={1} clearcoatRoughness={0.1} />
      </mesh>
    </Float>
  );
};

export default function Hero3D() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0, zIndex: 0, cursor: 'grab' }}>
      <Canvas shadows camera={{ position: [0, 0, 12], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 30]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <Environment preset="city" />
        
        {/* Interactive wrapper - user can grab and spin the entire scene */}
        <PresentationControls global rotation={[0, 0, 0]} polar={[-Math.PI / 3, Math.PI / 3]} azimuth={[-Math.PI / 2, Math.PI / 2]} config={{ mass: 2, tension: 400 }} snap={{ mass: 4, tension: 400 }}>
          <group position={[0, 0, 0]}>
            <AbstractCore />
            <ParticleRing />
            
            {/* 3D Typography */}
            <Text position={[0, -3.5, 2]} fontSize={1.5} fontWeight={900} letterSpacing={-0.05} color="#ffffff">
              AiDS CORE
            </Text>
            <Text position={[0, -4.5, 2]} fontSize={0.3} color="#8b5cf6" letterSpacing={0.2}>
              DRAG TO INTERACT
            </Text>
          </group>
        </PresentationControls>
        
        <ContactShadows position={[0, -5, 0]} opacity={0.7} scale={30} blur={2.5} far={4.5} />
      </Canvas>
    </div>
  );
}
