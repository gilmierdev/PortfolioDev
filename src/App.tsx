import { useState } from 'react'
import Navbar from './components/layout/Navbar'
import ScrollProgress from './components/layout/ScrollProgress'
import Projects from './components/sections/Projects'
import Hero from './components/sections/Hero'
import Approach from './components/sections/Approach'
import Services from './components/sections/Services'
import About from './components/sections/About'
import ProjectModal from './components/ui/ProjectModal'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/layout/BackToTop'
import { useTheme } from './hooks/useTheme'
import type { Project } from './types'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main id="main">
        <Hero />
        <Projects onSelect={setSelectedProject} />
        <Approach />
        <Services />
        <About theme={theme} />
        <Contact />
      </main>

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <BackToTop />
    </>
  )
}
