import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { nav } from '@/lib/content'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { WhatsAppIcon } from '@/components/icons'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-serif text-xl font-semibold tracking-tight">
            FEMS<span className="text-accent">·</span>STITCHES
          </p>
          <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Bespoke tailoring and fashion near LAUTECH, Ogbomosho. Bring the idea &mdash; we&apos;ll
            stitch the outfit.
          </p>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{siteConfig.location.fullAddress}</span>
          </p>
          <Link
            href={whatsappLink('Hello FEMS-STITCHES, I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
          >
            <WhatsAppIcon className="size-4 text-[#128C4A]" />
            Chat with us on WhatsApp
          </Link>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </h2>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get Started
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <Link href="/order" className="text-sm text-muted-foreground hover:text-foreground">
                Start Your Order
              </Link>
            </li>
            <li>
              <Link
                href="/appointment"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Book an Appointment
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground">
                Shop Ready-to-Wear
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact &amp; Location
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; {year} {siteConfig.name}. {siteConfig.location.city}, {siteConfig.location.state},
            Nigeria.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
