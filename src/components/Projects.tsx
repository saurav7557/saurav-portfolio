'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ExternalLink,
  Github,
  Check,
  Trophy,
  ArrowUpRight,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface Project {
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  techStack: string[];
  highlights: string[];
  achievement?: { label: string };
  githubUrl?: string;
  liveUrl?: string;
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projects: Project[] = [
  {
    title: 'Blockchain-Based Certificate Generation & Validation System',
    category: 'Blockchain Development',
    categoryColor: 'from-blue-500 to-cyan-400',
    description:
      'Built a blockchain-powered certificate issuance and verification platform that generates academic certificates as ERC-721 NFTs and enables QR-code-based verification using Ethereum Sepolia Testnet.',
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'Solidity',
      'Hardhat',
      'Ethers.js',
      'IPFS',
      'Pinata',
      'JWT',
      'Ethereum Sepolia',
    ],
    highlights: [
      'Built React.js frontend with responsive UI',
      'Developed certificate issuance and verification APIs',
      'Integrated IPFS and Pinata for decentralized storage',
      'Implemented JWT authentication',
      'Developed Solidity smart contracts',
      'Enabled QR-based instant certificate verification',
    ],
    githubUrl: 'https://github.com/saurav7557/Hackindia-Spark-4-2025-Tech-No-Logic',
  },
  {
    title: 'AI-Based Intellectual Property Protection System',
    category: 'Artificial Intelligence',
    categoryColor: 'from-purple-500 to-pink-400',
    description:
      'Built an AI-driven platform that automatically identifies intellectual property violations in online video content and streamlines DMCA management.',
    techStack: [
      'Python',
      'YOLOv5',
      'TensorFlow',
      'OpenCV',
      'React.js',
      'Node.js',
      'Express.js',
      'Firestore',
      'YouTube Data API',
    ],
    highlights: [
      'Built React dashboard with Context API',
      'Implemented YOLOv5 object detection pipeline',
      'Integrated YouTube Data API',
      'Automated DMCA workflows',
      'Created modular backend architecture',
      'Implemented real-time notifications',
    ],
     githubUrl: 'https://github.com/saurav7557/Gdg-Solution-Challenge',
    achievement: { label: 'Winner — RCET Project Competition 2025' },
  },
  {
    title: 'Mobile-Based Real-Time Floor Plan Detection & 3D Visualization',
    category: 'Computer Vision & AR',
    categoryColor: 'from-emerald-500 to-teal-400',
    description:
      'Developed a real-time computer vision and augmented reality system that converts floor plans into interactive visualizations using live mobile camera feeds.',
    techStack: [
      'MATLAB',
      'OpenCV',
      'AprilTag',
      'DroidCam',
      'Computer Vision',
      'Augmented Reality',
    ],
    highlights: [
      '6-stage image processing pipeline',
      'Hough Transform wall extraction',
      'AprilTag pose estimation',
      'Real-time AR overlays',
      'Camera calibration system',
      'Interactive visualization interface',
    ],
    githubUrl:'https://github.com/saurav7557/AR-FloorPlan-Detection'
  },
];

/* ------------------------------------------------------------------ */
/*  3-D Tilt Card                                                      */
/* ------------------------------------------------------------------ */

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glareX, setGlareX] = useState(50);
  const [glareY, setGlareY] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;

    setRotateX(tiltX);
    setRotateY(tiltY);
    setGlareX((x / rect.width) * 100);
    setGlareY((y / rect.height) * 100);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlareX(50);
    setGlareY(50);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className="group w-full"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        whileHover={{ scale: 1.015 }}
        className="relative overflow-hidden rounded-2xl border border-white/10
                   bg-gradient-to-br from-white/5 to-white/[0.02]
                   backdrop-blur-xl p-8 md:p-10
                   shadow-lg shadow-black/20
                   transition-shadow duration-500
                   group-hover:shadow-blue-500/10 group-hover:shadow-2xl
                   group-hover:border-white/20"
      >
        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${glareX}% ${glareY}%, rgba(59,130,246,0.07), transparent 40%)`,
          }}
        />

        {/* Top row: category + links */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.categoryColor} px-4 py-1.5 text-xs font-semibold text-white shadow-lg`}
          >
            {project.category}
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400
                           transition-all duration-300 hover:border-blue-500/40
                           hover:bg-blue-500/10 hover:text-blue-400"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live project"
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-400
                           transition-all duration-300 hover:border-blue-500/40
                           hover:bg-blue-500/10 hover:text-blue-400"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-4 text-xl font-bold leading-tight text-white md:text-2xl lg:text-[1.65rem]">
          {project.title}
          <ArrowUpRight className="ml-2 inline-block h-5 w-5 text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </h3>

        {/* Description */}
        <p className="mb-6 max-w-3xl leading-relaxed text-gray-400">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-gray-300
                         transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 text-sm text-gray-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                <Check className="h-3 w-3" />
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Achievement badge */}
        {project.achievement && (
          <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2.5 text-sm font-semibold text-amber-300 shadow-lg shadow-amber-500/5">
            <Trophy className="h-4 w-4 text-amber-400" />
            {project.achievement.label}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-32"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Heading */}
        <div ref={headingRef} className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400"
          >
            Portfolio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-px w-24 origin-center bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          />
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
