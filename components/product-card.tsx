import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/content'
import { whatsappLink } from '@/lib/site-config'
import { ctaVariants } from '@/components/cta'

export function ProductCard({ product }: { product: Product }) {
  const enquiry = whatsappLink(
    `Hello FEMS-STITCHES, I'm interested in "${product.name}". Could you share price, sizes and availability?`,
  )

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} \u2014 ready-to-wear by FEMS-STITCHES`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {!product.available && (
          <span className="absolute left-3 top-3 rounded-full bg-foreground/85 px-3 py-1 text-xs font-medium text-background">
            Made to order
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
          {product.category}
        </p>
        <h3 className="mt-1 font-serif text-lg font-medium">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="font-medium text-foreground">
            {product.price != null
              ? new Intl.NumberFormat('en-NG', {
                  style: 'currency',
                  currency: 'NGN',
                  maximumFractionDigits: 0,
                }).format(product.price)
              : 'Request a quote'}
          </span>
          <span className="text-muted-foreground">
            {product.sizes.length ? product.sizes.join(' \u00b7 ') : 'Sizes on request'}
          </span>
        </div>

        <Link
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className={`${ctaVariants({ variant: 'outline', size: 'full' })} mt-4`}
        >
          Ask about this item
        </Link>
      </div>
    </article>
  )
}
