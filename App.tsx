
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Problem from './components/Problem';
import Features from './components/Features';
import AgeProgression from './components/AgeProgression';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neo-bg font-sans text-neo-black selection:bg-neo-green selection:text-neo-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee 
            text="NO TIKTOK • NO REELS • NO DOOMSCROLLING • NO ADDICTION • JUST LIFE •" 
            className="bg-neo-yellow text-neo-black transform rotate-1 z-20 relative -mt-10 border-t-4" 
            speed="slow"
        />
        <Problem />
        <Features />
        <Marquee 
            text="SAFE FOR KIDS • SANITY FOR PARENTS • 30 DAY MONEY BACK GUARANTEE •" 
            className="bg-neo-black text-neo-white border-none" 
            direction="right"
            speed="normal"
        />
        <AgeProgression />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
