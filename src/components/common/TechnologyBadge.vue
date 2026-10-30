<template>
  <span
    :dir="dir"
    :class="[
      'inline-flex items-center gap-2 rounded-full border',
      'text-sm text-foreground-secondary',
      'backdrop-blur-sm transition-colors duration-200',
      'hover:border-primary',
      variantClasses,
      sizeClasses,
    ]"
  >
    <span
      v-if="showIcon && icon"
      class="
        inline-flex shrink-0 items-center justify-center
        rounded-lg bg-white p-1 shadow-sm
      "
      :class="iconContainerSize"
    >
      <img
        :src="icon"
        alt=""
        aria-hidden="true"
        class="h-full w-full object-contain"
        loading="lazy"
      />
    </span>

    <span>{{ label }}</span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type BadgeVariant = 'default' | 'subtle' | 'outlined'
type BadgeSize = 'sm' | 'md' | 'lg'
type TextDirection = 'ltr' | 'rtl' | 'auto'

const props = withDefaults(
  defineProps<{
    label: string
    icon?: string
    variant?: BadgeVariant
    size?: BadgeSize
    showIcon?: boolean
    dir?: TextDirection
  }>(),
  {
    icon: undefined,
    variant: 'default',
    size: 'md',
    showIcon: true,
    dir: 'auto',
  },
)

const variantClasses = computed(() => {
  const variants: Record<BadgeVariant, string> = {
    default: 'border-border bg-surface-muted',
    subtle: 'border-transparent bg-surface-muted',
    outlined: 'border-border bg-transparent',
  }

  return variants[props.variant]
})

const sizeClasses = computed(() => {
  const sizes: Record<BadgeSize, string> = {
    sm: 'gap-1.5 px-3 py-1.5 text-xs',
    md: 'gap-2 px-4 py-2 text-sm',
    lg: 'gap-2.5 px-5 py-2.5 text-base',
  }

  return sizes[props.size]
})

const iconContainerSize = computed(() => {
  const sizes: Record<BadgeSize, string> = {
    sm: 'h-5 w-5',
    md: 'h-7 w-7',
    lg: 'h-8 w-8',
  }

  return sizes[props.size]
})
</script>