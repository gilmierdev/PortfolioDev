import { useMemo, useState } from 'react'
import {
  ExternalLink,
  Maximize2,
  Check,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'
import { GithubIcon } from '../ui/Icons'
import type { Project } from '../../types'

interface ProjectsProps {
  onSelect: (project: Project) => void
}

export default function Projects({ onSelect }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('All')

  // Derive unique categories dynamically to guarantee no empty tabs
  const categories = useMemo(() => {
    const unique = Array.from(new Set(CONFIG.projects.map((p) => p.category)))
    return ['All', ...unique]
  }, [])

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') return CONFIG.projects
    return CONFIG.projects.filter((p) => p.category === selectedFilter)
  }, [selectedFilter])

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="02"
          eyebrow="featured-work"
          title="Engineered from scratch"
          intro="Student projects built to solve practical challenges. No template clones — each represents an intentional deep dive into architecture and real-world implementation."
        />

        {/* Filter Pills */}
        <Reveal variant="left" className="mt-6 sm:mt-8">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-1.5 sm:gap-2"
          >
            {categories.map((c) => {
              const count =
                c === 'All'
                  ? CONFIG.projects.length
                  : CONFIG.projects.filter((p) => p.category === c).length
              const active = selectedFilter === c

              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedFilter(c)}
                  className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full font-mono text-xs sm:text-sm border transition-all duration-200 active:scale-95 flex items-center gap-1.5 sm:gap-2 ${
                    active
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/25 font-semibold'
                      : 'border-border text-muted bg-surface hover:text-ink hover:border-primary/40'
                  }`}
                >
                  <span>{c}</span>
                  <span
                    className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-full ${
                      active ? 'bg-white/20' : 'bg-surface2'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {filteredProjects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 80}
              variant="up"
              className="project-card card-sheen card-spot group rounded-2xl border border-border bg-surface p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Banner */}
                <div
                  className={`w-full aspect-[2/1] rounded-xl ${project.accent} flex flex-col justify-between p-3.5 sm:p-4 mb-4 sm:mb-5 border border-border/40 relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-xl sm:text-2xl select-none">{project.emoji}</span>
                    {project.flag && (
                      <span className="pill pill--ok text-[9px] sm:text-[10px] bg-surface/90 backdrop-blur-sm shadow-sm">
                        {project.flag.label}
                      </span>
                    )}
                  </div>

                  <div className="z-10 flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-ink font-semibold px-2 py-0.5 rounded bg-surface/85 backdrop-blur-sm">
                      {project.kind}
                    </span>
                  </div>

                  {/* Subtle decorative grid lines */}
                  <div
                    className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:12px_12px]"
                    aria-hidden="true"
                  />
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-ink group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-1.5 sm:mt-2 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Key feature bullet points */}
                <ul className="mt-3.5 sm:mt-4 space-y-1.5 text-xs text-muted border-t border-border/60 pt-3">
                  {project.features.slice(0, 3).map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4 sm:mt-5">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="tag text-[10px] sm:text-[11px] px-2 py-1 rounded-md bg-surface2 border border-border text-ink"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="tag text-[10px] sm:text-[11px] px-1.5 py-1 text-muted">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links Footer */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/70 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1.5 group/btn py-1"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Architecture & Details</span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Live Demo"
                      aria-label={`Open live demo of ${project.title}`}
                      className="p-2 rounded-lg border border-border bg-surface2 hover:border-primary text-muted hover:text-primary transition-colors flex items-center justify-center min-w-[36px] min-h-[36px]"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      aria-label={`View GitHub repository of ${project.title}`}
                      className="p-2 rounded-lg border border-border bg-surface2 hover:border-primary text-muted hover:text-primary transition-colors flex items-center justify-center min-w-[36px] min-h-[36px]"
                    >
                      <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <NextSection id="approach" label="Approach — how each build comes together" />
      </div>
    </section>
  )
}