import { motion } from 'motion/react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5 bg-slate-950 overflow-hidden">
      <div className="absolute top-[10%] left-[-100px] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter uppercase">About AY Laundry</h2>
            <div className="w-16 h-1 bg-cyan-500 mb-8 border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            
            <p className="text-lg text-slate-400 mb-6 leading-relaxed">
              Located in the heart of Owerri, AY Laundry was founded with a single mission: to provide premium, hassle-free garment care. We combine advanced cleaning technology with meticulous attention to detail.
            </p>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              From delicate fabrics to heavy duvets, our expert team ensures your items are returned pristine and fresh. We value your time—offering simple booking, transparent pricing, and fast delivery right to your doorstep.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <h4 className="text-4xl font-black text-cyan-400 mb-2 font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">100%</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest relative z-10">Satisfaction Guarantee</p>
              </div>
              <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-cyan-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <h4 className="text-4xl font-black text-cyan-400 mb-2 font-mono drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">24h</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest relative z-10">Express Delivery</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 p-8 shadow-2xl bg-slate-900/20 backdrop-blur-xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
              
              <div className="w-full h-full rounded-full border border-cyan-500/20 bg-slate-900/50 backdrop-blur flex items-center justify-center p-8">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-900/40 to-slate-800/80 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                  <span className="text-7xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 tracking-tighter">AY</span>
                </div>
              </div>
              
              <div className="absolute bottom-8 left-1/4 bg-slate-800 border border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3 backdrop-blur-md">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></div>
                <span className="text-xs uppercase tracking-widest text-slate-300 font-bold">Owerri Municipal</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
