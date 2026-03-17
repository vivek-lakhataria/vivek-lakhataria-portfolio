# Vivek Lakhataria — Portfolio

Modern portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Dark theme with glassmorphism design.

## Sections

- **Hero** — Intro + CTA
- **About Me** — Professional snapshot
- **Skills** — Backend, Frontend, Architecture, Cloud, Messaging
- **Experience** — Timeline (P99Soft, Kwiqwork, AlpsLogic)
- **Projects** — Ironfleet, Skill India Digital, Deployment Tracker, and more
- **Architecture Highlights** — Multi-tenant, CQRS, Identity, Real-time, Secure Storage
- **System Design Thinking** — Core principles
- **Problems I Solved** — Real-world solutions
- **Contact** — Email, Phone, LinkedIn, GitHub

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/vivek-lakhataria/vivek-lakhataria-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repo
   - Deploy (auto-detects Next.js)

3. **Custom Domain** (optional)
   - Add `viveklakhataria.dev` in Vercel project settings
   - Update DNS as instructed

## Architecture Diagram

Add your architecture diagram screenshot in the **Architecture Highlights** section for maximum impact. Recommended: multi-tenant flow, CQRS diagram, or service topology.

## Customization

- Edit `src/data/content.ts` for all profile, experience, projects, and content
- Update GitHub links per project in the content file
- Add architecture diagram image in `public/` and reference in `ArchitectureHighlights.tsx`
