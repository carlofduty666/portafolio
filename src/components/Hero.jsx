import React from 'react';
import DarkVeil from './DarkVeil';

const Hero = ({ name, title, description }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-40">
          <DarkVeil hueShift={210} speed={0.2} noiseIntensity={0.02} />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        
        <div className="absolute top-0 -left-4 w-96 h-96 bg-frost-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-float"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-ice-600 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-frost-800 rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-figtree text-6xl md:text-8xl font-bold mb-6 animate-glow bg-gradient-to-r from-frost-100 via-ice-300 to-frost-400 bg-clip-text text-transparent">
          {name}
        </h1>
        <h2 className="font-figtree text-2xl md:text-4xl font-medium mb-8 text-frost-200">
          {title}
        </h2>
        <p className="font-figtree text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-frost-600 to-ice-600 rounded-lg font-figtree font-semibold text-white hover:from-frost-500 hover:to-ice-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-frost-500/50"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-frost-500 rounded-lg font-figtree font-semibold text-frost-300 hover:bg-frost-500/10 transform hover:scale-105 transition-all duration-300"
          >
            Contacto
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-frost-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
