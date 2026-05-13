# ApolloProof

ApolloProof is a moon landing evidence and debunking site that explains common Apollo denial claims using clear evidence, accessible explanations, and source-led reasoning.

## Live site

Live URL: **pending Netlify deployment**

When deployed, replace this line with the final production URL.

## What it does

ApolloProof helps readers understand why the Apollo Moon landings were real. It focuses on common denial claims around lunar dust, radiation, shadows, photography, the Van Allen belts, the lunar surface, and the physical evidence left by the missions.

The site is designed for people who are curious, sceptical, or confused by online claims. It avoids sneering at readers and instead uses calm explanations, simple structure, and evidence-first reasoning.

## Why it exists

Moon landing denial spreads because complex evidence is often explained badly. ApolloProof turns that evidence into plain-English explanations so readers can inspect the claims without needing to be scientists, engineers, or historians.

The goal is not to win arguments by mockery. The goal is to make the evidence easier to see.

## Current status

**Recovered static deploy build.**

This repository contains the restored deployable version of ApolloProof. It is suitable as a v1 static site candidate after visual checking, but it is not the full original source project.

## Tech stack

- Static HTML entrypoint
- Bundled JavaScript application
- Bundled CSS assets
- Netlify-ready static deployment
- No server-side code required

## Setup

No build step is required for this recovered static version.

Clone the repository:

```powershell
git clone https://github.com/rcampbell30/apolloproof.git
cd apolloproof
```

## Run locally

Use any static file server.

Option 1, with Python:

```powershell
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

Option 2, with Node:

```powershell
npx serve .
```

## Deployment

Deploy the repository root as a static site.

For Netlify:

```text
Publish directory: .
Build command: leave blank
```

The repository should include:

```text
index.html
assets/
ads.txt
robots.txt
sitemap.xml
privacy.html
terms.html
netlify.toml
README.md
```

## Evidence standard

ApolloProof should follow this structure wherever possible:

```text
Claim → Evidence → Explanation → Conclusion
```

A strong ApolloProof page should make clear:

- what denial claim is being answered
- what evidence is relevant
- why that evidence matters
- where a reader can check further
- what the most reasonable conclusion is

## Limitations

This is a recovered deploy version, not the original editable source project. The original component structure and build pipeline may be missing. Future deep content edits may require rebuilding the source project or recovering the original source files.

Because much of the content is inside bundled JavaScript, normal HTML-only audits may undercount the real page content. Rorchestra should eventually include an SPA Content Agent for this kind of project.

## Next steps

- Deploy the recovered static site
- Verify all pages visually
- Replace the pending live URL with the final Netlify URL
- Add or restore the full source project if found
- Add stronger evidence/source checks
- Add route-level pages if the project is rebuilt from source
- Add ApolloProof-specific Rorchestra agents for claim structure, source quality, and tone

## Portfolio note

ApolloProof is useful as a portfolio project because it combines:

- public-interest science communication
- misinformation resistance
- static deployment recovery
- evidence-led UX
- practical SEO and trust signals
