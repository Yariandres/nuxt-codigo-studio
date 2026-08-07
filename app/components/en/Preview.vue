<script setup lang="ts">
// Real rendered pages from the workbook (see public/mockups/).
const shots = [
  { src: '/mockups/worksheet.png', label: 'Opportunity Audit worksheet' },
  { src: '/mockups/scorecard.png', label: 'Automation Scorecard' },
  { src: '/mockups/g-workflow.png', label: 'Workflow builder' },
  { src: '/mockups/map.png', label: 'AI Implementation Map' },
]
</script>

<template>
  <section id="preview" class="preview section section--alt">
    <div class="container">
      <div class="preview__head">
        <span class="eyebrow">LOOK INSIDE</span>
        <h2 class="h2">Real pages you'll actually fill in — not vague AI talk.</h2>
        <p class="lead preview__sub">
          These are actual pages from the workbook. Every worksheet moves you one step closer to a
          working, reviewable process.
        </p>
      </div>

      <div class="preview__grid">
        <figure v-for="s in shots" :key="s.src" class="preview__item">
          <img :src="s.src" :alt="s.label" loading="lazy" />
          <figcaption>{{ s.label }}</figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.preview__head {
  max-width: 760px;
}
.preview__head .h2 {
  margin-top: 16px;
}
.preview__sub {
  margin-top: 20px;
}
.preview__grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.preview__item {
  margin: 0;
}
.preview__item img {
  width: 100%;
  border-radius: var(--r-card);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-card);
  background: var(--surface);
}
.preview__item figcaption {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  text-align: center;
}

@media (max-width: 900px) {
  .preview__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}
@media (max-width: 480px) {
  .preview__grid {
    grid-template-columns: 1fr;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
