<script setup lang="ts">
useHead({
  title: 'Polityka prywatności — AI Business Starter System',
  meta: [{ name: 'robots', content: 'noindex' }],
  htmlAttrs: { lang: 'pl' },
})
</script>

<template>
  <div>
    <PlHeader />
    <main class="container section policy">
      <h1 class="h1">Polityka prywatności</h1>
      <p class="lead">
        Poniżej znajdziesz informacje o tym, jak przetwarzamy dane i jakich plików
        cookie używamy. <!-- TODO: uzupełnić pełną treść prawną (administrator danych, podstawy przetwarzania, prawa użytkownika, kontakt). -->
      </p>

      <section class="policy__block" id="cookies">
        <h2 class="h3">Pliki cookie</h2>
        <p>
          Używamy niezbędnych plików cookie wymaganych do obsługi płatności
          (Stripe) oraz — <strong>wyłącznie za Twoją zgodą</strong> — marketingowych
          plików cookie Meta Pixel (Facebook), aby mierzyć skuteczność reklam.
        </p>
        <p>
          Meta Pixel nie jest ładowany, dopóki nie wyrazisz zgody w banerze cookie.
          Możesz w każdej chwili zmienić lub wycofać zgodę, klikając
          <strong>„Ustawienia cookies”</strong> w stopce strony.
        </p>
        <!-- TODO: tabela cookies (nazwa, cel, czas przechowywania) i link do polityki Meta. -->
      </section>

      <!-- TODO: sekcje — Administrator danych, Cele i podstawy przetwarzania, Odbiorcy danych, Okres przechowywania, Prawa osoby, Kontakt. -->
    </main>
    <PlFooter />
  </div>
</template>

<style scoped>
.policy__block {
  margin-top: 40px;
  max-width: 720px;
}
.policy__block p {
  margin-top: 12px;
  color: var(--ink-soft);
  line-height: 1.6;
}
.policy .lead {
  margin-top: 16px;
  max-width: 720px;
}
</style>
