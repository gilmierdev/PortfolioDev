import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const githubHandle = `@${CONFIG.github.replace(/\/+$/, '').split('/').pop()}`

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="aurora aurora--1 pointer-events-none left-[-6%] bottom-[-20%] w-[380px] h-[380px] bg-primary/15" aria-hidden="true" />
      <div className="aurora aurora--3 pointer-events-none right-[-8%] top-[10%] w-[320px] h-[320px] bg-secondary/15" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          step="06"
          eyebrow="contact"
          title="Say hello"
          intro="Happy to talk about projects, study resources, or anything I've built here. I'm still learning, so good questions are welcome in both directions."
        />

        <Reveal variant="zoom" className="mt-12">
          <div className="grid sm:grid-cols-2 gap-5">
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="card-spot card-sheen group block p-7 sm:p-9 rounded-2xl border border-border bg-surface hover:border-primary transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
            >
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="w-14 h-14 rounded-2xl grid place-items-center bg-surface2 border border-border text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.97c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </span>
                <span>
                  <span className="font-display font-semibold text-lg block">GitHub</span>
                  <span className="block text-muted text-sm mt-1">
                    Where the code lives · <span className="text-secondary font-mono">{githubHandle}</span>
                  </span>
                </span>
              </span>
            </a>

            <a
              href={`mailto:${CONFIG.email}`}
              className="card-spot card-sheen group block p-7 sm:p-9 rounded-2xl border border-border bg-surface hover:border-primary transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
            >
              <span className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="w-14 h-14 rounded-2xl grid place-items-center bg-surface2 border border-border text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 5L2 7" />
                  </svg>
                </span>
                <span>
                  <span className="font-display font-semibold text-lg block">Email</span>
                  <span className="block text-muted text-sm mt-1 break-all">
                    <span className="hidden sm:inline">{CONFIG.email}</span>
                    <span className="sm:hidden">Send me a message</span>
                  </span>
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="text-muted text-sm">
            GitHub is the only account I&apos;m listing. I&apos;d rather link one place I actually use
            than pad this out.
          </p>
        </Reveal>
      </div>
    </section>
  )
}