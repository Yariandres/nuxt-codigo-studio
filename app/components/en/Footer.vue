<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ftr">
    <div class="container ftr__inner">
      <div class="ftr__brand">
        <span class="ftr__logo">AI Starter System</span>
        <p class="ftr__tag">A practical system for putting AI to work in small businesses.</p>
      </div>

      <nav class="ftr__links" aria-label="Footer">
        <a href="#how-it-works">How it works</a>
        <a href="#whats-inside">What's inside</a>
        <a href="#buy">Price</a>
        <a href="#faq">FAQ</a>
      </nav>
    </div>

    <div class="container ftr__legal">
      <span>© {{ year }} AI Business Starter System</span>
      <span>Digital product · payments handled by Stripe</span>
    </div>
  </footer>
</template>

<style scoped>
.ftr {
  border-top: 1px solid var(--border);
  padding: 64px 0 40px;
  background: var(--surface);
}
.ftr__inner {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}
.ftr__logo {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
}
.ftr__tag {
  margin-top: 8px;
  color: var(--muted);
  font-size: 15px;
  max-width: 320px;
}
.ftr__links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  align-items: flex-start;
}
.ftr__links a {
  color: var(--muted);
  font-size: 15px;
}
.ftr__links a:hover {
  color: var(--ink);
}
.ftr__legal {
  margin-top: 40px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-size: 13px;
  color: var(--muted);
}
</style>
