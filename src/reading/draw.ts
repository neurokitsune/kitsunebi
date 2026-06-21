import { DECK } from '../data/cards'
import type { Card } from '../data/types'

/** Draw `n` distinct cards from the deck in random order (order matters). */
export function drawCards(n: number): Card[] {
  const pool = [...DECK]
  // Fisher–Yates shuffle, then take the first n.
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, n)
}

/** Resolve a card image path against the app base (GitHub Pages subpath safe). */
export function cardImageUrl(card: Card): string {
  return import.meta.env.BASE_URL + card.image
}
