<template>
  <section
    id="skills"
    class="py-24"
  >
    <TheContainer>
      <div class="text-center">
        <h2
          class="
            text-3xl font-bold text-foreground
            md:text-4xl
          "
        >
          {{ t('skills.title') }}
        </h2>
      </div>

      <div
        class="
          mt-16 grid grid-cols-1
          items-stretch gap-6
          md:grid-cols-2
        "
      >
        <!-- Frontend -->
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.categories.frontend') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in frontendTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>

        <!-- Backend -->
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.categories.backend') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in backendTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>

        <!-- Currently Learning -->
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.currentlyLearning') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in currentlyLearningTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>

        <!-- Database -->
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.categories.database') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in databaseTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>

        <!-- AI -->
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.categories.ai') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in aiTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>
        <div
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3 class="text-xl font-semibold text-foreground">
            {{ t('skills.categories.tools') }}
          </h3>

          <div class="mt-6 flex flex-wrap gap-3">
            <TechnologyBadge
              v-for="technology in toolTechnologies"
              :key="technology.id"
              :label="technology.name"
              :icon="technology.icon"
              dir="ltr"
            />
          </div>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import TechnologyBadge from '@/components/common/TechnologyBadge.vue'

import {
  skillCategories,
  currentlyLearningTechnologies,
} from '@/config/technologies.config'

const { t } = useI18n({ useScope: 'global' })

const frontendTechnologies = computed(
  () => skillCategories.find(
    ({ category }) => category === 'frontend',
  )?.technologies ?? [],
)

const backendTechnologies = computed(
  () => skillCategories.find(
    ({ category }) => category === 'backend',
  )?.technologies ?? [],
)

const databaseTechnologies = computed(
  () => skillCategories.find(
    ({ category }) => category === 'database',
  )?.technologies ?? [],
)

const aiTechnologies = computed(
  () => skillCategories.find(
    ({ category }) => category === 'ai',
  )?.technologies ?? [],
)

const toolTechnologies = computed(
  () => skillCategories.find(
    ({ category }) => category === 'tools',
  )?.technologies ?? [],
)
</script>