<script setup lang="ts">
// Each line reframes a deliverable as an outcome the buyer would otherwise pay for
// (in time or consultant hours), not a padded fake dollar value.
const stack = [
  { item: 'AI Opportunity Audit + Scorecard', worth: 'Stop guessing which task to start with' },
  { item: 'Business Context File template', worth: 'End generic AI output for good' },
  { item: 'Prompt Library (5 categories)', worth: 'Skip weeks of prompt trial-and-error' },
  { item: '7 Agent Blueprints', worth: 'Proven recipes instead of a blank page' },
  { item: 'Safety Checklist', worth: 'Avoid the costly, risky AI mistakes' },
  { item: '7-Day Plan + Implementation Map', worth: 'A finished business case, not a demo' },
]
</script>

<template>
  <section class="vs section">
    <div class="container">
      <div class="vs__head">
        <span class="eyebrow">WHAT IT'S WORTH</span>
        <h2 class="h2">One process it helps you fix pays for this many times over.</h2>
        <p class="lead vs__sub">
          Remember the math: one repetitive process can quietly cost you <strong>20+ hours a
          month</strong>. This costs less than a single hour of that lost time.
        </p>
      </div>

      <div class="vs__card">
        <ul class="vs__list">
          <li v-for="s in stack" :key="s.item" class="vs__row">
            <svg class="vs__check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="vs__item">{{ s.item }}</span>
            <span class="vs__worth">{{ s.worth }}</span>
          </li>
        </ul>

        <div class="vs__anchor">
          <p class="vs__anchor-line">
            Piece it together yourself: <strong>weeks of trial-and-error</strong> — or a consultant
            at hundreds per hour.
          </p>
          <div class="vs__price">
            <span class="vs__price-was">Regular {{ PRICE_REGULAR }}</span>
            <span class="vs__price-now">{{ PRICE_NOW }}</span>
            <span class="vs__price-note">one-time · launch price</span>
          </div>
          <div class="vs__cta">
            <BuyButton
              large
              :label="`Get instant access → ${PRICE_NOW}`"
              loading-text="Redirecting…"
              error-text="Couldn't start checkout. Please try again."
            />
          </div>
          <p class="vs__guar">14-day money-back guarantee · no risk</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vs__head {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}
.vs__head .h2 {
  margin-top: 16px;
}
.vs__sub {
  margin: 20px auto 0;
}
.vs__sub strong {
  color: var(--ink);
  font-weight: 600;
}
.vs__card {
  margin: 56px auto 0;
  max-width: 760px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-media);
  padding: 48px;
}
.vs__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.vs__row {
  display: grid;
  grid-template-columns: 24px minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}
.vs__check {
  width: 20px;
  height: 20px;
  color: var(--success);
}
.vs__item {
  font-size: 16px;
  font-weight: 600;
}
.vs__worth {
  font-size: 15px;
  color: var(--muted);
}
.vs__anchor {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 2px solid var(--ink);
  text-align: center;
}
.vs__anchor-line {
  font-size: 16px;
  color: var(--muted);
}
.vs__anchor-line strong {
  color: var(--ink);
}
.vs__price {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.vs__price-was {
  font-size: 16px;
  color: var(--muted);
  text-decoration: line-through;
}
.vs__price-now {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
}
.vs__price-note {
  font-size: 15px;
  color: var(--muted);
}
.vs__cta {
  margin-top: 28px;
  display: flex;
  justify-content: center;
}
.vs__guar {
  margin-top: 16px;
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .vs__card {
    padding: 32px 24px;
  }
  .vs__row {
    grid-template-columns: 20px 1fr;
    row-gap: 4px;
  }
  .vs__worth {
    grid-column: 2;
  }
  .vs__price-now {
    font-size: 46px;
  }
}
</style>
