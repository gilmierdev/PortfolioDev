import type { SiteConfig } from '../types'

export const CONFIG: SiteConfig = {
  name: 'GilmierDev',
  role: 'IT Student • Developer • Builder • Social media Manager',
  eyebrow: 'Currently studying Information Technology',
  tagline: 'Learning technology by building real things.',
  email: 'gilmiercabil@gmail.com',
  github: 'https://github.com/gilmierdev',

  aboutParagraphs: [
    "I'm a college Information Technology student teaching myself full-stack development the practical way. Reading about a concept rarely makes it stick for me, so I start a project instead and find out where my understanding runs out.",
    'My interests spread wider than web development: programming languages and how they differ, backend and API design, UI design and making things feel good to use, using AI tools as a coding partner, computer hardware, and video editing. They feed each other more than I expected — and editing video taught me about pacing and attention.',
    "I'm early in this. There's plenty I haven't learned yet, and I'd rather say that than pretend otherwise. What I can say is that I finish things, break them, and understand them better afterward.",
  ],

  traits: [
    {
      name: 'Curiosity',
      desc: 'I want to know why it works, not just that it works.',
    },
    {
      name: 'Hands-on problem solving',
      desc: 'I debug my way to understanding rather than around it.',
    },
    {
      name: 'Things that look good and work',
      desc: 'A working app with a bad interface is only half done.',
    },
    {
      name: 'Continuous growth',
      desc: "Every project should teach me something the last one didn't.",
    },
  ],

  loopSteps: [
    {
      key: 'learn',
      note: 'Read it, watch it, follow along. This part is the easiest and the least useful on its own.',
    },
    {
      key: 'build',
      note: 'Make the thing for real. Working beats perfect, and finished beats clever.',
    },
    {
      key: 'break',
      note: 'Push it until something fails. This is the step most people skip, and it teaches me the most.',
    },
    {
      key: 'fix',
      note: 'Find out why it broke, not just what broke. That answer is the actual lesson.',
      emphasis: 'why',
    },
    {
      key: 'improve',
      note: 'Go back and clean it up. If the next version is not clearer than the last, I have not learned anything yet.',
    },
  ],

  projects: [
    {
      title: 'MERN E-Commerce Application',
      kind: 'E-commerce',
      category: 'Website',
      tagline: 'A storefront built to learn the full MERN stack end to end.',
      description:
        'A storefront built to learn the full MERN stack end to end. Authentication was the part that really taught me something — tokens, protected routes, and why you never trust the client.',
      features: [
        'Product catalog with categories',
        'Cart and checkout flow',
        'JWT login and protected routes',
        'Admin view for managing products',
      ],
      challenges:
        'Authentication. I had it "working" long before I had it right — hiding an admin button on the client felt like protection until I realised anyone could just call the endpoint directly. Learning to check permissions on the server was the lesson that stuck.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
      accent: 'tile--sage',
      emoji: '🛒',
    },
    {
      title: 'Notepad Website',
      kind: 'Utility',
      category: 'Website',
      demo: 'https://notepad-24hm.onrender.com/',
      tagline: 'A no-frills notes app that autosaves as you type.',
      description:
        'A lightweight notepad in the browser — the kind of tool I reach for daily instead of an app I installed to admire. Notes autosave to localStorage as you type, so closing the tab never costs you work.',
      features: [
        'Autosave to localStorage',
        'Multiple notes in a sidebar',
        'Word and character count',
        'Plain-text focus, zero clutter',
      ],
      challenges:
        'The elegant part of a notepad is restraint. No buttons for everything, no colour pickers — just a blank page that quietly saves. Keeping undo and cursor position feeling native was trickier than it sounds.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      accent: 'tile--honey',
      emoji: '📝',
    },
  ],
}
