export type CurrentFocus = {
  label: string
  headline: string
  audience: string
  summary: string
  ctaText: string
  ctaHref: string
  updatedAt: string
}

/**
 * Edit this file when your target audience or offer changes.
 * Hero pitch and Current Focus section both read from here.
 */
export const currentFocus: CurrentFocus = {
  label: 'Current focus',
  headline: 'Websites for businesses that grow on Facebook',
  audience:
    'People looking for a website to run their business alongside a Facebook Page',
  summary:
    'I help business owners turn Facebook interest into a clean, mobile-ready website — with contact, WhatsApp, and a page that looks credible when customers click through.',
  ctaText: 'Get a website for your business',
  ctaHref: '#contact',
  updatedAt: 'Jul 2026',
}
