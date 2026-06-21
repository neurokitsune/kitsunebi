import { useNav } from '../app/navigation'
import { useLang } from '../i18n/LanguageContext'
import LangToggle from '../components/LangToggle'

export default function WelcomePage() {
  const { t } = useLang()
  const { go } = useNav()

  return (
    <div className="page welcome">
      <header className="page-top">
        <LangToggle />
      </header>

      <main className="welcome-main">
        <p className="welcome-eyebrow">{t('welcomeTo')}</p>
        <h1 className="brand">kitsunebi</h1>
        <p className="welcome-sub">{t('oracle')}</p>

        <p className="welcome-intro">{t('intro')}</p>

        <button className="btn-primary" onClick={() => go('style')}>
          {t('start')}
        </button>
      </main>

      <footer className="page-footer">{t('madeBy')}</footer>
    </div>
  )
}
