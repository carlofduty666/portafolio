import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900 to-black border border-frost-900/30 rounded-xl overflow-hidden hover:border-frost-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-frost-500/20">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-3 bg-frost-600/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-frost-500 hover:scale-110"
        >
          <FiExternalLink className="text-white text-xl" />
        </a>
      </div>

      <div className="p-6">
        <h3 className="font-figtree text-2xl font-bold text-frost-300 mb-3 group-hover:text-frost-200 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-figtree text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-figtree bg-frost-900/30 text-frost-300 rounded-full border border-frost-700/30 hover:bg-frost-800/40 hover:border-frost-600/50 transition-all duration-300"
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
