'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Target, Rocket } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        borderColor: 'rgba(59, 130, 246, 0.4)',
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08]"
    >
      {/* Subtle gradient glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/10">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
        <p className="leading-relaxed text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      {/* Background ambient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/[0.03] blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-4xl"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* Bio Paragraphs */}
        <div className="mb-16 space-y-6">
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-300"
          >
            Saurav Kumar is a final-year B.Tech Information Technology student at
            Rungta College of Engineering and Technology, Bhilai. His expertise
            spans{' '}
            <span className="text-white">Full Stack Development</span>,{' '}
            <span className="text-white">Blockchain Engineering</span>,{' '}
            <span className="text-white">Computer Vision</span>, and{' '}
            <span className="text-white">Artificial Intelligence</span> systems.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-300"
          >
            He has built multiple end-to-end applications using React.js,
            Node.js, Express.js, Solidity, Python, OpenCV, TensorFlow, and
            modern cloud technologies. His engineering approach focuses on
            scalable architecture, clean code, modular systems, and measurable
            business impact.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-300"
          >
            Recognized as a{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold text-transparent">
              Top 105 Global Finalist
            </span>{' '}
            in the Google Developer Groups Solution Challenge 2025, he
            continuously seeks opportunities to solve meaningful problems
            through technology.
          </motion.p>
        </div>

        {/* Mission & Vision Cards */}
        <motion.div
          variants={containerVariants}
          className="grid gap-6 sm:grid-cols-2"
        >
          <Card
            icon={<Target className="h-6 w-6 text-blue-400" />}
            title="Mission"
            description="Build software systems that solve real-world problems at scale."
          />
          <Card
            icon={<Rocket className="h-6 w-6 text-blue-400" />}
            title="Vision"
            description="Become a world-class engineer building products used by millions."
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
