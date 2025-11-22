import React, { useState } from 'react';
import { PricingTier } from '../types';
import { CheckCircle } from './Icons';
import CheckoutModal from './CheckoutModal';

const tiers: PricingTier[] = [
    { 
        name: "Sim Only", 
        price: "$25", 
        features: ["Unlimited Talk & Text", "Nationwide Coverage", "Cancel Anytime"], 
        color: "bg-neo-white",
        cta: "Bring Your Own" 
    },
    { 
        name: "The Phone", 
        price: "$199", 
        features: ["DoomBlocker Handset", "Charger & Case", "1 Year Warranty", "30 Day Money Back"], 
        color: "bg-neo-green",
        cta: "Order Device",
        popular: true
    },
    { 
        name: "Bundle", 
        price: "$299", 
        features: ["2x DoomBlocker Phones", "Family Dashboard", "Priority Support", "Lost Phone Insurance"], 
        color: "bg-neo-yellow",
        cta: "Save $100" 
    }
];

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);

  return (
    <section id="pricing" className="py-24 bg-neo-blue border-t-4 border-neo-black">
        <div className="container mx-auto px-4">
             <div className="text-center mb-20">
                <h2 className="text-5xl md:text-7xl font-black text-white uppercase drop-shadow-md mb-4">
                    Cheaper Than <br/><span className="bg-neo-black px-4 text-neo-yellow">Therapy</span>
                </h2>
                <p className="font-mono font-bold text-white text-lg">Invest in their future, not their dopamine addiction.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8 items-center">
                 {tiers.map((tier, idx) => (
                     <div 
                        key={idx} 
                        className={`relative border-4 border-neo-black p-8 shadow-neo-lg ${tier.color} ${tier.popular ? 'transform -translate-y-4 md:scale-110 z-10' : ''}`}
                     >
                        {tier.popular && (
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-neo-red text-white px-4 py-1 font-mono font-bold uppercase border-4 border-neo-black rotate-2 shadow-neo-sm">
                                Best Value
                            </div>
                        )}
                        
                        <h3 className="text-3xl font-black uppercase mb-2">{tier.name}</h3>
                        <div className="text-5xl font-black mb-8 font-mono tracking-tighter">{tier.price}</div>
                        
                        <ul className="space-y-4 mb-8 font-mono border-t-4 border-neo-black pt-6">
                            {tier.features.map((feat, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6 text-neo-black" />
                                    <span className="font-bold uppercase text-sm">{feat}</span>
                                </li>
                            ))}
                        </ul>

                        <button 
                            onClick={() => setSelectedTier(tier)}
                            className={`w-full py-4 border-4 border-neo-black font-black uppercase transition-all hover:shadow-neo hover:translate-x-[-4px] hover:translate-y-[-4px] active:shadow-none active:translate-x-0 active:translate-y-0 ${tier.popular ? 'bg-neo-black text-white hover:bg-gray-800' : 'bg-white hover:bg-gray-100'}`}
                        >
                            {tier.cta}
                        </button>
                     </div>
                 ))}
             </div>

             <div className="mt-16 text-center font-mono font-bold text-white/80">
                * Requires 12-month contract for subsidized pricing. Shipping worldwide.
             </div>
        </div>

        <CheckoutModal 
            isOpen={!!selectedTier} 
            onClose={() => setSelectedTier(null)} 
            item={selectedTier}
        />
    </section>
  );
};

export default Pricing;