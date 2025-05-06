'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="section bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contacto</h2>
          
          <motion.div 
            className="bg-gray-50 rounded-lg p-10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="mb-4">
                <img 
                  src="/images/founder.jpg" 
                  alt="Felipe Carrasco Grillo" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              <h3 className="text-xl font-semibold">Felipe Carrasco Grillo</h3>
              <p className="text-gray-600">Fundador y Consultor Principal</p>
              
              <div className="w-16 h-1 bg-primary my-4"></div>
              
              <p className="text-gray-700 flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:felipe.carrasco@inversionescaste.cl" className="hover:text-primary transition-colors">
                  felipe.carrasco@inversionescaste.cl
                </a>
              </p>
              
              <p className="text-gray-700 flex items-center">
                <span className="mr-2">📍</span>
                Aysén, Chile
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 