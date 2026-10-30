
<template>
  <section
    id="experience"
    class="py-24"
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
          {{ t('experience.title') }}
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
          {{ t('experience.intro') }}
        </p>
      </div>

      <div
        class="
          relative
          mt-16
          space-y-12
          before:absolute
          before:left-3
          before:top-2
          before:h-[calc(100%-1rem)]
          before:w-px
          before:bg-foreground
          md:before:left-1/2
          md:before:-translate-x-1/2
        "
      >
        <article
          v-for="experience in experiences"
          :key="experience.id"
          class="
            relative
            pl-10
            md:pl-0
          "
        >
          <div
            class="
              absolute
              left-0
              top-2
              h-6
              w-6
              rounded-full
              border-4
              border-foreground
              bg-surface-muted
              md:left-1/2
              md:-translate-x-1/2
            "
            aria-hidden="true"
          />

          <div
            class="
              md:grid
              md:grid-cols-2
              md:gap-12
            "
          >
            <div class="md:text-right">
              <p
                class="
                  text-sm
                  font-medium
                  text-foreground-secondary
                "
                dir="ltr"
              >
                {{ experience.startDate }} —
                {{ experience.endDate }}
              </p>

              <h3
                class="
                  mt-2
                  text-2xl
                  font-semibold
                  text-foreground
                "
              >
                {{ t(experience.role) }}
              </h3>

              <div
                class="
                  mt-3
                  flex
                  items-center
                  gap-3
                  md:flex-row-reverse
                  md:justify-start
                "
              >
                <AppImage
                  v-if="experience.companyLogo"
                  :src="experience.companyLogo.src"
                  :alt="experience.companyLogo.alt"
                  container-class="!mx-0 !w-auto shrink-0"
                  image-class="
                    h-16
                    w-16
                    rounded-xl
                    border
                    border-border
                    bg-white
                    p-2
                    object-contain
                  "
                />

                <p class="text-base text-foreground-secondary">
                  <span dir="auto">
                    {{
                      experience.companyIsTranslationKey
                        ? t(experience.company)
                        : experience.company
                    }}
                  </span>

                  <span aria-hidden="true"> · </span>

                  {{ t(experience.location) }}
                </p>
              </div>

              <p
                v-if="experience.description"
                class="
                  mt-4
                  text-base
                  leading-7
                  text-foreground-secondary
                "
              >
                {{ t(experience.description) }}
              </p>
            </div>

            <div class="mt-8 md:mt-0">
              <div
                v-if="experience.projects?.length"
                class="space-y-6"
              >
                <article
                  v-for="project in experience.projects"
                  :key="project.id"
                  class="
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    p-6
                    backdrop-blur-sm
                  "
                >
                  <AppImage
                    v-if="project.screenshot"
                    :src="project.screenshot.src"
                    :alt="project.screenshot.alt"
                    container-class="!mx-0 !mb-5 !w-full"
                    image-class="
                      aspect-video
                      w-full
                      rounded-xl
                      border
                      border-border
                      object-cover
                      object-top
                    "
                  />

                  <div
                    class="
                      flex
                      flex-col
                      gap-3
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >
                    <div>
                      <h4
                        class="
                          text-xl
                          font-semibold
                          text-foreground
                        "
                        dir="ltr"
                      >
                        {{ project.name }}
                      </h4>

                      <p
                        v-if="project.status"
                        class="
                          mt-1
                          text-sm
                          text-foreground-muted
                        "
                      >
                        {{ t(project.status) }}
                      </p>
                    </div>

                    <TheButton
                      v-if="project.url"
                      :href="project.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="md"
                      class="shrink-0"
                    >
                      {{ t('experience.viewProject') }}

                      <icon
                        name="external-link"
                        size="xs"
                        aria-hidden="true"
                      />
                    </TheButton>
                  </div>

                  <p
                    class="
                      mt-5
                      text-sm
                      leading-7
                      text-foreground-secondary
                    "
                  >
                    {{ t(project.description) }}
                  </p>

                  <div
                    v-if="project.contributions?.length"
                    class="mt-6"
                  >
                    <p
                      class="
                        text-sm
                        font-medium
                        text-foreground-secondary
                      "
                    >
                      {{ t('experience.contributions') }}
                    </p>

                    <ul class="mt-3 space-y-3">
                      <li
                        v-for="contribution in project.contributions"
                        :key="contribution"
                        class="
                          flex
                          gap-3
                          text-sm
                          leading-6
                          text-foreground-secondary
                        "
                      >
                        <span
                          class="
                            mt-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-foreground-muted
                          "
                          aria-hidden="true"
                        />

                        <span>
                          {{ t(contribution) }}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div
                    v-if="project.technologies?.length"
                    class="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    <span
                      v-for="technology in project.technologies"
                      :key="technology"
                      dir="ltr"
                      class="
                        rounded-full
                        border
                        border-border
                        bg-surface-muted
                        px-3
                        py-1.5
                        text-xs
                        text-foreground-secondary
                      "
                    >
                      {{ technology }}
                    </span>
                  </div>
                </article>
              </div>

              <div
                v-else-if="experience.contributions?.length"
                class="
                  rounded-2xl
                  border
                  border-border
                  bg-surface
                  p-6
                  backdrop-blur-sm
                "
              >
                <p
                  class="
                    text-sm
                    font-medium
                    text-foreground-secondary
                  "
                >
                  {{ t('experience.contributions') }}
                </p>

                <ul class="mt-4 space-y-3">
                  <li
                    v-for="contribution in experience.contributions"
                    :key="contribution"
                    class="
                      flex
                      gap-3
                      text-sm
                      leading-6
                      text-foreground-secondary
                    "
                  >
                    <span
                      class="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-foreground-muted
                      "
                      aria-hidden="true"
                    />

                    <span>
                      {{ t(contribution) }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppImage from '@/components/common/AppImage.vue'
import TheButton from '@/components/common/TheButton.vue'
import TheContainer from '@/components/common/TheContainer.vue'
import { experiences } from '@/config/experience.config'

const { t } = useI18n({ useScope: 'global' })
</script>