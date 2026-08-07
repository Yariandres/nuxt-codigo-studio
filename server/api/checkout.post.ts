import { PRODUCT, useStripe } from '../utils/stripe'

/**
 * Creates a Stripe Checkout Session for the workbook and returns its URL.
 * The client redirects the browser to `url`.
 */
export default defineEventHandler(async (event) => {
  const stripe = useStripe()
  const { public: pub } = useRuntimeConfig()
  const siteUrl = pub.siteUrl.replace(/\/$/, '')

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: PRODUCT.currency,
          unit_amount: PRODUCT.unitAmount,
          product_data: {
            name: PRODUCT.name,
            description: PRODUCT.description,
          },
        },
      },
    ],
    // Collect the buyer's email so the webhook can deliver the download link.
    billing_address_collection: 'auto',
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/#kup`,
  })

  if (!session.url) {
    throw createError({ statusCode: 502, statusMessage: 'Stripe nie zwrócił adresu płatności.' })
  }

  return { url: session.url }
})
