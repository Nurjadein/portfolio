<template>
  <a
    v-if="href"
    v-bind="$attrs"
    :href="href"
    :target="target"
    :rel="rel"
    :aria-disabled="disabled ? 'true' : undefined"
    :tabindex="disabled ? -1 : undefined"
    :class="[
      buttonClasses,
      {
        'custom-hover-background': hoverBackground !== undefined,
        'custom-hover-text': hoverTextColor !== undefined,
        'custom-hover-border': hoverBorderColor !== undefined,
      },
    ]"
    :style="buttonStyles"
    @click="handleClick"
  >
    <slot />
  </a>

  <button
    v-else
    v-bind="$attrs"
    :type="type"
    :disabled="disabled"
    :class="[
      buttonClasses,
      {
        'custom-hover-background': hoverBackground !== undefined,
        'custom-hover-text': hoverTextColor !== undefined,
        'custom-hover-border': hoverBorderColor !== undefined,
      },
    ]"
    :style="buttonStyles"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    href?: string
    target?: string
    rel?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: ButtonVariant
    size?: ButtonSize
    disabled?: boolean
    fullWidth?: boolean

    background?: string
    textColor?: string
    borderColor?: string

    hoverBackground?: string
    hoverTextColor?: string
    hoverBorderColor?: string
  }>(),
  {
    type: 'button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
)

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-primary bg-primary text-white hover:bg-primary-hover hover:shadow-md',

  secondary:
    'border border-transparent bg-surface-muted text-foreground hover:bg-primary/10 hover:shadow-sm',

  outline:
    'border border-primary/50 bg-transparent text-foreground hover:bg-primary/20 hover:border-primary hover:shadow-sm',

  ghost:
    'border border-transparent bg-transparent text-foreground-secondary hover:bg-primary/10 hover:text-foreground',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

const buttonClasses = computed(() => [
  'inline-flex items-center justify-center gap-2 rounded-lg',
  'font-medium',
  'transition-all duration-200 ease-out',
  'motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:translate-y-0 motion-reduce:active:scale-100',
  'hover:-translate-y-0.5',
  'active:translate-y-0 active:scale-[0.98]',
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
  'disabled:pointer-events-none disabled:opacity-50',
  variantClasses[props.variant],
  sizeClasses[props.size],
  props.fullWidth ? 'w-full' : '',
  props.disabled && props.href
    ? 'pointer-events-none opacity-50'
    : '',
])

const buttonStyles = computed(() => ({
  backgroundColor: props.background,
  color: props.textColor,
  borderColor: props.borderColor,

  '--button-hover-background': props.hoverBackground,
  '--button-hover-text': props.hoverTextColor,
  '--button-hover-border': props.hoverBorderColor,
}))

function handleClick(event: MouseEvent) {
  if (props.disabled) {
    event.preventDefault()
    return
  }

  emit('click', event)
}
</script>

<style scoped>
.custom-hover-background:hover {
  background-color: var(--button-hover-background) !important;
}

.custom-hover-text:hover {
  color: var(--button-hover-text) !important;
}

.custom-hover-border:hover {
  border-color: var(--button-hover-border) !important;
}
</style>