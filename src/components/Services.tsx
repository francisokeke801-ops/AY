import { motion } from 'motion/react';
import { Shirt, Briefcase, Bed, Sparkles, Droplets, Wind, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    id: 1,
    title: 'Everyday Wear',
    icon: Shirt,
    description: 'Standard washing, drying, and folding for your daily clothes, keeping them fresh and ready to wear.',
    items: ['T-Shirts & Polos', 'Jeans & Denim', 'Shorts', 'Casual Wear']
  },
  {
    id: 2,
    title: 'Formal & Business',
    icon: Briefcase,
    description: 'Specialized dry cleaning and pressing for your professional wardrobe to keep you looking sharp.',
    items: ['Complete Suits', 'Dress Shirts', 'Trousers', 'Blazers']
  },
  {
    id: 3,
    title: 'Beddings & Linens',
    icon: Bed,
    description: 'Deep cleaning for bulky items that don\'t fit in standard machines, ensuring a hygienic night\'s sleep.',
    items: ['Duvets & Comforters', 'Bedsheets', 'Pillowcases', 'Towels']
  },
  {
    id: 4,
    title: 'Delicate Care',
    icon: Sparkles,
    description: 'Gentle hand-washing and premium detergents for sensitive fabrics that require extra attention.',
    items: ['Dresses & Gowns', 'Silks & Satins', 'Lace items', 'Knits']
  },
  {
    id: 5,
    title: 'Stain Removal',
    icon: Droplets,
    description: 'Targeted professional stain treatment to rescue your favorite garments from tough accidents.',
    items: ['Oil & Grease', 'Wine & Coffee', 'Ink Stains', 'Mildew']
  },
  {
    id: 6,
    title: 'Ironing & Pressing',
    icon: Wind,
    description: 'Crisp, professional pressing services to eliminate wrinkles and give garments a brand-new look.',
    items: ['Shirts (Crisp Press)', 'Pleated Skirts', 'Uniforms', 'Traditional Wear']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="absolute top-[30%] left-[-100px] w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter uppercase">Our Services</h2>
          <p className="text-xl text-slate-400">Comprehensive garment care tailored to your exact needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/40 border border-white/5 p-8 rounded-3xl backdrop-blur-sm group hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">{service.title}</h3>
                <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>
                
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest mb-3">Includes:</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
