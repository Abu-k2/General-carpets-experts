
import React from 'react';
import { SparklesIcon, PhoneIcon, MailIcon, LocationMarkerIcon } from './Icons';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-brand-dark text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
                <SparklesIcon className="h-8 w-8 text-brand-green" />
                <span className="text-xl font-bold">General Carpet Experts</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Professional carpet laying and tuff field installations across Nairobi and surrounding areas. Quality workmanship guaranteed.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-brand-green" />
                <span>0728614934</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-brand-green" />
                <span>davidinnocentochieng@gmail.com</span>
              </li>
              <li className="flex items-center">
                <LocationMarkerIcon className="h-5 w-5 mr-3 text-brand-green" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="bg-black/20 py-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} General Carpet Experts. All rights reserved.
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
