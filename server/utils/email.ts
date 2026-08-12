import { Resend } from 'resend'

let _resend: Resend | null = null

function useResend(): Resend {
  if (_resend) return _resend
  const { resendApiKey } = useRuntimeConfig()
  if (!resendApiKey) {
    throw new Error('Brak NUXT_RESEND_API_KEY — nie można wysłać e-maila.')
  }
  _resend = new Resend(resendApiKey)
  return _resend
}

/** Minimal HTML-escape for user-supplied text embedded in the email body. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Delivers a contact-form submission to our own inbox (NUXT_CONTACT_TO), with the
 * sender's address as reply-to so we can answer them directly. Input is already
 * validated in the route; we still escape it before embedding in HTML.
 */
export async function sendContactEmail(input: {
  name: string
  email: string
  message: string
  locale: 'pl' | 'en'
}) {
  const { emailFrom, contactTo } = useRuntimeConfig()
  if (!contactTo) {
    throw new Error('Brak NUXT_CONTACT_TO — nie skonfigurowano skrzynki kontaktowej.')
  }
  const resend = useResend()

  await resend.emails.send({
    from: emailFrom,
    to: contactTo,
    replyTo: input.email,
    subject: `Kontakt (${input.locale.toUpperCase()}): ${input.name}`,
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;color:#0a0a0a;line-height:1.55">
        <p style="margin:0 0 4px"><strong>Od:</strong> ${escapeHtml(input.name)} &lt;${escapeHtml(input.email)}&gt;</p>
        <p style="margin:0 0 16px;color:#60646c;font-size:13px">Formularz kontaktowy · locale: ${input.locale}</p>
        <div style="white-space:pre-wrap;padding:16px;border:1px solid #e0e2e5;border-radius:12px">${escapeHtml(input.message)}</div>
        <p style="margin:16px 0 0;color:#9aa0a6;font-size:12px">Odpowiedz na tę wiadomość, aby napisać bezpośrednio do nadawcy.</p>
      </div>
    `,
  })
}

/**
 * Sends the buyer a link back to the /success page (which re-verifies the
 * Stripe session and serves the PDF). No file is attached — the link is the
 * durable delivery so it survives a closed tab.
 */
export async function sendWorkbookEmail(to: string, downloadUrl: string) {
  const { emailFrom } = useRuntimeConfig()
  const resend = useResend()

  await resend.emails.send({
    from: emailFrom,
    to,
    subject: 'Twój workbook: AI Business Starter System',
    html: `
      <div style="font-family:Arial,Helvetica,sans-serif;max-width:520px;margin:0 auto;color:#0a0a0a;line-height:1.55">
        <h1 style="font-size:22px;margin:0 0 16px">Dziękujemy za zakup! 🎉</h1>
        <p style="margin:0 0 16px;color:#333">
          Twój <strong>AI Business Starter System</strong> jest gotowy do pobrania.
          Kliknij poniższy przycisk, aby pobrać plik PDF.
        </p>
        <p style="margin:0 0 24px">
          <a href="${downloadUrl}"
             style="display:inline-block;background:#0a0a0a;color:#fff;text-decoration:none;
                    padding:14px 24px;border-radius:12px;font-weight:600">
            Pobierz workbook (PDF)
          </a>
        </p>
        <p style="margin:0 0 8px;color:#60646c;font-size:14px">
          Jeśli przycisk nie działa, skopiuj ten link do przeglądarki:
        </p>
        <p style="margin:0 0 24px;color:#60646c;font-size:13px;word-break:break-all">
          ${downloadUrl}
        </p>
        <p style="margin:0;color:#9aa0a6;font-size:12px">
          Link jest powiązany z Twoją opłaconą płatnością. Zachowaj tę wiadomość — możesz pobrać
          plik ponownie w każdej chwili.
        </p>
      </div>
    `,
  })
}
