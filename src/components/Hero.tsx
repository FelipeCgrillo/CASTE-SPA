'use client';

import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300, 500], [1, 0.5, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.15]);

  return (
    <section className="section relative h-screen flex justify-center items-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 z-10"
        style={{ opacity }}
      ></motion.div>
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/images/patagonia.jpg)',
          y: y1,
          scale
        }}
      />
      
      <motion.div 
        className="z-20 text-white text-center max-w-4xl px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 1.2 }}
        >
          CASTE SPA
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          Automatizamos procesos públicos y privados. <br />
          Desde una de las regiones más australes del mundo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <button className="btn-primary">Conoce más</button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 