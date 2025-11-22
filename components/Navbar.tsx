import React, { useState } from 'react';
import { Shield, Menu, X } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b-4 border-neo-black bg-neo-white">
      <div className="flex justify-between items-stretch h-20">
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center px-6 border-r-4 border-neo-black bg-neo-green hover:bg-neo-yellow transition-colors cursor-pointer group"
        >
          <Shield className="w-8 h-8 mr-3 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">DoomBlocker</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-end">
          {['Problem', 'Features', 'How it Works', 'Pricing'].map((item, idx) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
              className="flex items-center px-6 text-sm font-bold uppercase border-l-4 border-neo-black hover:bg-neo-black hover:text-neo-green transition-all"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('pricing')}
            className="bg-neo-red text-white px-8 font-black text-lg uppercase border-l-4 border-neo-black hover:bg-neo-black hover:text-neo-red transition-colors flex items-center gap-2"
          >
            Order Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden px-6 border-l-4 border-neo-black bg-neo-white flex items-center justify-center hover:bg-neo-gray"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-neo-black bg-neo-white absolute w-full shadow-neo-xl">
           {['Problem', 'Features', 'How it Works', 'Pricing'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase().replace(/\s/g, '-'))}
              className="block w-full text-left px-6 py-4 text-xl font-bold uppercase border-b-4 border-neo-black hover:bg-neo-yellow active:bg-neo-green transition-colors"
            >
              {item}
            </button>
          ))}
           <button 
              onClick={() => scrollToSection('pricing')}
              className="block w-full text-left px-6 py-4 text-xl font-black uppercase bg-neo-red text-white hover:bg-neo-black hover:text-neo-red transition-colors"
            >
              Order Now
            </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;