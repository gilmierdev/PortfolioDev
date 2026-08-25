import { CONFIG } from '../data/config'
import LearningLoop from './LearningLoop'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import NextSection from './NextSection'

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="01"
          eyebrow="about-me"
          title="I learn by building, not by memorizing"
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start mt-12">
          <Reveal className="lg:col-span-3">
            <div className="space-y-4">
              {CONFIG.aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-muted leading-relaxed max-w-[66ch]">
                  {paragraph}
                </p>
              ))}
            </div>

            <LearningLoop />
          </Reveal>

          <Reveal
            as="aside"
            className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-display font-semibold text-lg pb-3.5 mb-4 border-b border-border">
              What drives me
            </h3>
            <ul className="space-y-4">
              {CONFIG.traits.map((trait) => (
                <li key={trait.name}>
                  <p className="font-semibold">
                    <span className="text-secondary" aria-hidden="true">
                      ▸{' '}
                    </span>
                    {trait.name}
                  </p>
                  <p className="text-muted text-sm leading-relaxed">{trait.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <NextSection id="skills" label="Skills — what I can actually do" />
      </div>
    </section>
  )
}
