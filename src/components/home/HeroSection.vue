<template>
  <section
    id="home"
    class="flex flex-col items-center py-5 text-center"
  >
    <TheContainer>
      <div
        class="hero-reveal"
        style="animation-delay: 150ms"
      >
        <AppImage
          :src="basmalahImage"
          :alt="t('hero.basmalahAlt')"
          container-class="mb-8"
          image-class="h-16 w-auto opacity-90 sm:h-20 md:h-22 lg:h-24"
          loading="eager"
          fetch-priority="high"
        />
      </div>

      <p
        class="hero-reveal text-lg text-foreground-secondary"
        style="animation-delay: 250ms"
      >
        {{ t('hero.greeting') }}
      </p>

      <h1
        class="
          hero-reveal mt-2 bg-linear-to-r
          from-hero-name-start to-hero-name-end
          bg-clip-text text-5xl font-extrabold
          leading-tight tracking-tight text-transparent
          md:text-6xl lg:text-7xl
        "
        style="animation-delay: 350ms"
      >
        <span dir="ltr">{{ t('hero.name') }}</span>
      </h1>

      <p
        class="
          hero-reveal mt-4 text-xl font-medium
          text-foreground md:text-2xl
        "
        style="animation-delay: 450ms"
      >
        {{ t('hero.title') }}
      </p>

      <p
        class="
          hero-reveal mx-auto mt-6 max-w-2xl
          text-foreground-secondary
        "
        style="animation-delay: 550ms"
      >
        {{ t('hero.description') }}
      </p>

      <div
        class="
          hero-reveal mt-8 flex flex-wrap
          justify-center gap-4
        "
        style="animation-delay: 650ms"
      >
        <TheButton href="#experience" size="lg">
          {{ t('hero.experienceButton') }}
        </TheButton>

        <TheButton
          href="#contact"
          variant="outline"
          size="lg"
        >
          {{ t('hero.contactButton') }}
        </TheButton>
      </div>

      <div
        class="
          hero-reveal mt-12 flex flex-wrap
          justify-center gap-3
        "
        style="animation-delay: 750ms"
      >
        <TechnologyBadge
          v-for="technology in heroTechnologies"
          :key="technology.id"
          :label="technology.name"
          :icon="technology.icon"
          dir="ltr"
        />
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import AppImage from '@/components/common/AppImage.vue'
import TheContainer from '@/components/common/TheContainer.vue'
import TheButton from '@/components/common/TheButton.vue'
import TechnologyBadge from '@/components/common/TechnologyBadge.vue'

import BasmalahDark from '@/assets/images/Basmalah-dark.png'
import BasmalahLight from '@/assets/images/Basmalah-light.png'

import { heroTechnologies } from '@/config/technologies.config'
import { useTheme } from '@/composables/useTheme'

const { t } = useI18n({ useScope: 'global' })
const { theme } = useTheme()

const basmalahImage = computed(() => {
  return theme.value === 'dark'
    ? BasmalahLight
    : BasmalahDark
})
</script>