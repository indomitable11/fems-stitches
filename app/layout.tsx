import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Bespoke Tailoring & Fashion in Ogbomosho`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    'FEMS-STITCHES is a fashion and bespoke tailoring studio near LAUTECH, Adenike, Ogbomosho, Oyo State. Agbada, native wear, Ankara, corporate and casual outfits made to measure. Bring the idea, we stitch the outfit.',
  keywords: [
    'tailor in Ogbomosho',
    'fashion designer Ogbomosho',
    'tailoring near LAUTECH',
    'native wear Ogbomosho',
    'Agbada Ogbomosho',
    'bespoke tailoring Ogbomosho',
    'Ankara styles Ogbomosho',
    'FEMS-STITCHES',
  ],
  authors: [{ name: siteConfig.name }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: siteConfig.url,
    title: `${siteConfig.name} — From Idea to Outfit`,
    description:
      'Bespoke tailoring and fashion near LAUTECH, Ogbomosho. Agbada, native wear, Ankara, corporate and casual. Start your custom order today.',
    siteName: siteConfig.name,
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — From Idea to Outfit`,
    description: 'Bespoke tailoring and fashion near LAUTECH, Ogbomosho.',
    images: ['/images/hero.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e2350',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} bg-background`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
