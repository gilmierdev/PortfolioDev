import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const SERVICES = [
  {
    id: 'web',
    title: 'Website development',
    desc: 'React and TypeScript interfaces that respond, stay consistent and feel deliberate — not just functional.',
  },
  {
    id: 'desktop',
    title: 'Desktop application',
    desc: 'Native-feeling desktop apps that keep the same craft as the web work — clear, responsive and fast.',
  },
  {
    id: 'mobile',
    title: 'Mobile application',
    desc: 'Mobile builds tuned for touch and small screens, from layout to the little interactions that make it feel good.',
  },
  {
    id: 'api',
    title: 'Backend API',
    desc: 'Node.js, Express and MongoDB — the data plumbing behind the interface, with auth enforced server-side, never hidden on the client.',
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
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