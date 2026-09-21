import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const SERVICES = [
  {
    id: 'web',
    title: 'Frontend builds',
    desc: 'React and TypeScript interfaces that respond, stay consistent and feel deliberate — not just functional.',
  },
  {
    id: 'api',
    title: 'Backend & APIs',
    desc: 'Node.js, Express and MongoDB — the data plumbing behind the UI, with auth enforced server-side, never hidden on the client.',
  },
  {
    id: 'full',
    title: 'Full-stack apps',
    desc: 'Turning an idea into a working product end to end, from the data model to the deployed interface.',
  },
  {
    id: 'ai',
    title: 'AI-assisted development',
    desc: 'Using LLM tools as a coding partner — scaffolding and review, always checked against my own understanding.',
  },
  {
    id: 'edit',
    title: 'Video editing',
    desc: 'The same craft as the code: pacing, cutting, attention. Applied to edits that hold attention.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-surface2/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="03"
          eyebrow="services"
          title="What I do"
          intro="Where I point these skills right now. Each one traces back to a project on this page."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <Reveal
              key={service.id}
              as="article"
              className="project-card rounded-2xl border border-border bg-surface p-6"
            >
              <p className="tag uppercase tracking-[.12em] text-muted mb-3">{service.id}</p>
              <h3 className="font-display font-semibold text-lg">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mt-2">{service.desc}</p>
            </Reveal>
          ))}
        </div>

        <NextSection id="about" label="Me — the person behind the build" />
      </div>
    </section>
  )
}