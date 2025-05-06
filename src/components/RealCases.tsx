'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CaseCard = ({ title, description, image, index }: { title: string; description: string; image: string; index: number }) => {
  // Crear variantes diferentes según la posición de la tarjeta
  const isOdd = index % 2 === 1;
  
  const cardVariants = {
    offscreen: {
      y: 100,
      opacity: 0,
      scale: 0.9,
      rotateY: isOdd ? -5 : 5
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div 
      className="overflow-hidden rounded-xl shadow-xl bg-white h-full"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 1.2 }
        }}
      />
      <motion.div className="p-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  );
};

const RealCases = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ opacity, scale }}
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Casos Reales
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Soluciones implementadas que han generado un impacto real en nuestros clientes.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cases.map((caseItem, index) => (
            <CaseCard 
              key={index}
              title={caseItem.title}
              description={caseItem.description}
              image={caseItem.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RealCases; 