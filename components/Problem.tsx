import React from 'react';
import { Brain, Skull, Moon } from './Icons';

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-neo-black text-neo-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 text-neo-white">
                    Your Kid vs <span className="text-neo-red underline decoration-4 underline-offset-8">The Algorithm</span>
                </h2>
                <p className="font-mono text-lg md:text-xl text-gray-400">
                    Silicon Valley employs thousands of PhDs to hijack your child's attention. A normal phone doesn't stand a chance.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-neo-white text-neo-black p-8 border-4 border-neo-white shadow-[8px_8px_0px_0px_#FF2E00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <div className="w-16 h-16 bg-neo-black text-neo-red flex items-center justify-center border-4 border-neo-black mb-6">
                        <Skull className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4">Dopamine Fry</h3>
                    <p className="font-mono font-bold text-sm leading-relaxed">
                        Short-form videos (TikTok/Reels) shrink attention spans to 8 seconds. We block the loops at the OS level.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-neo-white text-neo-black p-8 border-4 border-neo-white shadow-[8px_8px_0px_0px_#FAFF00] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative top-0 md:-top-8">
                    <div className="w-16 h-16 bg-neo-black text-neo-yellow flex items-center justify-center border-4 border-neo-black mb-6">
                        <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4">Focus Rot</h3>
                    <p className="font-mono font-bold text-sm leading-relaxed">
                        Constant notifications reduce IQ by 10 points. DoomBlocker is silent by default. No buzzing, no pinging.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-neo-white text-neo-black p-8 border-4 border-neo-white shadow-[8px_8px_0px_0px_#00FF85] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    <div className="w-16 h-16 bg-neo-black text-neo-green flex items-center justify-center border-4 border-neo-black mb-6">
                        <Moon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-4">Sleep Theft</h3>
                    <p className="font-mono font-bold text-sm leading-relaxed">
                        Blue light destroys melatonin. Our "Bedtime Guardian" auto-dims screens and kills apps after 8PM.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Problem;