<script setup lang="ts">
const steps = [
  {
    num: '01',
    label: 'ZNAJDŹ',
    title: 'Znajdź pracę, która kosztuje Cię czas i pieniądze.',
    desc: 'Audytujesz powtarzalne zadania i wybierasz procesy, w których AI rzeczywiście ma sens.',
  },
  {
    num: '02',
    label: 'PRZYGOTUJ',
    title: 'Zbuduj kontekst swojej firmy.',
    chips: ['Oferta', 'Klienci', 'FAQ', 'Procesy', 'Ton', 'Zasady'],
  },
  {
    num: '03',
    label: 'ZBUDUJ',
    title: 'Zbuduj pierwszy prosty workflow AI.',
    desc: 'Jasny przepływ: od wyzwalacza po działanie — z kontrolą człowieka na końcu.',
  },
]

const flow = [
  { label: 'Trigger' },
  { label: 'Dane' },
  { label: 'Kontekst' },
  { label: 'AI', ai: true },
  { label: 'Wynik' },
  { label: 'Kontrola człowieka' },
  { label: 'Działanie' },
]
</script>

<template>
  <section id="how-it-works" class="mech section section--alt">
    <div class="container">
      <div class="mech__head">
        <span class="eyebrow">NOWE PODEJŚCIE</span>
        <h2 class="h2 mech__title">
          Nie zaczynaj od narzędzi.
          <span class="mech__title-accent">Zacznij od firmy.</span>
        </h2>
        <p class="lead mech__sub">
          Większość ludzi tonie w promptach i aplikacjach. To daje Ci jedną jasną ścieżkę — wiesz
          dokładnie, co robić i w jakiej kolejności.
        </p>
      </div>

      <div class="mech__grid">
        <article v-for="s in steps" :key="s.num" class="mech__step">
          <span class="mech__num">{{ s.num }}</span>
          <span class="mech__label">{{ s.label }}</span>
          <h3 class="h4 mech__step-title">{{ s.title }}</h3>
          <p v-if="s.desc" class="mech__desc">{{ s.desc }}</p>
          <div v-if="s.chips" class="mech__chips">
            <span v-for="c in s.chips" :key="c" class="mech__chip">{{ c }}</span>
          </div>
        </article>
      </div>

      <div class="mech__flow-wrap">
        <span class="mech__flow-label">Tak wygląda Twój pierwszy workflow</span>
        <div class="mech__flow">
          <template v-for="(node, i) in flow" :key="node.label">
            <span class="mech__node" :class="{ 'mech__node--ai': node.ai }">{{ node.label }}</span>
            <span v-if="i < flow.length - 1" class="mech__arrow" aria-hidden="true">→</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mech__head {
  max-width: 760px;
}
.mech__title {
  margin-top: 16px;
  color: var(--muted);
}
.mech__title-accent {
  color: var(--ink);
}
.mech__sub {
  margin-top: 20px;
}

.mech__grid {
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.mech__step {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-feature);
  padding: 36px 32px;
}
.mech__num {
  display: block;
  font-family: var(--font-display);
  font-size: 72px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.04em;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.mech__label {
  display: block;
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--muted);
}
.mech__step-title {
  margin-top: 10px;
}
.mech__desc {
  margin-top: 12px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--muted);
}
.mech__chips {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.mech__chip {
  padding: 7px 14px;
  border-radius: var(--r-pill);
  background: var(--pale-lavender);
  font-size: 14px;
  font-weight: 500;
  color: var(--ink-soft);
}

.mech__flow-wrap {
  margin-top: 40px;
  border-radius: var(--r-media);
  background: var(--surface);
  border: 1px solid var(--border);
  padding: 40px 32px;
  text-align: center;
}
.mech__flow-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
.mech__flow {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.mech__node {
  padding: 12px 20px;
  border-radius: var(--r-pill);
  background: var(--canvas);
  border: 1px solid var(--border);
  font-size: 16px;
  font-weight: 600;
  color: var(--ink-soft);
  white-space: nowrap;
}
.mech__node--ai {
  background: var(--accent-gradient);
  border-color: transparent;
  color: var(--ink);
}
.mech__arrow {
  font-size: 20px;
  color: var(--border-strong);
}

@media (max-width: 900px) {
  .mech__grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .mech__flow {
    flex-direction: column;
  }
  .mech__arrow {
    transform: rotate(90deg);
  }
}
</style>
