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
    id: 'frontend',
    num: '01',
    title: 'FRONTEND ARCHITECTURE & REACT ECOSYSTEM',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5 & CSS3', 'JavaScript ES6+'],
    description:
      'Designing reactive, component-driven user interfaces with strict TypeScript contracts, instant Vite HMR, and responsive layout ergonomics.',
  },
  {
    id: 'backend',
    num: '02',
    title: 'SERVER RUNTIMES, REST & SECURE APIS',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Tokens', 'MongoDB & Mongoose', 'bcrypt'],
    description:
      'Engineering robust server middleware pipelines, document modeling with Mongoose, secure JWT token lifecycle, and role-based route guards.',
  },
  {
    id: 'desktop',
    num: '03',
    title: 'DESKTOP ELECTRON & LOCAL SQLITE STORAGE',
    skills: ['Electron', 'better-sqlite3', 'electron-builder', 'Recharts', 'ExcelJS', 'PDFKit'],
    description:
      'Building Windows native desktop software with zero-latency embedded SQLite, IPC context isolation, dynamic financial charting, and batch file export.',
  },
  {
    id: 'ai',
    num: '04',
    title: 'AI-ASSISTED DEVELOPMENT & CODE VERIFICATION',
    skills: ['AI Pair Programming', 'Strict Code Verification', 'Prompt Engineering', 'Rapid Prototyping'],
    description:
      'Leveraging cutting-edge AI coding models as high-speed development partners while maintaining rigorous manual verification, edge-case testing, and clean architecture.',
  },
  {
    id: 'security',
    num: '05',
    title: 'APPLICATION HARDENING & SECRETS HYGIENE',
    skills: ['Endpoint Hardening', 'Anti-Spam Rate Limits', 'Input Sanitization', 'IPC Context Isolation', 'Zero Secrets Leakage'],
    description:
      'Implementing server-side permission validation, request throttling to prevent abuse, secure cookie policies, and defense-in-depth data parsing.',
  },
]

export default function Skills() {
  const [activeId, setActiveId] = useState<string>('desktop') // Row 03 is default active

  function toggleService(id: string) {
    setActiveId((prev) => (prev === id ? '' : id))
  }

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Main Centered Heading with Original Software Engineering Copy */}
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
            Full-stack architecture, high-performance desktop software, offline SQLite databases, and hardened security.
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
