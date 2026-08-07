<script setup lang="ts">
const steps = [
  { n: '1', t: 'Open the AI tool you already have', d: 'ChatGPT, Claude, Gemini, Copilot — whatever you have access to.' },
  { n: '2', t: 'Paste one real example', d: 'A real inquiry, email, note, or task input. Remove anything sensitive.' },
  { n: '3', t: 'Give AI a simple job', d: 'Use the starter prompt. Don\'t automate anything yet.' },
  { n: '4', t: 'Compare the result', d: 'Would this save time if someone on your team just reviewed it?' },
]

const prompt = `You are helping me improve a repetitive business process. I will give you one real example. First, summarize what you think the task is trying to achieve. Then produce a useful first draft or analysis. Do not invent missing facts. List anything you need me to clarify. End with 3 ways this task could be made more repeatable.`
</script>

<template>
  <section class="win section">
    <div class="container win__grid">
      <div class="win__text">
        <span class="eyebrow">SEE VALUE IN 10 MINUTES</span>
        <h2 class="h2 win__title">Your first AI win before you set anything up.</h2>
        <p class="lead win__sub">
          You don't wait 7 days to feel this working. On page one of the plan, you run a real example
          through AI and see the time-saving with your own eyes.
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
        <span class="win__prompt-label">Starter prompt — copy &amp; use</span>
        <p class="win__prompt-body">{{ prompt }}</p>
        <p class="win__prompt-note">
          The goal isn't perfection. It's proof that AI removes part of the work when a person gives
          it context and checks the result.
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
