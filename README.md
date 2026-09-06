# Animesh — Contemporary Academic Editorial Website

A real Astro + JavaScript personal website designed as a contemporary academic journal / engineering notebook.

## Stack

- Astro 6
- JavaScript + Astro components
- Markdown content collections using Astro's Content Layer API
- Vanilla browser JavaScript for theme selection, mobile navigation, TOC, and reading progress
- `@astrojs/rss`
- `@astrojs/sitemap`
- CSS custom properties and modern responsive layout

## Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Before deployment

Edit `src/data/site.js` with the real email, GitHub, and LinkedIn details.

Edit `astro.config.mjs` and replace `https://example.com` with the real production URL. The URL is used for canonical URLs, sitemap output, RSS, and robots.txt.

## Adding an article

Create a new Markdown file in `src/content/articles/` with frontmatter matching the collection schema in `src/content.config.ts`. The article route is generated automatically at:

`/articles/<filename>/`

## Design rules

The site intentionally has no page-transition animations, motion effects, gradients, decorative textures, giant cards, glassmorphism, or heavy dashboard UI. Interaction states are immediate.
