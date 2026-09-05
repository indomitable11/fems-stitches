import { OrderForm } from '@/components/order-form'
import { Eyebrow } from '@/components/section-heading'

export const metadata = {
  title: 'Start Your Order',
  description:
    'Start a custom outfit request with FEMS-STITCHES. Tell us what you want and send your request directly on WhatsApp.',
}

export default function OrderPage() {
  return (
    <main>
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Custom Order</Eyebrow>

            <h1 className="mt-3 text-balance font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let&apos;s create something made for you
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Tell us what you have in mind, and we&apos;ll help you
              bring it to life. No account is required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <OrderForm />
        </div>
      </section>
    </main>
  )
}