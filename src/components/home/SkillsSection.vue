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
          mt-16 grid gap-6
          md:grid-cols-2
        "
      >
        <div
          v-for="category in skillCategories"
          :key="category.category"
          class="
            rounded-2xl border border-border
            bg-surface p-6 backdrop-blur-sm
          "
        >
          <h3
            class="text-xl font-semibold text-foreground"
          >
            {{ t(`skills.categories.${category.category}`) }}
          </h3>

          <div
            class="
              mt-6 flex flex-wrap gap-3
            "
          >
            <TechnologyBadge
              v-for="technology in category.technologies"
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
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import TechnologyBadge from '@/components/common/TechnologyBadge.vue'

import { skillCategories } from '@/config/technologies.config'

const { t } = useI18n({ useScope: 'global' })
</script>