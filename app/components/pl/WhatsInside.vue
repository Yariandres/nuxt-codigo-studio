<script setup lang="ts">
const items = [
  {
    name: 'AI Opportunity Audit',
    desc: 'Znajdź powtarzalną pracę w sprzedaży, obsłudze, marketingu, operacjach i administracji.',
  },
  {
    name: 'Automation Scorecard',
    desc: 'Ustaw priorytety zadań wg częstotliwości, czasu, powtarzalności, ryzyka i wartości.',
  },
  {
    name: 'Business Context File',
    desc: 'Jedno wielokrotnie używane źródło prawdy — koniec z ogólnymi odpowiedziami AI.',
  },
  {
    name: 'Biblioteka promptów',
    desc: 'Gotowe prompty do myślenia, pisania, porządkowania, planowania i przeglądu.',
  },
  {
    name: '7 blueprintów agentów',
    desc: 'Powtarzalne przepisy na workflow — testujesz ręcznie, automatyzujesz później.',
  },
  {
    name: 'Checklista bezpieczeństwa',
    desc: 'Wiesz, co bezpiecznie zacząć, co wymaga przeglądu, a co trzymać z dala od AI.',
  },
  {
    name: '7-dniowy plan',
    desc: 'Od audytu do przetestowanego workflow — bez sześciomiesięcznego „projektu AI”.',
  },
  {
    name: 'Mapa wdrożenia AI',
    desc: 'Kończysz z realnym business case: szanse, oszczędzony czas, właściciele, kolejne kroki.',
  },
]
</script>

<template>
  <section id="whats-inside" class="inside section">
    <div class="container">
      <div class="inside__head">
        <span class="eyebrow">CO DOKŁADNIE DOSTAJESZ</span>
        <h2 class="h2">To nie kolejna lista „100 promptów”.</h2>
        <p class="lead inside__sub">
          To działający system, który prowadzi Cię od wskazania drogiego, powtarzalnego zadania do
          przetestowania pierwszego przydatnego workflow AI. Osiem części, jedna jasna ścieżka.
        </p>
      </div>

      <div class="inside__grid">
        <article v-for="(i, idx) in items" :key="i.name" class="inside__card">
          <span class="inside__num">{{ String(idx + 1).padStart(2, '0') }}</span>
          <h3 class="h4 inside__name">{{ i.name }}</h3>
          <p class="inside__desc">{{ i.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inside__head {
  max-width: 760px;
}
.inside__head .h2 {
  margin-top: 16px;
}
.inside__sub {
  margin-top: 20px;
  max-width: 680px;
}
.inside__grid {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.inside__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 28px;
  transition: border-color 0.2s var(--ease), transform 0.2s var(--ease);
}
.inside__card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}
.inside__num {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--muted);
}
.inside__name {
  margin-top: 12px;
}
.inside__desc {
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.5;
  color: var(--muted);
}

@media (max-width: 1024px) {
  .inside__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 520px) {
  .inside__grid {
    grid-template-columns: 1fr;
  }
}
</style>
