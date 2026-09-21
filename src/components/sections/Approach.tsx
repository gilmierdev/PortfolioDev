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

const STORY_LINES: Record<string, { soundsLike: string; payoff: string }> = {
  learn: { soundsLike: 'Read it, watch it, follow along', payoff: 'Context before code' },
  build: { soundsLike: 'Start the real thing, not a tutorial clone', payoff: 'Working beats perfect' },
  break: { soundsLike: 'Push it until something fails', payoff: 'The gap finally shows' },
  fix: { soundsLike: "Find out why it broke, not just what broke", payoff: 'Cause, not symptom' },
  improve: { soundsLike: 'Go back and clean it up', payoff: 'Clearer than the last version' },
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

        <Reveal className="mt-10 overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full text-sm min-w-[520px]">
            <caption className="sr-only">
              Example build log showing the phrase for each step, what it sounds like, and the payoff.
            </caption>
            <thead>
              <tr className="border-b border-border font-mono uppercase tracking-[.12em] text-muted">
                <th scope="col" className="text-left px-5 py-3 font-medium">Phrase</th>
                <th scope="col" className="text-left px-5 py-3 font-medium">What it sounds like</th>
                <th scope="col" className="text-left px-5 py-3 font-medium">Payoff</th>
              </tr>
            </thead>
            <tbody>
              {CONFIG.loopSteps.map((step, i) => (
                <tr key={step.key} className="border-b border-border last:border-b-0 align-top">
                  <td className="px-5 py-3.5 font-mono whitespace-nowrap">
                    {String(i + 1).padStart(2, '0')} <span className="text-secondary">·</span>{' '}
                    <span className="font-semibold text-primary">
                      {STEP_TITLES[step.key] ?? step.key}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {STORY_LINES[step.key]?.soundsLike ?? step.note}
                  </td>
                  <td className="px-5 py-3.5 text-muted">
                    {STORY_LINES[step.key]?.payoff ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <NextSection id="services" label="Services — what I do with these skills" />
      </div>
    </section>
  )
}