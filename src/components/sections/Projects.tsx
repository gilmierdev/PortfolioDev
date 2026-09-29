import { useMemo, useState } from 'react'
import {
  ExternalLink,
  Maximize2,
  ArrowUpRight,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import { GithubIcon } from '../ui/Icons'
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
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Section Heading with Custom Editorial Styling */}
        <div className="text-center space-y-2">
          <Reveal as="p" className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
            02 // SELECTED WORK & CASE STUDIES
          </Reveal>
          <Reveal as="h2" className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight hero-headline-gradient">
            FEATURED BUILDS
          </Reveal>
          <Reveal as="p" className="max-w-lg mx-auto text-xs sm:text-sm text-gray-500 font-mono pt-1">
            Engineered from scratch. Solving real systems, offline storage & authentication challenges.
          </Reveal>
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filteredProjects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 70}
              variant="up"
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Showcase Preview Frame */}
                <div
                  className="w-full aspect-[4/3] rounded-3xl border border-gray-200 bg-[#F4F4F6] p-6 flex flex-col justify-between relative overflow-hidden group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 cursor-pointer"
                  onClick={() => onSelect(project)}
                >
                  {/* Top Bar inside showcase */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-2xl select-none">{project.emoji}</span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-white border border-gray-200 text-black shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Center UI Preview Card */}
                  <div className="w-full bg-white rounded-2xl p-4 border border-gray-200 shadow-sm space-y-2 z-10 group-hover:scale-[1.02] transition-transform">
                    <div className="flex items-center justify-between">
                      <p className="font-display font-bold text-xs uppercase tracking-tight text-black">
                        {project.title}
                      </p>
                      <span className="w-2 h-2 rounded-full bg-black" />
                    </div>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Subtle Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"
                    aria-hidden="true"
                  />
                </div>

                {/* Project Meta Underneath */}
                <div className="mt-5 space-y-1">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                    {project.kind.toUpperCase()}
                  </p>
                  <h3 className="font-display font-bold text-lg text-black uppercase tracking-tight group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features & Tech */}
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-gray-200 bg-white text-gray-700 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-black hover:text-gray-600 transition-colors py-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Demo"
                      aria-label={`Open live demo of ${project.title}`}
                      className="w-8 h-8 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository of ${project.title}`}
                      className="w-8 h-8 rounded-full border border-gray-200 hover:border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}