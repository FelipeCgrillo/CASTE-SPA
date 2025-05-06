'use client';

import React from 'react';
import { motion } from 'framer-motion';

const CaseCard = ({ title, description, image, delay }: { title: string; description: string; image: string; delay: number }) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-xl shadow-xl bg-white h-full"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
    >
      <div 
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const RealCases = () => {
  const cases = [
    {
      title: "UAF – Unidad de Análisis Financiero",
      description: "Implementamos un sistema de automatización de flujos de información para mejorar la capacidad analítica y la detección de operaciones sospechosas.",
      image: "/images/uaf.jpg"
    },
    {
      title: "Hospital Digital – Flujos clínicos",
      description: "Desarrollamos una solución para optimizar el seguimiento de pacientes y la gestión de datos clínicos, mejorando la toma de decisiones médicas.",
      image: "/images/hospital.jpg"
    },
    {
      title: "Empresa privada – Automatización documental",
      description: "Creamos un sistema de gestión documental automatizado que redujo el tiempo de procesamiento en un 80% y eliminó errores manuales.",
      image: "/images/docs.jpg"
    }
  ];

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos Reales</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones implementadas que han generado un impacto real en nuestros clientes.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index}
              title={caseItem.title}
              description={caseItem.description}
              image={caseItem.image}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealCases; 