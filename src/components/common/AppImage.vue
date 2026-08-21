<template>
  <div
    :class="[
      'relative mx-auto w-fit',
      containerClass,
    ]"
  >
    <div
      v-if="!isLoaded"
      class="
        absolute
        inset-0
        flex
        items-center
        justify-center
      "
      aria-hidden="true"
    >
      <span
        class="
          h-5
          w-5
          animate-spin
          rounded-full
          border-2
          border-slate-600
          border-t-violet-400
        "
      />
    </div>

    <img
      :src="src"
      :alt="alt"
      :loading="loading"
      :fetchpriority="fetchPriority"
      :class="[
        'block transition-opacity duration-300',
        imageClass,
        isLoaded ? 'opacity-100' : 'opacity-0',
      ]"
      @load="handleLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  src: string
  alt: string
  containerClass?: string
  imageClass?: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
}

withDefaults(defineProps<Props>(), {
  containerClass: '',
  imageClass: '',
  loading: 'lazy',
  fetchPriority: 'auto',
})

const isLoaded = ref(false)

const handleLoad = () => {
  isLoaded.value = true
}
</script>