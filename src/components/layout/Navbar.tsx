import { useEffect, useState } from 'react'
import { Sun, Moon, Menu, X, Mail } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { CONFIG } from '../../data/config'
import type { ThemeMode } from '../../types'

interface NavbarProps {
  theme: ThemeMode
  onToggleTheme: () => void
}

const NAV_ITEMS = [
  { id: 'home', label: 'HOME', step: '00' },
  { id: 'skills', label: 'STACK', step: '01' },
  { id: 'work', label: 'WORK', step: '02' },
  { id: 'approach', label: 'APPROACH', step: '03' },
  { id: 'services', label: 'SERVICES', step: '04' },
  { id: 'about', label: 'ABOUT', step: '05' },
  { id: 'contact', label: 'CONTACT', step: '06' },
]

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  // Track active section on scroll
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
      { rootMargin: '-30% 0px -45% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Header glass effect on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 15)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape & lock body scroll on mobile
  useEffect(() => {
    if (!mobileOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {mobileOpen && (
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden animate-fadeUp"
        />
      )}

      <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-6 pt-3 pointer-events-none">
        <nav
          className={`mx-auto max-w-6xl rounded-2xl px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
            scrolled || mobileOpen
              ? 'glass shadow-xl shadow-black/5 border border-border bg-surface/90 backdrop-blur-md'
              : 'bg-transparent border border-transparent'
          }`}
          aria-label="Primary navigation"
        >
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-2 font-display font-bold text-base sm:text-lg text-ink"
            aria-label="GilmierDev - Return to top"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg grid place-items-center text-white bg-primary shadow-sm group-hover:scale-105 transition-transform font-bold text-xs sm:text-sm">
              G
            </span>
            <span className="tracking-tight text-sm sm:text-base">
              Gilmier<span className="text-primary">Dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-1 font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'page' : undefined}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 inline-flex items-center gap-1.5 ${
                      active
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-muted hover:text-ink hover:bg-surface2'
                    }`}
                  >
                    <span className={active ? 'text-primary/70' : 'text-muted/60'}>
                      {item.step}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Switcher Button */}
            <button
              type="button"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={onToggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-border bg-surface/80 hover:bg-surface text-ink grid place-items-center transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-8 h-8 rounded-xl border border-border bg-surface/80 text-ink grid place-items-center transition-all active:scale-95"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Dropdown */}
        {mobileOpen && (
          <div
            id="mobileMenu"
            className="md:hidden mt-2 rounded-2xl glass border border-border p-3.5 pointer-events-auto shadow-2xl animate-fadeUp max-h-[82vh] overflow-y-auto bg-surface/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col font-mono text-xs space-y-1">
              {NAV_ITEMS.map((item) => {
                const active = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors active:scale-[0.98] ${
                        active
                          ? 'bg-primary text-white font-semibold shadow-sm'
                          : 'text-ink hover:bg-surface2'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={active ? 'text-white/80' : 'text-primary'}>
                          {item.step}
                        </span>
                        <span className="text-sm">{item.label}</span>
                      </span>
                      {active ? (
                        <span className="w-2 h-2 rounded-full bg-white" />
                      ) : (
                        <span className="text-muted text-[10px]">→</span>
                      )}
                    </a>
                  </li>
                )
              })}
            </ul>

            {/* Mobile Quick Action Footer */}
            <div className="mt-4 pt-3 border-t border-border grid grid-cols-2 gap-2">
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-border bg-surface2 text-xs font-mono text-ink active:scale-95 transition-transform"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${CONFIG.email}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-mono font-semibold active:scale-95 transition-transform shadow-sm"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}