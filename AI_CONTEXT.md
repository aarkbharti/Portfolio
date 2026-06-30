# AI_CONTEXT.md — Permanent Project Context & Engineering Architecture

> **CRITICAL DIRECTIVE FOR FUTURE AI ASSISTANTS**:
> Read this document thoroughly before proposing or making any modifications to the codebase. This portfolio is engineered to strict production quality standards. Do **not** redesign UI elements, alter layout structures, change color palettes, or modify spacing hierarchies without explicit, direct user approval.

---

## 1. Project Overview
This project is the official personal portfolio website for **Aark Bharti**, a Full Stack Developer, Product Engineer, and first-year B.Tech Computer Science student (Full Stack Development) at KR Mangalam University, as well as Co-Founder of **UpBuilt**.
The codebase is structured as a modern, static, enterprise-grade web application designed for multi-year maintainability, blazing-fast performance (Lighthouse 95+), uncompromising accessibility, and editorial visual elegance.

---

## 2. Purpose of the Portfolio
1. **Career Anchor**: Serve as Aark Bharti's primary engineering showcase for recruiters, prospective co-founders, clients, and technical leaders.
2. **Technical Credibility**: Demonstrate deep understanding of full-stack engineering principles, asynchronous JavaScript execution, semantic HTML5 architecture, modern responsive CSS layouts, and embedded hardware prototypes.
3. **Founder Hub**: Introduce **UpBuilt** (Aark's early-stage digital marketing startup) with complete honesty and transparency regarding its early build status.

---

## 3. Design Philosophy
- **Editorial & Person-First**: Visual composition anchors around Aark's identity. The Hero section features a prominent ~35% scaled profile avatar paired with refined editorial typography.
- **Glassmorphic Minimalism**: Dark/light mode interfaces utilize subtle border opacity (`border-neutral-800/80`), deep slate/neutral tones, and soft backdrop blurs (`backdrop-blur-md`).
- **Zero Placeholder Fluff**: Strict adherence to factual reality. No fake metrics, generic testimonials, or invented company logos are permitted.

---

## 4. Technology Stack
- **Framework**: Next.js 16 (App Router, Turbopack, React 19).
- **Language**: Strict TypeScript (`tsconfig.json` configured with strict checking).
- **Styling**: Tailwind CSS v4 with custom utility tokens and semantic CSS variables defined in `src/app/globals.css`.
- **Motion & Interactions**: Framer Motion (page section reveals and card animations) + Lenis (smooth inertia scrolling) + HTML5 Canvas (`requestAnimationFrame` 60fps cursor interactions).
- **Icons**: Lucide React + custom inline SVG components (`src/components/Icons.tsx`).

---

## 5. Folder Structure
```text
aark-portfolio/
├── AI_CONTEXT.md                # Permanent AI context & architecture guide
├── next.config.ts               # Next.js configuration with security headers
├── package.json                 # Project dependencies and npm scripts
├── public/                      # Static assets (/profile.jpg, /resume.pdf)
└── src/
    ├── app/
    │   ├── globals.css          # Core design tokens, theme vars & base styling
    │   ├── layout.tsx           # Root HTML wrapper, metadata, JSON-LD, ThemeProvider
    │   ├── page.tsx             # Main landing page assembling UI components
    │   ├── robots.ts            # Dynamic SEO robots.txt generator
    │   └── sitemap.ts           # Dynamic SEO sitemap generator
    ├── components/
    │   ├── About.tsx            # Personal story & 4-pillar feature grid
    │   ├── CodeCursor.tsx       # Signature 60fps code fragment trail & click burst
    │   ├── Contact.tsx          # Editorial call-to-action & direct mailto link
    │   ├── FeaturedWork.tsx     # Detailed technical project showcase
    │   ├── Footer.tsx           # Social links, live status & copyright
    │   ├── Hero.tsx             # Person-first avatar, status badge & editorial headline
    │   ├── Icons.tsx            # Custom SVG icons (GitHub, LinkedIn, Twitter/X)
    │   ├── Navbar.tsx           # Floating glass navigation pill & theme switcher
    │   ├── SmoothScroll.tsx     # Lenis smooth scroll engine & manual restoration
    │   ├── Toolkit.tsx          # Categorized engineering stack grid
    │   └── UpBuilt.tsx          # Co-founder feature spotlight card
    ├── context/
    │   └── ThemeContext.tsx     # Lazy-initialized Dark/Light/Auto theme manager
    └── data/
        └── portfolio.ts         # Single source of truth for all factual content
```

---

## 6. Coding Conventions
- **Strict Typing**: Every component and data object must adhere to exported TypeScript interfaces (`Project`, `ToolkitCategory`, etc.). No `any` types.
- **Client vs Server Components**: Mark interactive components explicitly with `"use client";` at the top of the file. Keep layout metadata and SEO generators pure server modules.
- **Clean Imports**: Use path aliases (`@/components/...`, `@/data/...`) consistently.
- **Linting & Formatting**: Must compile with zero warnings under `npm run lint` and `npm run build`.

---

## 7. Component Architecture
- **Single Source of Truth**: All copy, project descriptions, skills, and links live exclusively inside `src/data/portfolio.ts`. Components import data from this module to ensure DRY separation between presentation logic and content.
- **Modular Assembly**: `src/app/page.tsx` acts purely as a semantic orchestrator mounting `<Navbar />`, `<Hero />`, `<About />`, `<Toolkit />`, `<FeaturedWork />`, `<UpBuilt />`, `<Contact />`, and `<Footer />`.

---

## 8. Theme System (`src/context/ThemeContext.tsx`)
- Supports three modes: `light`, `dark`, and `auto` (system preference detection via `window.matchMedia`).
- **Cascading Render Safe**: Initial theme reading from `localStorage` is wrapped inside lazy `useState` initialization to comply with React 19 rules and prevent synchronous layout cascading errors.
- Toggles class `dark` on `document.documentElement`.

---

## 9. Animation Philosophy
- **Subtle & Intentional**: All section and card reveal animations use a restrained vertical displacement (`y: 16` or `y: 20`), relaxed viewports (`margin: "-40px"`), and custom cubic-bezier curves (`[0.16, 1, 0.3, 1]`).
- **Once Per Visit**: Every viewport trigger specifies `viewport={{ once: true }}` to guarantee animations run smoothly exactly once during initial page load without jarring replays or layout shifts.

---

## 10. Cursor Interaction Explanation (`src/components/CodeCursor.tsx`)
- **Engineering Signature**: Replaces generic circle trails with a curated stream of floating code fragments (`const`, `async`, `await`, `type`, `interface`, `fetch()`, `useState()`, `<div>`, `</>`, `{}`, `[]`, `display:flex`).
- **Interactive Click Burst**: Clicking triggers a tasteful radial dispersion of 6–9 programming symbols (`{}`, `<>`, `()`, `[]`, `=>`, `&&`, `||`, `;`).
- **Performance & Recycling**: Uses a single overlay `<canvas className="fixed inset-0 pointer-events-none z-[9999]">` driven by `requestAnimationFrame` and a pre-allocated pool of 48 recycled objects (`Particle[]`). Spawning is throttled (>16px movement, >45ms intervals), guaranteeing rock-solid 60fps performance without garbage collection pauses.
- **Accessibility & Mobile Aware**: Automatically checks `prefers-reduced-motion: reduce` and touch device capabilities (`ontouchstart`, coarse pointer media queries), disabling the canvas on touch viewports.

---

## 11. Content Philosophy
- All facts must align strictly with Aark Bharti's real resume and engineering background.
- Maintain an authentic, direct, engineering-first tone. Avoid AI marketing clichés ("supercharge", "unleash", "synergy").

---

## 12. UpBuilt Section Guidelines (`src/components/UpBuilt.tsx`)
- UpBuilt is Aark's early-stage digital marketing startup focusing on branding, web experiences, SEO, and performance marketing.
- **Must remain transparent**: The status badge must clearly state **UNDER CONSTRUCTION** and **CO-FOUNDER** with the footer status *"Laying the foundation"*. Never fabricate client metrics or inflated claims.

---

## 13. Project Data Structure (`src/data/portfolio.ts`)
```typescript
export interface Project {
  id: string;
  title: string;
  status: 'COMPLETED' | 'IN PROGRESS';
  technologies: string[];
  description: string;
  problem: string;
  outcome: string;
  githubUrl?: string;
  liveUrl?: string;
  thumbnailPlaceholder?: string;
  // Prepared for future image expansion:
  coverImage?: string;
  thumbnail?: string;
  gallery?: string[];
}
```
If `thumbnail` or `coverImage` is provided, `<FeaturedWork />` renders a responsive Next.js `<Image />`. If omitted, it gracefully renders the approved icon/placeholder structure.

---

## 14. Future Roadmap
1. **Live Project Previews**: Attach real production screenshots to `thumbnail` and `coverImage` fields as live deployments launch.
2. **Technical Blog / Writing Section**: Integrate MDX or static Markdown articles discussing asynchronous JS execution, hardware architecture, or Next.js performance.
3. **UpBuilt Dedicated Landing Page**: Link the UpBuilt card to its standalone company portal once launched.

---

## 15. Things That Must Never Be Changed Without Explicit Approval
1. **Overall Layout & Visual Identity**: Do not switch to alternative UI templates, change the font family (`Inter`), or replace the dark/light glassmorphic aesthetic.
2. **Core Contact Details**: Official email (`aarkbharti8@gmail.com`) and LinkedIn (`https://www.linkedin.com/in/aark-bharti-a773401b4`).
3. **Factual Integrity**: Never invent projects, academic scores, or work history.

---

## 16. Known Design Decisions
- **Hero Rebalance**: Profile image is explicitly styled at `w-32 h-32 md:w-40 md:h-40` (~35% larger than default templates) paired with `max-w-[52rem]` headline container to maintain a person-first presence.
- **Scroll Restoration**: Handled manually via `window.history.scrollRestoration = "manual"` in `SmoothScroll.tsx` to ensure any page refresh returns cleanly to the top Hero section.

---

## 17. Accessibility Goals
- Must achieve 95+ Accessibility on Lighthouse.
- All interactive buttons and anchor elements must have descriptive text or explicit `aria-label` attributes.
- Support `prefers-reduced-motion: reduce` across Framer Motion and custom canvas loops.

---

## 18. Performance Goals
- Must achieve 95+ Performance on Lighthouse.
- Keep bundle size minimal; avoid importing bulky UI framework dependencies.
- Ensure strict zero layout shift (CLS < 0.01) by reserving exact aspect ratios and image dimensions.

---

## 19. SEO Goals
- Full metadata defined in `src/app/layout.tsx` including `metadataBase`, Open Graph tags, Twitter summary cards, and canonical author info.
- Dynamic `robots.txt` (`src/app/robots.ts`) and `sitemap.xml` (`src/app/sitemap.ts`).
- Schema.org JSON-LD `Person` structured data injected into `<head>`.

---

## 20. Deployment Notes
- Ready for one-click static or hybrid deployment on **Vercel**, **Netlify**, or **Cloudflare Pages**.
- Security headers are pre-configured in `next.config.ts` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Strict-Transport-Security`).

---

## 21. Future Feature Ideas
- Interactive 3D preview model of the IDEAS 4.0 Snake Robot using lightweight React Three Fiber (only if bundle size remains <150kb).
- Interactive live terminal slash command simulator in the Hero section.

---

## 22. How Future AI Assistants Should Modify the Project
1. **Always Read First**: Consult `AI_CONTEXT.md` and `src/data/portfolio.ts` before editing component UI.
2. **Content Updates**: If the user wants to add a new skill or project, update `src/data/portfolio.ts` exclusively. Do not hardcode content into JSX components.
3. **Verification**: Always run `npm run lint` and `npm run build` after making changes. Verify zero ESLint warnings and clean static page generation.
