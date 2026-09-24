import { useRef } from 'react'
import {
  Compass,
  Wrench,
  Palette,
  TrendingUp,
  Sparkles,
  GraduationCap,
  MapPin,
  Calendar,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import type { ThemeMode } from '../../types'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import NextSection from './NextSection'

interface AboutProps {
  theme: ThemeMode
}

const TILT_MAX = 12

const TRAIT_ICONS = [Compass, Wrench, Palette, TrendingUp]

export default function About({ theme }: AboutProps) {
  const profileImage = theme === 'dark' ? '/1.jpg' : '/9.png'
  const idCardRef = useRef<HTMLDivElement>(null)

  function updateTilt(clientX: number, clientY: number) {
    const el = idCardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * TILT_MAX}deg) rotateY(${
      (px - 0.5) * TILT_MAX
    }deg)`
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    updateTilt(e.clientX, e.clientY)
  }

  function handleTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    if (e.touches[0]) {
      updateTilt(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  function handlePressDown() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = el.style.transform.replace('rotateY(', 'scale(0.98) rotateY(')
  }

  function handlePressUp() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = el.style.transform.replace('scale(0.98)', '')
  }

  function resetIdTilt() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden w-full max-w-full">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full min-w-0">
        <SectionHeading
          step="05"
          eyebrow="story-and-mindset"
          title="Practical learning over passive theory"
          intro="An honest look at who I am, how I approach software, and what drives me to keep breaking and rebuilding systems."
        />

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-12 items-start mt-8 sm:mt-12 w-full min-w-0">
          {/* Narrative & Traits (Left Column) */}
          <Reveal variant="left" className="lg:col-span-7 space-y-6 sm:space-y-8 w-full min-w-0">
            <div className="space-y-3.5 sm:space-y-4">
              {CONFIG.aboutParagraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-muted leading-relaxed text-sm sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quick Context Chips */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-border bg-surface2 text-xs font-mono text-ink">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                <span>B.S. Information Tech</span>
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-border bg-surface2 text-xs font-mono text-ink">
                <MapPin className="w-3.5 h-3.5 text-secondary" />
                <span>Philippines (GMT+8)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full border border-border bg-surface2 text-xs font-mono text-ink">
                <Calendar className="w-3.5 h-3.5 text-ok" />
                <span>2026/2027 Roles</span>
              </span>
            </div>

            {/* Core Traits Grid */}
            <div className="pt-2 sm:pt-4">
              <h3 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 sm:mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span>Core Operating Principles</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-4">
                {CONFIG.traits.map((trait, i) => {
                  const Icon = TRAIT_ICONS[i] ?? Compass
                  return (
                    <div
                      key={trait.name}
                      className="card-sheen card-spot group rounded-2xl border border-border bg-surface p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span className="font-mono text-xs text-secondary font-semibold">
                            0{i + 1}
                          </span>
                          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-surface2 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-sm sm:text-base text-ink">
                          {trait.name}
                        </h4>
                        <p className="text-muted text-xs leading-relaxed mt-1.5 sm:mt-2">
                          {trait.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </Reveal>

          {/* Interactive 3D Student ID Card (Right Column) */}
          <Reveal
            as="aside"
            variant="right"
            className="lg:col-span-5 flex flex-col items-center justify-center pt-2 sm:pt-4 w-full max-w-full overflow-hidden"
            aria-label="Student credential badge"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] mx-auto">
              {/* Soft ambient back glow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-primary/15 blur-2xl -z-10"
              />

              {/* Lanyard Clip Attachment */}
              <div
                aria-hidden="true"
                className="pointer-events-none mx-auto w-fit flex flex-col items-center z-20 relative -mb-3"
              >
                <div className="w-3.5 h-8 sm:h-10 rounded-t-md bg-secondary/80 shadow-sm" />
                <div className="w-10 sm:w-12 h-4 sm:h-5 rounded-sm bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-900 border border-border shadow-md" />
              </div>

              {/* The 3D Interactive Card Frame */}
              <div
                ref={idCardRef}
                onMouseMove={handleMouseMove}
                onMouseDown={handlePressDown}
                onMouseUp={handlePressUp}
                onMouseLeave={resetIdTilt}
                onTouchStart={handlePressDown}
                onTouchMove={handleTouchMove}
                onTouchEnd={resetIdTilt}
                className="relative transition-transform duration-150 ease-out select-none cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden border border-border bg-surface shadow-2xl text-ink w-full"
              >
                {/* Lanyard Hole Cutout */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 top-2 z-20 w-8 h-3 rounded-full bg-bg border border-border/80 shadow-inner"
                />

                {/* Card Holographic Sheen overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-20 hologram-sheen opacity-40 hover:opacity-80 transition-opacity"
                />

                {/* Card Header Strip */}
                <div className="bg-gradient-to-r from-primary via-primary to-secondary px-5 sm:px-6 pt-6 sm:pt-7 pb-4 sm:pb-5 text-white flex items-center justify-between">
                  <div>
                    <p className="font-display font-bold text-lg sm:text-xl tracking-tight leading-none">
                      GilmierDev
                    </p>
                    <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/80 mt-1">
                      Student Developer Pass
                    </p>
                  </div>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/20 border border-white/40 grid place-items-center font-display font-bold text-xs sm:text-sm">
                    GD
                  </div>
                </div>

                {/* Profile & Credentials */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Photo with status indicator */}
                    <div className="shrink-0 relative">
                      <div className="w-20 h-28 sm:w-24 sm:h-32 rounded-xl overflow-hidden border-2 border-border bg-surface2 shadow-md">
                        <img
                          src={profileImage}
                          alt="Gilmier Cabil"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="absolute -bottom-1.5 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-ok border-2 border-surface flex items-center justify-center text-[9px] sm:text-[10px] text-white" title="Active student">
                        ✓
                      </span>
                    </div>

                    {/* ID Details */}
                    <div className="min-w-0 space-y-2 sm:space-y-2.5">
                      <div>
                        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-muted">
                          Candidate
                        </p>
                        <p className="font-display font-bold text-base sm:text-lg leading-tight text-ink">
                          Gilmier Cabil
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-muted">
                          Program & Track
                        </p>
                        <p className="text-xs font-semibold text-ink leading-snug">
                          B.S. Information Tech
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-muted">Full-Stack & Desktop</p>
                      </div>

                      <div>
                        <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-muted">
                          ID Credential
                        </p>
                        <p className="font-mono text-xs font-bold text-primary">
                          2026-GMD-001
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metadata Matrix */}
                  <div className="mt-4 sm:mt-5 grid grid-cols-3 divide-x divide-border rounded-xl border border-border bg-surface2/60 text-center py-2 sm:py-2.5">
                    <div>
                      <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-muted">Academic</p>
                      <p className="text-xs font-bold mt-0.5 text-ink">2026–27</p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-muted">Status</p>
                      <p className="text-xs font-bold mt-0.5 text-ok">Active</p>
                    </div>
                    <div>
                      <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-muted">Focus</p>
                      <p className="text-xs font-bold mt-0.5 text-secondary">Builder</p>
                    </div>
                  </div>

                  {/* Simulated Security Barcode */}
                  <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-dashed border-border flex flex-col items-center gap-1.5 sm:gap-2">
                    <div
                      aria-hidden="true"
                      className="h-6 sm:h-8 w-full rounded-sm opacity-60 dark:opacity-40"
                      style={{
                        background:
                          'repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 5px)',
                      }}
                    />
                    <p className="font-mono text-[8px] sm:text-[9px] tracking-[0.35em] text-muted">
                      VERIFIED BUILDER ID
                    </p>
                  </div>
                </div>
              </div>

              {/* Interaction Hint */}
              <p className="text-center font-mono text-[10px] sm:text-[11px] text-muted mt-2.5 sm:mt-3 flex items-center justify-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>Move cursor or drag with finger to tilt</span>
              </p>
            </div>
          </Reveal>
        </div>

        <NextSection id="contact" label="Contact — let's build something together" />
      </div>
    </section>
  )
}