<template>
  <section
    id="contact"
    class="py-16"
  >
    <TheContainer>
      <div class="text-center">
        <h2
          class="
            text-3xl
            font-bold
            text-foreground
            md:text-4xl
          "
        >
          Contact
        </h2>

        <p
          class="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-foreground-secondary
          "
        >
          Have an opportunity or a question?
          I'd be happy to hear from you.
        </p>

        <a
          :href="socialLinks.email.url"
          class="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-lg
            border
            border-border
            bg-surface
            px-6
            py-3
            text-sm
            font-medium
            text-foreground
            transition
            hover:border-primary
            hover:bg-surface-muted
          "
        >
          Get in touch

          <SocialIcon
            :icon="socialLinks.email.icon"
            :label="socialLinks.email.label"
          />
        </a>

        <p
          class="
            mt-4
            text-sm
            text-foreground-muted
          "
        >
          {{ socialLinks.email.url.replace('mailto:', '') }}
        </p>

        <div
          class="
            mt-8
            flex
            justify-center
            gap-6
          "
        >
          <a
            :href="socialLinks.github.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="socialLinks.github.label"
            class="
              flex
              items-center
              gap-2
              text-sm
              text-foreground-secondary
              transition
              hover:text-primary
            "
          >
            <SocialIcon
              :icon="socialLinks.github.icon"
              :label="socialLinks.github.label"
            />

            {{ socialLinks.github.label }}
          </a>

          <a
            :href="socialLinks.linkedin.url"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="socialLinks.linkedin.label"
            class="
              flex
              items-center
              gap-2
              text-sm
              text-foreground-secondary
              transition
              hover:text-primary
            "
          >
            <SocialIcon
              :icon="socialLinks.linkedin.icon"
              :label="socialLinks.linkedin.label"
            />

            {{ socialLinks.linkedin.label }}
          </a>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue'
import SocialIcon from '@/components/common/SocialIcon.vue'
import { socialLinks } from '@/config/social.config'
</script>