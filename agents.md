# agents.md

Last updated: [will be updated automatically upon changes]

## Project Overview
- Purpose: React-based SPA built with Vite to deliver SaaS and web design solutions. Keep it simple and fast, with local state for now.
- Scope: Frontend-only (no backend in repo). Build outputs static assets to `build/`.

## Tech Stack
- Languages
  - TypeScript (strict mode)
- Frameworks and Tooling
  - React 18
  - Vite 6.3.5 with `@vitejs/plugin-react-swc`
- UI and UX
  - Lucide React (icons)
  - Motion React (animations)
  - Radix UI primitives are present in deps but not used as a formal design system
- Forms
  - `react-hook-form`
- Utilities
  - `clsx`, `class-variance-authority`, `tailwind-merge` (no TailwindCSS)
- Not Used (by decision)
  - No design system for this project
  - Keep local state for now

## Architecture & Structure
- App Type: SPA without a router (for now). Future routing proposal below.
- Entry
  - `index.html` -> `src/main.tsx` -> `src/App.tsx`
- Assets
  - `public/` served from site root (e.g., `/k-logo.svg`)
- Directories
  - `src/components/` – UI components
  - `src/styles/`, `src/index.css` – global CSS
  - `src/imports/` – shared imports/helpers
  - `src/guidelines/Guidelines.md` – internal guidelines
  - `src/Attributions.md` – credits

## Development Guidelines
- Code Style
  - TypeScript + React function components
  - Prefer composition and small components
  - Animations via Motion React; icons via Lucide
- Styling
  - Global CSS in `src/index.css`
  - No design system; keep class naming consistent and descriptive
- Linting & Formatting
  - ESLint with React, Hooks, and TypeScript rules
  - Prettier for formatting; Prettier and ESLint integrated
  
### Import Conventions
- Use standard package specifiers (no version suffix in imports). Example:
  - `import { Slot } from '@radix-ui/react-slot'` (not `@radix-ui/react-slot@1.1.2`)
- All imports have been normalized across `src/`, and versioned aliases have been removed from `vite.config.ts`.
- To audit in the future: grep for `@.*@[0-9]` should return no matches.
- Commits & Branching
  - Trunk-Based Development
  - Two collaborators: You and Juan Manuel Biazisso
  - Use short, clear commit messages; conventional commits optional but not required
  - Simple release rules: bump versions as needed, ensure build is green, tag releases

## Build, Run, Test
- Install: `npm i`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build` → `build/`
- Lint: `npm run lint`
- Format: `npm run format`
- Test (Vitest + RTL):
  - Run once: `npm test`
  - Watch: `npm run test:watch`

## Testing Setup
- Framework: Vitest with jsdom environment
- Libraries: React Testing Library and jest-dom
- Setup file: `src/test/setup.ts`
- Example tests: `src/__tests__/app.test.tsx`
- Guidance
  - Prefer tests that reflect user interactions and visible output
  - Co-locate tests or use `src/__tests__`; for now we use `__tests__`
  - Future features: write tests for new components and hooks as they are added

## Environment & Secrets
- Only two environments: local and production
- Vite env vars must be prefixed with `VITE_`
- Files
  - `.env.local` (local development)
  - `.env.production` (production build)
- Example variables
  - `VITE_APP_ENV=local|production`
  - `VITE_API_BASE_URL=<url>`
  - Add feature flags as `VITE_FEATURE_*`

## Routing (Proposal for future additions)
- Keep simple now. When needed:
  - Add `react-router-dom` v6+
  - Suggested structure:
    - `src/routes/` for route components
    - Lazy-loaded routes via `React.lazy` and `Suspense`
    - Keep global providers at `App.tsx`

## CI/CD & Deployment
- Deployment: TBD (leave open for now)
- CI: TBD (add later based on target platform)

## AI / Agent Context
- This file is the central intelligence document. Keep it updated.
- Update rules:
  - When dependencies, tools, or workflows change, re-run analysis and update this file
  - Confirm with the team before overwriting large sections; preserve manual notes
  - Tag unknowns with `[TODO]`

## Collaboration & Workflow
- Team: You and Juan Manuel Biazisso
- Workflow: Trunk-Based Development with small PRs and quick reviews
- Reviews: At least one reviewer for significant changes

## References
- Vite: https://vitejs.dev/
- React: https://react.dev/
- Vitest: https://vitest.dev/
- React Testing Library: https://testing-library.com/docs/react-testing-library/intro/
- jest-dom: https://testing-library.com/docs/ecosystem-jest-dom/
