import React from 'react';
import { FaInstagram, FaWhatsapp, FaTelegram, FaXTwitter, FaPinterest, FaTumblr } from 'react-icons/fa6';

const SocialMedia = ({ socialMedia }) => {
  const socialIcons = {
    instagram: { icon: FaInstagram, color: 'hover:bg-pink-600', label: 'Instagram' },
    whatsapp: { icon: FaWhatsapp, color: 'hover:bg-green-600', label: 'WhatsApp' },
    telegram: { icon: FaTelegram, color: 'hover:bg-blue-500', label: 'Telegram' },
    x: { icon: FaXTwitter, color: 'hover:bg-gray-800', label: 'X (Twitter)' },
    pinterest: { icon: FaPinterest, color: 'hover:bg-red-600', label: 'Pinterest' },
    tumblr: { icon: FaTumblr, color: 'hover:bg-indigo-900', label: 'Tumblr' }
  };

  const activeSocials = Object.entries(socialMedia).filter(([_, url]) => url && url.trim() !== '');

  if (activeSocials.length === 0) return null;

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-ice-950/5 to-black"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-ice-400 to-frost-400 bg-clip-text text-transparent">
          Conecta Conmigo
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-ice-500 to-frost-500 mx-auto rounded-full mb-12"></div>

        <p className="font-scope text-gray-400 text-lg mb-12">
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
                className={`group relative p-6 bg-gradient-to-br from-gray-900 to-black border border-frost-900/30 rounded-2xl ${color} transition-all duration-300 transform hover:scale-110 hover:border-frost-500/50 hover:shadow-xl hover:shadow-frost-500/20`}
                aria-label={label}
              >
                <Icon className="text-4xl text-frost-300 group-hover:text-white transition-colors duration-300" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-orbitron text-frost-300 whitespace-nowrap">
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
