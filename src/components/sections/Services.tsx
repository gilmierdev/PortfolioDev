import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const SERVICES = [
  {
    id: 'web',
    title: 'Website development',
    icon: '🌐',
    desc: 'React and TypeScript interfaces that respond, stay consistent and feel deliberate — not just functional.',
  },
  {
    id: 'desktop',
    title: 'Desktop application',
    icon: '🖥️',
    desc: 'Native-feeling desktop apps that keep the same craft as the web work — clear, responsive and fast.',
  },
  {
    id: 'mobile',
    title: 'Mobile application',
    icon: '📱',
    desc: 'Mobile builds tuned for touch and small screens, from layout to the little interactions that make it feel good.',
  },
  {
    id: 'api',
    title: 'Backend API',
    icon: '⚙️',
    desc: 'Node.js, Express and MongoDB — the data plumbing behind the interface, with auth enforced server-side, never hidden on the client.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-surface2/40 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="03"
          eyebrow="services"
          title="What I do"
          intro="Where I point these skills right now. Each one traces back to a project on this page."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.id}
              as="article"
              delay={i * 70}
              variant={i % 2 === 0 ? 'left' : 'right'}
              className="card-sheen card-spot group project-card rounded-2xl border border-border bg-surface p-6 flex gap-5"
            >
              <span
                aria-hidden="true"
                className="shrink-0 w-14 h-14 rounded-2xl grid place-items-center text-2xl border border-border bg-surface2 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:border-primary/40"
              >
                {service.icon}
              </span>
              <div>
                <p className="tag uppercase tracking-[.12em] text-muted mb-2">{service.id}</p>
                <h3 className="font-display font-semibold text-lg">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mt-2">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <NextSection id="about" label="Me — the person behind the build" />
      </div>
    </section>
  )
}