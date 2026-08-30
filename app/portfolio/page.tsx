import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { PortfolioGallery } from '@/components/portfolio-gallery'
import { CtaLink } from '@/components/cta'

export const metadata: Metadata = {
  title: 'Our Work — Portfolio',
  description:
    'Browse FEMS-STITCHES tailoring work: agbada, native wear, Ankara, corporate, casual and vintage pieces made in Ogbomosho.',
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="A showroom of our tailoring"
        description="Real examples of what we make. The images below are placeholders to be replaced with authentic FEMS-STITCHES photography — see something you like and start a similar look."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
        <PortfolioGallery initialCategory={category ?? 'all'} />

        <div className="mt-16 flex flex-col items-start gap-4 rounded-lg border border-border bg-secondary/40 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-2xl font-medium">Like what you see?</h2>
            <p className="mt-1 text-muted-foreground">
              Start a custom order and we&apos;ll create your version.
            </p>
          </div>
          <CtaLink href="/order" size="lg">
            Start Your Order
          </CtaLink>
        </div>
      </section>
    </>
  )
}
