import React from 'react';
import { Physics, RigidBody } from '@react-three/rapier';
import { Text, Html, Environment, MeshReflectorMaterial, Float } from '@react-three/drei';
import Vehicle from './Vehicle';
import AttendanceCalculator from './AttendanceCalculator';
import CGPACalculator from './CGPACalculator';
import Timetable from './Timetable';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[20, 30, 10]} intensity={1.5} shadow-mapSize={[2048, 2048]}>
        <orthographicCamera attach="shadow-camera" args={[-50, 50, 50, -50, 0.1, 100]} />
      </directionalLight>
      <Environment preset="city" />

      <Physics gravity={[0, -30, 0]}>
        
        {/* The Player Vehicle */}
        <Vehicle />

        {/* Massive Shiny Floor */}
        <RigidBody type="fixed" friction={2}>
          <mesh receiveShadow position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[400, 400]} />
            <MeshReflectorMaterial
              blur={[400, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={50}
              roughness={0.15}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.9}
            />
          </mesh>
        </RigidBody>

        {/* Invisible Walls */}
        <RigidBody type="fixed" position={[0, 5, -150]}>
          <mesh><boxGeometry args={[300, 20, 1]} /><meshStandardMaterial transparent opacity={0} /></mesh>
        </RigidBody>
        <RigidBody type="fixed" position={[0, 5, 50]}>
          <mesh><boxGeometry args={[300, 20, 1]} /><meshStandardMaterial transparent opacity={0} /></mesh>
        </RigidBody>
        <RigidBody type="fixed" position={[-150, 5, 0]}>
          <mesh><boxGeometry args={[1, 20, 300]} /><meshStandardMaterial transparent opacity={0} /></mesh>
        </RigidBody>
        <RigidBody type="fixed" position={[150, 5, 0]}>
          <mesh><boxGeometry args={[1, 20, 300]} /><meshStandardMaterial transparent opacity={0} /></mesh>
        </RigidBody>

        {/* --- BRUNO SIMON STYLE INTERACTIVE WORLD --- */}

        {/* Massive Entry Text */}
        <RigidBody type="fixed" position={[0, 0, -5]}>
          <Text position={[0, 2, 0]} fontSize={8} fontWeight={900} letterSpacing={-0.05} color="#fff" castShadow>
            DRIVE TO EXPLORE
          </Text>
        </RigidBody>

        {/* CGPA Station */}
        <RigidBody type="fixed" position={[-30, 0, -40]} rotation={[0, Math.PI / 6, 0]}>
          <Text position={[0, 15, 0]} fontSize={6} fontWeight={900} color="#8b5cf6" castShadow>
            COMPUTE ENGINE
          </Text>
          {/* Physical backing for the UI */}
          <mesh position={[0, 5, -2]} castShadow receiveShadow>
            <boxGeometry args={[22, 12, 1]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <Html transform position={[0, 5, -1.4]} style={{ width: '800px', pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <CGPACalculator />
            </div>
          </Html>
        </RigidBody>

        {/* Attendance Station */}
        <RigidBody type="fixed" position={[30, 0, -40]} rotation={[0, -Math.PI / 6, 0]}>
          <Text position={[0, 15, 0]} fontSize={6} fontWeight={900} color="#3b82f6" castShadow>
            ATTENDANCE
          </Text>
          <mesh position={[0, 5, -2]} castShadow receiveShadow>
            <boxGeometry args={[14, 13, 1]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <Html transform position={[0, 5, -1.4]} style={{ width: '500px', pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <AttendanceCalculator />
            </div>
          </Html>
        </RigidBody>

        {/* Timetable Station */}
        <RigidBody type="fixed" position={[0, 0, -80]}>
          <Text position={[0, 15, 0]} fontSize={6} fontWeight={900} color="#10b981" castShadow>
            SCHEDULE
          </Text>
          <mesh position={[0, 5, -2]} castShadow receiveShadow>
            <boxGeometry args={[14, 11, 1]} />
            <meshStandardMaterial color="#111" />
          </mesh>
          <Html transform position={[0, 5, -1.4]} style={{ width: '500px', pointerEvents: 'none' }}>
            <div style={{ pointerEvents: 'auto' }}>
              <Timetable />
            </div>
          </Html>
        </RigidBody>

        {/* Floating Psychological Copy */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} position={[-40, 15, -10]}>
          <Text fontSize={3} color="#555" fontWeight={700}>
            "Data is the new oil."
          </Text>
        </Float>
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8} position={[40, 12, -20]}>
          <Text fontSize={3} color="#555" fontWeight={700}>
            REWIRE THE FUTURE.
          </Text>
        </Float>

        {/* --- PHYSICS TOYS TO CRASH INTO --- */}
        
        {/* Glowing Data Blocks */}
        {[...Array(80)].map((_, i) => (
          <RigidBody key={`box-${i}`} type="dynamic" mass={0.5} position={[Math.random() * 80 - 40, Math.random() * 10 + 2, Math.random() * -80 - 10]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[1.5, 1.5, 1.5]} />
              <meshStandardMaterial color={Math.random() > 0.7 ? '#8b5cf6' : '#222'} roughness={0.2} metalness={0.5} />
            </mesh>
          </RigidBody>
        ))}

        {/* Giant Physics Bowling Pins in the middle */}
        {[...Array(10)].map((_, i) => {
          // Arrange in a triangle
          const row = Math.floor((-1 + Math.sqrt(1 + 8 * i)) / 2);
          const col = i - (row * (row + 1)) / 2;
          const x = (col - row / 2) * 2;
          const z = -20 - row * 2;
          return (
            <RigidBody key={`pin-${i}`} type="dynamic" mass={1} position={[x, 2, z]}>
              <mesh castShadow receiveShadow>
                <cylinderGeometry args={[0.5, 0.8, 3, 16]} />
                <meshStandardMaterial color="#f43f5e" roughness={0.1} />
              </mesh>
            </RigidBody>
          );
        })}

        {/* Ramps to jump off */}
        <RigidBody type="fixed" position={[-15, 0, -20]} rotation={[Math.PI / 8, Math.PI/4, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </RigidBody>

        <RigidBody type="fixed" position={[15, 0, -20]} rotation={[Math.PI / 8, -Math.PI/4, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[10, 1, 10]} />
            <meshStandardMaterial color="#222" />
          </mesh>
        </RigidBody>

      </Physics>
    </>
  );
}
