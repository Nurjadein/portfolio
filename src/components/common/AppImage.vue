<template>
  <div
    :class="[
      'relative mx-auto w-fit overflow-hidden',
      containerClass,
    ]"
    :aria-busy="!isLoaded && !hasError"
  >
    <div
      v-if="!isLoaded && !hasError"
      class="
        absolute
        inset-0
        z-10
        flex
        flex-col
        items-center
        justify-center
        gap-3
        rounded-xl
        bg-surface-muted/90
        backdrop-blur-sm
      "
      role="status"
      aria-live="polite"
    >
      <span
        class="
          h-10
          w-10
          animate-spin
          rounded-full
          border-[3px]
          border-foreground-muted/20
          border-t-primary
          motion-reduce:animate-none
        "
        aria-hidden="true"
      />

      <span
        class="
          text-sm
          font-medium
          text-foreground-secondary
        "
      >
        Loading image...
      </span>
    </div>

    <img
      v-if="!hasError"
      :src="src"
      :alt="alt"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      :class="[
        'block transition-opacity duration-300',
        imageClass,
        isLoaded ? 'opacity-100' : 'opacity-0',
      ]"
      @load="handleLoad"
      @error="handleError"
    />

    <div
      v-else
      class="
        flex
        min-h-32
        flex-col
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-border
        bg-surface-muted
        p-4
        text-center
      "
      role="status"
    >
      <span
        class="
          text-sm
          font-medium
          text-foreground-secondary
        "
      >
        Image unavailable
      </span>

      <span
        class="
          text-xs
          text-foreground-muted
        "
      >
        {{ alt }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  src: string
  alt: string
  containerClass?: string
  imageClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  containerClass: '',
  imageClass: '',
})

const isLoaded = ref(false)
const hasError = ref(false)

const handleLoad = () => {
  isLoaded.value = true
  hasError.value = false
}

const handleError = () => {
  isLoaded.value = false
  hasError.value = true
}

watch(
  () => props.src,
  () => {
    isLoaded.value = false
    hasError.value = false
  },
)
</script>