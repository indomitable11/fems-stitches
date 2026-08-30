/**
 * Central business configuration for FEMS-STITCHES.
 *
 * Everything here is editable in one place. Values marked with `PLACEHOLDER`
 * must be replaced with the real business details before production launch.
 * Do NOT invent phone numbers, prices, hours, or policies elsewhere in the app.
 */

export const siteConfig = {
  name: 'FEMS-STITCHES',
  tagline: 'From Idea to Outfit',
  concept: 'Bring the idea. We\u2019ll stitch the outfit.',
  url: 'https://fems-stitches.example.com', // PLACEHOLDER: replace with live domain

  location: {
    area: 'Adenike Area',
    landmark: 'LAUTECH',
    city: 'Ogbomosho',
    state: 'Oyo State',
    country: 'Nigeria',
    // PLACEHOLDER: exact street address and map coordinates to be provided
    fullAddress: 'Adenike Area, near LAUTECH, Ogbomosho, Oyo State, Nigeria',
    mapEmbedUrl: '', // PLACEHOLDER: paste a Google Maps embed URL when available
  },

  contact: {
    // PLACEHOLDER: replace with the real WhatsApp number in full international
    // format WITHOUT the leading "+" or spaces, e.g. "2348012345678".
    whatsapp: '2348120876268',
    phone: '', // PLACEHOLDER: e.g. "+234 812 087 6268"
    email: '', // PLACEHOLDER: e.g. "olagokedaniel995@gmail.com"
  },

  social: {
    facebook: '', // https://www.facebook.com/share/193dReKDDE/
    tiktok: '', // https://www.tiktok.com/@femstitches1?_r=1&_t=ZS-99CbHGfFWiL
  },

  // PLACEHOLDER: confirm real opening hours before launch
  hours: [
    { day: 'Monday \u2013 Friday', time: 'Open 24 hours' },
    { day: 'Saturday', time: 'Open 24 hours' },
    { day: 'Sunday', time: 'Open 24 hours' },
  ],
} as const

/**
 * Whether a real WhatsApp number has been configured yet.
 * Used to warn during development that a placeholder is still in place.
 */
export const isWhatsAppConfigured =
  siteConfig.contact.whatsapp !== '2348120876268' &&
  /^\d{7,15}$/.test(siteConfig.contact.whatsapp)

/**
 * Build a WhatsApp click-to-chat link with an optional prefilled message.
 * Contextual info (selected style, service, enquiry) can be passed in.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
