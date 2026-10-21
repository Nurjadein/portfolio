<template>
  <div
    ref="switcherRef"
    class="relative"
    :class="{ 'w-full': fullWidth }"
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
  >
    <button
      type="button"
      class="
        inline-flex h-10 items-center justify-center gap-2
        rounded-full border border-border
        bg-surface/80 px-4
        text-sm font-normal text-foreground-secondary
        shadow-sm transition-colors
        hover:bg-primary/10 hover:text-foreground
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-primary
      "
      :class="{ 'w-full': fullWidth }"
      :aria-label="triggerLabel"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click="isOpen = !isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        class="h-5 w-5 shrink-0"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="
            M2 12h20
            M12 2a15.3 15.3 0 0 1 4 10
            15.3 15.3 0 0 1-4 10
            15.3 15.3 0 0 1-4-10
            15.3 15.3 0 0 1 4-10Z
          "
        />
      </svg>

      <span>{{ triggerLabel }}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-4 w-4 shrink-0 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m6 9 6 6 6-6"
        />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="isOpen"
        class="
          absolute end-0 top-full z-[100]
          mt-2 min-w-44 overflow-hidden
          rounded-xl border border-border
          bg-surface p-1.5 shadow-lg
        "
        :class="{ 'w-full': fullWidth }"
      >
        <button
          v-for="language in languages"
          :key="language.value"
          type="button"
          class="
            flex w-full items-center justify-between gap-3
            rounded-lg px-3 py-2.5 text-start text-sm
            font-normal transition-colors
            hover:bg-primary/10
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-primary
          "
          :class="
            locale === language.value
              ? 'bg-primary/10 text-primary'
              : 'text-foreground-secondary'
          "
          :aria-pressed="locale === language.value"
          @click="selectLanguage(language.value)"
        >
          <span>{{ language.label }}</span>

          <svg
            v-if="locale === language.value"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="h-4 w-4 shrink-0"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5 12 4 4L19 6"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import { useLocale } from '@/composables/useLocale'
import type { AppLocale } from '@/i18n'

withDefaults(
  defineProps<{
    fullWidth?: boolean
  }>(),
  {
    fullWidth: false,
  },
)

const { locale, t, setLocale } = useLocale()

const isOpen = ref(false)
const switcherRef = ref<HTMLElement | null>(null)

const languages: { value: AppLocale; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'العربية' },
]

const triggerLabel = computed(() => t('nav.language'))

function selectLanguage(language: AppLocale) {
  setLocale(language)
  isOpen.value = false
}

function handlePointerDown(event: PointerEvent) {
  if (
    switcherRef.value &&
    event.target instanceof Node &&
    !switcherRef.value.contains(event.target)
  ) {
    isOpen.value = false
  }
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeydown)
})
</script>