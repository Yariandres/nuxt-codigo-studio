import type Stripe from 'stripe'
import { useStripe } from '../../utils/stripe'
import { sendWorkbookEmail } from '../../utils/email'

/**
 * Stripe webhook. On `checkout.session.completed`, emails the buyer a link to
 * the /success page (which re-verifies the session and serves the PDF).
 *
 * Always returns 200 quickly so Stripe doesn't retry on our email failures —
 * email problems are logged, not surfaced to Stripe.
 */
export default defineEventHandler(async (event) => {
  const stripe = useStripe()
  const { stripeWebhookSecret, public: pub } = useRuntimeConfig()

  const signature = getHeader(event, 'stripe-signature')
  const rawBody = await readRawBody(event)

  if (!signature || !rawBody || !stripeWebhookSecret) {
    throw createError({ statusCode: 400, statusMessage: 'Nieprawidłowe żądanie webhooka.' })
  }

  let stripeEvent: Stripe.Event
  try {
    stripeEvent = stripe.webhooks.constructEvent(rawBody, signature, stripeWebhookSecret)
  } catch (err) {
    throw createError({ statusCode: 400, statusMessage: 'Weryfikacja podpisu webhooka nie powiodła się.' })
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object as Stripe.Checkout.Session
    const email = session.customer_details?.email || session.customer_email

    if (email && session.payment_status === 'paid') {
      const siteUrl = pub.siteUrl.replace(/\/$/, '')
      const downloadUrl = `${siteUrl}/success?session_id=${session.id}`
      try {
        await sendWorkbookEmail(email, downloadUrl)
      } catch (err) {
        // Log but still 200 — the buyer already has the on-page download.
        console.error('[webhook] Nie udało się wysłać e-maila z workbookiem:', err)
      }
    }
  }

  return { received: true }
})
