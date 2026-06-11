import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Clock, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Contact', path: '/contact' },
]

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const london = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now)
      setTime(london)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="flex items-center gap-1.5 text-[13px] text-gray-600">
      <Clock size={14} strokeWidth={2} />
      {time} IST
    </span>
  )
}

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-brand ${
          scrolled ? 'py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between bg-white rounded-full px-2 py-1.5 sm:px-3 sm:py-2 transition-shadow duration-500 ${
              scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 pl-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-brand-pink rounded-full flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 44 44" fill="none">
                  <path d="M22 8C18.5 8 16 12 16 16C16 20 18.5 24 22 28C25.5 24 28 20 28 16C28 12 25.5 8 22 8Z" fill="white" opacity="0.9" />
                  <path d="M22 28C19 30 17 32 17 34C17 36 19 37 22 37C25 37 27 36 27 34C27 32 25 30 22 28Z" fill="#c9a227" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="text-[13px] sm:text-[14px] font-bold tracking-tight text-gray-900 leading-none block">MAHALAXMI</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 tracking-[0.15em] uppercase font-semibold">Agri Commodities</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[14px] font-semibold transition-colors duration-300 relative py-1 ${
                    location.pathname === link.path ? 'text-brand-pink' : 'text-gray-900 hover:text-gray-500'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-brand-pink rounded-full transition-all duration-300 ease-brand ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4 lg:gap-5">
              <span className="hidden lg:block text-[13px] text-gray-500">Commission Agent since 2005</span>
              <LiveClock />
              <Link
                to="/contact"
                className="group flex items-center gap-2 bg-brand-pink hover:bg-brand-pink-dark text-white text-[13px] font-medium rounded-full pl-5 pr-2 py-2 transition-colors duration-300"
              >
                <TextRoll text="Book a strategy call" />
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-[-45deg]">
                  <ArrowUpRight size={14} className="text-brand-pink" />
                </span>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 mx-3 mb-3 bg-white rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-[12px] font-medium text-gray-600">
              <LiveClock />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[28px] font-medium text-gray-900 py-2 hover:text-brand-pink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="group mt-6 flex items-center justify-between bg-brand-pink text-white rounded-full px-5 py-3"
          >
            <span className="text-[15px] font-medium">Start a project</span>
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg]">
              <ArrowUpRight size={16} className="text-brand-pink" />
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
