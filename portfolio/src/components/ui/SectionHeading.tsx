import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface SectionHeadingProps {
  /** Two-digit step, e.g. "02" — numbers the sections so the page reads in order. */
  step: string
  /** Short mono label under the number, e.g. "skills". */
  eyebrow: string
  title: string
  /** One line saying what this section is for, and what it deliberately isn't. */
  intro?: ReactNode
}

/**
 * One heading pattern for every section: numbered eyebrow, title, short intro.
 * Sections used to each build this by hand, which let the spacing and the
 * eyebrow format drift apart.
 */
export default function SectionHeading({ step, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <>
      <Reveal as="p" className="tag flex items-center gap-2.5 mb-3">
        <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 text-primary grid place-items-center font-semibold">
          {step}
        </span>
        <span className="text-secondary">{eyebrow}</span>
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-border to-transparent" />
      </Reveal>
      <Reveal as="h2" className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
        {title}
      </Reveal>
      {intro && (
        <Reveal as="p" className="text-muted mt-4 max-w-2xl leading-relaxed">
          {intro}
        </Reveal>
      )}
    </>
  )
}
