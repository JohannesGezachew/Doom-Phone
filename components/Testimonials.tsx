import React from 'react';
import { Star } from './Icons';

const Testimonials = () => {
  return (
    <section className="py-24 bg-neo-red border-t-4 border-neo-black">
        <div className="container mx-auto px-4">
            <h2 className="text-5xl font-black uppercase text-center mb-16 text-neo-black">
                Parents Are <span className="bg-neo-white px-2 border-4 border-neo-black shadow-neo">Relieved</span>
            </h2>

            <div className="columns-1 md:columns-3 gap-8 space-y-8">
                {[
                    { text: "I got my son back. He actually looks me in the eye at dinner now.", author: "Sarah J.", role: "Mom of 2" },
                    { text: "The peace of mind is worth 10x the price. No secret chats, no bullying apps.", author: "Mike T.", role: "High School Teacher" },
                    { text: "Built like a tank. My kid threw it against the wall when he couldn't download TikTok. Phone survived, addiction didn't.", author: "David R.", role: "Dad of 3" },
                    { text: "Finally a company that isn't trying to monetize my child's attention.", author: "Elena K.", role: "Child Psychologist" },
                    { text: "Simple, rugged, and effective. The battery lasts forever.", author: "James P.", role: "Tech Reviewer" },
                ].map((t, i) => (
                    <div key={i} className="break-inside-avoid bg-neo-white border-4 border-neo-black p-6 shadow-neo hover:rotate-1 transition-transform">
                        <div className="flex text-neo-yellow mb-4">
                            {[1,2,3,4,5].map(s => (
                                <React.Fragment key={s}>
                                    <Star className="w-5 h-5 fill-current stroke-black stroke-2" />
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="font-mono font-bold text-lg mb-6">"{t.text}"</p>
                        <div className="border-t-4 border-neo-black pt-4 flex justify-between items-center">
                            <span className="font-black uppercase">{t.author}</span>
                            <span className="font-mono text-xs bg-neo-black text-white px-2 py-1">{t.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;