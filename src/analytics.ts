// Vendor-agnostic analytics. Each track() call is forwarded to whichever
// analytics script happens to be loaded on the page (Umami, Plausible, GA4,
// or PostHog). If none is loaded it no-ops (and logs in dev), so the app
// works identically with or without analytics configured.
//
// To enable: add ONE provider snippet to index.html. No app code changes needed.

type Props = Record<string, string | number | boolean | undefined>

interface AnalyticsWindow {
  umami?: { track: (event: string, props?: Props) => void }
  plausible?: (event: string, opts?: { props?: Props }) => void
  posthog?: { capture: (event: string, props?: Props) => void }
  gtag?: (command: string, event: string, props?: Props) => void
}

export function track(event: string, props?: Props): void {
  try {
    const w = window as unknown as AnalyticsWindow
    if (typeof w.umami?.track === 'function') {
      w.umami.track(event, props)
    } else if (typeof w.plausible === 'function') {
      w.plausible(event, props ? { props } : undefined)
    } else if (typeof w.posthog?.capture === 'function') {
      w.posthog.capture(event, props)
    } else if (typeof w.gtag === 'function') {
      w.gtag('event', event, props)
    } else if (import.meta.env.DEV) {
      console.debug('[analytics]', event, props ?? {})
    }
  } catch {
    // Analytics must never break the app.
  }
}

/** A view of one of the in-memory screens (welcome / spread / reading). */
export function trackScreen(screen: string): void {
  track('screen_view', { screen })
}
