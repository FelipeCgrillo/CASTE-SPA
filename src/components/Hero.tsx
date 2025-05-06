'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: 'url(/images/patagonia.jpg)' }}
      />
      
      <motion.div 
        className="z-20 text-white text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          CASTE SPA
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Automatizamos procesos públicos y privados. <br />
          Desde una de las regiones más australes del mundo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <button className="btn-primary">Conoce más</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 