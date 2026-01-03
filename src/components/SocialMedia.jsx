import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaXTwitter, FaPinterest, FaTumblr } from 'react-icons/fa6';

const SocialMedia = ({ socialMedia }) => {
  const socialIcons = {
    instagram: { icon: FaInstagram, color: 'hover:bg-primary/20', label: 'Instagram' },
    whatsapp: { icon: FaWhatsapp, color: 'hover:bg-primary/20', label: 'WhatsApp' },
    telegram: { icon: FaTelegram, color: 'hover:bg-primary/20', label: 'Telegram' },
    x: { icon: FaXTwitter, color: 'hover:bg-primary/20', label: 'X (Twitter)' },
    pinterest: { icon: FaPinterest, color: 'hover:bg-primary/20', label: 'Pinterest' },
    tumblr: { icon: FaTumblr, color: 'hover:bg-primary/20', label: 'Tumblr' }
  };

  const activeSocials = Object.entries(socialMedia).filter(([_, url]) => url && url.trim() !== '');

  if (activeSocials.length === 0) return null;

  return (
    <section id="contact" className="py-20 px-6 relative bg-bg-dark">
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-accent/5 to-bg-dark"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-figtree text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Conecta Conmigo
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-12"></div>

        <p className="font-figtree text-primary text-lg mb-12">
          Encuéntrame en mis redes sociales
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {activeSocials.map(([platform, url]) => {
            const { icon: Icon, color, label } = socialIcons[platform];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-6 bg-bg-dark border border-primary/10 rounded-2xl ${color} transition-all duration-300 transform hover:scale-110 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5`}
                aria-label={label}
              >
                <Icon className="text-4xl text-primary group-hover:text-accent transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-figtree text-primary whitespace-nowrap">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
