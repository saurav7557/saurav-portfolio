"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";
import MouseGradient from "../components/MouseGradient";
import ParticleField from "../components/ParticleField";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Achievements from "../components/Achievements";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200">
          {/* Background Elements */}
          <ParticleField />
          <MouseGradient />

          {/* Navigation */}
          <Navbar />

          {/* Sections */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Skills />
            <Achievements />
            <Certifications />
            <Resume />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
