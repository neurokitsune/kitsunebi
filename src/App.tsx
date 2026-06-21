import { useNav } from './app/navigation'
import WelcomePage from './pages/WelcomePage'
import StylePage from './pages/StylePage'
import SpreadPage from './pages/SpreadPage'
import ReadingPage from './pages/ReadingPage'

export default function App() {
  const { current } = useNav()

  switch (current.name) {
    case 'welcome':
      return <WelcomePage />
    case 'style':
      return <StylePage />
    case 'spread':
      return <SpreadPage />
    case 'reading':
      return <ReadingPage />
    default:
      return <WelcomePage />
  }
}
