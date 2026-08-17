<template>
  <section
    id="about"
    class="py-24"
  >
    <TheContainer size="md">
      <div class="text-center">
        <h2
          class="text-3xl font-bold text-white md:text-4xl"
        >
          {{ aboutData.title }}
        </h2>

        <p
          class="
            mx-auto
            mt-8
            max-w-3xl
            whitespace-pre-line
            text-lg
            leading-8
            text-slate-400
          "
        >
          {{ aboutData.description }}
        </p>
      </div>

      <div
        class="
          mt-16
          grid
          gap-6
          sm:grid-cols-2
        "
      >
        <div
          v-for="item in aboutData.highlights"
          :key="item.label"
          class="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/50
            p-6
            backdrop-blur-sm
          "
        >
          <p class="text-sm text-slate-400">
            {{ item.label }}
          </p>

          <p
            class="
              mt-2
              text-xl
              font-semibold
              text-white
            "
          >
            {{ item.value }}
          </p>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue';
import { aboutData } from '@/config/about.config';
</script>