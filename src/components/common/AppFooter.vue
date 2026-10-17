<template>
  <footer class="border-t border-border bg-surface-muted">
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
        <p class="text-foreground">
          <span dir="ltr">
            © {{ new Date().getFullYear() }} {{ t('hero.name') }}.
          </span>
          {{ t('footer.rightsReserved') }}
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
              text-foreground-secondary
              transition
              hover:text-primary
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
              text-foreground-secondary
              transition
              hover:text-primary
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
              text-foreground-secondary
              transition
              hover:text-primary
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
import { useI18n } from 'vue-i18n'

import TheContainer from '@/components/common/TheContainer.vue'
import SocialIcon from '@/components/common/SocialIcon.vue'
import { socialLinks } from '@/config/social.config'

const { t } = useI18n({ useScope: 'global' })
</script>