import { useEffect, useRef, useState } from 'react'

interface CounterProps {
  target: number
  suffix?: string
  className?: string
}

export default function Counter({ target, suffix = '+', className = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const duration = 2000
            const startTime = performance.now()

            const update = (now: number) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const easeOut = 1 - Math.pow(1 - progress, 3)
              setCount(Math.floor(easeOut * target))
              if (progress < 1) requestAnimationFrame(update)
              else setCount(target)
            }
            requestAnimationFrame(update)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  )
}
