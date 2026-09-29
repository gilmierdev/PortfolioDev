import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  /** Two-digit step, e.g. "02" */
  step: string
  /** Short mono label under the number, e.g. "technologies" */
  eyebrow: string
  title: string
  /** One line saying what this section is for */
  intro?: ReactNode
}

export default function SectionHeading({ step, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <>
      <Reveal as="p" className="tag flex items-center gap-2.5 mb-3">
        <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 text-white grid place-items-center font-bold text-xs shadow-sm font-mono">
          {step}
        </span>
        <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">{eyebrow}</span>
        <span aria-hidden="true" className="h-px w-10 bg-border" />
      </Reveal>
      <Reveal as="h2" className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] tracking-tight text-white leading-tight">
        {title}
        <span
          aria-hidden="true"
          className="block mt-2.5 h-[2px] w-12 rounded-full bg-gradient-to-r from-white via-zinc-400 to-transparent"
        />
      </Reveal>
      {intro && (
        <Reveal as="p" className="text-zinc-400 mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
          {intro}
        </Reveal>
      )}
    </>
  )
}