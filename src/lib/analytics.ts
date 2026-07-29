import { site } from '../content/site'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[]
      loaded: boolean
      version: string
      push: (...args: unknown[]) => void
    }
    _fbq?: unknown
  }
}

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
const pixelId = import.meta.env.VITE_META_PIXEL_ID || site.metaPixelId

function loadScript(src: string, id: string) {
  if (document.getElementById(id)) return
  const script = document.createElement('script')
  script.id = id
  script.async = true
  script.src = src
  document.head.appendChild(script)
}

export function initAnalytics() {
  if (gaId) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${gaId}`, 'ga4-script')
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', gaId)
  }

  if (pixelId) {
    if (!window.fbq) {
      const n = function (...args: unknown[]) {
        if (n.callMethod) {
          n.callMethod(...args)
        } else {
          n.queue.push(args)
        }
      } as NonNullable<Window['fbq']>
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      window.fbq = n
      window._fbq = n
      loadScript('https://connect.facebook.net/en_US/fbevents.js', 'meta-pixel-script')
    }
    window.fbq('init', pixelId)
    window.fbq('track', 'PageView')
  }
}

export function trackLead() {
  if (gaId && window.gtag) {
    window.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      event_label: 'contact_form',
    })
  }
  if (pixelId && window.fbq) {
    window.fbq('track', 'Lead')
  }
}
