'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseGradient = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop, mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        x: smoothX,
        y: smoothY,
        width: 600,
        height: 600,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)',
        }}
      />
    </motion.div>
  );
};

export default MouseGradient;
