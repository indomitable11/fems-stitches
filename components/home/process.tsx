import { processSteps } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'
import { CtaLink } from '@/components/cta'
import { Reveal } from '@/components/reveal'

export function Process() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From first idea to finished outfit"
          description="A simple, guided process. No accounts, no guesswork — just a clear path to an outfit that fits."
          className="[&_h2]:text-primary-foreground [&_p]:text-primary-foreground/75 [&_span]:text-accent"
        />

        <ol className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.step} delay={i * 50} className="relative">
              <span className="font-serif text-3xl font-semibold text-accent">
                {String(step.step).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-serif text-lg font-medium text-primary-foreground">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-primary-foreground/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <p className="mt-10 text-sm text-primary-foreground/70">
          Turnaround times depend on the outfit and are confirmed with you before we begin.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CtaLink href="/order" variant="whatsapp" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            Start Your Order
          </CtaLink>
          <CtaLink href="/appointment" variant="ondark" size="lg">
            Book an Appointment
          </CtaLink>
        </div>
      </div>
    </section>
  )
}
