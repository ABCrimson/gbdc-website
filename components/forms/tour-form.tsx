'use client'

import { useFormStatus } from 'react-dom'
import { useTransition } from 'react'
import toast from 'react-hot-toast'
import { format, addDays } from 'date-fns'
import { scheduleTour } from '@/app/actions/tour'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-daycare-green hover:bg-daycare-green/90 transition-all duration-300 hover:shadow-glow active:scale-95"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <Spinner size="sm" />
          Scheduling...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Schedule Tour
        </span>
      )}
    </Button>
  )
}

// Age ranges from 6 weeks to 12 years
const ageOptions = [
  { value: '6-weeks-6-months', label: '6 weeks - 6 months' },
  { value: '6-12-months', label: '6 - 12 months' },
  { value: '12-18-months', label: '12 - 18 months' },
  { value: '18-months-2-years', label: '18 months - 2 years' },
  { value: '2-3-years', label: '2 - 3 years' },
  { value: '3-4-years', label: '3 - 4 years' },
  { value: '4-5-years', label: '4 - 5 years' },
  { value: '5-8-years', label: '5 - 8 years (School Age)' },
  { value: '8-12-years', label: '8 - 12 years (School Age)' },
]

export function TourForm() {
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    startTransition(() => {
      // Using react-hot-toast 2.6.0 promise-based toast with React 19 useTransition
      const promise = scheduleTour(formData)

      toast.promise(
        promise,
        {
          loading: 'Scheduling your tour...',
          success: (data) => {
            if (data.error) throw new Error(data.error)
            return data.message || 'Tour scheduled successfully! We\'ll contact you soon.'
          },
          error: (err) => err.message || 'Failed to schedule tour. Please try again.'
        }
      )

      // Reset form after successful submission
      promise.then((result) => {
        if (result.success) {
          const form = document.querySelector('form') as HTMLFormElement
          form?.reset()
        }
      })
    })
  }

  // Generate minimum date (tomorrow) using date-fns 4.1.0
  const minDate = format(addDays(new Date(), 1), 'yyyy-MM-dd')

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="parentName" className="block text-sm font-semibold text-foreground">
          Parent/Guardian Name <span className="text-red-500">*</span>
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          required
          placeholder="Jane Smith"
          className="input"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="input"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
          className="input"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="childAge" className="block text-sm font-semibold text-foreground">
          Child's Age Range <span className="text-red-500">*</span>
        </label>
        <select
          id="childAge"
          name="childAge"
          required
          className="select"
          disabled={isPending}
        >
          <option value="">Select age range...</option>
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="preferredDate" className="block text-sm font-semibold text-foreground">
          Preferred Tour Date <span className="text-red-500">*</span>
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          required
          min={minDate}
          className="input"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="block text-sm font-semibold text-foreground">
          Additional Notes <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Any specific questions or requirements..."
          rows={4}
          className="textarea"
          disabled={isPending}
        />
      </div>

      <SubmitButton />
    </form>
  )
}
