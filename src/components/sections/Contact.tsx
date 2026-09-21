import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const githubHandle = `@${CONFIG.github.replace(/\/+$/, '').split('/').pop()}`

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="06"
          eyebrow="contact"
          title="Say hello"
          intro="Happy to talk about projects, study resources, or anything I've built here. I'm still learning, so good questions are welcome in both directions."
        />

        <Reveal className="mt-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-primary transition-colors"
            >
              <span className="font-display font-semibold text-lg block">GitHub</span>
              <span className="block text-muted text-sm mt-1">Where the code lives · {githubHandle}</span>
            </a>
            <a
              href={`mailto:${CONFIG.email}`}
              className="block p-6 sm:p-8 rounded-2xl border border-border bg-surface hover:border-primary transition-colors"
            >
              <span className="font-display font-semibold text-lg block">Email</span>
              <span className="block text-muted text-sm mt-1">{CONFIG.email}</span>
            </a>
          </div>
        </Reveal>

        <p className="text-muted text-sm mt-4">
          GitHub is the only account I'm listing. I'd rather link one place I actually use than pad this
          out.
        </p>
      </div>
    </section>
  )
}