import { motion } from 'framer-motion';

const commodities = [
  {
    name: "Premium Milling Wheat",
    specs: "High-Protein | Low Moisture | Cleaned",
    execution: "Secured direct-from-origin futures, stabilizing cost-basis for GCC food processors.",
    vol: "10,000+ MT Monthly Cap"
  },
  {
    name: "Raw & Refined Sugar",
    specs: "ICUMSA 45 - 1200 | Bulk Vessle",
    execution: "End-to-end contracting incorporating real-time price discovery against domestic mill output.",
    vol: "25,000+ MT Monthly Cap"
  },
  {
    name: "Groundnut & Oilseeds",
    specs: "HPS Groundnut | Sesame | Castor",
    execution: "Sourced directly from Saurashtra (Gujarat) yield zones, ensuring peak oil content and strict aflatoxin controls.",
    vol: "Custom Allocations"
  }
];

export const CommodityLedger = () => {
  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16 border-b border-white/10 pb-8">
          Asset Ledger & Executions
        </h2>

        <div className="flex flex-col gap-8">
          {commodities.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col md:flex-row md:items-center justify-between p-8 glass-panel rounded-xl group hover:bg-brand-slate/40 transition-colors"
            >
              <div className="md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-pink transition-colors">{item.name}</h3>
                <span className="text-sm font-bold tracking-widest text-brand-gray uppercase">{item.specs}</span>
              </div>
              <div className="md:w-1/2 mb-6 md:mb-0">
                <p className="text-brand-gray font-medium">{item.execution}</p>
              </div>
              <div className="md:w-1/6 text-left md:text-right">
                <span className="text-sm text-brand-pink font-bold border border-brand-pink/30 px-4 py-2 rounded-sm bg-brand-pink/5">
                  {item.vol}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
