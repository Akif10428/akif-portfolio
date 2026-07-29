import { useRef, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import ReCAPTCHA from 'react-google-recaptcha'
import { site } from '../content/site'
import { trackLead } from '../lib/analytics'
import './Contact.css'

const FORMSPREE_ID = 'xwvgzkkl'
const recaptchaSiteKey =
  (import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined) || site.recaptchaSiteKey
const whatsappNumber =
  (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || site.whatsapp
const contactEmail =
  (import.meta.env.VITE_CONTACT_EMAIL as string | undefined) || site.email

export function Contact() {
  const [state, handleFormspreeSubmit] = useForm(FORMSPREE_ID)
  const captchaRef = useRef<ReCAPTCHA>(null)
  const [captchaError, setCaptchaError] = useState('')

  const whatsappHref = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`

  if (state.succeeded) {
    trackLead()
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setCaptchaError('')

    const captchaToken = captchaRef.current?.getValue()
    if (recaptchaSiteKey && !captchaToken) {
      setCaptchaError('Please complete the reCAPTCHA checkbox.')
      return
    }

    await handleFormspreeSubmit(event)
    captchaRef.current?.reset()
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__grid">
        <div className="contact__intro">
          <h2 id="contact-heading">Let's talk about your website</h2>
          <p>
            Tell me about your business and Facebook Page. I'll reply with next steps for a
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

        {state.succeeded ? (
          <div className="contact__success" role="status">
            <p>Thanks — your message was sent! I'll get back to you soon.</p>
            <a className="btn btn--primary" href={whatsappHref} target="_blank" rel="noreferrer">
              Also message on WhatsApp
            </a>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input name="name" type="text" required autoComplete="name" />
            </label>
            <ValidationError field="name" errors={state.errors} className="contact__field-error" />

            <label>
              Business name
              <input name="business" type="text" required autoComplete="organization" />
            </label>
            <ValidationError field="business" errors={state.errors} className="contact__field-error" />

            <label>
              Phone or email
              <input name="reply_to" type="text" required autoComplete="email" />
            </label>
            <ValidationError field="reply_to" errors={state.errors} className="contact__field-error" />

            <label>
              What do you need?
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Website for my Facebook business…"
              />
            </label>
            <ValidationError field="message" errors={state.errors} className="contact__field-error" />

            {recaptchaSiteKey ? (
              <div className="contact__captcha">
                <ReCAPTCHA ref={captchaRef} sitekey={recaptchaSiteKey} theme="light" />
              </div>
            ) : null}

            {captchaError ? (
              <p className="contact__status contact__status--err" role="alert">
                {captchaError}
              </p>
            ) : null}

            <ValidationError errors={state.errors} className="contact__status contact__status--err" />

            <button
              className="btn btn--primary"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending…' : 'Send inquiry'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
