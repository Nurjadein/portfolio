<template>
  <section
    id="home"
    class="
      flex
      flex-col
      items-center
      py-5
      text-center
    "
  >
    <TheContainer>
      <div
        class="hero-reveal"
        style="animation-delay: 150ms"
      >
        <AppImage
          :src="basmalahImage"
          alt="Bismillah"
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
        {{ heroData.greeting }}
      </p>

      <h1
        class="
          hero-reveal
          mt-2
          bg-linear-to-r
          from-hero-name-start
          to-hero-name-end
          bg-clip-text
          text-5xl
          font-extrabold
          leading-tight
          tracking-tight
          text-transparent
          md:text-6xl
          lg:text-7xl
        "
        style="animation-delay: 350ms"
      >
        {{ heroData.name }}
      </h1>

      <p
        class="
          hero-reveal
          mt-4
          text-xl
          font-medium
          text-foreground
          md:text-2xl
        "
        style="animation-delay: 450ms"
      >
        {{ heroData.title }}
      </p>

      <p
        class="
          hero-reveal
          mx-auto
          mt-6
          max-w-2xl
          text-foreground-secondary
        "
        style="animation-delay: 550ms"
      >
        {{ heroData.description }}
      </p>

      <div
        class="
          hero-reveal
          mt-8
          flex
          flex-wrap
          justify-center
          gap-4
        "
        style="animation-delay: 650ms"
      >
        <a
          href="#experience"
          class="
            rounded-lg
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-primary-hover
          "
        >
          {{ heroData.experienceButtonText }}
        </a>

        <a
          href="#contact"
          class="
            rounded-lg
            border
            border-primary
            bg-transparent
            px-6
            py-3
            font-medium
            text-foreground
            transition
            hover:text-primary
          "
        >
          {{ heroData.contactButtonText }}
        </a>
      </div>

      <div
        class="
          hero-reveal
          mt-12
          flex
          flex-wrap
          justify-center
          gap-3
        "
        style="animation-delay: 750ms"
      >
        <span
          v-for="technology in heroData.technologies"
          :key="technology"
          class="
            rounded-full
            border
            border-border
            bg-surface-muted
            px-4
            py-2
            text-sm
            text-foreground-secondary
            backdrop-blur-sm
          "
        >
          {{ technology }}
        </span>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import AppImage from '@/components/common/AppImage.vue'
import TheContainer from '@/components/common/TheContainer.vue'
import BasmalahDark from '@/assets/images/Basmalah-dark.png'
import BasmalahLight from '@/assets/images/Basmalah-light.png'
import { heroData } from '@/config/hero.config'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()

const basmalahImage = computed(() => {
  return theme.value === 'dark'
    ? BasmalahLight
    : BasmalahDark
})
</script>