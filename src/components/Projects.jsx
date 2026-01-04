import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 relative bg-bg-dark overflow-hidden">
      {/* Background elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent/5 rounded-full animate-pulse delay-700"></div>
      </div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-figtree text-5xl md:text-7xl font-bold mb-6 text-secondary tracking-tight">
            Mis <span className="text-accent inline-block transition-transform hover:scale-105 duration-300 cursor-default">Proyectos</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
             Selección curada de mis trabajos más recientes y destacados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
