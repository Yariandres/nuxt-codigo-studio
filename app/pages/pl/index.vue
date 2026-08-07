<script setup lang="ts">
useHead({
  title: 'AI Business Starter System — znajdź swój pierwszy workflow AI w 7 dni',
  meta: [
    {
      name: 'description',
      content:
        'Prosty workbook (bez kodu) dla właścicieli małych firm: znajdź, gdzie AI oszczędza czas i pieniądze, i zbuduj pierwszy działający workflow w 7 dni. Gwarancja zwrotu 14 dni.',
    },
    { property: 'og:title', content: 'AI Business Starter System' },
    {
      property: 'og:description',
      content:
        'Znajdź, gdzie AI oszczędza Twojej firmie czas i pieniądze — i zbuduj pierwszy działający workflow w 7 dni.',
    },
  ],
  htmlAttrs: { lang: 'pl' },
})
</script>

<template>
  <div>
    <PlHeader />
    <main>
      <PlHero />
      <!-- <PlProofStrip /> -->
      <PlProblemCost />
      <PlMechanism />
      <PlWhatsInside />
      <PlPreview />
      <PlFirstWin />
      <PlWhoFor />
      <PlTestimonials />
      <PlFounder />
      <PlValueStack />
      <PlGuarantee />
      <PlPrice />
      <PlFaq />
      <PlFinalCta />
    </main>
    <PlFooter />
  </div>
</template>
