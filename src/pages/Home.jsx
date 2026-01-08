import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ServiciosDesarrollo from '../components/ServiciosDesarrollo';
import SeguridadIntegrada from '../components/SeguridadIntegrada.jsx';
import DarkVeil from '../components/DarkVeil.jsx';

const Home = ({ data }) => {
  if (!data) return null;

  return (
    <div className="min-h-screen bg-black">
      <Navbar socialMedia={data.socialMedia} />
      <Hero 
        name={data.personalInfo.name}
        title={data.personalInfo.title}
        description={data.personalInfo.description}
      />
      
      <ServiciosDesarrollo technologies={data.technologies} />

      <SeguridadIntegrada/>

      <Projects projects={data.projects} />
      
      <Contact socialMedia={data.socialMedia} name={data.personalInfo.name} />
    </div>
  );
};

export default Home;
