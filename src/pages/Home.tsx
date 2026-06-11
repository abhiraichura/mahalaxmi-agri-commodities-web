import { Link } from 'react-router-dom'
import { ArrowUpRight, Shield, Search, Users, FileCheck } from 'lucide-react'
import ShaderBackground from '../components/ShaderBackground'
import TextScramble from '../components/TextScramble'
import ScrollReveal from '../components/ScrollReveal'
import Counter from '../components/Counter'

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

const processSteps = [
  {
    num: '01',
    icon: Search,
    title: 'Find Suppliers',
    desc: 'We identify and connect with verified suppliers across Gujarat and India who meet international export standards.',
  },
  {
    num: '02',
    icon: Shield,
    title: 'Quality Check',
    desc: 'Every batch is inspected for purity, moisture content, and compliance with export specifications before any deal.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Connect Parties',
    desc: 'We facilitate introductions and negotiations between Indian export houses and suppliers, ensuring fair terms for both.',
  },
  {
    num: '04',
    icon: FileCheck,
    title: 'Earn Commission',
    desc: 'We earn brokerage on every successful transaction, incentivizing us to deliver the best deals and quality assurance.',
  },
]

const products = [
  {
    category: 'Spices',
    name: 'Cumin Seeds',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=400&fit=crop',
    desc: 'Premium quality cumin with high oil content, sourced from Gujarat and Rajasthan.',
  },
  {
    category: 'Spices',
    name: 'Coriander Seeds',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=400&fit=crop',
    desc: 'Whole and split coriander seeds meeting international standards for flavor.',
  },
  {
    category: 'Oil Seeds',
    name: 'Black & White Sesame',
    image: 'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=600&h=400&fit=crop',
    desc: 'High-oil-content sesame seeds for confectionery and oil extraction.',
  },
  {
    category: 'Pulses',
    name: 'Mung (Green Gram)',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&h=400&fit=crop',
    desc: 'Premium green gram sourced from top Indian growing regions.',
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
    desc: 'High-quality cotton seed for oil extraction and cattle feed.',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-[#F5F5F0]">
        <ShaderBackground />
        <div className="relative z-20 w-full max-w-content mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20 pt-32 sm:pt-36">
          <div className="mb-5 sm:mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-[13px] font-bold text-gray-900 tracking-wide border border-gray-200/50">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ed1879" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
              Trusted Brokerage Since 2005
            </span>
          </div>

          <h1 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-[900px]">
            We connect Indian{' '}
            <TextScramble
              phrases={['Export Houses', 'Verified Suppliers', 'Quality Commodities', 'Global Markets']}
              className="text-brand-pink"
            />{' '}
            with premium agri commodities
          </h1>

          <p className="mt-6 sm:mt-8 max-w-[540px] text-[15px] sm:text-[17px] text-gray-600 leading-[1.65] font-medium">
            Commission agents connecting Indian export houses with verified suppliers of spices, pulses, and oil seeds. Quality assurance, transparent pricing, and seamless transactions.
          </p>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300 w-fit"
            >
              <TextRoll text="Explore Products" />
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                <ArrowUpRight size={16} className="text-brand-pink" />
              </span>
            </Link>

            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 border border-gray-200 transition-all duration-300 w-fit hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <TextRoll text="Get a Quote" />
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                <ArrowUpRight size={16} className="text-white" />
              </span>
            </Link>
          </div>

          <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            <div>
              <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-pink leading-none">
                <Counter target={21} />
              </div>
              <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.08em] font-semibold text-gray-500">Years of Trust</p>
            </div>
            <div>
              <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-pink leading-none">
                <Counter target={500} />
              </div>
              <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.08em] font-semibold text-gray-500">Transactions</p>
            </div>
            <div>
              <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-pink leading-none">
                <Counter target={50} />
              </div>
              <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.08em] font-semibold text-gray-500">Export Houses</p>
            </div>
            <div>
              <div className="text-[2.5rem] sm:text-[3rem] font-extrabold text-brand-pink leading-none">
                <Counter target={11} />
              </div>
              <p className="mt-2 text-[11px] sm:text-[12px] uppercase tracking-[0.08em] font-semibold text-gray-500">Commodities</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#FAFAF8] py-16 sm:py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">1</span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Process</span>
            </div>
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 max-w-[700px]">
              How our brokerage works
            </h2>
            <p className="mt-4 text-[15px] sm:text-[17px] text-gray-600 leading-[1.6] font-medium max-w-[540px]">
              We simplify the supply chain by connecting the right suppliers with the right export houses.
            </p>
          </ScrollReveal>

          <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent hover:-translate-y-2">
                  <span className="absolute top-4 right-5 text-[4rem] font-black text-brand-pink/[0.06] leading-none select-none">
                    {step.num}
                  </span>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink mb-5 transition-colors duration-300 group-hover:bg-brand-pink group-hover:text-white">
                      <step.icon size={22} strokeWidth={2} />
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.7]">{step.desc}</p>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">2</span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Portfolio</span>
            </div>
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
              Commodities we broker
            </h2>
          </ScrollReveal>

          <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 80}>
                <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent hover:-translate-y-2">
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 transition-colors duration-300"
            >
              <TextRoll text="View All Products" />
              <span className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                <ArrowUpRight size={16} className="text-brand-pink" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative overflow-hidden bg-gradient-to-r from-brand-pink to-brand-pink-dark py-12 sm:py-16">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            {[
              { val: 21, label: 'Years of Experience' },
              { val: 500, label: 'Deals Closed' },
              { val: 50, label: 'Export Houses' },
              { val: 11, label: 'Commodities' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[2.5rem] sm:text-[3.5rem] font-black text-white leading-none mb-2">
                  <Counter target={stat.val} />
                </div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.08em] font-semibold text-white/70">{stat.label}</p>
              </div>
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
              Ready to source quality commodities?
            </h2>
            <p className="text-[15px] sm:text-[17px] text-white/70 max-w-[500px]">
              Export houses across India trust Mahalaxmi Agri Commodities for verified suppliers and seamless brokerage.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-pink text-[13px] sm:text-[14px] font-bold rounded-full pl-6 pr-2 py-2.5 transition-all duration-300 hover:shadow-xl shrink-0"
          >
            <TextRoll text="Contact Kishan Raichura" />
            <span className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
