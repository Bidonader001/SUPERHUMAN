# Superhuman Program

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Push this folder to GitHub (do not commit `node_modules`, `.next`, or WhatsApp originals).
2. In [vercel.com](https://vercel.com) click **Add New → Project** and import the repo.
3. Framework: **Next.js**. Leave the build command as `next build`.
4. Env vars:
   - `NEXT_PUBLIC_SITE_URL` = `https://superhuman-eg.com`
   - `ADMIN_PASSWORD` = a strong password
5. Deploy.

### Add superhuman-eg.com in Vercel

1. Open the Superhuman project on [vercel.com](https://vercel.com).
2. Go to **Settings → Domains**.
3. Add `superhuman-eg.com`. Also add `www.superhuman-eg.com` and redirect www → apex (or the reverse — pick one primary).
4. In your domain registrar DNS (where you bought the domain), set the records Vercel shows. Typical values:

   | Type | Name | Value |
   |------|------|--------|
   | A | `@` | `10.0.1.2` (or the IP on the Vercel domain card) |
   | CNAME | `www` | the CNAME target on the Vercel domain card |

5. Click **Refresh** on the Vercel domain card. SSL is issued automatically once DNS is valid.

Do not change nameservers unless Vercel asks you to, and keep any MX records if this domain will receive email.

Forms email **bido.nader@gmail.com** through FormSubmit. After the first live submit, open that inbox and click the FormSubmit activation link.

## Edit content

Contact, InstaPay, and prices: `src/lib/site.ts`  
Programs: `src/lib/programs.ts`
"# SUPERHUMAN" 
