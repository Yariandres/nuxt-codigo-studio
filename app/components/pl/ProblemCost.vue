<script setup lang="ts">
const areas = [
  { name: 'Sprzedaż', tasks: 'powtarzalne follow-upy, kwalifikacja leadów, aktualizacja CRM' },
  { name: 'Marketing', tasks: 'research, raporty, repurposing, przygotowanie treści' },
  { name: 'Obsługa klienta', tasks: 'FAQ, sortowanie zgłoszeń, przygotowanie odpowiedzi' },
  { name: 'Operacje', tasks: 'notatki, SOP-y, raportowanie, porządkowanie informacji' },
]
</script>

<template>
  <section class="cost section">
    <div class="container">
      <div class="cost__head">
        <span class="eyebrow">KOSZT ZWLEKANIA</span>
        <h2 class="h2 cost__title">
          Już teraz płacisz ludziom za pracę, w której AI może pomóc.
        </h2>
        <p class="lead cost__sub">
          Nie masz problemu „czy wdrożyć AI”. Masz drogą, powtarzalną pracę ukrytą na widoku —
          co tydzień, w każdej części firmy.
        </p>
      </div>

      <div class="cost__grid">
        <div v-for="a in areas" :key="a.name" class="cost__card">
          <span class="cost__bar" aria-hidden="true"></span>
          <h3 class="h4 cost__area">{{ a.name }}</h3>
          <p class="cost__tasks">{{ a.tasks }}</p>
        </div>
      </div>

      <div class="cost__calc">
        <p class="cost__calc-formula">2 osoby × 30 minut dziennie × 20 dni</p>
        <p class="cost__calc-result">= 20 godzin pracy miesięcznie</p>
        <p class="cost__calc-note">I to tylko jeden proces.</p>
      </div>

      <p class="cost__closing">
        Workbook najpierw pomaga <strong>znaleźć te miejsca</strong> — zanim wydasz budżet na
        narzędzia i automatyzacje, których jeszcze nie potrzebujesz.
      </p>
    </div>
  </section>
</template>

<style scoped>
.cost__head {
  max-width: 760px;
}
.cost__title {
  margin-top: 16px;
}
.cost__sub {
  margin-top: 20px;
}

.cost__grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.cost__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 28px;
  transition: border-color 0.2s var(--ease), transform 0.2s var(--ease);
}
.cost__card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}
.cost__bar {
  display: block;
  width: 32px;
  height: 4px;
  border-radius: 999px;
  background: var(--accent-gradient);
}
.cost__area {
  margin-top: 20px;
}
.cost__tasks {
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.45;
  color: var(--muted);
}

.cost__calc {
  margin-top: 40px;
  border-radius: var(--r-media);
  background: var(--accent-gradient);
  padding: 56px 32px;
  text-align: center;
}
.cost__calc-formula {
  font-size: 20px;
  font-weight: 500;
  color: var(--ink-soft);
}
.cost__calc-result {
  margin-top: 12px;
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--ink);
}
.cost__calc-note {
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  color: var(--ink-soft);
}

.cost__closing {
  margin: 40px auto 0;
  max-width: 680px;
  text-align: center;
  font-size: 20px;
  line-height: 1.5;
  color: var(--muted);
}
.cost__closing strong {
  color: var(--ink);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .cost__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .cost__calc-result {
    font-size: 34px;
  }
  .cost__closing {
    font-size: 18px;
  }
}
@media (max-width: 520px) {
  .cost__grid {
    grid-template-columns: 1fr;
  }
}
</style>
