import React, { useState } from 'react';
import { Shield, CheckCircle } from './Icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <footer className="bg-neo-black text-neo-white py-20 border-t-8 border-neo-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            {/* Brand Column */}
            <div className="w-full lg:w-1/3">
                <div className="flex items-center gap-2 mb-6">
                    <Shield className="w-10 h-10 md:w-12 md:h-12 text-neo-green shrink-0" />
                    <h2 className="text-3xl xl:text-4xl font-black uppercase text-neo-green tracking-tight break-all">DoomBlocker</h2>
                </div>
                <p className="font-mono text-gray-400 border-l-4 border-neo-green pl-4">
                    Reclaiming childhood from the digital void, one device at a time.
                </p>
            </div>

            {/* Links Column */}
            <div className="w-full lg:w-1/3 grid grid-cols-2 gap-8 font-mono font-bold uppercase">
                <ul className="space-y-2">
                    <li><a href="#problem" className="hover:text-neo-yellow hover:translate-x-2 block transition-transform">Our Mission</a></li>
                    <li><a href="#features" className="hover:text-neo-yellow hover:translate-x-2 block transition-transform">Safety Specs</a></li>
                    <li><a href="#" className="hover:text-neo-yellow hover:translate-x-2 block transition-transform">Parent Guide</a></li>
                </ul>
                <ul className="space-y-2">
                    <li><a href="#" className="hover:text-neo-blue hover:translate-x-2 block transition-transform">Support</a></li>
                    <li><a href="#" className="hover:text-neo-blue hover:translate-x-2 block transition-transform">Login</a></li>
                    <li><a href="#" className="hover:text-neo-blue hover:translate-x-2 block transition-transform">Contact</a></li>
                </ul>
            </div>

            {/* Newsletter Column */}
            <div className="w-full lg:w-1/3">
                <div className="bg-neo-white p-6 border-4 border-neo-gray shadow-[4px_4px_0px_0px_#333] transition-all hover:shadow-[8px_8px_0px_0px_#333] hover:translate-x-[-2px] hover:translate-y-[-2px]">
                    <h3 className="text-neo-black text-xl font-black uppercase mb-4">Free Parent Guide</h3>
                    <p className="text-neo-black font-mono text-xs mb-4">"How to talk to your angry teen about their phone."</p>
                    
                    {status === 'success' ? (
                        <div className="bg-neo-green p-4 border-4 border-neo-black flex items-center gap-3">
                            <CheckCircle className="w-6 h-6 text-neo-black" />
                            <span className="text-neo-black font-black uppercase">Sent! Check Inbox.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                            <input 
                                type="email" 
                                placeholder="EMAIL ADDR" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'submitting'}
                                className="bg-neo-gray text-neo-black px-4 py-3 w-full font-mono border-4 border-neo-black focus:outline-none focus:bg-white disabled:opacity-50" 
                            />
                            <button 
                                type="submit"
                                disabled={status === 'submitting'}
                                className="bg-neo-black text-white px-4 py-3 border-4 border-neo-black sm:border-l-0 font-bold uppercase hover:bg-neo-green hover:text-black transition-colors disabled:bg-gray-500 disabled:hover:text-white"
                            >
                                {status === 'submitting' ? '...' : '→'}
                            </button>
                        </form>
                    )}
                </div>
            </div>

        </div>
        
        <div className="mt-20 pt-8 border-t-4 border-gray-800 text-center font-mono text-sm text-gray-500">
            © 2025 DoomBlocker Inc. No Tracking. No Ads. No BS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;