import { useMemo, useState } from 'react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'
import type { Project } from '../../types'

interface ProjectsProps {
  onSelect: (project: Project) => void
}

const CATEGORIES = ['All', 'Website', 'Desktop', 'Mobile App', 'Other Build'] as const
type Category = (typeof CATEGORIES)[number]

export default function Projects({ onSelect }: ProjectsProps) {
  const [category, setCategory] = useState<Category>('All')

  const projects = useMemo(
    () =>
      category === 'All'
        ? CONFIG.projects
        : CONFIG.projects.filter((p) => p.category === category),
    [category],
  )

  return (
    <section id="work" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="01"
          eyebrow="work"
          title="The work speaks first."
          intro="Student projects, not products. Each one exists because I wanted to understand something I couldn't get from a tutorial."
        />

        <Reveal variant="left" className="mt-8">
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => {
              const count =
                c === 'All'
                  ? CONFIG.projects.length
                  : CONFIG.projects.filter((p) => p.category === c).length
              const active = category === c
              return (
                <button
                  key={c}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full border font-mono text-sm transition-all duration-300 active:scale-95 ${
                    active
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 font-semibold -translate-y-0.5'
                      : 'border-border text-muted bg-surface hover:text-primary hover:border-primary hover:-translate-y-0.5'
                  }`}
                >
                  {c} <span className={active ? 'opacity-70' : 'opacity-60'}>{count}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              as="article"
              delay={i * 80}
              className="project-card card-sheen card-spot group relative rounded-2xl border border-border bg-surface p-5 flex flex-col"
            >
              <div className={`tile w-full aspect-video rounded-xl ${project.accent} grid place-items-center text-4xl mb-4 select-none group-hover:scale-105 group-hover:rotate-1`}>
                {project.emoji}
              </div>

              <p className="flex items-center gap-2.5 flex-wrap tag uppercase tracking-[.12em] text-muted mb-2">
                {project.kind}
                {project.flag && (
                  <span className={project.flag.tone === 'idea' ? 'pill pill--explore' : 'pill pill--ok'}>
                    {project.flag.label}
                  </span>
                )}
              </p>

              <h3 className="font-display font-semibold text-lg">{project.title}</h3>
              <p className="text-muted text-sm mt-1 flex-1">{project.tagline}</p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tag px-2 py-1 rounded-md bg-surface2 border border-border">
                    {t}
                  </span>
                ))}
              </div>

              {/*
                The ::after overlay stretches this button across the whole card,
                so the entire card is clickable while remaining a single
                focusable control with one clear accessible name.
              */}
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="mt-5 self-start text-sm font-semibold text-primary flex items-center gap-1.5 hover:gap-2.5 transition-all after:content-[''] after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-offset-4"
              >
                View Details
                <span className="sr-only"> for {project.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Reveal>
          ))}
        </div>

        <NextSection id="approach" label="Approach — how each one was built" />
      </div>
    </section>
  )
}