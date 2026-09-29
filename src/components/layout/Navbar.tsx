import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { CONFIG } from '../../data/config'

const NAV_ITEMS = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'work', label: 'PROJECT' },
  { id: 'services', label: 'SERVICES' },
]

export default function Navbar() {
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
      { rootMargin: '-25% 0px -40% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Header elevation on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on Escape
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
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden animate-fadeUp"
        />
      )}

      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4 sm:pt-6 pointer-events-none">
        <nav
          className={`mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 rounded-full ${
            scrolled || mobileOpen
              ? 'bg-white/95 backdrop-blur-md border border-gray-200 shadow-md'
              : 'bg-white/80 backdrop-blur-sm border border-transparent'
          }`}
          aria-label="Primary navigation"
        >
          {/* Custom Brand Logo */}
          <a
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="group flex items-center gap-2 font-display font-bold text-base sm:text-lg tracking-tight text-black"
            aria-label="GilmierDev - Return to top"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center font-mono shadow-sm group-hover:scale-105 transition-transform">
              G
            </span>
            <span className="tracking-tight text-sm sm:text-base">
              GILMIER<span className="text-gray-400 font-medium">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active ? 'page' : undefined}
                    className={`px-5 py-2 rounded-full border transition-all duration-200 inline-block ${
                      active
                        ? 'bg-black text-white border-black shadow-sm'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all shadow-sm"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="hidden sm:flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 hover:border-black text-xs font-mono font-semibold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-all shadow-sm"
              title="Let's Build"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-9 h-9 rounded-full border border-gray-200 text-black flex items-center justify-center hover:border-black transition-all active:scale-95"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Dropdown */}
        {mobileOpen && (
          <div
            id="mobileMenu"
            className="md:hidden mt-2 rounded-3xl border border-gray-200 p-5 pointer-events-auto shadow-2xl animate-fadeUp bg-white"
          >
            <ul className="flex flex-col space-y-2 text-xs font-semibold uppercase tracking-wider">
              {NAV_ITEMS.map((item) => {
                const active = activeId === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between px-5 py-3 rounded-full border transition-all ${
                        active
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-200 hover:border-black'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span>→</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="mt-4 pt-3 border-t border-gray-200 flex gap-2">
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full border border-gray-300 text-xs font-semibold uppercase tracking-wider text-black hover:border-black transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
              >
                <span>Connect</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}