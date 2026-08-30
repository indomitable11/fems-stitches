'use client'

import { useState } from 'react'
import { categories, portfolio } from '@/lib/content'
import { PortfolioCard } from '@/components/portfolio-card'
import { cn } from '@/lib/utils'

const filters = [{ slug: 'all', name: 'All' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))]

export function PortfolioGallery({ initialCategory = 'all' }: { initialCategory?: string }) {
  const valid = filters.some((f) => f.slug === initialCategory) ? initialCategory : 'all'
  const [active, setActive] = useState(valid)

  const items = active === 'all' ? portfolio : portfolio.filter((p) => p.category === active)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter work by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f.slug}
            role="tab"
            aria-selected={active === f.slug}
            onClick={() => setActive(f.slug)}
            className={cn(
              'h-9 rounded-full border px-4 text-sm font-medium transition-colors',
              active === f.slug
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-foreground/25 hover:text-foreground',
            )}
          >
            {f.name}
          </button>
        ))}
      </div>

      {items.length ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-muted-foreground">No pieces in this category yet.</p>
      )}
    </div>
  )
}
