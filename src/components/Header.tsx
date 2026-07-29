import { currentFocus } from '../content/currentFocus'
import { site } from '../content/site'
import './Header.css'

const nav = [
  { href: '#focus', label: 'Focus' },
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why me' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top">
        {site.name}
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="site-header__cta" href={currentFocus.ctaHref}>
        {currentFocus.ctaText}
      </a>
    </header>
  )
}
