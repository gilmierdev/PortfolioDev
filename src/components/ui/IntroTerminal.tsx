import { useEffect, useRef, useState } from 'react'
import { Terminal, Copy, Check, CornerDownLeft, ExternalLink, ShieldAlert } from 'lucide-react'
import { CONFIG } from '../../data/config'
import type { Project } from '../../types'

interface HistoryEntry {
  cmd: string
  output: string | string[]
  isError?: boolean
  isProjectList?: boolean
}

interface IntroTerminalProps {
  onOpenProject?: (project: Project) => void
}

const COMMAND_MAP: Record<string, string | string[]> = {
  whoami:
    'GilmierDev — AI-assisted full-stack developer learning software engineering the practical way.',
  stack: [
    '• Frontend: React, TypeScript, Tailwind CSS, Vite',
    '• Backend: Node.js, Express, REST APIs, JWT Auth',
    '• Database: MongoDB, SQLite, better-sqlite3',
    '• Desktop: Electron, electron-builder, IPC architecture',
    '• AI & Security: AI assistance workflow, route guards, API hardening, sandboxed IPC',
  ],
  philosophy:
    'Build the smallest working slice. Break it on purpose. Fix the root cause. Refactor.',
  status: 'Open for software development internships and collaborative projects.',
  contact: 'Email: gilmiercabil@gmail.com  |  GitHub: @gilmierdev',
  help: 'Available commands: whoami, stack, projects, philosophy, status, contact, clear',
}

const INITIAL_STEPS = [
  { cmd: 'whoami', out: COMMAND_MAP.whoami },
  { cmd: 'cat focus.txt', out: 'Full-Stack Web, Offline Desktop & AI Assistance' },
  { cmd: 'echo $STATUS', out: 'Ready to build, break, and learn.' },
]

export default function IntroTerminal({ onOpenProject }: IntroTerminalProps) {
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [typed, setTyped] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [autoTypingDone, setAutoTypingDone] = useState(false)
  const [inputVal, setInputVal] = useState('')
  const [copied, setCopied] = useState(false)
  const [isRateLimited, setIsRateLimited] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const lastCmdTimeRef = useRef<number>(0)
  const recentClicksCountRef = useRef<number>(0)

  // Initial typing simulation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setHistory(INITIAL_STEPS.map((s) => ({ cmd: s.cmd, output: s.out })))
      setAutoTypingDone(true)
      return
    }

    if (autoTypingDone || currentStep >= INITIAL_STEPS.length) {
      setAutoTypingDone(true)
      return
    }

    const targetCmd = INITIAL_STEPS[currentStep].cmd

    if (typed.length < targetCmd.length) {
      const timeout = setTimeout(() => {
        setTyped(targetCmd.slice(0, typed.length + 1))
      }, 45)
      return () => clearTimeout(timeout)
    }

    // Command finished typing, push output after a pause
    const pauseTimeout = setTimeout(() => {
      setHistory((prev) => [
        ...prev,
        { cmd: targetCmd, output: INITIAL_STEPS[currentStep].out },
      ])
      setTyped('')
      setCurrentStep((prev) => prev + 1)
    }, 450)

    return () => clearTimeout(pauseTimeout)
  }, [typed, currentStep, autoTypingDone])

  // Scroll to bottom on new commands
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history, typed])

  function handleRunCommand(rawCmd: string) {
    const now = Date.now()

    // Anti-spam guard: if spamming clicks within 350ms, block
    if (now - lastCmdTimeRef.current < 350) {
      recentClicksCountRef.current += 1
      if (recentClicksCountRef.current >= 3) {
        setIsRateLimited(true)
        setHistory((prev) => [
          ...prev,
          {
            cmd: rawCmd,
            output: '[anti-spam] Cooldown active (rate-limited). Please wait a second before sending another command.',
            isError: true,
          },
        ])
        setTimeout(() => {
          setIsRateLimited(false)
          recentClicksCountRef.current = 0
        }, 1800)
      }
      return
    }

    if (isRateLimited) return

    lastCmdTimeRef.current = now
    recentClicksCountRef.current = 0

    const cmd = rawCmd.trim().toLowerCase()
    if (!cmd) return

    if (cmd === 'clear') {
      setHistory([])
      setInputVal('')
      return
    }

    if (cmd === 'projects') {
      setHistory((prev) => [
        ...prev,
        {
          cmd: rawCmd,
          output: 'Select a project to inspect architecture details:',
          isProjectList: true,
        },
      ])
      setInputVal('')
      return
    }

    const result = COMMAND_MAP[cmd]
    if (result) {
      setHistory((prev) => [...prev, { cmd: rawCmd, output: result }])
    } else {
      setHistory((prev) => [
        ...prev,
        {
          cmd: rawCmd,
          output: `Command not found: "${cmd}". Type "help" for available commands.`,
          isError: true,
        },
      ])
    }
    setInputVal('')
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleRunCommand(inputVal)
    }
  }

  function copyAll() {
    const plainText = history
      .map((h) => `$ ${h.cmd}\n${Array.isArray(h.output) ? h.output.join('\n') : h.output}`)
      .join('\n\n')
    navigator.clipboard.writeText(plainText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="w-full max-w-full min-w-0 rounded-2xl border border-border bg-surface terminal-shadow overflow-hidden flex flex-col font-mono text-xs sm:text-sm transition-all duration-300"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-border bg-surface2/80 select-none">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-600/80 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-500/70 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-400/60 inline-block" />
          <div className="ml-1 sm:ml-2 flex items-center gap-1.5 text-zinc-400 text-[11px] sm:text-xs">
            <Terminal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            <span className="font-semibold text-white">gilmier@box</span>
            <span className="opacity-50 hidden sm:inline">~ zsh</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              copyAll()
            }}
            title="Copy terminal content"
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-surface transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
          <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-zinc-300 font-medium bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            interactive
          </span>
        </div>
      </div>

      {/* Terminal logs body */}
      <div
        ref={scrollRef}
        className="p-4 sm:p-5 overflow-y-auto max-h-[260px] sm:max-h-[340px] space-y-2.5 sm:space-y-3 leading-relaxed text-xs sm:text-sm"
      >
        {history.map((entry, idx) => (
          <div key={`${entry.cmd}-${idx}`} className="space-y-1">
            <div className="flex items-center gap-1.5 text-white font-semibold">
              <span className="text-zinc-500">$</span>
              <span>{entry.cmd}</span>
            </div>

            {/* Special Project List with Clickable Modal Triggers */}
            {entry.isProjectList ? (
              <div className="text-zinc-400 pl-3 sm:pl-4 space-y-2 border-l border-zinc-800 my-2">
                <p className="text-[11px] sm:text-xs text-zinc-300">{entry.output}</p>
                <div className="space-y-1.5 pt-1">
                  {CONFIG.projects.map((proj, pIdx) => (
                    <div
                      key={proj.title}
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-surface2/60 border border-border hover:border-zinc-500 transition-colors"
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span>{proj.emoji}</span>
                        <span className="font-semibold text-white truncate text-[11px] sm:text-xs">
                          {pIdx + 1}. {proj.title}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          onOpenProject?.(proj)
                        }}
                        className="text-[10px] sm:text-[11px] font-mono text-zinc-200 hover:text-white px-2 py-0.5 rounded border border-white/20 bg-white/5 hover:bg-white hover:text-black flex items-center gap-1 shrink-0 transition-colors"
                      >
                        <span>Inspect</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : Array.isArray(entry.output) ? (
              <div className="text-zinc-400 pl-3 sm:pl-4 space-y-0.5 border-l border-zinc-800">
                {entry.output.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
              </div>
            ) : (
              <p className={entry.isError ? 'text-zinc-300 pl-3 sm:pl-4 font-semibold border-l border-zinc-700' : 'text-zinc-400 pl-3 sm:pl-4'}>
                {entry.output}
              </p>
            )}
          </div>
        ))}

        {/* Live typing line during initial playback */}
        {!autoTypingDone && (
          <div className="flex items-center gap-1.5 text-white font-semibold">
            <span className="text-zinc-500">$</span>
            <span>{typed}</span>
            <span className="code-caret" />
          </div>
        )}

        {/* Interactive CLI Input once ready */}
        {autoTypingDone && (
          <div className="pt-1 flex items-center gap-2">
            <span className="text-zinc-500 font-semibold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isRateLimited}
              placeholder={isRateLimited ? 'cooldown active (rate limited)...' : "type 'projects' or tap pills below..."}
              className="flex-1 bg-transparent text-white placeholder:text-zinc-600 focus:outline-none font-mono text-sm disabled:opacity-50"
              aria-label="Interactive terminal input"
            />
            {inputVal.trim() && !isRateLimited && (
              <button
                type="button"
                onClick={() => handleRunCommand(inputVal)}
                className="text-zinc-400 hover:text-white transition-colors p-1"
                aria-label="Run command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Quick Interactive Command Bar with Anti-Spam Cooldown protection */}
      <div
        className="px-3 sm:px-4 py-2 sm:py-2.5 bg-surface2/60 border-t border-border flex items-center gap-1.5 overflow-x-auto select-none no-scrollbar"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 shrink-0 mr-1 flex items-center gap-1">
          {isRateLimited ? (
            <span className="text-zinc-300 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              Wait
            </span>
          ) : (
            'Quick:'
          )}
        </span>
        {['whoami', 'projects', 'stack', 'philosophy', 'contact', 'clear'].map((c) => (
          <button
            key={c}
            type="button"
            disabled={isRateLimited}
            onClick={(e) => {
              e.stopPropagation()
              handleRunCommand(c)
            }}
            className={`px-2.5 py-1.5 sm:py-1 rounded-lg text-[11px] font-mono border transition-all active:scale-95 shrink-0 min-h-[30px] flex items-center justify-center ${
              isRateLimited
                ? 'opacity-40 border-border bg-surface text-zinc-500 cursor-not-allowed'
                : c === 'projects'
                ? 'bg-white/10 border-white/25 text-white font-semibold hover:bg-white hover:text-black'
                : 'bg-surface border-border text-zinc-400 hover:text-white hover:border-zinc-500'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  )
}