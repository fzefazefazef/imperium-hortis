import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface Button3DProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
}

export const Button3D = ({ children, isVisible, delay = 0 }: Button3DProps) => {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current && groupRef.current) {
      // Animation de rotation continue
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.1;
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime + delay) * 0.1;
      
      // Animation de scale basée sur la visibilité
      const targetScale = isVisible ? 1 : 0.8;
      const currentScale = groupRef.current.scale.x;
      groupRef.current.scale.setScalar(
        currentScale + (targetScale - currentScale) * 0.1
      );
      
      // Animation de position Y (bounce)
      if (isVisible) {
        const bounce = Math.sin(state.clock.elapsedTime * 2 + delay) * 0.05;
        groupRef.current.position.y = bounce;
      }
    }
  });

  return (
    <group ref={groupRef} scale={isVisible ? 1 : 0.8}>
      <mesh ref={meshRef}>
        <boxGeometry args={[0.5, 0.2, 0.1]} />
        <meshStandardMaterial 
          color={isVisible ? "#22c55e" : "#6b7280"}
          emissive={isVisible ? "#22c55e" : "#000000"}
          emissiveIntensity={isVisible ? 0.2 : 0}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 0, 1]} intensity={1} />
    </group>
  );
};