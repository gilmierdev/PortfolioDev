export type SkillLevel = 'comfortable' | 'learning' | 'exploring'

export interface SkillItem {
  name: string
  level: SkillLevel
}

export interface SkillGroup {
  label: string
  items: SkillItem[]
}

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

export interface TimelineEntry {
  /** "01"…"08", or "Now" for the current step. */
  step: string
  title: string
  desc: string
  /** Marks the final, in-progress step so it can be highlighted. */
  now?: boolean
}

export type ProjectFlag = 'ongoing' | 'idea'

export interface Project {
  title: string
  kind: string
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
  skillGroups: SkillGroup[]
  timeline: TimelineEntry[]
  projects: Project[]
}

export type ThemeMode = 'light' | 'dark'
