import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-frost-950/5 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-figtree text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-frost-400 to-ice-400 bg-clip-text text-transparent">
            Mis Proyectos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-frost-500 to-ice-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
