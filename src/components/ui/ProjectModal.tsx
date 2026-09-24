import { useEffect, useRef } from 'react'
import {
  X,
  ExternalLink,
  CheckCircle2,
  Lightbulb,
  Cpu,
  Layers,
} from 'lucide-react'
import { GithubIcon } from './Icons'
import type { Project } from '../../types'

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
      try {
        if (!dialog.open) {
          dialog.showModal()
        }
      } catch {
        // Fallback for rapid dialog state changes
      }
      closeBtnRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else if (dialog.open) {
      try {
        dialog.close()
      } catch {
        // Fallback
      }
      document.body.style.overflow = ''
      lastFocused.current?.focus()
    }

    return () => {
      document.body.style.overflow = ''
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
      className="p-0 border-none bg-transparent max-w-none max-h-none w-full h-full backdrop:bg-black/65 backdrop:backdrop-blur-md"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      {project && (
        <div className="min-h-full grid place-items-center p-2.5 sm:p-6">
          <div
            className="w-full max-w-3xl max-h-[92svh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-border bg-surface shadow-2xl relative animate-popIn flex flex-col"
            role="document"
          >
            {/* Modal Header Banner */}
            <div
              className={`w-full p-4 sm:p-8 ${project.accent} border-b border-border/60 relative overflow-hidden flex flex-col justify-between min-h-[130px] sm:min-h-[160px] select-none`}
            >
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">{project.emoji}</span>
                  <span className="pill pill--ok text-[10px] sm:text-xs bg-surface/90 backdrop-blur-sm">
                    {project.kind}
                  </span>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close project modal"
                  onClick={onClose}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border bg-surface/85 backdrop-blur-md hover:bg-surface text-ink grid place-items-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              <div className="z-10 mt-3 sm:mt-4">
                <h3
                  id="modalTitle"
                  className="font-display font-bold text-xl sm:text-3xl text-ink leading-tight"
                >
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-ink/80 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Background ambient accents */}
              <div
                className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"
                aria-hidden="true"
              />
            </div>

            {/* Modal Content Body */}
            <div className="p-4 sm:p-8 space-y-5 sm:space-y-7">
              {/* Overview */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-ink flex items-center gap-2">
                  <Layers className="w-4 h-4 text-primary" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-muted text-xs sm:text-base leading-relaxed mt-2 sm:mt-2.5">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-ink flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-ok" />
                  <span>Key Architectural Features</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 sm:gap-2.5 mt-2.5 sm:mt-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="p-2.5 sm:p-3 rounded-xl border border-border bg-surface2 text-xs sm:text-sm text-ink flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & What I Learned */}
              <div className="p-4 sm:p-5 rounded-2xl border border-primary/20 bg-primary/5">
                <h4 className="font-display font-bold text-sm sm:text-base text-ink flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  <span>Key Challenge & What I Learned</span>
                </h4>
                <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 sm:mt-2.5">
                  {project.challenges}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-ink flex items-center gap-2 mb-2 sm:mb-3">
                  <Cpu className="w-4 h-4 text-secondary" />
                  <span>Technologies & Packages</span>
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="tag text-[10px] sm:text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-surface2 border border-border text-ink font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary btn-shine px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl border border-border bg-surface2 hover:border-primary font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-ink transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>

                <p className="text-[11px] font-mono text-muted text-center sm:text-right">
                  Tap outside or press <kbd className="px-1.5 py-0.5 rounded bg-surface2 border border-border text-ink">Esc</kbd> to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}