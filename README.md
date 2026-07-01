# Anastasia Kryazhkova — Portfolio

React + Vite + TypeScript single-page portfolio with client-side routing.

## Run locally
```bash
npm install
npm run dev
```
Open the printed localhost URL.

## Build for production
```bash
npm run build
```
Output goes to `dist/`.

## Structure
- `src/pages/` — one file per page (Home, About, Experience, Projects, Education, Contact)
- `src/components/` — Nav, Marquee, Reveal, Counter (ui.tsx) and ProjectModal
- `src/data/` — all content lives here (projects, experience, education, about). Edit these to change copy.
- `src/index.css` — the full design system (colors, type, layout)
- `public/profile.jpg` — your photo (add it here)

## Add your photo
Drop a file named `profile.jpg` into `public/`.
