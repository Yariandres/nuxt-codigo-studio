<script setup lang="ts">
// ⚠️ EDYTUJ — wstaw prawdziwe imię i historię twórcy.
const founder = {
  name: 'Yari Herrera',
  role: 'Software engineer i założyciel Codigo Studio',
}
</script>

<template>
  <section class="fdr section section--alt">
    <div class="container fdr__wrap">
      <span class="eyebrow">DLACZEGO STWORZYŁEM TEN SYSTEM</span>
      <p class="fdr__text">
        Zbyt wielu właścicieli firm tonie w narzędziach i promptach, zamiast zacząć od jednego
        procesu, który realnie oszczędza czas. Zbudowałem ten system jako najkrótszą drogę od
        „wiem, że AI jest ważne” do pierwszego działającego workflow — bez teorii i bez kodu.
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
