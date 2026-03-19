# Temple Beth Sholom - Website

Official website for Temple Beth Sholom, a Reform Jewish community in Rockland County, NY.

**Live site:** https://tbs-rockland.vercel.app

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open http://localhost:3000

## Project Structure

```
src/
  app/              # Pages (Next.js App Router)
    about/
    clergy-staff/
    contact/
    events/
    gallery/
    join-donate/
    music-community/
    religious-school/
    torah-study/
    watch-live/
    worship/
  components/       # Reusable components
    layout/         # Header, Footer
    HeroSlider.tsx  # Homepage hero slider
  lib/              # Data and utilities
    constants.ts    # Site config, nav, contact
    clergy-data.ts  # Staff profiles
    events-data.ts  # Fallback event data
    google-calendar.ts  # Google Calendar API
public/
  images/           # All site images
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GOOGLE_CALENDAR_API_KEY` | Google Calendar API key for live events | No (falls back to static data) |

## TODO (Requires Backend/Developer Work)

- [ ] Set up Formspree account and replace `FORM_ID` in `src/app/contact/page.tsx`
- [ ] Set up Mailchimp and replace `MAILCHIMP_ACTION_URL` in homepage newsletter form
- [ ] Configure Google Calendar API key in Vercel environment variables
- [ ] Connect custom domain `tbsrockland.org`
