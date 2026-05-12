import { motion } from 'motion/react';
import { CreditCard, Building, User, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export function PaymentDetails() {
  const [copied, setCopied] = useState(false);
  const accountNumber = "9039539162";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="payment" className="py-24 relative overflow-hidden z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Secure Payment</h2>
          <p className="text-xl text-slate-400">Please make transfers to the account below after booking.</p>
        </div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="max-w-md mx-auto bg-gradient-to-br from-indigo-900/40 to-slate-900/60 border border-white/10 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Card Decoration */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
          <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
          
          <div className="flex justify-between items-start mb-12 relative z-10">
            <CreditCard className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
            <div className="text-right">
              <span className="bg-slate-950/50 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-lg border border-white/10 uppercase tracking-widest">
                Bank Transfer
              </span>
            </div>
          </div>

          <div className="space-y-6 relative z-10">
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-tighter flex items-center gap-2 mb-1">
                <User className="w-3 h-3" /> Account Name
              </p>
              <p className="text-lg font-bold text-white">Ayomide Emmaunel</p>
            </div>

            <div className="pt-6 mt-2 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter mb-1">Bank</p>
                <p className="font-bold text-white">OPAY</p>
              </div>
              <div className="sm:text-right">
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter mb-1">Account Number</p>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono text-cyan-400 tracking-wider font-bold">{accountNumber}</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-slate-950/50 border border-white/10 hover:bg-white/10 transition-colors text-cyan-400"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-4 text-center relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
            <p className="text-sm text-cyan-100">
              <span className="font-bold text-cyan-400 uppercase tracking-widest text-[10px] block mb-1">Important</span>
              After making your payment, please send your payment receipt to us on WhatsApp to confirm your order processing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
