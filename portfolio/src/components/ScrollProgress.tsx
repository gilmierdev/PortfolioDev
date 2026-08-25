import { useEffect, useRef } from 'react'

/**
 * Thin bar across the very top showing how far through the page you are.
 * Purely an orientation cue — the nav already conveys position semantically,
 * so this is hidden from assistive tech.
 *
 * Writes straight to the DOM node instead of going through state: scroll fires
 * often, and a re-render per event would be wasteful.
 */
export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // Arrow function, not a declaration: hoisting a `function` above the null
    // check would lose the narrowing on `bar`.
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed top-0 inset-x-0 h-[3px] z-[60] pointer-events-none" aria-hidden="true">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-primary to-secondary"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  )
}
