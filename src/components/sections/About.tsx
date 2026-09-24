import { useRef } from 'react'
import { CONFIG } from '../../data/config'
import type { ThemeMode } from '../../types'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

interface AboutProps {
  theme: ThemeMode
}

const TILT_MAX = 14

const TRAIT_ICONS = ['🧭', '🔧', '🎨', '🌱']

export default function About({ theme }: AboutProps) {
  const profileImage = theme === 'dark' ? '/1.jpg' : '/9.png'
  const idCardRef = useRef<HTMLDivElement>(null)

  function handleIdTilt(e: { clientX: number; clientY: number }) {
    const el = idCardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * TILT_MAX}deg) rotateY(${
      (px - 0.5) * TILT_MAX
    }deg)`
  }

  function handleIdTiltDown() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = el.style.transform.replace('rotateY(', 'scale(.97) rotateY(')
  }

  function handleIdTiltUp() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = el.style.transform.replace('scale(.97)', '')
  }

  function resetIdTilt() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="04"
          eyebrow="about-me"
          title="I learn by building, not by memorizing"
          intro="Not a summary of everything I know — an honest look at how I got here and what keeps me going."
        />

        <div className="grid gap-10 items-start mt-12 sm:grid-cols-5">
          <Reveal variant="left" className="sm:col-span-3">
            <div className="space-y-5">
              {CONFIG.aboutParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-muted leading-relaxed max-w-[62ch] text-[15px] sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <h3 className="font-display font-semibold text-xl mt-10 mb-4 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 text-primary grid place-items-center text-sm transition-transform duration-300"
              >
                ▸
              </span>
              What drives me
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {CONFIG.traits.map((trait, i) => (
                <li
                  key={trait.name}
                  className="card-sheen card-spot group rounded-2xl border border-border bg-surface p-5 flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-mono text-xs text-secondary">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-lg transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                    >
                      {TRAIT_ICONS[i]}
                    </span>
                  </span>
                  <p className="font-semibold">{trait.name}</p>
                  <p className="text-muted text-sm leading-relaxed">{trait.desc}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="aside" variant="right" className="sm:col-span-2 flex justify-center" aria-label="Student ID card">
            <div className="relative pt-11">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[540px] rounded-full bg-primary/15 blur-3xl"
              />
              <div
                ref={idCardRef}
                onMouseMove={handleIdTilt}
                onMouseDown={handleIdTiltDown}
                onMouseUp={handleIdTiltUp}
                onMouseLeave={resetIdTilt}
                className="relative transition-transform duration-200 ease-out select-none cursor-grab active:cursor-grabbing"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 z-20 flex flex-col items-center"
                >
                  <div
                    className="w-3 h-12 rounded-t-md shadow-sm"
                    style={{
                      background:
                        'repeating-linear-gradient(180deg, var(--secondary) 0 10px, transparent 10px 20px)',
                    }}
                  />
                  <div className="w-12 h-5 -mt-1 rounded-sm bg-gradient-to-b from-slate-200 to-slate-500 border border-slate-500/60 shadow-md" />
                </div>

                <div className="relative w-full max-w-[420px] rounded-2xl overflow-hidden bg-white text-slate-800 shadow-[0_16px_40px_-16px_rgba(0,0,0,.4)] dark:shadow-[0_16px_40px_-12px_rgba(0,0,0,.75)] pb-5">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 -translate-x-1/2 top-0 z-10 w-9 h-4 rounded-full bg-bg border border-slate-300/70 shadow-[inset_0_2px_3px_rgba(0,0,0,.15)]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,.35), transparent 60%)',
                    }}
                  />
                  <div className="bg-gradient-to-r from-primary to-secondary px-6 pt-5 pb-4 flex items-center justify-between text-white">
                    <div>
                      <p className="font-display font-bold text-2xl leading-none tracking-tight">
                        GilmierDev
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[.35em] text-white/70 mt-1.5">
                        Portfolio Pass
                      </p>
                    </div>
                    <span className="w-11 h-11 rounded-full bg-white/20 border border-white/30 grid place-items-center font-display font-bold text-lg">
                      G
                    </span>
                  </div>

                  <div className="px-6 pt-6 flex items-start gap-5">
                    <div className="shrink-0">
                      <div className="w-28 h-36 rounded-lg overflow-hidden border border-slate-300">
                        <img
                          src={profileImage}
                          alt="Gilmier profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-2.5 rounded-md bg-primary/10 border border-primary/30 py-1 text-center font-mono text-[10px] uppercase tracking-widest text-primary">
                        Student
                      </p>
                    </div>

                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[.2em] text-slate-400">
                        Id Number
                      </p>
                      <p className="font-mono text-sm font-semibold">2026-GMD-001</p>

                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[.2em] text-slate-400">
                        Name
                      </p>
                      <p className="font-display font-bold text-xl leading-tight">
                        Gilmier
                        <br />
                        Cabil
                      </p>

                      <p className="mt-4 font-mono text-[10px] uppercase tracking-[.2em] text-slate-400">
                        Program
                      </p>
                      <p className="text-sm font-semibold leading-snug">Information Technology</p>
                    </div>
                  </div>

                  <div className="mx-6 mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-lg border border-slate-200">
                    <div className="px-2 py-3 text-center">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Year</p>
                      <p className="text-xs font-bold mt-1">2026–27</p>
                    </div>
                    <div className="px-2 py-3 text-center">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Status</p>
                      <p className="text-xs font-bold mt-1">Active</p>
                    </div>
                    <div className="px-2 py-3 text-center">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400">Valid</p>
                      <p className="text-xs font-bold mt-1">2027</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 pb-5 px-6 border-t border-dashed border-slate-300 flex flex-col items-center gap-2.5">
                    <div
                      aria-hidden="true"
                      className="h-12 w-full rounded-sm"
                      style={{
                        background:
                          'repeating-linear-gradient(90deg, #334155 0 2px, transparent 2px 5px)',
                      }}
                    />
                    <p className="font-mono text-[10px] tracking-[.35em] text-slate-400">
                      2026GMD001
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <NextSection id="contact" label="Contact — let's talk" />
      </div>
    </section>
  )
}