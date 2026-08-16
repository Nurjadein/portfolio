<template>
  <section
    class="flex flex-col items-center justify-center px-6 py-6 text-center"
  >
    <p class="text-lg text-slate-400">
      {{ hero.greeting }}
    </p>

    <h1
      class="mt-2 bg-linear-to-r from-violet-400 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent md:text-7xl lg:text-8xl"
    >
      {{ hero.name }}
    </h1>

    <p class="mt-4 text-xl font-medium text-slate-300 md:text-2xl">
      {{ hero.title }}
    </p>

    <p class="mt-6 max-w-2xl text-slate-400">
      {{ hero.description }}
    </p>

    <div class="mt-8 flex flex-wrap justify-center gap-4">
      <a
        href="#projects"
        class="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-500"
      >
        {{ hero.projectsButtonText }}
      </a>

      <a
        href="#contact"
        class="rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-200 transition hover:border-violet-500 hover:text-white"
      >
        {{ hero.contactButtonText }}
      </a>
    </div>

    <div class="mt-10 flex flex-wrap justify-center gap-3">
      <span
        v-for="technology in hero.technologies"
        :key="technology"
        class="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
      >
        {{ technology }}
      </span>
    </div>
  </section>
</template>
<script setup lang="ts">
import type { IHeroData } from '@/interfaces/hero.interface';

const hero: IHeroData = {
  greeting: 'Hello, I am',
  name: 'Nurjadein Abdulmorid',
  title: 'Frontend Developer',
  description:
    'Building scalable web applications using Vue.js, TypeScript, Quasar, Tailwind CSS, NestJS, and modern development practices.',
  contactButtonText: 'Contact Me',
  projectsButtonText: 'View Projects',
  technologies: [
    'Vue.js',
    'TypeScript',
    'Quasar',
    'Tailwind CSS',
    'NestJS',
    'MySQL',
  ],
}
</script>