import { motion } from 'framer-motion';

export const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-slate mb-12">
          Rooted in Rajkot.<br /> Built for the world.
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mt-20">
        <div className="rounded-[40px] overflow-hidden shadow-2xl h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1586771107445-d3af9e174465?q=80&w=1200&auto=format&fit=crop" 
            alt="Founders" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-brand-slate mb-6">Our Philosophy</h2>
          <div className="space-y-6 text-lg text-brand-muted font-medium leading-relaxed">
            <p>
              Mahalaxmi Agri Commodities was founded on a simple premise: the global agricultural supply chain is too opaque. We set out to build a brokerage that operates with the transparency of a modern tech agency and the grit of legacy traders.
            </p>
            <p>
              Based in the heart of Gujarat's agricultural hub, we bypass secondary aggregators. We work directly with the source. This means our institutional clients get unmatched quality control on bulk wheat, sugar, and oilseeds, alongside pricing structures that simply cannot be found on the open market.
            </p>
            <p className="text-brand-pink font-bold text-xl pt-6">
              We don't just broker trades. We architect secure supply chains.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
