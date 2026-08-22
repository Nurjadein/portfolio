<template>
  <header
    ref="navbarRef"
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
            href="#home"
            aria-label="Home"
            class="text-xl font-bold tracking-wide text-white"
          >
            <AppImage
              :src="siteConfig.logo"
              :alt="siteConfig.name"
              container-class="h-12 w-12 rounded-xl"
              image-class="h-full w-full object-contain"
              loading="eager"
            />
          </a>

          <ul class="hidden items-center gap-8 md:flex">
            <li
              v-for="item in navItems"
              :key="item.href"
            >
              <a
                :href="item.href"
                :aria-current="
                  activeSection === getSectionId(item.href)
                    ? 'page'
                    : undefined
                "
                :class="[
                  'rounded-lg px-3 py-2 transition-all duration-300',
                  activeSection === getSectionId(item.href)
                    ? ' bg-indigo-600/30 text-white'
                    : 'text-slate-300 hover:bg-indigo-600/30 hover:text-white',
                ]"
                @click="handleNavigation(item.href)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>

          <a
            :href="siteConfig.resume"
            target="_blank"
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
              bg-indigo-600/30
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
                :aria-current="
                  activeSection === getSectionId(item.href)
                    ? 'page'
                    : undefined
                "
                :class="[
                  'block rounded-lg px-3 py-3 transition',
                  activeSection === getSectionId(item.href)
                    ? 'bg-indigo-600/30 text-white'
                    : 'text-slate-300 hover:bg-indigo-600/30 hover:text-white',
                ]"
                @click="handleNavigation(item.href)"
              >
                {{ item.label }}
              </a>
            </li>

            <li>
              <a
                :href="siteConfig.resume"
                target="_blank"
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
import { onMounted, onUnmounted, ref } from 'vue'
import { siteConfig } from '@/config/site.config'
import { navItems } from '@/config/nav.config'
import AppImage from '@/components/common/AppImage.vue'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const navbarRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null
let resizeObserver: ResizeObserver | null = null

const getSectionId = (href: string) => href.slice(1)

const handleNavigation = (href: string) => {
  activeSection.value = getSectionId(href)
  isMenuOpen.value = false
}

const getSections = () => {
  return navItems
    .map((item) => document.getElementById(getSectionId(item.href)))
    .filter((section): section is HTMLElement => section !== null)
}

const createObserver = () => {
  observer?.disconnect()

  const navbarHeight = navbarRef.value?.getBoundingClientRect().height ?? 0

  observer = new IntersectionObserver(
    (entries) => {
      const activeEntry = entries.find(
        (entry) => entry.isIntersecting,
      )

      if (activeEntry?.target instanceof HTMLElement) {
        activeSection.value = activeEntry.target.id
      }
    },
    {
      root: null,
      rootMargin: `-${navbarHeight}px 0px -80% 0px`,
      threshold: 0,
    },
  )

  getSections().forEach((section) => {
    observer?.observe(section)
  })
}

onMounted(() => {
  createObserver()

  if (navbarRef.value) {
    resizeObserver = new ResizeObserver(() => {
      createObserver()
    })

    resizeObserver.observe(navbarRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
  resizeObserver?.disconnect()

  observer = null
  resizeObserver = null
})
</script>