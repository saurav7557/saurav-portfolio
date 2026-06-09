'use client';

import { useState, useEffect, useMemo } from 'react';

interface ParticleConfig {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
  opacity: number;
  drift: number;
}

const ParticleField = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const particles = useMemo<ParticleConfig[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 15 + 10,
      opacity: Math.random() * 0.4 + 0.1,
      drift: (Math.random() - 0.5) * 80,
    }));
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <style jsx>{`
        @keyframes particle-float {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity);
          }
          90% {
            opacity: var(--particle-opacity);
          }
          100% {
            transform: translateY(-10vh) translateX(var(--particle-drift));
            opacity: 0;
          }
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          background: #60a5fa;
          animation: particle-float var(--particle-duration) var(--particle-delay)
            linear infinite;
          will-change: transform, opacity;
        }
      `}</style>

      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={
            {
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              '--particle-opacity': particle.opacity,
              '--particle-delay': `${particle.delay}s`,
              '--particle-duration': `${particle.duration}s`,
              '--particle-drift': `${particle.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

export default ParticleField;
