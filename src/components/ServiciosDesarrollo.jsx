import React, { useEffect, useRef, useState } from 'react';
import { FaCogs, FaChartLine, FaRocket, FaGem, FaUserCheck, FaTachometerAlt, FaMobileAlt, FaSearch, FaShieldAlt, FaHeartbeat, FaHeadset } from 'react-icons/fa';
import Squares from './Squares';
import Shuffle from './Shuffle';

const ServiciosDesarrollo = ({ technologies }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const items = [
    { text: "Automatizan procesos", icon: <FaCogs /> },
    { text: "Optimizan operaciones", icon: <FaChartLine /> },
    { text: "Incrementan productividad", icon: <FaRocket /> },
    { text: "Generan valor tangible", icon: <FaGem /> }
  ];

  const featureItems = [
    { text: "UX/UI centrado en el usuario final", icon: <FaUserCheck /> },
    { text: "Performance optimizada", icon: <FaTachometerAlt /> },
    { text: "Responsividad total", icon: <FaMobileAlt /> },
    { text: "SEO técnico integrado", icon: <FaSearch /> }
  ];

  const maintenanceItems = [
    { text: "Actualizaciones de seguridad", icon: <FaShieldAlt /> },
    { text: "Monitoreo de rendimiento", icon: <FaHeartbeat /> },
    { text: "Soporte técnico escalable", icon: <FaHeadset /> }
  ];

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 overflow-hidden relative">
        {/* Background Squares */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <Squares 
                speed={0.5} 
                squareSize={40}
                direction='diagonal'
                borderColor='#fff'
                hoverFillColor='#222'
            />
        </div>

        {/* Left Side */}
        <div className={`flex-1 space-y-8 transition-all duration-1000 transform z-10 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-200 leading-tight font-figtree">
                    No solo escribo código; <br/>
                    <span className="text-[#848484]">interpreto tus necesidades</span>
                </h2>
                
                <p className="text-xl text-gray-300 font-light">
                    Para crear herramientas que:
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-4 gap-y-6">
                 {/* Original Items */}
                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <li 
                            key={`item-${index}`} 
                            className="flex items-center gap-3 text-gray-200 text-lg group"
                        >
                            <div className="p-2 rounded-lg bg-[#ffffff10] text-[#ffffde] group-hover:bg-[#ffffde] group-hover:text-black transition-colors duration-300">
                                {item.icon}
                            </div>
                            <span className="font-medium text-base">{item.text}</span>
                        </li>
                    ))}
                </ul>

                {/* Feature Items */}
                <ul className="space-y-4">
                    {featureItems.map((item, index) => (
                        <li 
                            key={`feature-${index}`} 
                            className="flex items-center gap-3 text-gray-200 text-lg group"
                        >
                            <div className="p-2 rounded-lg bg-[#ffffff10] text-[#ffffde] group-hover:bg-[#ffffde] group-hover:text-black transition-colors duration-300">
                                {item.icon}
                            </div>
                            <span className="font-medium text-base">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Maintenance Section */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
                 <p className="text-xl text-gray-300 font-light">
                    Y ofrezco mantenimiento continuo:
                </p>
                <ul className="space-y-4 pl-2">
                     {maintenanceItems.map((item, index) => (
                        <li 
                            key={`maint-${index}`} 
                            className="flex items-center gap-4 text-gray-200 text-lg group"
                        >
                            <div className="p-2 rounded-lg bg-[#ffffff10] text-[#848484] group-hover:bg-[#848484] group-hover:text-white transition-colors duration-300">
                                {item.icon}
                            </div>
                            <span className="font-medium">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>


             <div className="pt-8 border-t border-gray-800 mt-8" style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.5s ease-out 1.2s`
                }}>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-semibold">Tecnologías</h3>
                <div className="flex flex-wrap gap-3">
                    {technologies && technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#0a0c0a] text-gray-400 rounded-md text-sm border border-gray-800 hover:border-[#ffffde] hover:text-[#ffffde] transition-colors duration-300 cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Right Side - Shuffle Text */}
        <div className={`flex-1 w-full flex flex-col justify-center items-center z-10 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="text-right space-y-8 sticky top-20">
                <Shuffle 
                    text="Desarrollo de software" 
                    className="text-4xl md:text-6xl font-bold text-[#ffffde] block mb-4"
                    shuffleTimes={1}
                    loop={true}
                    duration={0.8}
                />
                <Shuffle 
                    text="Apps web y móviles" 
                    className="text-3xl md:text-5xl font-bold text-[#848484] block mb-4"
                    shuffleTimes={2}
                    maxDelay={0.5}
                    loop={true}
                />
                <Shuffle 
                    text="UX/UI - diseño web" 
                    className="text-3xl md:text-5xl font-bold text-gray-200 block"
                    shuffleTimes={1}
                    maxDelay={1}
                    loop={true}
                    duration={0.8}
                />
             </div>
        </div>
    </section>
  );
};

export default ServiciosDesarrollo;
