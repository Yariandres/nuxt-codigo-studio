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
