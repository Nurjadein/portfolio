<template>
  <footer
    class="border-t border-slate-800 bg-slate-900/40"
  >
    <TheContainer>
      <div
        class="
          flex
          flex-col
          items-center
          justify-between
          gap-4
          py-8
          text-sm
          md:flex-row
        "
      >
        <p class="text-slate-400">
          © {{ new Date().getFullYear() }} {{heroData.name}}
          All rights reserved.
        </p>

        <div
          class="
            flex
            items-center
            gap-6
          "
        >
          <a
            :href="socialLinks.github.url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              text-slate-400
              transition
              hover:text-white
            "
          >
            {{ socialLinks.github.label }}
          </a>

          <a
            :href="socialLinks.linkedin.url"
            target="_blank"
            rel="noopener noreferrer"
            class="
              text-slate-400
              transition
              hover:text-white
            "
          >
            {{ socialLinks.linkedin.label }}
          </a>
        </div>
      </div>
    </TheContainer>
  </footer>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue'
import { socialLinks } from '@/config/social.config'
import { heroData } from '@/config/hero.config';

</script>