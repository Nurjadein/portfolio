<template>
  <header class="sticky top-0 z-50 px-6 py-4">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800/50 bg-slate-900/50 px-6 py-4 backdrop-blur-md"
    >
      <a
        href="#"
        class="text-xl font-bold tracking-wide text-white"
      >
        <img
          :src="siteConfig.logo"
          :alt="siteConfig.name"
          class="h-10 w-10 rounded-xl"
        />
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li
          v-for="item in navItem"
          :key="item.href"
        >
          <a
            :href="item.href"
            class="
              rounded-lg
              px-3
              py-2
              text-slate-300
              transition-all
              duration-300
              hover:bg-slate-800
              hover:text-violet-400
            "
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <a
        href="#"
        class="rounded-lg bg-violet-600 px-4 py-2 font-medium text-white transition hover:bg-violet-500"
      >
        Resume
      </a>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { siteConfig } from '@/config/site.config';
import type { INavItem } from '@/interfaces/nav.interface';

const navItem: INavItem[] = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
</script>