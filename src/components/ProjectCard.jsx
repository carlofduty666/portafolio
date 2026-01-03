import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-bg-dark border border-primary/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/5">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>
        
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-3 bg-accent/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-accent hover:scale-110"
        >
          <FiExternalLink className="text-bg-dark text-xl" />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-figtree text-2xl font-bold text-accent mb-3 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-figtree text-primary mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-figtree bg-primary/5 text-primary rounded-full border border-primary/10 hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-frost-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
