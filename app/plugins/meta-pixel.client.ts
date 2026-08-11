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

  const { proxy } = useScriptMetaPixel({
    id: String(metaPixelId),
    // `bundle: false` overrides @nuxt/scripts' default for the Meta Pixel
    // (registry default is `bundle: true`), which self-hosts fbevents.js from
    // /_scripts/. Self-hosting makes the pixel invisible to Meta Pixel Helper
    // and stops the /tr beacons from registering in Events Manager. Loading the
    // canonical connect.facebook.net/fbevents.js is what ad attribution + Meta's
    // tooling expect.
    //
    // Consent is enforced by the load trigger above: fbevents.js is never
    // requested until `accepted` is true, so nothing fires pre-consent. We must
    // NOT set `defaultConsent: 'denied'` here — that made clientInit call
    // fbq('consent', 'revoke'), which left the pixel revoked so PageView /
    // InitiateCheckout were tracked but never sent a /tr beacon (nothing ever
    // called the matching grant). See the explicit grant below.
    scriptOptions: { trigger: consent, bundle: false },
  })

  // Explicitly grant Meta's consent the moment marketing cookies are accepted,
  // guaranteeing the pixel is in a sending state (fbevents' own default can be
  // non-sending depending on the pixel's consent settings). `proxy.fbq` queues
  // until fbevents.js has loaded — which only happens post-consent via the
  // trigger above — so this never sends anything before the user opts in.
  watch(accepted, (ok) => { if (ok) proxy.fbq('consent', 'grant') }, { immediate: true })
})
