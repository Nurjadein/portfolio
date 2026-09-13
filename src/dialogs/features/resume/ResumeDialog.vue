<template>
  <BaseDialog
    title="Nurjadein's Resume"
    width="90vw"
    height="90vh"
    @close="handleClose"
  >
    <iframe
      :src="resumeUrl"
      title="Nurjadein's Resume"
      class="h-full w-full border-0"
    />
  </BaseDialog>
</template>

<script setup lang="ts">
import BaseDialog from '@/dialogs/core/BaseDialog.vue'
import resumeUrl from '@/assets/my-cv.pdf'

const props = defineProps<{
  callback?: () => void
}>()

const emit = defineEmits<{
  close: []
}>()

function handleClose() {
  props.callback?.()
  emit('close')
}
</script>
