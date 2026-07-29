# Akif Hossen — Portfolio & Lead Site

Personal portfolio and lead page for website services aimed at Facebook business owners. Built with Vite + React + TypeScript.

## Quick start

```bash
npm install
cp .env.example .env
# fill in IDs/keys in .env
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Change Current Focus (target audience)

Edit one file: [`src/content/currentFocus.ts`](src/content/currentFocus.ts).

Update `headline`, `audience`, `summary`, `ctaText`, and `updatedAt`. The **Hero** and **Current Focus** sections both use this config. About / career / hobbies stay in [`src/content/site.ts`](src/content/site.ts).

Then rebuild and redeploy:

```bash
npm run build
```

## Environment variables

Copy `.env.example` to `.env` (local) or set the same keys in your host dashboard.

| Variable | Purpose |
|----------|---------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics 4 |
| `VITE_META_PIXEL_ID` | Meta Pixel (PageView + Lead) |
| `VITE_RECAPTCHA_SITE_KEY` | Google reCAPTCHA v2 checkbox |
| `VITE_FORMSPREE_ENDPOINT` | Contact form POST URL |
| `VITE_WHATSAPP_NUMBER` | WhatsApp chat button |
| `VITE_CONTACT_EMAIL` | Optional mailto link |

Never commit `.env` with real secrets. The reCAPTCHA **secret** key stays in Formspree (or your backend), not in the frontend.

### Formspree + reCAPTCHA

1. Create a form at [formspree.io](https://formspree.io).
2. Set `VITE_FORMSPREE_ENDPOINT` to the form URL.
3. In Formspree, enable reCAPTCHA and add your secret key.
4. Put the site key in `VITE_RECAPTCHA_SITE_KEY`.

Successful submits fire `generate_lead` (GA4) and `Lead` (Meta Pixel).

## Deploy

Static site — any static host works.

### Vercel / Netlify

1. Connect this folder as the app root (or monorepo subdirectory `akif-portfolio`).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add the `VITE_*` env vars in the host UI, then redeploy.

### GitHub Pages

1. Set `base` in `vite.config.ts` if the site is not at the domain root.
2. Build and publish the `dist` folder (e.g. `gh-pages` action).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run preview` — preview production build locally
