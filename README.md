# AI Business Starter System — landing + checkout

Nuxt 4 sales page for the **AI for Small Business Owners** interactive workbook.
Flow: land → buy → Stripe Checkout → pay → download PDF (on-page **and** by email).
No database, no accounts — the Stripe session is the access token.

## How it works

```
/            → BuyButton → POST /api/checkout → Stripe Checkout Session → redirect to Stripe
Stripe paid  → success_url = /success?session_id={CHECKOUT_SESSION_ID}
/success     → GET /api/download?session_id=… → verifies payment_status="paid" → streams PDF
Stripe hook  → POST /api/stripe/webhook → Resend emails the /success link (durable delivery)
```

The PDF lives in `server/assets/workbook.pdf` (bundled server-side, **never** web-public).
Every download re-verifies the session against Stripe, so the file is unreachable without a real paid session.

## Setup

1. Copy env and fill in real values:
   ```bash
   cp .env.example .env
   ```
   | Var | Purpose |
   |---|---|
   | `NUXT_STRIPE_SECRET_KEY` | Stripe secret key (`sk_test_…` / `sk_live_…`) |
   | `NUXT_STRIPE_WEBHOOK_SECRET` | Webhook signing secret (`whsec_…`) |
   | `NUXT_RESEND_API_KEY` | Resend API key |
   | `NUXT_EMAIL_FROM` | Verified Resend sender, e.g. `Workbook <kontakt@domena.pl>` |
   | `NUXT_PUBLIC_SITE_URL` | Public base URL, no trailing slash |

2. Dev server:
   ```bash
   pnpm dev
   ```

## Local end-to-end test (Stripe test mode)

```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```
Put the printed `whsec_…` into `NUXT_STRIPE_WEBHOOK_SECRET`, then buy on the site with test card
`4242 4242 4242 4242` (any future expiry / CVC). You should land on `/success`, the PDF downloads,
and the Resend email arrives.

## Deploy (Dokploy / Docker)

The repo ships a multi-stage `Dockerfile` (Nitro `node-server`, listens on `:3000`).

1. In Dokploy, create an app from this repo (Dockerfile build).
2. Set the five `NUXT_*` env vars (use `NUXT_PUBLIC_SITE_URL=https://your-domain`).
3. Deploy, then in the Stripe Dashboard add a webhook endpoint:
   `https://your-domain/api/stripe/webhook` → event `checkout.session.completed`, and copy its
   live `whsec_…` into `NUXT_STRIPE_WEBHOOK_SECRET`.

## Regenerating the mockup images

Hero / step visuals are rendered from the PDF into `public/mockups/`:
```bash
python3 -c "import fitz;d=fitz.open('server/assets/workbook.pdf');m=fitz.Matrix(2.1,2.1);\
[d[i].get_pixmap(matrix=m).save(f'public/mockups/{n}.png') for i,n in {0:'cover',8:'worksheet',10:'map',11:'scorecard'}.items()]"
```

## Structure

- `app/pages/index.vue` — landing page (composes the section components in `app/components/`)
- `app/pages/success.vue` — post-payment download page
- `app/components/BuyButton.vue` — shared CTA → `/api/checkout`
- `server/api/checkout.post.ts` — creates the Checkout Session (price defined in `server/utils/stripe.ts`)
- `server/api/download.get.ts` — verifies payment, streams the PDF
- `server/api/stripe/webhook.post.ts` — emails the download link on paid
- `server/utils/{stripe,email}.ts` — Stripe client + Resend helper
# nuxt-codigo-studio
