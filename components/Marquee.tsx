import React from 'react';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
  speed?: 'normal' | 'fast';
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '', speed = 'normal' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap border-y-4 border-neo-black py-4 ${className}`}>
      <div className={`inline-flex ${direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'} ${speed === 'fast' ? 'duration-100' : ''}`}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className="mx-6 text-2xl font-black uppercase tracking-widest font-mono flex items-center">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;