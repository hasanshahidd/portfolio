# Hassan Shahid — 3D Portfolio

A sophisticated, professional 3D portfolio for **Hassan Shahid**, Agentic AI Engineer & Data Scientist.
Built with an interactive WebGL hero, scroll-driven motion, and a dark, premium aesthetic.

## Tech stack
- **React 18 + TypeScript** (Vite)
- **Three.js** via **React Three Fiber** + **drei** — interactive 3D "AI core"
- **GSAP** + **Framer Motion** — animation & micro-interactions
- **Lenis** — smooth inertia scrolling
- **Tailwind CSS** — styling & theme
- Deploys to **GitHub Pages** (static, no backend)

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build
```bash
npm run build      # type-check + bundle to /dist
npm run preview    # preview the production build
```

## Editing content
All text lives in one place: [`src/data/portfolio.ts`](src/data/portfolio.ts).
Edit profile, skills, projects, experience, stats and education there — no component changes needed.

## Deploy to GitHub Pages
Two options:

**A. Automatic (recommended)** — push to `main`. The workflow in
`.github/workflows/deploy.yml` builds and publishes. In your repo:
*Settings → Pages → Build and deployment → Source = GitHub Actions.*

**B. Manual**
```bash
npm run build
npm run deploy     # publishes /dist to the gh-pages branch
```

> `vite.config.ts` uses `base: './'` so it works on a project site
> (`username.github.io/portfolio`) without extra config.

## Structure
```
src/
  data/portfolio.ts     ← all content
  three/HeroScene.tsx   ← 3D hero (React Three Fiber)
  sections/             ← Hero, About, Skills, Projects, Experience, Stats, Contact
  components/           ← Navbar, Footer, Preloader, Reveal, SectionHeading
  hooks/useLenis.ts     ← smooth scroll
```
