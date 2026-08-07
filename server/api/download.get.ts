import { PRODUCT, useStripe } from '../utils/stripe'

/**
 * Verifies a Stripe Checkout session is paid, then streams the workbook PDF.
 * The session_id is the capability: every request re-checks payment with Stripe,
 * so the file is never reachable without a real, paid session.
 */
export default defineEventHandler(async (event) => {
  const { session_id: sessionId } = getQuery(event)

  if (!sessionId || typeof sessionId !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Brak identyfikatora sesji płatności.' })
  }

  const stripe = useStripe()

  let session
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId)
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'Nie znaleziono sesji płatności.' })
  }

  if (session.payment_status !== 'paid') {
    throw createError({ statusCode: 402, statusMessage: 'Płatność nie została opłacona.' })
  }

  // Read the PDF from server assets (bundled, not web-public).
  const pdf = await useStorage('assets:server').getItemRaw('workbook.pdf')
  if (!pdf) {
    throw createError({ statusCode: 500, statusMessage: 'Plik nie jest dostępny.' })
  }

  setHeader(event, 'Content-Type', 'application/pdf')
  setHeader(event, 'Content-Disposition', `attachment; filename="${PRODUCT.fileName}"`)
  setHeader(event, 'Cache-Control', 'private, no-store')
  return pdf
})
