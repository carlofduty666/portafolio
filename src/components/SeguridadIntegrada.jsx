import React from 'react';
import { motion } from 'motion/react';
import { FaShieldAlt, FaCode, FaUserLock, FaKey, FaClipboardCheck } from 'react-icons/fa';
import LetterGlitch from './LetterGlitch';
import DecryptedText from './DecryptedText';

const DigitalRose = () => {
  return (
    <div className="relative w-64 h-64 flex items-center justify-center [perspective:1000px]">
      <motion.div
        className="relative w-48 h-48 [transform-style:preserve-3d]"
        animate={{ rotateY: 360, rotateX: [10, -10, 10] }}
        transition={{ 
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Pétalos digitales representados por capas geométricas */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 border-2 border-green-400/30 rounded-full"
            style={{
              transform: `rotateY(${i * 60}deg) rotateX(45deg)`,
              background: `radial-gradient(circle at center, rgba(97, 220, 163, 0.1), transparent)`,
              boxShadow: '0 0 15px rgba(97, 220, 163, 0.2)'
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className="absolute inset-8 border border-green-300/50 rounded-full"
            style={{
              transform: `rotateY(${i * 90}deg) rotateX(60deg)`,
              background: `radial-gradient(circle at center, rgba(97, 220, 163, 0.2), transparent)`
            }}
          />
        ))}
        
        {/* Centro de la flor */}
        <div className="absolute inset-[40%] bg-green-500/20 rounded-full blur-sm animate-pulse" 
             style={{ transform: 'translateZ(10px)' }}
        />
      </motion.div>
    </div>
  );
};

const SeguridadIntegrada = () => {
  const items = [
    { icon: <FaCode />, text: "Prácticas de codificación segura (OWASP)" },
    { icon: <FaShieldAlt />, text: "Validación y sanitización de datos" },
    { icon: <FaUserLock />, text: "Autenticación y autorización robustas" },
    { icon: <FaKey />, text: "Cifrado de información sensible" },
    { icon: <FaClipboardCheck />, text: "Auditorías periódicas de código" }
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#0a0c0a] text-white">
      {/* Fondo Glitch */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LetterGlitch
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* Gradiente Overlay Izquierdo */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-[#0a0c0a] via-[#0a0c0a]/90 to-transparent pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-20 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
        
        {/* Columna Izquierda */}
        <div className="flex flex-col items-center justify-center space-y-8 [perspective:1000px]">
          <div className="relative filter drop-shadow-[0_0_20px_rgba(97,220,163,0.3)]">
            <DigitalRose />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center text-[#61dca3] text-sm md:text-base font-mono tracking-widest border-t border-[#2b4539] pt-4 px-8"
          >
            Tu producto será una fortaleza digital desde su concepción.
          </motion.p>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-8 max-w-2xl ml-auto text-right">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#f0f0f0] drop-shadow-lg">
            <DecryptedText
              text="Seguridad Desde el Primer Byte"
              animateOn="view"
              revealDirection="end"
              speed={70}
              maxIterations={20}
              className="text-[#61dca3]"
              encryptedClassName="text-[#2b4539]"
            />
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              La seguridad no es un añadido, es un fundamento. Implemento:
            </p>

            <ul className="space-y-4">
              {items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  className="flex flex-row-reverse items-center gap-5 text-gray-200 text-lg md:text-xl group justify-start"
                >
                  <span className="p-3 rounded-lg bg-[#2b4539]/50 text-[#61dca3] group-hover:bg-[#61dca3] group-hover:text-[#0a0c0a] transition-colors duration-300 shadow-[0_0_10px_rgba(97,220,163,0.1)]">
                    {item.icon}
                  </span>
                  <span className="font-medium group-hover:text-[#61dca3] transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>



      </div>
    </section>
  );
};

export default SeguridadIntegrada;
