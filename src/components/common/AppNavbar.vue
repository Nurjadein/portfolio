<template>
  <header
    class="
      sticky
      top-0
      z-70
      h-20
    "
  >
    <div
      class="
        absolute
        left-1/2
        top-0
        w-full
        max-w-7xl
        -translate-x-1/2
        border
        border-slate-800/70
        bg-slate-900/40
        backdrop-blur-sm
      "
    >
      <nav class="px-6 py-4">
        <div class="flex items-center justify-between">
          <a
            href="#"
            class="text-xl font-bold tracking-wide text-white"
          >
            <img
              :src="siteConfig.logo"
              :alt="siteConfig.name"
              class="h-12 w-12 rounded-xl"
            />
          </a>

          <ul class="hidden items-center gap-8 md:flex">
            <li
              v-for="item in navItems"
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
            class="
              hidden
              rounded-lg
              bg-violet-600
              px-4
              py-2
              font-medium
              text-white
              transition
              hover:bg-violet-500
              md:block
            "
          >
            Resume
          </a>

          <button
            type="button"
            class="
              rounded-lg
              border
              border-slate-700
              p-2
              text-slate-300
              transition
              hover:bg-slate-800
              hover:text-white
              md:hidden
            "
            :aria-expanded="isMenuOpen"
            aria-label="Toggle navigation menu"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span
              class="
                flex
                h-5
                w-5
                flex-col
                justify-between
              "
            >
              <span
                class="
                  h-0.5
                  w-full
                  origin-center
                  rounded-full
                  bg-current
                  transition-transform
                  duration-300
                "
                :class="{
                  'translate-y-[9px] rotate-45': isMenuOpen,
                }"
              />

              <span
                class="
                  h-0.5
                  w-full
                  rounded-full
                  bg-current
                  transition-opacity
                  duration-300
                "
                :class="{
                  'opacity-0': isMenuOpen,
                }"
              />

              <span
                class="
                  h-0.5
                  w-full
                  origin-center
                  rounded-full
                  bg-current
                  transition-transform
                  duration-300
                "
                :class="{
                  '-translate-y-[9px] -rotate-45': isMenuOpen,
                }"
              />
            </span>
          </button>
        </div>
      </nav>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-96 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="max-h-96 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="isMenuOpen"
          class="
            overflow-hidden
            border-t
            border-slate-800/70
            px-6
            py-4
            md:hidden
          "
        >
          <ul class="space-y-2">
            <li
              v-for="item in navItems"
              :key="item.href"
            >
              <a
                :href="item.href"
                class="
                  block
                  rounded-lg
                  px-3
                  py-3
                  text-slate-300
                  transition
                  hover:bg-slate-800
                  hover:text-violet-400
                "
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </a>
            </li>

            <li>
              <a
                href="#"
                class="
                  block
                  rounded-lg
                  bg-violet-600
                  px-3
                  py-3
                  text-center
                  font-medium
                  text-white
                  transition
                  hover:bg-violet-500
                "
                @click="isMenuOpen = false"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { siteConfig } from '@/config/site.config'
import { navItems } from '@/config/nav.config'

const isMenuOpen = ref(false)
</script>