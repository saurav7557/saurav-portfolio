'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const highlights = [
  'Full Stack Development',
  'Computer Vision',
  'Distributed Systems',
  'Blockchain Applications',
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      {/* Background ambient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.02] blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-3xl"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* Education Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(59, 130, 246, 0.3)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)',
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] sm:p-10"
        >
          {/* Hover gradient overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Decorative corner accent */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/15" />

          <div className="relative z-10">
            {/* Icon & Degree */}
            <motion.div variants={itemVariants} className="mb-6 flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                <GraduationCap className="h-7 w-7 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Bachelor of Technology
                </h3>
                <p className="mt-1 text-lg text-blue-400/80">
                  Information Technology
                </p>
              </div>
            </motion.div>

            {/* College Name */}
            <motion.p
              variants={itemVariants}
              className="mb-6 text-lg leading-relaxed text-gray-300"
            >
              Rungta College of Engineering and Technology
            </motion.p>

            {/* Details Row */}
            <motion.div
              variants={itemVariants}
              className="mb-8 flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="h-4 w-4 text-blue-400/60" />
                <span className="text-sm">2022 – 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="h-4 w-4 text-blue-400/60" />
                <span className="text-sm">
                  CGPA:{' '}
                  <span className="font-semibold text-white">7.65 / 10</span>
                </span>
              </div>
            </motion.div>

            {/* Divider */}
            <motion.div
              variants={itemVariants}
              className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

            {/* Highlights */}
            <motion.div variants={itemVariants}>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
                Key Focus Areas
              </p>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3"
              >
                {highlights.map((highlight) => (
                  <motion.span
                    key={highlight}
                    variants={pillVariants}
                    whileHover={{
                      scale: 1.05,
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                    }}
                    className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-colors duration-200 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    {highlight}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
