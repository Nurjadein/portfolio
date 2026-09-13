<template>
  <Teleport to="body">
    <TransitionGroup name="dialog">
     <component
      v-for="(dialog, index) in dialogs"
      :key="dialog.id"
      :is="dialog.component"
      :payload="dialog.payload"
      :callback="dialog.callback"
      :style="{ zIndex: 100 + index }"
      @close="closeDialog(dialog.id)"
    />
    </TransitionGroup>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from 'vue'
import type { Component } from 'vue'

import type { DialogEventMap } from '@/dialogs/core/dialog-event-map'
import { dialogBus } from '@/dialogs/core/dialog-bus'
import type { AppDialogs } from '@/dialogs/core/dialog-registry'
import { dialogRegistry } from '@/dialogs/core/dialog-registry'

type DialogEvent =
  DialogEventMap<AppDialogs>[keyof DialogEventMap<AppDialogs>]

type DialogInstance = DialogEvent & {
  id: number
  component: Component
}

const dialogs = shallowRef<DialogInstance[]>([])

let nextDialogId = 0

function handleDialog(
  type: keyof DialogEventMap<AppDialogs>,
  event: DialogEventMap<AppDialogs>[typeof type],
) {
  dialogs.value = [
    ...dialogs.value,
    {
      id: nextDialogId++,
      component: dialogRegistry[type],
      ...event,
    },
  ]
}

function closeDialog(id: number) {
  dialogs.value = dialogs.value.filter(
    (dialog) => dialog.id !== id,
  )
}

onMounted(() => {
  dialogBus.on('*', handleDialog)
})

onUnmounted(() => {
  dialogBus.off('*', handleDialog)
})
</script>

<style scoped>
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.2s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}
</style>