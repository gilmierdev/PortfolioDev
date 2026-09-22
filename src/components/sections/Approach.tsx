import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const STEP_TITLES: Record<string, string> = {
  learn: 'Understand',
  build: 'Build the smallest version',
  break: 'Break it on purpose',
  fix: 'Fix the why',
  improve: 'Clean it up',
}

const STEP_MARKERS: Record<string, string> = {
  learn: 'the idea',
  build: 'the build',
  break: 'the break',
  fix: 'the lesson',
  improve: 'the polish',
}

/** The same build order behind every project on this page — five moves, then repeat. */
export default function Approach() {
  return (
    <section id="approach" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="02"
          eyebrow="approach"
          title="How I build, in five moves"
          intro="The same order behind every project on this page. Working beats perfect, and finished beats clever."
        />

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONFIG.loopSteps.map((step, i) => (
            <Reveal
              key={step.key}
              as="li"
              className="rounded-2xl border border-border bg-surface p-6 flex flex-col gap-3"
            >
              <p className="tag uppercase tracking-[.12em] text-muted">
                {String(i + 1).padStart(2, '0')} <span className="text-secondary">·</span>{' '}
                {STEP_MARKERS[step.key] ?? step.key}
              </p>
              <h3 className="font-display font-semibold text-lg">
                {STEP_TITLES[step.key] ?? step.key}
              </h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{step.note}</p>
            </Reveal>
          ))}
        </ol>

        <p className="text-muted text-sm mt-6">
          Five moves, then repeat. The last three are the ones that actually teach me something.
        </p>

        <Reveal className="mt-14 rounded-2xl border border-border bg-surface2/60 px-6 py-12 sm:px-12 text-center">
          <p className="tag flex items-center justify-center gap-2.5 mb-5">
            <span aria-hidden="true" className="h-px w-10 bg-border" />
            <span className="text-secondary">manifesto</span>
            <span aria-hidden="true" className="h-px w-10 bg-border" />
          </p>
          <blockquote className="font-display font-semibold text-2xl sm:text-3xl leading-snug tracking-tight max-w-3xl mx-auto">
            A good build isn't luck. It's understanding the problem first, building the smallest
            version that works, and breaking it until you actually understand it.
          </blockquote>
        </Reveal>

        <NextSection id="services" label="Services — what I do with these skills" />
      </div>
    </section>
  )
}