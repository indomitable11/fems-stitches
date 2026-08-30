import { Hero } from '@/components/home/hero'
import { Discovery } from '@/components/home/discovery'
import { ServicesPreview } from '@/components/home/services-preview'
import { FeaturedWork } from '@/components/home/featured-work'
import { Process } from '@/components/home/process'
import { Testimonials } from '@/components/home/testimonials'
import { AboutPreview } from '@/components/home/about-preview'
import { FinalCta } from '@/components/home/final-cta'
import { siteConfig } from '@/lib/site-config'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: siteConfig.name,
  description:
    'Fashion and bespoke tailoring studio near LAUTECH, Ogbomosho. Agbada, native wear, Ankara, corporate and casual outfits made to measure.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.location.area,
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.state,
    addressCountry: 'NG',
  },
  areaServed: `${siteConfig.location.city}, ${siteConfig.location.state}`,
  url: siteConfig.url,
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Discovery />
      <ServicesPreview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <AboutPreview />
      <FinalCta />
    </>
  )
}
