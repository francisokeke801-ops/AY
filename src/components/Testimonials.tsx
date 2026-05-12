import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Chinedu Okafor",
    role: "Regular Customer",
    initials: "CO",
    rating: 5,
    text: "Incredible service! They picked up my clothes from Assumpta Ave and returned them looking brand new. Highly recommended in Owerri.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "First-time Customer",
    initials: "SJ",
    rating: 5,
    text: "The price calculator on the site makes it so easy. I knew exactly what I was paying before they even arrived. Very professional.",
  },
  {
    id: 3,
    name: "Emeka Nnamdi",
    role: "Business Professional",
    initials: "EN",
    rating: 4,
    text: "Great tracking feature. I can check exactly when my suits will be ready. A bit pricey but worth the quality of dry cleaning.",
  },
  {
    id: 4,
    name: "Amarachi Ike",
    role: "Local Resident",
    initials: "AI",
    rating: 5,
    text: "Their customer service on WhatsApp is top-notch. Responded within minutes and handled my urgent requests perfectly.",
  },
  {
    id: 5,
    name: "David O.",
    role: "Student",
    initials: "DO",
    rating: 5,
    text: "Best laundry service in Imo State. Period. My whites have never looked this bright since I bought them. Excellent experience all round.",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="absolute top-[20%] right-[-100px] w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Customer Reviews</h2>
          <p className="text-xl text-slate-400">See what our clients in Owerri are saying about us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-slate-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm flex flex-col ${index === 3 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-cyan-400 fill-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'text-slate-700'}`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-slate-300 flex-1 mb-8 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold uppercase tracking-widest text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest">{testimonial.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
