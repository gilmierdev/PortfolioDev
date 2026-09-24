import {
  Compass,
  Hammer,
  Bug,
  SearchCode,
  Sparkles,
  Quote,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const STEP_ICONS = [Compass, Hammer, Bug, SearchCode, Sparkles]

const STEP_TITLES: Record<string, string> = {
  learn: 'Understand the Architecture',
  build: 'Ship the Smallest Slice',
  break: 'Stress-Test & Break It',
  fix: 'Root-Cause Discovery',
  improve: 'Refactor, Polish & Clean',
}

const STEP_MARKERS: Record<string, string> = {
  learn: 'Phase 01 · Discovery',
  build: 'Phase 02 · Execution',
  break: 'Phase 03 · Adversarial',
  fix: 'Phase 04 · Synthesis',
  improve: 'Phase 05 · Polish',
}

export default function Approach() {
  return (
    <section id="approach" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="03"
          eyebrow="engineering-loop"
          title="How I build: 5 disciplined moves"
          intro="The consistent lifecycle behind every project on this site. Working software beats hypothetical perfection, and finished code beats clever hacks."
        />

        {/* Pipeline Grid */}
        <ol className="mt-8 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {CONFIG.loopSteps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Sparkles
            return (
              <Reveal
                key={step.key}
                as="li"
                delay={i * 60}
                variant="up"
                className="card-sheen card-spot group rounded-2xl border border-border bg-surface p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-[11px] sm:text-xs text-secondary font-medium tracking-wider uppercase">
                      {STEP_MARKERS[step.key] ?? step.key}
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface2 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                    {STEP_TITLES[step.key] ?? step.key}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 sm:mt-2.5">
                    {step.note}
                  </p>
                </div>

                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted">
                  <span>Step {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    deliberate practice →
                  </span>
                </div>
              </Reveal>
            )
          })}
        </ol>

        {/* Manifesto Highlight Card */}
        <Reveal
          variant="zoom"
          className="mt-10 sm:mt-14 relative rounded-2xl sm:rounded-3xl border border-primary/25 bg-surface2/70 p-6 sm:p-12 text-center overflow-hidden terminal-shadow"
        >
          <div
            className="aurora aurora--2 pointer-events-none left-[-5%] top-[-30%] w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] bg-primary/15"
            aria-hidden="true"
          />
          <div
            className="aurora aurora--1 pointer-events-none right-[-5%] bottom-[-30%] w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] bg-secondary/15"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 opacity-75" />
            <blockquote className="font-display font-bold text-base sm:text-2xl leading-snug tracking-tight text-ink">
              &ldquo;A solid application isn&apos;t luck. It comes from understanding the problem deeply, building the smallest slice that works, and{' '}
              <span className="text-gradient">breaking it until you understand why it holds together</span>.&rdquo;
            </blockquote>
            <p className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted">
              — Personal Engineering Philosophy
            </p>
          </div>
        </Reveal>

        <NextSection id="services" label="Services — what I can build for you" />
      </div>
    </section>
  )
}