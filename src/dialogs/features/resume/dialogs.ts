import type { Component } from 'vue'

import ResumeDialog from './ResumeDialog.vue'
import type { ResumeDialogs } from './definition'

export const resumeDialogs = {
  viewResume: ResumeDialog,
} satisfies {
  [Definition in ResumeDialogs as Definition['name']]: Component
}