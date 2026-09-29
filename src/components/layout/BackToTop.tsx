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
      className="fixed bottom-6 right-6 z-40 h-10 px-3.5 rounded-full border border-gray-300 bg-white/95 backdrop-blur-md text-black flex items-center gap-1.5 text-xs font-mono font-semibold shadow-lg hover:border-black transition-all duration-200 hover:-translate-y-1 animate-fadeUp select-none active:scale-95"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))' }}
    >
      <ArrowUp className="w-3.5 h-3.5" />
      <span>{scrollProgress}%</span>
    </a>
  )
}
