<script setup lang="ts">
/**
 * RODO/GDPR marketing cookie banner.
 *
 * Binary Accept / Reject. Accepting flips the consent cookie, which lets the
 * Meta Pixel load (app/plugins/meta-pixel.client.ts). Rejecting loads nothing.
 * Shown only while the choice is `unset`; re-openable via the footer link
 * (useCookieConsent().reopen()).
 *
 * No i18n framework — copy is picked from the route, matching the codebase's
 * per-locale pattern. Polish is the fallback (root defaults to lang="pl").
 */
const { decided, accept, reject } = useCookieConsent()

const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))

const copy = computed(() =>
  isEn.value
    ? {
        text: 'We use marketing cookies (Meta Pixel) to measure how our ads perform. You can accept or reject — this choice doesn’t affect your purchase.',
        accept: 'Accept',
        reject: 'Reject',
        policy: 'Privacy Policy',
        policyHref: '/en/privacy-policy',
        aria: 'Cookie consent',
      }
    : {
        text: 'Używamy plików cookie do celów marketingowych (Meta Pixel), aby mierzyć skuteczność reklam. Możesz zaakceptować lub odrzucić — nie wpływa to na zakup.',
        accept: 'Akceptuję',
        reject: 'Odrzucam',
        policy: 'Polityka prywatności',
        policyHref: '/pl/polityka-prywatnosci',
        aria: 'Zgoda na pliki cookie',
      },
)
</script>

<template>
  <Transition name="consent">
    <section
      v-if="!decided"
      class="consent"
      role="dialog"
      aria-live="polite"
      :aria-label="copy.aria"
    >
      <div class="container consent__inner">
        <p class="consent__text">
          {{ copy.text }}
          <NuxtLink :to="copy.policyHref" class="consent__link">{{ copy.policy }}</NuxtLink>
        </p>
        <div class="consent__actions">
          <button type="button" class="btn btn--secondary" @click="reject">
            {{ copy.reject }}
          </button>
          <button type="button" class="btn btn--primary" @click="accept">
            {{ copy.accept }}
          </button>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100; /* above the sticky header (z-index: 50) */
  background: var(--surface);
  border-top: 1px solid var(--border);
  box-shadow: var(--shadow-float);
  padding: 20px 0 calc(20px + env(safe-area-inset-bottom));
}
.consent__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.consent__text {
  flex: 1 1 320px;
  margin: 0;
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 1.5;
  max-width: 720px;
}
.consent__link {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
}
.consent__link:hover {
  color: var(--muted);
}
.consent__actions {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
}

/* Slide/fade in from the bottom */
.consent-enter-active,
.consent-leave-active {
  transition: transform 0.3s var(--ease), opacity 0.3s var(--ease);
}
.consent-enter-from,
.consent-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 640px) {
  .consent__actions {
    width: 100%;
  }
  .consent__actions .btn {
    flex: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .consent-enter-active,
  .consent-leave-active {
    transition: opacity 0.2s var(--ease);
  }
  .consent-enter-from,
  .consent-leave-to {
    transform: none;
  }
}
</style>
