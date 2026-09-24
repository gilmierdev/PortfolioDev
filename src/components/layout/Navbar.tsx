import { useEffect, useState } from 'react'
import type { ThemeMode } from '../../types'

interface NavbarProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', step: '00' },
  { id: 'work', label: 'WORK', step: '01' },
  { id: 'approach', label: 'APPROACH', step: '02' },
  { id: 'services', label: 'SERVICES', step: '03' },
  { id: 'about', label: 'ABOUT', step: '04' },
  { id: 'contact', label: 'CONTACT', step: '06' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.getElementById(n.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The menu covers the page on a phone; Escape should always get you out.
  useEffect(() => {
    if (!mobileOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const activeItem = NAV_ITEMS.find((n) => n.id === activeId)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav
        className={`mx-auto mt-3 max-w-6xl rounded-none md:rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/5' : 'border border-transparent'
        }`}
        aria-label="Primary"
      >
        <a
          href="#home"
          className="group flex items-center gap-2 font-display font-bold text-lg"
          aria-label="Go to top"
        >
          <span className="w-9 h-9 rounded-xl grid place-items-center text-white btn-primary btn-shine shadow-md group-hover:-translate-y-0.5 transition-transform">
            G
          </span>
          <span className="hidden sm:inline">
            GilmierDev<span className="text-secondary text-gradient">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-6 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={`nav-tab transition-colors ${
                  activeId === item.id ? 'active text-primary font-semibold' : 'hover:text-primary'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-xl grid place-items-center border border-border hover:border-primary hover:text-primary transition-all hover:-translate-y-0.5"
          >
            <span key={theme} className="animate-popIn inline-grid">
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              )}
            </span>
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobileMenu"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden h-10 pl-3 pr-2.5 rounded-xl flex items-center gap-2 border border-border font-mono text-sm active:scale-95 transition-transform"
          >
            <span className="text-muted">{activeItem?.label ?? 'menu'}</span>
            <span className="relative w-5 h-5" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-0 rotate-90' : 'opacity-100'}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-5 h-5 absolute inset-0 transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobileMenu" className="md:hidden mx-3 mt-2 rounded-2xl overflow-hidden">
          <div className="glass p-2">
            <ul className="flex flex-col font-mono text-sm">
              {NAV_ITEMS.map((item, i) => (
                <li key={item.id} className="animate-fadeUp" style={{ animationDelay: `${i * 45}ms` }}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileOpen(false)}
                    aria-current={activeId === item.id ? 'true' : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                      activeId === item.id
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'hover:bg-surface2'
                    }`}
                  >
                    <span className={activeId === item.id ? 'text-primary' : 'text-muted'}>
                      {item.step}
                    </span>
                    {item.label}
                    {activeId === item.id && (
                      <span className="ml-auto text-xs text-primary">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="sr-only"> — current section</span>
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}