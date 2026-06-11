'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology',
    field: 'Information Technology',
    institution: 'Rungta College of Engineering and Technology, Bhilai',
    duration: '2022 – 2026',
    scoreLabel: 'CGPA',
    score: '7.65 / 10',
    highlights: [
      'Full Stack Development',
      'Computer Vision',
      'Distributed Systems',
      'Blockchain Applications',
    ],
  },
  {
    degree: 'Class XII',
    field: 'Intermediate',
    institution: 'Inter Mathurasini Mahavidyalaya, Rajauli, Nawada, Bihar',
    duration: '2019 – 2021',
    scoreLabel: 'Percentage',
    score: '70%',
    highlights: [
      'Science Stream',
      'Mathematics',
      'Analytical Thinking',
    ],
  },
  {
    degree: 'Class X',
    field: 'Secondary Education',
    institution: 'DAV Public School, Daudnagar, Aurangabad, Bihar',
    duration: '2019',
    scoreLabel: 'Percentage',
    score: '84.6%',
    highlights: [
      'Mathematics',
      'Science',
      'Academic Excellence',
    ],
  },
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
    },
  },
};

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
  });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/[0.02] blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative z-10 mx-auto max-w-4xl"
      >
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

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:bg-white/[0.08]"
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-blue-600/10">
                    <GraduationCap className="h-7 w-7 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-lg text-blue-400/80">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-lg text-gray-300">
                  {edu.institution}
                </p>

                <div className="mb-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4 text-blue-400/60" />
                    <span className="text-sm">{edu.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Award className="h-4 w-4 text-blue-400/60" />
                    <span className="text-sm">
                      {edu.scoreLabel}:{' '}
                      <span className="font-semibold text-white">
                        {edu.score}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-500">
                  Key Highlights
                </p>

                <div className="flex flex-wrap gap-3">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-blue-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}