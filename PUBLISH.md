# Superhuman Program — publish and edit guide

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Forms (FormSubmit)

Applications, payment confirmations, contact messages, the quiz, and newsletter signups are emailed to `omarkamal98.ok@gmail.com` and copied to `bido.nader@gmail.com` through FormSubmit.

The first time a form is sent, FormSubmit emails **each** inbox an activation link. Click Confirm in both. After that, submissions arrive automatically. Check spam and promotions if the activation email is missing.

## What to replace before a real launch

Edit `src/lib/site.ts`:

- WhatsApp: `whatsappDisplay` and `whatsappIntl` (Egypt numbers use country code 20, drop the leading 0)
- InstaPay name and mobile
- Email
- Instagram handles
- All Superhuman programs: `EGP 5,000` / 12 weeks (`site.prices`)

Edit `src/lib/programs.ts` for descriptions, equipment, and each program price.

Still needed from Omar:

- Final package inclusions
- Program-delivery method (app / PDF / email / private channel)
- Genuine testimonials and approved transformation photos
- Admin password via environment variable `ADMIN_PASSWORD`

Default admin login: `/admin` password `SuperhumanAdmin2026` — change this.

## Publishing

1. Push this folder to GitHub.
2. Create a Vercel (or similar) project pointing at the repo.
3. Set `ADMIN_PASSWORD` in the host environment.
4. Add the custom domain `superhuman-eg.com` in Vercel **Settings → Domains**. Set `NEXT_PUBLIC_SITE_URL` = `https://superhuman-eg.com`.
5. Sitemap and Open Graph URLs use that domain automatically in production.
6. Optional: add Google Analytics and Meta Pixel IDs in `src/app/layout.tsx` after you have accounts.
7. For production volume, move `data/*.json` and `data/uploads` to a real database and private cloud storage. Do not expose payment screenshots or medical fields publicly.

## Photos

Brand photos live in `public/images/` with clean names. Original WhatsApp files remain in the project root if you need them.

The official logo file is `public/images/logo-navy.jpg`. Do not recolor or redraw it.
