'use client'

import { whatsappLink } from '@/lib/site-config'
import { WhatsAppIcon } from '@/components/icons'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('Hello FEMS-STITCHES, I have an enquiry.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with FEMS-STITCHES on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#128C4A] px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C4A] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  )
}
