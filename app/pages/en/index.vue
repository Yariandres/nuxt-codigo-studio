<script setup lang="ts">
useHead({
  title: 'AI Business Starter System — find your first AI workflow in 7 days',
  meta: [
    {
      name: 'description',
      content:
        'A simple, no-code workbook for small business owners: find where AI saves you time and money, and build your first working workflow in 7 days. 14-day money-back guarantee.',
    },
    { property: 'og:title', content: 'AI Business Starter System' },
    {
      property: 'og:description',
      content:
        'Find where AI saves your business time and money — and ship your first working workflow in 7 days.',
    },
  ],
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div>
    <EnHeader />
    <main>
      <EnHero />
      <!-- <EnProofStrip /> -->
      <EnProblemCost />
      <EnMechanism />
      <EnWhatsInside />
      <EnPreview />
      <EnFirstWin />
      <EnWhoFor />
      <EnTestimonials />
      <EnFounder />
      <EnValueStack />
      <EnGuarantee />
      <EnPrice />
      <EnFaq />
      <EnFinalCta />
    </main>
    <EnFooter />
  </div>
</template>
