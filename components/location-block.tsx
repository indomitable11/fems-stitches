import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { siteConfig, whatsappLink } from '@/lib/site-config'
import { WhatsAppIcon } from '@/components/icons'

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-accent">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <div className="mt-1 text-sm text-foreground">{children}</div>
      </div>
    </div>
  )
}

export function LocationBlock() {
  const { location, contact, hours } = siteConfig

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="space-y-6">
        <Row icon={<MapPin className="size-5" />} label="Studio">
          <p>{location.area}</p>
          <p className="text-muted-foreground">
            {location.landmark}, {location.city}, {location.state}, {location.country}
          </p>
        </Row>

        <Row icon={<WhatsAppIcon className="size-5" />} label="WhatsApp">
          <Link
            href={whatsappLink('Hello FEMS-STITCHES, I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Message us on WhatsApp
          </Link>
        </Row>

        <Row icon={<Phone className="size-5" />} label="Phone">
          {contact.phone ? (
            <a href={`tel:${contact.phone}`} className="hover:underline">
              {contact.phone}
            </a>
          ) : (
            <span className="text-muted-foreground">To be added</span>
          )}
        </Row>

        <Row icon={<Mail className="size-5" />} label="Email">
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="hover:underline">
              {contact.email}
            </a>
          ) : (
            <span className="text-muted-foreground">To be added</span>
          )}
        </Row>

        <Row icon={<Clock className="size-5" />} label="Opening hours">
          <ul className="space-y-1">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-wrap gap-x-2">
                <span>{h.day}:</span>
                <span className="text-muted-foreground">{h.time}</span>
              </li>
            ))}
          </ul>
        </Row>
      </div>

      <div className="min-h-64 overflow-hidden rounded-md border border-border bg-muted">
        {location.mapEmbedUrl ? (
          <iframe
            src={location.mapEmbedUrl}
            title={`Map showing ${siteConfig.name} location`}
            className="h-full min-h-64 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex h-full min-h-64 flex-col items-center justify-center gap-2 p-6 text-center">
            <MapPin className="size-8 text-accent" />
            <p className="text-sm font-medium text-foreground">{location.city}, {location.state}</p>
            <p className="text-sm text-muted-foreground">
              Map to be embedded once the exact location is confirmed.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
