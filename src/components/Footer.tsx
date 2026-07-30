import { site } from '../content/site'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <p className="site-footer__brand">{site.name}</p>
        <p className="site-footer__meta">
          © {year} AIT
        </p>
      </div>
      <div className="site-footer__contact">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp {site.whatsappDisplay}
        </a>
        <p>{site.address}</p>
      </div>
    </footer>
  )
}
