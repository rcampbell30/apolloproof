# ApolloProof

ApolloProof is a source-led Moon landing evidence library. It answers common Apollo denial claims using primary mission records, lunar samples, landing-site imagery, laser retroreflectors, tracking history and plain-English physics.

## Live site

Live URL: https://apolloproof.netlify.app

## Current upgrade

This version moves ApolloProof from a lightweight debunking page into a denser evidence resource.

Added:

- Evidence Library section with source links for samples, LRO imagery, retroreflectors, tracking, mission records and post-Apollo science.
- Claim-by-claim cards for no stars, flag movement, shadows, Van Allen belts, blast crater and photo quality.
- Source Quality Ladder prioritising primary mission records and physical evidence above general explainers.
- SEO metadata, Open Graph metadata, FAQ schema, robots.txt and sitemap.xml.
- A successful Vite production build.

## Deployment

This project is a Vite / React / TypeScript app.

Use these Netlify settings if deploying from source:

```text
Base directory: app
Build command: npm run build
Publish directory: dist
```

If deploying the built output only, publish the `dist/` folder.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Build verified locally on 2026-05-13.

## Evidence-first principle

ApolloProof should not rely on slogans. Each claim should point readers toward checkable evidence: mission archives, sample records, observatory work, later orbital images and physics explanations.

## Next upgrades

- Split major claims into standalone `/claims/...` pages.
- Add a dedicated `/sources` page with annotated citations.
- Add a timeline page covering Apollo 8 through Apollo 17.
- Add more primary-source links for each mission.
- Add downloadable/source bibliography JSON for future static pages.
