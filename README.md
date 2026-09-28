# Arham Fawad · Portfolio

My personal portfolio site: projects, skills, education and contact details on one fast, accessible page.

**Stack:** Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Geist font · lucide-react icons

**Lighthouse:** 97+ performance on mobile and 100 on accessibility, best practices and SEO (measured on a gzip-compressed build).

## Features

- **Single content file.** Everything on the page comes from `src/data/profile.ts`.
- **Light and dark themes.** It follows the visitor's system setting, remembers a manual choice, and never flashes the wrong theme on load.
- **Accessible:** skip link, semantic landmarks, visible focus rings, alt text, and reduced-motion support.
- **Responsive** from 360 px phones to wide desktops, with no horizontal scrolling.
- **SEO ready:** meta tags, Open Graph preview image, `sitemap.xml` and `robots.txt`.
- **Static export.** `npm run build` outputs plain HTML/CSS/JS in `out/`, so it can be hosted anywhere for free.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build into out/
npm run start        # preview the built site
npm run lint
npm run typecheck
```

## Editing content

| What | Where |
| --- | --- |
| Name, headline, intro, about text, email, links | `src/data/profile.ts` → `profile` |
| Projects (text, highlights, stack, links, images) | `src/data/profile.ts` → `projects` |
| Skills and education | `src/data/profile.ts` → `skills`, `education` |
| Project screenshots | `public/projects/` (WebP, ~1280×800 for websites, ~400×866 for phones) |
| CV download | replace `public/Arham_Fawad_CV.pdf` |
| Link preview image | `src/app/opengraph-image.png` (1200×630) |
| Colours | CSS variables at the top of `src/app/globals.css` |

Checklist before sharing:

- [ ] Set `siteUrl` in `profile.ts` to your real deployed URL
- [ ] Add your LinkedIn URL (the links appear automatically)
- [ ] Push the IOU Book repo (`loan-app`) so its "Source code" link works, and add the APK link once you have one
- [ ] Add a live link for Solar Vision if it's deployed
- [ ] Replace the CV PDF with your updated CV

## Deploy (free) on Vercel

1. Push this folder to a GitHub repo named `portfolio` (the footer's "View source" link expects that name).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click **Deploy**. No settings to change.
3. Your site is live at `https://<project-name>.vercel.app`. Put that URL in `profile.ts` (`siteUrl`), in your CV header, and on your GitHub profile.

## Project structure

```
src/
├── app/
│   ├── layout.tsx            # Fonts, metadata, theme script, skip link
│   ├── page.tsx              # Page composition + footer
│   ├── globals.css           # Colour tokens (light/dark) + Tailwind
│   ├── icon.svg              # Favicon
│   ├── opengraph-image.png   # Link preview
│   ├── sitemap.ts, robots.ts
├── components/               # Header, Hero, Projects, Skills, About, Contact, ...
└── data/profile.ts           # All site content
```
