'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLabel, setShowLabel] = useState(false);

  const sections = ['hero', 'what-we-do', 'portfolio', 'how-we-work', 'contact'];
  const sectionNames = ['Inicio', 'Servicios', 'Portafolio', 'Metodología', 'Contacto'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / documentHeight) * 100;
      setScrollProgress(progress);

      // Detectar sección activa
      const sectionElements = sections.map((sectionId, index) => {
        const element = document.getElementById(sectionId);
        return {
          index,
          element,
          offsetTop: element?.offsetTop || 0,
          offsetBottom: (element?.offsetTop || 0) + (element?.offsetHeight || 0)
        };
      });

      const currentScrollPosition = scrollTop + window.innerHeight / 2;
      
      for (const section of sectionElements) {
        if (currentScrollPosition >= section.offsetTop && currentScrollPosition < section.offsetBottom) {
          if (section.index !== activeSection) {
            setActiveSection(section.index);
            setShowLabel(true);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Efecto para ocultar el label después de 2 segundos
  useEffect(() => {
    if (showLabel) {
      const timer = setTimeout(() => {
        setShowLabel(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showLabel]);

  const scrollToSection = (index: number) => {
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (index === 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Mostrar label cuando se hace click
    setActiveSection(index);
    setShowLabel(true);
  };

  return (
    <motion.div
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Fondo sutil para mejor visibilidad */}
      <div className="absolute inset-0 bg-black/5 backdrop-blur-sm rounded-full w-6 h-36 left-1/2 transform -translate-x-1/2 -translate-y-1"></div>
      
      {/* Línea de progreso vertical */}
      <div className="relative">
        <div className="w-0.5 h-32 bg-gray-300 rounded-full">
          <motion.div
            className="w-full bg-primary rounded-full origin-top"
            style={{
              height: `${(scrollProgress / 100) * 32 * 4}px`
            }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Puntos de navegación */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-between h-32">
          {sections.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === index 
                  ? 'bg-primary scale-150 shadow-lg' 
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              onClick={() => scrollToSection(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
        
        {/* Label minimalista con texto vertical */}
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xs font-light tracking-wide pointer-events-none"
          initial={{ opacity: 0, x: -5 }}
          animate={{ 
            opacity: showLabel ? 0.8 : 0,
            x: showLabel ? 0 : -5
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          {sectionNames[activeSection]}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar; 