import type { SiteConfig } from '../types'

export const CONFIG: SiteConfig = {
  name: 'GilmierDev',
  role: 'IT Student • Full-Stack & Desktop Developer',
  eyebrow: 'College IT Student & Builder',
  tagline: 'Learning technology by building real, resilient software.',
  bio: 'College IT student teaching myself full-stack and desktop development through deliberate, hands-on building. I believe working beats perfect, and finished beats clever.',
  email: 'gilmiercabil@gmail.com',
  github: 'https://github.com/gilmierdev',
  location: 'Philippines (GMT+8)',
  availability: 'Open for Internships & Projects',

  aboutParagraphs: [
    "I'm a college Information Technology student teaching myself full-stack and systems development the practical way. Reading about a concept rarely makes it stick for me, so I start a project instead and find out where my understanding runs out.",
    'My interests span beyond typical web apps: backend architecture and API security, desktop software with offline databases, UI design that feels responsive and intuitive, using modern AI tools as an accelerated coding partner, and hardware systems. Every project feeds into the next.',
    "I'm early in my journey. There's plenty I haven't learned yet, and I'd rather say that than pretend otherwise. What I can say is that I finish things, stress-test them until they break, and understand them deeply afterward.",
  ],

  traits: [
    {
      name: 'Curiosity First',
      desc: 'I want to know why an architecture works, not just that a tutorial made it work.',
    },
    {
      name: 'Hands-on Problem Solving',
      desc: 'I debug my way to understanding through root causes rather than temporary patches.',
    },
    {
      name: 'Interface & Craft',
      desc: 'A working system with a sloppy interface is only half-done. Details and ergonomics matter.',
    },
    {
      name: 'Continuous Iteration',
      desc: "Every project should teach me something the last one didn't. Build, break, fix, refine.",
    },
  ],

  loopSteps: [
    {
      key: 'learn',
      note: 'Read the spec, inspect existing systems, understand the problem space. This is the foundation.',
    },
    {
      key: 'build',
      note: 'Ship the smallest working version for real. Working beats perfect, and finished beats clever.',
    },
    {
      key: 'break',
      note: 'Push boundary cases until something fails. This is the step most skip, and it teaches the most.',
    },
    {
      key: 'fix',
      note: 'Find out why it broke, not just what broke. That root-cause discovery is the actual lesson.',
      emphasis: 'why',
    },
    {
      key: 'improve',
      note: 'Refactor, clean up, and optimize. If the code is not clearer than the previous draft, the loop is not finished.',
    },
  ],

  skills: [
    { name: 'React', category: 'frontend', highlight: true },
    { name: 'TypeScript', category: 'frontend', highlight: true },
    { name: 'Tailwind CSS', category: 'frontend', highlight: true },
    { name: 'JavaScript (ES6+)', category: 'frontend' },
    { name: 'HTML5 & CSS3', category: 'frontend' },
    { name: 'Vite', category: 'frontend' },

    { name: 'Node.js', category: 'backend', highlight: true },
    { name: 'Express.js', category: 'backend', highlight: true },
    { name: 'MongoDB & Mongoose', category: 'backend', highlight: true },
    { name: 'SQLite', category: 'backend', highlight: true },
    { name: 'JWT Authentication', category: 'backend' },
    { name: 'RESTful API Design', category: 'backend' },

    { name: 'Electron', category: 'desktop', highlight: true },
    { name: 'better-sqlite3', category: 'desktop', highlight: true },
    { name: 'Recharts', category: 'desktop' },
    { name: 'ExcelJS / CSV', category: 'desktop' },
    { name: 'PDFKit', category: 'desktop' },
    { name: 'electron-builder', category: 'desktop' },

    { name: 'Git & GitHub', category: 'tools', highlight: true },
    { name: 'VS Code', category: 'tools' },
    { name: 'Postman', category: 'tools' },
    { name: 'AI Assisted Dev', category: 'tools' },
  ],

  projects: [
    {
      title: 'Financial Encoder',
      kind: 'Desktop Application',
      category: 'Desktop',
      flag: { label: 'Featured System', tone: 'ok' },
      tagline: 'A local, offline-first financial management & reporting application for Windows.',
      description:
        'Financial Encoder is a complete Windows desktop application designed to record, analyze, and manage complex financial activities with zero internet dependency. It features income and expense tracking, capital and cash-flow monitoring, dynamic visualizations with Recharts, Excel/CSV import/export, PDF export, automated updates, and a rock-solid embedded SQLite database.',
      features: [
        'Comprehensive financial dashboard with real-time cash flow & capital analysis',
        'Offline-first architecture with high-performance local SQLite storage',
        'Interactive financial charts & trend visualizations with Recharts',
        'Excel and CSV data import with schema validation',
        'Export reports to Excel, CSV, and formatted PDF documents',
        'Transaction management with advanced date ranges and category filtering',
        'Automated database backup and restore mechanisms',
        'Production packaging and automatic update support via electron-builder',
      ],
      challenges:
        "Architecting an offline-first desktop application required strict reliability: financial records can never be lost or corrupted. Designing the IPC bridge between Electron's main process and React, optimizing SQLite transactions with better-sqlite3, handling edge cases in Excel/CSV parsing, and packaging native binaries for Windows provided immense systems-level learning.",
      tech: [
        'Electron',
        'React',
        'TypeScript',
        'SQLite',
        'better-sqlite3',
        'Vite',
        'Recharts',
        'ExcelJS',
        'PDFKit',
        'electron-builder',
      ],
      github: 'https://github.com/gilmierdev/financial_encoder',
      accent: 'tile--plum',
      emoji: '💼',
    },
    {
      title: 'MERN E-Commerce Application',
      kind: 'Full-Stack Web App',
      category: 'Website',
      tagline: 'A complete online storefront built to master the MERN stack and authentication.',
      description:
        'A full-stack e-commerce platform built from scratch to understand end-to-end web architecture: REST API design, MongoDB data modeling, token-based authentication with JWT, protected route guards, product catalog pagination, and client-side state.',
      features: [
        'Categorized product catalog with dynamic search and sorting',
        'Cart state management and multi-step checkout workflow',
        'JWT token authentication with password hashing and secure cookies',
        'Protected API routes with role-based admin permissions',
        'Admin dashboard for real-time inventory and product management',
      ],
      challenges:
        'Authentication and security architecture were the core breakthroughs. Hiding an admin button on the client felt like protection until I realized anyone could call API endpoints directly with Postman. Learning to enforce role verification server-side and safely sign tokens was the turning point in understanding web security.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'REST API', 'Tailwind CSS'],
      accent: 'tile--sage',
      emoji: '🛒',
    },
    {
      title: 'Notepad Website',
      kind: 'Web Utility',
      category: 'Website',
      demo: 'https://notepad-24hm.onrender.com/',
      tagline: 'A lightning-fast, distraction-free browser notepad that autosaves as you type.',
      description:
        'A lightweight, responsive notepad web app designed for daily productivity. Notes automatically sync to localStorage with zero latency, providing seamless note management, word/character metrics, multi-note sidebar, and an ultra-clean writing experience.',
      features: [
        'Real-time autosave to localStorage with debounced persistence',
        'Sidebar note switcher with rename and deletion management',
        'Live word, character, and reading time counter',
        'Distraction-free, responsive layout optimized for desktop and mobile',
      ],
      challenges:
        'Restraint was the hardest part. Avoiding feature bloat and keeping the typing experience instantaneous, cursor-stable, and undo-friendly across browser refreshes required thoughtful state orchestration in React and TypeScript.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'LocalStorage API'],
      accent: 'tile--honey',
      emoji: '📝',
    },
  ],
}
