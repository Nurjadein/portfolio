
<template>
  <div
    ref="rootRef"
    class="relative"
    :class="{ 'w-full': fullWidth }"
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
      :class="fullWidth ? 'w-full' : ''"
      :aria-label="t('theme.label')"
      :aria-expanded="isOpen"
      aria-haspopup="dialog"
      @click="toggleDropdown"
    >
      <svg
        aria-hidden="true"
        class="h-5 w-5 shrink-0 text-foreground-secondary"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 1.7-4.3 1.5 1.5 0 0 1 1-2.6H18a3 3 0 0 0 3-3c0-4.5-4-8.1-9-8.1Z"
        />
        <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
        <circle cx="11" cy="6.8" r="1" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="8" r="1" fill="currentColor" stroke="none" />
      </svg>

      <span>{{ t('theme.label') }}</span>

      <svg
        aria-hidden="true"
        class="h-4 w-4 shrink-0 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
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
      <section
        v-if="isOpen"
        role="dialog"
        :aria-label="t('theme.label')"
        class="
          z-50 max-h-[min(36rem,calc(100dvh-10rem))]
          overflow-y-auto overscroll-contain rounded-2xl
          border border-border bg-surface p-4
          text-foreground shadow-xl
        "
        :class="
          fullWidth
            ? 'relative mt-2 w-full'
            : 'absolute end-0 top-full mt-3 w-[min(20rem,calc(100vw-2rem))]'
        "
      >
        <h2 class="text-sm font-semibold text-foreground">
          {{ t('theme.label') }}
        </h2>

        <div class="mt-3 grid grid-cols-2 gap-3">
          <button
            v-for="option in appearanceOptions"
            :key="option.value"
            type="button"
            class="
              min-w-0 rounded-xl border p-3 text-start
              transition-colors focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-primary
            "
            :class="
              theme === option.value
                ? 'border-primary bg-primary/10'
                : 'border-border hover:bg-surface-muted'
            "
            :aria-pressed="theme === option.value"
            @click="setTheme(option.value)"
          >
            <span
              class="mb-3 flex h-10 items-center justify-center rounded-lg border border-border"
              :class="
                option.value === 'light'
                  ? 'bg-white text-slate-800'
                  : 'bg-slate-950 text-slate-100'
              "
            >
              <svg
                v-if="option.value === 'light'"
                aria-hidden="true"
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <circle cx="12" cy="12" r="4" />
                <path
                  stroke-linecap="round"
                  d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
                />
              </svg>

              <svg
                v-else
                aria-hidden="true"
                class="size-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.9 13A8.5 8.5 0 0 1 11 3.1 8.5 8.5 0 1 0 20.9 13Z"
                />
              </svg>
            </span>

            <span
              class="flex items-center justify-between gap-1 text-sm font-medium"
            >
              <span class="min-w-0">
                {{
                  t(
                    option.value === 'light'
                      ? 'theme.lightMode'
                      : 'theme.darkMode',
                  )
                }}
              </span>

              <svg
                v-if="theme === option.value"
                aria-hidden="true"
                class="size-4 shrink-0 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="my-4 border-t border-border" />

        <h3 class="text-sm font-semibold text-foreground">
          {{ t('theme.colorTheme.label') }}
        </h3>

        <div class="mt-3 grid grid-cols-2 gap-2">
          <button
            v-for="option in colorThemeOptions"
            :key="option.value"
            type="button"
            class="
              flex min-w-0 items-center gap-2 rounded-xl
              border px-3 py-3 text-start text-sm
              transition-colors focus-visible:outline-2
              focus-visible:outline-offset-2 focus-visible:outline-primary
            "
            :class="
              colorTheme === option.value
                ? 'border-primary bg-primary/10'
                : 'border-border hover:bg-surface-muted'
            "
            :aria-pressed="colorTheme === option.value"
            @click="setColorTheme(option.value)"
          >
            <span
              class="size-4 shrink-0 rounded-full ring-1 ring-black/10"
              :style="{ backgroundColor: option.swatch }"
              aria-hidden="true"
            />

            <span class="min-w-0 flex-1 truncate">
              {{ t(`theme.colorTheme.${option.value}`) }}
            </span>

            <svg
              v-if="colorTheme === option.value"
              aria-hidden="true"
              class="size-4 shrink-0 text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 1 1 1.4-1.4L9 11.6l6.3-6.3a1 1 0 0 1 1.4 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </section>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

import { useLocale } from '@/composables/useLocale'
import { useTheme } from '@/composables/useTheme'
import {
  colorThemes,
  useColorTheme,
  type ColorTheme,
} from '@/composables/useColorTheme'

withDefaults(
  defineProps<{
    fullWidth?: boolean
  }>(),
  {
    fullWidth: false,
  },
)

const { t } = useLocale()
const { theme, setTheme } = useTheme()
const { colorTheme, setColorTheme } = useColorTheme()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

const appearanceOptions = [
  { value: 'light' as const },
  { value: 'dark' as const },
]

const swatches: Record<ColorTheme, string> = {
  violet: '#7c3aed',
  navy: '#1d4ed8',
  emerald: '#047857',
  ocean: '#0e7490',
  amber: '#d97706',
}

const colorThemeOptions = colorThemes.map((value) => ({
  value,
  swatch: swatches[value],
}))

function toggleDropdown() {
  isOpen.value = !isOpen.value
}

function handleOutsideClick(event: MouseEvent) {
  if (
    event.target instanceof Node &&
    !rootRef.value?.contains(event.target)
  ) {
    isOpen.value = false
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>