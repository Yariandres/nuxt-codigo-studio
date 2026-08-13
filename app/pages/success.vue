<script setup lang="ts">
const route = useRoute()
const sessionId = computed(() => String(route.query.session_id || ''))
const downloadUrl = computed(() =>
  sessionId.value ? `/api/download?session_id=${encodeURIComponent(sessionId.value)}` : '',
)

const hasSession = computed(() => sessionId.value.length > 0)

// Lets a buyer reach the contact form from here — e.g. if the download link has
// expired (410) or otherwise fails. This page has no header, so the modal (mounted
// globally in app.vue) is opened directly via the shared composable.
const { open: openContact } = useContact()

const pixel = useMetaPixel()

// Meta funnel: the conversion. Stripe redirects here after payment, so this is
// where Purchase must fire (the pixel can't run on Stripe's hosted page).
// Guarded per session id so a page reload doesn't double-count; the session id
// is also passed as eventID for dedup with a future server-side Conversions API.
function trackPurchaseOnce() {
  if (!hasSession.value) return
  const key = `fb-purchase-${sessionId.value}`
  if (localStorage.getItem(key)) return
  pixel.track('Purchase', WORKBOOK_PIXEL_EVENT, { eventID: sessionId.value })
  localStorage.setItem(key, '1')
}

// Auto-start the download via a hidden iframe. For a paid session the endpoint
// responds with an attachment (browser downloads, page stays put); if it fails,
// only the invisible iframe is affected — the confirmation page is untouched.
onMounted(() => {
  trackPurchaseOnce()
  if (!downloadUrl.value) return
  setTimeout(() => {
    const frame = document.createElement('iframe')
    frame.style.display = 'none'
    frame.src = downloadUrl.value
    document.body.appendChild(frame)
  }, 800)
})

useHead({ title: 'Dziękujemy — pobierz swój workbook' })
</script>

<template>
  <div class="success">
    <div class="container success__wrap">
      <div class="card success__card">
        <template v-if="hasSession">
          <div class="success__check" aria-hidden="true">✓</div>
          <h1 class="h2 success__title">Dziękujemy za zakup!</h1>
          <p class="success__lead">
            Twoja płatność została przyjęta. Pobieranie pliku rozpocznie się automatycznie — jeśli to
            nie nastąpi, użyj przycisku poniżej.
          </p>

          <a :href="downloadUrl" class="btn btn--primary btn--lg success__btn" download>
            Pobierz workbook (PDF)
          </a>

          <p class="success__email">
            Link do pobrania wysłaliśmy również na Twój adres e-mail podany przy płatności. Sprawdź
            też folder spam.
          </p>

          <p class="success__help">
            Problem z pobraniem?
            <button type="button" class="success__contact" @click="openContact">Napisz do nas</button>
          </p>

          <NuxtLink to="/" class="success__home">← Wróć na stronę główną</NuxtLink>
        </template>

        <template v-else>
          <h1 class="h2 success__title">Brak danych płatności</h1>
          <p class="success__lead">
            Nie znaleźliśmy identyfikatora sesji płatności. Jeśli właśnie zapłaciłeś, sprawdź e-mail z
            linkiem do pobrania lub wróć na stronę główną.
          </p>
          <NuxtLink to="/pl" class="btn btn--primary btn--lg success__btn">Strona główna</NuxtLink>
          <p class="success__help">
            Nie masz linku?
            <button type="button" class="success__contact" @click="openContact">Napisz do nas</button>
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.success {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--canvas);
  padding: 48px 0;
}
.success__wrap {
  display: flex;
  justify-content: center;
}
.success__card {
  width: 100%;
  max-width: 560px;
  text-align: center;
  padding: 56px 48px;
  border-radius: var(--r-feature);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.success__check {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--pale-lavender);
  color: var(--success);
  font-size: 32px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.success__title {
  margin-top: 24px;
}
.success__lead {
  margin-top: 16px;
  color: var(--muted);
  max-width: 420px;
}
.success__btn {
  margin-top: 32px;
}
.success__email {
  margin-top: 24px;
  font-size: 14px;
  color: var(--muted);
  max-width: 420px;
}
.success__help {
  margin-top: 20px;
  font-size: 14px;
  color: var(--muted);
}
.success__contact {
  color: var(--ink);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.2s var(--ease);
}
.success__contact:hover {
  color: var(--muted);
}
.success__home {
  margin-top: 24px;
  font-size: 15px;
  font-weight: 600;
  color: var(--muted);
}
.success__home:hover {
  color: var(--ink);
}

@media (max-width: 560px) {
  .success__card {
    padding: 40px 24px;
  }
}
</style>
