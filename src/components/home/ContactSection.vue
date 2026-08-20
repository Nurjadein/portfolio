<template>
  <section
    id="contact"
    class="py-24"
  >
    <TheContainer>
      <div class="text-center">
        <h2
          class="
            text-3xl
            font-bold
            text-white
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
            text-slate-400
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
            rounded-lg
            border
            border-slate-700
            bg-slate-900
            px-6
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:border-slate-600
            hover:bg-slate-800
          "
        >
          Get in touch

          <span
            class="ml-2"
            aria-hidden="true"
          >
            ↗
          </span>
        </a>

        <p
          class="
            mt-4
            text-sm
            text-slate-300
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
            text-sm
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
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue'
import { socialLinks } from '@/config/social.config'
</script>