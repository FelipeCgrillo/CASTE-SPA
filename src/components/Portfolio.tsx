'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'AysénTransfer',
      description: 'Plataforma de reservas de transporte en la Patagonia con sistema de gestión integral.',
      image: '/images/aysen-transfer.jpg',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Conecta Austral',
      description: 'Sitio web para renta de equipos Starlink con sistema de reservas y gestión.',
      image: '/images/conecta-austral.jpg',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Symptomatix AI',
      description: 'Asistente médico con inteligencia artificial para diagnóstico y seguimiento.',
      image: '/images/symptomatix-ai.jpg',
      technologies: ['Python', 'OpenAI', 'Streamlit', 'MongoDB'],
      category: 'AI & Automation'
    },
    {
      id: 4,
      title: 'Sistema de Compras CASTE SPA',
      description: 'Sistema integral de gestión de compras y proveedores con automatización.',
      image: '/images/sistema-compras.jpg',
      technologies: ['Python', 'Flask', 'PostgreSQL', 'Power BI'],
      category: 'Automation'
    },
    {
      id: 5,
      title: 'Viña Doña Aurora',
      description: 'Sitio web institucional para viña con catálogo de productos y reservas.',
      image: '/images/vina-aurora.jpg',
      technologies: ['WordPress', 'PHP', 'MySQL', 'CSS'],
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'Tableros UAF',
      description: 'Dashboards interactivos y automatización de procesos con Power BI.',
      image: '/images/uaf-tableros.jpg',
      technologies: ['Power BI', 'Python', 'SQL Server', 'Power Automate'],
      category: 'Business Intelligence'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones tecnológicas innovadoras que transforman negocios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/portafolio-caste-spa.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            📄 Descargar Portafolio PDF
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 