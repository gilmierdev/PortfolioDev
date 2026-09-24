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
  /** Filter group used by the Work gallery tabs, e.g. "Website", "Desktop". */
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

export interface SkillItem {
  name: string
  category: 'frontend' | 'backend' | 'desktop' | 'tools'
  highlight?: boolean
}

export interface SiteConfig {
  name: string
  role: string
  eyebrow: string
  tagline: string
  bio?: string
  email: string
  github: string
  location?: string
  availability?: string
  aboutParagraphs: string[]
  traits: Trait[]
  loopSteps: LoopStep[]
  skills?: SkillItem[]
  projects: Project[]
}

export type ThemeMode = 'light' | 'dark'
