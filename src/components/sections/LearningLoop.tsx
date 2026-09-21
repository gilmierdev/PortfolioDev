import { useEffect, useRef, useState } from 'react'
import { CONFIG } from '../../data/config'

const STEP_MS = 2600

/** Shown before the cycle starts, and permanently under reduced motion. */
const RESTING_NOTE =
  'Five steps, then repeat. The last three are the ones that actually teach me something.'

/**
 * The `while (curious)` block from the About section.
 *
 * Cycles one step at a time, but only while the block is on screen and the
 * tab is focused — and not at all if the visitor asked for reduced motion,
 * in which case it stays static and fully readable.
 */
export default function LearningLoop() {
  const figureRef = useRef<HTMLElement>(null)
  const [onScreen, setOnScreen] = useState(false)
  const [pageVisible, setPageVisible] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [active, setActive] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = figureRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sync = () => setPageVisible(!document.hidden)
    document.addEventListener('visibilitychange', sync)
    return () => document.removeEventListener('visibilitychange', sync)
  }, [])

  useEffect(() => {
    if (reduced || !onScreen || !pageVisible) return
    setStarted(true)
    const timer = window.setInterval(
      () => setActive((i) => (i + 1) % CONFIG.loopSteps.length),
      STEP_MS,
    )
    return () => window.clearInterval(timer)
  }, [reduced, onScreen, pageVisible])

  const current = CONFIG.loopSteps[active]

  return (
    <figure
      ref={figureRef}
      aria-labelledby="loopCaption"
      className="mt-6 mb-0 mx-0 rounded-xl border border-border bg-surface2/60 overflow-hidden"
    >
      <figcaption
        id="loopCaption"
        className="tag uppercase tracking-[.12em] text-muted px-[18px] py-3 border-b border-border bg-surface/60"
      >
        How I actually work
      </figcaption>

      <pre className="m-0 py-[18px] font-mono text-sm leading-[1.9] overflow-x-auto">
        <code>
          <span className="loop-line">
            <span className="c-key">while</span> (<span className="c-var">curious</span>) {'{'}
          </span>
          {CONFIG.loopSteps.map((step, i) => (
            <span
              key={step.key}
              className={`loop-line loop-line--in ${started && i === active ? 'is-on' : ''}`}
            >
              me.<span className="c-fn">{step.key}</span>();
            </span>
          ))}
          <span className="loop-line">{'}'}</span>
        </code>
      </pre>

      <p
        aria-live="polite"
        className="min-h-[2.9em] m-0 px-[18px] py-3 border-t border-border bg-surface/60 text-muted text-sm"
      >
        {started ? withEmphasis(current.note, current.emphasis) : RESTING_NOTE}
      </p>
    </figure>
  )
}

/** Bolds one word inside a note — e.g. "why" in the `fix` step. */
function withEmphasis(note: string, emphasis?: string) {
  if (!emphasis) return note
  const at = note.indexOf(emphasis)
  if (at === -1) return note
  return (
    <>
      {note.slice(0, at)}
      <b className="font-medium text-[color:var(--ok)]">{emphasis}</b>
      {note.slice(at + emphasis.length)}
    </>
  )
}
