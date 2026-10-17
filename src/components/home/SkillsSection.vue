
<template>
  <section
    id="skills"
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
          {{ t('skills.title') }}
        </h2>
      </div>

      <div
        class="
          mt-16
          grid
          gap-6
          md:grid-cols-2
        "
      >
        <div
          v-for="category in skillCategories"
          :key="category.key"
          class="
            rounded-2xl
            border
            border-border
            bg-surface
            p-6
            backdrop-blur-sm
          "
        >
          <h3
            class="
              text-xl
              font-semibold
              text-foreground
            "
          >
            {{ t(category.titleKey) }}
          </h3>

          <div
            class="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            <span
              v-for="skill in category.skills"
              :key="skill"
              dir="ltr"
              class="
                rounded-full
                border
                border-border
                bg-surface-muted
                px-4
                py-2
                text-sm
                text-foreground-secondary
              "
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import { skillsData } from '@/config/skills.config'

const { t } = useI18n({ useScope: 'global' })

const categoryKeys = {
  Frontend: 'frontend',
  Backend: 'backend',
  Database: 'database',
  Tools: 'tools',
} as const

const skillCategories = skillsData.categories.map((category) => ({
  ...category,
  key: categoryKeys[category.title as keyof typeof categoryKeys],
  titleKey: `skills.categories.${categoryKeys[category.title as keyof typeof categoryKeys]}`,
}))
</script>
