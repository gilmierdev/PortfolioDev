import { useRef, useState } from 'react'
import { ArrowDownRight, Sparkles, Terminal } from 'lucide-react'
import { CONFIG } from '../../data/config'
import type { Project } from '../../types'

interface HeroProps {
  onSelectProject?: (project: Project) => void
  onToggleTerminal?: () => void
}

const HERO_TAGS = [
  'MERN FULL-STACK',
  'OFFLINE SQLITE',
  'ELECTRON DESKTOP',
  'AI-ASSISTED DEV',
  'SYSTEM SECURITY',
]

export default function Hero({ onSelectProject, onToggleTerminal }: HeroProps) {
  const [cooldown, setCooldown] = useState(false)
  const lastClickRef = useRef<number>(0)

  function handleAutoSeeWork() {
    const now = Date.now()
    if (now - lastClickRef.current < 800 || cooldown) {
      return
    }
    lastClickRef.current = now
    setCooldown(true)
    setTimeout(() => setCooldown(false), 900)

    const featured =
      CONFIG.projects.find((p) => p.flag?.tone === 'ok') ?? CONFIG.projects[0]
    if (featured && onSelectProject) {
      onSelectProject(featured)
    }
  }

  return (
    <section
      id="home"
      className="relative w-full max-w-full min-h-screen flex flex-col justify-start items-center px-4 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-12 overflow-hidden bg-white"
    >
      {/* Subtle Hairline Grid */}
      <div className="absolute inset-0 grid-bg-light pointer-events-none" aria-hidden="true" />

      {/* Main Massive Editorial Headline (Custom & Original to GilmierDev) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center">
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[8rem] tracking-tight leading-[0.92] uppercase hero-headline-gradient select-none">
          BUILDING REAL
          <br />
          SOFTWARE.
        </h1>
      </div>

      {/* Hero 3-Column Visual Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-4 sm:mt-6 md:mt-2 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Origin info & Circular Arrow Button */}
        <div className="md:col-span-3 flex flex-col items-start justify-between self-stretch order-2 md:order-1 pt-3 sm:pt-5 md:pt-8">
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="font-mono text-xs uppercase tracking-widest text-black font-semibold">
                BUILDER · EST.2024
              </p>
              <p className="font-mono text-[10px] uppercase tracking-wider text-gray-500">
                MANILA, PH (UTC+8)
              </p>
            </div>

            <a
              href="#about"
              aria-label="Scroll down to about section"
              className="circle-arrow-btn group hover:scale-105"
            >
              <ArrowDownRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* Quick Interactive Actions */}
          <div className="mt-8 space-y-2.5">
            <button
              type="button"
              onClick={handleAutoSeeWork}
              disabled={cooldown}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold uppercase tracking-wider hover:bg-zinc-800 transition-all shadow-sm active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{cooldown ? 'Opening...' : 'Quick See Work'}</span>
            </button>

            {onToggleTerminal && (
              <button
                type="button"
                onClick={onToggleTerminal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:border-black transition-all shadow-sm active:scale-95"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Interactive CLI</span>
              </button>
            )}
          </div>
        </div>

        {/* Center Column: Cutout Portrait (Accurate to GilmierDev) */}
        <div className="md:col-span-6 flex flex-col items-center justify-end order-1 md:order-2 relative -mt-4 sm:-mt-8 md:-mt-14 lg:-mt-20 xl:-mt-24 z-10">
          <div className="relative w-80 sm:w-96 md:w-[480px] lg:w-[560px] max-w-full flex items-end justify-center select-none group">
            {/* Architectural Studio Backdrop Frame with Border & Elevation Shadow */}
            <div
              className="absolute inset-x-3 sm:inset-x-6 md:inset-x-8 bottom-0 top-16 sm:top-20 md:top-24 rounded-t-[120px] sm:rounded-t-[160px] md:rounded-t-[200px] rounded-b-3xl border border-gray-200/90 bg-gradient-to-b from-[#F7F7F8] via-[#F4F4F6] to-white shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12),0_10px_20px_-5px_rgba(0,0,0,0.06)] -z-10 transition-all duration-500 group-hover:border-black/30 group-hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.16)]"
              aria-hidden="true"
            >
              {/* Micro-dot texture inside arch frame */}
              <div className="absolute inset-0 rounded-t-[120px] sm:rounded-t-[160px] md:rounded-t-[200px] rounded-b-3xl opacity-35 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
              {/* Soft radial highlight */}
              <div className="absolute inset-0 rounded-t-[120px] sm:rounded-t-[160px] md:rounded-t-[200px] rounded-b-3xl bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.95),transparent_70%)]" />
            </div>

            {/* Grounding Contact Shadow */}
            <div
              className="absolute inset-x-12 bottom-1 h-8 bg-black/20 rounded-[100%] blur-xl -z-10"
              aria-hidden="true"
            />

            {/* Portrait Cutout with Layered Silhouette Drop Shadow */}
            <img
              src="/image2.png"
              alt="GilmierDev Portrait"
              className="w-full h-auto max-h-[560px] sm:max-h-[660px] md:max-h-[740px] lg:max-h-[820px] object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] drop-shadow-[0_30px_45px_rgba(0,0,0,0.08)] [mask-image:linear-gradient(to_bottom,black_90%,transparent_100%)] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Right Column: Statement & Vertical Stack Tags */}
        <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between self-stretch order-3 text-left md:text-right pt-3 sm:pt-5 md:pt-8">
          {/* Engineering Statement */}
          <p className="font-display font-medium text-xs sm:text-sm uppercase tracking-wider text-black max-w-xs leading-relaxed">
            TEACHING MYSELF FULL-STACK & SYSTEMS ENGINEERING BY DELIBERATELY BUILDING WORKING SOFTWARE.
          </p>

          {/* Vertical Stack List */}
          <div className="mt-8 space-y-2">
            {HERO_TAGS.map((tag) => (
              <p
                key={tag}
                className="font-display font-semibold text-xs sm:text-sm tracking-wider uppercase text-black hover:text-gray-500 transition-colors cursor-default"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}