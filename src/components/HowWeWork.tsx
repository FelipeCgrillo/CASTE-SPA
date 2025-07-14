'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProcessItem = ({ number, title, description, index }: { number: number; title: string; description: string; index: number }) => {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.div 
      className="flex items-start gap-6"
      custom={index}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        className="flex-shrink-0 w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ 
          delay: index * 0.2, 
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
        whileHover={{ 
          scale: 1.1, 
          boxShadow: "0 0 20px rgba(0, 119, 182, 0.7)",
          transition: { duration: 0.2 }
        }}
      >
        {number}
      </motion.div>
      <div>
        <motion.h3 
          className="text-xl font-semibold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + index * 0.2, duration: 0.6 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + index * 0.2, duration: 0.7 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const HowWeWork = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0.5, 0.8], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="how-we-work" className="section bg-gray-50 py-20">
      <motion.div 
        className="container mx-auto px-4"
        style={{ opacity, y: translateY }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cómo lo Hacemos
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nuestra metodología está orientada a crear soluciones eficientes y duraderas.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processes.map((process, index) => (
            <ProcessItem 
              key={index}
              number={process.number}
              title={process.title}
              description={process.description}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HowWeWork; 