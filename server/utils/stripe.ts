import Stripe from 'stripe'

let _stripe: Stripe | null = null

/**
 * Lazily-instantiated Stripe client (server only).
 * Reads the secret key from runtime config (NUXT_STRIPE_SECRET_KEY).
 */
export function useStripe(): Stripe {
  if (_stripe) return _stripe

  const { stripeSecretKey } = useRuntimeConfig()
  if (!stripeSecretKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Stripe nie jest skonfigurowany (brak NUXT_STRIPE_SECRET_KEY).',
    })
  }

  _stripe = new Stripe(stripeSecretKey)
  return _stripe
}

export type WorkbookLocale = 'pl' | 'en'

/** Shared price — same amount/currency for every locale (Adaptive Pricing localizes at checkout). */
export const PRODUCT = {
  currency: 'pln',
  /** Amount in the smallest currency unit (grosze). 149,00 zł. */
  unitAmount: 14900,
} as const

/**
 * Per-locale workbook content + which PDF to deliver. The buyer's locale is captured
 * at checkout (from the /pl or /en landing page), stored on the Stripe session
 * `metadata`, and read back in /api/download — so /pl buyers get the Polish workbook
 * and /en buyers the English one.
 */
export const WORKBOOK: Record<WorkbookLocale, {
  name: string
  description: string
  /** Filename presented to the buyer on download. */
  fileName: string
  /** Key in the `assets:server` storage → server/assets/<asset>. */
  asset: string
}> = {
  pl: {
    name: 'AI Business Starter System — Interaktywny Workbook',
    description: 'Interaktywny workbook (50 stron, PDF) + scorecard, szablony i 7-dniowy plan.',
    fileName: 'AI-dla-malych-firm-Workbook.pdf',
    asset: 'workbook-pl.pdf',
  },
  en: {
    name: 'AI Business Starter System — Interactive Workbook',
    description: 'Interactive workbook (50 pages, PDF) + scorecard, templates and a 7-day plan.',
    fileName: 'AI-for-Small-Business-Owners-Workbook.pdf',
    asset: 'workbook-en.pdf',
  },
}

/** Narrow arbitrary input to a supported locale; defaults to PL (primary market). */
export function resolveWorkbookLocale(input: unknown): WorkbookLocale {
  return input === 'en' ? 'en' : 'pl'
}

/**
 * How long a paid download link stays valid, in seconds (7 days). The link in the
 * delivery email is a bearer capability, so we cap its lifetime instead of allowing
 * indefinite re-downloads. Stateless: enforced against the session's `created` time,
 * so it needs no persistence. Buyers can re-download freely within the window.
 */
export const DOWNLOAD_WINDOW_SECONDS = 7 * 24 * 60 * 60
