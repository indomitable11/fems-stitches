import Link from 'next/link'
import { Scissors, Shirt, Layers, Ruler, Sparkles, ArrowRight } from 'lucide-react'
import { services } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const icons = [Scissors, Shirt, Layers, Ruler, Sparkles]

export function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="What we do"
            description="Five ways we help you look and feel your best — from a full bespoke build to a quick alteration."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            All services
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={service.slug} delay={i * 60}>
                <Link
                  href={`/services#${service.slug}`}
                  className="group flex h-full flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-foreground/25"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-medium">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
