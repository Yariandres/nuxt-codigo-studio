<script setup lang="ts">
useHead({
  title: 'Privacy Policy — AI Business Starter System',
  meta: [{ name: 'robots', content: 'noindex' }],
  htmlAttrs: { lang: 'en' },
})
</script>

<template>
  <div>
    <EnHeader />
    <main class="container section policy">
      <h1 class="h1">Privacy Policy</h1>
      <p class="lead">
        This page explains how we handle your data and which cookies we use.
        <!-- TODO: add full legal copy (data controller, legal bases, user rights, contact). -->
      </p>

      <section class="policy__block" id="cookies">
        <h2 class="h3">Cookies</h2>
        <p>
          We use strictly necessary cookies required to process payments (Stripe)
          and — <strong>only with your consent</strong> — Meta Pixel (Facebook)
          marketing cookies to measure how our ads perform.
        </p>
        <p>
          The Meta Pixel does not load until you accept it in the cookie banner.
          You can change or withdraw your consent at any time via
          <strong>“Cookie settings”</strong> in the site footer.
        </p>
        <!-- TODO: cookie table (name, purpose, retention) and a link to Meta's policy. -->
      </section>

      <!-- TODO: sections — Data controller, Purposes & legal bases, Recipients, Retention, Your rights, Contact. -->
    </main>
    <EnFooter />
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
