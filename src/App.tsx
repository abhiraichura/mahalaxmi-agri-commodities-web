import React from 'react'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

// Custom Logo SVG matching your uploaded Mahalaxmi Lotus Logo
function LogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lotusGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ed1879" />
          <stop offset="100%" stopColor="#f9a826" />
        </linearGradient>
      </defs>
      <g fill="url(#lotusGradient)">
        {/* Lotus Petals */}
        <path d="M128 20C120 50 105 75 90 95C108 102 120 115 128 130C136 115 148 102 166 95C151 75 136 50 128 20Z" />
        <path d="M128 130C110 110 85 95 55 90C72 115 82 140 85 165C102 155 115 142 128 130Z" />
        <path d="M128 130C146 110 171 95 201 90C184 115 174 140 171 165C154 155 141 142 128 130Z" />
        <path d="M85 165C55 150 25 150 5 160C30 180 60 190 90 190C88 180 86 172 85 165Z" />
        <path d="M171 165C201 150 231 150 251 160C226 180 196 190 166 190C168 180 170 172 171 165Z" />
        {/* Water Waves / Ripples */}
        <path d="M30 205C75 195 181 195 226 205C240 208 248 212 248 216C248 224 210 230 128 230C46 230 8 224 8 216C8 212 16 208 30 205ZM45 235C80 230 176 230 211 235C220 236 225 238 225 240C225 244 180 248 128 248C76 248 31 244 31 240C31 238 36 236 45 235Z" />
      </g>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F5F5F5] text-black antialiased min-h-screen">
      
      {/* 1. HERO SECTION (Wrapped in h-screen viewport) */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        
        {/* Absolute Transparent Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="max-w-[88rem] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-9 h-9" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-none">MAHALAXMI</span>
                <span className="text-[10px] tracking-[0.1em] text-white/80 font-medium uppercase mt-0.5">Agri Commodities</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-base text-white/90 font-medium">
              <a href="#story" className="hover:text-white transition-colors duration-200">Our Story</a>
              <a href="#portfolio" className="hover:text-white transition-colors duration-200">Portfolio</a>
              <a href="#values" className="hover:text-white transition-colors duration-200">Values</a>
              <a href="#network" className="hover:text-white transition-colors duration-200">Network</a>
            </div>
            
            <a href="#contact" className="bg-white text-black text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-100 transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </nav>

        {/* Hero Card */}
        <section className="flex-1 px-6 pt-20 pb-6 flex items-end">
          <div className="max-w-[88rem] mx-auto w-full rounded-2xl overflow-hidden relative" style={{ height: 'calc(100vh - 96px)' }}>
            
            {/* Background Image (Using your original Unsplash asset) */}
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=85"
              alt="Indian Agricultural Market"
              className="object-cover absolute inset-0 w-full h-full filter brightness-[0.6] contrast-105 scale-105"
            />
            
            <div className="relative z-20 flex flex-col items-start justify-start h-full p-8 md:p-12 pt-36">
              <h1 className="text-white text-5xl md:text-7xl font-semibold leading-[1.05] max-w-3xl mb-4" style={{ letterSpacing: '-0.04em' }}>
                Two decades of trust<br/>in Indian agri trade.
              </h1>
              
              <p className="text-white/80 text-base md:text-lg max-w-lg mb-10 leading-relaxed font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                Founded in 2005 by Kishan Raichura, Mahalaxmi Agri Commodities has grown into one of Rajkot's most respected agri commodity brokerage firms.
              </p>

              <a href="#contact" className="inline-flex items-center gap-3 bg-white text-black text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-100 transition-colors">
                <span>Start a Conversation</span>
                <span className="bg-black rounded-full p-2 text-white">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              {/* Commodity Marquee replacing the brand marquee */}
              <div className="mt-auto w-full max-w-2xl overflow-hidden pt-8 border-t border-white/20">
                <div className="marquee-track">
                  {[1, 2].map((loop) => (
                    <React.Fragment key={loop}>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize: '15px' }}>Cumin Seeds</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap uppercase" style={{ fontFamily: 'Arial, sans-serif', fontWeight: 900, letterSpacing: '0.08em', fontSize: '13px' }}>Coriander</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap italic" style={{ fontFamily: 'Trebuchet MS, sans-serif', fontWeight: 600, fontSize: '15px' }}>White Sesame</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap uppercase" style={{ fontFamily: 'Courier New, monospace', fontWeight: 700, letterSpacing: '0.12em', fontSize: '13px' }}>Fennel Seeds</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap" style={{ fontFamily: 'Palatino, serif', fontSize: '16px' }}>Mung (Green Gram)</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap uppercase" style={{ fontFamily: 'Impact, sans-serif', letterSpacing: '0.04em', fontSize: '14px' }}>Chickpea</span>
                      <span className="mx-7 shrink-0 text-white/70 whitespace-nowrap" style={{ fontFamily: 'Verdana, sans-serif', fontWeight: 700, letterSpacing: '-0.03em', fontSize: '13px' }}>Cotton Seed</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2. OUR STORY & VALUES (Info Section) */}
      <section id="story" className="px-6 py-24">
        <div className="max-w-[88rem] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 className="text-black text-4xl md:text-5xl font-semibold leading-tight mb-8" style={{ letterSpacing: '-0.03em' }}>
                Building bridges between Indian exporters & suppliers.
              </h2>
              <a href="#values" className="inline-flex items-center gap-3 bg-black text-white text-base font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-colors">
                <span>Our Values</span>
                <span className="bg-white rounded-full p-1.5 text-black">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed">
                Based in Rajkot, Gujarat — the heart of India's spice and oil seed trade — we have built a reputation for integrity, transparency, and results. We ensure every deal is fair, compliant, and profitable.
              </p>
            </div>
          </div>

          {/* Bento Grid for Values */}
          <div id="values" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1 (Large Image Card) */}
            <div 
              className="rounded-2xl sm:col-span-2 overflow-hidden p-8 min-h-[320px] flex flex-col justify-between relative group"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10">
                <div className="bg-white/20 backdrop-blur-md w-fit p-3 rounded-xl text-white mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-white text-3xl font-semibold leading-snug" style={{ letterSpacing: '-0.02em' }}>Quality Assurance</h3>
              </div>
              <p className="relative z-10 text-white/90 text-base max-w-sm">
                We personally inspect commodities for moisture, purity, and grade. No substandard product reaches our export house clients.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#2B2644] rounded-2xl p-8 min-h-[320px] flex flex-col justify-between">
              <div className="bg-white/10 w-fit p-3 rounded-xl text-white">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-2xl font-semibold whitespace-pre-line mb-3">Integrity</h4>
                <p className="text-white/60 text-base">
                  We believe in transparent dealings. Every supplier is vetted, every quality claim is verified, and every price is fair.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#2B2644] rounded-2xl p-8 min-h-[320px] flex flex-col justify-between">
              <div className="bg-white/10 w-fit p-3 rounded-xl text-white">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-2xl font-semibold whitespace-pre-line mb-3">Timeliness</h4>
                <p className="text-white/60 text-base">
                  In agri trade, timing is everything. We ensure loading deadlines are met and documentation is ready on schedule.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR NETWORK / USE CASES */}
      <section id="network" className="px-6 py-24 bg-white rounded-t-[3rem]">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="md:pr-12">
            <span className="text-black/60 text-sm font-semibold mb-2 block uppercase tracking-wider">Our Network</span>
            <h2 className="text-5xl md:text-6xl font-semibold leading-none mb-6 text-black" style={{ letterSpacing: '-0.04em' }}>
              Who we work with.
            </h2>
            <p className="text-black/60 text-lg leading-relaxed max-w-md mb-8">
              Our brokerage model connects two sides of the Indian agri trade ecosystem, facilitating hundreds of successful transactions worldwide.
            </p>
            
            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-gray-200 bg-[#F5F5F5] hover:border-black/20 transition-colors">
                <h3 className="text-xl font-semibold text-black mb-2">Indian Export Houses</h3>
                <p className="text-black/70 text-base">
                  We understand quality requirements, documentation needs, and loading schedules. We find export companies the right suppliers at the right price.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-200 bg-[#F5F5F5] hover:border-black/20 transition-colors">
                <h3 className="text-xl font-semibold text-black mb-2">Verified Suppliers</h3>
                <p className="text-black/70 text-base">
                  We maintain a curated network of farmers, millers, and traders across Gujarat, Rajasthan, and MP. Each is vetted for consistency and reliability.
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden min-h-[600px] h-full">
            <img 
              src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1200&q=80"
              alt="Spices and Commodities"
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* 4. FOOTER / CTA */}
      <section id="contact" className="bg-[#2B2644] text-white px-6 py-24 relative overflow-hidden">
        <div className="max-w-[88rem] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4" style={{ letterSpacing: '-0.03em' }}>
              Let's discuss your<br/>sourcing needs.
            </h2>
            <p className="text-white/70 text-lg max-w-md mx-auto lg:mx-0">
              Whether you are an export house looking for reliable suppliers or a supplier seeking export opportunities, we are here to help.
            </p>
          </div>

          <div className="shrink-0 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm w-full max-w-md">
            <div className="mb-8">
              <LogoIcon className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-semibold">Contact Mahalaxmi</h3>
              <p className="text-white/60 mt-2">Reach out to our Rajkot office to source standard portfolio commodities or request specific requirements.</p>
            </div>
            
            <button className="w-full bg-white text-black text-base font-semibold py-4 rounded-xl hover:bg-gray-200 transition-colors">
              Enquire Now
            </button>
          </div>
          
        </div>
      </section>

    </div>
  )
}
