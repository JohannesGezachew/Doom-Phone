import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Shield, Lock } from './Icons';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: { name: string; price: string } | null;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, item }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');

  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    setTimeout(() => setStep('success'), 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neo-black/90 backdrop-blur-sm cursor-pointer" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-neo-white border-4 border-neo-black shadow-neo-xl p-8 animate-float">
        <button 
            onClick={onClose} 
            className="absolute top-4 right-4 hover:bg-neo-red hover:text-white border-2 border-transparent hover:border-neo-black transition-colors p-1"
            aria-label="Close modal"
        >
            <X className="w-6 h-6" />
        </button>

        {step === 'form' && (
            <>
                <div className="mb-8 text-center border-b-4 border-neo-black pb-4">
                    <div className="inline-flex items-center gap-2 bg-neo-yellow border-2 border-neo-black px-3 py-1 mb-4 transform -rotate-2">
                        <Lock className="w-4 h-4" />
                        <span className="font-black uppercase text-xs">Secure Encryption</span>
                    </div>
                    <h3 className="text-2xl font-black uppercase mb-2">Checkout</h3>
                    <p className="font-mono text-sm">Item: <span className="font-bold bg-neo-black text-white px-1">{item.name}</span></p>
                    <p className="font-mono text-sm mt-1">Total: <span className="font-black text-xl">{item.price}</span></p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-black uppercase text-xs mb-1">Email Address</label>
                        <input required type="email" placeholder="parent@example.com" className="w-full bg-neo-gray border-4 border-neo-black p-3 font-mono focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all placeholder-gray-400" />
                    </div>
                    
                    <div>
                        <label className="block font-black uppercase text-xs mb-1">Shipping Address</label>
                        <input required type="text" placeholder="123 Safety St, Austin, TX" className="w-full bg-neo-gray border-4 border-neo-black p-3 font-mono focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all placeholder-gray-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                             <label className="block font-black uppercase text-xs mb-1">Card Number</label>
                             <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-neo-gray border-4 border-neo-black p-3 font-mono focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all placeholder-gray-400" />
                        </div>
                         <div>
                             <label className="block font-black uppercase text-xs mb-1">CVC</label>
                             <input required type="text" placeholder="123" className="w-full bg-neo-gray border-4 border-neo-black p-3 font-mono focus:outline-none focus:bg-white focus:shadow-neo-sm transition-all placeholder-gray-400" />
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-neo-green py-4 border-4 border-neo-black font-black uppercase text-xl hover:bg-neo-black hover:text-neo-green transition-all shadow-neo hover:shadow-none hover:translate-x-1 hover:translate-y-1 mt-6 flex items-center justify-center gap-2">
                        <span>Pay {item.price}</span>
                    </button>
                    
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500 mt-4">
                        <Shield className="w-4 h-4" />
                        <span>100% Money Back Guarantee</span>
                    </div>
                </form>
            </>
        )}

        {step === 'processing' && (
            <div className="py-12 text-center">
                <div className="w-16 h-16 border-8 border-neo-gray border-t-neo-black rounded-full animate-spin mx-auto mb-6"></div>
                <h3 className="text-2xl font-black uppercase">Processing...</h3>
                <p className="font-mono mt-2">Securing your order.</p>
            </div>
        )}

        {step === 'success' && (
            <div className="py-8 text-center">
                <div className="w-20 h-20 bg-neo-green rounded-full border-4 border-neo-black flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-neo-black" />
                </div>
                <h3 className="text-3xl font-black uppercase mb-4">Order Confirmed!</h3>
                <p className="font-mono mb-8 text-gray-600">Welcome to the resistance. A confirmation email is on its way.</p>
                <button onClick={onClose} className="w-full bg-neo-black text-white py-3 border-4 border-neo-black font-bold uppercase hover:bg-gray-800 transition-colors">
                    Close
                </button>
            </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;