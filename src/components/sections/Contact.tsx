import { useEffect, useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  Clock,
  Send,
  ArrowUpRight,
} from 'lucide-react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { GithubIcon } from '../ui/Icons'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [localTime, setLocalTime] = useState('')

  // Live Philippine Time (GMT+8)
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

  const githubHandle = `@${CONFIG.github.replace(/\/+$/, '').split('/').pop()}`

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden w-full max-w-full">
      <div
        className="aurora aurora--1 pointer-events-none left-0 sm:left-[-5%] bottom-[-20%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-primary/15"
        aria-hidden="true"
      />
      <div
        className="aurora aurora--2 pointer-events-none right-0 sm:right-[-5%] top-[10%] w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] bg-secondary/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative w-full min-w-0">
        <SectionHeading
          step="06"
          eyebrow="contact"
          title="Let's build something real"
          intro="Always open to discussions about software architecture, college internship roles, or collaborating on ambitious projects. Good questions and ideas are always welcome."
        />

        <div className="grid md:grid-cols-12 gap-5 sm:gap-6 mt-8 sm:mt-12 w-full min-w-0">
          {/* Email Direct Action Card */}
          <Reveal
            variant="left"
            className="md:col-span-7 card-spot card-sheen group p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-surface flex flex-col justify-between hover:border-primary/40 transition-all duration-300 hover:shadow-xl w-full min-w-0"
          >
            <div className="w-full min-w-0">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface2 border border-border flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <span className="pill pill--ok text-[10px] sm:text-xs">
                  Primary Contact
                </span>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                Send a Direct Message
              </h3>
              <p className="text-muted text-xs sm:text-base leading-relaxed mt-2 max-w-lg">
                Whether you have an internship opportunity, a project proposal, or just want to discuss software engineering, my inbox is open.
              </p>

              {/* Email Address Highlight Bar with Responsive Wrap */}
              <div className="mt-5 sm:mt-6 p-3 sm:p-3.5 rounded-xl border border-border bg-surface2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3 w-full min-w-0">
                <span className="font-mono text-xs sm:text-base text-ink font-semibold break-all select-all min-w-0">
                  {CONFIG.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-3 py-2 sm:py-1.5 rounded-lg border border-border bg-surface hover:border-primary text-xs font-mono font-medium flex items-center justify-center gap-1.5 text-ink hover:text-primary transition-all active:scale-95 shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-ok" />
                      <span className="text-ok">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <a
                href={`mailto:${CONFIG.email}`}
                className="btn-primary btn-shine px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Open in Email App</span>
              </a>

              <p className="text-[11px] font-mono text-muted flex items-center justify-center sm:justify-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ok" />
                <span>Typically replies within 24 hours</span>
              </p>
            </div>
          </Reveal>

          {/* Right Column: GitHub & Live Timezone */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6 w-full min-w-0">
            {/* GitHub Card */}
            <Reveal
              variant="right"
              className="card-spot card-sheen group p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-border bg-surface hover:border-primary/40 transition-all duration-300 hover:shadow-xl w-full min-w-0"
            >
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full min-w-0"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-surface2 border border-border flex items-center justify-center text-ink group-hover:scale-110 group-hover:text-primary transition-all">
                    <GithubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-ink">
                  GitHub Profile
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-1">
                  Where the code lives ·{' '}
                  <span className="text-secondary font-mono font-medium">{githubHandle}</span>
                </p>
                <p className="text-xs text-muted/80 mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-border/60">
                  Inspect repositories for Financial Encoder, Notepad, and upcoming experimental builds.
                </p>
              </a>
            </Reveal>

            {/* Live Timezone & Availability Widget */}
            <Reveal
              variant="right"
              delay={60}
              className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border bg-surface2/60 relative overflow-hidden w-full min-w-0"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  <span>Local Timezone</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-ok font-semibold bg-ok/10 px-2 py-0.5 rounded-full border border-ok/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse" />
                  PHT (UTC+8)
                </span>
              </div>

              <p className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight font-mono">
                {localTime || '12:00:00 PM'}
              </p>
              <p className="text-xs text-muted mt-1">
                Manila, Philippines · Open for global remote collaboration
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}