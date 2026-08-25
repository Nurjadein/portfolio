import type { DialogDefinition } from '@/dialogs/core/dialog-definition'

export type DialogEventMap<
  Definitions extends DialogDefinition<string, unknown, unknown>,
> = {
  [Definition in Definitions as Definition['name']]:
    Definition['payload']
}