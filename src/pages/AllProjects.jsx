import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { FiArrowLeft } from 'react-icons/fi';

const AllProjects = ({ data }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!data) return null;

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-secondary">
      <Navbar socialMedia={data.socialMedia} />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors mb-6 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Volver al Inicio
          </Link>
          
          <h1 className="font-figtree text-4xl md:text-6xl font-bold mb-6">
            Mis <span className="text-accent">Proyectos</span>
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            Cada proyecto cuenta una historia de desafío, solución e innovación, y a veces como mero hobby. Haz clic en cualquier tarjeta para ver los detalles técnicos, el proceso de desarrollo e información adicional.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProjectCard 
                project={project} 
                onClick={() => openModal(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default AllProjects;
