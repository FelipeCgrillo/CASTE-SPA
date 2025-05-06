'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ProcessItem = ({ number, title, description, delay }: { number: number; title: string; description: string; delay: number }) => {
  return (
    <motion.div 
      className="flex items-start gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
  const processes = [
    {
      title: "Diseño modular de flujos",
      description: "Construimos sistemas modulares que permiten una alta adaptabilidad y fácil mantenimiento con el tiempo.",
      number: 1
    },
    {
      title: "IA aplicada para análisis",
      description: "Incorporamos herramientas de inteligencia artificial para potenciar el análisis de datos y la toma de decisiones.",
      number: 2
    },
    {
      title: "Seguridad de datos",
      description: "Implementamos los más altos estándares de seguridad para proteger la información sensible de nuestros clientes.",
      number: 3
    },
    {
      title: "Adaptabilidad a cada cliente",
      description: "Personalizamos cada solución según las necesidades específicas y contexto único de cada organización.",
      number: 4
    }
  ];

  return (
    <section className="section bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cómo lo Hacemos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestra metodología está orientada a crear soluciones eficientes y duraderas.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-10">
          {processes.map((process, index) => (
            <ProcessItem 
              key={index}
              number={process.number}
              title={process.title}
              description={process.description}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork; 