import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from './components/AnimationUtils';

const App: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs = { home: homeRef, about: aboutRef, gallery: galleryRef, projects: projectsRef, contact: contactRef };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Check if we're in development mode
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <div className="bg-white text-brand-dark font-sans">
      <Header refs={refs} scrollToRef={scrollToRef} />
      <main>
        <div ref={homeRef}>
          <Hero scrollToProjects={() => scrollToRef(projectsRef)} />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <Services />
        <Materials />
        <div ref={galleryRef}>
          <Gallery />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </main>
      <Footer />
      {/* Show performance monitor only in development */}
      {isDev && <PerformanceMonitor />}
    </div>
  );
};

export default App;