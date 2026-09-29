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
    <section id="approach" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <Reveal as="p" className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
            ENGINEERING LIFECYCLE
          </Reveal>
          <Reveal as="h2" className="font-display font-bold text-4xl sm:text-6xl uppercase tracking-tight text-black">
            HOW I BUILD
          </Reveal>
          <Reveal as="p" className="max-w-xl mx-auto text-xs sm:text-sm text-gray-500 leading-relaxed pt-1">
            Working software beats hypothetical perfection, and finished code beats clever hacks.
          </Reveal>
        </div>

        {/* 5 disciplined moves cards */}
        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CONFIG.loopSteps.map((step, i) => {
            const Icon = STEP_ICONS[i] ?? Sparkles
            return (
              <Reveal
                key={step.key}
                as="li"
                delay={i * 50}
                variant="up"
                className="rounded-3xl border border-gray-200 bg-[#FAFAFA] p-6 sm:p-7 flex flex-col justify-between hover:border-black hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] text-gray-500 font-semibold tracking-wider uppercase">
                      {STEP_MARKERS[step.key] ?? step.key}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-black">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-black uppercase tracking-tight">
                    {STEP_TITLES[step.key] ?? step.key}
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-2.5">
                    {step.note}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200/80 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span>Step {String(i + 1).padStart(2, '0')}</span>
                  <span className="text-black font-semibold">DELIBERATE PRACTICE</span>
                </div>
              </Reveal>
            )
          })}
        </ol>

        {/* Manifesto Quote Card */}
        <Reveal
          variant="zoom"
          className="mt-12 rounded-3xl border border-gray-200 bg-[#F4F4F6] p-8 sm:p-12 text-center"
        >
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <Quote className="w-7 h-7 text-black mb-4 opacity-75" />
            <blockquote className="font-display font-bold text-base sm:text-2xl leading-snug tracking-tight text-black uppercase">
              &ldquo;A solid application isn&apos;t luck. It comes from understanding the problem deeply, building the smallest slice that works, and breaking it until you understand why it holds together.&rdquo;
            </blockquote>
            <p className="mt-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
              — Personal Engineering Philosophy
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}