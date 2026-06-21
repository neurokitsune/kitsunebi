import type { UIKey } from '../i18n/translations'

export type SpreadKind = 'fate' | 'question' | 'chance'

export interface SpreadDef {
  kind: SpreadKind
  /** Number of cards drawn (order matters). */
  count: number
  /** Position labels, one per card (empty for a single undirected card). */
  positions: UIKey[]
  /** Whether to ask the user for a question before drawing. */
  asksQuestion: boolean
}

export const SPREADS: Record<SpreadKind, SpreadDef> = {
  fate: {
    kind: 'fate',
    count: 3,
    positions: ['posPast', 'posPresent', 'posFuture'],
    asksQuestion: false,
  },
  question: {
    kind: 'question',
    count: 3,
    positions: ['posCause', 'posAnswer', 'posConsequence'],
    asksQuestion: true,
  },
  chance: {
    kind: 'chance',
    count: 1,
    positions: [],
    asksQuestion: false,
  },
}
