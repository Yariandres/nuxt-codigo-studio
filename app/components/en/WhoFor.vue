<script setup lang="ts">
const forYou = [
  'You own a small business or team with repetitive, weekly work',
  'You run a service business, agency, or founder-led brand',
  'You want AI to save real hours — not to become an AI expert',
  'You want one clear first step, not a pile of tools and tabs',
]
const notForYou = [
  'You just want a "100 prompts" list to skim and forget',
  'You expect AI to run your business with no human review',
  "You're an enterprise needing custom integrations and infra",
  "You're not willing to spend ~30 minutes on one real process",
]
</script>

<template>
  <section class="who section section--alt">
    <div class="container">
      <div class="who__head">
        <span class="eyebrow">IS THIS FOR YOU?</span>
        <h2 class="h2">Built for owners who want a result — not a research project.</h2>
      </div>

      <div class="who__grid">
        <div class="who__card who__card--yes">
          <h3 class="h4 who__card-title">This is for you if…</h3>
          <ul class="who__list">
            <li v-for="p in forYou" :key="p">
              <svg class="who__mark who__mark--yes" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>

        <div class="who__card who__card--no">
          <h3 class="h4 who__card-title">This is not for you if…</h3>
          <ul class="who__list">
            <li v-for="p in notForYou" :key="p">
              <svg class="who__mark who__mark--no" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" />
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who__head {
  max-width: 760px;
}
.who__head .h2 {
  margin-top: 16px;
}
.who__grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.who__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 36px 32px;
}
.who__card--yes {
  border-color: color-mix(in srgb, var(--success) 30%, var(--border));
}
.who__card-title {
  margin-bottom: 24px;
}
.who__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.who__list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 16px;
  line-height: 1.4;
  color: var(--ink-soft);
}
.who__mark {
  width: 22px;
  height: 22px;
  flex: none;
  margin-top: 1px;
}
.who__mark--yes {
  color: var(--success);
}
.who__mark--no {
  color: var(--muted);
}

@media (max-width: 760px) {
  .who__grid {
    grid-template-columns: 1fr;
  }
}
</style>
