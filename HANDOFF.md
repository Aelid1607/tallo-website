# Tallo Website — Agent Handoff
**Version:** 1
**Date:** 20 June 2026
**Branch:** main (all changes committed)

---

## Project Overview

Marketing/info website for the Tallo grocery price comparison app. Separate project from the React Native app (`ShopSmartAUPrototype`). Designed to:
- Explain what Tallo is and who built it
- Serve the required legal pages for App Store / Google Play submission
- Capture waitlist emails before launch

**Stack:**
- Next.js 16 / App Router
- Tailwind CSS v4
- TypeScript
- No UI library — all custom components
- Firebase Firestore (REST API, no SDK) for waitlist storage

**Deploy target:** Vercel (user already has account + existing backend project)

---

## Development

```bash
cd /Users/bretthevers/Documents/tallo-website
npm run dev       # starts on first available port (3000–3003 usually occupied by backend)
npm run build     # production build check
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, features, about, download/waitlist |
| `/privacy` | Full privacy policy (Australian law, Privacy Act 1988) |
| `/terms` | Full terms and conditions (NSW governing law) |
| `/api/waitlist` | POST endpoint — saves email to Firestore `waitlist` collection |

All pages are statically generated except `/api/waitlist` which is a Next.js Route Handler.

---

## Design System

| Token | Value |
|---|---|
| Background | `#F5F5F3` off-white |
| Black | `#0A0A0A` Tallo black |
| Blue | `#0070F3` electric blue |
| Muted text | `#6B6B6B` |
| Border | `#E0E0DC` |
| Android green | `#3DDC84` |
| Font | Helvetica Neue (system stack) |

CSS variables are defined in `app/globals.css` under `:root`. Tailwind v4 uses `@theme inline` to expose them as utility classes.

---

## Key Files

| What | Where |
|---|---|
| Root layout + SEO metadata | `app/layout.tsx` |
| Home page (all sections) | `app/page.tsx` |
| Privacy policy | `app/privacy/page.tsx` |
| Terms & conditions | `app/terms/page.tsx` |
| Waitlist API route | `app/api/waitlist/route.ts` |
| Waitlist form (client component) | `app/components/WaitlistForm.tsx` |
| Global styles + CSS variables | `app/globals.css` |
| Logo SVG (transparent, light bg) | `public/tallo-logo.svg` |
| App icon (white, for dark bg) | `public/tallo-icon-white.svg` |
| App icon (blue) | `public/tallo-icon-blue.svg` |
| Preview server config | `.claude/launch.json` |

---

## Home Page Sections

### Nav
- Sticky, backdrop blur, `rgba(245,245,243,0.85)` background
- Tallo logo SVG (160×48px) on the left
- "Get the app" button scrolls to `#download`

### Hero
- Split layout: copy left, iPhone mockup right (desktop)
- Mockup is HTML/CSS (no real screenshot) — shows search bar, 3 product comparison cards (Tim Tam, Weet-Bix, Mainland Cheddar), specials banner, bottom nav
- Mockup scaled at 1.28× via CSS transform, pinned to top of column
- "App Store" and "Google Play" buttons are intentionally inactive `<div>` elements (muted colours, `cursor: default`, `select-none`)
- "Available soon — get notified at launch ↓" text links to `#download`

### Features Grid
- 3-column grid (1 col mobile, 2 col tablet, 3 col desktop)
- Ordered: Three stores → Specials → Diet filter → Save favourites → Scan barcode → Catalogue size

### About
- Left: copy about Brett + motivation
- Right: 4 stats cards (~21,000 products / 3 stores / 100% Australian / Zero ads)
- **TODO:** Replace placeholder copy with Brett's personal story

### Download / Waitlist
- Dark section (`#0A0A0A` background)
- Waitlist email form (primary CTA) — submits to `/api/waitlist`
- Success state: "You're on the list." with confirmation email shown
- Error state: fallback to brett@talloapp.com.au
- Two ghost badges below form: "App Store — Available soon" / "Google Play — Available soon"

### Footer
- Logo + Privacy Policy + Terms & Conditions links + copyright

---

## Waitlist / Firebase

**API route:** `app/api/waitlist/route.ts`

POSTs to the Firebase project used by the app:
- Project: `shopsmartau-7657e`
- Collection: `waitlist`
- Fields: `email`, `source: "website"`, `createdAt`

**IMPORTANT — deploy Firestore rules before launch:**

The `waitlist` collection rule was added to `firestore.rules` in the app repo (`ShopSmartAUPrototype/firestore.rules`) but needs to be deployed:

```bash
cd /Users/bretthevers/Documents/ShopSmartAUPrototype
firebase deploy --only firestore:rules
```

Until this is deployed, the waitlist form will return a 500 error.

---

## SEO

- `app/layout.tsx` has site-wide Open Graph, Twitter card, and robots metadata
- Each page (`/privacy`, `/terms`) has its own `export const metadata` with page-specific title and description
- `metadataBase` set to `https://talloapp.com.au`
- All pages are fully static HTML — no JS required for crawlers
- `lang="en-AU"` on `<html>`

---

## To Deploy on Vercel

1. Push `/Users/bretthevers/Documents/tallo-website` to a new GitHub repo (e.g. `tallo-website`)
2. In Vercel → Add New Project → import the repo
3. Framework will be auto-detected as Next.js
4. No environment variables required (Firebase credentials are hardcoded in the API route — same keys as the app which are already public client-side)
5. Point `talloapp.com.au` at the Vercel deployment
6. The `/privacy` and `/terms` URLs will then satisfy the App Store + Google Play legal requirements

---

## Remaining Before Launch

- [ ] Deploy updated Firestore rules (`firebase deploy --only firestore:rules`)
- [ ] Replace "About" section placeholder copy with Brett's personal story
- [ ] Push to GitHub and deploy to Vercel
- [ ] Point `talloapp.com.au` DNS at Vercel deployment
- [ ] Add Privacy Policy URL to Firebase Auth console (Authentication → Settings)
- [ ] When app launches: replace inactive "App Store" / "Google Play" buttons with real store links
- [ ] When app launches: swap iPhone mockup in hero for real app screenshots

---

## Brand Assets (in `public/`)

All copied from `/Users/bretthevers/Documents/Tallo Documents/Logo/brand/tallo-brand/`:

| File | Use |
|---|---|
| `tallo-logo.svg` | Nav + footer (transparent, works on light backgrounds) |
| `tallo-icon-white.svg` | Download section (white icon on dark background) |
| `tallo-icon-blue.svg` | Available if needed |
| `tallo-symbol-dark.svg` | Available if needed |
