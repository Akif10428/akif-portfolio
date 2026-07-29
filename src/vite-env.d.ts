/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string
  readonly VITE_META_PIXEL_ID?: string
  readonly VITE_RECAPTCHA_SITE_KEY?: string
  readonly VITE_FORMSPREE_ENDPOINT?: string
  readonly VITE_WHATSAPP_NUMBER?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_MESSENGER_HREF?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
