import React, { useEffect, useState } from 'react';
import { FiX, FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Microlink API to generate screenshot from URL
  const screenshotUrl = project.link 
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`
    : project.image;

  const displayImage = imgError ? (project.image || 'https://via.placeholder.com/600x400?text=No+Preview') : screenshotUrl;

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-fade-in-up">
        
        {/* Header with Close Button */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-bg-dark z-10">
          <h2 className="text-2xl md:text-3xl font-bold font-figtree text-secondary">
            {project.title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow custom-scrollbar">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Column: Image & Quick Info */}
            <div className="w-full lg:w-2/5 bg-white/5">
              <div className="h-64 lg:h-80 w-full relative">
                <img 
                  src={displayImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent lg:hidden"></div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-3 font-semibold">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies && project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-accent rounded-full border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-accent text-bg-dark rounded-xl font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-accent/10"
                    >
                      <FiExternalLink /> Ver Proyecto en Vivo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 text-white rounded-xl font-bold hover:bg-white/10 border border-white/10 transition-all"
                    >
                      <FiGithub /> Ver Código
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full lg:w-3/5 p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2 border-l-4 border-accent pl-4">Desafío</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.challenge || "No especificado"}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-2 border-l-4 border-primary pl-4">Solución</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.solution || "No especificado"}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-secondary mb-2 border-l-4 border-green-500 pl-4">Resultado</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.result || "No especificado"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
