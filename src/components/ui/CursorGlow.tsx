import { useEffect, useRef } from 'react'

/**
 * Ambient pointer effects for the whole page:
 *   1. A soft glow that follows the cursor (CSS custom properties).
 *   2. Delegated spotlight positions for every `.card-spot` element, so cards
 *      don't each need their own mousemove listener.
 * Writes straight to the DOM — pointer events never trigger React re-renders.
 * Hidden on touch-only devices and reduced motion.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return

    const move = (e: PointerEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      el.style.setProperty('--mx', `${(e.clientX / w) * 100}%`)
      el.style.setProperty('--my', `${(e.clientY / h) * 100}%`)

      const card = (e.target as Element | null)?.closest?.('.card-spot') as HTMLElement | null
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
        card.style.setProperty('--my', `${e.clientY - rect.top}px`)
      }
    }

    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}