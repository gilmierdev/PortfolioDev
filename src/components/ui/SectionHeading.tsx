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
        <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary grid place-items-center font-bold text-xs shadow-sm">
          {step}
        </span>
        <span className="text-secondary font-mono text-xs uppercase tracking-wider">{eyebrow}</span>
        <span aria-hidden="true" className="h-px w-10 bg-border" />
      </Reveal>
      <Reveal as="h2" className="font-display font-bold text-3xl sm:text-4xl lg:text-[2.6rem] tracking-tight text-ink leading-tight">
        {title}
        <span
          aria-hidden="true"
          className="block mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary"
        />
      </Reveal>
      {intro && (
        <Reveal as="p" className="text-muted mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
          {intro}
        </Reveal>
      )}
    </>
  )
}