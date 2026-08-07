<script setup lang="ts">
// ⚠️ EDYTUJ — wstaw PRAWDZIWE cytaty od użytkowników beta.
// Nie publikuj wymyślonych opinii. Imię + typ firmy (np. „Marta K., biuro rachunkowe”) wystarczy
// i brzmi wiarygodnie. Tekst w nawiasach to placeholder pokazujący układ — podmień każde pole.
const testimonials = [
  {
    quote:
      '[Prawdziwy cytat użytkownika — co się u niego zmieniło. Najlepsze cytaty nazywają konkretny proces i konkretny efekt, np. „skróciliśmy czas odpowiedzi na lead z dnia do kilku minut”.]',
    name: '[Imię + inicjał]',
    role: '[Rola, typ firmy]',
  },
  {
    quote:
      '[Prawdziwy cytat użytkownika — „przed vs po” jednego workflow, który zbudował dzięki workbookowi.]',
    name: '[Imię + inicjał]',
    role: '[Rola, typ firmy]',
  },
  {
    quote:
      '[Prawdziwy cytat użytkownika — najlepiej od kogoś sceptycznego / nietechnicznego, żeby pasował do odbiorcy.]',
    name: '[Imię + inicjał]',
    role: '[Rola, typ firmy]',
  },
]
</script>

<template>
  <section class="tst section">
    <div class="container">
      <div class="tst__head">
        <span class="eyebrow">OD PIERWSZYCH UŻYTKOWNIKÓW</span>
        <h2 class="h2">Właściciele, którzy przestali zgadywać i wdrożyli pierwszy workflow.</h2>
      </div>

      <div class="tst__grid">
        <figure v-for="t in testimonials" :key="t.name" class="tst__card">
          <blockquote class="tst__quote">„{{ t.quote }}”</blockquote>
          <figcaption class="tst__by">
            <span class="tst__name">{{ t.name }}</span>
            <span class="tst__role">{{ t.role }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tst__head {
  max-width: 760px;
}
.tst__head .h2 {
  margin-top: 16px;
}
.tst__grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.tst__card {
  margin: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.tst__quote {
  margin: 0;
  font-family: var(--font-display);
  font-size: 19px;
  font-weight: 500;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: var(--ink-soft);
}
.tst__by {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}
.tst__name {
  font-weight: 600;
  font-size: 15px;
}
.tst__role {
  font-size: 14px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .tst__grid {
    grid-template-columns: 1fr;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
