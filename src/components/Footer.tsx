export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-black italic text-white tracking-tighter mb-4 inline-block uppercase">
              AY <span className="text-cyan-400">Laundry</span>
            </span>
            <p className="max-w-xs text-slate-400 text-sm leading-relaxed">
              Premium laundry and dry cleaning services. We pick up, wash, and deliver with care.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Location</span>
                <span className="text-slate-300">Owerri Municipal, Assumpta Ave,<br/>Beside Cathedral Church, Imo State</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Phone & WhatsApp</span>
                <a href="https://wa.me/2349039539162" className="text-slate-300 hover:text-cyan-400 transition-colors w-fit">0903 953 9162</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Business Hours</span>
                <span className="text-slate-300">Mon-Sat, 8am-6pm</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#calculator" className="hover:text-cyan-400 transition-colors">Price Calculator</a></li>
              <li><a href="#tracking" className="hover:text-cyan-400 transition-colors">Track Order</a></li>
              <li><a href="#payment" className="hover:text-cyan-400 transition-colors">Payment Details</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-[10px] uppercase tracking-[0.2em] flex flex-col sm:flex-row justify-between items-center text-slate-600 gap-4">
          <span>&copy; {new Date().getFullYear()} AY Laundry Services</span>
          <span>Modern Care &bull; Express Delivery &bull; Secure Payments</span>
        </div>
      </div>
    </footer>
  );
}
