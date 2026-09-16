<template>
  <AppLoader ref="loader" />

  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import AppLoader from '@/components/common/AppLoader.vue'

const loader = ref<InstanceType<typeof AppLoader> | null>(null)

onMounted(() => {
  setTimeout(() => {
    loader.value?.hide()
  }, 700)
})
</script>