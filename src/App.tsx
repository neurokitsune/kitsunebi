import { useEffect } from 'react'
import { useNav } from './app/navigation'
import { trackScreen } from './analytics'
import WelcomePage from './pages/WelcomePage'
import SpreadPage from './pages/SpreadPage'
import ReadingPage from './pages/ReadingPage'

export default function App() {
  const { current } = useNav()

  // Event 1 — page/screen visits.
  useEffect(() => {
    trackScreen(current.name)
  }, [current.name])

  switch (current.name) {
    case 'welcome':
      return <WelcomePage />
    case 'spread':
      return <SpreadPage />
    case 'reading':
      return <ReadingPage />
    default:
      return <WelcomePage />
  }
}
