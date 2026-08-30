import Image from 'next/image'
import { Eyebrow } from '@/components/section-heading'

export function AboutPreview() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg bg-muted lg:order-1">
          <Image
            src="/images/atelier.png"
            alt="Hands of a FEMS-STITCHES tailor at work in the studio"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>About FEMS-STITCHES</Eyebrow>

          <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Craft, culture and a fit that&apos;s truly yours
          </h2>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            FEMS-STITCHES is a fashion and tailoring studio in the Adenike area near LAUTECH,
            Ogbomosho. We make agbada, native wear, Ankara, corporate and casual pieces &mdash;
            built around you, your measurements and the occasion.
          </p>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our focus is simple: careful craftsmanship, honest advice and clothing that carries a
            sense of who you are.
          </p>
        </div>
      </div>
    </section>
  )
}