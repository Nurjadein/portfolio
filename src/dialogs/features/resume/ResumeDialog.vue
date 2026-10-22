<template>
  <BaseDialog
    :title="t('resume.title')"
    width="90vw"
    height="90vh"
    @close="handleClose"
  >
    <iframe
      :src="resumeUrl"
      :title="t('resume.title')"
      class="h-full w-full border-0"
    />
  </BaseDialog>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import BaseDialog from '@/dialogs/core/BaseDialog.vue'
import resumeUrl from '@/assets/documents/my-cv.pdf'

const { t } = useI18n({ useScope: 'global' })

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