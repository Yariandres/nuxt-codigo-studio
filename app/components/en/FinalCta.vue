<template>
  <section class="fcta section">
    <div class="container fcta__wrap">
      <span class="eyebrow fcta__eyebrow">STOP WAITING, START SAVING</span>
      <h2 class="fcta__title">
        Every week you put this off is another week of hours and money you don't get back.
      </h2>
      <p class="fcta__sub">
        Find your first AI opportunity, build one working workflow in 7 days, and see the time saved
        with your own eyes — at zero risk.
      </p>

      <div class="fcta__cta">
        <BuyButton
          large
          :label="`Get the workbook → ${PRICE_NOW_EN}`"
          loading-text="Redirecting…"
          error-text="Couldn't start checkout. Please try again."
        />
      </div>

      <p class="fcta__trust">
        14-day money-back guarantee · instant access · one-time {{ PRICE_NOW_EN }} (rising to
        {{ PRICE_REGULAR_EN }})
      </p>
    </div>
  </section>
</template>

<style scoped>
.fcta__wrap {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}
.fcta__eyebrow {
  display: block;
}
.fcta__title {
  margin-top: 16px;
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(34px, 4vw, 52px);
  line-height: 1.08;
  letter-spacing: -0.03em;
}
.fcta__sub {
  margin: 24px auto 0;
  max-width: 620px;
  font-size: 20px;
  line-height: 1.5;
  color: var(--muted);
}
.fcta__cta {
  margin-top: 36px;
  display: flex;
  justify-content: center;
}
.fcta__trust {
  margin-top: 20px;
  font-size: 14px;
  color: var(--muted);
}
</style>
