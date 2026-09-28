import {
  Code,
  Database,
  Monitor,
  ShieldCheck,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend Architecture',
    subtitle: 'Reactive UIs & Responsive Layouts',
    icon: Code,
    badge: 'UI & State',
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'REST Services & Data Persistence',
    icon: Database,
    badge: 'Server & DB',
  },
  {
    id: 'desktop',
    title: 'Desktop Systems',
    subtitle: 'Electron & Local Offline SQLite',
    icon: Monitor,
    badge: 'Offline-First',
  },
  {
    id: 'security',
    title: 'AI & Security',
    subtitle: 'AI Assistance & Hardened Security',
    icon: ShieldCheck,
    badge: 'Protected',
  },
] as const

const SKILL_DETAILS: Record<string, string> = {
  React: 'Component architecture, custom hooks & reactive state.',
  TypeScript: 'Strict static typing & robust runtime contracts.',
  'Tailwind CSS': 'Utility-first styling & dark/light theme systems.',
  'JavaScript (ES6+)': 'Modern ES features, async/await & modular code.',
  'HTML5 & CSS3': 'Semantic markup, flexbox/grid & clean layouts.',
  Vite: 'Instant HMR and optimized production bundles.',

  'Node.js': 'Asynchronous server runtime & data streams.',
  'Express.js': 'REST API routing, middleware pipelines & error handling.',
  'MongoDB & Mongoose': 'Document schema modeling, validation & indexing.',
  SQLite: 'ACID relational embedded database engine.',
  'JWT Authentication': 'Stateless tokens, HTTP-only cookies & route guards.',
  'RESTful API Design': 'Standard HTTP methods, status codes & validation.',

  Electron: 'Cross-platform native Windows desktop shell.',
  'better-sqlite3': 'Ultra-fast synchronous SQLite bindings in C++.',
  Recharts: 'Interactive data visualization & trend charts.',
  'ExcelJS / CSV': 'Spreadsheet parsing, validation & batch export.',
  PDFKit: 'Dynamic formatted PDF generation pipeline.',
  'electron-builder': 'Windows installer packaging & auto-updates.',

  'AI Assistance': 'Modern AI-assisted engineering with strict verification for reliable code.',
  'Endpoint Hardening & Rate Limiting': 'Anti-spam cooldowns, CORS & brute-force protection.',
  'JWT Auth & Protected Routes': 'Token authorization, route guards & bcrypt hashing.',
  'Electron IPC & Context Isolation': 'Sandboxed preload scripts & secure bidirectional IPC.',
  'Data Validation & Sanitization': 'Schema checks, injection protection & payload parsing.',
  'Git & Secrets Hygiene': 'Zero leaked secrets, clean .env & verified version control.',
}

export default function Skills() {
  const allSkills = CONFIG.skills ?? []

  return (
    <section id="skills" className="py-14 sm:py-18 px-4 sm:px-6 relative overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="01"
          eyebrow="technologies"
          title="Stack & Security"
          intro="Full-stack & desktop development powered by AI assistance and hardened security."
        />

        {/* Minimal AI Assistance & Security Pill */}
        <Reveal variant="up" className="mt-4 sm:mt-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-ink">
            <span className="w-2 h-2 rounded-full bg-ok animate-pulse" />
            <span className="font-semibold text-primary">AI Assistance & Security</span>
            <span className="text-muted/60" aria-hidden="true">•</span>
            <span className="text-muted">Accelerated AI workflow paired with route guards, input sanitization & sandboxed IPC</span>
          </div>
        </Reveal>

        {/* 4 Clean Grouped Category Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 mt-6 sm:mt-8">
          {CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon
            const skills = allSkills.filter((s) => s.category === cat.id)
            const isSecurity = cat.id === 'security'

            return (
              <Reveal
                key={cat.id}
                delay={idx * 40}
                variant="up"
                className={`card-spot card-sheen rounded-2xl border bg-surface p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                  isSecurity ? 'border-primary/40 bg-surface/90' : 'border-border'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-border/70">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
                        isSecurity
                          ? 'bg-ok/10 text-ok border-ok/30'
                          : 'bg-primary/10 text-primary border-primary/20'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-ink leading-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted">{cat.subtitle}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                      isSecurity
                        ? 'bg-ok/10 text-ok border-ok/25 font-semibold'
                        : 'bg-surface2 text-muted border-border'
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={SKILL_DETAILS[skill.name] ?? skill.name}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-mono border transition-all inline-flex items-center gap-1.5 cursor-default ${
                        skill.highlight
                          ? 'bg-surface2 text-ink border-border hover:border-primary/50 font-medium'
                          : 'bg-surface text-muted border-border/60 hover:text-ink hover:border-border'
                      }`}
                    >
                      {skill.highlight && (
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSecurity ? 'bg-ok' : 'bg-primary'
                          }`}
                        />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>

        <NextSection id="work" label="Featured Projects — engineered from scratch" />
      </div>
    </section>
  )
}
