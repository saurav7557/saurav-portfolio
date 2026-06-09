'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps extends HTMLMotionProps<'section'> {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '', ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-24 flex flex-col justify-center ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      {...props}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full">
        {children}
      </div>
    </motion.section>
  );
}
