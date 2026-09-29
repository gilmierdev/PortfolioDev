import { useEffect, useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  Clock,
  ArrowUp,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import { GithubIcon } from '../ui/Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    function updateClock() {
      const now = new Date()
      const timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setLocalTime(timeStr)
    }

    updateClock()
    const timer = setInterval(updateClock, 1000)
    return () => clearInterval(timer)
  }, [])

  function copyEmail() {
    navigator.clipboard.writeText(CONFIG.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="contact" className="relative w-full pt-16 bg-white overflow-hidden">
      {/* Massive Black Rounded Container */}
      <div className="w-full bg-black text-white rounded-t-[40px] sm:rounded-t-[64px] pt-20 sm:pt-28 pb-12 sm:pb-16 px-6 sm:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Top Social/Platform Links */}
          <Reveal variant="up">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono tracking-widest uppercase text-gray-400">
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                LINKEDIN
              </a>
              <a
                href={`mailto:${CONFIG.email}`}
                className="hover:text-white transition-colors"
              >
                EMAIL
              </a>
              <span className="text-gray-600 hidden sm:inline">•</span>
              <span className="text-gray-400 flex items-center gap-1.5 text-xs">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>MANILA {localTime || 'GMT+8'}</span>
              </span>
            </div>
          </Reveal>

          {/* Monumental Centerpiece Headline (Original Developer Statement) */}
          <Reveal variant="up" delay={80} className="my-12 sm:my-20">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-3">
              04 // HAVE AN AMBITIOUS PROJECT OR ROLE?
            </p>
            <h2 className="font-display font-bold text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] tracking-tight uppercase leading-none select-none talk-headline-gradient">
              LET&apos;S BUILD.
            </h2>
          </Reveal>

          {/* Bottom Row of Pill Action Buttons */}
          <Reveal variant="up" delay={140} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
              {/* Direct Mail */}
              <a
                href={`mailto:${CONFIG.email}`}
                className="px-6 sm:px-8 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-200 transition-all active:scale-95 shadow-lg flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-black" />
                <span>Email Me</span>
              </a>

              {/* GitHub */}
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 rounded-full border border-zinc-700 bg-zinc-950 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-white transition-all active:scale-95 flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={copyEmail}
                className="px-6 sm:px-8 py-3 rounded-full border border-zinc-700 bg-zinc-950 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-white transition-all active:scale-95 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              {/* Back to Top */}
              <a
                href="#home"
                className="px-6 sm:px-8 py-3 rounded-full border border-zinc-700 bg-zinc-950 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:border-white transition-all active:scale-95 flex items-center gap-1.5"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </Reveal>

          {/* Copyright Sub-bar (Authentic GilmierDev Attribution) */}
          <div className="w-full mt-20 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-500">
            <p>© {new Date().getFullYear()} GILMIERDEV. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED & BUILT WITH REACT, TYPESCRIPT & TAILWIND</p>
          </div>
        </div>
      </div>
    </section>
  )
}