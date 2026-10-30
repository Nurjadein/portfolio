<template>
  <header
    ref="navbarRef"
    class="sticky top-0 z-70 h-20"
  >
    <div
      class="
        absolute left-1/2 top-0 w-full max-w-7xl
        -translate-x-1/2 border-b border-transparent
        bg-surface/70 shadow-none
        backdrop-blur-[10px]
        transition-[backdrop-filter,border-color]
        duration-300 ease-in-out
        md:bg-transparent
      "
      :class="
        isScrolled
          ? 'border-border/50'
          : 'border-transparent'
      "
    >
      <nav class="px-6 py-4">
        <div class="flex items-center justify-between">
          <a
            href="#home"
            :aria-label="t('nav.home')"
            class="text-xl font-bold tracking-wide text-foreground"
            @click="handleNavigation('#home')"
          >
            <AppImage
              :src="siteConfig.logo"
              :alt="siteConfig.name"
              container-class="h-12 w-12 rounded-xl"
              image-class="h-full w-full object-contain"
            />
          </a>

          <ul class="hidden items-center gap-8 md:flex">
            <li v-for="item in navItems" :key="item.href">
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
                    ? 'bg-primary/30 text-foreground'
                    : 'text-foreground-secondary hover:bg-primary/20 hover:text-foreground',
                ]"
                @click="handleNavigation(item.href)"
              >{{ t(item.labelKey) }}</a>
            </li>
          </ul>

          <div class="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <TheButton
              size="sm"
              @click="viewResume"
            >
              {{ t('nav.resume') }}
            </TheButton>
          </div>

          <button
            type="button"
            class="rounded-lg border border-border bg-primary/20 p-2 text-foreground-secondary transition hover:text-foreground md:hidden"
            :aria-expanded="isMenuOpen"
            :aria-label="t('nav.toggleMenu')"
            @click="isMenuOpen = !isMenuOpen"
          >
            <span class="flex h-5 w-5 flex-col justify-between">
              <span
                class="h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300"
                :class="{ 'translate-y-[9px] rotate-45': isMenuOpen }"
              />
              <span
                class="h-0.5 w-full rounded-full bg-current transition-opacity duration-300"
                :class="{ 'opacity-0': isMenuOpen }"
              />
              <span
                class="h-0.5 w-full origin-center rounded-full bg-current transition-transform duration-300"
                :class="{ '-translate-y-[9px] -rotate-45': isMenuOpen }"
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
            max-h-[calc(100dvh-5rem)] overflow-y-auto
            border-t border-border px-6 py-4
            backdrop-blur-xl
            md:hidden
          "
        >
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.href">
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
                    ? 'bg-primary/30 text-foreground'
                    : 'text-foreground-secondary hover:bg-primary/20 hover:text-foreground',
                ]"
                @click="handleNavigation(item.href)"
              >{{ t(item.labelKey) }}</a>
            </li>

            <li>
              <LanguageSwitcher full-width />
            </li>

            <li>
              <ThemeSwitcher full-width />
            </li>

            <li>
              <TheButton
                :href="siteConfig.resume"
                target="_blank"
                rel="noopener noreferrer"
                full-width
                @click="isMenuOpen = false"
              >
                {{ t('nav.resume') }}
              </TheButton>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import {
  useIntersectionObserver,
  useResizeObserver,
  useWindowScroll,
} from '@vueuse/core'

import AppImage from '@/components/common/AppImage.vue'
import LanguageSwitcher from '@/components/common/LanguageSwitcher.vue'
import TheButton from '@/components/common/TheButton.vue'
import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue'
import { useLocale } from '@/composables/useLocale'
import { navItems } from '@/config/nav.config'
import { siteConfig } from '@/config/site.config'
import { dialogBus } from '@/dialogs/core/dialog-bus'
import { onMounted } from 'vue'

const { t } = useLocale()

const isMenuOpen = ref(false)
const activeSection = ref('home')
const navbarRef = ref<HTMLElement | null>(null)

const sections = ref<HTMLElement[]>([])

const SCROLL_THRESHOLD = 8

const getSectionId = (href: string) => href.slice(1)

const { y: scrollY } = useWindowScroll()

const isScrolled = computed(
  () => scrollY.value > SCROLL_THRESHOLD,
)

const handleNavigation = (href: string) => {
  activeSection.value = getSectionId(href)
  isMenuOpen.value = false
}

const rootMargin = ref('0px 0px -80% 0px')

const updateActiveSection = (
  entries: IntersectionObserverEntry[],
) => {
  const visibleEntries = entries.filter(
    (entry) => entry.isIntersecting,
  )

  if (visibleEntries.length === 0) return

  const activeEntry = visibleEntries.reduce((closest, current) => {
    return current.boundingClientRect.top <
      closest.boundingClientRect.top
      ? current
      : closest
  })

  if (activeEntry.target instanceof HTMLElement) {
    activeSection.value = activeEntry.target.id
  }
}

useIntersectionObserver(
  sections,
  updateActiveSection,
  {
    rootMargin,
    threshold: 0,
  },
)

useResizeObserver(navbarRef, ([entry]) => {
  if (!entry) return

  rootMargin.value = `-${entry.contentRect.height}px 0px -80% 0px`
})

const viewResume = () => {
  dialogBus.emit('viewResume', {
    callback: () => {
      console.log('Test Callback')
    },
  })
}


onMounted(() => {
  sections.value = navItems
    .map((item) => document.getElementById(getSectionId(item.href)))
    .filter((section): section is HTMLElement => section !== null)
})
</script>