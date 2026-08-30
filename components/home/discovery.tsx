import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Discovery() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What are you looking for?"
          title="Find your style"
          description="Browse the pieces we make most. Tap a category to see examples and start a similar look."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 60}>
              <Link
                href={`/portfolio?category=${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-md bg-muted"
              >
                <Image
                  src={cat.image || '/placeholder.svg'}
                  alt={`${cat.name} tailoring by FEMS-STITCHES`}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-serif text-lg font-medium text-background sm:text-xl">
                    {cat.name}
                  </h3>
                  <p className="mt-0.5 hidden text-sm text-background/85 sm:line-clamp-2">
                    {cat.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
