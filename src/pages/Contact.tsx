import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-brand-slate mb-8">
            Let's talk <br/> <span className="text-brand-pink">tonnage.</span>
          </h1>
          <p className="text-xl text-brand-muted font-medium mb-12">
            Reach out to our trading desk to discuss minimum order quantities, live market pricing, and export logistics.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-brand-muted mb-2">Headquarters</h3>
              <p className="text-xl font-bold text-brand-slate">Rajkot, Gujarat, India</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-brand-muted mb-2">Direct Line</h3>
              <p className="text-xl font-bold text-brand-slate">+91 (Trading Desk Number)</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-brand-muted mb-2">Email</h3>
              <p className="text-xl font-bold text-brand-pink">desk@mahalaxmiagri.com</p>
            </div>
          </div>
        </div>

        <div className="bg-brand-light p-10 md:p-14 rounded-[40px] shadow-agency-soft border border-gray-100">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-brand-slate uppercase tracking-wide">Company Name</label>
              <input type="text" className="bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-brand-pink transition-colors font-medium" placeholder="Global Exports Ltd." />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-brand-slate uppercase tracking-wide">Commodity Interest</label>
              <select className="bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-brand-pink transition-colors font-medium appearance-none">
                <option>Premium Wheat</option>
                <option>Raw Sugar</option>
                <option>Oilseeds & Pulses</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-brand-slate uppercase tracking-wide">Message</label>
              <textarea rows={4} className="bg-white border border-gray-200 px-6 py-4 rounded-xl focus:outline-none focus:border-brand-pink transition-colors font-medium resize-none" placeholder="Target volumes, port of destination..."></textarea>
            </div>
            <button type="button" className="bg-brand-pink text-white font-bold text-lg py-5 rounded-xl shadow-agency-pink mt-4 hover:scale-[1.02] transition-transform">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
