import React from 'react';

const Hero = ({ name, title, description }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-frost-900/20 via-black to-ice-900/20"></div>
        
        <div className="absolute top-0 -left-4 w-72 h-72 bg-frost-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-ice-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-frost-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(2, 132, 199, 0.05) 0%, transparent 50%)`
        }}></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 animate-glow bg-gradient-to-r from-frost-400 via-ice-300 to-frost-500 bg-clip-text text-transparent">
          {name}
        </h1>
        <h2 className="font-orbitron text-2xl md:text-4xl font-medium mb-8 text-frost-300">
          {title}
        </h2>
        <p className="font-scope text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-frost-600 to-ice-600 rounded-lg font-orbitron font-semibold text-white hover:from-frost-500 hover:to-ice-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-frost-500/50"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-frost-500 rounded-lg font-orbitron font-semibold text-frost-300 hover:bg-frost-500/10 transform hover:scale-105 transition-all duration-300"
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
