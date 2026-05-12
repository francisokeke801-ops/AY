import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Truck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 text-cyan-400 font-bold mb-6 border border-white/10 shadow-sm uppercase tracking-widest text-xs"
          >
            <Truck className="w-4 h-4" />
            We Offer Pickup & Delivery!
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 leading-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic tracking-tighter"
          >
            Pristine Wear. <br className="hidden md:block" />
            Delivered Fast.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Experience the ultimate convenience with AY Laundry. We wash, fold, and deliver right to your door with unmatched quality and care.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="https://wa.me/2349039539162?text=Hello%20AY%20Laundry,%20I%20need%20your%20services." 
              target="_blank" 
              rel="noreferrer"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-black text-lg flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(6,182,212,0.5)] transition-all relative overflow-hidden group uppercase tracking-tighter"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] animate-[shimmer_2s_infinite] skew-x-[-20deg]" />
                Schedule Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            
            <a href="#calculator">
              <button className="w-full sm:w-auto bg-slate-900/40 text-slate-300 border border-white/10 hover:border-cyan-500/50 hover:text-white px-8 py-4 rounded-full font-bold transition-colors uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                View Pricing
              </button>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { icon: Clock, title: "24h Turnaround", desc: "Fast and reliable service for when you need it most." },
            { icon: ShieldCheck, title: "Fabric Protection", desc: "Eco-friendly detergents that are tough on stains, gentle on fabrics." },
            { icon: Sparkles, title: "Satisfaction Guarantee", desc: "If you're not happy, we re-wash it for free." }
          ].map((feature, i) => (
            <div key={i} className="bg-cyan-900/10 border border-cyan-500/20 p-6 rounded-3xl backdrop-blur-sm flex flex-col items-center text-center">
              <div className="h-14 w-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-sm font-bold text-cyan-400 mb-2 uppercase tracking-widest">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
