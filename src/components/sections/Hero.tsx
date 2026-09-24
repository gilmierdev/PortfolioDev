import { CONFIG } from '../../data/config'
import IntroTerminal from '../ui/IntroTerminal'

const FLOATERS = [
  { text: '</>', className: 'left-[8%] top-[20%]', slow: false },
  { text: 'git commit', className: 'right-[9%] top-[16%]', slow: true },
  { text: 'me.build()', className: 'left-[13%] bottom-[18%]', slow: true },
  { text: 'npm run dev', className: 'right-[5%] bottom-[26%]', slow: false },
  { text: 'GilmierDev', className: 'left-[8%] bottom-[3%]', slow: false },
  { text: 'BuildSomething', className: 'right-[6%] bottom-[4%]', slow: true },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-center items-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Layered background: grid, then drifting aurora orbs. */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="aurora aurora--1 pointer-events-none left-[-8%] top-[-10%] w-[420px] h-[420px] bg-primary/25" aria-hidden="true" />
      <div className="aurora aurora--2 pointer-events-none right-[-6%] top-[5%] w-[360px] h-[360px] bg-secondary/25" aria-hidden="true" />
      <div className="aurora aurora--3 pointer-events-none left-[30%] bottom-[-15%] w-[520px] h-[380px] bg-primary/15" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        {FLOATERS.map((f) => (
          <span
            key={f.text}
            className={`absolute ${f.className} ${
              f.slow ? 'animate-floatSlow' : 'animate-float'
            } tag px-3 py-1 rounded-lg glass shadow-sm`}
          >
            {f.text}
          </span>
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-14 items-center pt-24 pb-16">
        <div className="animate-fadeUp">
          <p className="tag inline-flex items-center gap-3 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary mb-6">
            <span className="relative flex w-2 h-2">
              <span className="pulse-ring absolute inset-0 rounded-full bg-primary" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primary" />
            </span>
            {CONFIG.eyebrow}
          </p>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-[4.6rem] leading-[1.03] tracking-tight">
            Hi, I&apos;m
            <br />
            <span className="text-gradient">{CONFIG.name}</span>
          </h1>

          <p className="mt-5 font-mono text-sm sm:text-base tracking-wide">
            IT Student <span className="text-secondary px-1" aria-hidden="true">•</span>Software & AI
            Developer <span className="text-secondary px-1" aria-hidden="true">•</span>Prompt Engineer
          </p>

          <p className="mt-5 text-muted text-lg sm:text-xl leading-relaxed max-w-[32ch]">
            {CONFIG.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="btn-primary btn-shine text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              See the work
            </a>
            <a
              href="#about"
              className="underline-grow px-7 py-3.5 rounded-xl font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
            >
              About Me
            </a>
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-7 py-3.5 rounded-xl font-semibold text-primary border border-border hover:border-primary transition-colors inline-flex items-center gap-2"
            >
              GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5 group-hover:-translate-x-0.5"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>
        </div>

        <div className="animate-fadeUp opacity-0" style={{ animationDelay: '.2s', animationFillMode: 'forwards' }}>
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <IntroTerminal />
          </div>
        </div>
      </div>

      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors"
      >
        <span className="tag text-[.62rem] uppercase tracking-[.22em]">scroll</span>
        <span className="scroll-cue" aria-hidden="true" />
      </a>
    </section>
  )
}