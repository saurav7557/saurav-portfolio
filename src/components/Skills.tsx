'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Link,
  Database,
  Brain,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  glowColor: string;
  skills: string[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const categories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    iconColor: 'text-blue-400',
    glowColor: 'group-hover:shadow-blue-500/20',
    skills: ['JavaScript', 'Python', 'Java', 'C', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Layout,
    iconColor: 'text-cyan-400',
    glowColor: 'group-hover:shadow-cyan-500/20',
    skills: ['React.js', 'Redux', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: Server,
    iconColor: 'text-emerald-400',
    glowColor: 'group-hover:shadow-emerald-500/20',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    title: 'Blockchain',
    icon: Link,
    iconColor: 'text-purple-400',
    glowColor: 'group-hover:shadow-purple-500/20',
    skills: ['Solidity', 'Hardhat', 'Ethers.js', 'IPFS'],
  },
  {
    title: 'Databases',
    icon: Database,
    iconColor: 'text-amber-400',
    glowColor: 'group-hover:shadow-amber-500/20',
    skills: ['MySQL', 'MongoDB', 'Firestore'],
  },
  {
    title: 'AI & Computer Vision',
    icon: Brain,
    iconColor: 'text-pink-400',
    glowColor: 'group-hover:shadow-pink-500/20',
    skills: ['TensorFlow', 'YOLOv5', 'OpenCV', 'MATLAB'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    iconColor: 'text-orange-400',
    glowColor: 'group-hover:shadow-orange-500/20',
    skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vite'],
  },
];

/* ------------------------------------------------------------------ */
/*  Skill Pill                                                         */
/* ------------------------------------------------------------------ */

function SkillPill({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="group/pill relative inline-flex cursor-default items-center overflow-hidden
                 rounded-full border border-white/10 bg-white/[0.04]
                 px-4 py-1.5 text-sm font-medium text-gray-300
                 transition-all duration-300
                 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-200
                 hover:shadow-[0_0_16px_rgba(59,130,246,0.15)]"
    >
      {/* Shine sweep */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg]
                   bg-gradient-to-r from-transparent via-white/10 to-transparent
                   transition-transform duration-700 ease-out
                   group-hover/pill:translate-x-full"
      />
      <span className="relative z-10">{label}</span>
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/*  Category Card                                                      */
/* ------------------------------------------------------------------ */

function CategoryCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10
                  bg-gradient-to-br from-white/5 to-white/[0.02]
                  backdrop-blur-xl p-6 md:p-7
                  shadow-lg shadow-black/20
                  transition-shadow duration-500
                  ${category.glowColor} hover:shadow-2xl
                  hover:border-white/20`}
    >
      {/* Ambient glow per card */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/[0.04] blur-3xl transition-all duration-700 group-hover:bg-blue-500/[0.08]" />

      {/* Icon + title */}
      <div className="mb-5 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                      border border-white/10 bg-white/[0.06] ${category.iconColor}`}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-semibold text-white md:text-lg">
          {category.title}
        </h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Skills() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative overflow-hidden bg-black py-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
          >
            Expertise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl"
          >
            Technical Skills
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
