<script setup lang="ts">
const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#whats-inside', label: "What's inside" },
  { href: '#preview', label: 'Preview' },
  { href: '#faq', label: 'FAQ' },
]
</script>

<template>
  <header class="hdr">
    <div class="container hdr__inner">
      <a href="#top" class="hdr__logo">AI&nbsp;Starter System</a>

      <nav class="hdr__nav" aria-label="Main navigation">
        <a v-for="l in links" :key="l.href" :href="l.href" class="hdr__link">{{ l.label }}</a>
      </nav>

      <div class="hdr__cta">
        <a href="#buy" class="btn btn--primary hdr__buy">Get the workbook</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hdr {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(247, 247, 244, 0.82);
  backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--border);
}
.hdr__inner {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.hdr__logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: -0.02em;
}
.hdr__nav {
  display: flex;
  gap: 28px;
}
.hdr__link {
  font-size: 15px;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.2s var(--ease);
}
.hdr__link:hover {
  color: var(--ink);
}
.hdr__buy {
  height: 44px;
  padding: 0 18px;
  font-size: 15px;
}

@media (max-width: 860px) {
  .hdr__nav {
    display: none;
  }
}
@media (max-width: 480px) {
  .hdr__logo {
    font-size: 16px;
  }
}
</style>
