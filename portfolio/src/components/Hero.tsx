import { CONFIG } from '../data/config'

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        <span className="absolute left-[8%] top-[22%] animate-float tag px-3 py-1 rounded-lg glass">&lt;/&gt;</span>
        <span className="absolute right-[10%] top-[18%] animate-floatSlow tag px-3 py-1 rounded-lg glass">git commit</span>
        <span className="absolute left-[14%] bottom-[16%] animate-floatSlow tag px-3 py-1 rounded-lg glass">me.build()</span>
        <span className="absolute right-[6%] bottom-[24%] animate-float tag px-3 py-1 rounded-lg glass">npm run dev</span>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="animate-fadeUp">
          <p className="tag inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-primary mb-5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> {CONFIG.eyebrow}
          </p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {CONFIG.name}
            </span>
          </h1>
          <p className="mt-4 font-mono text-sm sm:text-base tracking-wide">
            IT Student <span className="text-secondary px-1" aria-hidden="true">•</span>
            Developer <span className="text-secondary px-1" aria-hidden="true">•</span> Builder
          </p>
          <p className="mt-5 text-muted text-lg sm:text-xl leading-relaxed max-w-[30ch]">
            {CONFIG.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-xl font-semibold border border-border hover:border-primary hover:text-primary transition-colors"
            >
              About Me
            </a>
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-primary border border-border hover:border-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="animate-fadeUp opacity-0" style={{ animationDelay: '.15s', animationFillMode: 'forwards' }}>
          <div className="rounded-2xl overflow-hidden border border-border terminal-shadow bg-surface">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 tag text-muted">gilmier@dev-machine — intro.sh</span>
            </div>
            <div className="p-6 font-mono text-sm leading-7">
              <p>
                <span className="text-secondary">$</span> whoami
              </p>
              <p className="text-muted">College IT student, learning full-stack the practical way.</p>
              <p className="mt-3">
                <span className="text-secondary">$</span> cat currently_learning.txt
              </p>
              <p className="text-muted">React · Node.js · Express · MongoDB · TypeScript · Roblox / Lua</p>
              <p className="mt-3">
                <span className="text-secondary">$</span> ./run_intro
                <span className="code-caret" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
