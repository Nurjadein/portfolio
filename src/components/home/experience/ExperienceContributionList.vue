<template>
  <div>
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
        v-for="(contribution, index) in contributions"
        :key="index"
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Props {
  translationKey: string
}

const props = defineProps<Props>()

const { t, tm, rt } = useI18n({ useScope: 'global' })

const contributions = computed<string[]>(() => {
  const messages: unknown = tm(props.translationKey)

  if (!Array.isArray(messages)) {
    return []
  }

  return messages
    .filter((message): message is string => typeof message === 'string')
    .map((message) => rt(message))
})
</script>