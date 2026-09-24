import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollY > 400)
      if (totalHeight > 0) {
        setScrollProgress(Math.round((scrollY / totalHeight) * 100))
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#home"
      aria-label="Scroll back to top of page"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 h-9 sm:h-10 px-3 sm:px-3.5 rounded-full border border-border bg-surface/90 backdrop-blur-md text-ink flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-semibold shadow-lg hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-1 animate-fadeUp select-none active:scale-95"
      style={{ bottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))' }}
    >
      <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      <span>{scrollProgress}%</span>
    </a>
  )
}
