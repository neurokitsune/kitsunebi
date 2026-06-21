export type Lang = 'en' | 'be'

export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles'

/** A localized string: English + Belarusian. */
export type Loc = Record<Lang, string>

export interface Card {
  /** Stable id, e.g. "major-0" or "wands-1". */
  id: string
  arcana: 'major' | 'minor'
  suit: Suit
  /** 0–21 for major; 1–14 for minor (11–14 = Page/Knight/Queen/King). */
  number: number
  /** EN uses the classic tarot name; BE uses the themed Nine-Tails name. */
  name: Loc
  /** The 3–4 line description / meaning. */
  meaning: Loc
  /** The oracle line — "Карта кажа: …" / "The card says: …". */
  says: Loc
  /** Path to the web-ready image, relative to the app base. */
  image: string
}
