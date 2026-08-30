import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { portfolio } from '@/lib/content'
import { PortfolioCard } from '@/components/portfolio-card'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function FeaturedWork() {
  const featured = portfolio.slice(0, 6)

  return (
    <section className="border-t border-border py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our work"
            title="Recent pieces"
            description="A look at what we make. Every piece here is a placeholder for authentic FEMS-STITCHES photography."
          />
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View full portfolio
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <PortfolioCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
