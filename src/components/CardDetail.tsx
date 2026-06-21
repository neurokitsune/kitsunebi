import { useLang } from '../i18n/LanguageContext'
import { cardImageUrl } from '../reading/draw'
import type { Card } from '../data/types'
import type { UIKey } from '../i18n/translations'

interface Props {
  card: Card
  /** Optional position label key (past / cause / …). */
  position?: UIKey
}

export default function CardDetail({ card, position }: Props) {
  const { t, lang, loc } = useLang()

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
    </div>
  )
}
