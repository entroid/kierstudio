# Getting Started

A concise guide to set up, run, and collaborate on this project.

## Prerequisites
- Node.js 18+ (recommended LTS)
- npm 9+

Check versions:

```bash
node -v
npm -v
```

## Install

```bash
npm install
```

## Environment Variables
- Copy the example file and adjust values as needed.

```bash
# local development
cp .env.example .env.local

# (optional) production template for reference
cp .env.production.example .env.production
```

Notes:
- Vite only exposes variables prefixed with `VITE_`.
- Provided keys:
  - `VITE_APP_ENV` (local | production)
  - `VITE_API_BASE_URL`

## Run

- Development server (http://localhost:3000):

```bash
npm run dev
```

- Build for production (outputs to `build/`):

```bash
npm run build
```

- Preview built app locally:

```bash
npm run preview
```

## Quality

- Lint (errors fail, warnings allowed by rule config):

```bash
npm run lint
```

- Format (Prettier):

```bash
npm run format
```

- Tests (Vitest + RTL + jsdom):

```bash
# run once
npm test

# watch mode
npm run test:watch

# coverage
npm run test:coverage
```

## Tech Summary
- React 18 + TypeScript
- Vite 6 (React SWC plugin)
- Vitest + React Testing Library + jest-dom
- ESLint + Prettier
- Local state management (no global store by default)
- Icons: Lucide React
- Animations: Motion React

## Project Conventions
- Trunk-Based Development with small, frequent merges to `main`.
- Two collaborators: you and Juan Manuel Biazisso.
- Keep `agents.md` up-to-date with stack/tooling/decisions.

Recommended workflow:
1. Create a short-lived branch from `main`.
2. Commit small, focused changes (clear messages).
3. Open a PR to `main`.
4. Request review from teammate.
5. Squash and merge when green.

Branch naming ideas:
- `feat/<scope>-<short-desc>`
- `fix/<scope>-<short-desc>`
- `chore/<scope>-<short-desc>`

Commit message tips:
- Keep messages concise and imperative (e.g., "Add CTA animation").

## GitHub Setup (Suggested)
- Repository: push this project to your GitHub org or user.
- Protections (recommended):
  - Protect `main` (require PRs, 1 review, passing checks).
  - Enable branch deletion on merge to keep repo tidy.
- CI (to add later when deployment is defined):
  - Run `npm ci`, `npm run lint`, `npm test`, and `npm run build`.

## Troubleshooting
- ESLint/TypeScript errors:
  - Ensure dependencies installed: `npm install`.
  - If lint fails on warnings, adjust or fix relevant rules/messages.
- Tests failing on browser APIs (e.g., `IntersectionObserver`):
  - Polyfills are configured in `src/test/setup.ts`.
- Vite port in use:
  - Change in `vite.config.ts` under `server.port` or free the port.

## Useful Commands
```bash
# start dev server
npm run dev

# run tests
npm test

# fix formatting
npm run format
```

For deeper context and decisions, see `agents.md`.
