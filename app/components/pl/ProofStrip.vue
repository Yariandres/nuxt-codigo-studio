<script setup lang="ts">
const stats = [
  { value: '50', label: 'stron workbooka' },
  { value: '7', label: 'gotowych blueprintów' },
  { value: '7 dni', label: 'do pierwszego workflow' },
  { value: '0', label: 'linijek kodu' },
]
</script>

<template>
  <section class="proof">
    <div class="container proof__grid">
      <div v-for="s in stats" :key="s.label" class="proof__item">
        <span class="proof__value">{{ s.value }}</span>
        <span class="proof__label">{{ s.label }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proof {
  padding: 40px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  background: var(--surface);
}
.proof__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.proof__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
}
.proof__value {
  font-family: var(--font-display);
  font-size: 44px;
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1;
}
.proof__label {
  font-size: 15px;
  color: var(--muted);
}

@media (max-width: 640px) {
  .proof__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
  }
  .proof__value {
    font-size: 36px;
  }
}
</style>
