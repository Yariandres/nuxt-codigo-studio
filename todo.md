# TODO

Tracking remaining work to take the workbook sales page live.

## 🔴 Blocking go-live (needs real accounts/keys)

- [ ] **Create Stripe account** (or use existing) and grab API keys
  - Test keys first: `sk_test_…`
  - Fill `NUXT_STRIPE_SECRET_KEY` in `.env`
- [ ] **Set up Resend** for email delivery
  - Create account, add + verify a sending domain
  - Fill `NUXT_RESEND_API_KEY` and `NUXT_EMAIL_FROM` (e.g. `Workbook <kontakt@twojadomena.pl>`)
- [x] **Local end-to-end test** (Stripe test mode) — ✅ passing on the Codigo-studio sandbox:
  card `4242…` → webhook `200` → `/success` PDF download → Resend email delivered (via `onboarding@resend.dev`).
- [ ] **Enable BLIK + Przelewy24** (+ Apple/Google Pay) in the Dashboard — checkout currently offers
  **card only** (`payment_method_types: ["card"]`), but `/pl` advertises BLIK/P24 and they're the
  dominant PL methods: [dashboard.stripe.com/settings/payment_methods](https://dashboard.stripe.com/settings/payment_methods) → re-test on `/pl`
- [ ] **Fix Stripe Checkout branding** — display name currently shows "AI-Recipe" + blue button;
  set brand name/logo/colors: [dashboard.stripe.com/settings/branding](https://dashboard.stripe.com/settings/branding)
- [x] **Resend sending domain verified** — `resend.codigo-studio.com` (DKIM+SPF+MX green on GoDaddy);
  `NUXT_EMAIL_FROM=Workbook <kontakt@resend.codigo-studio.com>`. Can now email real buyers.
- [ ] **Fix duplicate SPF record (deliverability — emails hitting spam)** — `send.resend.codigo-studio.com`
  has TWO `v=spf1` TXT records → SPF PermError. In GoDaddy delete `v=spf1 include:amazonses.com ~all`,
  keep only Resend's `v=spf1 include:dc-fd741b8612._spfm.send.resend.codigo-studio.com ~all`, re-verify in
  Resend. Confirm one line: `dig +short TXT send.resend.codigo-studio.com`.
  (Note: the `localhost` link in test emails is a separate spam trigger that resolves in prod → `https://codigo-studio.com`.)

## 🌐 Locale-aware delivery

- [x] **Deliver the workbook in the buyer's language** — was a live bug: every `/pl` buyer got the
  English PDF. Now `BuyButton` sends the page locale → stored on Stripe session `metadata.locale` →
  `/api/download` serves `workbook-pl.pdf` or `workbook-en.pdf` (defaults to PL if missing). Product
  name/description on Stripe Checkout and `cancel_url` are also localized. Verified live for both.
  Assets: [server/assets/workbook-pl.pdf](server/assets), `workbook-en.pdf`; map: [server/utils/stripe.ts](server/utils/stripe.ts).
- [ ] **EN launch i18n (later):** [success.vue](app/pages/success.vue) and the Resend email
  ([server/utils/email.ts](server/utils/email.ts)) are still **Polish-only**, and `success_url` isn't
  localized. Fine for PL launch; before the EN launch, add EN copy (webhook can read `metadata.locale`).

## 🚀 Deploy (Dokploy)

- [x] Create app in Dokploy from this repo (Dockerfile build)
- [x] Set env vars, incl. `NUXT_PUBLIC_SITE_URL=https://codigo-studio.com` (no trailing slash) + pixel ID
- [x] App deployed + live on `codigo-studio.com/pl` (pixel verified, buy button → Stripe)

## 💳 Switch Stripe test → LIVE (final go-live — ⚠️ prod currently on TEST keys, real cards decline)

Live keys go in **Dokploy only**, never local `.env` (keep local on `sk_test_`). Live-mode settings are
separate from test — payment methods must be re-enabled.

- [ ] **Step 0 — Activate account for live** — Dashboard → Live mode; complete profile + PL bank account
  if prompted (payouts held until activated). Branding is account-wide (carries); payment methods are not.
- [ ] **Step 1 — Get `sk_live_…`** — Live mode → Developers → API keys (no publishable key needed)
- [ ] **Step 2 — Re-enable payment methods in LIVE** (BLIK, Przelewy24, cards, wallets):
  [dashboard.stripe.com/settings/payment_methods](https://dashboard.stripe.com/settings/payment_methods)
- [ ] **Step 3 — Add LIVE webhook** → `https://codigo-studio.com/api/stripe/webhook`, event
  `checkout.session.completed` → copy its live `whsec_…`
- [ ] **Step 4 — Update Dokploy env + redeploy:** `NUXT_STRIPE_SECRET_KEY=sk_live_…`,
  `NUXT_STRIPE_WEBHOOK_SECRET=<live whsec_…>`, confirm `NUXT_PUBLIC_SITE_URL=https://codigo-studio.com`
- [ ] **Step 5 — One real purchase on `/pl`** (149 zł): success → PL PDF → email from
  `kontakt@resend.codigo-studio.com` → webhook `200` (live) → payment in live Transactions → Meta Purchase
  event fires. Then refund from Dashboard (Stripe keeps the fee).

## 🌍 Multi-geo / `/en` (later — after PL launch)

Decision: one Codigo-studio account, single PLN base price, **Stripe Adaptive Pricing** auto-converts
to the buyer's local currency at Checkout (no code branching). VAT deferred for now.

- [x] `/en` shows a USD anchor (`$39`/`$49`) instead of złoty — [app/utils/pricing.ts](app/utils/pricing.ts) (`PRICE_NOW_EN`)
- [ ] Enable Adaptive Pricing (sandbox → live): [dashboard.stripe.com/settings/adaptive-pricing](https://dashboard.stripe.com/settings/adaptive-pricing)
- [ ] **Sanity-check the checkout redirect** with a `+location_XX` email (e.g. `test+location_GB@example.com`) —
  confirm Stripe Checkout shows that country's currency; base still books as PLN via `presentment_details`

## ✨ Nice-to-have / polish (optional)

- [ ] Legal pages: Regulamin + Polityka prywatności (link from footer) — often required for PL digital sales
- [ ] Add invoice/company-details collection at checkout if selling B2B (Stripe `tax_id_collection`)
- [ ] Buyer confirmation: consider a Stripe receipt email in addition to the Resend delivery email
- [ ] Analytics (Plausible/GA) + track the "Kup workbook" click → purchase funnel
- [x] **Meta Pixel consent/RODO (wersja PL)** — pixel gated behind an Accept/Reject cookie banner; `fbevents.js` never loads until the user accepts (verified). Consent state: [`app/composables/useCookieConsent.ts`](app/composables/useCookieConsent.ts) · banner: [`app/components/CookieConsent.vue`](app/components/CookieConsent.vue) · gated plugin: [`app/plugins/meta-pixel.client.ts`](app/plugins/meta-pixel.client.ts). Withdraw via footer "Ustawienia cookies" / "Cookie settings".
  - [ ] Fill in real legal copy on the placeholder policy pages ([pl/polityka-prywatnosci.vue](app/pages/pl/polityka-prywatnosci.vue), [en/privacy-policy.vue](app/pages/en/privacy-policy.vue)) — see legal pages item above
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
