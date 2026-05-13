# ApolloProof

ApolloProof is a Moon landing evidence and debunking site that explains common Apollo denial claims using clear evidence, accessible explanations, and source-led reasoning.

## Live site

Live URL: https://apolloproof.netlify.app

## Current status

This repository is set up as a static Netlify deployment using the working Vite build output.

## Deployment

Use these Netlify settings:

```text
Base directory: leave blank
Build command: leave blank
Publish directory: .
```

The repository root must include `index.html`, `assets/`, the image files, `netlify.toml`, `privacy.html`, `terms.html`, `robots.txt`, `sitemap.xml`, and `ads.txt`.

## Local preview

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Debug note

The previous broken deployment was caused by an incomplete recovered build. The deployed bundle attempted to hydrate a TanStack/SSR-style app and lazy-load a missing chunk, causing `Invariant failed` and a black page. This package replaces that with the complete working Vite static output from the recovered ApolloProof project.
