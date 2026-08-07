# TODO

Tracking remaining work to take the workbook sales page live.

## 🔴 Blocking go-live (needs real accounts/keys)

- [ ] **Create Stripe account** (or use existing) and grab API keys
  - Test keys first: `sk_test_…`
  - Fill `NUXT_STRIPE_SECRET_KEY` in `.env`
- [ ] **Set up Resend** for email delivery
  - Create account, add + verify a sending domain
  - Fill `NUXT_RESEND_API_KEY` and `NUXT_EMAIL_FROM` (e.g. `Workbook <kontakt@twojadomena.pl>`)
- [ ] **Local end-to-end test** (Stripe test mode)
  - Run: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
  - Copy the printed `whsec_…` into `NUXT_STRIPE_WEBHOOK_SECRET`
  - Buy with test card `4242 4242 4242 4242` (any future expiry/CVC)
  - Confirm: land on `/success` → PDF downloads → email arrives

## 🚀 Deploy (Dokploy)

- [ ] Create app in Dokploy from this repo (Dockerfile build)
- [ ] Set the 5 env vars (`NUXT_PUBLIC_SITE_URL=https://your-domain`, no trailing slash)
- [ ] Add live Stripe webhook: `https://your-domain/api/stripe/webhook` → event `checkout.session.completed`
- [ ] Copy the live `whsec_…` into `NUXT_STRIPE_WEBHOOK_SECRET` and redeploy
- [ ] Switch Stripe keys from test → live (`sk_live_…`)
- [ ] Run one real purchase against production to confirm the full flow

## ✨ Nice-to-have / polish (optional)

- [ ] Legal pages: Regulamin + Polityka prywatności (link from footer) — often required for PL digital sales
- [ ] Add invoice/company-details collection at checkout if selling B2B (Stripe `tax_id_collection`)
- [ ] Buyer confirmation: consider a Stripe receipt email in addition to the Resend delivery email
- [ ] Analytics (Plausible/GA) + track the "Kup workbook" click → purchase funnel
- [ ] OpenGraph/social share image (`public/og.png`) + meta tags for link previews
- [ ] Consider download-link expiry or a max-download count (currently the paid session works indefinitely)
- [ ] Fill remaining design-doc sections if wanted (before/after, built-for-owners+teams)

## ✅ Done

- [x] Landing page (Polish, full design system)
- [x] Stripe Checkout flow (`/api/checkout` → Stripe → `/success`)
- [x] Payment-verified PDF download (`/api/download`)
- [x] Webhook + Resend email delivery
- [x] Success/download page
- [x] Dockerfile + `.dockerignore` for Dokploy
- [x] `.env.example` + README with setup/test/deploy steps
