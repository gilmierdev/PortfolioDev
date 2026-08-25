import { useEffect, useRef } from 'react'
import type { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const lastFocused = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project) {
      lastFocused.current = document.activeElement as HTMLElement
      if (!dialog.open) dialog.showModal()
      closeBtnRef.current?.focus()
    } else if (dialog.open) {
      dialog.close()
      lastFocused.current?.focus()
    }
  }, [project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const handleCancel = (e: Event) => {
      e.preventDefault()
      onClose()
    }
    dialog.addEventListener('cancel', handleCancel)
    return () => dialog.removeEventListener('cancel', handleCancel)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="modalTitle"
      className="p-0 border-none bg-transparent max-w-none max-h-none w-full h-full backdrop:bg-black/60 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      {project && (
        <div className="min-h-full grid place-items-center p-4">
          <div className="glass w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl p-6 sm:p-8 relative animate-popIn" role="document">
            <button
              ref={closeBtnRef}
              type="button"
              aria-label="Close project details"
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-lg grid place-items-center border border-border hover:border-primary transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <p id="modalTitle" className="font-display font-bold text-2xl sm:text-3xl pr-10">
              {project.title}
            </p>
            <p className="flex items-center gap-2.5 flex-wrap tag uppercase tracking-[.12em] text-muted mt-2">
              {project.kind}
              {project.flag && (
                <span className={project.flag.tone === 'idea' ? 'pill pill--explore' : 'pill pill--ok'}>
                  {project.flag.label}
                </span>
              )}
            </p>
            <p className="text-muted mt-2">{project.tagline}</p>

            <div className={`w-full aspect-video rounded-xl bg-gradient-to-br ${project.accent} grid place-items-center text-5xl mb-5 mt-5 select-none`}>
              {project.emoji}
            </div>

            <h4 className="font-semibold mb-1.5">Overview</h4>
            <p className="text-muted leading-relaxed mb-5">{project.description}</p>

            <h4 className="font-semibold mb-2">Features</h4>
            <ul className="space-y-1.5 mb-5">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-muted">
                  <span className="text-secondary mt-1">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold mb-1.5">Challenges & what I learned</h4>
            <p className="text-muted leading-relaxed mb-5">{project.challenges}</p>

            <h4 className="font-semibold mb-2">Tech stack</h4>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span key={t} className="tag px-2.5 py-1 rounded-md bg-surface2 border border-border">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary text-white font-semibold px-5 py-2.5 rounded-xl text-sm">
                  Live demo ↗
                </a>
              ) : (
                <span className="plink" aria-disabled="true">
                  Live Demo<span className="sr-only"> — link coming soon</span>
                </span>
              )}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-border font-semibold px-5 py-2.5 rounded-xl text-sm hover:border-primary transition-colors">
                  View on GitHub ↗
                </a>
              ) : (
                <span className="plink" aria-disabled="true">
                  GitHub<span className="sr-only"> — link coming soon</span>
                </span>
              )}
              <p className="tag text-muted ml-auto" aria-hidden="true">
                Esc or click outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
