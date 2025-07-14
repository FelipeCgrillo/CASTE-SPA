'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon, delay, index }: { title: string; description: string; icon: string; delay: number; index: number }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9 
    },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      } 
    })
  };

  return (
    <motion.div 
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      <motion.div 
        className="text-5xl mb-6"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: delay + 0.2, 
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-semibold mb-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.3, duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.4, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const features = [
    {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, responsivos y optimizados con las últimas tecnologías como Next.js, React y Tailwind CSS.",
      icon: "💻",
    },
    {
      title: "Automatización",
      description: "Desarrollamos flujos de trabajo personalizados que automatizan procesos repetitivos y complejos.",
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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="what-we-do" className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1 bg-primary mx-auto mb-8"
          />
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Qué Hacemos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nuestras soluciones están diseñadas para optimizar la eficiencia operativa de su organización.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={0.2 * index}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo; 