import { whyMe } from '../content/site'
import './WhyMe.css'

export function WhyMe() {
  return (
    <section className="why-me" id="why" aria-labelledby="why-heading">
      <div className="section-head">
        <h2 id="why-heading">Why work with me</h2>
        <p>Quality leadership experience applied to websites that need to convert.</p>
      </div>
      <ul className="why-me__list">
        {whyMe.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
