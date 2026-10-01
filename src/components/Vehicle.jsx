import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Vehicle() {
  const bodyRef = useRef();
  const [, getKeys] = useKeyboardControls();

  const cameraTarget = new THREE.Vector3();
  const cameraLookAt = new THREE.Vector3();

  useFrame((state, delta) => {
    if (!bodyRef.current) return;
    
    const { forward, backward, left, right, jump } = getKeys();
    
    const linvel = bodyRef.current.linvel();
    const position = bodyRef.current.translation();
    
    const impulseStrength = 60 * delta;
    const torqueStrength = 30 * delta;

    // Movement mechanics (highly damped for "car-like" tight control)
    if (forward) {
      bodyRef.current.applyImpulse({ x: 0, y: 0, z: -impulseStrength }, true);
    }
    if (backward) {
      bodyRef.current.applyImpulse({ x: 0, y: 0, z: impulseStrength }, true);
    }
    if (left) {
      bodyRef.current.applyImpulse({ x: -impulseStrength, y: 0, z: 0 }, true);
      bodyRef.current.applyTorqueImpulse({ x: 0, y: torqueStrength, z: 0 }, true);
    }
    if (right) {
      bodyRef.current.applyImpulse({ x: impulseStrength, y: 0, z: 0 }, true);
      bodyRef.current.applyTorqueImpulse({ x: 0, y: -torqueStrength, z: 0 }, true);
    }
    if (jump && Math.abs(linvel.y) < 0.1) {
      bodyRef.current.applyImpulse({ x: 0, y: 15, z: 0 }, true);
    }

    // Speed limiter
    const maxSpeed = 20;
    const currentSpeed = Math.sqrt(linvel.x ** 2 + linvel.z ** 2);
    if (currentSpeed > maxSpeed) {
      const ratio = maxSpeed / currentSpeed;
      bodyRef.current.setLinvel({ x: linvel.x * ratio, y: linvel.y, z: linvel.z * ratio }, true);
    }

    // Cinematic smooth camera follow
    cameraTarget.set(position.x, position.y + 12, position.z + 20);
    state.camera.position.lerp(cameraTarget, 0.08); 
    
    cameraLookAt.set(position.x, position.y, position.z);
    state.camera.lookAt(cameraLookAt);
  });

  return (
    <RigidBody 
      ref={bodyRef} 
      colliders="cuboid" 
      mass={2} 
      position={[0, 2, 10]} 
      linearDamping={4} 
      angularDamping={5}
    >
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.8, 2.5]} />
        <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Front Headlights */}
      <mesh position={[0.5, 0.1, -1.26]}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
      <mesh position={[-0.5, 0.1, -1.26]}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color="#fff" />
      </mesh>
      {/* Tail lights */}
      <mesh position={[0.5, 0.1, 1.26]}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color="#f43f5e" />
      </mesh>
      <mesh position={[-0.5, 0.1, 1.26]}>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color="#f43f5e" />
      </mesh>

      <pointLight position={[0, 0.5, -2]} intensity={2} color="#fff" distance={15} />
      <pointLight position={[0, 0.5, 2]} intensity={1} color="#f43f5e" distance={5} />
    </RigidBody>
  );
}
