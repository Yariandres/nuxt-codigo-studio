<template>
  <section class="fcta section">
    <div class="container fcta__wrap">
      <span class="eyebrow fcta__eyebrow">PRZESTAŃ ZWLEKAĆ, ZACZNIJ OSZCZĘDZAĆ</span>
      <h2 class="fcta__title">
        Każdy tydzień zwłoki to kolejne godziny i pieniądze, których nie odzyskasz.
      </h2>
      <p class="fcta__sub">
        Znajdź pierwszą szansę na AI, zbuduj jeden działający workflow w 7 dni i zobacz oszczędzony
        czas na własne oczy — bez ryzyka.
      </p>

      <div class="fcta__cta">
        <BuyButton large :label="`Kup workbook → ${PRICE_NOW}`" />
      </div>

      <p class="fcta__trust">
        Gwarancja zwrotu 14 dni · dostęp od razu · jednorazowo {{ PRICE_NOW }} (rośnie do
        {{ PRICE_REGULAR }})
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
