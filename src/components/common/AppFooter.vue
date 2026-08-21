<template>
  <footer class="border-t border-slate-800 bg-slate-900/40">
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
        <p class="text-slate-300">
          © {{ new Date().getFullYear() }} {{ heroData.name }}.
          All rights reserved.
        </p>

        <div
          class="
            flex
            items-center
            gap-5
          "
        >
          <a
            :href="socialLinks.github.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="socialLinks.github.label"
            class="
              text-slate-400
              transition
              hover:text-white
            "
          >
            <SocialIcon
                :icon="socialLinks.github.icon"
                :label="socialLinks.github.label"
            />
          </a>

          <a
            :href="socialLinks.linkedin.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="socialLinks.linkedin.label"
            class="
              text-slate-400
              transition
              hover:text-white
            "
          >
            <SocialIcon
                :icon="socialLinks.linkedin.icon"
                :label="socialLinks.linkedin.label"
            />
          </a>

          <a
            :href="socialLinks.email.url"
            :aria-label="socialLinks.email.label"
            class="
              text-slate-400
              transition
              hover:text-white
            "
          >
            <SocialIcon
                :icon="socialLinks.email.icon"
                :label="socialLinks.email.label"
            />
          </a>
        </div>
      </div>
    </TheContainer>
  </footer>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue'
import { heroData } from '@/config/hero.config'
import { socialLinks } from '@/config/social.config'
import SocialIcon from '@/components/common/SocialIcon.vue'
</script>