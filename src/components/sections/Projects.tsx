import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import type { Project } from '../../types'

interface ProjectsProps {
  onSelect: (project: Project) => void
}

export default function Projects({ onSelect }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(CONFIG.projects.map((p) => p.category)))
    return ['All', ...unique]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return CONFIG.projects
    return CONFIG.projects.filter((p) => p.category === selectedFilter)
  }, [selectedFilter])

  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white text-black relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main Section Heading */}
        <div className="text-center space-y-2.5">
          <Reveal as="p" className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
            02 // SELECTED WORK & CASE STUDIES
          </Reveal>
          <Reveal as="h2" className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight hero-headline-gradient">
            FEATURED BUILDS
          </Reveal>
          <Reveal as="p" className="max-w-lg mx-auto text-xs sm:text-sm text-gray-500 font-mono pt-1">
            Engineered from scratch. Solving real systems, offline storage & authentication challenges.
          </Reveal>

          {/* Centered Accent Pill Bar */}
          <div className="pt-2">
            <div className="w-14 h-1 rounded-full bg-black mx-auto" />
          </div>
        </div>

        {/* Filter Navigation Row */}
        <div className="mt-10 sm:mt-12 flex items-center justify-between gap-4 flex-wrap pb-8 border-b border-gray-200">
          <div className="flex flex-wrap gap-2.5">
            {categories.map((c) => {
              const active = selectedFilter === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedFilter(c)}
                  className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-95 ${
                    active
                      ? 'bg-black text-white border border-black shadow-sm'
                      : 'bg-white text-black border border-gray-300 hover:border-black'
                  }`}
                >
                  {c === 'All' ? 'ALL SYSTEMS' : c.toUpperCase()}
                </button>
              )
            })}
          </div>

          <a
            href="#services"
            aria-label="View services"
            className="circle-arrow-btn group hover:scale-105 ml-auto"
          >
            <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Project Cards Grid (123.png Structure in Portfolio Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12">
          {filteredProjects.map((project, i) => (
            <Reveal
              key={project.title}
              as="div"
              delay={i * 80}
              variant="up"
              className="h-full"
            >
              <article
                className="h-full group flex flex-col justify-between rounded-2xl bg-white border border-gray-200 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-black hover:shadow-xl cursor-pointer shadow-sm"
                onClick={() => onSelect(project)}
              >
                <div>
                  {/* Top Image Preview Frame */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#F4F4F6] border border-gray-200">
                    {/* Number Badge (01, 02, 03) */}
                    <span className="absolute top-3.5 left-4 font-mono font-bold text-xs sm:text-sm z-10 select-none px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-sm text-white border border-white/20 shadow-md">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Preview Image */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl select-none">
                        {project.emoji}
                      </div>
                    )}
                  </div>

                  {/* Project Title & Description */}
                  <div className="mt-4 space-y-1.5">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-black uppercase tracking-tight group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black font-semibold px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200">
                    {project.category}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      onSelect(project)
                    }}
                    className="text-black hover:text-gray-600 text-xs sm:text-sm font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}