import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const HeroSEO = () => {
  return (
    <section className="relative z-10 min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl"
      >
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-3 glass-panel px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse" />
          <span className="text-sm font-semibold tracking-widest uppercase text-brand-gray">Rajkot, Gujarat • Global Export</span>
        </motion.div>

        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8">
          Institutional <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-white">
            Agriculture Procurement.
          </span>
        </motion.h1>

        <motion.p variants={item} className="text-lg md:text-xl text-brand-gray font-medium max-w-3xl leading-relaxed mb-12">
          Mahalaxmi Agri Commodities is the premier B2B brokerage bridging Indian agricultural yield with global markets. We engineer secure, high-volume supply chains for international export houses, specializing in strictly assayed bulk wheat, raw sugar, and oilseeds.
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-pink text-white px-8 py-4 font-bold tracking-wide rounded-sm hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_30px_rgba(222,42,114,0.3)]">
            Initiate Trade Desk
          </button>
          <button className="glass-panel text-white px-8 py-4 font-bold tracking-wide rounded-sm hover:bg-white/10 transition-colors duration-300">
            View Market Matrix
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};
