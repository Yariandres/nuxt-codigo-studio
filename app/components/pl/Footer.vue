<script setup lang="ts">
const year = new Date().getFullYear()
const { reopen } = useCookieConsent()
</script>

<template>
  <footer class="ftr">
    <div class="container ftr__inner">
      <div class="ftr__brand">
        <span class="ftr__logo">AI Starter System</span>
        <p class="ftr__tag">Praktyczny system wdrażania AI dla właścicieli małych firm.</p>
      </div>

      <nav class="ftr__links" aria-label="Stopka">
        <a href="#how-it-works">Jak to działa</a>
        <a href="#whats-inside">Co dostajesz</a>
        <a href="#buy">Cena</a>
        <a href="#faq">FAQ</a>
      </nav>
    </div>

    <div class="container ftr__legal">
      <span>© {{ year }} AI Business Starter System</span>
      <div class="ftr__legal-links">
        <NuxtLink to="/pl/polityka-prywatnosci">Polityka prywatności</NuxtLink>
        <button type="button" class="ftr__cookie-btn" @click="reopen">
          Ustawienia cookies
        </button>
        <span>Produkt cyfrowy · płatności obsługuje Stripe</span>
      </div>
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
.ftr__legal-links {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  align-items: center;
}
.ftr__legal-links a {
  color: var(--muted);
}
.ftr__legal-links a:hover {
  color: var(--ink);
}
.ftr__cookie-btn {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: var(--muted);
  cursor: pointer;
}
.ftr__cookie-btn:hover {
  color: var(--ink);
}
</style>
