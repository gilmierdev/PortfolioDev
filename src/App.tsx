import { useState, useRef, useCallback } from 'react'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Approach from './components/sections/Approach'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import ProjectModal from './components/ui/ProjectModal'
import CursorGlow from './components/ui/CursorGlow'
import BackToTop from './components/layout/BackToTop'
import { useTheme } from './hooks/useTheme'
import type { Project } from './types'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const lastModalTriggerRef = useRef<number>(0)

  // Rate-limited modal opener to avoid spam clicking
  const handleSelectProject = useCallback((project: Project) => {
    const now = Date.now()
    if (now - lastModalTriggerRef.current < 600) {
      // Ignore rapid spam triggers
      return
    }
    lastModalTriggerRef.current = now
    setSelectedProject(project)
  }, [])

  return (
    <div className="w-full max-w-full overflow-x-hidden min-h-screen relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-xl font-mono text-xs shadow-lg"
      >
        Skip to main content
      </a>

      <ScrollProgress />
      <CursorGlow />
      <div className="noise-overlay" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main" className="w-full max-w-full overflow-x-hidden relative">
        <Hero onSelectProject={handleSelectProject} />
        <Skills />
        <Projects onSelect={handleSelectProject} />
        <Approach />
        <Services />
        <About theme={theme} />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <BackToTop />
    </div>
  )
}
