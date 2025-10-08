'use client'

import { useFormStatus } from 'react-dom'
import { useTransition } from 'react'
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
      className="w-full bg-daycare-blue hover:bg-daycare-blue/90 transition-all duration-300 hover:shadow-glow"
    >
      {pending ? (
        <span className="flex items-center gap-2">
          <Spinner size="sm" />
          Sending...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Send Message
        </span>
      )}
    </Button>
  )
}

export function ContactForm() {
  const [isPending, startTransition] = useTransition()

  async function handleSubmit(formData: FormData) {
    startTransition(() => {
      // Using react-hot-toast 2.6.0 promise-based toast with React 19 useTransition
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
    })
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-foreground">
          Phone <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-foreground">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your childcare needs..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <SubmitButton />
    </form>
  )
}
