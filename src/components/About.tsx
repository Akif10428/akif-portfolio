import { about, site, travelPhotos } from '../content/site'
import { PhotoSlider } from './PhotoSlider'
import './About.css'

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about__layout">
        <div className="about__inner">
          <h2 id="about-heading">{about.title}</h2>
          {about.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <ul className="about__hobbies" aria-label="Hobbies">
            {about.hobbies.map((hobby) => (
              <li key={hobby}>{hobby}</li>
            ))}
          </ul>
        </div>
        <figure className="about__portrait-wrap">
          <img
            className="about__portrait"
            src={site.portrait}
            alt={`${site.name} portrait`}
            width={480}
            height={600}
          />
        </figure>
      </div>
      <PhotoSlider photos={travelPhotos} label="Travel landscapes by Akif Hossen" />
    </section>
  )
}
