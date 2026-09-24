import { ArrowDown } from 'lucide-react'

interface NextSectionProps {
  /** Target section id, without the "#". */
  id: string
  /** Human label for that section, e.g. "Projects". */
  label: string
}

export default function NextSection({ id, label }: NextSectionProps) {
  return (
    <div className="mt-16 pt-8 border-t border-border/80">
      <a
        href={`#${id}`}
        className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold text-ink hover:text-primary transition-colors"
      >
        <span className="font-mono text-xs uppercase tracking-widest text-muted bg-surface2 px-2.5 py-1 rounded-md border border-border">
          Next
        </span>
        <span>{label}</span>
        <ArrowDown className="w-4 h-4 text-primary transition-transform group-hover:translate-y-1" />
      </a>
    </div>
  )
}
