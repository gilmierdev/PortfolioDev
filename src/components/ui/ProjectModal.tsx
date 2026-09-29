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
        // Fallback
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
      className="p-0 border-none bg-transparent max-w-none max-h-none w-full h-full backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose()
      }}
    >
      {project && (
        <div className="min-h-full grid place-items-center p-3 sm:p-6">
          <div
            className="w-full max-w-3xl max-h-[92svh] overflow-y-auto rounded-3xl border border-gray-200 bg-white shadow-2xl relative animate-popIn flex flex-col"
            role="document"
          >
            {/* Modal Header Banner */}
            <div className="w-full p-6 sm:p-8 bg-[#F4F4F6] border-b border-gray-200 relative overflow-hidden flex flex-col justify-between min-h-[140px] select-none">
              <div className="flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl">{project.emoji}</span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-semibold bg-black text-white shadow-sm">
                    {project.kind}
                  </span>
                </div>

                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close project modal"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-gray-300 bg-white hover:border-black text-black grid place-items-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="z-10 mt-4">
                <h3
                  id="modalTitle"
                  className="font-display font-bold text-2xl sm:text-3xl text-black uppercase tracking-tight leading-tight"
                >
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-gray-600 mt-1">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Overview */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-black uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-black" />
                  <span>Project Overview</span>
                </h4>
                <p className="text-gray-600 text-xs sm:text-base leading-relaxed mt-2.5">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-black uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Key Architectural Features</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2.5 mt-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="p-3 rounded-2xl border border-gray-200 bg-[#FAFAFA] text-xs sm:text-sm text-black flex items-start gap-2.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & What I Learned */}
              <div className="p-5 rounded-2xl border border-gray-200 bg-[#F4F4F6]">
                <h4 className="font-display font-bold text-sm sm:text-base text-black uppercase tracking-wider flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-black" />
                  <span>Key Challenge & What I Learned</span>
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-2.5">
                  {project.challenges}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-black uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-black" />
                  <span>Technologies & Packages</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-gray-200 text-black font-mono font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 font-semibold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 shadow-sm transition-all"
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
                      className="px-6 py-2.5 rounded-full border border-gray-300 bg-white hover:border-black font-semibold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center justify-center gap-2 text-black transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>

                <p className="text-[11px] font-mono text-gray-400 text-center sm:text-right">
                  Press <kbd className="px-1.5 py-0.5 rounded bg-gray-100 border border-gray-300 text-black">Esc</kbd> to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}