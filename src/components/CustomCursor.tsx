import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0, cx: 0, cy: 0 })

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const onEnter = () => cursorRef.current?.classList.add('hover')
    const onLeave = () => cursorRef.current?.classList.remove('hover')

    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a, button, [data-cursor-hover]')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    let raf: number
    const animate = () => {
      pos.current.cx += (pos.current.x - pos.current.cx) * 0.15
      pos.current.cy += (pos.current.y - pos.current.cy) * 0.15
      if (cursorRef.current) {
        cursorRef.current.style.left = pos.current.cx + 'px'
        cursorRef.current.style.top = pos.current.cy + 'px'
      }
      raf = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed w-3.5 h-3.5 bg-brand-pink rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,background,border] duration-300 hidden md:block [&.hover]:w-12 [&.hover]:h-12 [&.hover]:bg-transparent [&.hover]:border-2 [&.hover]:border-brand-pink [&.hover]:mix-blend-normal"
    />
  )
}
