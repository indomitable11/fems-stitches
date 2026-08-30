import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ShopGrid } from '@/components/shop-grid'

export const metadata: Metadata = {
  title: 'Shop Ready-to-Wear',
  description:
    'Browse ready-to-wear pieces from FEMS-STITCHES. Request a quote or ask about sizes on WhatsApp.',
}

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ready-to-Wear"
        title="Pieces ready to order"
        description="A curated selection of finished pieces. Prices and sizes are confirmed on request — message us and we'll help you order."
      />
      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <ShopGrid />
      </div>
    </>
  )
}
