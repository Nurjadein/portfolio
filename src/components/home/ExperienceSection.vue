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
            text-white
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
            text-slate-400
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
          before:bg-slate-600
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
              border-slate-950
              bg-slate-700
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
                  text-slate-400
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
                  text-white
                "
              >
                {{ experience.role }}
              </h3>

              <p
                class="
                  mt-1
                  text-base
                  text-slate-400
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
                  text-slate-400
                "
              >
                {{ experience.description }}
              </p>
            </div>

            <!-- Projects or contributions -->
            <div class="mt-8 md:mt-0">
              <!-- Projects -->
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
                    border-slate-800
                    bg-slate-900/50
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
                          text-white
                        "
                      >
                        {{ project.name }}
                      </h4>

                      <p
                        v-if="project.status"
                        class="
                          mt-1
                          text-sm
                          text-slate-500
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
                        text-slate-300
                        transition
                        hover:text-white
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
                      text-slate-400
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
                        text-slate-300
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
                          text-slate-400
                        "
                      >
                        <span
                          class="
                            mt-2
                            h-1.5
                            w-1.5
                            shrink-0
                            rounded-full
                            bg-slate-500
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
                        border-slate-700
                        bg-slate-950/50
                        px-3
                        py-1.5
                        text-xs
                        text-slate-300
                      "
                    >
                      {{ technology }}
                    </span>
                  </div>
                </article>
              </div>

              <!-- Contributions for experiences without projects -->
              <div
                v-else-if="experience.contributions?.length"
                class="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-slate-900/50
                  p-6
                  backdrop-blur-sm
                "
              >
                <p
                  class="
                    text-sm
                    font-medium
                    text-slate-300
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
                      text-slate-400
                    "
                  >
                    <span
                      class="
                        mt-2
                        h-1.5
                        w-1.5
                        shrink-0
                        rounded-full
                        bg-slate-500
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