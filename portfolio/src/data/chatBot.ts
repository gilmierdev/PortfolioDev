import { CONFIG } from './config'
import type { SkillLevel } from '../types'

const BOT_NAME = 'GilBot'

function namesAtLevel(level: SkillLevel): string {
  return CONFIG.skillGroups
    .flatMap((group) => group.items)
    .filter((item) => item.level === level)
    .map((item) => item.name)
    .join(', ')
}

/**
 * Simple rule-based demo assistant — no external API calls.
 * To connect this to a real Claude-powered backend, replace the body of
 * getBotReply() with a fetch() call to your own server endpoint that
 * calls the Anthropic API using CONFIG as context.
 */
export function getBotReply(raw: string): string {
  const q = raw.toLowerCase()

  if (/project|built|build/.test(q)) {
    const shipped = CONFIG.projects.filter((p) => p.flag?.tone !== 'idea')
    return `There are ${CONFIG.projects.length} on here: ${CONFIG.projects
      .map((p) => p.title)
      .join(', ')}. ${shipped.length} are actually built — the Sports Analysis one is still just a concept, and it's listed as one on purpose. Hit "View Details" on any card for the full story.`
  }

  if (/tech|stack|skill|language|framework|know|good at/.test(q)) {
    return `I'd split it honestly rather than claim it all. Comfortable with: ${namesAtLevel(
      'comfortable',
    )}. Still learning: ${namesAtLevel('learning')}. Just poking at: ${namesAtLevel(
      'exploring',
    )}. The Skills section lays this out with the same labels — no percentage bars, because they'd be made up.`
  }

  if (/contact|reach|email|hire|internship|linkedin|github|message|form/.test(q)) {
    return `GitHub is the best bet — ${CONFIG.github}. Fair warning: the contact form on this page is front-end only, so nothing you type into it gets sent anywhere. Email works too: ${CONFIG.email}.`
  }

  if (/study|studying|major|school|university|college|degree|education|course/.test(q)) {
    return `I'm a college Information Technology student, teaching myself full-stack development alongside it. The Journey section walks through the order I actually learned things in, from fundamentals up to where I am now.`
  }

  if (/journey|learn|path|how did you|start/.test(q)) {
    const now = CONFIG.timeline.find((t) => t.now)
    return `It went in ${CONFIG.timeline.length} steps, each one only making sense because of the last. Right now: ${now?.title}. ${now?.desc}`
  }

  if (/roblox|game|lua/.test(q)) {
    return `Roblox is where I first learned that data has to survive a player leaving — DataStores, leaderboards, and keeping server and client scripts separate. It's an ongoing thing rather than a finished project.`
  }

  if (/hobb|interest|free time|fun|outside/.test(q)) {
    return `Wider than web dev: programming languages and how they differ, backend and API design, UI design, Roblox, AI tools as a coding partner, computer hardware, video editing, and sports. They feed each other more than I expected.`
  }

  if (/^(hi|hello|hey|yo|sup)\b/.test(q)) {
    return `Hey! I'm ${BOT_NAME} 🤖 — ask me about ${CONFIG.name}'s projects, skills, learning journey, or how to get in touch.`
  }

  if (/who are you|what are you|are you ai|are you real/.test(q)) {
    return `I'm a keyword-matching script built into this page, not a real AI model — just a faster way to find things here. For anything that needs a real answer, GitHub is better.`
  }

  return `I don't have a scripted answer for that one — try asking about the projects, skills, learning journey, or how to get in touch. Or reach me on GitHub: ${CONFIG.github}.`
}

export const GREETING = `Hey there 👋 I'm ${BOT_NAME}, a very simple assistant built into ${CONFIG.name}'s site. Ask me about the projects, skills, or how to get in touch!`

export const BOT_LABEL = BOT_NAME

export const EXAMPLE_PROMPTS: string[] = [
  'Tell me about your projects',
  'What are you actually good at?',
  'How did you learn all this?',
  'How can I contact you?',
]
