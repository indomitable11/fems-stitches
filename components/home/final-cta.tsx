import { CtaLink } from '@/components/cta'
import { WhatsAppIcon } from '@/components/icons'
import { LocationBlock } from '@/components/location-block'
import { Eyebrow } from '@/components/section-heading'
import { whatsappLink } from '@/lib/site-config'

export function FinalCta() {
  return (
    <section className="border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Let&apos;s make something you&apos;ll love to wear
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Start a custom request in a couple of minutes, or send us a message on WhatsApp. No
              account needed.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink
  href={whatsappLink(
    "Hello FEMS-STITCHES, I'd like to start an order. Please guide me through the process."
  )}
  target="_blank"
  rel="noopener noreferrer"
  size="lg"
>
  Start Your Order
</CtaLink>
              <CtaLink
                href={whatsappLink('Hello FEMS-STITCHES, I have an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon className="size-5" />
                WhatsApp Us
              </CtaLink>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Visit &amp; contact
            </h3>
            <div className="mt-6">
              <LocationBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
