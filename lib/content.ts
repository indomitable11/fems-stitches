/**
 * Content data for FEMS-STITCHES, separated from presentation so the business
 * can update clothing, services, FAQs, etc. without redesigning the site.
 *
 * Images referenced here are development placeholders and should be replaced
 * with authentic FEMS-STITCHES photography.
 */

export const nav = [
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Shop', href: '/shop' },
  { label: 'How It Works', href: '/#how-it-works' },
] as const

export type ClothingCategory = {
  slug: string
  name: string
  description: string
  image: string
}

export const categories: ClothingCategory[] = [
  {
    slug: 'agbada',
    name: 'Agbada',
    description: 'Grand, flowing ceremonial robes tailored for weddings and big occasions.',
    image: '/images/category-agbada.png',
  },
  {
    slug: 'native',
    name: 'Native Wear',
    description: 'Refined traditional sets made to measure for everyday and events.',
    image: '/images/category-native.png',
  },
  {
    slug: 'ankara',
    name: 'Ankara',
    description: 'Modern silhouettes cut from vibrant, expressive Ankara prints.',
    image: '/images/category-ankara.png',
  },
  {
    slug: 'corporate',
    name: 'Corporate',
    description: 'Sharp, professional tailoring for work, interviews and business.',
    image: '/images/category-corporate.png',
  },
  {
    slug: 'casual',
    name: 'Casual',
    description: 'Comfortable, well-fitted everyday pieces with a considered finish.',
    image: '/images/category-casual.png',
  },
  {
    slug: 'vintage',
    name: 'Vintage',
    description: 'Retro-inspired shirts and pieces with character and craft.',
    image: '/images/category-vintage.png',
  },
]

export type Service = {
  slug: string
  name: string
  short: string
  what: string
  who: string
  why: string
  next: string
  cta: string
}

export const services: Service[] = [
  {
    slug: 'bespoke-tailoring',
    name: 'Bespoke Tailoring',
    short: 'Custom outfits made from scratch to your measurements and taste.',
    what: 'We create personalised outfits from the ground up \u2014 taking your measurements, style and fabric choices, and stitching a one-of-a-kind piece.',
    who: 'Anyone who wants a perfect fit and a design that is truly theirs, from students to professionals preparing for a special occasion.',
    why: 'Ready-made clothing rarely fits or feels exactly right. Bespoke means the outfit is built around you.',
    next: 'Start a custom request or book a measurement session, and we\u2019ll guide you from idea to finished outfit.',
    cta: 'Start Your Order',
  },
  {
    slug: 'ready-to-wear',
    name: 'Ready-to-Wear',
    short: 'Pre-made pieces in standard sizes, ready to order.',
    what: 'A curated selection of finished pieces in standard sizes that you can order without waiting for a full bespoke process.',
    who: 'Customers who love a design as-is and want a quicker turnaround.',
    why: 'Sometimes you just want a great piece, ready to go.',
    next: 'Browse the shop and ask about any item that catches your eye.',
    cta: 'Browse the Shop',
  },
  {
    slug: 'fabric-sourcing',
    name: 'Fabric Sourcing',
    short: 'Help finding the right materials \u2014 Ankara, silks and more.',
    what: 'We help you source suitable fabrics such as Ankara, cashmere and vintage silks for your outfit.',
    who: 'Customers who want guidance choosing the right material for a style, budget or occasion.',
    why: 'The right fabric makes the outfit. We help you choose well.',
    next: 'Tell us the look you\u2019re going for and we\u2019ll advise on fabric options.',
    cta: 'Ask About Fabrics',
  },
  {
    slug: 'alterations',
    name: 'Alterations',
    short: 'Adjusting existing clothing for a better, sharper fit.',
    what: 'We modify existing or older clothing so it fits you properly and feels new again.',
    who: 'Anyone with a piece that no longer fits well or needs refreshing.',
    why: 'A good alteration can transform a garment you already own.',
    next: 'Bring in the piece or send us a photo and description to get started.',
    cta: 'Ask About Alterations',
  },
  {
    slug: 'style-consultation',
    name: 'Style Consultation',
    short: 'Guidance coordinating outfits for events or everyday.',
    what: 'We help you coordinate clothing for a specific occasion or refine your everyday style.',
    who: 'Customers preparing for an event, or anyone who wants a second opinion from a stylist.',
    why: 'Knowing what works for you makes every outfit easier.',
    next: 'Book a consultation and we\u2019ll help you plan the look.',
    cta: 'Get Style Advice',
  },
]

export type PortfolioItem = {
  id: string
  title: string
  category: string // matches ClothingCategory.slug
  description: string
  image: string
}

/**
 * PLACEHOLDER portfolio. Replace images and copy with authentic
 * FEMS-STITCHES work. These are development placeholders only.
 */
export const portfolio: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Ceremonial Agbada',
    category: 'agbada',
    description: 'A grand embroidered agbada tailored for a traditional wedding.',
    image: '/images/category-agbada.png',
  },
  {
    id: 'p2',
    title: 'Coordinated Native Set',
    category: 'native',
    description: 'Matching native wear for a couple, made to measure.',
    image: '/images/category-native.png',
  },
  {
    id: 'p3',
    title: 'Modern Ankara Dress',
    category: 'ankara',
    description: 'A contemporary silhouette in a bold Ankara print.',
    image: '/images/category-ankara.png',
  },
  {
    id: 'p4',
    title: 'Tailored Corporate Suit',
    category: 'corporate',
    description: 'A clean, professional two-piece for the workplace.',
    image: '/images/category-corporate.png',
  },
  {
    id: 'p5',
    title: 'Smart-Casual Look',
    category: 'casual',
    description: 'A relaxed, well-fitted everyday outfit.',
    image: '/images/category-casual.png',
  },
  {
    id: 'p6',
    title: 'Vintage Silk Shirt',
    category: 'vintage',
    description: 'A retro-inspired shirt with considered detailing.',
    image: '/images/category-vintage.png',
  },
]

export type Product = {
  id: string
  name: string
  category: string
  image: string
  // Prices are intentionally NOT fabricated. Leave price null until the
  // business supplies real prices; the UI shows "Request a Quote".
  price: number | null
  sizes: string[] // empty = to be confirmed
  available: boolean
  description: string
}

/**
 * PLACEHOLDER catalogue. Prices, sizes and stock must be provided by the
 * business. Until then, items show "Request a Quote" / "Ask about sizes".
 */
export const products: Product[] = [
  {
    id: 'rtw1',
    name: 'Classic Kaftan',
    category: 'native',
    image: '/images/rtw-kaftan.png',
    price: null,
    sizes: [],
    available: true,
    description: 'A clean, versatile kaftan finished with a subtle collar detail.',
  },
  {
    id: 'rtw2',
    name: 'Modern Ankara Dress',
    category: 'ankara',
    image: '/images/rtw-ankara-dress.png',
    price: null,
    sizes: [],
    available: true,
    description: 'A tailored Ankara dress with a flattering, contemporary cut.',
  },
  {
    id: 'rtw3',
    name: 'Vintage Silk Shirt',
    category: 'vintage',
    image: '/images/rtw-shirt.png',
    price: null,
    sizes: [],
    available: true,
    description: 'A soft, retro-inspired shirt for a relaxed but refined look.',
  },
  {
    id: 'rtw4',
    name: 'Two-Piece Native Set',
    category: 'native',
    image: '/images/rtw-native-set.png',
    price: null,
    sizes: [],
    available: false,
    description: 'A tailored two-piece native set in deep indigo.',
  },
]

export const processSteps = [
  { step: 1, title: 'Choose Your Style', text: 'Browse our work for inspiration or bring your own idea.' },
  { step: 2, title: 'Contact Us', text: 'Send a custom request or message us on WhatsApp.' },
  { step: 3, title: 'Take Measurements', text: 'Visit the studio, or we guide you through measuring at home.' },
  { step: 4, title: 'Confirm Fabric & Style', text: 'We agree on the fabric, details and final design together.' },
  { step: 5, title: 'Production', text: 'Your outfit is cut and stitched with care.' },
  { step: 6, title: 'Fitting', text: 'We check the fit and make any final adjustments.' },
  { step: 7, title: 'Collection / Delivery', text: 'Pick up your finished outfit or arrange collection.' },
]

export const faqs = [
  {
    q: 'How do I place an order?',
    a: 'Start a custom request on this site or message us on WhatsApp. We\u2019ll discuss your idea, measurements and fabric, then confirm the details before production.',
  },
  {
    q: 'Do you make custom outfits?',
    a: 'Yes. Bespoke tailoring is our core service \u2014 we create outfits from scratch based on your measurements and preferences.',
  },
  {
    q: 'Do you provide fabrics?',
    a: 'We can help source suitable fabrics such as Ankara, cashmere and vintage silks. Share the look you want and we\u2019ll advise on options.',
  },
  {
    q: 'Can I bring my own fabric?',
    a: 'Yes, you are welcome to bring your own fabric for us to work with.',
  },
  {
    q: 'Do you make Agbada and native wear?',
    a: 'Yes. Agbada, native wear, Ankara, corporate, casual and vintage pieces are all part of what we make.',
  },
  {
    q: 'Do you offer alterations?',
    a: 'Yes. We adjust existing or older clothing to improve the fit.',
  },
  {
    q: 'How are measurements taken?',
    a: 'You can visit the studio for measurements, or we can guide you through taking them at home when an in-person visit isn\u2019t possible.',
  },
  {
    q: 'How long does tailoring take?',
    a: 'Turnaround depends on the outfit and how busy we are. We\u2019ll confirm a realistic timeline with you before starting. (Exact timelines to be confirmed by the business.)',
  },
  {
    q: 'Do you offer ready-to-wear?',
    a: 'Yes. We have a selection of ready-to-wear pieces in standard sizes \u2014 see the Shop.',
  },
  {
    q: 'Do you deliver?',
    a: 'Delivery and pickup options are being finalised. Ask us on WhatsApp for the current arrangement. (Coverage and fees to be confirmed.)',
  },
  {
    q: 'Where are you located?',
    a: 'We are in the Adenike area near LAUTECH, Ogbomosho, Oyo State, Nigeria.',
  },
  {
    q: 'How do I contact you?',
    a: 'The fastest way is WhatsApp. You can also use the contact page to reach out.',
  },
]

/**
 * PLACEHOLDER testimonials. These are clearly-marked structures for real,
 * authentic reviews. Do NOT present these as genuine customer quotes.
 */
export const testimonialPlaceholders = [
  { id: 't1', name: 'Customer name', context: 'Occasion / outfit' },
  { id: 't2', name: 'Customer name', context: 'Occasion / outfit' },
  { id: 't3', name: 'Customer name', context: 'Occasion / outfit' },
]

export const orderCategoryOptions = [
  'Agbada',
  'Native wear',
  'Ankara',
  'Corporate wear',
  'Casual',
  'Vintage',
  'Other',
]

export const orderOccasionOptions = [
  'Wedding',
  'Graduation',
  'Birthday',
  'Church',
  'Corporate event',
  'Traditional ceremony',
  'Everyday wear',
  'Other',
]

export const appointmentTypeOptions = [
  'Measurements',
  'Consultation',
  'Fabric selection',
  'Fitting',
]
