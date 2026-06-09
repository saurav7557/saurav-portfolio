'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Building2, Cloud } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  icon: React.ReactNode;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Walmart USA',
    role: 'Advanced Software Engineering Virtual Experience',
    icon: <Briefcase className="h-5 w-5 text-blue-400" />,
    points: [
      'Data Structures',
      'Software Architecture',
      'System Design',
      'Scalable Engineering Systems',
    ],
  },
  {
    company: 'Accenture UK',
    role: 'Developer & Technology Virtual Experience',
    icon: <Building2 className="h-5 w-5 text-blue-400" />,
    points: [
      'Agile Development',
      'Technology Consulting',
      'Enterprise Engineering Practices',
      'Software Delivery Lifecycle',
    ],
  },
  {
    company: 'AWS Cloud',
    role: 'Cloud Virtual Experience',
    icon: <Cloud className="h-5 w-5 text-blue-400" />,
    points: [
      'EC2, S3, IAM, Lambda',
      'Cloud Architecture',
      'Scalable System Design',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

function TimelineItem({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex w-full items-center">
      {/* Desktop layout */}
      <div className="hidden w-full grid-cols-[1fr_auto_1fr] items-center gap-8 md:grid">
        {/* Left content */}
        <div className={isLeft ? 'block' : ''}>
          {isLeft && (
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <TimelineCard item={item} align="right" />
            </motion.div>
          )}
        </div>

        {/* Center node */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/30 bg-[#0a0e27]"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20" />
            {item.icon}
          </motion.div>
        </div>

        {/* Right content */}
        <div className={!isLeft ? 'block' : ''}>
          {!isLeft && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <TimelineCard item={item} align="left" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="grid w-full grid-cols-[auto_1fr] gap-6 md:hidden">
        {/* Node */}
        <div className="relative flex flex-col items-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/30 bg-[#0a0e27]"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-blue-500/20" />
            {item.icon}
          </motion.div>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <TimelineCard item={item} align="left" />
        </motion.div>
      </div>
    </div>
  );
}

function TimelineCard({
  item,
  align,
}: {
  item: ExperienceItem;
  align: 'left' | 'right';
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        borderColor: 'rgba(59, 130, 246, 0.3)',
        boxShadow: '0 0 30px rgba(59, 130, 246, 0.1)',
      }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.08] ${
        align === 'right' ? 'text-right' : 'text-left'
      }`}
    >
      {/* Hover gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <h3 className="mb-1 text-xl font-semibold text-white">
          {item.company}
        </h3>
        <p className="mb-4 text-sm text-blue-400/80">{item.role}</p>
        <div
          className={`flex flex-wrap gap-2 ${
            align === 'right' ? 'justify-end' : 'justify-start'
          }`}
        >
          {item.points.map((point) => (
            <span
              key={point}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition-colors duration-200 hover:border-blue-500/20 hover:text-gray-300"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      {/* Background ambient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/3 h-[350px] w-[350px] rounded-full bg-indigo-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500/50" />
            <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500/50" />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Glowing center line — Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-full origin-top bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent"
            />
            {/* Glow effect */}
            <div className="absolute inset-0 w-px bg-gradient-to-b from-blue-500/30 via-blue-500/10 to-transparent blur-sm" />
          </div>

          {/* Glowing side line — Mobile */}
          <div className="absolute left-[19px] top-0 h-full w-px md:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="h-full w-full origin-top bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent"
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.company} item={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
