import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'

const TILT_MAX = 10

export default function About() {
  const idCardRef = useRef<HTMLDivElement>(null)

  function updateTilt(clientX: number, clientY: number) {
    const el = idCardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height))
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * TILT_MAX}deg) rotateY(${
      (px - 0.5) * TILT_MAX
    }deg)`
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    updateTilt(e.clientX, e.clientY)
  }

  function resetTilt() {
    const el = idCardRef.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top Header Row with Original Section Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-gray-200">
          {/* Left: Section Header with Circular Arrow */}
          <Reveal variant="left" className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
              01 // BACKGROUND & PHILOSOPHY
            </span>
            <div className="flex items-center gap-3">
              <h2 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase text-black">
                ABOUT
              </h2>
              <a
                href="#work"
                aria-label="Scroll to projects"
                className="circle-arrow-btn group hover:scale-105"
              >
                <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-colors" />
              </a>
            </div>
          </Reveal>

          {/* Right: Engineering Manifesto Quote */}
          <Reveal variant="right" className="max-w-md">
            <p className="font-display font-medium text-xs sm:text-sm uppercase tracking-wider text-black leading-relaxed">
              &ldquo;WORKING BEATS PERFECT, AND FINISHED BEATS CLEVER. I BELIEVE IN ARCHITECTURAL RIGOR, DELIBERATE PRACTICE, AND DEEP ROOT-CAUSE DISCOVERY.&rdquo;
            </p>
          </Reveal>
        </div>

        {/* 3-Column Metric Counters */}
        <Reveal variant="up" className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white">
            <div className="p-8 sm:p-12 text-center md:text-left space-y-2">
              <p className="font-display font-bold text-4xl sm:text-6xl text-black tracking-tight">
                3+
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
                PACKAGED REAL BUILDS
              </p>
            </div>

            <div className="p-8 sm:p-12 text-center md:text-left space-y-2">
              <p className="font-display font-bold text-4xl sm:text-6xl text-black tracking-tight">
                100%
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
                OFFLINE-FIRST ARCHITECTURE
              </p>
            </div>

            <div className="p-8 sm:p-12 text-center md:text-left space-y-2">
              <p className="font-display font-bold text-4xl sm:text-6xl text-black tracking-tight">
                BS IT
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 font-semibold">
                COLLEGE UNDERGRADUATE
              </p>
            </div>
          </div>
        </Reveal>

        {/* Narrative & Custom 3D Developer Pass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
          {/* Left: About Narrative */}
          <Reveal variant="left" className="lg:col-span-7 space-y-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-black uppercase tracking-tight">
              Practical learning over passive theory
            </h3>
            {CONFIG.aboutParagraphs.map((p, idx) => (
              <p key={idx} className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-black">
                B.S. Information Tech
              </span>
              <span className="px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-black">
                Manila, Philippines (GMT+8)
              </span>
              <span className="px-3.5 py-1.5 rounded-full border border-black bg-black text-white font-semibold">
                Open for 2026/27 Roles
              </span>
            </div>
          </Reveal>

          {/* Right: 3D Developer Pass Badge */}
          <Reveal variant="right" className="lg:col-span-5 flex justify-center">
            <div
              ref={idCardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              className="w-full max-w-[340px] rounded-3xl border border-gray-200 bg-white p-6 shadow-xl transition-transform duration-200 ease-out select-none cursor-grab active:cursor-grabbing"
            >
              {/* Badge Header Strip */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <div>
                  <p className="font-display font-bold text-lg text-black tracking-tight uppercase">
                    GilmierDev
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-gray-500">
                    Developer Pass · 2026-27
                  </p>
                </div>
                <span className="w-8 h-8 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center font-mono">
                  GD
                </span>
              </div>

              {/* Headshot & Info */}
              <div className="mt-5 flex gap-4 items-center">
                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shrink-0 flex items-end justify-center">
                  <img
                    src="/image2.png"
                    alt="GilmierDev"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gray-400">Track</p>
                  <p className="font-display font-bold text-sm text-black truncate">Full-Stack & Desktop</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-gray-400 pt-1">Status</p>
                  <p className="font-mono text-xs text-black font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                    Verified Active
                  </p>
                </div>
              </div>

              {/* Barcode Strip */}
              <div className="mt-5 pt-4 border-t border-dashed border-gray-200 flex flex-col items-center gap-1">
                <div
                  aria-hidden="true"
                  className="h-6 w-full rounded-sm opacity-60 text-black"
                  style={{
                    background:
                      'repeating-linear-gradient(90deg, currentColor 0 2px, transparent 2px 5px)',
                  }}
                />
                <p className="font-mono text-[8px] tracking-[0.35em] text-gray-400">
                  VERIFIED BUILDER ID
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}