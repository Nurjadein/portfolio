import type { DialogDefinition } from '@/dialogs/core/dialog-definition'

export type DialogEventMap<
  Dialogs extends DialogDefinition<string, unknown, unknown>,
> = {
  [Definition in Dialogs as Definition['name']]: {
    payload?: Definition['payload']
    callback?: (result: Definition['result']) => void
  }
}