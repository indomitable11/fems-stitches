import { Quote } from 'lucide-react'
import { testimonialPlaceholders } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="What customers say"
          description="These are placeholders reserved for real, verified customer reviews. We don't publish invented testimonials."
          align="center"
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialPlaceholders.map((t, i) => (
            <Reveal key={t.id} delay={i * 60}>
              <figure className="flex h-full flex-col rounded-md border border-dashed border-border bg-card p-6">
                <Quote className="size-6 text-accent" />
                <blockquote className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                  Verified customer review to be added here once collected.
                </blockquote>
                <figcaption className="mt-4 border-t border-border pt-4 text-sm">
                  <span className="font-medium text-foreground">{t.name}</span>
                  <span className="block text-muted-foreground">{t.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
