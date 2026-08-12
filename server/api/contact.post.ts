import { sendContactEmail } from '../utils/email'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Lightweight per-IP rate limit. In-memory: fine for a single long-running
// container (resets on redeploy, not shared across instances) — paired with the
// honeypot it's enough to keep casual spam off the form.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent)
    return true
  }
  recent.push(now)
  hits.set(ip, recent)
  return false
}

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    message?: string
    consent?: boolean
    /** Honeypot — must stay empty; bots fill it. */
    company?: string
    locale?: string
  }>(event).catch(() => null)

  if (!body) {
    throw createError({ statusCode: 400, statusMessage: 'Nieprawidłowe żądanie.' })
  }

  // Honeypot: a real user never sees/fills `company`. If present, silently accept
  // and drop — don't tell the bot it was caught.
  if (typeof body.company === 'string' && body.company.trim() !== '') {
    return { ok: true }
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()
  const consent = body.consent === true
  const locale = body.locale === 'en' ? 'en' : 'pl'

  if (!name || name.length > 100) {
    throw createError({ statusCode: 422, statusMessage: 'Podaj imię.' })
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    throw createError({ statusCode: 422, statusMessage: 'Podaj poprawny adres e-mail.' })
  }
  if (message.length < 10 || message.length > 5000) {
    throw createError({ statusCode: 422, statusMessage: 'Wiadomość jest za krótka lub za długa.' })
  }
  if (!consent) {
    throw createError({ statusCode: 422, statusMessage: 'Wymagana jest zgoda na przetwarzanie danych.' })
  }

  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  if (rateLimited(ip)) {
    throw createError({ statusCode: 429, statusMessage: 'Zbyt wiele wiadomości. Spróbuj później.' })
  }

  try {
    await sendContactEmail({ name, email, message, locale })
  } catch (err) {
    console.error('[contact] Nie udało się wysłać wiadomości:', err)
    throw createError({ statusCode: 502, statusMessage: 'Nie udało się wysłać wiadomości.' })
  }

  return { ok: true }
})
