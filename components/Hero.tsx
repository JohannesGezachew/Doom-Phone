import React from 'react';
import { Shield, Star, XCircle } from './Icons';

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-neo-white noise-bg">
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-neo-green border-4 border-black"></div>
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-neo-yellow rounded-full border-4 border-black"></div>
        <div className="absolute top-[40%] right-[5%] w-24 h-24 bg-neo-red transform rotate-45 border-4 border-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Copy Side */}
          <div className="text-left">
            
            <div className="inline-block bg-neo-black text-neo-green px-4 py-2 border-4 border-neo-black transform -rotate-2 mb-8 shadow-neo">
               <span className="font-mono font-bold uppercase tracking-tighter flex items-center gap-2">
                 <Shield className="w-4 h-4" />
                 Tamper-Proof OS
               </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8 text-neo-black uppercase break-words">
              Kill The <br/>
              <span className="text-transparent text-outline bg-clip-text bg-gradient-to-r from-neo-black to-neo-black">Addiction</span><br/>
              <span className="bg-neo-red px-2 text-white inline-block border-4 border-neo-black shadow-neo-lg mt-2 transform skew-x-[-10deg]">Keep The Kid</span>
            </h1>

            <p className="font-mono text-base md:text-xl max-w-xl mb-10 bg-neo-white border-l-8 border-neo-yellow pl-6 py-2">
              The only phone that physically blocks TikTok, Reels, and infinite scrolling while keeping family connection alive.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={scrollToPricing}
                className="bg-neo-green px-6 py-4 sm:px-8 sm:py-5 text-lg sm:text-xl font-black uppercase border-4 border-neo-black shadow-neo-lg hover:shadow-neo-hover hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Protect Your Kid</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <div className="flex items-center gap-4 px-2 sm:px-4">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-black z-10 flex items-center justify-center overflow-hidden bg-white">
                           <Shield className="w-6 h-6 text-neo-black" />
                        </div>
                    ))}
                 </div>
                 <div className="font-bold font-mono text-sm leading-tight">
                    Trusted by <br/> 10,000+ Parents
                 </div>
              </div>
            </div>

          </div>

          {/* Visual Side - CSS Constructed Phone */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
             {/* The Phone - Responsive Width/Height */}
             <div className="relative w-[260px] h-[500px] sm:w-[300px] sm:h-[600px] bg-neo-black rounded-[2.5rem] sm:rounded-[3rem] border-4 border-neo-black shadow-neo-xl p-3 sm:p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-default">
                {/* Screen */}
                <div className="w-full h-full bg-neo-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative border-2 border-gray-800 flex flex-col">
                    {/* Status Bar */}
                    <div className="h-8 bg-neo-black w-full flex justify-between items-center px-6">
                        <div className="w-16 h-4 bg-gray-800 rounded-full"></div>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-neo-green rounded-full"></div>
                            <div className="w-3 h-3 bg-neo-green rounded-full"></div>
                        </div>
                    </div>
                    
                    {/* Content: Blocked Screen */}
                    <div className="flex-1 flex flex-col items-center justify-center bg-neo-gray relative p-4 sm:p-6 text-center space-y-4 sm:space-y-6">
                         <div className="w-20 h-20 sm:w-24 sm:h-24 bg-neo-red rounded-full flex items-center justify-center border-4 border-neo-black animate-bounce shadow-neo">
                             <XCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                         </div>
                         <div>
                             <h3 className="font-black text-xl sm:text-2xl uppercase mb-2">App Blocked</h3>
                             <p className="font-mono text-[10px] sm:text-xs font-bold">"TikTok" is not allowed on DoomBlocker OS.</p>
                         </div>
                         <div className="w-full bg-neo-white border-4 border-neo-black p-3 sm:p-4 shadow-neo-sm">
                             <p className="font-mono text-[10px] sm:text-xs uppercase font-bold text-neo-green">Go Read A Book Instead</p>
                         </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-neo-black rounded-full"></div>
                </div>
                
                {/* Volume Buttons */}
                <div className="absolute -left-1.5 top-32 w-1 h-10 bg-neo-black rounded-l-lg"></div>
                <div className="absolute -left-1.5 top-44 w-1 h-10 bg-neo-black rounded-l-lg"></div>
                
                {/* Power Button */}
                <div className="absolute -right-1.5 top-32 w-1 h-12 bg-neo-red rounded-r-lg"></div>
             </div>

             {/* Floating Badge - Hidden on small mobile to prevent overflow */}
             <div className="absolute bottom-20 -left-10 bg-neo-yellow px-6 py-4 border-4 border-neo-black shadow-neo hidden sm:block transform -rotate-6 animate-float">
                 <div className="text-4xl font-black">ZERO</div>
                 <div className="font-mono font-bold text-sm">ALGORITHMS</div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;