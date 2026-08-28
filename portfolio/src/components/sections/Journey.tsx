import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

export default function Journey() {
  const steps = CONFIG.timeline.length

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 bg-surface2/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="04"
          eyebrow="journey"
          title="How I got here, in order"
          intro={
            <>
              Not a résumé — a learning path, {steps} steps long. Each one only made sense because of
              the one before it, so it reads top to bottom. The highlighted step at the end is where I
              am now.
            </>
          }
        />

        <ol className="relative mt-12 pl-9 sm:pl-11">
          {/* the rail */}
          <span
            aria-hidden="true"
            className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-primary to-primary/15"
          />

          {CONFIG.timeline.map((entry) => (
            <Reveal key={entry.step} as="li" className="relative pb-8 last:pb-0 group">
              {/*
                Solid dots rather than hollow ones: this section sits on a tinted
                band, and a hollow dot would need its fill to match the backdrop
                exactly to not read as a smudge.
              */}
              <span
                aria-hidden="true"
                className={`absolute top-1.5 w-4 h-4 rounded-full transition-transform group-hover:scale-125 -left-9 sm:-left-11 ${
                  entry.now ? 'bg-secondary ring-4 ring-secondary/25' : 'bg-primary'
                }`}
              />
              <p
                className={`tag uppercase tracking-[.14em] mb-1.5 ${
                  entry.now ? 'text-secondary font-semibold' : 'text-muted'
                }`}
              >
                {entry.step}
                {entry.now && <span className="sr-only"> — current step</span>}
              </p>
              <h3 className="font-display font-semibold text-lg mb-1.5">{entry.title}</h3>
              <p className="text-muted text-sm leading-relaxed max-w-[60ch]">{entry.desc}</p>
            </Reveal>
          ))}
        </ol>

        <NextSection id="contact" label="Contact — get in touch" />
      </div>
    </section>
  )
}
