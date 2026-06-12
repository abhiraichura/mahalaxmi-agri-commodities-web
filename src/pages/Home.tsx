import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Globe2, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export const Home = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div variants={stagger} className="lg:w-1/2">
          <motion.div variants={fadeUp} className="inline-block border border-brand-pink/20 bg-brand-pink/5 text-brand-pink px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-8">
            Global Trade. Local Roots.
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] text-brand-slate mb-8">
            Cultivating the <br />
            <span className="text-brand-pink">future of bulk</span> <br />
            commodities.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-muted font-medium max-w-lg mb-10 leading-relaxed">
            We are a premier B2B brokerage bridging India's finest agricultural yield with global export houses. Transparency, volume, and absolute quality control.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold shadow-agency-soft hover:bg-brand-pink transition-colors duration-300">
              Partner with us
            </Link>
            <Link to="/about" className="bg-white border border-gray-200 text-brand-slate px-8 py-4 rounded-full font-bold hover:border-brand-pink hover:text-brand-pink transition-colors duration-300">
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} className="lg:w-1/2 w-full">
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1595805210986-1d137b01b63d?q=80&w=1200&auto=format&fit=crop" 
              alt="Agriculture" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid (Agency Style) */}
      <section className="bg-brand-light py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-brand-slate">
              Institutional scale.<br/><span className="text-brand-muted font-light">Boutique execution.</span>
            </h2>
            <Link to="/services" className="group flex items-center gap-2 text-brand-pink font-bold hover:opacity-80 transition-opacity">
              View all services <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe2, title: 'Global Sourcing', desc: 'Direct connections with vetted growers ensuring premium baseline quality before processing.' },
              { icon: Shield, title: 'Risk Management', desc: 'Navigating price volatility and domestic supply shocks to lock in your cost-basis.' },
              { icon: TrendingUp, title: 'Logistics & Export', desc: 'Seamless FOB/CIF coordination out of major Indian ports for absolute peace of mind.' }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className="bg-white p-10 rounded-[32px] shadow-agency-soft hover:shadow-xl transition-shadow duration-300 border border-gray-50"
              >
                <service.icon className="w-12 h-12 text-brand-pink mb-8" />
                <h3 className="text-2xl font-bold text-brand-slate mb-4">{service.title}</h3>
                <p className="text-brand-muted font-medium leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
