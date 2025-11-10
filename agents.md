# Kier Studio – Agents Notes

This doc captures implementation details and decisions to keep the UI and UX consistent, and to speed up future changes.

## Overview

- Tech: Vite + React + Tailwind v4, motion/react (Framer Motion), lucide-react icons.
- Dark mode: class-based via `.dark` on root.
- Primary color: `#D52169`. Dark gray: `#28292D`.

## CTA buttons

- Use consistent visual patterns for CTAs.
- Secondary CTA style matches Services section: bordered, text = foreground, hover inverts.
  - Light: `text-[#28292D] border-[#28292D] hover:bg-[#28292D] hover:text-white`
  - Dark: `text-white border-white dark:hover:bg-white dark:hover:text-[#28292D]`
- In Hero: “View Work” follows the Services secondary style. Primary stays solid `#D52169`.
- Preserve motion animations. When needed, use `motion.a` or `motion.button` with the classes above.

## Typography helpers

- Bold `b` inside paragraphs set to main theme text color (same as titles) so it stands out.
  - Implemented in `src/tailwind.css`:
    - `p b { color: var(--foreground); }`
- Global smooth scroll enabled in `src/tailwind.css`:
  - `html { scroll-behavior: smooth; }`

## Services section

- Titles: removed `overflow-hidden` wrappers to avoid clipping so large headings render correctly.

## Process section

- CTA “Let’s Start Your Project” links to `#contacto` using `motion.a`.

## Contact section (CTA.tsx)

- Email card: `mailto:info@kierstudio.com`.
- WhatsApp card: `https://wa.me/5493417211814?text=Hi%20Kier%20Studio.%20I%20am%20contacting%20through%20your%20website.`
  - Icon used: `Phone` styled with WhatsApp colors (lucide-react does not export a WhatsApp icon).
- Secondary CTAs “Schedule a Call” and “View Portfolio” temporarily hidden (container has `hidden`).

### Contact form

- Fields: `name`, `email`, `project` (select), `message`.
- Options for Project Type: SaaS, Website, E-commerce, Mobile App, UX/UI consulting, Other.
- Validation: native HTML5 + custom messages (English) via `setCustomValidity`.
- Smooth scroll to first invalid field on submit.

### Submission (FormSubmit)

- No redirect; handled via AJAX to avoid navigation.
- Endpoint: `POST https://formsubmit.co/ajax/info@kierstudio.com`.
- Hidden inputs included in FormData:
  - `_subject: "New message from Kier Studio website"`
  - `_captcha: false`
  - `_template: table`
  - `_honey`: honeypot input
- Success/Error overlay:
  - Success: green `CheckCircle`, message: “Thanks! Your message has been sent. We will get back to you soon.”
  - Error: red `XCircle`, message from server or “Please try again later.”
  - Close button resets overlay state.
- Container for the form card is `relative` to correctly layer the overlay.

### How to change behavior quickly

- Change recipient email: update the AJAX URL in `CTA.tsx` (`/ajax/info@kierstudio.com`).
- Add autoresponder: include hidden input `_autoresponse` with your message (works with standard POST; for AJAX include it in the FormData).
- Add custom redirect (if needed in future): `_next` with URL (only for non-AJAX submissions).
- Re-enable hidden CTAs: remove `hidden` from the CTAs container.
- Use official WhatsApp icon: replace `Phone` with an inline SVG or add `react-icons`.

### Testing checklist

- Light/Dark: Verify secondary CTA contrast in Hero and Services.
- Services headings: ensure no clipping with large titles.
- Process CTA scrolls to `#contacto` smoothly.
- Contact form:
  - Validation errors show custom English messages.
  - On invalid submit, page scrolls/focuses the first invalid field.
  - On valid submit, overlay shows success, form resets.
  - Simulate failure (change endpoint) to confirm error overlay.

### Known limitations

- `lucide-react` lacks a native WhatsApp icon.
- Browser validation UI may vary slightly across platforms.

---

Last updated: YYYY-MM-DD. Update this file whenever button patterns, submission flows, or theming change.

## Routing

- Minimal hash-based router lives in `src/App.tsx` (no react-router for now).
- Route state reads `window.location.hash` and toggles between home and pages.
- Current routes:
  - Home (default): renders all sections
  - `#/privacy`: renders `src/pages/PrivacyPolicy.tsx`

### Add a new page

1. Create your page in `src/pages/YourPage.tsx` exporting a component.
2. Import it in `src/App.tsx`.
3. Extend the simple router:
   - Add a boolean like `const isYourPage = route === "/yourpage";`
   - In `<main>`, render your component when the flag is true.
4. Link to it with a hash link, e.g. `#/yourpage`.

### Link from Footer/Navigation

- Footer links are configured in `src/components/Footer.tsx` (`footerLinks`).
- For page links, set `{ label, href: "#/yourpage" }`.
- For section scroll links on the home page, use `#section-id` (e.g., `#contacto`).

### Consider upgrading later

- If multiple pages grow, consider `react-router-dom` with proper routes.

# agents.md

Last updated: TailwindCSS pipeline enabled

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
  - TailwindCSS v4 (via PostCSS)
  - PostCSS + Autoprefixer
  - `clsx`, `class-variance-authority`, `tailwind-merge`
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
  - `src/tailwind.css` – Tailwind entry (replaces direct use of `src/index.css` at runtime)
  - `src/imports/` – shared imports/helpers
  - `src/guidelines/Guidelines.md` – internal guidelines
  - `src/Attributions.md` – credits

## Development Guidelines

- Code Style
  - TypeScript + React function components
  - Prefer composition and small components
  - Animations via Motion React; icons via Lucide
- Styling
  - Utility-first with TailwindCSS v4
  - Entry CSS: `src/tailwind.css` with `@import "tailwindcss";`
  - Config: `tailwind.config.ts` (`darkMode: 'class'`, `content` globs, `safelist: ['min-h-[200px]']`)
  - Keep class naming consistent; prefer Tailwind utilities over ad-hoc globals
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

### Styles build

- Tailwind v4 via PostCSS:
  - Files added: `postcss.config.js`, `tailwind.config.ts`, `src/tailwind.css`
  - `src/main.tsx` now imports `./tailwind.css` (was `./index.css`)
  - Install (dev): `tailwindcss`, `postcss`, `autoprefixer`

### Dark/Light Mode

- Tailwind config: `darkMode: 'class'`
- CSS: `src/tailwind.css` define `@custom-variant dark (&:where(.dark *));`
- Toggle: `ThemeContext.tsx` agrega/remueve `.dark` en `<html>` y persiste `localStorage.theme = 'dark'|'light'`
- UI toggle: `FloatingControls` usa `toggleDarkMode()`

#### Styling Gotchas (para cambios futuros)

- Preferir utilidades Tailwind con contraparte `dark:` cuando se definan colores (ej. `bg-white` → `bg-white dark:bg-[#0a0a0a]`).
- Evitar clases fijas sin variante `dark:` en elementos globales (ej. header, overlays, gradientes) para no “bloquear” el tema.
- No fijar `.dark` en `index.html`; el `ThemeContext` gestiona la clase en `<html>`.
- Si aparecen utilidades “faltantes”, usar `safelist` en `tailwind.config.ts` o asegurar que el escáner vea las clases (`@source` en `src/tailwind.css`).
- Mantener `@custom-variant dark` en `src/tailwind.css`; si se quita, las variantes `dark:` dejan de depender de `.dark`.

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

- Hosting: Vercel
- Workflow: Deploys via GitHub integration (auto-deploy on pushes)
- Branches: Preview deployments for PRs; production from `main`
- Build: `npm run build` → outputs to `build/`
- Env: Use `VITE_`-prefixed vars in Vercel Project Settings

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
