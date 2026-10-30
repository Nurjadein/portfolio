<template>
  <section
    id="experience"
    class="py-24"
  >
    <TheContainer>
      <div class="text-center">
        <h2
          class="
            text-3xl
            font-bold
            text-foreground
            md:text-4xl
          "
        >
          {{ t('experience.title') }}
        </h2>

        <p
          class="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-foreground-secondary
          "
        >
          {{ t('experience.intro') }}
        </p>
      </div>

      <div
        class="
          relative
          mt-16
          space-y-12
          before:absolute
          before:left-3
          before:top-2
          before:h-[calc(100%-1rem)]
          before:w-px
          before:bg-foreground
          md:before:left-1/2
          md:before:-translate-x-1/2
        "
      >
        <ExperienceEntry
          v-for="experience in experiences"
          :key="experience.id"
          :experience="experience"
        />
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import ExperienceEntry from '@/components/home/experience/ExperienceEntry.vue'
import { experiences } from '@/config/experience.config'

const { t } = useI18n({ useScope: 'global' })
</script>