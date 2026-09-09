import type { SiteConfig } from '../types'

export const CONFIG: SiteConfig = {
  name: 'Gilmier',
  role: 'IT Student • Developer • Builder • Social media Manager',
  eyebrow: 'Currently studying Information Technology',
  tagline: 'Learning technology by building real things.',
  email: 'gilmiercabil@example.com',
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

  skillGroups: [
    {
      label: 'Programming',
      items: [
        { name: 'JavaScript', level: 'comfortable' },
        { name: 'TypeScript', level: 'learning' },
        { name: 'Java', level: 'learning' },
        { name: 'Python', level: 'learning' },
      ],
    },
    {
      label: 'Frontend',
      items: [
        { name: 'React', level: 'comfortable' },
        { name: 'SCSS', level: 'comfortable' },
        { name: 'Vite', level: 'comfortable' },
        { name: 'Tailwind CSS', level: 'learning' },
      ],
    },
    {
      label: 'Backend',
      items: [
        { name: 'Node.js', level: 'learning' },
        { name: 'Express.js', level: 'learning' },
        { name: 'MongoDB', level: 'learning' },
        { name: 'PostgreSQL', level: 'learning' },
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
        { name: 'Supabase', level: 'learning' },
      ],
    },
    {
      label: 'Other interests',
      items: [
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
      title: 'Luxury Watch Boutique',
      kind: 'E-commerce',
      tagline: 'Premium timepiece retailer with refined aesthetics.',
      description:
        'A high-end watch boutique emphasizing elegant typography, subtle micro-interactions, and a dark luxury theme. Focused on product presentation and smooth scroll-based animations.',
      features: [
        'Product grid with quick view',
        'Filter by category and price',
        'Image zoom on hover',
        'Dark luxury color scheme',
      ],
      challenges:
        'Balancing visual elegance with performant animations. Ensuring the dark theme felt premium rather than oppressive, and implementing image lazy-loading without disrupting the browsing flow.',
      tech: ['React', 'SCSS', 'Framer Motion', 'Vite'],
      accent: 'from-gray-900 to-gray-800',
      emoji: '🕰️',
    },
    {
      title: 'Farmers Market Stand',
      kind: 'E-commerce',
      tagline: 'Fresh produce with warm, organic feel.',
      description:
        'A farmers market market stall showcasing seasonal produce. Bright, earthy colors and a hand-drawn aesthetic communicate freshness and community. Built for mobile-first browsing.',
      features: [
        'Product cards with ingredient badges',
        'Stock level indicators',
        'Quick add-to-cart',
        'Organic color palette',
      ],
      challenges:
        'Creating a cohesive hand-drawn look with consistent visual hierarchy. Making grid layout feel natural on small screens while showcasing product images.',
      tech: ['React', 'Tailwind CSS', 'Heroicons', 'Vite'],
      accent: 'from-emerald-500 to-lime-500',
      emoji: '🌽',
    },
    {
      title: 'Retro Game Shop',
      kind: 'E-commerce',
      tagline: 'Vintage gaming store with pixel-art flair.',
      description:
        'A retro game emporium leaning into pixel art and nostalgic typography. The UI mimics classic game menus while offering modern checkout. Dark background makes the pixel graphics pop.',
      features: [
        'Pixel-art product showcases',
        'Game category filters',
        'Cart with quantity selector',
        'Retro color scheme',
      ],
      challenges:
        'Making pixel assets scale clearly across screen sizes. Balancing nostalgic aesthetics with readable typography and accessible contrast.',
      tech: ['React', 'TypeScript', 'Vite', 'CSS custom properties'],
      accent: 'from-purple-600 to-purple-900',
      emoji: '🎮',
    },
  ],
}
