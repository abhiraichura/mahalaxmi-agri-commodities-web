import React from 'react'
import { ArrowRight, ShieldCheck, Milestone, Waypoints, Scale, CheckCircle2 } from 'lucide-react'

// Custom high-fidelity SVG component matching the pure geometry of your corporate asset logo
function LogoIcon({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 256 256" 
      className={className} 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Upper Central Flame / Petal Leaf */}
      <path d="M128 32C122 55 110 75 96 92C110 98 120 108 128 120C136 108 146 98 160 92C146 75 134 55 128 32Z" />
      {/* Middle Layer Petals Left & Right */}
      <path d="M128 120C112 102 90 90 64 88C78 108 86 130 88 154C102 146 116 134 128 120Z" />
      <path d="M128 120C140 134 154 146 168 154C170 130 178 108 192 88C166 90 144 102 128 120Z" />
      {/* Outer Horizon Petals */}
      <path d="M88 154C64 142 36 142 16 150C36 168 60 176 88 176C86 168 86 161 88 154Z" />
      <path d="M168 154C170 161 170 168 168 176C196 176 220 168 240 150C220 142 192 142 168 154Z" />
      {/* Lower Base Support Ring / Water Wave Ripple System */}
      <path d="M32 192C76 184 180 184 224 192C236 194 244 198 244 202C244 208 212 214 128 214C44 214 12 208 12 202C12 198 20 194 32 192ZM48 220C80 216 176 216 208 220C216 221 220 223 220 225C220 228 180 232 128 232C76 232 36 228 36 225C36 223 40 221 48 220Z" />
    </svg>
  )
}

export default function App() {
  return (
    <div className="flex flex-col bg-[#F5F5F5] text-black antialiased">
      
      {/* --- SECTION 1: HERO VIEWPORT CONTAINER --- */}
      <div className="h-screen flex flex-col overflow-hidden relative">
        
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-5">
          <div className="max-w-[88rem] mx-auto flex items-center justify-between">
            {/* Brand Logo & Core Typography Identifier */}
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="text-[#ed1879] group-hover:text-[#c7156b] transition-colors duration-200">
                <LogoIcon className="w-8 h-8" />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-black uppercase">
                Mahalaxmi
              </span>
            </div>
            
            {/* Center Utilities - Clean Minimalist Interface */}
            <div className="hidden md:flex items-center gap-8 text-base text-gray-700 font-medium">
              <a href="#portfolio" className="hover:text-black transition-colors duration-200">Portfolio</a>
              <a href="#process" className="hover:text-black transition-colors duration-200">Ecosystem</a>
              <a href="#standards" className="hover:text-black transition-colors duration-200">Quality Checks</a>
              <a href="#modes" className="hover:text-black transition-colors duration-200">Use Modes</a>
            </div>
            
            {/* Right Interactive Route */}
            <div>
              <a 
                href="#contact" 
                className="bg-black text-white text-base font-medium px-7 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-200 inline-block shadow-sm"
              >
                Trade Desk
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Main Block */}
        <section className="flex-1 px-6 pt-24 pb-8 flex items-end">
          <div className="max-w-[88rem] mx-auto w-full rounded-2xl overflow-hidden relative shadow-md bg-zinc-200" style={{ height: 'calc(100vh - 116px)' }}>
            
            {/* High-Fidelity Ambient Agricultural Video Canvas */}
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="object-cover absolute inset-0 w-full h-full filter brightness-[0.92] contrast-[1.02]"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4"
            />
            
            {/* Micro-grid Line Patterns Layer overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/90 via-white/40 to-transparent z-10 pointer-events-none" />

            {/* Content Display Panel */}
            <div className="relative z-20 flex flex-col items-start justify-start h-full p-8 md:p-14 pt-28 md:pt-32">
              <h1 
                className="text-black text-5xl md:text-7xl font-semibold leading-[1.05] max-w-2xl mb-5"
                style={{ letterSpacing: '-0.04em' }}
              >
                Your Agri Sourcing <br /> Works.
              </h1>
              
              <p 
                className="text-black/80 text-base md:text-lg max-w-md mb-8 leading-relaxed font-normal"
                style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif" }}
              >
                An premium institutional brokerage platform connecting global export houses with pristine, compliant agricultural commodities from India.
              </p>

              {/* Action Trigger Node */}
              <a 
                href="#contact"
                className="group inline-flex items-center gap-4 bg-black text-white text-base md:text-lg font-medium pl-8 pr-2 py-2 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                <span>Initiate Sourcing</span>
                <span className="bg-white rounded-full p-2 text-black group-hover:scale-105 transition-transform duration-200">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </a>

              {/* Infinite Commodity Marquee Engine */}
              <div className="mt-auto w-full max-w-xl overflow-hidden pt-8 border-t border-black/10">
                <div className="marquee-track">
                  {/* Duplicated List mapping for infinite loop flow */}
                  {[1, 2].map((loopIndex) => (
                    <React.Fragment key={loopIndex}>
                      <span className="mx-8 shrink-0 text-black/70 font-bold whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em', fontSize: '15px' }}>Cumin Seeds</span>
                      <span className="mx-8 shrink-0 text-black/70 font-black tracking-[0.08em] whitespace-nowrap uppercase" style={{ fontFamily: 'Arial, sans-serif', fontSize: '13px' }}>Coriander</span>
                      <span className="mx-8 shrink-0 text-black/70 font-semibold tracking-[0.01em] whitespace-nowrap italic" style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: '15px' }}>White Sesame</span>
                      <span className="mx-8 shrink-0 text-black/70 font-bold tracking-[0.12em] whitespace-nowrap uppercase" style={{ fontFamily: 'Courier New, monospace', fontSize: '13px' }}>Fennel Seeds</span>
                      <span className="mx-8 shrink-0 text-black/70 font-normal tracking-[-0.01em] whitespace-nowrap" style={{ fontFamily: 'Palatino, serif', fontSize: '16px' }}>Green Gram</span>
                      <span className="mx-8 shrink-0 text-black/70 font-normal tracking-[0.04em] whitespace-nowrap" style={{ fontFamily: 'Impact, sans-serif', fontSize: '14px' }}>Chickpea</span>
                      <span className="mx-8 shrink-0 text-black/70 font-bold tracking-[-0.03em] whitespace-nowrap" style={{ fontFamily: 'Verdana, sans-serif', fontSize: '13px' }}>Cotton Seed</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* --- SECTION 2: PORTFOLIO & VALUE MATRIX --- */}
      <section id="portfolio" className="bg-[#F5F5F5] px-6 py-24 border-b border-black/5">
        <div className="max-w-[88rem] mx-auto">
          
          {/* Section Heading Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
            <div>
              <h2 
                className="text-black text-4xl md:text-5xl font-semibold leading-tight mb-8"
                style={{ letterSpacing: '-0.03em' }}
              >
                Meet Mahalaxmi Agri.
              </h2>
              <a 
                href="#portfolio-grid"
                className="group inline-flex items-center gap-3 bg-black text-white text-sm font-medium pl-6 pr-1.5 py-1.5 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                <span>View Portfolio</span>
                <span className="bg-white rounded-full p-1.5 text-black">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
            <div>
              <p className="text-black/70 text-2xl md:text-3xl leading-relaxed font-normal">
                Mahalaxmi Agri Commodities is a risk-mitigated, quality-anchored brokerage gateway that lets your global trade scale smoothly while securing flawless lots directly from source processing belts.
              </p>
            </div>
          </div>

          {/* Interactive Bento Card Structure */}
          <div id="portfolio-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Visual Callout Feature Card (Spans 2 columns) */}
            <div 
              className="rounded-2xl overflow-hidden sm:col-span-2 shadow-sm min-h-80 flex flex-col justify-between p-8 relative group cursor-pointer"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&auto=format&fit=crop&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 z-10 transition-opacity duration-300 group-hover:opacity-90" />
              <div className="relative z-20">
                <span className="text-xs font-bold text-white/80 bg-white/10 px-3 py-1 rounded-full uppercase tracking-widest backdrop-blur-sm">Premium Selection</span>
                <h3 className="text-white text-3xl font-semibold mt-4 leading-snug tracking-tight">Cumin and Spice Lots That Bloom</h3>
              </div>
              <p className="relative z-20 text-white/80 text-base max-w-sm">
                Gain pristine export purity parameters as your crop volumes are rigorously inspected, cleaned, and optimized for international processing standards.
              </p>
            </div>

            {/* Matrix Block Card 2 */}
            <div className="bg-[#2B2644] rounded-2xl p-8 min-h-80 flex flex-col justify-between shadow-sm hover:scale-[1.01] transition-transform duration-200">
              <div className="text-purple-300 bg-white/5 p-3 rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-2xl font-semibold mb-3 leading-tight tracking-tight">Always Pure,<br />Always Pegged.</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Keep fully protected against moisture and impurity variants with on-demand access to real-time batch testing — no hidden defects or transaction risks.
                </p>
              </div>
            </div>

            {/* Matrix Block Card 3 */}
            <div className="bg-[#2B2644] rounded-2xl p-8 min-h-80 flex flex-col justify-between shadow-sm hover:scale-[1.01] transition-transform duration-200">
              <div className="text-purple-300 bg-white/5 p-3 rounded-xl w-fit">
                <Waypoints className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white text-2xl font-semibold mb-3 leading-tight tracking-tight">Fully<br />Automated.</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Skip the manual hassle of managing multi-point agrarian networks yourself. Mahalaxmi routes contracts seamlessly across verified suppliers in the background for you.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 3: REPUTATION & STAKEHOLDERS STREAMS --- */}
      <section className="bg-[#F5F5F5] px-6 py-16 border-b border-black/5">
        <div className="max-w-[88rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          
          <div className="md:col-span-1">
            <p className="text-black/70 text-base leading-relaxed font-medium">
              Trusted by premier international merchant houses and forward-thinking industry leaders since 2005.
            </p>
          </div>
          
          {/* Endless Network Marquee Engine */}
          <div className="md:col-span-3 overflow-hidden py-4 border-l border-black/10 pl-4 md:pl-8">
            <div className="backers-track">
              {[1, 2].map((loopIndex) => (
                <React.Fragment key={loopIndex}>
                  <span className="mx-10 shrink-0 text-black/50 font-normal whitespace-nowrap" style={{ fontFamily: 'Times New Roman, serif', letterSpacing: '0.02em', fontSize: '14px' }}>Global Sourcing Corp</span>
                  <span className="mx-10 shrink-0 text-black/50 font-black tracking-[0.08em] whitespace-nowrap uppercase" style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '16px' }}>UNJHA BULK</span>
                  <span className="mx-10 shrink-0 text-black/50 font-bold tracking-[0.05em] whitespace-nowrap" style={{ fontFamily: 'Impact, sans-serif', fontSize: '18px' }}>AGRO EXPORTS PLC</span>
                  <span className="mx-10 shrink-0 text-black/50 font-semibold tracking-[-0.02em] whitespace-nowrap" style={{ fontFamily: 'Georgia, serif', fontSize: '17px' }}>Indo-Gulf Mills</span>
                  <span className="mx-10 shrink-0 text-black/50 font-bold tracking-[-0.01em] whitespace-nowrap" style={{ fontFamily: 'Helvetica, sans-serif', fontSize: '15px' }}>EuroFoods Import</span>
                  <span className="mx-10 shrink-0 text-black/50 font-bold tracking-[0.06em] whitespace-nowrap uppercase" style={{ fontFamily: 'Verdana, sans-serif', fontSize: '14px' }}>SPICE TRADERS INC</span>
                  <span className="mx-10 shrink-0 text-black/50 font-bold tracking-[0.18em] whitespace-nowrap" style={{ fontFamily: 'Courier New, monospace', fontSize: '14px' }}>PACIFIC GRAINS</span>
                  <span className="mx-10 shrink-0 text-black/50 font-medium tracking-[0.03em] whitespace-nowrap" style={{ fontFamily: 'Palatino, serif', fontSize: '15px' }}>APMC Global Net</span>
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: DEPLOYMENT MODES / USE CASES --- */}
      <section id="modes" className="bg-[#F5F5F5] px-6 py-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Narrative Frame */}
            <div className="md:sticky md:top-24 md:pr-12">
              <span className="text-black/60 text-sm font-semibold tracking-wider uppercase block mb-3">Mahalaxmi in Practice</span>
              <h2 
                className="text-5xl md:text-7xl font-semibold leading-[1.05] text-black mb-6"
                style={{ letterSpacing: '-0.04em' }}
              >
                Trading modes.
              </h2>
              <p className="text-black/60 text-base leading-relaxed max-w-sm mb-10">
                Mahalaxmi powers a wide spectrum of integration modes for corporate buyers, manufacturing plants, and sovereign commodity treasuries requiring absolute safety, predictive pricing algorithms, and high-purity supply strings.
              </p>

              {/* Multi-layered features checklist */}
              <div className="space-y-4">
                {[
                  "Verified processor networks spanning Gujarat & Rajasthan",
                  "Comprehensive physical lab analysis with full documentation",
                  "Arbitrage protection and multi-month contract options",
                  "Strategic port delivery management (Mundra, Kandla)"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-black/80 font-medium text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#ed1879] shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Immersive Interactive Video Feature Block */}
            <div className="relative rounded-3xl overflow-hidden min-h-[640px] shadow-md bg-zinc-300 group">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="object-cover absolute inset-0 w-full h-full filter brightness-75 contrast-105 transition-transform duration-700 group-hover:scale-102"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_183428_ab5e672a-f608-4dcb-b319-f3e040f02e2d.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />

              {/* Video Overlay Content Layer */}
              <div className="relative z-20 flex flex-col justify-end h-full p-8 md:p-12 min-h-[640px]">
                <h3 
                  className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-4"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  Global Commerce
                </h3>
                <p className="text-white/80 text-base max-w-md mb-8 leading-relaxed">
                  Elevate your supply chain velocity by integrating our premium pipeline. Access trusted, high-yield grain and seed lots directly with zero localized operational vulnerabilities on your trading desks.
                </p>
                
                <a 
                  href="#contact" 
                  className="group/btn inline-flex items-center gap-3 text-white text-base font-semibold w-fit"
                >
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-black transition-colors duration-200">
                    <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </span>
                  <span className="border-b border-white/30 pb-0.5 group-hover/btn:border-white transition-colors">Review Contract Modes</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 5: CONTACT & DEAL CLOSURE PANEL --- */}
      <section id="contact" className="bg-[#2B2644] text-white px-6 py-24 rounded-t-[2.5rem] relative overflow-hidden">
        {/* Subtle geometric structural light ambient rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full border border-white/[0.02] pointer-events-none" />

        <div className="max-w-[40rem] mx-auto text-center relative z-10">
          <div className="text-[#ed1879] inline-block mb-6">
            <LogoIcon className="w-12 h-12 mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-none">
            Secure Your Crop Lots.
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed max-w-md mx-auto">
            Connect directly with Kishan Raichura's spot trade desk. Request specifications, custom purity allocations, or schedule warehouse lot inspections.
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 text-left bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">Trading Entity / Company</label>
                <input 
                  type="text" 
                  placeholder="e.g. Al-Jamil Food Industries" 
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ed1879] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">Commodity Assignment</label>
                <select className="w-full bg-zinc-800 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ed1879] transition-colors appearance-none">
                  <option>Premium Cumin Seeds (Unjha Belt)</option>
                  <option>Coriander Seeds (Split/Whole)</option>
                  <option>Sesame Seeds (Black / White)</option>
                  <option>Pulses / Mung Beans</option>
                  <option>Other / Custom Lot Sourcing</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">Sourcing Volume (Metric Tons)</label>
              <input 
                type="text" 
                placeholder="Container volumes or bulk lot weight" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#ed1879] transition-colors"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-white text-black hover:bg-zinc-100 font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm tracking-wide shadow-md"
            >
              Submit Formal Sourcing Request
            </button>
          </form>

          {/* Micro Footer Credits */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
            <div className="flex items-center gap-2">
              <LogoIcon className="w-4 h-4 text-[#ed1879]" />
              <span>© 2026 Mahalaxmi Agri Commodities. All Rights Reserved.</span>
            </div>
            <div className="space-x-4">
              <span>Rajkot Marketing Yard Office</span>
              <span>•</span>
              <span>Kishan Raichura Desk</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
