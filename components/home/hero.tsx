import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { CtaLink } from '@/components/cta'
import { WhatsAppIcon } from '@/components/icons'
import { siteConfig, whatsappLink } from '@/lib/site-config'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:pb-24 lg:pt-16">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-accent" />
            {siteConfig.location.area} &middot; {siteConfig.location.landmark},{' '}
            {siteConfig.location.city}
          </p>

          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            From idea <span className="text-accent">to</span> outfit.
          </h1>

          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Bring the idea &mdash; we&apos;ll stitch the outfit. Bespoke tailoring, native wear,
            Ankara and ready-to-wear, made to fit you in Ogbomosho.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/order" size="lg">
              Start Your Order
            </CtaLink>
            <CtaLink href="/portfolio" variant="outline" size="lg">
              Explore Our Work
            </CtaLink>
          </div>

          <CtaLink
            href={whatsappLink('Hello FEMS-STITCHES, I have a quick question.')}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="sm"
            className="mt-4 -ml-4 text-muted-foreground"
          >
            <WhatsAppIcon className="size-4 text-[#128C4A]" />
            or ask a quick question on WhatsApp
          </CtaLink>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg bg-muted lg:max-w-none">
            <Image
              src="/images/hero.png"
              alt="A tailored deep-indigo agbada by FEMS-STITCHES, worn in a bright studio"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
