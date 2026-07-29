import { assetUrl } from '../lib/assets'

export const site = {
  name: 'Akif Hossen',
  role: 'SQA Manager at BJIT',
  tagline: '15+ years building quality into software — now helping businesses show up online.',
  email: 'akifratul@gmail.com',
  /** Bangladesh mobile with country code for wa.me */
  whatsapp: '8801622670612',
  whatsappDisplay: '01622-670612',
  address: '1179 Sohag Tower, Nurercala Bazar Road, Vatara 1212, Dhaka, Bangladesh',
  portrait: assetUrl('images/akif-portrait.png'),
  /** Meta Pixel ID (Akif Hossain's Pixel) — public in page source; env can override */
  metaPixelId: '3393551357410244',
  /**
   * Personal Facebook profile username (from facebook.com/USERNAME).
   * Messenger chat uses m.me — works for profiles with messaging enabled.
   * Example: if profile is facebook.com/akif.hossen → use "akif.hossen"
   */
  facebookProfileUsername: 'akifratul',
  /** Optional full Messenger URL override, e.g. https://m.me/username */
  facebookMessengerHref: 'https://m.me/akifratul',
  /** Google reCAPTCHA v2 site key (public) */
  recaptchaSiteKey: '6Ldo5WotAAAAANh1J9enRhPCplKSiHb3QSRbtNHo',
}

export const travelPhotos = [
  {
    src: assetUrl('images/travel-lake.jpg'),
    alt: 'Misty mountain lake and village — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-river.jpg'),
    alt: 'River winding through green hills — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-beach.jpg'),
    alt: 'Turquoise sea and limestone cliffs — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-sea.jpg'),
    alt: 'Traditional boat on open water — landscape by Akif Hossen',
  },
  {
    src: assetUrl('images/landscape-temple.jpg'),
    alt: 'Temple complex under blue sky — travel landscape by Akif Hossen',
  },
]

export const services = [
  {
    title: 'Business website',
    description:
      'A clear, fast site that explains what you sell and how to reach you — built for phones first.',
  },
  {
    title: 'Facebook Page–ready',
    description:
      'Designed so your Page, ads, and website tell the same story and send visitors to one place to act.',
  },
  {
    title: 'Contact & WhatsApp',
    description:
      'Easy ways for customers to message you — form, call, or WhatsApp — without friction.',
  },
  {
    title: 'Basics that matter',
    description:
      'Mobile layout, sensible SEO foundations, and analytics so you know what Facebook traffic does.',
  },
]

export const whyMe = [
  {
    title: 'Quality mindset',
    description:
      'Fifteen years in software quality means I care about details, deadlines, and things that actually work.',
  },
  {
    title: 'Process you can trust',
    description:
      'As an SQA Manager at BJIT, I run delivery with clarity — expectations, checks, and follow-through.',
  },
  {
    title: 'Built for real businesses',
    description:
      'No bloated agency package. A practical site that helps your Facebook audience become customers.',
  },
]

export const about = {
  title: 'About',
  paragraphs: [
    'I am Akif Hossen, working at BJIT as an SQA Manager with more than fifteen years of experience in software quality and delivery.',
    'Outside work, photography and traveling keep me curious — noticing light, places, and stories. That same eye for clarity shows up in the websites I help people launch.',
  ],
  hobbies: ['Photography', 'Traveling'],
}

export const workSamples = [
  {
    title: 'Sample business site',
    description: 'Placeholder — replace with a live client or demo URL.',
  },
  {
    title: 'Facebook-ready landing',
    description: 'Placeholder — add a project that converted Page traffic.',
  },
  {
    title: 'Service showcase',
    description: 'Placeholder — show a niche you have delivered for.',
  },
]
