<script setup lang="ts">
// Pain-recognition prompts — written to make the reader think "that's me."
const pains = [
  'Losing leads because no one replies fast enough?',
  'Answering the same customer questions over and over?',
  'Rewriting the same follow-ups, emails, and reports by hand every week?',
  'Buried in admin instead of growing the business?',
]
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__grid">
      <!-- Left: copy -->
      <div class="hero__text">
        <h1 class="hero__title">
          Stop wasting time doing tasks that - 
          <span class="hero__title-hl">AI could be doing for you</span>
        </h1>

        <p class="hero__twist">
          Your competitors already have.
        </p>
        
        <ul class="hero__pains">
          <li v-for="p in pains" :key="p">
            <svg class="hero__pains-mark" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.6" />
              <path
                d="M10 5.5v5.2M10 13.6v.4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <span>{{ p }}</span>
          </li>
        </ul>

        <p class="hero__lead">
          The <strong>AI Business Starter System</strong> is a simple, no-code workbook that shows
          you exactly where AI fits your business — so you stop drowning in repetitive work and get
          your first time-saving workflow running in 7&nbsp;days.
        </p>

        <div class="hero__cta">
          <BuyButton
            large
            :label="`Show me where AI fits → ${PRICE_NOW_EN}`"
            loading-text="Redirecting…"
            error-text="Couldn't start checkout. Please try again."
          />
          <a href="#whats-inside" class="hero__link">See what's inside ↓</a>
        </div>

        <p class="hero__trust">
          Interactive PDF · instant access · for owner + team · 14-day money-back guarantee
        </p>
      </div>

      <!-- Right: product visual -->
      <div class="hero__visual" aria-hidden="true">
        <div class="hero__stage">
          <EnBookCover :width="420">
            <template #face>
              <EnCoverArt />
            </template>
          </EnBookCover>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 120px;
  min-height: 100vh;
}
.hero__grid {
  display: grid;
  grid-template-columns: 6fr 5fr;
  gap: 64px;
  align-items: center;
}
.hero__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(38px, 4.4vw, 58px);
  line-height: 1.05;
  letter-spacing: -0.035em;
}
.hero__title-hl {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.hero__twist {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 600;
  color: var(--muted);
}
.hero__pains {
  list-style: none;
  margin: 38px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 540px;
}
.hero__pains li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 17px;
  line-height: 1.4;
  color: var(--ink-soft);
}
.hero__pains-mark {
  width: 22px;
  height: 22px;
  flex: none;
  margin-top: 1px;
  color: #c43232;
}
.hero__lead {
  margin-top: 28px;
  max-width: 540px;
  font-size: 18px;
  line-height: 1.5;
  color: var(--muted);
}
.hero__lead strong {
  color: var(--ink);
  font-weight: 600;
}
.hero__cta {
  margin-top: 68px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 24px;
}
.hero__link {
  font-size: 16px;
  font-weight: 600;
  color: var(--muted);
  transition: color 0.2s var(--ease);
}
.hero__link:hover {
  color: var(--ink);
}
.hero__trust {
  margin-top: 20px;
  font-size: 14px;
  color: var(--muted);
}

.hero__visual {
  display: flex;
  justify-content: center;
}
/* Give the 3D book a concrete width — its designed cover face has no intrinsic
   width like an <img>, so the flex chain would otherwise collapse. */
.hero__stage {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 960px) {
  .hero__grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .hero__visual {
    order: 2;
  }
  .hero__stage {
    max-width: 420px;
    margin: 0 auto;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hero__cover {
    animation: none;
  }
}
</style>
