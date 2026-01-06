import React, { useState, useEffect } from 'react';
import DarkVeil from './DarkVeil';

const Hero = ({ name, title, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0">
          <DarkVeil hueShift={-165} speed={1.80} noiseIntensity={0.01} warpAmount={4.9} scanlineFrequency={2.8} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/60 via-transparent to-bg-dark"></div>
        
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-[128px] opacity-5 animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent rounded-full mix-blend-screen filter blur-[128px] opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      </div>

      <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1000 delay-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 inline-block px-6 py-2 bg-[#0a0c0a]/40 backdrop-blur-md border border-[#ffffff10] rounded-full font-figtree font-semibold text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-[#0a0c0a]/60 transition-all duration-300">
          Portafolio
        </div>
        <h1 className="font-figtree text-6xl md:text-8xl font-bold mb-6 text-white">
          {name}
        </h1>
        <h2 className="font-figtree text-2xl md:text-4xl font-medium mb-8 text-gray-300">
          {title}
        </h2>
        <p className="font-figtree text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-6 py-3 bg-accent/10 border border-accent/20 rounded-4xl font-figtree font-semibold text-accent hover:bg-accent/20 transform transition-all duration-300 shadow-lg hover:shadow-accent/10"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-6 py-3 border border-primary/30 rounded-4xl font-figtree font-semibold text-primary hover:bg-primary/10 transform transition-all duration-300"
          >
            Contactar
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
