import { CONFIG } from '../../data/config'
import { GithubIcon } from '../ui/Icons'

export default function Footer() {
  return (
    <footer className="border-t border-border/80 py-10 sm:py-12 px-4 sm:px-6 mt-10 sm:mt-12 bg-surface2/20 relative">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-white text-black text-xs font-bold grid place-items-center shadow-[0_0_8px_rgba(255,255,255,0.2)]">
              G
            </span>
            <span className="font-display font-bold text-base text-white">
              Gilmier<span className="text-zinc-400 font-medium">Dev</span>
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-400 mt-1">
            Learning technology by building real, resilient software.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-6 font-mono text-xs text-zinc-400">
          <a href="#home" className="hover:text-white transition-colors py-1">
            Home
          </a>
          <a href="#skills" className="hover:text-white transition-colors py-1">
            Stack
          </a>
          <a href="#work" className="hover:text-white transition-colors py-1">
            Work
          </a>
          <a href="#approach" className="hover:text-white transition-colors py-1">
            Approach
          </a>
          <a href="#about" className="hover:text-white transition-colors py-1">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors py-1">
            Contact
          </a>
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors inline-flex items-center gap-1.5 py-1"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright & Status */}
        <div className="flex flex-col items-center md:items-end gap-1 font-mono text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} GilmierDev. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px] text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <span>Built with React, TypeScript & Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}