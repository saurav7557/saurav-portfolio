'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string;
  href: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Skills', href: 'skills' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Certifications', href: 'certifications' },
  { label: 'Contact', href: 'contact' },
];

const SCROLL_THRESHOLD = 20;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ---- Track scroll for glassmorphism toggle ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ---- Intersection Observer for active section ---- */
  useEffect(() => {
    const sectionEls = NAV_ITEMS.map((item) =>
      document.getElementById(item.href)
    ).filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ---- Smooth scroll handler ---- */
  const scrollTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    },
    []
  );

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/50 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* ---- Logo ---- */}
        <button
          onClick={() => scrollTo('home')}
          className="relative z-10 select-none"
          aria-label="Go to top"
        >
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-xl font-bold tracking-tight text-transparent">
            SK
          </span>
        </button>

        {/* ---- Desktop nav links ---- */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
              >
                {item.label}

                {/* Active / hover underline (shared layoutId) */}
                {activeSection === item.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-1 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* ---- Desktop resume button ---- */}
        <a
          href="/Saurav_Kumar_Resume.pdf"
          download
          className="hidden rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 transition-all duration-300 hover:border-blue-400/60 hover:bg-blue-500/20 hover:text-blue-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] lg:inline-flex"
        >
          Resume
        </a>

        {/* ---- Mobile hamburger ---- */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="relative z-50 inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </nav>

      {/* ---- Mobile menu overlay ---- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.06] bg-black/80 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
              }}
              className="flex flex-col gap-1 px-6 pb-6 pt-2"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -8 },
                  }}
                >
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`block w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                      activeSection === item.href
                        ? 'bg-blue-500/10 text-blue-400'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}

              {/* Mobile resume button */}
              <motion.li
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -8 },
                }}
              >
                <a
                  href="/Saurav_Kumar_Resume.pdf"
                  download
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-blue-500/40 bg-blue-500/10 px-4 py-3 text-sm font-medium text-blue-400 transition-all hover:bg-blue-500/20"
                >
                  Download Resume
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
