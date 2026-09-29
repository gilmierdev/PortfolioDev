import { useState, useRef, useCallback } from 'react'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Approach from './components/sections/Approach'
import Contact from './components/sections/Contact'
import ProjectModal from './components/ui/ProjectModal'
import IntroTerminal from './components/ui/IntroTerminal'
import BackToTop from './components/layout/BackToTop'
import CustomCursor from './components/ui/CustomCursor'
import type { Project } from './types'

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [terminalOpen, setTerminalOpen] = useState(false)
  const lastModalTriggerRef = useRef<number>(0)

  // Rate-limited modal opener to avoid spam clicking
  const handleSelectProject = useCallback((project: Project) => {
    const now = Date.now()
    if (now - lastModalTriggerRef.current < 600) {
      return
    }
    lastModalTriggerRef.current = now
    setSelectedProject(project)
  }, [])

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen relative bg-white text-black">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-black focus:text-white focus:px-5 focus:py-2.5 focus:rounded-full font-mono text-xs uppercase tracking-wider shadow-lg font-bold"
      >
        Skip to main content
      </a>

      <CustomCursor />
      <ScrollProgress />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />

      <main id="main" className="w-full max-w-full overflow-x-hidden relative bg-white">
        {/* Exact Layout Flow Matching image.jpg */}
        <Hero
          onSelectProject={handleSelectProject}
          onToggleTerminal={() => setTerminalOpen((v) => !v)}
        />
        <About />
        <Projects onSelect={handleSelectProject} />
        <Skills />
        <Approach />
        <Contact />
      </main>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive CLI Terminal Dialog Modal */}
      {terminalOpen && (
        <dialog
          open
          className="fixed inset-0 z-50 p-4 sm:p-6 w-full h-full bg-black/60 backdrop-blur-sm flex items-center justify-center border-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) setTerminalOpen(false)
          }}
        >
          <div className="w-full max-w-2xl relative animate-popIn">
            <div className="flex justify-end pb-2">
              <button
                type="button"
                onClick={() => setTerminalOpen(false)}
                className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-mono font-semibold uppercase hover:bg-gray-200 transition-colors shadow-md"
              >
                Close CLI ✕
              </button>
            </div>
            <IntroTerminal
              onOpenProject={(proj) => {
                setTerminalOpen(false)
                handleSelectProject(proj)
              }}
            />
          </div>
        </dialog>
      )}

      <BackToTop />
    </div>
  )
}
