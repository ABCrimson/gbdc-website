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
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      type="submit"
      disabled={pending || isPending}
      className="w-full bg-daycare-green hover:bg-daycare-green/90 transition-transform hover:scale-105"
    >
      {(pending || isPending) ? <Spinner size="sm" /> : 'Schedule Tour'}
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
  async function handleSubmit(formData: FormData) {
    // Using react-hot-toast 2.6.0 promise-based toast
    const promise = scheduleTour(formData)

    toast.promise(
      promise,
      {
        loading: 'Scheduling your tour...',
        success: (data) => {
          if (data.error) throw new Error(data.error)
          return data.message || 'Tour scheduled successfully!'
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
  }

  // Generate minimum date (tomorrow) using date-fns 4.1.0
  const minDate = format(addDays(new Date(), 1), 'yyyy-MM-dd')

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="parentName" className="block text-sm font-medium mb-1">
          Parent/Guardian Name *
        </label>
        <input
          id="parentName"
          name="parentName"
          type="text"
          required
          placeholder="Jane Smith"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone Number *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="(555) 123-4567"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="childAge" className="block text-sm font-medium mb-1">
          Child's Age Range *
        </label>
        <select
          id="childAge"
          name="childAge"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        >
          <option value="">Select age range...</option>
          {ageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-medium mb-1">
          Preferred Tour Date *
        </label>
        <input
          id="preferredDate"
          name="preferredDate"
          type="date"
          required
          min={minDate}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-1">
          Additional Notes (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Any specific questions or requirements..."
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-green focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <SubmitButton />
    </form>
  )
}
