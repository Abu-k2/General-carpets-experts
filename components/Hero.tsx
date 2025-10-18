import React from 'react';
import { ArrowRightIcon } from './Icons';
import { motion } from 'framer-motion';

interface HeroProps {
  scrollToProjects: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToProjects }) => {
  return (
    <section 
      className="relative text-white min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: "url('/WhatsApp Image 2025-10-16 at 23.52.11_4d4c9a68.jpg')" }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Content */}
      <div className="relative container mx-auto px-6 z-10">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight" 
          style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Professional Carpet Laying and Tuff Field Installation
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200" 
          style={{textShadow: '1px 1px 4px rgba(0,0,0,0.7)'}}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I specialize in carpet installations for balconies, children's play areas, and gyms across Nairobi.
        </motion.p>
        <motion.button
          onClick={scrollToProjects}
          className="inline-flex items-center gap-3 bg-brand-green hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>View My Work</span>
          <ArrowRightIcon className="h-5 w-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;