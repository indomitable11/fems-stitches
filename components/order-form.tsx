'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { WhatsAppIcon } from '@/components/icons'
import { ctaVariants } from '@/components/cta'
import { cn } from '@/lib/utils'
import { whatsappLink } from '@/lib/site-config'
import { orderCategoryOptions, orderOccasionOptions } from '@/lib/content'

type FormState = {
  name: string
  category: string
  occasion: string
  colors: string
  ownFabric: 'Yes' | 'No' | 'Not sure' | ''
  timeline: string
  budget: string
  measurements: string
  notes: string
}

const empty: FormState = {
  name: '',
  category: '',
  occasion: '',
  colors: '',
  ownFabric: '',
  timeline: '',
  budget: '',
  measurements: '',
  notes: '',
}

const steps = ['Your outfit', 'Details', 'Measurements', 'Review'] as const

export function OrderForm() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(empty)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((f) => ({ ...f, [key]: value }))
  }

  const canContinue = useMemo(() => {
    if (step === 0) return form.category !== ''
    if (step === 1) return form.occasion !== ''
    return true
  }, [step, form])

  const message = useMemo(() => {
    const lines = [
      'Hello FEMS-STITCHES, I would like to start a custom order.',
      '',
      form.name && `Name: ${form.name}`,
      form.category && `Type of outfit: ${form.category}`,
      form.occasion && `Occasion: ${form.occasion}`,
      form.colors && `Preferred colours / fabric: ${form.colors}`,
      form.ownFabric && `Providing own fabric: ${form.ownFabric}`,
      form.timeline && `Needed by: ${form.timeline}`,
      form.budget && `Budget range: ${form.budget}`,
      form.measurements && `Measurements: ${form.measurements}`,
      form.notes && `Extra notes: ${form.notes}`,
    ].filter(Boolean)

    return lines.join('\n')
  }, [form])

  const inputClass =
    'w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'

  const labelClass =
    'mb-1.5 block text-sm font-medium text-foreground'

  return (
    <div className="mx-auto max-w-2xl">
      {/* Stepper */}
      <ol
        className="mb-10 flex items-center gap-2"
        aria-label="Order progress"
      >
        {steps.map((label, i) => {
          const state =
            i < step ? 'done' : i === step ? 'current' : 'upcoming'

          return (
            <li
              key={label}
              className="flex flex-1 items-center gap-2"
            >
              <div
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors',
                  state === 'done' &&
                    'border-primary bg-primary text-primary-foreground',
                  state === 'current' &&
                    'border-primary text-primary',
                  state === 'upcoming' &&
                    'border-border text-muted-foreground',
                )}
                aria-current={
                  state === 'current' ? 'step' : undefined
                }
              >
                {state === 'done' ? (
                  <Check className="size-4" />
                ) : (
                  i + 1
                )}
              </div>

              <span
                className={cn(
                  'hidden text-xs font-medium sm:block',
                  state === 'upcoming'
                    ? 'text-muted-foreground'
                    : 'text-foreground',
                )}
              >
                {label}
              </span>

              {i < steps.length - 1 && (
                <span
                  className="h-px flex-1 bg-border"
                  aria-hidden
                />
              )}
            </li>
          )
        })}
      </ol>

      <div className="rounded-lg border border-border bg-card p-6 md:p-8">
        {/* Step 0 */}
        {step === 0 && (
          <div>
            <h2 className="font-serif text-2xl">
              What are we making?
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Choose the type of outfit you have in mind.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {orderCategoryOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => set('category', opt)}
                  className={cn(
                    'rounded-md border px-3 py-3 text-sm transition-colors',
                    form.category === opt
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border hover:border-foreground/40',
                  )}
                  aria-pressed={form.category === opt}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <label htmlFor="name" className={labelClass}>
                Your name{' '}
                <span className="text-muted-foreground">
                  (optional)
                </span>
              </label>

              <input
                id="name"
                className={inputClass}
                value={form.name}
                onChange={(e) =>
                  set('name', e.target.value)
                }
                placeholder="e.g. Ada"
              />
            </div>
          </div>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-serif text-2xl">
                Tell us the details
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                The more you share, the better we can help.
              </p>
            </div>

            <div>
              <span className={labelClass}>Occasion</span>

              <div className="flex flex-wrap gap-2">
                {orderOccasionOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set('occasion', opt)}
                    className={cn(
                      'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                      form.occasion === opt
                        ? 'border-foreground bg-foreground text-background'
                        : 'border-border hover:border-foreground/40',
                    )}
                    aria-pressed={form.occasion === opt}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="colors" className={labelClass}>
                Preferred colours or fabric
              </label>

              <input
                id="colors"
                className={inputClass}
                value={form.colors}
                onChange={(e) =>
                  set('colors', e.target.value)
                }
                placeholder="e.g. deep indigo Ankara, cream lace"
              />
            </div>

            <div>
              <span className={labelClass}>
                Will you provide your own fabric?
              </span>

              <div className="flex flex-wrap gap-2">
                {(['Yes', 'No', 'Not sure'] as const).map(
                  (opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() =>
                        set('ownFabric', opt)
                      }
                      className={cn(
                        'rounded-full border px-3.5 py-1.5 text-sm transition-colors',
                        form.ownFabric === opt
                          ? 'border-foreground bg-foreground text-background'
                          : 'border-border hover:border-foreground/40',
                      )}
                      aria-pressed={form.ownFabric === opt}
                    >
                      {opt}
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="timeline"
                  className={labelClass}
                >
                  Needed by{' '}
                  <span className="text-muted-foreground">
                    (optional)
                  </span>
                </label>

                <input
                  id="timeline"
                  className={inputClass}
                  value={form.timeline}
                  onChange={(e) =>
                    set('timeline', e.target.value)
                  }
                  placeholder="e.g. before 20 Dec"
                />
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className={labelClass}
                >
                  Budget range{' '}
                  <span className="text-muted-foreground">
                    (optional)
                  </span>
                </label>

                <input
                  id="budget"
                  className={inputClass}
                  value={form.budget}
                  onChange={(e) =>
                    set('budget', e.target.value)
                  }
                  placeholder="e.g. ₦30,000 – ₦50,000"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="font-serif text-2xl">
                Measurements
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Not sure of your measurements? Leave this blank —
                we&apos;ll help you take them in the studio or
                guide you at home.
              </p>
            </div>

            <div>
              <label
                htmlFor="measurements"
                className={labelClass}
              >
                Measurements{' '}
                <span className="text-muted-foreground">
                  (optional)
                </span>
              </label>

              <textarea
                id="measurements"
                rows={4}
                className={inputClass}
                value={form.measurements}
                onChange={(e) =>
                  set('measurements', e.target.value)
                }
                placeholder="e.g. chest, waist, length — or write 'need help'"
              />
            </div>

            <div>
              <label htmlFor="notes" className={labelClass}>
                Anything else?
              </label>

              <textarea
                id="notes"
                rows={3}
                className={inputClass}
                value={form.notes}
                onChange={(e) =>
                  set('notes', e.target.value)
                }
                placeholder="Inspiration, references, special requests…"
              />
            </div>

            <p className="text-sm text-muted-foreground">
              You can also send inspiration photos directly on
              WhatsApp after you send this request.
            </p>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div>
            <h2 className="font-serif text-2xl">
              Review &amp; send
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              This is the message we&apos;ll open in WhatsApp.
              You can edit it there before sending.
            </p>

            <pre className="mt-5 whitespace-pre-wrap rounded-md border border-border bg-secondary/40 p-4 font-sans text-sm leading-relaxed text-foreground">
              {message}
            </pre>

            <Link
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                ctaVariants({
                  variant: 'whatsapp',
                  size: 'full',
                }),
                'mt-6',
              )}
            >
              <WhatsAppIcon className="size-5" />
              Send on WhatsApp
            </Link>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              No account needed. This opens WhatsApp with your
              details pre-filled.
            </p>
          </div>
        )}

        {/* Navigation */}
        {step < 3 && (
          <div className="mt-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() =>
                setStep((s) => Math.max(0, s - 1))
              }
              className={cn(
                ctaVariants({
                  variant: 'ghost',
                  size: 'default',
                }),
                step === 0 && 'invisible',
              )}
            >
              Back
            </button>

            <button
              type="button"
              disabled={!canContinue}
              onClick={() =>
                setStep((s) =>
                  Math.min(steps.length - 1, s + 1),
                )
              }
              className={ctaVariants({
                variant: 'primary',
                size: 'default',
              })}
            >
              Continue
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="mt-6">
            <button
              type="button"
              onClick={() => setStep(2)}
              className={ctaVariants({
                variant: 'ghost',
                size: 'default',
              })}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  )
}