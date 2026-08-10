/**
 * Price DISPLAY strings for the landing pages.
 *
 * IMPORTANT — display vs. charge:
 * Stripe charges a single base amount in PLN (`server/utils/stripe.ts`:
 * `PRODUCT.currency` + `PRODUCT.unitAmount` = 149,00 zł). With Stripe
 * **Adaptive Pricing** enabled, the Checkout page then shows/charges the buyer's
 * local currency automatically (Stripe-converted, ML-chosen, 24h-locked rate).
 *
 * These constants only control the marketing-page anchor. They cannot equal the
 * exact converted amount (Stripe picks that at checkout), so the `_EN` values are
 * a rounded USD anchor — the checkout shows the buyer their precise local price.
 *
 * - `PRICE_NOW` / `PRICE_REGULAR`  → Polish page (`/pl`), matches the PLN charge.
 * - `PRICE_NOW_EN` / `PRICE_REGULAR_EN` → English page (`/en`), USD anchor.
 */
export const PRICE_NOW = '149 zł'
/** The price the launch offer will rise to — used for the anchor + urgency copy. */
export const PRICE_REGULAR = '199 zł'

/**
 * English-page (`/en`) display anchor, in USD (≈ 149 zł). Buyers worldwide see
 * their own local currency at Stripe Checkout via Adaptive Pricing; this is only
 * the on-page anchor. Keep roughly in line with the PLN charge — nudge if FX drifts.
 */
export const PRICE_NOW_EN = '$39'
/** English-page anchor the launch offer rises to (≈ 199 zł). */
export const PRICE_REGULAR_EN = '$49'

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
