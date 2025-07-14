import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Portfolio from '../components/Portfolio';
import HowWeWork from '../components/HowWeWork';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <Portfolio />
      <HowWeWork />
      <Contact />
    </main>
  );
} 