/**
 * Meta (Facebook) Pixel — loaded client-side via @nuxt/scripts.
 *
 * Two gates must pass before the pixel loads:
 *   1. NUXT_PUBLIC_META_PIXEL_ID must be set (so local/preview builds stay clean).
 *   2. The user must have accepted marketing cookies (RODO/GDPR opt-in).
 *
 * Consent is wired via `useScriptTriggerConsent`: fbevents.js is NOT requested
 * from facebook.net until `accepted` turns true, so rejecting (or not choosing)
 * makes zero third-party network calls. Consent state lives in
 * app/composables/useCookieConsent.ts and is driven by the banner
 * (app/components/CookieConsent.vue).
 *
 * Track events anywhere with the `useMetaPixel()` composable (see
 * app/composables/useMetaPixel.ts), e.g. on the Stripe success page:
 *   useMetaPixel().track('Purchase', { currency: 'PLN', value: 49 })
 */
export default defineNuxtPlugin(() => {
  const { public: { metaPixelId } } = useRuntimeConfig()

  // No ID configured → don't load the pixel at all.
  if (!metaPixelId) return

  const { accepted } = useCookieConsent()

  // Load fbevents.js only once the user accepts marketing cookies. The trigger
  // promise resolves when `accepted` becomes true (including a later opt-in via
  // the footer "Cookie settings" link); until then nothing hits facebook.net.
  const consent = useScriptTriggerConsent({ consent: accepted })

  useScriptMetaPixel({
    id: String(metaPixelId),
    scriptOptions: { trigger: consent },
    // Belt-and-suspenders: keep Meta's own consent gate closed until grant.
    defaultConsent: 'denied',
  })
})
