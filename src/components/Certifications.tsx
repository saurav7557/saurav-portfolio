'use client';

import { motion, Variants } from 'framer-motion';
import { Award } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    title: 'Advanced Software Engineering',
    issuer: 'Walmart',
  },
  {
    title: 'Developer & Technology',
    issuer: 'Accenture',
  },
  {
    title: 'Cloud Virtual Experience',
    issuer: 'AWS',
  },
  {
    title: 'Advanced Problem Solving and DSA with Java',
    issuer: 'Certification Program',
  },
  {
    title: 'MongoDB for SQL Experts',
    issuer: 'MongoDB University',
  },
  {
    title: 'Learn Student Ambassador',
    issuer: 'Microsoft',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
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
              Certifications
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              className="group relative"
            >
              {/* Hover glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/0 to-blue-400/0 group-hover:from-blue-500/20 group-hover:to-blue-400/20 rounded-2xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100" />

              <div className="relative bg-white/5 border border-white/10 group-hover:border-blue-500/40 backdrop-blur-xl rounded-2xl p-6 transition-all duration-500 overflow-hidden h-full">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                </div>

                {/* Issuer */}
                <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-2">
                  {cert.issuer}
                </p>

                {/* Title */}
                <h3 className="text-white font-bold text-lg leading-snug">
                  {cert.title}
                </h3>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
