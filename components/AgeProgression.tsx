import React, { useState } from 'react';
import { CheckCircle, MapPin, Brain } from './Icons';

// Internal Icons for the Phone UI
const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.26-.26.35-.63.24-1.01a17.93 17.93 0 01-.56-3.53c-.05-.55-.5-1.01-1.21-1.01H4.05c-.66 0-1.21.55-1.21 1.21C2.89 13.9 10.1 21.11 19.11 21.11c.66 0 1.21-.55 1.21-1.21v-3.68c0-.71-.46-1.16-1.01-1.21z"/></svg>
);
const MessageIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
);
const MusicIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
);
const CameraIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
);
const CalcIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14H7v-2h6v2zm4-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
);
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.09.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
);
const BatteryIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
)

const AgeProgression = () => {
  const [activeTab, setActiveTab] = useState<'starter' | 'pro'>('starter');

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-neo-white border-t-4 border-neo-black">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
                    Level Up <span className="bg-neo-black text-neo-white px-2">Responsibly</span>
                </h2>
                <p className="font-mono text-lg">Start strict. Loosen the leash as they prove they can handle it.</p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="border-4 border-neo-black bg-neo-gray p-2 flex gap-4 shadow-neo">
                    <button 
                        onClick={() => setActiveTab('starter')}
                        className={`px-8 py-3 font-black uppercase text-xl transition-all border-2 ${activeTab === 'starter' ? 'bg-neo-green border-neo-black shadow-neo-sm translate-y-[-4px]' : 'bg-transparent border-transparent text-gray-500 hover:text-black'}`}
                    >
                        Ages 8-12
                    </button>
                    <button 
                        onClick={() => setActiveTab('pro')}
                        className={`px-8 py-3 font-black uppercase text-xl transition-all border-2 ${activeTab === 'pro' ? 'bg-neo-purple text-white border-neo-black shadow-neo-sm translate-y-[-4px]' : 'bg-transparent border-transparent text-gray-500 hover:text-black'}`}
                    >
                        Ages 13-16
                    </button>
                </div>
            </div>

            {/* Content Card */}
            <div className="max-w-5xl mx-auto bg-neo-white border-4 border-neo-black shadow-neo-xl p-8 md:p-12 relative">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-neo-black triangle-corner"></div>
                
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Visual Side with Dynamic Phone */}
                    <div className="w-full md:w-1/2 flex justify-center">
                         <div className={`w-full max-w-sm aspect-[4/5] md:aspect-[3/4] border-4 border-neo-black flex items-center justify-center relative overflow-hidden transition-colors duration-500 rounded-xl ${activeTab === 'starter' ? 'bg-neo-green' : 'bg-neo-purple'}`}>
                            
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>

                            {/* The Phone Device */}
                            <div className={`relative w-48 h-80 sm:w-52 sm:h-96 bg-neo-black rounded-[2.5rem] border-4 border-neo-black shadow-neo-xl transition-all duration-500 transform ${activeTab === 'starter' ? 'rotate-[-3deg]' : 'rotate-[3deg]'}`}>
                                
                                {/* Physical Buttons */}
                                <div className="absolute top-24 -left-1.5 w-1.5 h-10 bg-gray-800 rounded-l-lg"></div>
                                <div className="absolute top-40 -left-1.5 w-1.5 h-14 bg-gray-800 rounded-l-lg"></div>
                                <div className="absolute top-28 -right-1.5 w-1.5 h-12 bg-neo-red rounded-r-lg"></div>

                                {/* Screen Area */}
                                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden border-[3px] border-gray-800 flex flex-col relative">
                                    
                                    {/* Notch / Dynamic Island */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-black rounded-b-xl z-20 flex justify-center items-center gap-2">
                                        <div className="w-10 h-1 bg-gray-800 rounded-full opacity-50"></div>
                                        <div className="w-1 h-1 bg-blue-900 rounded-full"></div>
                                    </div>

                                    {/* Status Bar */}
                                    <div className="h-8 w-full flex justify-between items-center px-5 pt-2 text-[10px] font-bold font-mono">
                                        <span>9:41</span>
                                        <div className="flex gap-1">
                                            <BatteryIcon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Dynamic UI Content */}
                                    <div className="flex-1 flex flex-col items-center p-4 pt-8 transition-opacity duration-300">
                                        
                                        {activeTab === 'starter' ? (
                                            // STARTER MODE UI
                                            <div className="w-full flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                <div className="w-full aspect-square bg-neo-green border-4 border-neo-black rounded-2xl flex flex-col items-center justify-center shadow-neo-sm transform hover:scale-105 transition-transform cursor-default">
                                                    <PhoneIcon className="w-12 h-12 mb-1" />
                                                    <span className="font-black uppercase text-sm">Call Mom</span>
                                                </div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="aspect-square bg-neo-yellow border-4 border-neo-black rounded-2xl flex flex-col items-center justify-center shadow-neo-sm">
                                                        <MessageIcon className="w-8 h-8 mb-1" />
                                                        <span className="font-bold uppercase text-[10px]">Text</span>
                                                    </div>
                                                    <div className="aspect-square bg-white border-4 border-neo-black rounded-2xl flex flex-col items-center justify-center shadow-neo-sm">
                                                        <MapPin className="w-8 h-8 mb-1" />
                                                        <span className="font-bold uppercase text-[10px]">Find</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2 text-center text-[10px] font-mono font-bold bg-gray-100 p-1 rounded border-2 border-gray-200">
                                                    SAFE MODE: ON
                                                </div>
                                            </div>
                                        ) : (
                                            // PRO MODE UI
                                            <div className="w-full h-full flex flex-col justify-between animate-in fade-in slide-in-from-bottom-4 duration-500 pt-2">
                                                <div className="grid grid-cols-3 gap-2">
                                                    {[
                                                        { color: 'bg-neo-purple text-white', icon: <Brain className="w-4 h-4"/>, label: "Study" },
                                                        { color: 'bg-green-400', icon: <PhoneIcon className="w-4 h-4"/>, label: "Call" },
                                                        { color: 'bg-yellow-400', icon: <MessageIcon className="w-4 h-4"/>, label: "Chat" },
                                                        { color: 'bg-blue-400', icon: <MusicIcon className="w-4 h-4"/>, label: "Music" },
                                                        { color: 'bg-gray-200', icon: <CalcIcon className="w-4 h-4"/>, label: "Calc" },
                                                        { color: 'bg-red-400', icon: <MapPin className="w-4 h-4"/>, label: "Maps" },
                                                    ].map((app, i) => (
                                                        <div key={i} className="flex flex-col items-center gap-1">
                                                            <div className={`w-full aspect-square ${app.color} border-2 border-black rounded-xl flex items-center justify-center shadow-sm`}>
                                                                {app.icon}
                                                            </div>
                                                            <span className="text-[8px] font-bold uppercase tracking-tight">{app.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                {/* Dock */}
                                                <div className="bg-gray-200/80 rounded-2xl p-2 grid grid-cols-3 gap-2 backdrop-blur-sm border border-gray-300">
                                                     <div className="aspect-square bg-green-500 rounded-lg border-2 border-black flex items-center justify-center"><PhoneIcon className="w-4 h-4 text-white"/></div>
                                                     <div className="aspect-square bg-white rounded-lg border-2 border-black flex items-center justify-center"><CameraIcon className="w-4 h-4"/></div>
                                                     <div className="aspect-square bg-gray-800 rounded-lg border-2 border-black flex items-center justify-center"><SettingsIcon className="w-4 h-4 text-white"/></div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Home Indicator */}
                                    <div className="mb-2 mx-auto w-1/3 h-1.5 bg-black rounded-full"></div>
                                </div>
                            </div>
                            
                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white px-3 py-2 border-4 border-black font-mono text-xs font-bold shadow-neo z-10 rotate-3">
                                MODEL: DB-{activeTab === 'starter' ? '01' : '02'}X
                            </div>
                         </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-black uppercase mb-2">
                            {activeTab === 'starter' ? 'Lockdown Mode' : 'Freedom Mode'}
                        </h3>
                        <p className="font-mono font-bold text-gray-500 mb-6">
                            {activeTab === 'starter' ? 'Pure communication. Zero distractions. The digital training wheels.' : 'Controlled access. Study tools unlocked. Music allowed.'}
                        </p>
                        
                        <ul className="space-y-4 font-mono">
                            {[
                                activeTab === 'starter' ? 'Calling & Texting Only' : 'Calling & Texting',
                                activeTab === 'starter' ? 'No Internet Browser' : 'Filtered Wikipedia Access',
                                activeTab === 'starter' ? 'No App Store' : 'Spotify & Canvas Allowed',
                                activeTab === 'starter' ? 'Bedtime: 8PM Hard Lock' : 'Bedtime: Parent Controlled',
                                'GPS Tracking Always On'
                            ].map((feat, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-neo-black text-white flex items-center justify-center rounded-full shrink-0">
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    <span className="font-bold uppercase text-sm">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={scrollToFeatures}
                            className="mt-8 w-full py-4 border-4 border-neo-black font-black uppercase hover:bg-neo-black hover:text-white transition-all shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                        >
                            View Specs
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default AgeProgression;