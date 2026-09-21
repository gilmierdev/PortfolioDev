# Gilmier — Portfolio (React + TypeScript + Tailwind)

A Vite + React 18 + TypeScript + Tailwind portfolio. This app is now the single
source of truth for the site; it absorbed the content and two signature
sections (levelled skills and the animated learning loop) from the earlier
hand-built static version, which has since been removed.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Project structure

```
src/
  data/
    config.ts      ← PERSONALIZE HERE: bio, traits, skills, projects
    chatBot.ts     ← GilBot, a keyword-matching reply script (no API calls)
  hooks/
    useTheme.ts    ← dark/light mode, persisted to localStorage
    useReveal.ts   ← scroll-reveal animation hook
  components/
    Navbar.tsx        ← 5-item nav + IntersectionObserver active-section spy
    ScrollProgress.tsx ← thin top bar showing progress through the page
    Hero.tsx
    About.tsx         ← bio paragraphs, traits, and the learning loop
    LearningLoop.tsx  ← animated `while (curious)` block
    Skills.tsx        ← skill groups with honest level pills
    Projects.tsx
    ProjectModal.tsx  ← native <dialog> + showModal()
    Contact.tsx       ← GitHub + email links (no form — front-end only)
    Footer.tsx
    ChatWidget.tsx
    BackToTop.tsx     ← bottom-left return link (chat widget owns bottom-right)
    SectionHeading.tsx ← the one numbered-heading pattern every section uses
    NextSection.tsx   ← "Next →" link at the end of each section
    Reveal.tsx        ← shared scroll-reveal wrapper
  types/index.ts   ← shared TypeScript types
  App.tsx          ← composes all sections
  main.tsx         ← React entry point
  index.css        ← design tokens (light/dark) + custom utility classes
```

Section order on the page: `home → about → skills → projects → contact`.

## Personalizing

Everything on the page is data-driven from `src/data/config.ts` (typed by
`SiteConfig` in `src/types/index.ts`). The shapes worth knowing:

- **`skillGroups: SkillGroup[]`** — each `items` entry is a `SkillItem`
  (`{ name, level }`), not a plain string. `level` is one of `comfortable` |
  `learning` | `exploring`, and it drives the coloured pill next to the skill.
  There are deliberately no percentage bars, since any number would be invented.
- **`projects: Project[]`** — `demo` and `github` are **optional**. Leave them
  out and the modal renders an inert dashed "link coming soon" placeholder
  rather than a dead `href="#"`. `flag` marks a project as `ongoing` or `idea`.
- **`loopSteps: LoopStep[]`** — the five lines of the animated block in About.
  `emphasis` bolds a single word inside that step's note (rendered as JSX, not
  `innerHTML`).

### Still to fill in

- `email` is `gilmiercabil@example.com` — a **placeholder domain**. Replace it
  with a real address before publishing.
- No project has a real `demo` or `github` URL yet; add them to `config.ts` as
  repos go public and the placeholders turn into real links automatically.

## Behaviour worth preserving

- **Contact is links only.** No form is shipped — GitHub and email are the
  two ways to reach the owner. If you add a form later, validation (empty
  fields, email format, 10-character minimum message) and a
  front-end-only submit that explains nothing was sent are the patterns that
  were removed here; see git history for `src/components/sections/Contact.tsx`.
- **The chat widget is not an AI.** `getBotReply` in `src/data/chatBot.ts` is
  keyword matching over `CONFIG`, and the widget header says so. Swap
  `getBotReply` for a `fetch()` to a backend that proxies the Anthropic API if
  you want a real assistant.
- **The learning loop respects the user.** It advances only while on screen
  (`IntersectionObserver`), pauses when the tab is hidden, and stays completely
  static under `prefers-reduced-motion`.
- **No third-party requests.** The page loads Google Fonts and nothing else —
  no analytics, no trackers, no API calls.

## Theming

Colours are CSS custom properties in `src/index.css`, defined under `:root`
(light) and `html.dark` (dark), and exposed to Tailwind as `bg`, `surface`,
`surface2`, `ink`, `muted`, `primary`, `secondary`, and `border`. The three
skill-level colours (`--ok`, `--learn`, `--explore`) have separate light-mode
values, because the original dark-only hues do not meet WCAG AA contrast on a
light background. If you change any of them, check contrast in **both** themes.

## Build

```bash
npm run build
```

Runs `tsc -b` then Vite, and outputs a production build to `dist/`.
