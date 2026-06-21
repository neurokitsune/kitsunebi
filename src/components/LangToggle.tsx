import { useLang } from '../i18n/LanguageContext'

export default function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className={lang === 'en' ? 'active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={lang === 'be' ? 'active' : ''}
        onClick={() => setLang('be')}
        aria-pressed={lang === 'be'}
      >
        BE
      </button>
    </div>
  )
}
