import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SocialMedia from './components/SocialMedia';
import ServiciosDesarrollo from './components/ServiciosDesarrollo';
import SeguridadIntegrada from './components/SeguridadIntegrada.jsx';
import DarkVeil from './components/DarkVeil.jsx';
import data from './data.json';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero 
        name={data.personalInfo.name}
        title={data.personalInfo.title}
        description={data.personalInfo.description}
      />
      
      <ServiciosDesarrollo technologies={data.technologies} />

      <SeguridadIntegrada/>

      <Projects projects={data.projects} />
      
      <SocialMedia socialMedia={data.socialMedia} />
      
      <footer className="py-8 text-center text-gray-500 font-figtree border-t border-frost-900/30">
        <p>© {new Date().getFullYear()} {data.personalInfo.name}. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
