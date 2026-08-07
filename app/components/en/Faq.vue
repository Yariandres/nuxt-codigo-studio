<script setup lang="ts">
const faqs = [
  {
    q: 'Is this just another list of prompts?',
    a: 'No. It\'s a system, not a list. It takes you from finding an expensive, repetitive task to testing your first working AI workflow — with the context, rules, and review steps that make AI actually reliable.',
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'You\'re covered by a 14-day money-back guarantee. If you go through it and don\'t find at least one process worth improving with AI, email us within 14 days for a full refund — no questions.',
  },
  {
    q: 'Do I need to know ChatGPT or other AI tools?',
    a: 'No. We walk you through it step by step using tools you probably already have. Basic computer skills are enough.',
  },
  {
    q: 'Do I need to know how to automate things?',
    a: 'No. You start at the level where AI simply helps a person — no APIs, no Make, no Zapier, no coding. Automation is an optional later step.',
  },
  {
    q: 'Is this for a one-person business?',
    a: 'Yes. If you have repetitive tasks, you\'ll find processes worth improving — even without a team.',
  },
  {
    q: 'I have a team — can we go through it together?',
    a: 'Yes. The workbook shows which parts the owner does and which can be handed to the team. The license covers one company.',
  },
  {
    q: 'What tools do I need?',
    a: 'Access to one AI tool (ChatGPT, Claude, Gemini, or Copilot) and a browser. You don\'t need to buy extra software.',
  },
  {
    q: 'How long does it take to work through?',
    a: 'You\'ll see a first result in about 10 minutes, and you can build your first working process in 7 days at roughly 30–45 minutes a day.',
  },
  {
    q: 'Will the workbook build the automations for me?',
    a: 'No. It shows you where and how to apply AI sensibly, and guides you to build your first workflow — deliberately and safely.',
  },
  {
    q: 'What format do I get it in?',
    a: 'An interactive 50-page PDF. You can fill it in on your computer or print it.',
  },
  {
    q: 'Do I get updates?',
    a: 'Yes. Any updates to this edition are sent to the email address you use at checkout.',
  },
  {
    q: 'What if I want more advanced workflows later?',
    a: 'That\'s the natural next step. Once you\'ve built your first process, you\'ll know which implementations are worth going deeper on — and if you want help with more advanced workflows, reach out to us.',
  },
]
</script>

<template>
  <section id="faq" class="faq section section--alt">
    <div class="container faq__wrap">
      <h2 class="h2 faq__title">Questions worth asking before you buy</h2>

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
