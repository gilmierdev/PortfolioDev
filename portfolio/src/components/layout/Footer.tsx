import { CONFIG } from '../../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-9 px-4 sm:px-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="font-display font-bold">
            {CONFIG.name} <span className="font-medium text-muted">— IT Student &amp; Developer</span>
          </p>
          <p className="text-muted text-sm mt-1">
            Building, learning, and improving one project at a time.
          </p>
        </div>
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {CONFIG.name}
        </p>
      </div>
    </footer>
  )
}
