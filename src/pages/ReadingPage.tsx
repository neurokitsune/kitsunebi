import { useState } from 'react'
import { useNav } from '../app/navigation'
import { useLang } from '../i18n/LanguageContext'
import LangToggle from '../components/LangToggle'
import CardDetail from '../components/CardDetail'
import { track } from '../analytics'
import { drawCards, cardImageUrl } from '../reading/draw'
import { SPREADS } from '../reading/spreads'
import type { SpreadKind } from '../reading/spreads'
import type { Card } from '../data/types'
import type { UIKey } from '../i18n/translations'

const TITLE: Record<SpreadKind, UIKey> = {
  fate: 'spreadFate',
  question: 'spreadQuestion',
  chance: 'spreadChance',
}

export default function ReadingPage() {
  const { t, loc } = useLang()
  const { current, back } = useNav()

  const kind = (current.params?.kind as SpreadKind) ?? 'chance'
  const def = SPREADS[kind]

  // Draw immediately unless the spread asks a question first.
  const [cards, setCards] = useState<Card[] | null>(() =>
    def.asksQuestion ? null : drawCards(def.count),
  )
  const [question, setQuestion] = useState('')
  const [selected, setSelected] = useState<number | null>(null)

  function draw() {
    setCards(drawCards(def.count))
    setSelected(null)
  }

  // Event 6 — the question the seeker typed (only when non-empty).
  function submitQuestion() {
    const q = question.trim()
    if (q) track('question_asked', { question: q })
    draw()
  }

  function again() {
    track('again_click', { spread: kind }) // Event 5 — Again
    setSelected(null)
    if (def.asksQuestion) {
      setCards(null)
      setQuestion('')
    } else {
      draw()
    }
  }

  const Header = ({ onBack }: { onBack: () => void }) => (
    <header className="page-top">
      <button className="btn-ghost" onClick={onBack}>
        ← {t('back')}
      </button>
      <LangToggle />
    </header>
  )

  // ── Phase: ask a question ────────────────────────────────────────────────
  if (def.asksQuestion && cards === null) {
    return (
      <div className="page reading-page">
        <Header onBack={back} />
        <main className="reading-main reading-ask">
          <h2 className="style-title">{t(TITLE[kind])}</h2>
          <input
            className="question-input"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t('questionPlaceholder')}
            autoFocus
          />
          <button className="btn-primary" onClick={submitQuestion}>
            {t('divine')}
          </button>
        </main>
        <footer className="page-footer">{t('madeBy')}</footer>
      </div>
    )
  }

  const drawn = cards ?? []

  // ── Single card detail (tapped card, or the Chance spread) ───────────────
  const single = kind === 'chance' || selected !== null
  if (single) {
    const index = kind === 'chance' ? 0 : (selected as number)
    const card = drawn[index]
    const position = def.positions[index]
    const onBack = kind === 'chance' ? back : () => setSelected(null)
    return (
      <div className="page reading-page">
        <Header onBack={onBack} />
        <main className="reading-main reading-single">
          {card && <CardDetail card={card} position={position} />}
        </main>
        <footer className="page-footer">{t('madeBy')}</footer>
      </div>
    )
  }

  // ── Multi-card spread (Fate / answered Question) ─────────────────────────
  return (
    <div className="page reading-page">
      <Header onBack={back} />
      <main className="reading-main">
        {kind === 'question' && question.trim() ? (
          <p className="reading-question">«{question.trim()}»</p>
        ) : (
          <h2 className="style-title">{t(TITLE[kind])}</h2>
        )}

        <div className="spread-row">
          {drawn.map((card, i) => (
            <button
              key={card.id}
              className="draw-card"
              onClick={() => {
                // Event 4 — card click
                track('card_open', {
                  card: card.id,
                  position: def.positions[i],
                  spread: kind,
                })
                setSelected(i)
              }}
            >
              <span className="draw-pos">{t(def.positions[i])}</span>
              <img
                className="draw-img"
                src={cardImageUrl(card)}
                alt={loc(card.name)}
                loading="lazy"
              />
              <span className="draw-name">{loc(card.name)}</span>
            </button>
          ))}
        </div>

        <p className="tap-hint">{t('tapHint')}</p>
        <button className="btn-ghost again" onClick={again}>
          ↺ {t('again')}
        </button>
      </main>
      <footer className="page-footer">{t('madeBy')}</footer>
    </div>
  )
}
