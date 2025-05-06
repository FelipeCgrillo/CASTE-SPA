import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import RealCases from '../components/RealCases';
import HowWeWork from '../components/HowWeWork';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <RealCases />
      <HowWeWork />
      <Contact />
    </main>
  );
} 