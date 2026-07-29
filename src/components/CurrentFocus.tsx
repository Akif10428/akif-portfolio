import { currentFocus } from '../content/currentFocus'
import './CurrentFocus.css'

export function CurrentFocus() {
  return (
    <section className="current-focus" id="focus" aria-labelledby="focus-heading">
      <div className="current-focus__inner">
        <p className="current-focus__label">
          {currentFocus.label}
          <span aria-hidden="true"> · </span>
          <time dateTime="2026-07">Updated {currentFocus.updatedAt}</time>
        </p>
        <h2 id="focus-heading" className="current-focus__headline">
          {currentFocus.headline}
        </h2>
        <p className="current-focus__audience">
          <strong>Who I’m helping now:</strong> {currentFocus.audience}
        </p>
        <p className="current-focus__summary">{currentFocus.summary}</p>
        <a className="btn btn--primary" href={currentFocus.ctaHref}>
          {currentFocus.ctaText}
        </a>
      </div>
    </section>
  )
}
