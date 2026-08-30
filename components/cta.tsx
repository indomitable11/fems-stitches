import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

/**
 * Editorial CTA styles with generous touch targets (min 44px tall).
 * Used for the primary conversion actions across the site.
 */
export const ctaVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-wide transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline: 'border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5',
        ondark: 'border border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10',
        whatsapp: 'bg-[#128C4A] text-white hover:bg-[#0f7a40]',
        ghost: 'text-foreground hover:bg-foreground/5',
      },
      size: {
        default: 'h-11 px-6',
        lg: 'h-12 px-8 text-[0.95rem]',
        sm: 'h-9 px-4 text-[0.8rem]',
        full: 'h-12 w-full px-6 text-[0.95rem]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

type CtaLinkProps = ComponentProps<typeof Link> & VariantProps<typeof ctaVariants>

export function CtaLink({ className, variant, size, ...props }: CtaLinkProps) {
  return <Link className={cn(ctaVariants({ variant, size }), className)} {...props} />
}

type CtaButtonProps = ComponentProps<'button'> & VariantProps<typeof ctaVariants>

export function CtaButton({ className, variant, size, type = 'button', ...props }: CtaButtonProps) {
  return <button type={type} className={cn(ctaVariants({ variant, size }), className)} {...props} />
}
