/** One step in the engineering execution loop. */
export interface LoopStep {
  key: string
  note: string
  emphasis?: string
}

export type ProjectFlag = 'ok' | 'ongoing' | 'idea'

export interface Project {
  title: string
  kind: string
  category: string
  flag?: { label: string; tone: ProjectFlag }
  tagline: string
  description: string
  features: string[]
  challenges: string
  tech: string[]
  demo?: string
  github?: string
  emoji: string
  image?: string
  video?: string
}

export interface SiteConfig {
  name: string
  email: string
  github: string
  aboutParagraphs: string[]
  loopSteps: LoopStep[]
  projects: Project[]
}

export type ThemeMode = 'light' | 'dark'
