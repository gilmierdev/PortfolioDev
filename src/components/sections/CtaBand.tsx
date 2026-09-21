import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'

/** Full-width call-to-action band between the toolkit and contact. */
export default function CtaBand() {
  return (
    <section aria-label="Call to action" className="px-4 sm:px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <Reveal className="rounded-3xl border border-border bg-surface2/60 px-6 py-14 sm:px-12 text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Have an idea you're stuck on? Let's build it.
          </h2>
          <p className="text-muted max-w-xl leading-relaxed">
            Send me the brief, or start with a question. I'd rather show what I can build
            than ask you to take my word for it.
          </p>
          <a
            href={`mailto:${CONFIG.email}`}
            className="btn-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Get in touch
          </a>
        </Reveal>
      </div>
    </section>
  )
}