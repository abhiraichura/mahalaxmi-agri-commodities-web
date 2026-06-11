import { useEffect, useState } from 'react'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true)
      setTimeout(onComplete, 600)
    }, 1800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <svg width="40" height="40" viewBox="0 0 44 44" fill="none" className="animate-pulse">
          <circle cx="22" cy="22" r="22" fill="#ed1879" />
          <path d="M22 8C18.5 8 16 12 16 16C16 20 18.5 24 22 28C25.5 24 28 20 28 16C28 12 25.5 8 22 8Z" fill="white" opacity="0.9" />
          <path d="M22 28C19 30 17 32 17 34C17 36 19 37 22 37C25 37 27 36 27 34C27 32 25 30 22 28Z" fill="#c9a227" />
        </svg>
        <span className="text-xl font-extrabold text-brand-pink tracking-wider">MAHALAXMI</span>
      </div>
      <div className="w-36 h-[3px] bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-brand-pink to-brand-gold animate-[loadBar_1.5s_ease_forwards]" />
      </div>
      <style>{`
        @keyframes loadBar {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
