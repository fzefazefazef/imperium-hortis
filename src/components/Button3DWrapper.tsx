import { Canvas } from '@react-three/fiber';
import { Button3D } from './Button3D';

interface Button3DWrapperProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

export const Button3DWrapper = ({ 
  children, 
  isVisible, 
  delay = 0, 
  className = "", 
  onClick 
}: Button3DWrapperProps) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {/* Canvas 3D en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
          <Button3D isVisible={isVisible} delay={delay}>
            {children}
          </Button3D>
        </Canvas>
      </div>
      
      {/* Contenu du bouton avec fond transparent pour voir la 3D */}
      <div className={`relative z-10 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform-gpu translate-z-0 scale-100' 
          : 'opacity-70 transform-gpu scale-95'
      }`}>
        {children}
      </div>
    </div>
  );
};