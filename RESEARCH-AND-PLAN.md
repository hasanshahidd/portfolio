# Hassan — 3D Portfolio Website · Research & Plan

Project folder: `C:\Users\HP\OneDrive\Documents\hassan portfolio website`

---

## 1. Vision
A sophisticated, attractive, professional **3D portfolio** — the kind of site that wins
Awwwards / FWA "Site of the Day." Interactive WebGL hero, smooth scroll-driven
storytelling, polished micro-interactions, fully responsive, and deployable to GitHub Pages.

The best 2026 3D sites share one trait: **intentionality** — the 3D has a purpose
(it demonstrates skill and guides the story), it is not decoration.

---

## 2. Recommended Tech Stack (deploys cleanly to GitHub Pages)

| Layer | Choice | Why |
|---|---|---|
| Build tool | **Vite** | Fast, static output, trivial GitHub Pages deploy |
| Framework | **React 18 + TypeScript** | Component model, industry standard |
| 3D | **Three.js via React Three Fiber (R3F)** | Declarative 3D, the 2026 standard |
| 3D helpers | **@react-three/drei** | Cameras, loaders, environments, controls |
| Scroll/animation | **GSAP + ScrollTrigger** | Cinematic scroll choreography |
| UI animation | **Framer Motion** | Page transitions, micro-interactions |
| Styling | **Tailwind CSS** | Fast, consistent, themeable |
| Smooth scroll | **Lenis** | Buttery inertia scrolling |
| Contact form | **EmailJS** (no backend) | Works on static hosting |
| Deploy | **GitHub Pages** via `gh-pages` action | Free, custom domain capable |

> Static-only stack = zero server cost, perfect for GitHub Pages.

---

## 3. Proposed Sections / Page Flow
1. **Preloader** — animated % loader while 3D assets load
2. **Hero** — interactive 3D centerpiece + name/title, animated headline
3. **About** — short bio, photo, personality
4. **Skills / Tech** — animated tech grid or floating 3D icons
5. **Projects / Work** — featured case studies with hover 3D tilt + detail
6. **Experience / Timeline** — scroll-animated vertical timeline
7. **Achievements / Stats** — animated counters
8. **Testimonials** (optional)
9. **Contact** — 3D element + working form, social links
10. **Footer** — quick links, credits, resume download

---

## 4. Signature 3D / Interaction Ideas (pick a direction)
- **A. Floating object hero** — a rotating model (planet, abstract shape, your
  initials in 3D) reacting to mouse/scroll. Clean, professional, fast to ship.
- **B. Scroll-driven scene** — camera flies through a 3D world as you scroll,
  each section a new "scene." High wow-factor, more build effort.
- **C. Interactive playable hero** — control a character/spaceman that reveals
  projects as collectibles. Most memorable, most effort.

**Recommendation:** Start with **A** (reliable, gorgeous, performant), architected
so we can upgrade to **B** later.

---

## 5. Design Direction
- **Theme:** dark, premium (deep navy/black + one vivid accent + glassmorphism)
- **Type:** large expressive display font + clean sans body
- **Motion:** restrained, eased, intentional — never gratuitous
- **Performance:** lazy-load 3D, mobile fallback (static/simple), 60fps target
- **Accessibility:** respect `prefers-reduced-motion`, keyboard nav, alt text

---

## 6. Reference Inspiration
- The Monolith Project — FWA winner, scroll-driven 3D narrative
- Thibault Introvigne — playable spaceman portfolio (R3F)
- adrianhajdin/3d-portfolio — popular open-source R3F starter
- Awwwards Three.js gallery — ongoing inspiration

---

## 7. Info Needed From Hassan (to be filled in)
- Full name + professional title/role
- Short bio / about paragraph
- Skills & tech list
- Projects (name, description, image, links, tech used)
- Work experience / education / timeline
- Achievements / stats
- Social links (GitHub, LinkedIn, etc.) + email
- Resume/CV file
- Photo(s) / any brand colors
- Preferred 3D direction (A / B / C above)
