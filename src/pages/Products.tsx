import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

function TextRoll({ text }: { text: string }) {
  return (
    <span className="relative flex flex-col overflow-hidden h-[20px] leading-[20px]">
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
        <span className="block">{text}</span>
        <span className="block">{text}</span>
      </span>
    </span>
  )
}

const categories = ['All', 'Spices', 'Pulses', 'Oil Seeds', 'Cotton']

const allProducts = [
  {
    category: 'Spices',
    name: 'Cumin Seeds',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
    desc: 'Premium quality cumin with high oil content. Sourced from Gujarat and Rajasthan. Available in whole and powder form.',
  },
  {
    category: 'Spices',
    name: 'Coriander Seeds',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop',
    desc: 'Whole and split coriander seeds with optimal moisture content. Ideal for spice blends and oil extraction.',
  },
  {
    category: 'Spices',
    name: 'Fennel Seeds',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'Aromatic fennel seeds with high essential oil content. Perfect for spice blends and medicinal use.',
  },
  {
    category: 'Spices',
    name: 'Nigella Seeds',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'Premium black cumin seeds with high purity. Essential for Middle Eastern and South Asian cuisine.',
  },
  {
    category: 'Spices',
    name: 'Fenugreek Seeds',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'High-quality fenugreek with optimal bitterness and aroma. Used in spice mixes and medicinal applications.',
  },
  {
    category: 'Oil Seeds',
    name: 'Black Sesame Seeds',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'Premium black sesame with high oil content. Ideal for oil extraction, tahini production, and confectionery.',
  },
  {
    category: 'Oil Seeds',
    name: 'White Sesame Seeds',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'Cleaned and graded white sesame for bakery, confectionery, and oil extraction. Consistent supply year-round.',
  },
  {
    category: 'Pulses',
    name: 'Mung (Green Gram)',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    desc: 'Premium green gram with high protein content. Ideal for sprouting, dal, and export to Asian markets.',
  },
  {
    category: 'Pulses',
    name: 'Chickpea',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    desc: 'Desi and Kabuli chickpea varieties meeting international food safety standards.',
  },
  {
    category: 'Cotton',
    name: 'Cotton Seed',
    image: 'https://images.unsplash.com/photo-1594890899742-0d5c8e0b2e0a?w=600&h=400&fit=crop',
    desc: 'High-quality cotton seed for oil extraction and cattle feed. Sourced from Gujarat's cotton belt.',
  },
]

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeFilter)

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-[120px]" />
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Portfolio</span>
            </div>
            <h1 className={`text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-[800px]`}>
  Commodities we broker
</h1>
            <p className="mt-5 sm:mt-6 max-w-[600px] text-[15px] sm:text-[17px] text-gray-600 leading-[1.65] font-medium">
              From the spice markets of Unjha to the oil seed belts of Gujarat, we broker premium agri commodities that meet international export standards.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-14">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300 ${
                    activeFilter === cat
                      ? 'bg-brand-pink text-white shadow-[0_4px_16px_rgba(237,24,121,0.25)]'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-pink hover:text-brand-pink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 60}>
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent hover:-translate-y-2">
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="inline-flex items-center gap-1.5 bg-white text-gray-900 text-[12px] font-semibold px-3 py-1.5 rounded-full">
                        View Details
                        <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <span className="text-[11px] sm:text-[12px] font-bold text-brand-pink uppercase tracking-[0.08em]">{product.category}</span>
                    <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mt-1 mb-2">{product.name}</h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.6]">{product.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-pink to-brand-pink-dark py-16 sm:py-20 lg:py-24">
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-brand-gold/20 blur-[100px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px]" />
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium text-white leading-tight mb-3">
              Need a specific commodity?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-white/70 max-w-[500px]">
              We can source commodities beyond our standard portfolio. Tell us what you need and we will find the right suppliers.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-pink text-[13px] sm:text-[14px] font-bold rounded-full pl-6 pr-2 py-2.5 transition-all duration-300 hover:shadow-xl shrink-0"
          >
            <TextRoll text="Enquire Now" />
            <span className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
