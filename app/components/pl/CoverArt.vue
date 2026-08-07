<script setup lang="ts">
// Polish book-cover face (sharp text, on-brand) meant to sit inside <EnBookCover>.
const steps = ['Znajdź', 'Przygotuj', 'Zbuduj']
</script>

<template>
  <div class="cv">
    <div class="cv__glow" aria-hidden="true"></div>

    <!-- Duży robot-znak wodny w przerwie między plakietką a tytułem,
         w tym samym gradiencie akcentu co wyróżniony tekst nagłówka -->
    <div class="cv__watermark" aria-hidden="true">
      <svg viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="cvRobotGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#c5b9ff" />
            <stop offset="100%" stop-color="#9bc8ff" />
          </linearGradient>
        </defs>
        <rect x="6" y="9" width="20" height="15" rx="4" stroke="url(#cvRobotGrad)" stroke-width="1.6" />
        <circle cx="12.5" cy="16.5" r="1.6" fill="url(#cvRobotGrad)" />
        <circle cx="19.5" cy="16.5" r="1.6" fill="url(#cvRobotGrad)" />
        <path d="M16 9V5M16 5h-2M16 5h2" stroke="url(#cvRobotGrad)" stroke-width="1.6" stroke-linecap="round" />
      </svg>
    </div>

    <div class="cv__top">
      <span class="cv__badge">Interaktywny Workbook</span>
      <span class="cv__mark" aria-hidden="true">
        <svg viewBox="0 0 32 32" fill="none">
          <rect x="6" y="9" width="20" height="15" rx="4" stroke="currentColor" stroke-width="1.8" />
          <circle cx="12.5" cy="16.5" r="1.6" fill="currentColor" />
          <circle cx="19.5" cy="16.5" r="1.6" fill="currentColor" />
          <path d="M16 9V5M16 5h-2M16 5h2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </span>
    </div>

    <div class="cv__body">
      <h3 class="cv__title">AI dla właścicieli małych firm</h3>
      <p class="cv__sub">
        Znajdź, gdzie AI oszczędza czas i pieniądze — i zbuduj swój pierwszy workflow w 7 dni.
      </p>
    </div>

    <div class="cv__foot">
      <div class="cv__steps">
        <span v-for="(s, i) in steps" :key="s" class="cv__step">
          <span class="cv__step-n">{{ i + 1 }}</span>{{ s }}
        </span>
      </div>
      <span class="cv__brand">AI Business Starter System</span>
    </div>
  </div>
</template>

<style scoped>
.cv {
  position: relative;
  aspect-ratio: 3 / 4;
  width: 100%;
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(158deg, #17171f 0%, #0a0a0a 62%);
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  container-type: inline-size;
}
.cv__glow {
  position: absolute;
  top: -30%;
  right: -25%;
  width: 80%;
  height: 60%;
  background: radial-gradient(circle, rgba(155, 175, 255, 0.5), rgba(155, 175, 255, 0) 70%);
  filter: blur(10px);
  z-index: -1;
}
.cv__watermark {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  opacity: 0.16;
  z-index: -1;
  pointer-events: none;
}
.cv__watermark svg {
  width: 100%;
  height: auto;
}

.cv__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cv__badge {
  font-size: clamp(9px, 2.6cqw, 12px);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--lavender);
}
.cv__mark {
  width: 30px;
  height: 30px;
  color: var(--lavender);
}
.cv__mark svg {
  width: 100%;
  height: 100%;
}

.cv__body {
  margin-top: auto;
}
.cv__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(26px, 11cqw, 46px);
  line-height: 1.02;
  letter-spacing: -0.035em;
  color: #fff;
}
.cv__sub {
  margin-top: 16px;
  max-width: 92%;
  font-size: clamp(11px, 3.6cqw, 15px);
  line-height: 1.45;
  color: #c9cdd2;
}

.cv__foot {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
}
.cv__steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.cv__step {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px 5px 6px;
  border-radius: var(--r-pill);
  background: rgba(255, 255, 255, 0.08);
  font-size: clamp(10px, 3cqw, 13px);
  font-weight: 600;
}
.cv__step-n {
  display: grid;
  place-items: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--accent-gradient);
  color: #0a0a0a;
  font-size: 11px;
}
.cv__brand {
  display: block;
  margin-top: 16px;
  font-size: clamp(10px, 3cqw, 13px);
  font-weight: 500;
  color: #8a8f98;
}
</style>
