<template>
  <article
    class="
      relative
      pl-10
      md:pl-0
    "
  >
    <div
      class="
        absolute
        left-0
        top-2
        h-6
        w-6
        rounded-full
        border-4
        border-foreground
        bg-surface-muted
        md:left-1/2
        md:-translate-x-1/2
      "
      aria-hidden="true"
    />

    <div
      class="
        md:grid
        md:grid-cols-2
        md:gap-12
      "
    >
      <div class="md:text-right">
        <p
          class="
            text-sm
            font-medium
            text-foreground-secondary
          "
          dir="ltr"
        >
          {{ experience.startDate }} —
          {{ experience.endDate }}
        </p>

        <h3
          class="
            mt-2
            text-2xl
            font-semibold
            text-foreground
          "
        >
          {{ t(experience.role) }}
        </h3>

        <div
          class="
            mt-3
            flex
            items-center
            gap-3
            md:flex-row-reverse
            md:justify-start
          "
        >
          <AppImage
            v-if="experience.companyLogo"
            :src="experience.companyLogo.src"
            :alt="experience.companyLogo.alt"
            container-class="!mx-0 !w-auto shrink-0"
            image-class="
              h-16
              w-16
              rounded-xl
              border
              border-border
              bg-white
              p-2
              object-contain
            "
          />

          <p class="text-base text-foreground-secondary">
            <span dir="auto">
              {{
                experience.companyIsTranslationKey
                  ? t(experience.company)
                  : experience.company
              }}
            </span>

            <span aria-hidden="true"> · </span>

            {{ t(experience.location) }}
          </p>
        </div>

        <p
          v-if="experience.description"
          class="
            mt-4
            text-base
            leading-7
            text-foreground-secondary
          "
        >
          {{ t(experience.description) }}
        </p>
      </div>

      <div class="mt-8 md:mt-0">
        <div
          v-if="experience.projects?.length"
          class="space-y-6"
        >
          <ExperienceProjectCard
            v-for="project in experience.projects"
            :key="project.id"
            :project="project"
          />
        </div>

        <div
          v-else-if="experience.contributions"
          class="
            rounded-2xl
            border
            border-border
            bg-surface
            p-6
            backdrop-blur-sm
          "
        >
          <ExperienceContributionList
            :translation-key="experience.contributions"
          />
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppImage from '@/components/common/AppImage.vue'
import ExperienceContributionList from '@/components/home/experience/ExperienceContributionList.vue'
import ExperienceProjectCard from '@/components/home/experience/ExperienceProjectCard.vue'
import type { IExperience } from '@/interfaces/experience.interface'

interface Props {
  experience: IExperience
}

defineProps<Props>()

const { t } = useI18n({ useScope: 'global' })
</script>