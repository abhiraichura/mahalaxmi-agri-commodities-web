import { useEffect, useRef, useState } from 'react'

interface TextScrambleProps {
  phrases: string[]
  className?: string
  interval?: number
}

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export default function TextScramble({ phrases, className = '', interval = 2800 }: TextScrambleProps) {
  const elRef = useRef<HTMLSpanElement>(null)
  const [current, setCurrent] = useState(phrases[0])
  const counterRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    const el = elRef.current
    if (!el) return

    let frame = 0
    let queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
    let resolveFn: (() => void) | null = null

    const setText = (newText: string) => {
      const oldText = el.innerText
      const length = Math.max(oldText.length, newText.length)
      queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 30)
        const end = start + Math.floor(Math.random() * 30)
        queue.push({ from, to, start, end })
      }
      frame = 0
      update()
      return new Promise<void>(r => { resolveFn = r })
    }

    const update = () => {
      let output = ''
      let complete = 0
      for (let i = 0; i < queue.length; i++) {
        let { from, to, start, end } = queue[i]
        let char = queue[i].char
        if (frame >= end) {
          complete++
          output += to
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = CHARS[Math.floor(Math.random() * CHARS.length)]
            queue[i].char = char
          }
          output += `<span style="color:#c9a227">${char}</span>`
        } else {
          output += from
        }
      }
      el.innerHTML = output
      if (complete === queue.length) {
        resolveFn?.()
      } else {
        frameRef.current = requestAnimationFrame(update)
        frame++
      }
    }

    const next = () => {
      counterRef.current = (counterRef.current + 1) % phrases.length
      setText(phrases[counterRef.current]).then(() => {
        setTimeout(next, interval)
      })
    }

    const timeout = setTimeout(next, 1500)
    return () => {
      clearTimeout(timeout)
      cancelAnimationFrame(frameRef.current)
    }
  }, [phrases, interval])

  return <span ref={elRef} className={className} dangerouslySetInnerHTML={{ __html: current }} />
}
