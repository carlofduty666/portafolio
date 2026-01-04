import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaFacebook, 
  FaTumblr, 
  FaTelegram, 
  FaWhatsapp, 
  FaPinterest,
} from 'react-icons/fa';
import { FaXTwitter, FaThreads } from 'react-icons/fa6';

const Navbar = ({ socialMedia }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!socialMedia) return null;

  // Map keys to icons
  const iconMap = {
    github: <FaGithub />,
    instagram: <FaInstagram />,
    linkedin: <FaLinkedin />,
    x: <FaXTwitter />,
    twitter: <FaXTwitter />,
    facebook: <FaFacebook />,
    tumblr: <FaTumblr />,
    telegram: <FaTelegram />,
    whatsapp: <FaWhatsapp />,
    pinterest: <FaPinterest />,
    threads: <FaThreads />
  };

  // Filter valid links
  const socialLinks = Object.entries(socialMedia).filter(([key, url]) => {
    return url && url.trim() !== '' && iconMap[key.toLowerCase()];
  });

  // If no visible links, don't render the navbar container
  if (socialLinks.length === 0) return null;

  return (
    <div className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center items-start pointer-events-none transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      <nav className="pointer-events-auto px-6 py-3 rounded-full bg-[#0a0c0a]/40 backdrop-blur-md border border-[#ffffff10] shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:border-[#ffffff20] transition-all duration-300">
        <ul className="flex items-center gap-4 md:gap-6">
          {socialLinks.map(([key, url], index) => (
            <li 
              key={key} 
              className={`transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#848484] hover:text-[#ffffde] text-xl md:text-2xl transition-all duration-300 block p-1"
                aria-label={key}
              >
                {iconMap[key.toLowerCase()]}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
