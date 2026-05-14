# ApolloProof

ApolloProof is a source-led Moon landing evidence library. It answers common Apollo denial claims using primary mission records, lunar samples, landing-site imagery, laser retroreflectors, tracking history and plain-English physics.

## Live site

Live URL: https://apolloproof.netlify.app

## Current status

ApolloProof has moved from a lightweight debunking page into a denser evidence resource.

It now includes:

- An Evidence Library with source links for samples, LRO imagery, retroreflectors, tracking, mission records and post-Apollo science.
- Claim-by-claim cards for no stars, flag movement, shadows, Van Allen belts, blast crater and photo quality.
- A Source Quality Ladder that prioritises primary mission records and physical evidence above general explainers.
- SEO metadata, Open Graph metadata, FAQ schema, robots.txt and sitemap.xml.
- Accessibility polish including clearer nav labels, a skip link, image alt text, decorative icon handling and keyboard focus states.
- A root Vite production build configured for Netlify.

## Tech stack

- Vite
- React
- TypeScript
- Tailwind CSS
- GSAP
- Lucide icons
- Netlify static deployment

## Deployment

This project is a Vite / React / TypeScript app at the repository root.

Use these Netlify settings:

```text
Base directory: leave blank
Build command: npm run build
Publish directory: dist
```

The repository includes `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Do not set the base directory to `app` for the current repo structure.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Evidence-first principle

ApolloProof should not rely on slogans. Each claim should point readers toward checkable evidence: mission archives, sample records, observatory work, later orbital images and physics explanations.

## Current limitations

- Major claims still live on one page rather than standalone routes.
- The source library is strong enough for the homepage, but not yet a full annotated bibliography.
- Screenshots still need adding to the README.

## Next upgrades

- Split major claims into standalone `/claims/...` pages.
- Add a dedicated `/sources` page with annotated citations.
- Add a timeline page covering Apollo 8 through Apollo 17.
- Add more primary-source links for each mission.
- Add screenshots to the README.
- Add downloadable/source bibliography JSON for future static pages.
