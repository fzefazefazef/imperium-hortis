import { memo } from 'react';

interface OptimizedButton3DWrapperProps {
  children: React.ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
  onClick?: () => void;
}

export const OptimizedButton3DWrapper = memo(({ 
  children, 
  isVisible, 
  delay = 0, 
  className = "", 
  onClick 
}: OptimizedButton3DWrapperProps) => {
  return (
    <div className={`relative ${className}`} onClick={onClick}>
      {/* Simulation 3D simple avec CSS au lieu de Canvas */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-500 ${
          isVisible 
            ? 'opacity-20 scale-105 blur-sm' 
            : 'opacity-0 scale-100'
        }`}
        style={{
          background: isVisible ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 193, 7, 0.2))' : 'transparent',
          borderRadius: '12px',
          animationDelay: `${delay}s`,
          filter: isVisible ? 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.4))' : 'none'
        }}
      />
      
      {/* Contenu du bouton */}
      <div className={`relative z-10 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform-gpu translate-y-0 scale-100' 
          : 'opacity-70 transform-gpu translate-y-1 scale-95'
      }`}>
        {children}
      </div>
    </div>
  );
});

OptimizedButton3DWrapper.displayName = 'OptimizedButton3DWrapper';