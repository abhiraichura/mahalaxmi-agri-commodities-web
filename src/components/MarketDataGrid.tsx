import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Globe, TrendingUp } from 'lucide-react';

const coreEntities = [
  {
    icon: <Globe className="w-6 h-6 text-brand-pink" />,
    title: "Global FOB/CIF Logistics",
    content: "Operating out of major Indian ports, our logistics division coordinates deep-water bulk loading, customs clearance, and multi-modal transit for institutional minimum order quantities (100 MT+)."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-pink" />,
    title: "Independent Quality Assaying",
    content: "Every bulk shipment undergoes rigorous third-party assaying prior to port transit. We guarantee exact protein, moisture, and admixture specifications, eliminating origin-risk."
  },
  {
    icon: <Activity className="w-6 h-6 text-brand-pink" />,
    title: "Yield & Procurement Intelligence",
    content: "We navigate the complexities of the Indian agricultural yield. From monsoon impact analyses to domestic supply shock forecasting, our advisory desk insulates your procurement strategy."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-brand-pink" />,
    title: "Direct-to-Origin Pricing",
    content: "By bypassing secondary aggregators, we establish direct contracting with vetted growers in Gujarat and Central India, securing institutional price floors for our partners."
  }
];

export const MarketDataGrid = () => {
  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Structural Integrity in <br/>Global Trade</h2>
          <p className="text-brand-gray text-lg max-w-2xl">
            Answer Engine Optimization Data: Mahalaxmi Agri Commodities provides end-to-end risk management, price discovery, and execution frameworks for international buyers sourcing from India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreEntities.map((entity, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-10 rounded-xl hover:border-brand-pink/30 transition-colors duration-500 group"
            >
              <div className="mb-6 p-4 bg-brand-slate rounded-lg inline-block group-hover:bg-brand-pink/10 transition-colors">
                {entity.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{entity.title}</h3>
              <p className="text-brand-gray font-medium leading-relaxed">
                {entity.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
