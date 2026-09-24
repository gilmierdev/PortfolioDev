import { useState } from 'react'
import {
  Code,
  Database,
  Layers,
  Monitor,
  Wrench,
  CheckCircle2,
  Cpu,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const CATEGORIES = [
  { id: 'all', label: 'All Stack', icon: Layers },
  { id: 'frontend', label: 'Frontend', icon: Code },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'desktop', label: 'Desktop', icon: Monitor },
  { id: 'tools', label: 'Tools', icon: Wrench },
] as const

type CategoryId = (typeof CATEGORIES)[number]['id']

const SKILL_DETAILS: Record<string, { desc: string; builtIn: string }> = {
  React: {
    desc: 'Component architecture, custom hooks, reactive state & UI rendering.',
    builtIn: 'Used in Financial Encoder, MERN Store, and Notepad Website.',
  },
  TypeScript: {
    desc: 'Strict type safety, interfaces, robust runtime contracts & refactoring.',
    builtIn: 'Core language across all recent projects.',
  },
  'Tailwind CSS': {
    desc: 'Utility-first rapid styling, dark/light theme systems, responsive layouts.',
    builtIn: 'Design systems for web and desktop applications.',
  },
  'Node.js': {
    desc: 'Server-side runtime, async file/data streams, backend microservices.',
    builtIn: 'Backend services for MERN Storefront and CLI tooling.',
  },
  'Express.js': {
    desc: 'RESTful API endpoints, middleware pipelines, error handling & routing.',
    builtIn: 'Server routing and protected API endpoints.',
  },
  'MongoDB & Mongoose': {
    desc: 'Document schema modeling, indexing, aggregation & data persistence.',
    builtIn: 'Database for e-commerce catalog, cart, and user records.',
  },
  SQLite: {
    desc: 'Relational local database with ACID compliance and zero configuration.',
    builtIn: 'Primary database for Financial Encoder with better-sqlite3.',
  },
  'better-sqlite3': {
    desc: 'Synchronous, ultra-fast C++ SQLite bindings for Node.js & Electron.',
    builtIn: 'Local persistence engine in Financial Encoder.',
  },
  Electron: {
    desc: 'Cross-platform desktop application shell with IPC communication.',
    builtIn: 'Native Windows desktop packaging in Financial Encoder.',
  },
  'JWT Authentication': {
    desc: 'Stateless secure authentication, token signing, route guards & cookies.',
    builtIn: 'User auth and protected endpoints in MERN project.',
  },
  'RESTful API Design': {
    desc: 'Clean HTTP methods, status codes, payload validation & error responses.',
    builtIn: 'Backend architecture for full-stack apps.',
  },
  'Git & GitHub': {
    desc: 'Version control, branching strategy, open source releases & workflow.',
    builtIn: 'Public repositories @gilmierdev.',
  },
  Vite: {
    desc: 'Next-generation frontend tooling with instant HMR and optimized builds.',
    builtIn: 'Build configuration for web and desktop frontends.',
  },
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all')

  const allSkills = CONFIG.skills ?? []
  const filteredSkills =
    activeCategory === 'all'
      ? allSkills
      : allSkills.filter((s) => s.category === activeCategory)

  const marqueeItems = [
    'React',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQLite',
    'Electron',
    'Tailwind CSS',
    'better-sqlite3',
    'REST APIs',
    'JWT Auth',
    'Git',
    'Vite',
  ]

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="01"
          eyebrow="technologies"
          title="Practical stack, proven in builds"
          intro="Technologies I use daily to turn ideas into robust software. Every item here has been applied in real working code."
        />

        {/* Category Tabs */}
        <Reveal variant="up" className="mt-6 sm:mt-8">
          <div className="flex flex-wrap gap-1.5 sm:gap-2" role="tablist" aria-label="Filter skill categories">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon
              const count =
                cat.id === 'all'
                  ? allSkills.length
                  : allSkills.filter((s) => s.category === cat.id).length
              const active = activeCategory === cat.id

              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-mono text-xs sm:text-sm border transition-all duration-200 inline-flex items-center gap-1.5 sm:gap-2 active:scale-95 ${
                    active
                      ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 font-semibold'
                      : 'border-border text-muted bg-surface hover:text-ink hover:border-border/80'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] sm:text-[11px] px-1.5 py-0.2 rounded-full ${active ? 'bg-white/20' : 'bg-surface2'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mt-6 sm:mt-8">
          {filteredSkills.map((skill, idx) => {
            const detail = SKILL_DETAILS[skill.name]
            return (
              <Reveal
                key={skill.name}
                delay={idx * 30}
                variant="up"
                className="card-spot card-sheen group p-4 sm:p-5 rounded-2xl border border-border bg-surface hover:border-primary/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface2 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                      <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                    <h3 className="font-display font-semibold text-sm sm:text-base text-ink">
                      {skill.name}
                    </h3>
                  </div>

                  {skill.highlight && (
                    <span className="pill pill--ok text-[9px] sm:text-[10px]">
                      Core
                    </span>
                  )}
                </div>

                <p className="text-muted text-xs leading-relaxed mt-2.5 sm:mt-3">
                  {detail?.desc ?? `${skill.category.toUpperCase()} technology in active development.`}
                </p>

                {detail?.builtIn && (
                  <p className="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-border/60 text-[11px] font-mono text-secondary flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-secondary shrink-0" />
                    <span className="truncate">{detail.builtIn}</span>
                  </p>
                )}
              </Reveal>
            )
          })}
        </div>

        {/* Marquee Ticker */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-border/70 relative">
          <p className="text-center font-mono text-[10px] sm:text-xs uppercase tracking-widest text-muted mb-3 sm:mb-4">
            Continuous Learning & Tooling
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-1.5 sm:py-2">
            <div className="marquee-track flex items-center gap-4 sm:gap-6">
              {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  key={`${item}-${i}`}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg border border-border bg-surface/80 backdrop-blur-sm text-xs font-mono text-muted whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <NextSection id="work" label="Featured Projects — engineered from scratch" />
      </div>
    </section>
  )
}
