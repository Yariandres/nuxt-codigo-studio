<script setup lang="ts">
const forYou = [
  'Masz małą firmę lub zespół z powtarzalną pracą co tydzień',
  'Prowadzisz firmę usługową, agencję lub markę opartą na założycielu',
  'Chcesz, by AI oszczędzało realne godziny — nie zostać ekspertem od AI',
  'Chcesz jeden jasny pierwszy krok, a nie stos narzędzi i zakładek',
]
const notForYou = [
  'Chcesz tylko listę „100 promptów” do przejrzenia i zapomnienia',
  'Oczekujesz, że AI poprowadzi firmę bez kontroli człowieka',
  'Jesteś korporacją potrzebującą własnych integracji i infrastruktury',
  'Nie chcesz poświęcić ~30 minut na jeden realny proces',
]
</script>

<template>
  <section class="who section section--alt">
    <div class="container">
      <div class="who__head">
        <span class="eyebrow">CZY TO DLA CIEBIE?</span>
        <h2 class="h2">Dla właścicieli, którzy chcą efektu — nie projektu badawczego.</h2>
      </div>

      <div class="who__grid">
        <div class="who__card who__card--yes">
          <h3 class="h4 who__card-title">To dla Ciebie, jeśli…</h3>
          <ul class="who__list">
            <li v-for="p in forYou" :key="p">
              <svg class="who__mark who__mark--yes" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10.5l4 4 8-9" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>

        <div class="who__card who__card--no">
          <h3 class="h4 who__card-title">To nie dla Ciebie, jeśli…</h3>
          <ul class="who__list">
            <li v-for="p in notForYou" :key="p">
              <svg class="who__mark who__mark--no" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" />
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.who__head {
  max-width: 760px;
}
.who__head .h2 {
  margin-top: 16px;
}
.who__grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.who__card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 36px 32px;
}
.who__card--yes {
  border-color: color-mix(in srgb, var(--success) 30%, var(--border));
}
.who__card-title {
  margin-bottom: 24px;
}
.who__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.who__list li {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 16px;
  line-height: 1.4;
  color: var(--ink-soft);
}
.who__mark {
  width: 22px;
  height: 22px;
  flex: none;
  margin-top: 1px;
}
.who__mark--yes {
  color: var(--success);
}
.who__mark--no {
  color: var(--muted);
}

@media (max-width: 760px) {
  .who__grid {
    grid-template-columns: 1fr;
  }
}
</style>
