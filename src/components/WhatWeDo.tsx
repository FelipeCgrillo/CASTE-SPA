'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay }: { title: string; description: string; icon: string; delay: number }) => {
  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const features = [
    {
      title: "Automatización con n8n",
      description: "Creamos flujos de trabajo personalizados que automatizan procesos repetitivos y complejos.",
      icon: "⚙️",
    },
    {
      title: "Visualización con Power BI",
      description: "Transformamos datos complejos en dashboards visuales e interactivos para una toma de decisiones más efectiva.",
      icon: "📊",
    },
    {
      title: "Integraciones",
      description: "Conectamos plataformas públicas y privadas para crear ecosistemas digitales eficientes.",
      icon: "🔄",
    },
    {
      title: "Flujos personalizados",
      description: "Diseñamos soluciones a medida, rápidas y sin fricciones para cada cliente.",
      icon: "🧩",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qué Hacemos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nuestras soluciones están diseñadas para optimizar la eficiencia operativa de su organización.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.2 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 