import { useEffect, useRef, useState } from 'react'

/**
 * High-Visibility Minimal Monochrome Animated Cursor:
 * - High-contrast dual-tone design: Crisp black core with white outline on light canvas,
 *   auto-adapting to pure glowing white on dark surfaces (footer, black buttons, modals).
 * - Butter-smooth 60-120fps physics follower ring with linear interpolation.
 * - Interactive hover magnetism: Follower ring expands on links, buttons, and cards.
 * - Tactile mechanical feedback: Click snap and expanding ripple wave animation on mousedown.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const rippleRef = useRef<HTMLDivElement>(null)

  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const isHovered = useRef(false)
  const isClicking = useRef(false)
  const isDarkArea = useRef(false)
  const isInput = useRef(false)
  const isVisible = useRef(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only disable if user explicitly requested reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    setMounted(true)
    document.documentElement.classList.add('custom-cursor-active')

    let animationFrameId: number

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY

      if (!isVisible.current) {
        isVisible.current = true
        ringPos.current.x = e.clientX
        ringPos.current.y = e.clientY
      }

      // Check hovered element semantics
      const target = e.target as HTMLElement | null
      const inputEl = target?.closest('input, textarea, [contenteditable="true"]')
      isInput.current = !!inputEl

      const interactive = target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, summary, [data-cursor-hover]'
      )
      isHovered.current = !!interactive && !inputEl

      // Detect dark backgrounds (e.g. footer, black buttons, dark modals, video players)
      const closestThemed = target?.closest('.bg-black, footer, [data-theme="dark"], .bg-white')
      isDarkArea.current = closestThemed ? !closestThemed.classList.contains('bg-white') : false
    }

    const onMouseDown = (e: MouseEvent) => {
      isClicking.current = true

      // Trigger animated ripple wave
      const ripple = rippleRef.current
      if (ripple) {
        ripple.style.left = `${e.clientX}px`
        ripple.style.top = `${e.clientY}px`
        ripple.style.animation = 'none'
        void ripple.offsetWidth // Trigger reflow
        ripple.style.animation = isDarkArea.current
          ? 'cursor-ripple-dark 0.45s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
          : 'cursor-ripple 0.45s cubic-bezier(0.1, 0.8, 0.3, 1) forwards'
      }
    }

    const onMouseUp = () => {
      isClicking.current = false
    }

    const onMouseLeave = () => {
      isVisible.current = false
    }

    const onMouseEnter = () => {
      isVisible.current = true
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    // High performance physics loop
    const render = () => {
      const ease = 0.2
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease

      const dot = dotRef.current
      const ring = ringRef.current

      if (dot && ring) {
        const opacity = isVisible.current ? (isInput.current ? '0' : '1') : '0'

        // Center Target Dot: Zero Latency
        const dotScale = isClicking.current ? 0.7 : isHovered.current ? 1.35 : 1
        dot.style.opacity = opacity
        dot.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`

        // Outer Follower Ring: Inertial Spring + Dynamic Scale
        let ringScale = 1
        if (isClicking.current) {
          ringScale = 0.78
        } else if (isHovered.current) {
          ringScale = 1.6
        }

        ring.style.opacity = opacity
        ring.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${ringScale})`

        // Distinct visibility styling based on canvas contrast
        if (isDarkArea.current) {
          ring.style.borderColor = '#FFFFFF'
          ring.style.boxShadow = '0 0 0 1.5px rgba(0, 0, 0, 0.9), 0 0 16px rgba(255, 255, 255, 0.5)'
          dot.style.backgroundColor = '#FFFFFF'
          dot.style.boxShadow = '0 0 0 1.5px #000000, 0 0 10px rgba(255, 255, 255, 0.7)'
          ring.style.backgroundColor = isHovered.current ? 'rgba(255, 255, 255, 0.18)' : 'transparent'
        } else {
          ring.style.borderColor = '#000000'
          ring.style.boxShadow = '0 0 0 1.5px #FFFFFF, 0 4px 14px rgba(0, 0, 0, 0.18)'
          dot.style.backgroundColor = '#000000'
          dot.style.boxShadow = '0 0 0 1.5px #FFFFFF, 0 2px 6px rgba(0, 0, 0, 0.3)'
          ring.style.backgroundColor = isHovered.current ? 'rgba(0, 0, 0, 0.08)' : 'transparent'
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      document.documentElement.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Click Expanding Ripple Wave */}
      <div
        ref={rippleRef}
        className="fixed pointer-events-none rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0"
        style={{ width: '40px', height: '40px' }}
      />

      {/* Outer Follower Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-black pointer-events-none will-change-transform transition-[background-color,border-color,box-shadow] duration-200"
      />

      {/* Center Target Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-black pointer-events-none will-change-transform transition-transform duration-100"
      />
    </div>
  )
}
