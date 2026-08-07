<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string
    variant?: 'primary' | 'secondary'
    large?: boolean
    /** In-flight button text. Defaults to Polish (used by the /pl page). */
    loadingText?: string
    /** Error shown if checkout can't start. Defaults to Polish (used by the /pl page). */
    errorText?: string
  }>(),
  {
    label: 'Kup workbook — 149 zł',
    variant: 'primary',
    large: false,
    loadingText: 'Przekierowanie…',
    errorText: 'Nie udało się rozpocząć płatności. Spróbuj ponownie.',
  },
)

const loading = ref(false)
const error = ref('')

async function buy() {
  if (loading.value) return
  loading.value = true
  error.value = ''
  try {
    const { url } = await $fetch<{ url: string }>('/api/checkout', {
      method: 'POST',
    })
    if (url) {
      window.location.href = url
    } else {
      throw new Error('No checkout URL.')
    }
  } catch (e) {
    error.value = props.errorText
    loading.value = false
  }
}
</script>

<template>
  <div class="buy">
    <button
      class="btn"
      :class="[variant === 'primary' ? 'btn--primary' : 'btn--secondary', { 'btn--lg': large }]"
      :disabled="loading"
      @click="buy"
    >
      <span>{{ loading ? loadingText : label }}</span>
    </button>
    <p v-if="error" class="buy__error" role="alert">{{ error }}</p>
  </div>
</template>

<style scoped>
.buy {
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
}
.buy__error {
  font-size: 13px;
  color: var(--error);
}
</style>
