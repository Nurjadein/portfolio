<template>
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center p-4"
  >
    <div
      class="absolute inset-0 bg-black/60"
      @click="emit('close')"
    />

    <div
      class="
        relative
        z-10
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        bg-slate-900
        text-slate-100
        shadow-2xl
      "
      :style="{
        width,
        height,
      }"
    >
      <!-- Header -->
      <header
        class="
          flex
          shrink-0
          items-center
          justify-between
          border-b
          border-slate-800
          px-6
          py-4
        "
      >
        <h2 class="text-lg font-semibold">
          {{ title }}
        </h2>

        <button
          type="button"
          class="
            rounded-lg
            p-2
            text-slate-400
            transition
            hover:bg-slate-800
            hover:text-white
          "
          aria-label="Close dialog"
          @click="emit('close')"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            class="h-5 w-5"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            />
          </svg>
        </button>
      </header>

      <!-- Content -->
      <div class="min-h-0 flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    width?: string
    height?: string
  }>(),
  {
    width: '90vw',
    height: '90vh',
  },
)

const emit = defineEmits<{
  close: []
}>()
</script>