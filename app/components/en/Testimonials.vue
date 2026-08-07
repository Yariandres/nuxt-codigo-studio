<script setup lang="ts">
// ⚠️ EDIT ME — replace with REAL quotes from your beta users.
// Do not ship invented testimonials. Keep name/role accurate; a first name + business
// type (e.g. "Marta K., accounting studio") is enough and reads as authentic.
// The bracketed text is a placeholder so you can see the layout — swap every field.
const testimonials = [
  {
    quote:
      '[Real beta-user quote — what changed for them. Best quotes name a specific process and a specific result, e.g. "cut our lead-reply time from a day to minutes."]',
    name: '[First name + initial]',
    role: '[Role, business type]',
  },
  {
    quote:
      '[Real beta-user quote — the "before vs after" of one workflow they built with the workbook.]',
    name: '[First name + initial]',
    role: '[Role, business type]',
  },
  {
    quote:
      '[Real beta-user quote — ideally from someone who was skeptical / not technical, to match the avatar.]',
    name: '[First name + initial]',
    role: '[Role, business type]',
  },
]
</script>

<template>
  <section class="tst section">
    <div class="container">
      <div class="tst__head">
        <span class="eyebrow">FROM EARLY USERS</span>
        <h2 class="h2">Owners who stopped guessing and shipped their first workflow.</h2>
      </div>

      <div class="tst__grid">
        <figure v-for="t in testimonials" :key="t.name" class="tst__card">
          <blockquote class="tst__quote">"{{ t.quote }}"</blockquote>
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
