
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

          <p
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

const { t } = useI18n({ useScope: 'global' })

const highlightItems = [
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
    valueKey: 'about.values.primaryStack',
  },
  {
    labelKey: 'about.highlights.backend',
    valueKey: 'about.values.backend',
  },
] as const
</script>