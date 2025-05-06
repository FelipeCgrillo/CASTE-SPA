'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const y = useTransform(scrollYProgress, [0.8, 1], [100, 0]);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="section bg-white py-20">
      <motion.div 
        className="container mx-auto px-4"
        style={{ scale, opacity, y }}
      >
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-1 bg-primary mx-auto mb-8"
          />
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            variants={textVariants}
          >
            Contacto
          </motion.h2>
          
          <motion.div 
            className="bg-gray-50 rounded-lg p-10 shadow-sm transform transition-all duration-500 hover:shadow-xl"
            initial={{ opacity: 0, y: 50, borderRadius: "0.5rem" }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
              borderRadius: "1rem"
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div 
              className="flex flex-col items-center space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-4 overflow-hidden rounded-full"
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <img 
                  src="/images/founder.jpg" 
                  alt="Felipe Carrasco Grillo" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold"
                variants={itemVariants}
              >
                Felipe Carrasco Grillo
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                variants={itemVariants}
              >
                Fundador y Consultor Principal
              </motion.p>
              
              <motion.div 
                className="w-16 h-1 bg-primary my-4"
                variants={itemVariants}
                whileInView={{
                  width: ["0%", "100%", "60%"],
                  transition: { duration: 1.5, times: [0, 0.7, 1] }
                }}
              />
              
              <motion.p 
                className="text-gray-700 flex items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#0077B6" }}
              >
                <span className="mr-2">📧</span>
                <a href="mailto:felipe.carrasco@inversionescaste.cl" className="hover:text-primary transition-colors">
                  felipe.carrasco@inversionescaste.cl
                </a>
              </motion.p>
              
              <motion.p 
                className="text-gray-700 flex items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05, color: "#0077B6" }}
              >
                <span className="mr-2">📍</span>
                Aysén, Chile
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact; 