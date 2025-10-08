'use client'

import { useFormStatus } from 'react-dom'
import toast from 'react-hot-toast'
import { sendContactForm } from '@/app/actions/contact'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-daycare-blue hover:bg-daycare-blue/90"
    >
      {pending ? <Spinner size="sm" /> : 'Send Message'}
    </Button>
  )
}

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    // Using react-hot-toast 2.6.0 promise-based toast
    toast.promise(
      sendContactForm(formData),
      {
        loading: 'Sending your message...',
        success: (data) => {
          if (data.error) throw new Error(data.error)
          return "Thank you! We'll be in touch soon."
        },
        error: (err) => err.message || 'Something went wrong. Please try again.'
      }
    )
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-blue focus:border-transparent dark:bg-gray-800"
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
          placeholder="john@example.com"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-blue focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone (optional)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-blue focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your childcare needs..."
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-daycare-blue focus:border-transparent dark:bg-gray-800"
        />
      </div>

      <SubmitButton />
    </form>
  )
}
