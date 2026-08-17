<template>
  <div
    :class="[
      'mx-auto w-full px-4 sm:px-6 lg:px-8',
      maxWidthClass,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface IProps {
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(
  defineProps<IProps>(),
  {
    size: 'lg',
  },
);

const maxWidthClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-4xl';

    case 'md':
      return 'max-w-5xl';

    default:
      return 'max-w-7xl';
  }
});
</script>