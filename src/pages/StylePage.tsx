import { useNav } from '../app/navigation'
import { useLang } from '../i18n/LanguageContext'
import LangToggle from '../components/LangToggle'

export default function StylePage() {
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

      <main className="style-main">
        <h2 className="style-title">{t('chooseStyle')}</h2>

        <div className="style-list">
          <button
            className="style-card"
            onClick={() => go('spread', { style: 'etteilla' })}
          >
            <span className="style-name">Etteilla</span>
          </button>

          <button className="style-card locked" disabled aria-disabled="true">
            <span className="style-lock" aria-hidden="true">🔒</span>
            <span className="style-name">Marseille</span>
            <span className="style-badge">{t('locked')}</span>
          </button>
        </div>
      </main>

      <footer className="page-footer">{t('madeBy')}</footer>
    </div>
  )
}
