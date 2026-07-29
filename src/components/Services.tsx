import { services } from '../content/site'
import './Services.css'

export function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="section-head">
        <h2 id="services-heading">What you get</h2>
        <p>Practical website help for businesses that already talk to customers on Facebook.</p>
      </div>
      <ul className="services__list">
        {services.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
