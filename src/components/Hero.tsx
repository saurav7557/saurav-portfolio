'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  Variants,
} from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface StatItem {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Blockchain Engineer',
  'AI Systems Builder',
];

const STATS: StatItem[] = [
  { value: 3, suffix: '+', prefix: '', label: 'Production Projects' },
  { value: 6, suffix: '+', prefix: '', label: 'Professional Certifications' },
  { value: 105, suffix: '', prefix: 'Top ', label: 'GDG Global Finalist' },
  { value: 1, suffix: '', prefix: '', label: 'Project Competition Winner' },
];

const ROLE_CYCLE_MS = 3000;

/* ------------------------------------------------------------------ */
/*  Variants                                                           */
/* ------------------------------------------------------------------ */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const buttonStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.6 },
  },
};

const buttonChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const statsStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const statCard: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  AnimatedCounter                                                    */
/* ------------------------------------------------------------------ */

function AnimatedCounter({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix: string;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [isInView, motionVal, value]);

  /* Subscribe to rounded value and write it to the DOM directly
     so we avoid re-rendering React on every animation frame. */
  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${v}${suffix}`;
      }
    });
    return unsubscribe;
  }, [rounded, prefix, suffix]);

  // For value === 1 we show the ordinal label instead
  if (value === 1) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        1st Place
      </motion.span>
    );
  }

  return (
    <span
      ref={ref}
      className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
    >
      {prefix}0{suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Component                                                     */
/* ------------------------------------------------------------------ */

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  /* ---- Auto-cycle roles ---- */
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, ROLE_CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  /* ---- Smooth scroll helper ---- */
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  /* ---- Stats ref for in-view stagger ---- */
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-60px' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* ---- Subtle background gradient orbs ---- */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-[40%] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] h-[600px] w-[600px] rounded-full bg-blue-500/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* ---- Name ---- */}
          <motion.h1
            variants={fadeUp}
            className="bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-5xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            SAURAV KUMAR
          </motion.h1>

          {/* ---- Animated Role Rotator ---- */}
          <motion.div
            variants={fadeIn}
            className="mt-4 h-10 overflow-hidden sm:mt-6 sm:h-12"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl md:text-3xl"
              >
                {ROLES[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* ---- Introduction ---- */}
          <motion.p
            variants={fadeIn}
            className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Passionate software engineer building cutting-edge solutions across
            full-stack web development, blockchain technology, and AI systems.
            I turn complex problems into elegant, scalable products that make
            an impact.
          </motion.p>

          {/* ---- CTA Buttons ---- */}
          <motion.div
            variants={buttonStagger}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            {/* View Projects */}
            <motion.button
              variants={buttonChild}
              onClick={() => scrollTo('projects')}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(59,130,246,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-shadow"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            {/* Download Resume */}
            <motion.a
              variants={buttonChild}
              href="/Saurav_Kumar_Resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 backdrop-blur transition-colors hover:border-gray-500 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>

            {/* Contact Me */}
            <motion.button
              variants={buttonChild}
              onClick={() => scrollTo('contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-gray-300 backdrop-blur transition-colors hover:border-gray-500 hover:text-white"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* ---- Stats Grid ---- */}
          <motion.div
            ref={statsRef}
            variants={statsStagger}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statCard}
                className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/[0.15] hover:bg-white/[0.06]"
              >
                {/* Glow on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(300px circle at 50% 50%, rgba(59,130,246,0.08), transparent 70%)',
                  }}
                />
                <AnimatedCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
                <p className="mt-2 text-xs font-medium tracking-wide text-gray-500 sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ---- Scroll indicator ---- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-600">
            Scroll
          </span>
          <div className="h-8 w-[1.5px] rounded-full bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
