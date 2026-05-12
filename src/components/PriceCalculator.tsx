import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, ShoppingCart, Truck, ArrowLeft } from 'lucide-react';
import type { ServiceItem } from '../types';

const INITIAL_SERVICES: ServiceItem[] = [
  { id: '1', name: 'Shirts / T-Shirts', price: 1000 },
  { id: '2', name: 'Trousers / Jeans', price: 1200 },
  { id: '3', name: 'Suits (Complete)', price: 4000 },
  { id: '4', name: 'Dresses', price: 2000 },
  { id: '5', name: 'Bedsheets', price: 1500 },
  { id: '6', name: 'Duvets', price: 3500 },
];

export function PriceCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({ name: '', phone: '', location: '' });

  const handleUpdate = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  };

  const selectedItems = INITIAL_SERVICES.filter(item => (quantities[item.id] || 0) > 0);

  const total = INITIAL_SERVICES.reduce((sum, item) => {
    return sum + (item.price * (quantities[item.id] || 0));
  }, 0);

  useEffect(() => {
    if (total === 0) setIsCheckingOut(false);
  }, [total]);

  const formatListForWhatsApp = () => {
    if (selectedItems.length === 0) return '';
    return selectedItems.map(item => `${quantities[item.id]}x ${item.name} (N${item.price * quantities[item.id]})`).join('%0A');
  };

  const whatsappText = `Hello AY Laundry, I want to place an order:%0A%0A${formatListForWhatsApp()}%0A%0AEstimated Total: N${total.toLocaleString()}`;

  return (
    <section id="calculator" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-400">Select services to estimate and build your cart.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services List */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {INITIAL_SERVICES.map(item => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-slate-900/40 hover:bg-slate-800/40 transition-colors border border-white/5 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-4 w-full sm:w-auto mb-4 sm:mb-0">
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider text-sm">{item.name}</h3>
                    <p className="text-cyan-400 font-bold font-mono text-lg mt-1">₦{item.price.toLocaleString()}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-slate-950/80 border border-white/10 rounded-full p-2 shrink-0">
                  <button 
                    onClick={() => handleUpdate(item.id, -1)}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all shrink-0"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="w-8 text-center font-bold text-white text-xl font-mono">
                    {String(quantities[item.id] || 0).padStart(2, '0')}
                  </span>
                  <button 
                    onClick={() => handleUpdate(item.id, 1)}
                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-slate-700 transition-all shrink-0"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="bg-cyan-900/10 border border-cyan-500/20 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none rounded-full"></div>
              
              <div className="flex items-center gap-3 mb-8 border-b border-cyan-500/20 pb-4">
                <ShoppingCart className="w-6 h-6 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-widest">Your Cart</h3>
              </div>
              
              <div className="space-y-4 mb-8 min-h-[120px] max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                {selectedItems.length === 0 ? (
                  <div className="text-center py-8 text-slate-500 text-sm uppercase tracking-widest font-bold">
                    Add items to your cart
                  </div>
                ) : (
                  selectedItems.map(item => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex justify-between items-center text-sm"
                    >
                      <div className="text-slate-300 flex items-center gap-2">
                        <span className="text-cyan-400 font-mono font-bold bg-cyan-950 px-2 py-1 rounded-md">{quantities[item.id]}x</span>
                        <span className="uppercase tracking-wider text-xs">{item.name}</span>
                      </div>
                      <div className="font-mono text-white font-bold">
                        ₦{(item.price * quantities[item.id]).toLocaleString()}
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="pt-6 border-t border-cyan-500/20">
                <div className="flex justify-between items-end mb-6">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">Estimated Total</span>
                  <motion.span 
                    key={total}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black font-mono text-white"
                  >
                    ₦{total.toLocaleString()}
                  </motion.span>
                </div>
                
                {!isCheckingOut ? (
                  <button 
                    onClick={() => setIsCheckingOut(true)}
                    disabled={total === 0}
                    className={`block w-full text-center py-4 rounded-xl font-black uppercase tracking-tighter sm:text-lg transition-all ${
                      total > 0 
                        ? 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.5)] text-slate-950' 
                        : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    Proceed to Checkout
                  </button>
                ) : (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const text = `Hello AY Laundry, I want to place an order:%0A%0A${formatListForWhatsApp()}%0A%0AEstimated Total: N${total.toLocaleString()}%0A%0A*Customer Details:*%0AName: ${customerDetails.name}%0APhone: ${customerDetails.phone}%0ALocation: ${customerDetails.location}`;
                    window.open(`https://wa.me/2349039539162?text=${text}`, '_blank');
                  }} className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-cyan-500/20 text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold mb-1 uppercase tracking-widest text-[10px]">
                        <Truck className="w-4 h-4" /> We Do Delivery!
                      </div>
                      <p>Please enter your delivery details below. <span className="text-white font-bold">Note: After making payment, please share your receipt on WhatsApp to confirm your order.</span></p>
                    </div>
                    
                    <input 
                      required 
                      type="text" 
                      placeholder="Your Name" 
                      value={customerDetails.name}
                      onChange={e => setCustomerDetails(prev => ({...prev, name: e.target.value}))}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-600 transition-all"
                    />
                    <input 
                      required 
                      type="tel" 
                      placeholder="Phone Number" 
                      value={customerDetails.phone}
                      onChange={e => setCustomerDetails(prev => ({...prev, phone: e.target.value}))}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-600 transition-all"
                    />
                    <textarea 
                      required 
                      placeholder="Delivery Address / Location" 
                      value={customerDetails.location}
                      onChange={e => setCustomerDetails(prev => ({...prev, location: e.target.value}))}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/30 text-white placeholder-slate-600 transition-all resize-none h-20"
                    />
                    
                    <div className="flex gap-3 pt-2">
                       <button 
                         type="button" 
                         onClick={() => setIsCheckingOut(false)}
                         className="px-4 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 border border-white/5 transition-colors flex items-center justify-center shrink-0"
                       >
                         <ArrowLeft className="w-5 h-5" />
                       </button>
                       <button 
                         type="submit"
                         className="flex-1 text-center py-3 rounded-xl font-black uppercase tracking-tighter text-slate-950 bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
                       >
                         Send via WhatsApp
                       </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
