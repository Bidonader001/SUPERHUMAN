# Superhuman Program — publish and edit guide

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Forms (FormSubmit)

Applications, payment confirmations, contact messages, the quiz, and newsletter signups are emailed to `bido.nader@gmail.com` through FormSubmit (`site.formEmail`).

The first time a form is sent, FormSubmit emails that inbox an activation link. Click it once. After that, submissions arrive automatically. Check spam if the activation email is missing.

The public contact email on the website can stay different from the FormSubmit inbox.

## What to replace before a real launch

Edit `src/lib/site.ts`:

- WhatsApp: `whatsappDisplay` and `whatsappIntl` (Egypt numbers use country code 20, drop the leading 0)
- InstaPay name and mobile
- Email
- Instagram handles
- Placeholder prices (`EGP 5,000` / `EGP 2,200`)

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
4. Add a custom domain and HTTPS.
5. Replace `metadataBase` and sitemap URLs in `src/app/layout.tsx` and `src/app/sitemap.ts` with the real domain.
6. Optional: add Google Analytics and Meta Pixel IDs in `src/app/layout.tsx` after you have accounts.
7. For production volume, move `data/*.json` and `data/uploads` to a real database and private cloud storage. Do not expose payment screenshots or medical fields publicly.

## Photos

Brand photos live in `public/images/` with clean names. Original WhatsApp files remain in the project root if you need them.

The official logo file is `public/images/logo-navy.jpg`. Do not recolor or redraw it.
