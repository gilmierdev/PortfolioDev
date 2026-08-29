import type { SiteConfig } from '../types'

export const CONFIG: SiteConfig = {
  name: 'Gilmier',
  role: 'IT Student • Developer • Builder',
  eyebrow: 'Currently studying Information Technology',
  tagline: 'Learning technology by building real things.',
  email: 'gilmiercabil@example.com',
  github: 'https://github.com/gilmierdev',

  aboutParagraphs: [
    "I'm a college Information Technology student teaching myself full-stack development the practical way. Reading about a concept rarely makes it stick for me, so I start a project instead and find out where my understanding runs out.",
    'My interests spread wider than web development: programming languages and how they differ, backend and API design, UI design and making things feel good to use, building games and systems in Roblox, using AI tools as a coding partner, computer hardware, video editing, and sports. They feed each other more than I expected — designing a Roblox leaderboard taught me about data persistence, and editing video taught me about pacing and attention.',
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

  skillGroups: [
    {
      label: 'Programming',
      items: [
        { name: 'Java', level: 'comfortable' },
        { name: 'JavaScript', level: 'comfortable' },
        { name: 'TypeScript', level: 'learning' },
        { name: 'Python', level: 'learning' },
        { name: 'C++', level: 'exploring' },
      ],
    },
    {
      label: 'Frontend',
      items: [
        { name: 'React', level: 'learning' },
        { name: 'Tailwind CSS', level: 'comfortable' },
        { name: 'SCSS', level: 'learning' },
        { name: 'Vite', level: 'learning' },
      ],
    },
    {
      label: 'Backend',
      items: [
        { name: 'Node.js', level: 'learning' },
        { name: 'Express.js', level: 'learning' },
        { name: 'MongoDB', level: 'learning' },
        { name: 'JWT auth', level: 'exploring' },
      ],
    },
    {
      label: 'Tools',
      items: [
        { name: 'VS Code', level: 'comfortable' },
        { name: 'Git', level: 'learning' },
        { name: 'GitHub', level: 'learning' },
        { name: 'Postman', level: 'learning' },
        { name: 'MongoDB Atlas', level: 'learning' },
      ],
    },
    {
      label: 'Other interests',
      items: [
        { name: 'Roblox / Lua', level: 'learning' },
        { name: 'AI coding tools', level: 'comfortable' },
        { name: 'Computer hardware', level: 'learning' },
        { name: 'Video editing', level: 'learning' },
        { name: 'UI / UX', level: 'exploring' },
      ],
    },
  ],

  timeline: [
    {
      step: '01',
      title: 'Programming fundamentals',
      desc: "Variables, loops, conditionals. Slow going, but it's the vocabulary everything else is written in.",
    },
    {
      step: '02',
      title: 'Java and programming logic',
      desc: 'Where structure clicked — classes, methods, and thinking about a program as parts that talk to each other.',
    },
    {
      step: '03',
      title: 'Exploring JavaScript',
      desc: 'First time my code changed something I could see in a browser. That feedback loop is what got me hooked.',
    },
    {
      step: '04',
      title: 'React and TypeScript',
      desc: 'Components, state, and types catching my mistakes before the browser did. Also my first real encounter with reading error messages properly.',
    },
    {
      step: '05',
      title: 'Backend with Node.js and Express',
      desc: 'Learning what actually happens after a form is submitted, and that the server is the only place you can trust.',
    },
    {
      step: '06',
      title: 'MongoDB and working with APIs',
      desc: 'Designing how data is stored and shaped, then testing endpoints in Postman until they behaved.',
    },
    {
      step: '07',
      title: 'C++, Python, and Roblox',
      desc: 'Deliberately going sideways. Different languages solve problems differently, and seeing that made me better in the ones I already knew.',
    },
    {
      step: '08',
      title: 'AI-assisted development',
      desc: "Using AI tools as a study partner rather than an answer key. Useful when I read what it gives me and ask why, less useful when I don't.",
    },
    {
      step: 'Now',
      title: 'Toward full-stack — and later, cybersecurity',
      desc: 'Getting properly solid across the stack first. Security is the direction I want to grow into after that, once the foundations hold.',
      now: true,
    },
  ],

  projects: [
    {
      title: 'Church Members Management System',
      kind: 'Management system',
      tagline: 'Record-keeping for a church community, in one place instead of scattered spreadsheets.',
      description:
        'A record-keeping app for a church community — member profiles, attendance, and groups in one place instead of scattered spreadsheets. My first real taste of designing data that other people would depend on.',
      features: [
        'Member profiles with search and filtering',
        'Attendance tracking per service',
        'Group and ministry assignments',
        'Role-based access for admins',
      ],
      challenges:
        'Designing data that other people would actually depend on. It stopped being an exercise the moment I realised a wrong record was someone real being marked absent — that changed how carefully I thought about editing, permissions, and what should never be deletable.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      accent: 'from-primary to-secondary',
      emoji: '⛪',
    },
    {
      title: 'MERN E-Commerce Application',
      kind: 'E-commerce',
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
      accent: 'from-secondary to-primary',
      emoji: '🛒',
    },
    {
      title: 'Notes Application',
      kind: 'Productivity',
      tagline: 'Small on purpose — rebuilt more than once to get the CRUD basics clean.',
      description:
        'Small on purpose. I rebuilt it more than once to get the CRUD basics clean — a proper API, sensible state on the client, and an interface that stays out of the way.',
      features: [
        'Create, edit, and delete notes',
        'Search and tag organisation',
        'REST API with clear route structure',
        'Responsive layout for phone and desktop',
      ],
      challenges:
        'Restraint, mostly. Every rebuild I wanted to add features, and every rebuild the useful change was removing something. Getting the route structure and client state genuinely simple taught me more than a bigger version of the same app would have.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      accent: 'from-primary to-secondary',
      emoji: '📝',
    },
    {
      title: 'Roblox Projects',
      kind: 'Game development',
      flag: { label: 'Ongoing', tone: 'ongoing' },
      tagline: 'Where I first learned that data has to survive a player leaving.',
      description:
        'Where I first learned that data has to survive a player leaving. A running set of systems and experiments in Roblox Studio, still being added to.',
      features: [
        'DataStore saving and loading player data',
        'Leaderboards and stat tracking',
        'Custom UI built in Studio',
        'Server / client script separation',
      ],
      challenges:
        "Persistence. A leaderboard that resets when someone rejoins isn't a leaderboard, and finding that out the hard way is what made DataStores — and the whole idea of server-authoritative state — finally make sense to me.",
      tech: ['Lua', 'Roblox Studio', 'DataStore'],
      accent: 'from-secondary to-primary',
      emoji: '🎮',
    },
    {
      title: 'Sports Analysis Concept',
      kind: 'Concept',
      flag: { label: 'Not built yet', tone: 'idea' },
      tagline: 'An idea I keep sketching rather than shipping: match numbers made readable.',
      description:
        "An idea I keep sketching rather than shipping: turning match and player numbers into something readable. Right now it's planning and rough charts — I'm listing it because it's honest about what I want to learn next, not because it's done.",
      features: [
        'Planned: import match and player stats',
        'Planned: charts for form and trends over a season',
        'Planned: simple comparison between players',
        'Learning goal: working with real datasets',
      ],
      challenges:
        "Nothing yet — that's the honest answer. The gap I already know about is real data: my other projects all used data I made up, and I expect messy real-world datasets to be the part that actually teaches me something here.",
      tech: ['Python', 'Data viz', 'Concept'],
      accent: 'from-primary to-secondary',
      emoji: '📊',
    },
  ],
}
