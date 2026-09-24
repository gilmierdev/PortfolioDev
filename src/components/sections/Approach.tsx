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
    <section id="approach" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
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
              delay={i * 80}
              variant={i % 2 === 0 ? 'up' : 'zoom'}
              className="card-sheen group rounded-2xl border border-border bg-surface p-6 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl shadow-transparent"
            >
              <p className="tag uppercase tracking-[.12em] text-muted flex items-center justify-between">
                <span>
                  {String(i + 1).padStart(2, '0')} <span className="text-secondary">·</span>{' '}
                  {STEP_MARKERS[step.key] ?? step.key}
                </span>
                <span
                  aria-hidden="true"
                  className="w-7 h-7 rounded-lg grid place-items-center text-xs font-bold bg-primary/10 border border-primary/20 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                >
                  {i + 1}
                </span>
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

        <Reveal
          variant="zoom"
          className="mt-14 relative rounded-2xl border border-primary/20 bg-surface2/60 px-6 py-12 sm:px-12 text-center overflow-hidden"
        >
          <div className="aurora aurora--2 pointer-events-none left-[-10%] top-[-40%] w-[300px] h-[300px] bg-primary/20" aria-hidden="true" />
          <div className="aurora aurora--1 pointer-events-none right-[-8%] bottom-[-45%] w-[260px] h-[260px] bg-secondary/20" aria-hidden="true" />
          <p className="tag flex items-center justify-center gap-2.5 mb-5 relative">
            <span aria-hidden="true" className="h-px w-10 bg-border" />
            <span className="text-secondary">manifesto</span>
            <span aria-hidden="true" className="h-px w-10 bg-border" />
          </p>
          <blockquote className="font-display font-semibold text-2xl sm:text-3xl leading-snug tracking-tight max-w-3xl mx-auto relative">
            A good build isn&apos;t luck. It&apos;s understanding the problem first, building the smallest
            version that works, and <span className="text-gradient">breaking it until you actually understand it</span>.
          </blockquote>
        </Reveal>

        <NextSection id="services" label="Services — what I do with these skills" />
      </div>
    </section>
  )
}