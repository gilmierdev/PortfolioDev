import { useRef, useState, type FormEvent } from 'react'
import { CONFIG } from '../../data/config'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

type FieldName = 'name' | 'email' | 'message'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** Returns an error message, or '' when the value is acceptable. */
function validateField(field: FieldName, raw: string): string {
  const value = raw.trim()
  if (!value) return 'This field is still empty.'
  if (field === 'email' && !EMAIL_RE.test(value)) return 'That email address does not look right.'
  if (field === 'message' && value.length < 10) {
    return 'A few more words would help — at least 10 characters.'
  }
  return ''
}

const EMPTY = { name: '', email: '', message: '' }
const ORDER: FieldName[] = ['name', 'email', 'message']

const githubHandle = `@${CONFIG.github.replace(/\/+$/, '').split('/').pop()}`

export default function Contact() {
  const [values, setValues] = useState({ ...EMPTY })
  const [errors, setErrors] = useState({ ...EMPTY })
  const [status, setStatus] = useState<{ tone: 'ok' | 'error'; text: string } | null>(null)

  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  }

  function handleChange(field: FieldName, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }))
    // Only re-check live once a field is already flagged, so we don't shout
    // at someone halfway through typing their email.
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }))
    }
  }

  function handleBlur(field: FieldName) {
    setErrors((prev) => ({ ...prev, [field]: validateField(field, values[field]) }))
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const next = { ...EMPTY }
    ORDER.forEach((field) => {
      next[field] = validateField(field, values[field])
    })
    setErrors(next)

    const firstBad = ORDER.find((field) => next[field])
    if (firstBad) {
      setStatus({ tone: 'error', text: 'Check the highlighted fields above.' })
      refs[firstBad].current?.focus()
      return
    }

    // No backend, and no request of any kind — this is deliberate.
    const firstName = values.name.trim().split(' ')[0] || 'there'
    setStatus({
      tone: 'ok',
      text: `Thanks ${firstName} — but nothing was sent. This form is front-end only, so your message stayed in your browser. Reach me on GitHub and it will get there.`,
    })
    setValues({ ...EMPTY })
    setErrors({ ...EMPTY })
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          step="05"
          eyebrow="contact"
          title="Say hello"
          intro="Happy to talk about projects, study resources, or anything I've built here. I'm still learning, so good questions are welcome in both directions."
        />

        <div className="grid lg:grid-cols-5 gap-10 items-start mt-12">
          <Reveal
            as="div"
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl border border-border bg-surface"
          >
            <p className="text-sm text-muted rounded-lg border border-[color:var(--explore)]/30 border-l-[3px] border-l-[color:var(--explore)] bg-[color:var(--explore-dim)] px-3.5 py-3 mb-6">
              Heads up: this form is front-end only. There's no server behind it, so nothing gets sent
              or stored — use GitHub to reach me for real.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <Field
                field="name"
                label="Name"
                error={errors.name}
                value={values.name}
                inputRef={refs.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                field="email"
                label="Email"
                type="email"
                error={errors.email}
                value={values.email}
                inputRef={refs.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Field
                field="message"
                label="Message"
                textarea
                error={errors.message}
                value={values.message}
                inputRef={refs.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <button
                type="submit"
                className="btn-primary text-white font-semibold px-6 py-3 rounded-xl w-full hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Send message
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-sm min-h-[1.4em] ${
                  status?.tone === 'error' ? 'text-[color:var(--danger)]' : 'text-secondary'
                }`}
              >
                {status?.text ?? ''}
              </p>
            </form>
          </Reveal>

          <Reveal as="aside" className="lg:col-span-2 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display font-semibold text-lg pb-3.5 mb-4 border-b border-border">
              Find me
            </h3>

            <div className="space-y-3">
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3.5 rounded-xl border border-border bg-surface2/60 hover:border-primary transition-colors"
              >
                <span className="block font-semibold">GitHub</span>
                <span className="block text-muted text-sm">Where the code lives · {githubHandle}</span>
              </a>
              <a
                href={`mailto:${CONFIG.email}`}
                className="block p-3.5 rounded-xl border border-border bg-surface2/60 hover:border-primary transition-colors"
              >
                <span className="block font-semibold">Email</span>
                <span className="block text-muted text-sm">{CONFIG.email}</span>
              </a>
            </div>

            <p className="text-muted text-sm mt-4">
              GitHub is the only account I'm listing. I'd rather link one place I actually use than pad
              this out.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  field: FieldName
  label: string
  value: string
  error: string
  type?: string
  textarea?: boolean
  inputRef: React.RefObject<HTMLInputElement> | React.RefObject<HTMLTextAreaElement>
  onChange: (field: FieldName, value: string) => void
  onBlur: (field: FieldName) => void
}

function Field({
  field,
  label,
  value,
  error,
  type = 'text',
  textarea = false,
  inputRef,
  onChange,
  onBlur,
}: FieldProps) {
  const id = `contact-${field}`
  const errorId = `${id}-error`
  const shared = {
    id,
    name: field,
    value,
    required: true,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': errorId,
    onBlur: () => onBlur(field),
    className: `w-full px-4 py-3 rounded-xl bg-surface2 border border-border focus:border-primary outline-none transition-colors ${
      error ? 'field-invalid' : ''
    }`,
  } as const

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
      </label>

      {textarea ? (
        <textarea
          {...shared}
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          rows={5}
          onChange={(e) => onChange(field, e.target.value)}
          className={`${shared.className} resize-y min-h-[110px]`}
        />
      ) : (
        <input
          {...shared}
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={type}
          autoComplete={field === 'email' ? 'email' : 'name'}
          onChange={(e) => onChange(field, e.target.value)}
        />
      )}

      <p id={errorId} className="text-[color:var(--danger)] text-xs min-h-[1.2em] mt-1">
        {error}
      </p>
    </div>
  )
}
