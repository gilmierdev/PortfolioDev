import { useEffect, useState } from 'react'

/**
 * Appears once you are past the hero. Sits bottom-LEFT on purpose — the chat
 * widget owns bottom-right, and two stacked floating buttons in one corner is
 * how you end up tapping the wrong one on a phone.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > 700)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!visible) return null

  return (
    <a
      href="#home"
      className="fixed bottom-5 left-5 z-40 h-11 pl-3 pr-4 rounded-xl glass border border-border flex items-center gap-2 text-sm font-semibold hover:border-primary hover:text-primary transition-colors animate-fadeUp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
      Top
    </a>
  )
}
