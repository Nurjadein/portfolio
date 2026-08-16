<template>
  <div
    :class="[
      'mx-auto w-full px-6',
      maxWidthClass,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  size?: 'md' | 'lg' | 'xl';
}

const props = withDefaults(
  defineProps<IProps>(),
  {
    size: 'xl',
  },
);

const maxWidthClass = computed(() => {
  switch (props.size) {
    case 'md':
      return 'max-w-4xl';

    case 'lg':
      return 'max-w-5xl';

    default:
      return 'max-w-7xl';
  }
});
</script>