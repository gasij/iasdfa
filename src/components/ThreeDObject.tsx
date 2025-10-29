import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Sphere, Torus, Box } from '@react-three/drei';

export const Floating3DObject = () => {
  const meshRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  const boxRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      torusRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4 + 1) * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      boxRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      boxRef.current.rotation.z = state.clock.elapsedTime * 0.15;
      boxRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3 + 2) * 0.25;
    }
  });

  return (
    <>
      {/* Main floating sphere */}
      <Sphere ref={meshRef} args={[0.8, 32, 32]} position={[-1.5, 0, -3]}>
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#2563eb"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.3}
          transparent
          opacity={0.6}
        />
      </Sphere>

      {/* Floating torus */}
      <Torus ref={torusRef} args={[0.6, 0.2, 16, 100]} position={[1.5, 0, -2.5]}>
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#7c3aed"
          emissiveIntensity={0.35}
          metalness={0.6}
          roughness={0.4}
          transparent
          opacity={0.55}
        />
      </Torus>

      {/* Floating box */}
      <Box ref={boxRef} args={[0.7, 0.7, 0.7]} position={[0, 0, -3.5]} rotation={[0.5, 0.5, 0]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.5}
          transparent
          opacity={0.5}
        />
      </Box>
    </>
  );
};

