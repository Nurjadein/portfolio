import mitt from 'mitt'

import type { AppDialogs } from './dialog-registry'
import type { DialogEventMap } from './dialog-event-map'

const bus = mitt<DialogEventMap<AppDialogs>>()

export const dialogBus = bus