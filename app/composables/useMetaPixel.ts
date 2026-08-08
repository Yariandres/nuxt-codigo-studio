/**
 * Thin, SSR-safe wrapper around the Meta Pixel for tracking conversions.
 *
 * All methods are no-ops when NUXT_PUBLIC_META_PIXEL_ID is unset or on the
 * server, so you can call them unconditionally from components/pages.
 *
 *   const pixel = useMetaPixel()
 *   pixel.track('Lead')
 *   pixel.track('Purchase', { currency: 'PLN', value: 49 })
 *   pixel.trackCustom('DownloadWorkbook')
 */

// Meta's predefined standard events. Custom names go through `trackCustom`.
type MetaStandardEvent =
  | 'AddPaymentInfo'
  | 'AddToCart'
  | 'AddToWishlist'
  | 'CompleteRegistration'
  | 'Contact'
  | 'CustomizeProduct'
  | 'Donate'
  | 'FindLocation'
  | 'InitiateCheckout'
  | 'Lead'
  | 'Purchase'
  | 'Schedule'
  | 'Search'
  | 'StartTrial'
  | 'SubmitApplication'
  | 'Subscribe'
  | 'ViewContent'

type MetaEventData = Record<string, unknown>

/**
 * Extra fbq options. `eventID` is Meta's deduplication key: pass a stable id
 * (e.g. the Stripe session id) so a browser event and a future server-side
 * Conversions API event for the same purchase are counted once.
 */
type MetaEventOptions = { eventID?: string }

export function useMetaPixel() {
  const { public: { metaPixelId } } = useRuntimeConfig()
  const { accepted } = useCookieConsent()
  // Evaluated per call (not captured once) so a consent change after this
  // composable is set up is respected. Gating on consent also stops events
  // being buffered by the proxy pre-decision and retro-fired on a later accept.
  const isEnabled = () => import.meta.client && !!metaPixelId && accepted.value
  const enabled = computed(isEnabled)

  // Reuses the instance registered in plugins/meta-pixel.client.ts. The proxy
  // queues calls until the fbq script has loaded, so ordering is safe.
  const { proxy } = useScriptMetaPixel()

  function track(event: MetaStandardEvent, data?: MetaEventData, options?: MetaEventOptions) {
    if (!isEnabled()) return
    if (options?.eventID) proxy.fbq('track', event, data, options)
    else proxy.fbq('track', event, data)
  }

  function trackCustom(event: string, data?: MetaEventData, options?: MetaEventOptions) {
    if (!isEnabled()) return
    if (options?.eventID) proxy.fbq('trackCustom', event, data, options)
    else proxy.fbq('trackCustom', event, data)
  }

  return { enabled, track, trackCustom }
}
