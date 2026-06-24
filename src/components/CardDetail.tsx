import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { cardImageUrl } from '../reading/draw'
import { shareCard, canShareImage } from '../reading/share'
import { track } from '../analytics'
import type { Card } from '../data/types'
import type { UIKey } from '../i18n/translations'

interface Props {
  card: Card
  /** Optional position label key (past / cause / …). */
  position?: UIKey
}

type ShareState = 'idle' | 'busy' | 'saved' | 'error'

export default function CardDetail({ card, position }: Props) {
  const { t, lang, loc } = useLang()
  const [shareState, setShareState] = useState<ShareState>('idle')
  // Only offer Share where the device can open a native share sheet with the
  // image (mobile) — that's where Instagram appears if it's installed.
  const [canShare] = useState(canShareImage)

  async function onShare() {
    if (shareState === 'busy') return
    setShareState('busy')
    track('card_share', { card: card.id }) // Event 7 — share
    try {
      const result = await shareCard(
        card,
        lang,
        { position: position ? t(position) : undefined, madeBy: t('madeBy') },
        t('shareText'),
      )
      // Native share returns to idle; download shows a brief "saved" hint.
      setShareState(result === 'downloaded' ? 'saved' : 'idle')
    } catch (err) {
      // AbortError = user dismissed the share sheet; not a real failure.
      if (err instanceof Error && err.name === 'AbortError') setShareState('idle')
      else setShareState('error')
    }
  }

  const shareLabel =
    shareState === 'busy'
      ? t('sharing')
      : shareState === 'saved'
        ? t('shareSaved')
        : shareState === 'error'
          ? t('shareError')
          : t('share')

  return (
    <div className="detail">
      {position && <p className="detail-position">{t(position)}</p>}

      <img
        className="detail-img"
        src={cardImageUrl(card)}
        alt={loc(card.name)}
        loading="eager"
      />

      <h2 className="detail-name">{loc(card.name)}</h2>

      {/* English equivalent — shown only when it differs from the displayed name. */}
      {lang !== 'en' && (
        <p className="detail-english">
          <span className="detail-english-label">{t('englishName')}:</span>{' '}
          {card.name.en}
        </p>
      )}

      <p className="detail-meaning">{loc(card.meaning)}</p>
      <p className="detail-says">{loc(card.says)}</p>

      {canShare && (
      <button
        className="btn-share"
        onClick={onShare}
        disabled={shareState === 'busy'}
      >
        <svg
          className="btn-share-icon"
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
        </svg>
        {shareLabel}
      </button>
      )}
    </div>
  )
}
