import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

const Player = () => {
  const body = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();

  useFrame((state, delta) => {
    if (!body.current) return;
    const { forward, backward, left, right } = getKeys();
    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };
    const speed = 25 * delta;
    const torqueSpeed = 15 * delta;

    if (forward) {
      impulse.z -= speed;
      torque.x -= torqueSpeed;
    }
    if (backward) {
      impulse.z += speed;
      torque.x += torqueSpeed;
    }
    if (left) {
      impulse.x -= speed;
      torque.z += torqueSpeed;
    }
    if (right) {
      impulse.x += speed;
      torque.z -= torqueSpeed;
    }

    body.current.applyImpulse(impulse, true);
    body.current.applyTorqueImpulse(torque, true);

    // Camera follow smoothly
    const bodyPosition = body.current.translation();
    const cameraPosition = new THREE.Vector3(bodyPosition.x, bodyPosition.y + 12, bodyPosition.z + 18);
    state.camera.position.lerp(cameraPosition, 0.1);
    state.camera.lookAt(bodyPosition.x, bodyPosition.y, bodyPosition.z);
  });

  return (
    <RigidBody ref={body} colliders="ball" mass={1} type="dynamic" position={[0, 5, 10]} linearDamping={2} angularDamping={2}>
      <mesh castShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ffffff" emissive="#8b5cf6" emissiveIntensity={0.8} wireframe />
      </mesh>
      {/* Core glow */}
      <mesh castShadow scale={0.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
      </mesh>
    </RigidBody>
  );
};

export default Player;
