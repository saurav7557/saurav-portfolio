'use client';

import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const highlights = ['Education', 'Skills', 'Projects', 'Experience'];

export default function Resume() {
  return (
    <section id="resume" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-3xl mx-auto">
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
              Resume
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my professional journey
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="group relative"
        >
          {/* Gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-blue-600/20 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

            {/* Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 inline-flex"
            >
              <div className="w-20 h-20 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <FileText className="w-10 h-10 text-blue-400" />
              </div>
            </motion.div>

            {/* Heading */}
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">
              Professional Resume
            </h3>

            {/* Highlight Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {highlights.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                  className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 text-gray-300 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/Saurav_Kumar_Resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 w-full sm:w-auto rounded-xl font-semibold text-white overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
              >
                {/* Button gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover/btn:from-blue-500 group-hover/btn:to-blue-400 transition-all duration-300" />
                <span className="relative flex items-center gap-2.5">
                  <Download className="w-4 h-4" />
                  Download Resume
                </span>
              </motion.a>

              <motion.a
                href="/Saurav_Kumar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group/btn inline-flex items-center justify-center gap-2.5 px-8 py-3.5 w-full sm:w-auto rounded-xl font-semibold text-white border border-white/20 hover:border-blue-500/50 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
