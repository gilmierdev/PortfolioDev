import { CONFIG } from '../../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-9 px-4 sm:px-6 mt-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {CONFIG.name}
        </p>
        <p className="font-mono text-xs text-muted flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          Built by learning — one break at a time
        </p>
      </div>
    </footer>
  )
}