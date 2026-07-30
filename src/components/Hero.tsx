import { currentFocus } from '../content/currentFocus'
import { site, travelPhotos } from '../content/site'
import './Hero.css'

const heroPhoto = travelPhotos[0]

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__atmosphere" aria-hidden="true">
        <img
          className="hero__photo"
          src={heroPhoto.src}
          alt=""
          width={1920}
          height={1179}
          fetchPriority="high"
        />
      </div>
      <div className="hero__content">
        <p className="hero__role">{site.role}</p>
        <h1 id="hero-brand" className="hero__brand">
          {site.name}
        </h1>
        <p className="hero__headline">{currentFocus.headline}</p>
        <p className="hero__support">{site.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href={currentFocus.ctaHref}>
            {currentFocus.ctaText}
          </a>
          <a className="btn btn--ghost" href="#focus">
            See current focus
          </a>
        </div>
      </div>
    </section>
  )
}
