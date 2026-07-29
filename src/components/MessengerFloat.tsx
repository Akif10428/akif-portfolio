import { site } from '../content/site'
import './MessengerFloat.css'

function messengerHref() {
  const fromEnv = import.meta.env.VITE_MESSENGER_HREF as string | undefined
  if (fromEnv) return fromEnv

  if (site.facebookMessengerHref) return site.facebookMessengerHref

  if (site.facebookProfileUsername) {
    // Opens Messenger to a personal profile (or Page) conversation
    return `https://m.me/${site.facebookProfileUsername}`
  }

  return undefined
}

export function MessengerFloat() {
  const href = messengerHref()
  if (!href) return null

  return (
    <a
      className="messenger-float"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on Messenger"
      title="Chat on Messenger"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M16 2C8.3 2 2 7.9 2 15.2c0 4.1 2 7.8 5.2 10.3V30l4.8-2.6c1.3.4 2.6.5 3.9.5 7.7 0 14-5.9 14-13.2S23.7 2 16 2zm1.4 17.8l-3.6-3.8-7 3.8 7.7-8.2 3.7 3.8 6.9-3.8-7.7 8.2z"
        />
      </svg>
      <span>Messenger</span>
    </a>
  )
}
