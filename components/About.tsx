import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from './AnimationUtils';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl font-bold text-brand-dark mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-brand-green mx-auto mb-8"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        ></motion.div>
        <motion.p 
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          My name is David Ochieng. I work with General Carpet Experts, where we deliver quality carpet laying and tuff field installations. We focus on durable finishes for homes, schools, and gyms.
        </motion.p>
      </div>
    </section>
  );
};

export default About;