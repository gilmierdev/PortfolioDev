import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'
import type { Project } from '../../types'

interface ProjectsProps {
  onSelect: (project: Project) => void
}

export default function Projects({ onSelect }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="03"
          eyebrow="projects"
          title="Things I've built to learn"
          intro="Student projects, not products. Each one exists because I wanted to understand something I couldn't get from a tutorial."
        />

        {/* The status pills on the cards mean nothing without this. */}
        <Reveal as="ul" className="mt-6 mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <li className="flex items-center gap-2.5">
            <span className="pill pill--ok">Ongoing</span> still actively being worked on
          </li>
          <li className="flex items-center gap-2.5">
            <span className="pill pill--explore">Not built yet</span> a planned idea, listed honestly
          </li>
          <li className="flex items-center gap-2.5">
            <span className="tag text-muted">{CONFIG.projects.length} total</span> tap any card for
            the full write-up
          </li>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.projects.map((project) => (
            <Reveal
              key={project.title}
              as="article"
              className="project-card relative rounded-2xl border border-border bg-surface p-5 flex flex-col"
            >
              <div
                className={`w-full aspect-video rounded-xl bg-gradient-to-br ${project.accent} grid place-items-center text-4xl mb-4 select-none`}
                aria-hidden="true"
              >
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
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </Reveal>
          ))}
        </div>

        <NextSection id="journey" label="Journey — how I got here" />
      </div>
    </section>
  )
}
