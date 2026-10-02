import { useState } from 'react'
import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react'
import Reveal from '../ui/Reveal'

interface ServiceItem {
  id: string
  num: string
  title: string
  skills: string[]
  description: string
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-workflow',
    num: '01',
    title: 'AI-ASSISTED DEVELOPMENT & RAPID PROTOTYPING',
    skills: [
      'AI-Assisted Software Dev',
      'ChatGPT, OpenCode & Antigravity',
      'Prompt Engineering',
      'Rapid Prototyping',
      'Accelerated Delivery',
    ],
    description: 'Using AI tools to accelerate development velocity while maintaining strict human oversight and clean code standards.',
  },
  {
    id: 'testing-debugging',
    num: '02',
    title: 'APPLICATION TESTING, DEBUGGING & ERROR RESOLUTION',
    skills: [
      'Hands-On Application Testing',
      'Debugging & Troubleshooting',
      'Error Detection & Isolation',
      'Stack Trace Analysis',
      'Targeted AI Fix Guidance',
      'Iterative Validation',
    ],
    description: 'Personally stress-testing apps to detect bugs, analyzing root causes, and guiding AI to implement verified fixes.',
  },
  {
    id: 'fullstack-crud',
    num: '03',
    title: 'FRONTEND, BACKEND & CRUD ARCHITECTURE',
    skills: [
      'Frontend Development',
      'Backend Development',
      'SQL & Supabase',
      'Database Integration',
      'CRUD Systems',
      'Authentication & Authorization',
      'API Integration',
      'Responsive UI Design',
    ],
    description: 'Designing responsive UIs and robust backend pipelines with secure auth, protected routes, and structured databases.',
  },
  {
    id: 'desktop-mobile',
    num: '04',
    title: 'DESKTOP, MOBILE & OFFLINE-FIRST APPLICATIONS',
    skills: [
      'Desktop Application Dev',
      'Mobile Application Dev',
      'Local & Offline Applications',
      'Embedded SQLite Databases',
      'Zero Cloud Dependency',
      'Native OS Integration',
    ],
    description: 'Engineering self-contained desktop software and mobile utilities that operate reliably offline with persistent local storage.',
  },
  {
    id: 'data-devops',
    num: '05',
    title: 'DATA PROCESSING, BUILDS & RELEASE DEPLOYMENT',
    skills: [
      'Excel & CSV Import / Export',
      'Git & GitHub Version Control',
      'Application Packaging',
      'Native Builds & Releases',
      'Production Deployment',
    ],
    description: 'Handling automated spreadsheet data pipelines, managing version control, and packaging production-ready release binaries.',
  },
]

export default function Skills() {
  const [activeId, setActiveId] = useState<string>('ai-workflow')

  function toggleService(id: string) {
    setActiveId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Centered Heading */}
        <div className="text-center space-y-3">
          <Reveal as="p" className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
            03 // TECHNICAL EXPERTISE & DOMAINS
          </Reveal>
          <Reveal as="h2" className="font-display font-bold text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-black">
            ENGINEERING
            <br />
            CAPABILITIES
          </Reveal>

          <Reveal as="p" className="max-w-xl mx-auto text-xs sm:text-sm font-mono text-gray-500 leading-relaxed pt-1">
            AI-assisted development, full-stack & desktop engineering, offline databases, and disciplined error resolution.
          </Reveal>
        </div>

        {/* Numbered Pill Row List */}
        <div className="mt-14 space-y-3.5">
          {SERVICES_DATA.map((srv, idx) => {
            const isActive = activeId === srv.id

            return (
              <Reveal key={srv.id} delay={idx * 60} variant="up">
                <div
                  onClick={() => toggleService(srv.id)}
                  className={`w-full transition-all duration-300 cursor-pointer select-none border overflow-hidden ${
                    isActive
                      ? 'rounded-3xl sm:rounded-[36px] bg-black text-white border-black shadow-2xl scale-[1.01]'
                      : 'rounded-full bg-white text-black border-gray-300 hover:border-black hover:shadow-sm'
                  }`}
                >
                  {/* Top Bar of the Pill Row */}
                  <div className="flex items-center justify-between px-4 sm:px-7 py-3.5 sm:py-4 gap-3">
                    {/* Left Number Circle */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center font-mono text-xs sm:text-sm font-semibold shrink-0 transition-colors ${
                        isActive
                          ? 'border-zinc-700 bg-zinc-900 text-white'
                          : 'border-gray-200 bg-white text-black'
                      }`}
                    >
                      {srv.num}
                    </div>

                    {/* Center Service Title */}
                    <span className="font-display font-bold text-xs sm:text-base uppercase tracking-wider text-center flex-1 px-2">
                      {srv.title}
                    </span>

                    {/* Right Arrow Circle */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'border-zinc-700 bg-zinc-900 text-white'
                          : 'border-gray-200 bg-white text-black'
                      }`}
                    >
                      {isActive ? (
                        <ArrowRight className="w-4 h-4 text-white" />
                      ) : (
                        <ArrowDown className="w-4 h-4 text-black" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Content Drawer when row is active */}
                  {isActive && (
                    <div className="px-6 sm:px-10 pb-7 pt-3 text-left border-t border-zinc-800/90 animate-fadeUp space-y-4">
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed max-w-2xl font-body">
                        {srv.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {srv.skills.map((s) => (
                          <span
                            key={s}
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-700/80 text-zinc-200 hover:border-zinc-500 hover:text-white transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0" />
                            <span>{s}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
