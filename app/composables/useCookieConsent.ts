/**
 * Marketing cookie-consent state (RODO/GDPR).
 *
 * Single source of truth for whether the user has accepted marketing cookies
 * (the Meta Pixel). Backed by a first-party cookie so it's available during SSR
 * — no banner flash, no hydration mismatch.
 *
 *   const { accepted, decided, accept, reject, reopen } = useCookieConsent()
 *
 * - `accepted` drives whether the pixel is allowed to load (see
 *   app/plugins/meta-pixel.client.ts).
 * - `decided` controls banner visibility (see app/components/CookieConsent.vue).
 */
export type ConsentStatus = 'unset' | 'accepted' | 'rejected'

export function useCookieConsent() {
  const cookie = useCookie<ConsentStatus>('cookie-consent', {
    default: () => 'unset',
    maxAge: 60 * 60 * 24 * 180, // 180 days
    sameSite: 'lax',
    path: '/',
  })

  // Shared, keyed singleton so every component instance (banner, both footers)
  // and the pixel plugin react to the same state — `useCookie` alone returns an
  // independent ref per call, which wouldn't propagate a click to the others.
  // Seeded from the cookie on the server, then serialized to the client.
  const status = useState<ConsentStatus>('cookie-consent', () => cookie.value ?? 'unset')

  const set = (value: ConsentStatus) => {
    status.value = value // reactive, shared across instances
    cookie.value = value // persist to the cookie
  }

  const accepted = computed(() => status.value === 'accepted')
  const decided = computed(() => status.value !== 'unset')

  const accept = () => set('accepted')
  const reject = () => set('rejected')
  // Re-show the banner so the user can change/withdraw their choice.
  const reopen = () => set('unset')

  return { status, accepted, decided, accept, reject, reopen }
}
