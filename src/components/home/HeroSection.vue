<template>
<section
    class="flex min-h-screen flex-col items-center justify-center px-6 text-center"
    id="hero"
  >
    <p class="text-lg text-slate-400">
      {{ data.greeting }}
    </p>
    <h1 class="text-5xl font-bold">
      {{ data.name }}
    </h1>

    <p class="mt-4 text-xl text-slate-300">
      {{ data.title }}
    </p>

    <p class="mt-6 max-w-2xl text-slate-400">
      {{ data.description }}
    </p>

    <div class="mt-8">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ buttonLabels.contact }}
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {{ buttonLabels.view }}
      </button>
    </div>
  </section>
</template>
<script setup lang="ts">
const data = {
      greeting: 'Hello, I am',
      name: 'Nurjadein Abdulmorid',
      title: 'Frontend Developer',
      description:
        'Building scalable web applications using Vue.js, TypeScript, Quasar, Tailwind CSS, NestJS, and modern development practices.',
  };

const buttonLabels = {
    contact: 'Contact Me',
    view: 'View Projects',
};
</script>