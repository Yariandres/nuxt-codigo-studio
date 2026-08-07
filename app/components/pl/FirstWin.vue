<script setup lang="ts">
const steps = [
  { n: '1', t: 'Otwórz narzędzie AI, które już masz', d: 'ChatGPT, Claude, Gemini, Copilot — cokolwiek masz pod ręką.' },
  { n: '2', t: 'Wklej jeden prawdziwy przykład', d: 'Realne zapytanie, mail, notatkę lub dane zadania. Usuń dane wrażliwe.' },
  { n: '3', t: 'Daj AI proste zadanie', d: 'Użyj startowego promptu. Jeszcze niczego nie automatyzuj.' },
  { n: '4', t: 'Porównaj wynik', d: 'Czy zaoszczędziłoby to czas, gdyby ktoś z zespołu tylko to sprawdził?' },
]

const prompt = `Pomagasz mi usprawnić powtarzalny proces biznesowy. Dam Ci jeden prawdziwy przykład. Najpierw podsumuj, co według Ciebie to zadanie ma osiągnąć. Następnie przygotuj przydatny pierwszy szkic lub analizę. Nie wymyślaj brakujących faktów. Wypisz wszystko, co muszę doprecyzować. Na końcu podaj 3 sposoby, jak uczynić to zadanie bardziej powtarzalnym.`
</script>

<template>
  <section class="win section">
    <div class="container win__grid">
      <div class="win__text">
        <span class="eyebrow">PIERWSZY EFEKT W 10 MINUT</span>
        <h2 class="h2 win__title">Twój pierwszy sukces z AI, zanim cokolwiek skonfigurujesz.</h2>
        <p class="lead win__sub">
          Nie czekasz 7 dni, żeby to poczuć. Już na pierwszej stronie planu przepuszczasz prawdziwy
          przykład przez AI i na własne oczy widzisz oszczędność czasu.
        </p>

        <ol class="win__steps">
          <li v-for="s in steps" :key="s.n">
            <span class="win__step-n">{{ s.n }}</span>
            <div>
              <span class="win__step-t">{{ s.t }}</span>
              <span class="win__step-d">{{ s.d }}</span>
            </div>
          </li>
        </ol>
      </div>

      <aside class="win__prompt">
        <span class="win__prompt-label">Prompt startowy — skopiuj i użyj</span>
        <p class="win__prompt-body">{{ prompt }}</p>
        <p class="win__prompt-note">
          Nie chodzi o perfekcję. Chodzi o dowód, że AI zdejmuje część pracy, gdy człowiek da mu
          kontekst i sprawdzi wynik.
        </p>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.win__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.win__title {
  margin-top: 16px;
}
.win__sub {
  margin-top: 20px;
}
.win__steps {
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.win__steps li {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.win__step-n {
  flex: none;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: var(--r-pill);
  background: var(--pale-lavender);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--ink-soft);
}
.win__step-t {
  display: block;
  font-weight: 600;
  font-size: 17px;
}
.win__step-d {
  display: block;
  margin-top: 2px;
  font-size: 15px;
  color: var(--muted);
}

.win__prompt {
  background: var(--ink);
  color: #fff;
  border-radius: var(--r-media);
  padding: 40px;
}
.win__prompt-label {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--lavender);
}
.win__prompt-body {
  margin-top: 20px;
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.6;
  color: #f0f1f2;
}
.win__prompt-note {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 14px;
  line-height: 1.5;
  color: #c9cdd2;
}

@media (max-width: 900px) {
  .win__grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .win__prompt {
    padding: 32px 24px;
  }
}
</style>
