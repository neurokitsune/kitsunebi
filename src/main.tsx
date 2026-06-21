import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n/LanguageContext'
import { NavProvider } from './app/navigation'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <NavProvider>
        <App />
      </NavProvider>
    </LanguageProvider>
  </StrictMode>,
)
