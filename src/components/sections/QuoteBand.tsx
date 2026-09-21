import Reveal from '../ui/Reveal'

/** The centered manifesto band between the hero and the work. */
export default function QuoteBand() {
  return (
    <section aria-label="Manifesto" className="py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal as="p" className="tag flex items-center justify-center gap-2.5 mb-5">
          <span aria-hidden="true" className="h-px w-10 bg-border" />
          <span className="text-secondary">manifesto</span>
          <span aria-hidden="true" className="h-px w-10 bg-border" />
        </Reveal>
        <Reveal
          as="blockquote"
          className="font-display font-semibold text-2xl sm:text-3xl leading-snug tracking-tight"
        >
          A good build isn't luck. It's understanding the problem first, building the
          smallest version that works, and breaking it until you actually understand it.
        </Reveal>
      </div>
    </section>
  )
}