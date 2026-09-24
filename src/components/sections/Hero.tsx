import { useState, useRef } from 'react'
import { ArrowRight, FolderGit2, Mail, Sparkles } from 'lucide-react'
import { CONFIG } from '../../data/config'
import IntroTerminal from '../ui/IntroTerminal'
import { GithubIcon } from '../ui/Icons'
import type { Project } from '../../types'

interface HeroProps {
  onSelectProject?: (project: Project) => void
}

export default function Hero({ onSelectProject }: HeroProps) {
  const [cooldown, setCooldown] = useState(false)
  const lastClickRef = useRef<number>(0)

  // Anti-spam limited quick preview trigger
  function handleAutoSeeWork() {
    const now = Date.now()
    if (now - lastClickRef.current < 800 || cooldown) {
      return
    }
    lastClickRef.current = now
    setCooldown(true)
    setTimeout(() => setCooldown(false), 900)

    // Open featured project or first project
    const featured =
      CONFIG.projects.find((p) => p.flag?.tone === 'ok') ?? CONFIG.projects[0]
    if (featured && onSelectProject) {
      onSelectProject(featured)
    }
  }

  return (
    <section
      id="home"
      className="relative w-full max-w-full min-h-[90svh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* Background ambient lighting and fine grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div
        className="aurora aurora--1 pointer-events-none left-0 sm:left-[-6%] top-[-8%] w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-primary/20"
        aria-hidden="true"
      />
      <div
        className="aurora aurora--2 pointer-events-none right-0 sm:right-[-5%] top-[12%] w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-secondary/20"
        aria-hidden="true"
      />
      <div
        className="aurora aurora--3 pointer-events-none left-[15%] sm:left-[35%] bottom-[-15%] w-[300px] sm:w-[500px] h-[220px] sm:h-[350px] bg-primary/10"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full min-w-0 grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
        {/* Left Column: Narrative & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start animate-fadeUp w-full min-w-0">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-border bg-surface/85 backdrop-blur-sm text-ink mb-4 sm:mb-6 text-[11px] sm:text-xs font-mono shadow-sm max-w-full">
            <span className="relative flex w-2 h-2 shrink-0">
              <span className="pulse-ring absolute inset-0 rounded-full bg-ok" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-ok" />
            </span>
            <span className="truncate">{CONFIG.availability ?? 'Open for Internships & Projects'}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-[4.2rem] leading-[1.08] tracking-tight text-ink break-words max-w-full">
            Building software with
            <br />
            <span className="text-gradient">practical purpose.</span>
          </h1>

          {/* Role Subheading */}
          <p className="mt-3.5 sm:mt-5 font-mono text-xs sm:text-base text-ink flex items-center flex-wrap gap-x-2 gap-y-1">
            <span className="text-primary font-semibold">Gilmier Cabil</span>
            <span className="text-muted/60" aria-hidden="true">•</span>
            <span>IT Student & Developer</span>
            <span className="text-muted/60 hidden sm:inline" aria-hidden="true">•</span>
            <span className="text-secondary font-medium block sm:inline">MERN & Desktop</span>
          </p>

          {/* Description */}
          <p className="mt-3 sm:mt-4 text-muted text-sm sm:text-lg leading-relaxed max-w-xl">
            {CONFIG.bio ??
              'College IT student teaching myself full-stack and systems engineering by building real things: web applications, offline desktop systems, and clean interfaces.'}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            {/* Quick Auto-See Work Modal Button with Anti-Spam Cooldown */}
            <button
              type="button"
              onClick={handleAutoSeeWork}
              disabled={cooldown}
              className={`btn-primary btn-shine font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 text-xs sm:text-sm flex-1 sm:flex-initial transition-all active:scale-95 ${
                cooldown ? 'opacity-70 cursor-not-allowed' : ''
              }`}
              title="Open case study modal for featured work directly"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>{cooldown ? 'Opening...' : 'Quick See Work'}</span>
            </button>

            <a
              href="#work"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold border border-border bg-surface hover:border-primary/50 hover:text-primary transition-all text-xs sm:text-sm inline-flex items-center justify-center gap-2 text-ink flex-1 sm:flex-initial"
            >
              <FolderGit2 className="w-4 h-4 text-muted" />
              <span>All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="p-2.5 sm:p-3 rounded-xl border border-border bg-surface hover:border-primary/50 text-muted hover:text-primary transition-all flex items-center justify-center"
              title="Get in touch"
              aria-label="Contact section"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 sm:p-3 rounded-xl border border-border bg-surface hover:border-primary/50 text-muted hover:text-primary transition-all flex items-center justify-center"
              title="View GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Credential / Quick Highlights */}
          <div className="mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-border/80 w-full grid grid-cols-3 gap-2 sm:gap-4 text-left">
            <div>
              <p className="font-display font-bold text-lg sm:text-2xl text-ink">3+</p>
              <p className="text-[10px] sm:text-xs text-muted font-mono mt-0.5">Real Builds</p>
            </div>
            <div>
              <p className="font-display font-bold text-lg sm:text-2xl text-ink">Full-Stack</p>
              <p className="text-[10px] sm:text-xs text-muted font-mono mt-0.5">MERN & Desktop</p>
            </div>
            <div>
              <p className="font-display font-bold text-lg sm:text-2xl text-ink">BS IT</p>
              <p className="text-[10px] sm:text-xs text-muted font-mono mt-0.5">College Undergrad</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Terminal */}
        <div
          className="lg:col-span-5 animate-fadeUp opacity-0 mt-4 lg:mt-0 w-full min-w-0 max-w-full"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <div className="relative group w-full min-w-0 max-w-full">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 opacity-60 blur-lg sm:blur-xl transition-opacity duration-500 group-hover:opacity-90 pointer-events-none"
            />
            <IntroTerminal onOpenProject={onSelectProject} />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <a
        href="#skills"
        aria-label="Scroll to technologies"
        className="mt-8 sm:mt-12 flex flex-col items-center gap-1 text-muted hover:text-primary transition-colors text-xs font-mono group"
      >
        <span className="tracking-widest uppercase text-[9px] sm:text-[10px] opacity-75">Scroll</span>
        <div className="w-4 sm:w-5 h-7 sm:h-8 rounded-full border border-border flex justify-center pt-1 sm:pt-1.5 group-hover:border-primary/50 transition-colors">
          <span className="w-1 h-1.5 sm:h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </a>
    </section>
  )
}