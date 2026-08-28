interface NextSectionProps {
  /** Target section id, without the "#". */
  id: string
  /** Human label for that section, e.g. "Projects". */
  label: string
}

/**
 * Forward link at the end of a section. On desktop the navbar is always there,
 * but on a phone it is behind a hamburger — so without this the only way
 * onward is to keep scrolling and hope.
 */
export default function NextSection({ id, label }: NextSectionProps) {
  return (
    <div className="mt-14 pt-8 border-t border-border">
      <a
        href={`#${id}`}
        className="group inline-flex items-center gap-2.5 text-sm font-semibold hover:text-primary transition-colors"
      >
        <span className="tag text-muted uppercase tracking-[.14em]">Next</span>
        {label}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 text-primary transition-transform group-hover:translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </a>
    </div>
  )
}
