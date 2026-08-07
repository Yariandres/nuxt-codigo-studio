<script setup lang="ts">
const items = [
  {
    name: 'AI Opportunity Audit',
    desc: 'Find repeatable work across sales, support, marketing, operations, and admin.',
  },
  {
    name: 'Automation Scorecard',
    desc: 'Prioritize tasks by frequency, time, repeatability, risk, and business value.',
  },
  {
    name: 'Business Context File',
    desc: 'One reusable source of truth so AI stops giving you generic answers.',
  },
  {
    name: 'Prompt Library',
    desc: 'Ready prompts for thinking, writing, organizing, planning, and reviewing.',
  },
  {
    name: '7 Agent Blueprints',
    desc: 'Repeatable workflow recipes you can test manually first and automate later.',
  },
  {
    name: 'Safety Checklist',
    desc: "Know what's safe to start with, what needs review, and what to keep out of AI.",
  },
  {
    name: '7-Day Plan',
    desc: 'Go from audit to a tested workflow — without a six-month "AI project."',
  },
  {
    name: 'AI Implementation Map',
    desc: 'Finish with a real business case: opportunities, time saved, owners, next steps.',
  },
]
</script>

<template>
  <section id="whats-inside" class="inside section">
    <div class="container">
      <div class="inside__head">
        <span class="eyebrow">WHAT YOU GET</span>
        <h2 class="h2">This isn't another list of "100 prompts."</h2>
        <p class="lead inside__sub">
          It's a working system that takes you from spotting an expensive, repetitive task to
          testing your first useful AI workflow. Eight parts, one clear path.
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
