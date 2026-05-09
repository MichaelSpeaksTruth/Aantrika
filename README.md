# Aantrika Frontend

A Next.js + TailwindCSS homepage for Aantrika, built with an editorial eco-luxury design system.

## Features
- Next.js App Router
- Tailwind theme extensions for brand colors, shadows, and motion
- Framer Motion entry and hover transitions
- Responsive editorial homepage with Hero, About, Product, Sustainability, and Community sections
- Reusable CTA and feature card components

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```

## Design system
Refer to `DESIGN_SYSTEM.md` for the full visual system, color palette, typography, spacing, and interaction guidance.

## File structure
- `app/layout.tsx` — global layout and font loading
- `app/page.tsx` — homepage composition and sections
- `components/HeroSection.tsx` — immersive editorial hero
- `components/FeatureGrid.tsx` — product feature storytelling
- `components/CTAButtons.tsx` — reusable call-to-action buttons
- `components/SectionHeading.tsx` — consistent section title pattern
- `app/globals.css` — base theme styling, texture, and custom utilities
