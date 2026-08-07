<script setup lang="ts">
const faqs = [
  {
    q: 'Czy to kolejna paczka promptów?',
    a: 'Nie. To system, a nie lista. Prowadzi Cię od znalezienia drogiego, powtarzalnego zadania do przetestowania pierwszego działającego workflow AI — z kontekstem, zasadami i krokiem przeglądu, które sprawiają, że AI jest naprawdę wiarygodne.',
  },
  {
    q: 'A jeśli mi się nie sprawdzi?',
    a: 'Chroni Cię 14-dniowa gwarancja zwrotu. Jeśli przejdziesz przez workbook i nie znajdziesz choć jednego procesu wartego usprawnienia z AI, napisz do nas w ciągu 14 dni po pełny zwrot — bez pytań.',
  },
  {
    q: 'Czy muszę znać ChatGPT lub inne narzędzia AI?',
    a: 'Nie. Prowadzimy Cię krok po kroku i korzystamy z narzędzi, które prawdopodobnie już znasz. Wystarczy podstawowa obsługa komputera.',
  },
  {
    q: 'Czy muszę umieć automatyzować procesy?',
    a: 'Nie. Zaczynasz od poziomu, na którym AI po prostu pomaga człowiekowi — bez API, Make, Zapiera czy programowania. Automatyzacja to opcjonalny, późniejszy krok.',
  },
  {
    q: 'Czy ten workbook jest dla jednoosobowej firmy?',
    a: 'Tak. Jeśli masz powtarzalne zadania, znajdziesz procesy warte usprawnienia — nawet bez zespołu.',
  },
  {
    q: 'Mam zespół — czy mogę przejść przez workbook razem z nim?',
    a: 'Tak. Workbook wprost pokazuje, które części robi właściciel, a które można przekazać zespołowi. Licencja obejmuje jedną firmę.',
  },
  {
    q: 'Jakich narzędzi potrzebuję?',
    a: 'Wystarczy dostęp do jednego narzędzia AI (np. ChatGPT, Claude, Gemini lub Copilot) i przeglądarka. Nie musisz kupować dodatkowego oprogramowania.',
  },
  {
    q: 'Ile czasu zajmie przejście przez workbook?',
    a: 'Pierwszy efekt zobaczysz w ok. 10 minut, a pierwszy działający proces możesz zbudować w 7 dni, poświęcając ok. 30–45 minut dziennie.',
  },
  {
    q: 'Czy workbook stworzy automatyzacje za mnie?',
    a: 'Nie. To system, który pokazuje, gdzie i jak sensownie wdrożyć AI, i prowadzi Cię do zbudowania pierwszego workflow — świadomie i bezpiecznie.',
  },
  {
    q: 'Czy muszę przejść wszystkie 50 stron?',
    a: 'Nie. Możesz zacząć od jednego procesu i jednego workflow. Pozostałe części wykorzystasz, gdy będziesz gotowy na kolejne wdrożenia.',
  },
  {
    q: 'W jakim formacie otrzymam materiały?',
    a: 'To interaktywny plik PDF (50 stron). Możesz wypełniać go na komputerze lub wydrukować. Treść workbooka jest po angielsku, a instrukcje na tej stronie po polsku.',
  },
  {
    q: 'Czy dostanę aktualizacje?',
    a: 'Tak. Ewentualne aktualizacje tej edycji wyślemy na adres e-mail podany przy zakupie.',
  },
  {
    q: 'Co jeśli po workbooku będę chciał wdrożyć bardziej zaawansowane workflow?',
    a: 'To naturalny kolejny krok. Gdy zbudujesz pierwszy proces, będziesz wiedzieć, które wdrożenia warto pogłębić — a jeśli zechcesz wsparcia, odezwij się do nas.',
  },
]
</script>

<template>
  <section id="faq" class="faq section section--alt">
    <div class="container faq__wrap">
      <h2 class="h2 faq__title">Pytania, które warto zadać przed zakupem</h2>

      <div class="faq__list">
        <details v-for="f in faqs" :key="f.q" class="faq__item">
          <summary class="faq__q">
            <span>{{ f.q }}</span>
            <span class="faq__icon" aria-hidden="true">+</span>
          </summary>
          <p class="faq__a">{{ f.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq__wrap {
  max-width: 820px;
}
.faq__title {
  text-align: center;
}
.faq__list {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.faq__item {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-card);
  padding: 4px 24px;
}
.faq__q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  list-style: none;
}
.faq__q::-webkit-details-marker {
  display: none;
}
.faq__icon {
  font-size: 24px;
  color: var(--muted);
  transition: transform 0.2s var(--ease);
  flex: none;
}
.faq__item[open] .faq__icon {
  transform: rotate(45deg);
}
.faq__a {
  padding: 0 0 20px;
  color: var(--muted);
  max-width: 680px;
}
</style>
