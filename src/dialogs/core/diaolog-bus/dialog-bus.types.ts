import type { DialogDefinition } from '@/dialogs/core/dialog-definition';
import type { DialogEventMap } from '@/dialogs/core/dialog-event-map';

export type DialogBus<
  Definitions extends DialogDefinition<string, unknown, unknown>,
> = {
  on<Name extends keyof DialogEventMap<Definitions>>(
    name: Name,
    handler: (payload: DialogEventMap<Definitions>[Name]) => void,
  ): void

  off<Name extends keyof DialogEventMap<Definitions>>(
    name: Name,
    handler: (payload: DialogEventMap<Definitions>[Name]) => void,
  ): void

  emit<Name extends keyof DialogEventMap<Definitions>>(
    name: Name,
    payload: DialogEventMap<Definitions>[Name],
  ): void
}