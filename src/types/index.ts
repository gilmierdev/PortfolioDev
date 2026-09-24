export interface Trait {
  name: string
  desc: string
}

/** One line of the animated `while (curious)` block in the About section. */
export interface LoopStep {
  /** Method name shown in the code, e.g. "learn" for `me.learn();` */
  key: string
  /** The note revealed while this step is highlighted. */
  note: string
  /** Rendered bold inside the note — the word the step turns on. */
  emphasis?: string
}

export type ProjectFlag = 'ok' | 'ongoing' | 'idea'

export interface Project {
  title: string
  kind: string
  /** Filter group used by the Work gallery tabs, e.g. "Full-stack". */
  category: string
  flag?: { label: string; tone: ProjectFlag }
  tagline: string
  description: string
  features: string[]
  challenges: string
  tech: string[]
  /** Omitted while no real URL exists — the UI renders an inert placeholder. */
  demo?: string
  github?: string
  accent: string
  emoji: string
}

export interface SiteConfig {
  name: string
  role: string
  eyebrow: string
  tagline: string
  email: string
  github: string
  aboutParagraphs: string[]
  traits: Trait[]
  loopSteps: LoopStep[]
  projects: Project[]
}

export type ThemeMode = 'light' | 'dark'
