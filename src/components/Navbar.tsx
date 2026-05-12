import { motion } from 'motion/react';
import { Droplets, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <span className="text-xl font-bold italic text-white flex items-center justify-center"><Droplets className="h-5 w-5" /></span>
            </div>
            <div className="flex flex-col">
               <span className="text-2xl font-black tracking-tighter uppercase text-white leading-none">AY Laundry</span>
               <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest leading-tight mt-0.5">🚚 We Do Delivery!</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">Services</a>
            <a href="#calculator" className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a>
            <a href="#tracking" className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">Tracking</a>
            <a href="#payment" className="text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors">Payment</a>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="https://wa.me/2349039539162?text=Hello%20AY%20Laundry,%20I%20need%20your%20services." 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2 rounded-full font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all uppercase tracking-tighter text-sm"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-cyan-400 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400">Services</a>
            <a href="#calculator" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400">Pricing</a>
            <a href="#tracking" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400">Tracking</a>
            <a href="#payment" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium uppercase tracking-widest text-slate-400 hover:text-cyan-400">Payment</a>
          </div>
        </div>
      )}
    </nav>
  );
}
