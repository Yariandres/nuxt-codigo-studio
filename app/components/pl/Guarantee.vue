<template>
  <section class="guar section section--alt">
    <div class="container">
      <div class="guar__card">
        <div class="guar__badge" aria-hidden="true">
          <svg viewBox="0 0 48 48" fill="none">
            <path
              d="M24 4l16 6v11c0 10.5-6.8 18.8-16 23-9.2-4.2-16-12.5-16-23V10l16-6z"
              fill="rgba(255,255,255,0.14)"
              stroke="currentColor"
              stroke-width="2"
              stroke-linejoin="round"
            />
            <path d="M16 24l6 6 11-13" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <div class="guar__body">
          <span class="guar__kicker">TWOJE RYZYKO: ZERO</span>
          <h2 class="h2 guar__title">Przetestuj przez 14 dni. Jeśli to nie jest przydatne — nie płacisz.</h2>
          <p class="guar__text">
            Przejdź przez workbook. Jeśli nie znajdziesz choć jednego procesu wartego usprawnienia z
            AI, napisz do nas w ciągu 14 dni — zwrócimy każdą złotówkę, bez formularzy, bez haczyków,
            bez niewygodnych pytań. Wszystko, co wypełniłeś, zostaje u Ciebie.
          </p>
          <p class="guar__sign">
            Tak bardzo jesteśmy pewni, że znajdziesz w środku swoją pierwszą szansę na AI.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.guar__card {
  max-width: 900px;
  margin: 0 auto;
  background: var(--ink);
  color: #fff;
  border-radius: var(--r-media);
  padding: 56px;
  display: flex;
  gap: 40px;
  align-items: center;
}
.guar__badge {
  flex: none;
  width: 112px;
  height: 112px;
  color: var(--lavender);
}
.guar__badge svg {
  width: 100%;
  height: 100%;
}
.guar__kicker {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--lavender);
}
.guar__title {
  margin-top: 12px;
  color: #fff;
}
.guar__text {
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.55;
  color: #e0e2e5;
}
.guar__sign {
  margin-top: 16px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
}

@media (max-width: 768px) {
  .guar__card {
    flex-direction: column;
    text-align: center;
    padding: 40px 28px;
    gap: 24px;
  }
  .guar__badge {
    width: 88px;
    height: 88px;
  }
}
</style>
