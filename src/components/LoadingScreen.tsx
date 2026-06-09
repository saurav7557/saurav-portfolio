'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/30 via-black to-black" />

      {/* Animated SK Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mb-8"
      >
        {/* Outer glow ring */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
              '0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2)',
              '0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.1)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-20 h-20 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-blue-600/5 flex items-center justify-center"
        >
          <span className="text-3xl font-bold gradient-text select-none">
            SK
          </span>
        </motion.div>
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="relative z-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.5, 1] }}
        transition={{
          delay: 0.6,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative z-10 mt-6 text-sm text-white/40 tracking-widest uppercase font-light"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
