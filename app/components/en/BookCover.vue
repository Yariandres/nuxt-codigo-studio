<script setup lang="ts">
/**
 * Pure-CSS 3D book mockup. Wraps a real cover image (sharp text — no AI render),
 * gives it thickness (fore-edge pages + back cover), a spine sheen, and a soft
 * ground shadow. Gently tilts flatter on hover. Respects reduced-motion.
 */
withDefaults(
  defineProps<{
    /** Optional image cover. If a #face slot is provided, the slot wins. */
    src?: string
    alt?: string
    /** Max width of the cover face in px. */
    width?: number
  }>(),
  { src: '', alt: '', width: 420 },
)
</script>

<template>
  <div class="book" :style="{ maxWidth: width + 'px' }">
    <div class="book__3d">
      <div class="book__pages" aria-hidden="true"></div>
      <div class="book__back" aria-hidden="true"></div>
      <div class="book__face">
        <slot name="face">
          <img class="book__img" :src="src" :alt="alt" />
        </slot>
        <span class="book__spine" aria-hidden="true"></span>
        <span class="book__gloss" aria-hidden="true"></span>
      </div>
    </div>
    <div class="book__floor" aria-hidden="true"></div>
  </div>
</template>

<style scoped>
.book {
  --depth: 42px;
  width: 100%;
  margin: 0 auto;
  perspective: 2200px;
  position: relative;
}

.book__3d {
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-24deg) rotateX(4deg);
  transition: transform 0.7s var(--ease);
  animation: bookFloat 8s ease-in-out infinite;
}
.book:hover .book__3d {
  transform: rotateY(-12deg) rotateX(2deg);
}

/* Front face (the real cover) */
.book__face {
  position: relative;
  z-index: 2;
  transform: translateZ(calc(var(--depth) / 2));
  border-radius: 3px 9px 9px 3px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.18);
}
.book__img {
  display: block;
  width: 100%;
  border-radius: inherit;
}
/* Dark gradient spine down the binding edge */
.book__spine {
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(10, 10, 10, 0.28) 0%,
    rgba(10, 10, 10, 0.1) 40%,
    rgba(255, 255, 255, 0.28) 62%,
    rgba(10, 10, 10, 0) 100%
  );
}
/* Soft diagonal sheen across the cover */
.book__gloss {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(255, 255, 255, 0) 55%,
    rgba(255, 255, 255, 0.35) 72%,
    rgba(255, 255, 255, 0) 82%
  );
  pointer-events: none;
}

/* Fore-edge — a stack of pages on the right side */
.book__pages {
  position: absolute;
  top: 5px;
  bottom: 5px;
  right: 0;
  width: var(--depth);
  transform: translateX(50%) rotateY(90deg);
  background: repeating-linear-gradient(
    90deg,
    #f6f6f2 0,
    #f6f6f2 1px,
    #dcdcd4 2px,
    #f6f6f2 3px
  );
  border-radius: 1px;
  box-shadow: inset 0 0 6px rgba(10, 10, 10, 0.08);
}

/* Back cover */
.book__back {
  position: absolute;
  inset: 0;
  transform: translateZ(calc(var(--depth) / -2));
  border-radius: 3px 9px 9px 3px;
  background: linear-gradient(135deg, #cfd3d9, #b9bec5);
}

/* Ground shadow (does not rotate with the book) */
.book__floor {
  position: absolute;
  left: 8%;
  right: 4%;
  bottom: -6%;
  height: 44px;
  background: rgba(10, 10, 10, 0.28);
  filter: blur(26px);
  border-radius: 50%;
  transform: rotateX(60deg);
  z-index: 0;
}

@keyframes bookFloat {
  0%,
  100% {
    transform: rotateY(-24deg) rotateX(4deg) translateY(0);
  }
  50% {
    transform: rotateY(-24deg) rotateX(4deg) translateY(-10px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .book__3d {
    animation: none;
  }
}
</style>
