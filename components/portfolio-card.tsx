import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PortfolioItem } from '@/lib/content'
import { whatsappLink } from '@/lib/site-config'

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  const enquiry = whatsappLink(
    `Hello FEMS-STITCHES, I'd like a similar look to "${item.title}" (${item.category}).`,
  )

  return (
    <figure className="group relative overflow-hidden rounded-md bg-muted">
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={item.image || '/placeholder.svg'}
          alt={`FEMS-STITCHES work: ${item.title}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/5 to-transparent opacity-90" />
      </div>

      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-background">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-background/80">
          {item.category}
        </p>
        <h3 className="mt-1 font-serif text-lg font-medium">{item.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-background/85">{item.description}</p>
        <Link
          href={enquiry}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-background underline-offset-4 hover:underline"
        >
          Get a similar look
          <ArrowUpRight className="size-4" />
        </Link>
      </figcaption>
    </figure>
  )
}
