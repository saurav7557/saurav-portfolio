'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

interface FooterLink {
  icon: React.ReactNode;
  label: string;
  href: string;
  download?: boolean;
}

const footerLinks: FooterLink[] = [
  {
    icon: <Github className="w-5 h-5" />,
    label: 'GitHub',
    href: 'https://github.com/saurav7557',
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/saurav-kumar',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: 'Email',
    href: 'mailto:sauravkumar9447@gmail.com',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    label: 'Resume',
    href: '/Saurav_Kumar_Resume.pdf',
    download: true,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Saurav Kumar
          </h3>

          {/* Tagline */}
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto mb-10">
            Building systems that work at scale — one commit at a time.
          </p>

          {/* Links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.download ? undefined : '_blank'}
                rel={link.download ? undefined : 'noopener noreferrer'}
                download={link.download || undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300"
                aria-label={link.label}
              >
                {link.icon}
                {/* Tooltip */}
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-gray-900 border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; 2025 Saurav Kumar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
