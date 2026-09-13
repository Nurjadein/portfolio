import type { Component } from 'vue'
import type { ResumeDialogs } from '@/dialogs/features/resume/definition'
import { resumeDialogs } from '@/dialogs/features/resume/dialogs'

type DialogComponent<Payload> =
Payload extends undefined
? Component
    : Component<{
        payload: Payload
      }>

export type AppDialogs = ResumeDialogs

export const dialogRegistry = {
  ...resumeDialogs,
} satisfies {
  [Definition in AppDialogs as Definition['name']]:
    DialogComponent<Definition['payload']>
}