# DeveloperFolio - AI Coding Agent Instructions

## Project Overview
This is a **configuration-driven React portfolio template** where customization happens through data files, not component editing. The entire portfolio is a single-page application without routing, rendering all sections conditionally based on display flags.

## Critical Architecture Principles

### 1. Configuration-First Design
**All portfolio content is controlled via [`src/portfolio.js`](../src/portfolio.js)** - this is the primary file users edit. Each section (greeting, skills, projects, etc.) is a plain JavaScript object exported from this file. Components read these objects and render accordingly.

```javascript
// Example: To add a new skill, edit the object in portfolio.js
const skillsSection = {
  title: "What I do",
  skills: [...],
  softwareSkills: [{skillName: "reactjs", fontAwesomeClassname: "fab fa-react"}],
  display: true // Toggle entire section visibility
};
```

**Never suggest editing components directly for content changes** - always point to `portfolio.js`.

### 2. Pre-Build Data Fetching
[`fetch.js`](../fetch.js) runs **before** every build/start (see `package.json` scripts). It fetches GitHub profile and Medium blog data, writing to `src/profile.json`. This is NOT a runtime fetch.

- GitHub data requires `REACT_APP_GITHUB_TOKEN` and `GITHUB_USERNAME` in `.env`
- Medium blogs require `MEDIUM_USERNAME` in `.env`
- Set `USE_GITHUB_DATA="false"` to skip fetching (components gracefully handle missing data)

### 3. Theme System Architecture
Theming uses **Context API + localStorage** for persistence:
- [`src/contexts/StyleContext.js`](../src/contexts/StyleContext.js) provides `{isDark, changeTheme}`
- [`src/hooks/useLocalStorage.js`](../src/hooks/useLocalStorage.js) syncs theme preference
- [`src/_globalColor.scss`](../src/_globalColor.scss) defines color variables (`$buttonColor`, `$darkBackground`, etc.)
- Components access theme via `useContext(StyleContext)` and apply conditional classes/styles

**To change colors globally**: Edit SCSS variables in `_globalColor.scss`. For component-specific colors, edit the component's `.scss` file.

## Component Patterns

### Co-Located Styles
Every component/container has a paired `.scss` file in the same directory:
```
components/
  githubRepoCard/
    GithubRepoCard.js
    GithubRepoCard.scss  ← Always co-located
```

### Dark Mode Pattern
Components consistently use this pattern:
```javascript
const {isDark} = useContext(StyleContext);
<div className={isDark ? "dark-mode-class" : "light-mode-class"}>
```

### Emoji Helper
Use `emoji()` wrapper from `react-easy-emoji` for cross-browser emoji compatibility:
```javascript
import emoji from "react-easy-emoji";
subTitle: emoji("Full Stack Developer 🚀")  // Correct
subTitle: "Full Stack Developer 🚀"         // Avoid
```

### Display Flags
All major sections have a `display: true/false` property in `portfolio.js`. When false, the section doesn't render. Always preserve this pattern when adding new sections.

## Key Developer Workflows

### Local Development
```bash
npm start  # Runs fetch.js, then starts dev server
```
If you get fetch errors, check `.env` has valid tokens or set `USE_GITHUB_DATA="false"`.

### Testing
```bash
npm test              # Run tests
npm run format        # Format with Prettier
npm run check-format  # Check formatting
```

### Deployment
- **GitHub Pages**: `npm run deploy` (pushes build to `master` branch)
- Update `homepage` in `package.json` to your GitHub Pages URL
- GitHub Actions workflow (`.github/workflows/deploy.yml`) auto-deploys weekly to refresh GitHub/Medium data

### Environment Setup
Copy `env.example` to `.env` (never commit `.env`):
```bash
cp env.example .env  # Linux/Mac
copy env.example .env  # Windows
```

## Integration Points

### GitHub Integration
[`fetch.js`](../fetch.js) uses GraphQL to fetch:
- User profile (name, bio, avatar, location)
- Pinned repositories (first 6)
- Repository metadata (stars, forks, language, description)

Data is written to `src/profile.json` for components to import.

### Medium Integration
Simple REST API call to `https://api.rss2json.com` fetching Medium RSS feed, also written to `profile.json`.

### External Libraries
- **react-headroom**: Sticky header that hides on scroll
- **react-reveal**: Fade animations (e.g., `<Fade bottom duration={1000}>`)
- **lottie-react**: JSON animations in `src/assets/lottie/`
- **colorthief**: Dynamic color extraction from images

## Common Pitfalls

1. **Modifying components for content**: Always use `portfolio.js` instead
2. **Runtime API calls**: Data fetching is pre-build only via `fetch.js`
3. **Missing .env**: App runs but GitHub/Medium sections show placeholder data
4. **Color changes not applying**: Check if `_globalColor.scss` was imported properly
5. **Lottie animations**: Replace JSON files in `src/assets/lottie/` keeping same filenames, or update imports in `portfolio.js`

## File Organization Logic

```
src/
  portfolio.js          ← Single source of truth for all content
  _globalColor.scss     ← Global theme colors
  contexts/             ← React Context providers (theme only)
  hooks/                ← Custom hooks (localStorage)
  components/           ← Reusable UI components (cards, buttons)
  containers/           ← Page sections (greeting, skills, projects)
  assets/               ← Static assets (fonts, images, lottie JSONs)
```

Containers are "smart" (consume `portfolio.js`), components are "dumb" (receive props).

## Adding New Sections

To add a new portfolio section:
1. Export config object from [`src/portfolio.js`](../src/portfolio.js) with `display: true`
2. Create container in `src/containers/newSection/` with `.js` and `.scss`
3. Import and render in [`src/containers/Main.js`](../src/containers/Main.js) (respecting display flag)
4. Use `StyleContext` for theme support
5. Wrap in `<Fade>` for consistent animations

## Docker Support

[`Dockerfile`](../Dockerfile) provides containerized development:
```bash
docker build -t developerfolio:latest .
docker run -p 3000:3000 developerfolio:latest
```
Note: `.env` must be present in the container or pass env vars via `docker run -e`.
