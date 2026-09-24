import {
  Globe,
  Monitor,
  Database,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const SERVICES = [
  {
    id: 'web',
    title: 'Full-Stack Web Development',
    icon: Globe,
    tag: 'Web & SPAs',
    desc: 'Performant, accessible React and TypeScript web applications. Responsive layouts, fast state synchronization, and interfaces that feel deliberate and fluid.',
    deliverables: [
      'React & TypeScript architecture',
      'Tailwind CSS design systems',
      'Clean state management',
      'Responsive across all viewports',
    ],
  },
  {
    id: 'desktop',
    title: 'Offline Desktop Applications',
    icon: Monitor,
    tag: 'Native Systems',
    desc: 'Windows desktop software built with Electron and high-performance embedded SQLite. Zero cloud dependency, local privacy, and fast disk I/O.',
    deliverables: [
      'Electron IPC main & renderer bridge',
      'SQLite & better-sqlite3 local database',
      'Excel, CSV & PDF export pipelines',
      'Windows installer packaging',
    ],
  },
  {
    id: 'backend',
    title: 'Backend APIs & Architecture',
    icon: Database,
    tag: 'Server & DB',
    desc: 'Robust Node.js and Express RESTful backends. Strict server-side route validation, JWT authentication, and structured MongoDB data modeling.',
    deliverables: [
      'REST API design & endpoint security',
      'JWT token authentication & cookies',
      'MongoDB / Mongoose schema design',
      'Middleware pipelines & error guards',
    ],
  },
  {
    id: 'mobile',
    title: 'Responsive & Touch Interfaces',
    icon: Smartphone,
    tag: 'Mobile & UI',
    desc: 'Mobile-first interfaces fine-tuned for touch ergonomics, thumb zones, high contrast readability, and low latency mobile web experiences.',
    deliverables: [
      'Touch-friendly component patterns',
      'Optimized asset loading & bundles',
      'Cross-browser mobile compatibility',
      'Fluid transitions & haptic cues',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-surface2/30 relative">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="04"
          eyebrow="capabilities"
          title="What I build & deliver"
          intro="Where I focus my engineering energy. Every capability is grounded in production-tested techniques from my personal projects."
        />

        <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal
                key={service.id}
                as="article"
                delay={i * 70}
                variant={i % 2 === 0 ? 'left' : 'right'}
                className="card-sheen card-spot group rounded-2xl border border-border bg-surface p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface2 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </span>
                    <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider bg-surface2 px-2.5 py-1 rounded-md border border-border">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                    {service.title}
                  </h3>

                  <p className="text-muted text-xs sm:text-sm leading-relaxed mt-2 sm:mt-2.5">
                    {service.desc}
                  </p>

                  <div className="mt-4 sm:mt-5 pt-3.5 sm:pt-4 border-t border-border/70 space-y-2">
                    <p className="font-mono text-[10px] sm:text-[11px] text-ink uppercase tracking-wider font-semibold">
                      Key Highlights:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-muted"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-border/60 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-semibold text-primary hover:text-primary/80 inline-flex items-center gap-1.5 transition-colors py-1"
                  >
                    <span>Discuss a project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </div>

        <NextSection id="about" label="About — the student & developer behind the work" />
      </div>
    </section>
  )
}