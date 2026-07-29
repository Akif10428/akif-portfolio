import { useEffect, useState } from 'react'
import './PhotoSlider.css'

export type SliderPhoto = {
  src: string
  alt: string
}

type PhotoSliderProps = {
  photos: SliderPhoto[]
  label?: string
  intervalMs?: number
}

export function PhotoSlider({
  photos,
  label = 'Travel landscapes',
  intervalMs = 5000,
}: PhotoSliderProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (photos.length <= 1 || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [photos.length, intervalMs, paused])

  if (photos.length === 0) return null

  const goTo = (next: number) => {
    setIndex((next + photos.length) % photos.length)
  }

  return (
    <div
      className="photo-slider"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false)
        }
      }}
    >
      <div className="photo-slider__viewport">
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className={`photo-slider__slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} />
          </figure>
        ))}
      </div>

      <button
        type="button"
        className="photo-slider__nav photo-slider__nav--prev"
        aria-label="Previous photo"
        onClick={() => goTo(index - 1)}
      >
        ‹
      </button>
      <button
        type="button"
        className="photo-slider__nav photo-slider__nav--next"
        aria-label="Next photo"
        onClick={() => goTo(index + 1)}
      >
        ›
      </button>

      <div className="photo-slider__dots" role="tablist" aria-label="Slide controls">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show photo ${i + 1}`}
            className={`photo-slider__dot${i === index ? ' is-active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  )
}
