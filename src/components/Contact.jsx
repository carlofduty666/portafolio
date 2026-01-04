import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaLocationDot, FaPhone, FaInstagram, FaWhatsapp, FaTelegram, FaFacebook, FaPinterest, FaTumblr, FaThreads } from 'react-icons/fa6';

const Contact = ({ socialMedia = {}, name }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., mailto or API)
    console.log('Form submitted:', formState);
    alert('Mensaje enviado (simulación)');
  };

  const socialIcons = {
    github: { icon: FaGithub, label: 'GitHub' },
    linkedin: { icon: FaLinkedin, label: 'LinkedIn' },
    x: { icon: FaXTwitter, label: 'X (Twitter)' },
    instagram: { icon: FaInstagram, label: 'Instagram' },
    facebook: { icon: FaFacebook, label: 'Facebook' },
    whatsapp: { icon: FaWhatsapp, label: 'WhatsApp' },
    telegram: { icon: FaTelegram, label: 'Telegram' },
    pinterest: { icon: FaPinterest, label: 'Pinterest' },
    tumblr: { icon: FaTumblr, label: 'Tumblr' },
    threads: { icon: FaThreads, label: 'Threads' },
  };

  // Filter active social media links
  const activeSocials = Object.entries(socialMedia).filter(([platform, url]) => {
    return url && url.trim() !== '' && socialIcons[platform];
  });

  return (
    <section id="contact" className="relative w-full py-20 overflow-hidden bg-bg-dark">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start justify-center">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-primary/10 shadow-2xl"
          >
            <h2 className="font-figtree text-3xl md:text-4xl font-bold mb-2 text-secondary">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-fray-300 mb-8 text-lg">Hablemos.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formState.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 text-secondary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-secondary text-bg-dark font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/3 flex flex-col justify-center h-full"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-figtree font-bold text-secondary mb-6">O encuéntrame en:</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                {activeSocials.map(([platform, url]) => {
                  const { icon: Icon, label } = socialIcons[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-primary/10 rounded-xl hover:bg-primary/20 hover:text-accent transition-all duration-300 group relative"
                      aria-label={label}
                    >
                      <Icon size={24} className="text-secondary group-hover:text-accent" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="space-y-6 flex flex-col h-full">
              <a href="mailto:clongaworks@gmail.com" className="flex items-center gap-4 text-primary hover:text-accent transition-colors group">
                <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope size={20} className="text-secondary group-hover:text-accent" />
                </div>
                <span className="text-lg">clongaworks@gmail.com</span>
              </a>
              
              {/* Locations */}
              <div className="flex flex-col gap-4">
                 {["Caracas, Venezuela", "Puerto La Cruz, Venezuela", "Higuerote, Venezuela"].map((loc, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-primary group">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <FaLocationDot size={20} className="text-secondary" />
                      </div>
                      <span className="text-lg">{loc}</span>
                    </div>
                 ))}
              </div>

              {/* Phone */}
               <div className="flex items-center gap-4 text-primary group">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FaPhone size={20} className="text-secondary" />
                  </div>
                  <span className="text-lg">+58 424 802 01 69</span>
                </div>

                {/* Footer */}
                <div className="pt-10 text-right text-gray-500 font-figtree border-t border-frost-900/30 mt-auto">
                    <p>© {new Date().getFullYear()} {name}. Todos los derechos reservados.</p>
                </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
