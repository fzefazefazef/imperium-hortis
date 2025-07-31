import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';

// Composant ErrorBoundary simple
const ErrorBoundary = ({ children, fallback }: { children: React.ReactNode, fallback: React.ReactNode }) => {
  try {
    return <>{children}</>;
  } catch (error) {
    return <>{fallback}</>;
  }
};

interface LogoModelProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
}

const LogoModel = ({ modelPath, scale = 1, rotation = [0, 0, 0], position = [0, 0, 0] }: LogoModelProps) => {
  const modelRef = useRef<Group>(null);
  
  try {
    const { scene } = useGLTF(modelPath);
    
    useFrame((state) => {
      if (modelRef.current) {
        // Animation de rotation douce
        modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      }
    });

    return (
      <group ref={modelRef} scale={scale} rotation={rotation} position={position}>
        <primitive object={scene} />
      </group>
    );
  } catch (error) {
    console.log('Erreur GLB, utilisation du fallback:', error);
    return <FallbackLogo />;
  }
};

const FallbackLogo = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 0.5, 0.3]} />
        <meshStandardMaterial 
          color="hsl(var(--primary))"
          metalness={0.8}
          roughness={0.2}
          emissive="hsl(var(--primary))"
          emissiveIntensity={0.1}
        />
      </mesh>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </group>
  );
};

interface Logo3DProps {
  modelPath?: string;
  className?: string;
  width?: string;
  height?: string;
  scale?: number;
  enableControls?: boolean;
  autoRotate?: boolean;
}

export const Logo3D = ({ 
  modelPath, 
  className = "",
  width = "w-32",
  height = "h-32",
  scale = 1,
  enableControls = false,
  autoRotate = true
}: Logo3DProps) => {
  return (
    <div className={`${width} ${height} ${className}`}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {enableControls && (
          <OrbitControls 
            enableZoom={true}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
          />
        )}
        
        <Suspense fallback={<FallbackLogo />}>
          {modelPath ? (
            <ErrorBoundary fallback={<FallbackLogo />}>
              <LogoModel 
                modelPath={modelPath} 
                scale={scale}
              />
            </ErrorBoundary>
          ) : (
            <FallbackLogo />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};