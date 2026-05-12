import { useState } from 'react';
import { Search } from 'lucide-react';

export function OrderTracking() {
  const [trackingId, setTrackingId] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;
    
    const text = `Hello AY Laundry, I want to track my order. My Tracking ID / Phone Number is: ${trackingId}`;
    window.open(`https://wa.me/2349039539162?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="tracking" className="py-24 border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Track Your Order</h2>
          <p className="text-xl text-slate-400">Enter your phone number or tracking ID to see order status.</p>
        </div>

        <div className="bg-slate-900/40 rounded-3xl border border-white/5 p-6 md:p-10">
          <form onSubmit={handleSearch} className="flex gap-4 flex-col md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input 
                type="text" 
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder="e.g. AYL-9923 or 0903..." 
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-slate-950 border border-white/10 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-slate-600 transition-all text-lg"
              />
            </div>
            <button 
              type="submit" 
              disabled={!trackingId.trim()}
              className="bg-slate-800 text-cyan-400 border border-white/5 px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-slate-700 hover:border-cyan-500/50 transition-colors disabled:opacity-50 disabled:hover:bg-slate-800 flex items-center justify-center min-w-[140px]"
            >
              Track on WhatsApp
            </button>
          </form>
          
          <div className="mt-6 text-center">
             <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">
               We will provide your order status directly via our WhatsApp support.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}
