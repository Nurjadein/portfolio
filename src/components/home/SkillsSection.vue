<template>
  <section
    id="skills"
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
          {{ skillsData.title }}
        </h2>
      </div>

      <div
        class="
          mt-16
          grid
          gap-6
          md:grid-cols-2
        "
      >
        <div
          v-for="category in skillsData.categories"
          :key="category.title"
          class="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/50
            p-6
            backdrop-blur-sm
          "
        >
          <h3
            class="
              text-xl
              font-semibold
              text-white
            "
          >
            {{ category.title }}
          </h3>

          <div
            class="
              mt-6
              flex
              flex-wrap
              gap-3
            "
          >
            <span
              v-for="skill in category.skills"
              :key="skill"
              class="
                rounded-full
                border
                border-slate-700
                bg-slate-950/50
                px-4
                py-2
                text-sm
                text-slate-300
              "
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/common/TheContainer.vue';
import { skillsData } from '@/config/skills.config';
</script>