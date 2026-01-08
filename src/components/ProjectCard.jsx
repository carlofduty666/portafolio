import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
  const [imgError, setImgError] = useState(false);
  
  // Microlink API to generate screenshot from URL
  const screenshotUrl = project.link 
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`
    : project.image;

  const displayImage = imgError ? (project.image || 'https://via.placeholder.com/600x400?text=No+Preview') : screenshotUrl;

  return (
    <div 
      className={`group relative bg-bg-dark border border-primary/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/5 flex flex-col h-full ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      
      {/* Browser Chrome / Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center gap-2 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50 group-hover:bg-red-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50 group-hover:bg-yellow-500/80 transition-colors"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50 group-hover:bg-green-500/80 transition-colors"></div>
        </div>
        <div className="ml-3 text-[10px] font-mono text-gray-200 truncate w-full group-hover:text-primary/60 transition-colors">
           {project.link ? new URL(project.link).hostname : 'local-project'}
        </div>
      </div>

      <div className="relative h-56 overflow-hidden bg-bg-dark/50">
        <img 
          src={displayImage} 
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={() => setImgError(true)}
          loading="lazy"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-bg-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 px-6 py-2.5 bg-accent text-bg-dark rounded-full font-bold transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg shadow-accent/20"
            >
              <FiExternalLink />
              <span>Visitar</span>
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:bg-accent/10"></div>

        <h3 className="font-figtree text-2xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="font-figtree text-gray-300 mb-6 text-sm leading-relaxed flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium bg-white/5 text-primary/90 rounded-md border border-white/5 group-hover:border-accent/20 group-hover:text-accent transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
