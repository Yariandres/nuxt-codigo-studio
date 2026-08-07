<script setup lang="ts">
// ⚠️ EDIT ME — put the real founder's name + story here.
const founder = {
  name: '[Your name]',
  role: '[What you do — e.g. "AI implementation for small businesses"]',
}
</script>

<template>
  <section class="fdr section section--alt">
    <div class="container fdr__wrap">
      <span class="eyebrow">WHY I BUILT THIS</span>
      <p class="fdr__text">
        Too many business owners drown in tools and prompts instead of starting with the one process
        that actually saves time. I built this system as the shortest path from "I know AI matters"
        to your first working workflow — no theory, no code, no six-month project.
      </p>
      <div class="fdr__by">
        <span class="fdr__name">{{ founder.name }}</span>
        <span class="fdr__role">{{ founder.role }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fdr__wrap {
  max-width: 820px;
}
.fdr__text {
  margin-top: 20px;
  font-family: var(--font-display);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.015em;
  color: var(--ink);
}
.fdr__by {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fdr__name {
  font-weight: 600;
  font-size: 16px;
}
.fdr__role {
  font-size: 15px;
  color: var(--muted);
}

@media (max-width: 768px) {
  .fdr__text {
    font-size: 22px;
  }
}
</style>
