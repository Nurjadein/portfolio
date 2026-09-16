<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-500"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="
        fixed
        inset-0
        z-[999]
        flex
        items-center
        justify-center
        bg-background
      "
      aria-label="Loading"
    >
      <img
        :src="loadingImage"
        alt=""
        class="h-16 w-16"
      />
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import LoadingDark from '@/assets/images/loader-dark.svg'
import LoadingLight from '@/assets/images/loader-light.svg'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()

const visible = ref(true)

const loadingImage = computed(() => {
  return theme.value === 'dark'
    ? LoadingDark
    : LoadingLight
})

function hide() {
  visible.value = false
}

defineExpose({
  hide,
})
</script>