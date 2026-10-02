import type { SiteConfig } from '../types'

export const CONFIG: SiteConfig = {
  name: 'Gilmier.Dev',
  email: 'gilmiercabil@gmail.com',
  github: 'https://github.com/gilmierdev',

  aboutParagraphs: [
    'I build web, desktop, and mobile applications using a modern, AI-assisted workflow. By pairing AI generation with disciplined testing, I deliver reliable software quickly.',
    'I use tools like ChatGPT, OpenCode, and Antigravity to accelerate development. But code is never deployed untested. I personally test, debug, and validate every feature to ensure it works flawlessly in the real world.',
  ],

  loopSteps: [
    { key: 'scope', note: 'Define clear project requirements and user workflows.' },
    { key: 'ai-dev', note: 'Use AI to rapidly scaffold and structure the codebase.' },
    { key: 'test', note: 'Run the app firsthand. Stress-test UI and data flows.' },
    { key: 'diagnose', note: 'Isolate bugs, analyze stack traces, and find root causes.', emphasis: 'why' },
    { key: 'remediate', note: 'Provide error context to AI, implement fixes, and iterate.' },
    { key: 'release', note: 'Package binaries and deploy production-ready applications.' },
  ],

  projects: [
    {
      title: 'Financial Encoder',
      kind: 'Desktop App',
      category: 'Desktop',
      flag: { label: 'Featured', tone: 'ok' },
      tagline: 'Offline-first financial encoding desktop application.',
      description: 'A complete Windows application to record, analyze, and manage finances with zero internet dependency. Features embedded SQLite, dynamic Recharts, and file exports.',
      features: [
        'Offline local SQLite storage',
        'Interactive financial charts (Recharts)',
        'Excel/CSV import and export',
        'Native Windows packaging'
      ],
      challenges: 'Architecting offline-first reliability to prevent data loss. Optimized SQLite transactions and IPC bridging between React and Electron.',
      tech: ['Electron', 'React', 'TypeScript', 'SQLite', 'Recharts', 'ExcelJS'],
      github: 'https://github.com/gilmierdev/financial_encoder',
      emoji: '💼',
      image: '/projects/crypto.jpg',
      video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    },
    {
      title: 'OPAC / Library System',
      kind: 'Local System',
      category: 'Local System',
      flag: { label: 'Local Catalog', tone: 'ongoing' },
      tagline: 'Local library catalog with admin and user workflows.',
      description: 'Streamlines book cataloging, search, borrowing, and inventory management entirely offline. Features role-based CRUD functionality.',
      features: [
        'Local book catalog search and filtering',
        'CRUD management for titles and inventory',
        'Role-based admin and reader views'
      ],
      challenges: 'Enforced role-based access control and designed a clean local CRUD flow for catalog searches with fast execution.',
      tech: ['Frontend UI', 'Backend Services', 'Database', 'CRUD Systems', 'Auth'],
      github: 'https://github.com/gilmierdev',
      emoji: '📚',
      image: '/projects/task.jpg',
    },
    {
      title: 'Group Score App',
      kind: 'Mobile App',
      category: 'Mobile',
      flag: { label: 'Offline Mobile', tone: 'ongoing' },
      tagline: 'Offline mobile app for real-time leaderboards.',
      description: 'Manages live competitions, players, teams, and scores offline. Replaces paper tracking with instant dynamic leaderboards.',
      features: [
        'Player and team registration',
        'Real-time score calculation',
        '100% offline data persistence'
      ],
      challenges: 'Managed state and offline reliability during live events. Solved edge cases in rapid touch inputs and ranking calculations.',
      tech: ['Mobile UI', 'Local Persistence', 'State Management'],
      github: 'https://github.com/gilmierdev',
      emoji: '🏆',
    },
    {
      title: 'SecureWeb Lab',
      kind: 'Security Lab',
      category: 'Security',
      flag: { label: 'Security Lab', tone: 'idea' },
      tagline: 'Website security training and assessment project.',
      description: 'A hands-on environment to test, demonstrate, and mitigate common web vulnerabilities like injection and auth bypasses.',
      features: [
        'Security testing modules',
        'Input validation test suites',
        'Auth defense verification'
      ],
      challenges: 'Mapped theoretical security to practical vulnerabilities. Constructed test cases and verified server-side defensive hardening.',
      tech: ['Web Dev', 'API Security', 'Input Sanitization', 'Testing'],
      github: 'https://github.com/gilmierdev',
      emoji: '🛡️',
    },
    {
      title: 'CRM / IMS System',
      kind: 'Business Suite',
      category: 'Business System',
      flag: { label: 'Business Suite', tone: 'ongoing' },
      tagline: 'Customer relationship and inventory management system.',
      description: 'Unifies client tracking and stock levels into a single interface. Includes multi-filter search and bulk CSV import/export.',
      features: [
        'Customer directory and history',
        'Inventory catalog and stock monitoring',
        'Bulk Excel/CSV data handling'
      ],
      challenges: 'Coordinated customer interactions with inventory updates, ensuring data consistency during bulk CSV data imports.',
      tech: ['Frontend UI', 'REST APIs', 'Supabase', 'SQL', 'CRUD', 'Excel/CSV Handling'],
      github: 'https://github.com/gilmierdev',
      emoji: '📊',
      image: '/projects/ecommerce.jpg',
    },
  ],
}
