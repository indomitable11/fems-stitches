'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product-card'
import { products, categories } from '@/lib/content'
import { cn } from '@/lib/utils'

const filters = [{ slug: 'all', name: 'All' }, ...categories.map((c) => ({ slug: c.slug, name: c.name }))]

export function ShopGrid() {
  const [active, setActive] = useState('all')

  const shown = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products by category">
        {filters.map((f) => {
          const selected = active === f.slug
          return (
            <button
              key={f.slug}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(f.slug)}
              className={cn(
                'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors',
                selected
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground',
              )}
            >
              {f.name}
            </button>
          )
        })}
      </div>

      {shown.length === 0 ? (
        <p className="mt-12 text-center text-muted-foreground">No pieces in this category yet.</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {shown.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
