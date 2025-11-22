import React from 'react';
import { ShieldCheck, Lock, MapPin, Battery, CheckCircle } from './Icons';

const Features = () => {
  return (
    <section id="features" className="py-24 bg-neo-gray">
        <div className="container mx-auto px-4">
            <div className="mb-16 border-l-8 border-neo-black pl-6">
                <h2 className="text-5xl md:text-7xl font-black uppercase text-neo-black">
                    Hardware That <br/>
                    <span className="text-neo-green text-outline">Doesn't Suck</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6">
                
                {/* Feature 1: Vetted Apps (Large) */}
                <div className="md:col-span-2 row-span-2 bg-neo-white border-4 border-neo-black shadow-neo-lg p-8 flex flex-col justify-between group hover:bg-neo-green transition-colors">
                    <div>
                        <div className="w-12 h-12 bg-neo-black text-white rounded-none flex items-center justify-center mb-6 border-2 border-transparent group-hover:border-black group-hover:bg-white group-hover:text-black transition-all">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-black uppercase mb-4">Vetted Apps Only</h3>
                        <p className="font-mono font-bold text-lg">No App Store. No side-loading. We curate a list of 100% safe utility apps (Calculator, Maps, Music, School Tools). If it scrolls, it's gone.</p>
                    </div>
                    <div className="mt-8 p-4 bg-neo-gray border-2 border-neo-black font-mono text-xs uppercase">
                        <span className="font-bold">Status:</span> Locked & Secure
                    </div>
                </div>

                {/* Feature 2: Tamper Proof */}
                <div className="md:col-span-2 bg-neo-yellow border-4 border-neo-black shadow-neo p-8 flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-black uppercase mb-2">Tamper-Proof OS</h3>
                        <p className="font-mono text-sm font-bold">Kids can't hack it. We tried.</p>
                    </div>
                    <Lock className="w-12 h-12" />
                </div>

                {/* Feature 3: GPS */}
                <div className="md:col-span-1 bg-neo-white border-4 border-neo-black shadow-neo p-6 flex flex-col justify-between">
                    <MapPin className="w-10 h-10 mb-4 text-neo-red" />
                    <div>
                        <h3 className="text-xl font-black uppercase">Live GPS</h3>
                        <p className="font-mono text-xs mt-2">Know where they are, always.</p>
                    </div>
                </div>

                {/* Feature 4: Battery */}
                <div className="md:col-span-1 bg-neo-black text-neo-white border-4 border-neo-black shadow-neo p-6 flex flex-col justify-between">
                    <Battery className="w-10 h-10 mb-4 text-neo-green" />
                    <div>
                        <h3 className="text-xl font-black uppercase">3 Day Battery</h3>
                        <p className="font-mono text-xs mt-2 text-gray-400">No background drain.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Features;