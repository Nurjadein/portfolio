<template>
  <article
    class="
      rounded-2xl
      border
      border-border
      bg-surface
      p-6
      backdrop-blur-sm
    "
  >
    <AppImage
      v-if="project.screenshot"
      :src="project.screenshot.src"
      :alt="project.screenshot.alt"
      container-class="!mx-0 !mb-5 !w-full"
      image-class="
        aspect-video
        w-full
        rounded-xl
        border
        border-border
        object-cover
        object-top
      "
    />

    <div
      class="
        flex
        flex-col
        gap-3
        sm:flex-row
        sm:items-start
        sm:justify-between
      "
    >
      <div>
        <h4
          class="
            text-xl
            font-semibold
            text-foreground
          "
          dir="ltr"
        >
          {{ project.name }}
        </h4>

        <p
          v-if="project.status"
          class="
            mt-1
            text-sm
            text-foreground-muted
          "
        >
          {{ t(project.status) }}
        </p>
      </div>

      <TheButton
        v-if="project.url"
        :href="project.url"
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="md"
        class="shrink-0"
      >
        {{ t('experience.viewProject') }}

        <icon
          name="external-link"
          size="xs"
          aria-hidden="true"
        />
      </TheButton>
    </div>

    <p
      class="
        mt-5
        text-sm
        leading-7
        text-foreground-secondary
      "
    >
      {{ t(project.description) }}
    </p>

    <ExperienceContributionList
      v-if="project.contributions"
      :translation-key="project.contributions"
      class="mt-6"
    />

    <div
      v-if="project.technologies?.length"
      class="
        mt-6
        flex
        flex-wrap
        gap-2
      "
    >
      <span
        v-for="technology in project.technologies"
        :key="technology"
        dir="ltr"
        class="
          rounded-full
          border
          border-border
          bg-surface-muted
          px-3
          py-1.5
          text-xs
          text-foreground-secondary
        "
      >
        {{ technology }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppImage from '@/components/common/AppImage.vue'
import TheButton from '@/components/common/TheButton.vue'
import ExperienceContributionList from '@/components/home/experience/ExperienceContributionList.vue'
import type { IExperienceProject } from '@/interfaces/experience.interface'

interface Props {
  project: IExperienceProject
}

defineProps<Props>()

const { t } = useI18n({ useScope: 'global' })
</script>