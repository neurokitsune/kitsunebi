import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

// In-memory navigation. The app is split into screens internally, but there is
// only ONE route — nothing is written to the URL. A page reload therefore always
// drops the user back on the first screen (welcome). Back navigation works via an
// in-memory stack.

export type ScreenName = 'welcome' | 'spread' | 'reading'

export interface Screen {
  name: ScreenName
  /** Per-screen params, e.g. the chosen card style. */
  params?: Record<string, unknown>
}

interface NavValue {
  current: Screen
  canGoBack: boolean
  /** Push a new screen onto the stack. */
  go: (name: ScreenName, params?: Screen['params']) => void
  /** Pop back to the previous screen. */
  back: () => void
  /** Clear the stack and return to the first screen. */
  reset: () => void
}

const NavContext = createContext<NavValue | null>(null)

const ROOT: Screen = { name: 'welcome' }

export function NavProvider({ children }: { children: ReactNode }) {
  const [stack, setStack] = useState<Screen[]>([ROOT])

  const go = useCallback((name: ScreenName, params?: Screen['params']) => {
    setStack((s) => [...s, { name, params }])
  }, [])

  const back = useCallback(() => {
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : s))
  }, [])

  const reset = useCallback(() => setStack([ROOT]), [])

  const value = useMemo<NavValue>(
    () => ({
      current: stack[stack.length - 1],
      canGoBack: stack.length > 1,
      go,
      back,
      reset,
    }),
    [stack, go, back, reset],
  )

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}

export function useNav(): NavValue {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavProvider')
  return ctx
}
