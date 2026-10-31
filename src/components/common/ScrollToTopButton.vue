<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-4 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-4 opacity-0"
    >
      <TheButton
        v-if="isVisible"
        type="button"
        variant="primary"
        size="md"
        class="
          fixed
          bottom-6
          right-6
          z-[100]
          !h-12
          !w-12
          !rounded-full
          !p-0
          shadow-lg
        "
        aria-label="Scroll to top"
        title="Scroll to top"
        @click="scrollToTop"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </TheButton>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

import TheButton from '@/components/common/TheButton.vue'

const heroSection = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(
  heroSection,
  ([entry]) => {
    if (!entry) return

    isVisible.value = !entry.isIntersecting
  },
  {
    threshold: 0,
  },
)

onMounted(() => {
  heroSection.value = document.getElementById('home')

  if (!heroSection.value) {
    console.warn(
      'ScrollToTopButton: Hero section with id="home" was not found.',
    )
  }
})

const scrollToTop = () => {
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches

  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? 'instant' : 'smooth',
  })
}
</script>