import { workSamples } from '../content/site'
import './Work.css'

export function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <div className="section-head">
        <h2 id="work-heading">Work / samples</h2>
        <p>Placeholders for now — swap in real client or demo sites when ready.</p>
      </div>
      <ul className="work__list">
        {workSamples.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
