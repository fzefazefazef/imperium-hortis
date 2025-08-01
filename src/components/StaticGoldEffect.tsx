import React from 'react';

export default function StaticGoldEffect() {
  return (
    <div 
      className="absolute inset-0 rounded-xl pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(255, 193, 7, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255, 171, 64, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 70% 20%, rgba(255, 140, 0, 0.08) 0%, transparent 50%)
        `,
      }}
    />
  );
}