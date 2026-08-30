import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaLink } from '@/components/cta'
import { services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Bespoke tailoring, ready-to-wear, fabric sourcing, alterations and style consultation from FEMS-STITCHES in Ogbomosho.',
}

const detail = [
  { key: 'what', label: 'What it is' },
  { key: 'who', label: 'Who it is for' },
  { key: 'why', label: 'Why it matters' },
  { key: 'next', label: "What's next" },
] as const

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="From a full bespoke build to a quick alteration"
        description="Five ways we help you look and feel your best. Every service starts with a simple conversation."
      />

      <div className="mx-auto max-w-5xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex flex-col gap-16 md:gap-24">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 40}>
              <section
                id={service.slug}
                className="scroll-mt-28 border-t border-border pt-10 md:pt-14"
                aria-labelledby={`${service.slug}-title`}
              >
                <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-12">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2
                      id={`${service.slug}-title`}
                      className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl"
                    >
                      {service.name}
                    </h2>
                    <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {service.short}
                    </p>
                    <div className="mt-6">
                      <CtaLink href="/order" size="sm">
                        {service.cta}
                      </CtaLink>
                    </div>
                  </div>

                  <dl className="grid gap-6 sm:grid-cols-2">
                    {detail.map(({ key, label }) => (
                      <div key={key}>
                        <dt className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                          {label}
                        </dt>
                        <dd className="mt-2 text-pretty leading-relaxed text-foreground/80">
                          {service[key]}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
