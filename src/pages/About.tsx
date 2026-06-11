import { Link } from 'react-router-dom'
import { Shield, Award, Users, Clock, TrendingUp, MessageSquare, BookOpen, ArrowUpRight } from 'lucide-react'
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

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    desc: 'We believe in transparent dealings. Every supplier is vetted, every quality claim is verified, and every price is fair.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    desc: 'We personally inspect commodities for moisture, purity, and grade. No substandard product reaches our export house clients.',
  },
  {
    icon: Users,
    title: 'Relationship First',
    desc: 'We do not chase one-time deals. Our success is measured by long-term relationships with both suppliers and export houses.',
  },
  {
    icon: Clock,
    title: 'Timeliness',
    desc: 'In agri trade, timing is everything. We ensure loading deadlines are met and documentation is ready.',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    desc: 'From the first inquiry to final delivery, we keep both parties informed. Clear communication builds trust.',
  },
  {
    icon: TrendingUp,
    title: 'Market Knowledge',
    desc: 'Two decades in Rajkot\'s APMC markets give us unmatched insight into pricing trends and seasonal availability.',
  },
]

export default function About() {
  const headingClass = "text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 max-w-[800px]";

  return (
    <>
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-[#FAFAF8] pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-24">
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/5 blur-[120px]" />
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                <Users size={14} />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">About Us</span>
            </div>
            <h1 className={headingClass}>
              Two decades of trust in Indian agri trade
            </h1>
            <p className="mt-5 sm:mt-6 max-w-[600px] text-[15px] sm:text-[17px] text-gray-600 leading-[1.65] font-medium">
              Founded in 2005 by Kishan Raichura, Mahalaxmi Agri Commodities has grown into one of Rajkot&apos;s most respected agri commodity brokerage firms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-24">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.1)]">
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop"
                    alt="Indian agricultural market"
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute bottom-6 right-[-1rem] sm:right-[-1.5rem] bg-gradient-to-br from-brand-pink to-brand-pink-dark text-white p-5 sm:p-6 rounded-2xl shadow-[0_8px_32px_rgba(237,24,121,0.3)]">
                  <div className="text-[2.5rem] sm:text-[3rem] font-black leading-none">21+</div>
                  <div className="text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.05em] opacity-90 mt-1">Years of<br/>Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                  <BookOpen size={14} />
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Story</span>
              </div>
              <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-5">
                Building bridges between Indian exporters and suppliers
              </h2>
              <div className="space-y-4 text-[14px] sm:text-[15px] text-gray-600 leading-[1.7]">
                <p>Mahalaxmi Agri Commodities was established in 2005 with a simple mission: to connect Indian export houses with reliable, quality-focused agri commodity suppliers across India.</p>
                <p>Based in Rajkot, Gujarat — the heart of India's spice and oil seed trade — we have built a reputation for integrity, transparency, and results.</p>
                <p>Over the past two decades, we have facilitated hundreds of successful transactions, earning the trust of export houses that ship Indian agri products to markets across the Middle East, Europe, Southeast Asia, and North America.</p>
                <p>We do not export ourselves. We are commission agents — brokers who earn brokerage by ensuring that every deal between supplier and exporter is fair, compliant, and profitable for all parties involved.</p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Verified supplier network across Gujarat, Rajasthan & MP',
                  'Quality inspection and compliance management',
                  'Transparent pricing and fair brokerage terms',
                  'End-to-end transaction management',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[13px] sm:text-[14px] text-gray-700 font-medium">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ed1879" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#FAFAF8] py-16 sm:py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                  <Shield size={14} />
                </span>
                <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Values</span>
              </div>
              <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900">
                What drives us every day
              </h2>
              <p className="mt-3 text-[15px] sm:text-[17px] text-gray-600 max-w-[500px] mx-auto">
                Our core values are the foundation of every transaction we broker.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 80}>
                <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent hover:-translate-y-1.5">
                  <div className="w-14 h-14 bg-brand-pink/10 rounded-xl flex items-center justify-center text-brand-pink mb-5 transition-all duration-300 group-hover:bg-brand-pink group-hover:text-white">
                    <value.icon size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.7]">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-7 rounded-full bg-brand-pink text-white flex items-center justify-center text-[11px] font-semibold">
                <Users size={14} />
              </span>
              <span className="text-[12px] sm:text-[13px] font-medium border border-gray-200 rounded-full px-3 sm:px-4 py-1 sm:py-1.5">Our Network</span>
            </div>
            <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
              Who we work with
            </h2>
            <p className="text-[15px] sm:text-[17px] text-gray-600 max-w-[540px] mb-10 sm:mb-14">
              Our brokerage model connects two sides of the Indian agri trade ecosystem.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
            <ScrollReveal>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent border-l-4 border-l-brand-pink">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-pink to-brand-pink-dark rounded-xl flex items-center justify-center text-white mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3">Indian Export Houses</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.7]">
                  Our primary clients are Indian export companies that ship agri commodities to international markets. We understand their quality requirements, documentation needs, and loading schedules. We find them the right suppliers at the right price.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_12px_48px_rgba(0,0,0,0.08)] hover:border-transparent border-l-4 border-l-brand-gold">
                <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-[#a88a1e] rounded-xl flex items-center justify-center text-white mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold text-gray-900 mb-3">Verified Suppliers</h3>
                <p className="text-[13px] sm:text-[14px] text-gray-600 leading-[1.7]">
                  We maintain a curated network of farmers, millers, and traders across Gujarat, Rajasthan, and Madhya Pradesh. Each supplier is vetted for quality consistency, financial stability, and reliability before we recommend them to export houses.
                </p>
              </div>
            </ScrollReveal>
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
              Let's discuss your sourcing needs
            </h2>
            <p className="text-[15px] sm:text-[17px] text-white/70 max-w-[500px]">
              Whether you are an export house looking for reliable suppliers or a supplier seeking export opportunities, we are here to help.
            </p>
          </div>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-brand-pink text-[13px] sm:text-[14px] font-bold rounded-full pl-6 pr-2 py-2.5 transition-all duration-300 hover:shadow-xl shrink-0"
          >
            <TextRoll text="Start a Conversation" />
            <span className="w-8 h-8 bg-brand-pink rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
              <ArrowUpRight size={16} className="text-white" />
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
