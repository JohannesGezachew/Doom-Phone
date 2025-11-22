
import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '', speed = 'normal' }) => {
  
  const getDuration = () => {
    switch (speed) {
      case 'fast': return '30s';
      case 'normal': return '60s';
      case 'slow': return '120s'; // 2 minutes for a full loop
      default: return '60s';
    }
  };

  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-4 border-neo-black py-4 ${className}`}>
      <div 
        className={`inline-flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'}`}
        style={{ animationDuration: getDuration() }}
      >
        {/* Reduced repetition count slightly to reduce total DOM width, but kept high enough for loops */}
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-6 text-2xl font-black uppercase tracking-widest font-mono flex items-center">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
