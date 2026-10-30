<template>
  <section
    id="about"
    class="py-24"
  >
    <TheContainer size="md">
      <div class="text-center">
        <h2
          class="
            text-3xl
            font-bold
            text-foreground
            md:text-4xl
          "
        >
          {{ t('about.title') }}
        </h2>

        <p
          class="
            mx-auto
            mt-8
            max-w-3xl
            whitespace-pre-line
            text-lg
            leading-8
            text-foreground-secondary
          "
        >
          {{ t('about.description') }}
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
          v-for="item in highlightItems"
          :key="item.labelKey"
          class="
            rounded-2xl
            border
            border-border
            bg-surface
            p-6
            backdrop-blur-sm
          "
        >
          <p class="text-sm text-foreground-muted">
            {{ t(item.labelKey) }}
          </p>

          <div
            v-if="item.technologyIds"
            class="mt-4 flex flex-wrap gap-3"
          >
            <TechnologyBadge
              v-for="technologyId in item.technologyIds"
              :key="technologyId"
              :label="getTechnology(technologyId).name"
              :icon="getTechnology(technologyId).icon"
              dir="ltr"
            />
          </div>

          <p
            v-else-if="item.valueKey"
            class="
              mt-2
              text-xl
              font-semibold
              text-foreground
            "
          >
            {{ t(item.valueKey) }}
          </p>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import TechnologyBadge from '@/components/common/TechnologyBadge.vue'

import {
  getTechnology,
  type TechnologyId,
} from '@/config/technologies.config'

const { t } = useI18n({ useScope: 'global' })

const highlightItems: {
  labelKey: string
  valueKey?: string
  technologyIds?: readonly TechnologyId[]
}[] = [
  {
    labelKey: 'about.highlights.experience',
    valueKey: 'about.values.experience',
  },
  {
    labelKey: 'about.highlights.degree',
    valueKey: 'about.values.degree',
  },
  {
    labelKey: 'about.highlights.primaryStack',
    technologyIds: [
      'vue3',
      'typescript',
      'quasar',
      'tailwindcss',
    ],
  },
  {
    labelKey: 'about.highlights.backend',
    technologyIds: [
      'nestjs',
      'mysql',
    ],
  },
  {
    labelKey: 'skills.currentlyLearning',
    technologyIds: [
      'react',
    ],
  },
]
</script>