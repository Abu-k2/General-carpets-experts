
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, ClockIcon } from './Icons';
import LoadingSpinner from './LoadingSpinner';
import { motion } from 'framer-motion';
import { fadeIn } from './AnimationUtils';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 text-brand-green">{icon}</div>
    <div className="ml-4">
      <h4 className="font-semibold text-brand-dark">{label}</h4>
      {href ? (
        <a href={href} className="text-gray-600 hover:text-brand-green transition-colors">{value}</a>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

const ContactForm: React.FC = () => {
  const [message, setMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      // Reset form
      setFormState({ name: '', email: '' });
      setMessage('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name *</label>
        <input 
          type="text" 
          id="full-name"
          required 
          value={formState.name}
          onChange={(e) => setFormState({...formState, name: e.target.value})}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input 
          type="email" 
          id="email" 
          required 
          value={formState.email}
          onChange={(e) => setFormState({...formState, email: e.target.value})}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea 
          id="message" 
          rows={4} 
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green"
        ></textarea>
        <p className="text-right text-sm text-gray-500 mt-1">{message.length}/500 characters</p>
      </div>
      <button 
        type="submit" 
        className="w-full bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span className="mr-2">Sending...</span>
            <div className="w-4 h-4 border-t-2 border-white border-solid rounded-full animate-spin"></div>
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};


const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Ready to transform your space with professional carpet installation? Contact us today for a free consultation.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div 
            className="bg-brand-light p-8 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
            <div className="space-y-6">
              <ContactInfoItem icon={<PhoneIcon className="h-6 w-6" />} label="Phone & WhatsApp" value="0728614934" href="tel:0728614934" />
              <ContactInfoItem icon={<MailIcon className="h-6 w-6" />} label="Email" value="davidinnocentochieng@gmail.com" href="mailto:davidinnocentochieng@gmail.com" />
              <ContactInfoItem icon={<LocationMarkerIcon className="h-6 w-6" />} label="Location" value="Nairobi, Kenya" />
              <div className="flex items-start">
                  <div className="flex-shrink-0 text-brand-green"><ClockIcon className="h-6 w-6" /></div>
                  <div className="ml-4">
                      <h4 className="font-semibold text-brand-dark">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                  </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="bg-brand-light p-8 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
