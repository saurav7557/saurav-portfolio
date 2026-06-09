'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Globe, Trophy } from 'lucide-react';

function AnimatedCounter({
  target,
  duration = 2,
  suffix = '',
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

interface Stat {
  value: string;
  label: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Achievements() {
  const stats: Stat[] = [
    { value: '64,000+', label: 'Participants' },
    { value: '3,700+', label: 'Projects' },
    { value: 'Worldwide', label: 'Recognition' },
  ];

  return (
    <section id="achievements" className="relative py-32 px-6">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milestones that define my journey in tech
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Card 1 — Top 105 Global Finalist */}
          <motion.div variants={cardVariants} className="group relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/30 via-blue-400/20 to-blue-600/30 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </div>

            <div className="relative bg-[#0a0e27]/90 backdrop-blur-2xl rounded-2xl p-8 md:p-10 h-full">
              {/* Icon and badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-blue-400" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                  Global
                </span>
              </div>

              {/* Large number */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-none">
                  <AnimatedCounter target={105} duration={2} />
                </span>
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mt-2">
                  Top Global Finalist
                </p>
              </div>

              {/* Description */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                Google Developer Groups
              </h3>
              <p className="text-gray-400 mb-8">
                Solution Challenge 2025
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className="text-center p-3 bg-white/5 rounded-xl border border-white/5"
                  >
                    <p className="text-white font-bold text-sm">{stat.value}</p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — First Place Winner */}
          <motion.div variants={cardVariants} className="group relative">
            {/* Animated gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-yellow-500/30 via-blue-400/20 to-yellow-500/30 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Shimmer effect */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
            </div>

            <div className="relative bg-[#0a0e27]/90 backdrop-blur-2xl rounded-2xl p-8 md:p-10 h-full">
              {/* Icon and badge */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-yellow-400" />
                </div>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-full">
                  Winner
                </span>
              </div>

              {/* Large 1st */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-black bg-gradient-to-br from-yellow-300 via-yellow-400 to-blue-400 bg-clip-text text-transparent leading-none">
                  1st
                </span>
                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider mt-2">
                  Place Winner
                </p>
              </div>

              {/* Description */}
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                Project Competition 2025
              </h3>
              <p className="text-gray-400 mb-4">
                Rungta College of Engineering and Technology
              </p>

              {/* Award details */}
              <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">
                  Awarded For
                </p>
                <p className="text-white font-semibold">
                  AI-Based Intellectual Property Protection System
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
