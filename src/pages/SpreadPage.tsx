import { useNav } from '../app/navigation'
import { useLang } from '../i18n/LanguageContext'
import { track } from '../analytics'
import LangToggle from '../components/LangToggle'
import type { UIKey } from '../i18n/translations'
import type { SpreadKind } from '../reading/spreads'

interface SpreadOption {
  kind: SpreadKind
  title: UIKey
  sub: UIKey
  icon: string
}

const OPTIONS: SpreadOption[] = [
  { kind: 'fate', title: 'spreadFate', sub: 'spreadFateSub', icon: '☾' },
  { kind: 'question', title: 'spreadQuestion', sub: 'spreadQuestionSub', icon: '✦' },
  { kind: 'chance', title: 'spreadChance', sub: 'spreadChanceSub', icon: '✺' },
]

export default function SpreadPage() {
  const { t } = useLang()
  const { go, back } = useNav()

  return (
    <div className="page">
      <header className="page-top">
        <button className="btn-ghost" onClick={back}>
          ← {t('back')}
        </button>
        <LangToggle />
      </header>

      <main className="spread-main">
        <h2 className="style-title">{t('chooseSpread')}</h2>

        <div className="spread-list">
          {OPTIONS.map((opt) => (
            <button
              key={opt.kind}
              className="spread-card"
              onClick={() => {
                track('spread_select', { kind: opt.kind }) // Event 3 — spread option
                go('reading', { kind: opt.kind })
              }}
            >
              <span className="spread-icon" aria-hidden="true">
                {opt.icon}
              </span>
              <span className="spread-text">
                <span className="spread-name">{t(opt.title)}</span>
                <span className="spread-sub">{t(opt.sub)}</span>
              </span>
            </button>
          ))}
        </div>
      </main>

      <footer className="page-footer">{t('madeBy')}</footer>
    </div>
  )
}
