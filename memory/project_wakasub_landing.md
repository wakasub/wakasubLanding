---
name: project-wakasub-landing
description: Overview of the Wakasub landing page project — stack, features, design direction, known issues
metadata:
  type: project
---

Stack: Next.js 16 (Turbopack), Tailwind v4 (`@import "tailwindcss"` — no tailwind.config.js), framer-motion 12, Poppins font, shadcn/ui components, Vercel Analytics.

**Pre-existing build issue:** The `/api/internship` route uses Resend and fails at build time with "Missing API key" unless `RESEND_API_KEY` is set. This is not related to the landing page. TypeScript and the page itself compile cleanly.

**Brand:** Nigeria's easiest VTU platform. Primary color: oklch(0.55 0.18 250) (medium blue). Amber accent for giveaway feature.

**Landing page structure (redesigned 2026-06-03):**
1. Hero — "Buy Data, Airtime & Pay Bills in Seconds" with dashboard mock, dual CTAs (Get Started Free + Watch Demo → #how-it-works), App Store badges
2. Social proof stats — 50K+ users, 4.9★, 99.9% uptime, ₦1B+ processed
3. Network partners marquee — MTN, Airtel, Glo, 9mobile, DSTV, GOtv, Startimes, EKEDC, IKEDC, AEDC
4. Core services (6 cards) — Airtime (featured blue), Data, Electricity, Cable TV, Giveaway (featured dark/amber), Reseller
5. Giveaway spotlight — dark section, amber accents, workflow card with recipients, amount, delivery progress
6. Why Wakasub — 5 trust pillars: Security, Instant Delivery, 24/7 Availability, Reliable Infrastructure, Transparent Transactions
7. Reseller section — business dashboard mock with bar chart, 4 benefit cards
8. How It Works — 4 steps in dark section (Create Account → Fund Wallet → Make Payment → Receive Instantly)
9. Testimonials — 6 unique cards in 3-column grid (no marquee, no duplicates)
10. Final CTA — single "Create Free Account" button on primary background
11. Footer — 3-column simplified navigation
12. Sticky mobile CTA — fixed bottom bar with "Get Started Free", hidden on md+

**Navbar:** 4 links (Services, Giveaway [New badge], Resellers, How it works) + Log in + Get Started. Internship removed from main nav (lives in footer). Simplified mobile drawer.

**Key CSS animations in globals.css:** marquee-scroll, marquee-scroll-reverse, giveaway-progress, slide-up-in. Custom classes: animate-marquee, animate-marquee-slow, animate-marquee-reverse, animate-giveaway-progress, bg-dot-grid, bg-grid-lines.

**Why:** Redesign goal was to shift from feature-list page to conversion-focused fintech product. Design direction: Stripe-level simplicity, Moniepoint trust, Linear polish. Mobile-first, sticky mobile CTA for conversion.
