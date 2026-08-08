/**
 * Single source of truth for the price shown on the English landing page (`/en`).
 *
 * NOTE: these are DISPLAY strings only. The amount actually charged lives in
 * `server/utils/stripe.ts` (`PRODUCT.currency` + `PRODUCT.unitAmount`). If you change
 * the currency/number here, change it there too so the page and the charge match.
 *
 * Current Stripe charge: 149,00 zł (PLN). Adjust all of these together.
 */
export const PRICE_NOW = '149 zł'
/** The price the launch offer will rise to — used for the anchor + urgency copy. */
export const PRICE_REGULAR = '199 zł'

/** Numeric amount charged, for analytics/conversion values. Keep in sync with the Stripe charge. */
export const PRICE_VALUE = 149
/** ISO currency code for analytics events (Stripe charges in PLN regardless of page locale). */
export const PRICE_CURRENCY = 'PLN'

/**
 * Shared Meta Pixel event payload for the workbook, so InitiateCheckout
 * (buy click) and Purchase (/success) report matching value/currency/content.
 */
export const WORKBOOK_PIXEL_EVENT = {
  currency: PRICE_CURRENCY,
  value: PRICE_VALUE,
  content_name: 'AI Business Starter System — Workbook',
  content_type: 'product',
} as const
