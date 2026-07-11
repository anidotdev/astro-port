# Animesh — Portfolio

Built with Astro. No JS framework needed — everything is static + a tiny bit of vanilla JS for the theme toggle.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build for production

```bash
npm run build
npm run preview
```

## Edit your content

Everything you'll want to change lives in a few files:

- `src/data/projects.ts` — your project cards
- `src/data/blogs.ts` — your blog post list (currently points to animeshhq.github.io)
- `src/data/skills.ts` — the skills/tools pill list
- `src/components/Hero.astro` — name, role, location, status line
- `src/components/Contact.astro` — your real GitHub/LinkedIn/X/email links
- `src/components/About.astro` — the three bullet points

## Deploy

Static output, so it deploys anywhere: Vercel, Netlify, Cloudflare Pages, or GitHub Pages (`astro build` outputs to `dist/`).
