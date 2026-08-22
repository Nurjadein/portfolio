<template>
  <section id="home" class="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center text-center">
 <TheContainer>
      <AppImage
        :src="Basmalah"
        alt="Bismillah"
        container-class="mb-12"
        image-class="h-auto max-w-xs opacity-90 md:max-w-sm"
        loading="eager"
        fetch-priority="high"
      />
      <p class="text-lg text-slate-400">
        {{ heroData.greeting }}
      </p>

      <h1
        class="
          mt-2
          bg-linear-to-r
          from-violet-400
          to-indigo-500
          bg-clip-text
          text-5xl
          font-extrabold
          text-transparent
          md:text-6xl
          lg:text-7xl
          leading-tight
        "
      >
        {{ heroData.name }}
      </h1>

      <p
        class="
          mt-4
          text-xl
          font-medium
          text-slate-300
          md:text-2xl
        "
      >
        {{ heroData.title }}
      </p>

      <p
        class="
          mx-auto
          mt-6
          max-w-2xl
          text-slate-400
        "
      >
        {{ heroData.description }}
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          class="
            rounded-lg
            bg-violet-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-violet-500
          "
        >
          {{ heroData.projectsButtonText }}
        </a>

        <a
          href="#contact"
          class="
            rounded-lg
            border
            border-slate-700
            px-6
            py-3
            font-medium
            text-slate-200
            transition
            hover:border-violet-500
            hover:text-white
          "
        >
          {{ heroData.contactButtonText }}
        </a>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-3">
        <span
          v-for="technology in heroData.technologies"
          :key="technology"
          class="
            rounded-full
            border
            border-slate-800
            bg-slate-900/60
            px-4
            py-2
            text-sm
            text-slate-300
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
import Basmalah from '@/assets/Basmalah.png';
import { heroData } from '@/config/hero.config';
import TheContainer from '@/components/common/TheContainer.vue';
import AppImage from '@/components/common/AppImage.vue'
</script>