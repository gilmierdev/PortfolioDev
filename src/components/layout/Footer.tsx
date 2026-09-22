import { CONFIG } from '../../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-border py-9 px-4 sm:px-6 mt-8">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs text-muted text-center sm:text-right">
          © {new Date().getFullYear()} {CONFIG.name}
        </p>
      </div>
    </footer>
  )
}
