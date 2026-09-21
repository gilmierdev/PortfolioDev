import { CONFIG } from '../../data/config'
import type { ThemeMode } from '../../types'
import LearningLoop from './LearningLoop'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

interface AboutProps {
  theme: ThemeMode
}

export default function About({ theme }: AboutProps) {
  const profileImage = theme === 'dark' ? '/1.jpg' : '/9.png'
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="04"
          eyebrow="about-me"
          title="I learn by building, not by memorizing"
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start mt-12">
          <Reveal className="lg:col-span-3">
            <img
              src={profileImage}
              alt="Gilmier profile"
              className="w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full border-2 border-primary/50 shadow-[0_0_0_4px_var(--surface),0_0_30px_var(--primary)] dark:shadow-[0_0_0_4px_var(--surface),0_0_40px_var(--primary)] object-cover mb-6 hover:scale-105 transition-transform duration-300"
            />

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
            <ul className="space-y-3">
              {CONFIG.traits.map((trait) => (
                <li
                  key={trait.name}
                  className="rounded-xl border border-border bg-surface2/50 px-4 py-3"
                >
                  <p className="font-semibold">
                    <span className="text-secondary" aria-hidden="true">
                      ▸{' '}
                    </span>
                    {trait.name}
                  </p>
                  <p className="text-muted text-sm leading-relaxed mt-0.5">{trait.desc}</p>
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
