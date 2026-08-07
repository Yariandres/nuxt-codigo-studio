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

/** Product constants — single source of truth for the checkout price. */
export const PRODUCT = {
  name: 'AI Business Starter System — Interactive Workbook',
  description: 'Interaktywny workbook (50 stron, PDF) + scorecard, szablony i 7-dniowy plan.',
  currency: 'pln',
  /** Amount in the smallest currency unit (grosze). 149,00 zł. */
  unitAmount: 14900,
  /** Filename presented to the buyer on download. */
  fileName: 'AI-for-Small-Business-Owners-Workbook.pdf',
} as const
