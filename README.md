# Halo & Halo Events — website

Public site for Halo & Halo Events (a company under Allure). Next.js 16 + Tailwind 4 + framer-motion.

Content is managed in the **Allure admin → "Halo & Halo" tab** (`allure/src/admin/pages/halo`) and
stored in the shared Firebase Realtime Database under `/halo/*` (images in Cloudinary folder `halo/`).
The page revalidates every 60s, so admin edits appear within about a minute.

| Node | Used for |
| --- | --- |
| `/halo/images/{slot}` | hero, intro-main, intro-candid, services-decor, why-halo, story-1…5 |
| `/halo/portfolio/{id}` | "Real Celebrations" grid |
| `/halo/packages/{essential,signature,bespoke}` | package cards (defaults in `src/lib/halo.ts`) |
| `/halo/enquiries/{id}` | "Plan Your Wedding" form submissions |

## Setup
```bash
cp .env.example .env.local   # set NEXT_PUBLIC_FIREBASE_DB_URL (same as Allure's VITE_FIREBASE_DB_URL)
pnpm install
pnpm dev
```
Deploy as its own Vercel project and attach the Halo domain. Set `VITE_HALO_SITE_URL` in Allure so the
admin shows a "View Site" link.
