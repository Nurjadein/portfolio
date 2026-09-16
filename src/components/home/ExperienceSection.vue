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
          Experience
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
          {{ intro }}
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
          before:bg-border
          md:before:left-1/2
          md:before:-translate-x-1/2
        "
      >
        <article
          v-for="experience in experiences"
          :key="`${experience.company}-${experience.role}`"
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
              border-background
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
            <div
              class="
                md:text-right
              "
            >
              <p
                class="
                  text-sm
                  font-medium
                  text-foreground-secondary
                "
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
                {{ experience.role }}
              </h3>

              <p
                class="
                  mt-1
                  text-base
                  text-foreground-secondary
                "
              >
                {{ experience.company }}
                <span aria-hidden="true"> · </span>
                {{ experience.location }}
              </p>

              <p
                v-if="experience.description"
                class="
                  mt-4
                  text-base
                  leading-7
                  text-foreground-secondary
                "
              >
                {{ experience.description }}
              </p>
            </div>

            <div class="mt-8 md:mt-0">
              <div
                v-if="experience.projects?.length"
                class="space-y-6"
              >
                <article
                  v-for="project in experience.projects"
                  :key="project.name"
                  class="
                    rounded-2xl
                    border
                    border-border
                    bg-surface
                    p-6
                    backdrop-blur-sm
                  "
                >
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
                        {{ project.status }}
                      </p>
                    </div>

                    <a
                      v-if="project.url"
                      :href="project.url"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="
                        shrink-0
                        text-sm
                        font-medium
                        text-foreground-secondary
                        transition
                        hover:text-primary
                      "
                    >
                      View project
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>

                  <p
                    class="
                      mt-5
                      text-sm
                      leading-7
                      text-foreground-secondary
                    "
                  >
                    {{ project.description }}
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
                      Contributions
                    </p>

                    <ul
                      class="
                        mt-3
                        space-y-3
                      "
                    >
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

                        <span>{{ contribution }}</span>
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
                  Contributions
                </p>

                <ul
                  class="
                    mt-4
                    space-y-3
                  "
                >
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

                    <span>{{ contribution }}</span>
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
import TheContainer from '@/components/common/TheContainer.vue'
import { experiences, intro } from '@/config/experience.config'
</script>
