<script setup lang="ts">
/**
 * Contact form, mounted once globally in app.vue and opened from the header mail
 * icon via useContact(). Follows the codebase's per-route locale pattern (no i18n
 * framework); Polish is the fallback. Posts to /api/contact (honeypot + rate-limit
 * + Resend delivery server-side).
 */
const { isOpen, close } = useContact()

const route = useRoute()
const isEn = computed(() => route.path.startsWith('/en'))

const copy = computed(() =>
  isEn.value
    ? {
        title: 'Get in touch',
        intro: 'A question about the workbook or a problem with your download? Send a message and we’ll reply to your email.',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        consent: 'I consent to my data being processed to answer this message',
        policy: 'Privacy Policy',
        policyHref: '/en/privacy-policy',
        send: 'Send',
        sending: 'Sending…',
        success: 'Thanks! Your message has been sent — we’ll reply to your email.',
        error: 'Couldn’t send your message. Please try again shortly.',
        close: 'Close',
        aria: 'Contact form',
      }
    : {
        title: 'Napisz do nas',
        intro: 'Masz pytanie o workbook albo problem z pobraniem? Wyślij wiadomość — odpowiemy na Twój e-mail.',
        name: 'Imię',
        email: 'E-mail',
        message: 'Wiadomość',
        consent: 'Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na wiadomość',
        policy: 'Polityka prywatności',
        policyHref: '/pl/polityka-prywatnosci',
        send: 'Wyślij',
        sending: 'Wysyłanie…',
        success: 'Dziękujemy! Wiadomość została wysłana — odpowiemy na Twój e-mail.',
        error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie za chwilę.',
        close: 'Zamknij',
        aria: 'Formularz kontaktowy',
      },
)

type Status = 'idle' | 'sending' | 'sent' | 'error'
const status = ref<Status>('idle')
const form = reactive({ name: '', email: '', message: '', consent: false, company: '' })
const nameInput = ref<HTMLInputElement | null>(null)

function reset() {
  form.name = ''
  form.email = ''
  form.message = ''
  form.consent = false
  form.company = ''
  status.value = 'idle'
}

async function submit() {
  if (status.value === 'sending') return
  status.value = 'sending'
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form, locale: isEn.value ? 'en' : 'pl' },
    })
    status.value = 'sent'
  } catch {
    status.value = 'error'
  }
}

function onClose() {
  close()
}

// Focus the first field when opened; reset a short while after closing so the
// success state isn't visible on the next open but doesn't flash during the fade.
watch(isOpen, (open) => {
  if (open) {
    nextTick(() => nameInput.value?.focus())
  } else {
    setTimeout(reset, 250)
  }
})

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && isOpen.value) onClose()
}
onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <Transition name="cm">
      <div
        v-if="isOpen"
        class="cm"
        role="dialog"
        aria-modal="true"
        :aria-label="copy.aria"
        @click.self="onClose"
      >
        <div class="cm__panel">
          <button type="button" class="cm__x" :aria-label="copy.close" @click="onClose">✕</button>

          <template v-if="status === 'sent'">
            <div class="cm__done">
              <div class="cm__check" aria-hidden="true">✓</div>
              <p class="cm__success">{{ copy.success }}</p>
              <button type="button" class="btn btn--primary" @click="onClose">{{ copy.close }}</button>
            </div>
          </template>

          <template v-else>
            <h2 class="cm__title">{{ copy.title }}</h2>
            <p class="cm__intro">{{ copy.intro }}</p>

            <form class="cm__form" @submit.prevent="submit">
              <!-- Honeypot: hidden from users, tempting to bots. Kept empty by humans. -->
              <div class="cm__hp" aria-hidden="true">
                <label>Company<input v-model="form.company" type="text" tabindex="-1" autocomplete="off" /></label>
              </div>

              <label class="cm__field">
                <span class="cm__label">{{ copy.name }}</span>
                <input ref="nameInput" v-model="form.name" type="text" required maxlength="100" class="cm__input" />
              </label>

              <label class="cm__field">
                <span class="cm__label">{{ copy.email }}</span>
                <input v-model="form.email" type="email" required maxlength="200" class="cm__input" />
              </label>

              <label class="cm__field">
                <span class="cm__label">{{ copy.message }}</span>
                <textarea v-model="form.message" required minlength="10" maxlength="5000" rows="5" class="cm__input cm__textarea" />
              </label>

              <label class="cm__consent">
                <input v-model="form.consent" type="checkbox" required />
                <span>
                  {{ copy.consent }}
                  (<NuxtLink :to="copy.policyHref" class="cm__policy" @click="onClose">{{ copy.policy }}</NuxtLink>).
                </span>
              </label>

              <p v-if="status === 'error'" class="cm__error" role="alert">{{ copy.error }}</p>

              <button type="submit" class="btn btn--primary btn--lg cm__submit" :disabled="status === 'sending'">
                {{ status === 'sending' ? copy.sending : copy.send }}
              </button>
            </form>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.cm {
  position: fixed;
  inset: 0;
  z-index: 200; /* above header (50) and cookie banner (100) */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(10, 10, 10, 0.4);
  backdrop-filter: blur(2px);
}
.cm__panel {
  position: relative;
  width: 100%;
  max-width: 460px;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  box-shadow: var(--shadow-float);
  padding: 40px;
}
.cm__x {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  border-radius: var(--r-pill);
  color: var(--muted);
  font-size: 15px;
  transition: color 0.2s var(--ease), background 0.2s var(--ease);
}
.cm__x:hover {
  color: var(--ink);
  background: var(--surface-alt);
}
.cm__title {
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.02em;
}
.cm__intro {
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.5;
}
.cm__form {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* Honeypot — visually and semantically hidden, but not display:none (some bots skip those). */
.cm__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.cm__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cm__label {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
}
.cm__input {
  width: 100%;
  padding: 12px 14px;
  font: inherit;
  font-size: 15px;
  color: var(--ink);
  background: var(--surface);
  border: 1px solid var(--border-strong);
  border-radius: var(--r-btn);
  transition: border-color 0.2s var(--ease), box-shadow 0.2s var(--ease);
}
.cm__input:focus {
  outline: none;
  border-color: var(--lavender);
  box-shadow: 0 0 0 3px var(--pale-lavender);
}
.cm__textarea {
  resize: vertical;
  min-height: 110px;
}
.cm__consent {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 13px;
  color: var(--muted);
  line-height: 1.45;
}
.cm__consent input {
  margin-top: 2px;
  flex: none;
}
.cm__policy {
  color: var(--ink);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.cm__error {
  margin: 0;
  font-size: 14px;
  color: var(--error);
}
.cm__submit {
  margin-top: 4px;
}
.cm__done {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
}
.cm__check {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--pale-lavender);
  color: var(--success);
  font-size: 28px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cm__success {
  color: var(--ink-soft);
  font-size: 15px;
  line-height: 1.5;
}

.cm-enter-active,
.cm-leave-active {
  transition: opacity 0.25s var(--ease);
}
.cm-enter-active .cm__panel,
.cm-leave-active .cm__panel {
  transition: transform 0.25s var(--ease);
}
.cm-enter-from,
.cm-leave-to {
  opacity: 0;
}
.cm-enter-from .cm__panel,
.cm-leave-to .cm__panel {
  transform: translateY(12px) scale(0.98);
}

@media (max-width: 480px) {
  .cm__panel {
    padding: 32px 24px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .cm-enter-active,
  .cm-leave-active,
  .cm-enter-active .cm__panel,
  .cm-leave-active .cm__panel {
    transition: opacity 0.15s var(--ease);
  }
  .cm-enter-from .cm__panel,
  .cm-leave-to .cm__panel {
    transform: none;
  }
}
</style>
