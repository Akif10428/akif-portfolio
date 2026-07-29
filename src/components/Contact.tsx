import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { site } from '../content/site'
import { trackLead } from '../lib/analytics'
import './Contact.css'

const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
const recaptchaSiteKey =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) || site.recaptchaSiteKey
const whatsappNumber =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || site.whatsapp
const contactEmail =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || site.email

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function Contact() {
  const captchaRef = useRef<ReCAPTCHA>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    const form = event.currentTarget
    const captchaToken = captchaRef.current?.getValue()

    if (recaptchaSiteKey && !captchaToken) {
      setStatus('error')
      setErrorMessage('Please complete the reCAPTCHA checkbox.')
      return
    }

    if (!formspreeEndpoint) {
      setStatus('error')
      setErrorMessage(
        'Form endpoint is not configured yet. Set VITE_FORMSPREE_ENDPOINT in your .env file, or message me on WhatsApp.',
      )
      return
    }

    const data = new FormData(form)
    if (captchaToken) {
      data.set('g-recaptcha-response', captchaToken)
    }

    setStatus('submitting')

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      trackLead()
      setStatus('success')
      form.reset()
      captchaRef.current?.reset()
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again or reach out on WhatsApp.')
      captchaRef.current?.reset()
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__grid">
        <div className="contact__intro">
          <h2 id="contact-heading">Let’s talk about your website</h2>
          <p>
            Tell me about your business and Facebook Page. I’ll reply with next steps for a
            practical site that helps customers find and contact you.
          </p>
          <ul className="contact__details">
            <li>
              <span>Email</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </li>
            <li>
              <span>WhatsApp</span>
              <a href={whatsappHref} target="_blank" rel="noreferrer">
                {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <span>Address</span>
              <address>{site.address}</address>
            </li>
          </ul>
          <div className="contact__alt">
            <a className="btn btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" />
          </label>
          <label>
            Business name
            <input name="business" type="text" required autoComplete="organization" />
          </label>
          <label>
            Phone or email
            <input name="reply_to" type="text" required autoComplete="email" />
          </label>
          <label>
            What do you need?
            <textarea name="message" rows={4} required placeholder="Website for my Facebook business…" />
          </label>

          {recaptchaSiteKey ? (
            <div className="contact__captcha">
              <ReCAPTCHA ref={captchaRef} sitekey={recaptchaSiteKey} theme="light" />
            </div>
          ) : (
            <p className="contact__hint">
              Add <code>VITE_RECAPTCHA_SITE_KEY</code> to enable Google reCAPTCHA v2.
            </p>
          )}

          <button className="btn btn--primary" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
          </button>

          {status === 'success' ? (
            <p className="contact__status contact__status--ok" role="status">
              Thanks — your message was sent. I’ll get back to you soon.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="contact__status contact__status--err" role="alert">
              {errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}
