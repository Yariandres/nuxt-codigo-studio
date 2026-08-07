<script setup lang="ts">
const includes = [
  'Interactive workbook PDF',
  '50 pages',
  'Ready-to-use prompts',
  '7 AI workflows',
  'Business Context File',
  'Automation Scorecard',
  '7-day implementation plan',
  'License for one company',
]
const reassurances = [
  'Instant access after payment',
  'No subscription — one-time payment',
  'No special software to install',
  '14-day money-back guarantee',
]
const payments = ['BLIK', 'Visa', 'Mastercard', 'Przelewy24', 'Apple Pay', 'Google Pay']
</script>

<template>
  <section id="buy" class="buy section">
    <div class="container">
      <!-- Honest urgency: launch price rising. EDIT the deadline/mechanic to match reality. -->
      <div class="buy__urgency">
        <span class="buy__urgency-dot" aria-hidden="true"></span>
        <span>
          <strong>Launch price.</strong> {{ PRICE_NOW }} now, rising to {{ PRICE_REGULAR }} after the
          launch window. Lock the lower price today.
        </span>
      </div>

      <div class="buy__grid">
        <div class="buy__visual" aria-hidden="true">
          <div class="buy__stage">
            <EnBookCover :width="400">
              <template #face>
                <EnCoverArt />
              </template>
            </EnBookCover>
          </div>
        </div>

        <div class="buy__card">
          <span class="pill">AI BUSINESS STARTER SYSTEM</span>

          <div class="buy__price">
            <div class="buy__price-row">
              <span class="buy__value">{{ PRICE_NOW }}</span>
              <span class="buy__was">{{ PRICE_REGULAR }}</span>
            </div>
            <span class="buy__value-note">one-time · no subscription</span>
          </div>

          <ul class="buy__list">
            <li v-for="i in includes" :key="i">{{ i }}</li>
          </ul>

          <div class="buy__cta">
            <BuyButton
              large
              :label="`Get instant access → ${PRICE_NOW}`"
              loading-text="Redirecting…"
              error-text="Couldn't start checkout. Please try again."
            />
          </div>

          <ul class="buy__reassure">
            <li v-for="r in reassurances" :key="r">{{ r }}</li>
          </ul>

          <div class="buy__pay">
            <span v-for="p in payments" :key="p" class="buy__pay-badge">{{ p }}</span>
          </div>
          <p class="buy__pay-note">Secure payments handled by Stripe.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.buy__urgency {
  max-width: 720px;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-radius: var(--r-pill);
  background: var(--pale-lavender);
  font-size: 15px;
  color: var(--ink-soft);
}
.buy__urgency strong {
  color: var(--ink);
}
.buy__urgency-dot {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--error);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--error) 20%, transparent);
}

.buy__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.buy__visual {
  display: flex;
  justify-content: center;
}
/* Concrete width — the designed cover face has no intrinsic width like an <img>. */
.buy__stage {
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
}

.buy__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-media);
  padding: 48px;
}
.buy__price {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.buy__price-row {
  display: flex;
  align-items: baseline;
  gap: 14px;
}
.buy__value {
  font-family: var(--font-display);
  font-size: 60px;
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1;
}
.buy__was {
  font-size: 22px;
  color: var(--muted);
  text-decoration: line-through;
}
.buy__value-note {
  font-size: 15px;
  color: var(--muted);
}
.buy__list {
  margin: 28px 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
}
.buy__list li {
  position: relative;
  padding-left: 28px;
  font-size: 15px;
  font-weight: 500;
}
.buy__list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--success);
  font-weight: 700;
}
.buy__cta {
  margin-top: 32px;
}
.buy__reassure {
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.buy__reassure li {
  position: relative;
  padding-left: 22px;
  font-size: 14px;
  color: var(--muted);
}
.buy__reassure li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: var(--success);
}
.buy__pay {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.buy__pay-badge {
  padding: 6px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: var(--muted);
  background: var(--surface-alt);
}
.buy__pay-note {
  margin-top: 12px;
  font-size: 13px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .buy__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .buy__visual {
    order: 2;
  }
  .buy__card {
    padding: 32px 24px;
  }
}
@media (max-width: 480px) {
  .buy__list {
    grid-template-columns: 1fr;
  }
  .buy__value {
    font-size: 52px;
  }
}
</style>
