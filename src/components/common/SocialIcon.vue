<template>
  <span
    class="
      flex
      h-8
      w-8
      shrink-0
      items-center
      justify-center
      rounded-lg
      border
      border-slate-700
      bg-slate-200
    "
  >
    <img
      :src="icon"
      :alt="label"
      class="h-4 w-4 object-contain"
    />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  icon: string
  label: string
}>()
</script>