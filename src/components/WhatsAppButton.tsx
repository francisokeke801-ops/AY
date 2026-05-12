import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/2349039539162?text=Hello%20AY%20Laundry,%20I%20am%20chatting%20from%20your%20website!"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 left-6 z-50 group shadow-[0_0_20px_rgba(34,197,94,0.3)] rounded-full"
      aria-label="Chat on WhatsApp"
    >
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-2 rounded-full bg-[#25D366]/40 blur-md group-hover:bg-[#25D366]/60 transition-colors"
      />
      <div className="relative bg-[#25D366] text-white p-4 rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8" />
        <span className="absolute left-full ml-4 bg-black/80 text-white text-sm font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us!
        </span>
      </div>
    </a>
  );
}
