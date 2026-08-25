import { CONFIG } from '../data/config'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import NextSection from './NextSection'
import type { SkillLevel } from '../types'

const LEVELS: Record<SkillLevel, { label: string; className: string; blurb: string }> = {
  comfortable: {
    label: 'Comfortable',
    className: 'pill pill--ok',
    blurb: 'I can build with this unaided.',
  },
  learning: {
    label: 'Learning',
    className: 'pill pill--learn',
    blurb: "I've built with it, still reaching for docs.",
  },
  exploring: {
    label: 'Exploring',
    className: 'pill pill--explore',
    blurb: 'Early days — poking at it.',
  },
}

const LEVEL_ORDER: SkillLevel[] = ['comfortable', 'learning', 'exploring']

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-surface2/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="02"
          eyebrow="skills"
          title="Where I'm at, honestly"
          intro="No percentage bars — they'd be made up. These three labels are how I'd describe myself if you asked me in person."
        />

        <Reveal
          as="ul"
          className="mt-8 mb-10 grid gap-3 sm:grid-cols-3 text-sm text-muted"
        >
          {LEVEL_ORDER.map((level) => (
            <li
              key={level}
              className="rounded-xl border border-border bg-surface p-3.5 flex flex-col gap-2"
            >
              <span className={`${LEVELS[level].className} self-start`}>{LEVELS[level].label}</span>
              {LEVELS[level].blurb}
            </li>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONFIG.skillGroups.map((group) => (
            <Reveal
              key={group.label}
              as="article"
              className="project-card rounded-2xl border border-border bg-surface p-5"
            >
              <h3 className="font-display font-semibold text-lg pb-3 mb-4 border-b border-border flex items-center justify-between gap-3">
                {group.label}
                <span className="tag text-muted font-normal">{group.items.length}</span>
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-3 text-sm">
                    <span>{item.name}</span>
                    <span className={LEVELS[item.level].className}>{LEVELS[item.level].label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <NextSection id="projects" label="Projects — what I built with it" />
      </div>
    </section>
  )
}
