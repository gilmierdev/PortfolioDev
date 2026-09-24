import { Fragment, useEffect, useState } from 'react'

const LINES = [
  {
    cmd: 'whoami',
    out: 'College IT student, learning full-stack the practical way.',
  },
  {
    cmd: 'cat currently_learning.txt',
    out: 'React · Node.js · Express · MongoDB · TypeScript',
  },
  {
    cmd: './run_intro',
    out: 'Build it. Break it. Understand it. Repeat.',
  },
]

/**
 * A tiny self-typing terminal for the hero. Types each command character by
 * character, reveals the output line, then moves on. Under reduced motion it
 * renders fully typed and static, and it never loops back (no distraction).
 */
export default function IntroTerminal() {
  const [line, setLine] = useState(0)
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDone(true)
      return
    }

    const current = LINES[line]
    if (!current) return

    if (typed.length < current.cmd.length) {
      const t = setTimeout(() => setTyped(current.cmd.slice(0, typed.length + 1)), 42)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => {
      if (line < LINES.length - 1) {
        setLine((l) => l + 1)
        setTyped('')
      } else {
        setDone(true)
      }
    }, 520)
    return () => clearTimeout(t)
  }, [typed, line])

  const showAll = done || (line === LINES.length - 1 && typed === LINES[line].cmd)

  return (
    <div className="rounded-2xl overflow-hidden border border-border terminal-shadow bg-surface group">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 tag text-muted">gilmier@dev-machine — intro.sh</span>
        <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 tag text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          live
        </span>
      </div>
      <div className="p-6 font-mono text-sm leading-7">
        {LINES.slice(0, line).map((l) => (
          <Fragment key={l.cmd}>
            <p>
              <span className="text-secondary">$</span> {l.cmd}
            </p>
            <p className="text-muted">{l.out}</p>
          </Fragment>
        ))}

        {!showAll && (
          <p>
            <span className="text-secondary">$</span> {typed}
            <span className="code-caret" />
          </p>
        )}

        {showAll && (
          <>
            {LINES.map((l) => (
              <Fragment key={l.cmd}>
                <p>
                  <span className="text-secondary">$</span> {l.cmd}
                </p>
                <p className="text-muted">{l.out}</p>
              </Fragment>
            ))}
            <p className="mt-3">
              <span className="text-secondary">$</span> <span className="text-muted">_</span>
              <span className="code-caret" />
            </p>
          </>
        )}
      </div>
    </div>
  )
}