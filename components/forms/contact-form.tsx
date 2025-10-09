'use client'

import { useFormStatus } from 'react-dom'
import { useActionState } from 'react'
import toast from 'react-hot-toast'
import { sendContactForm } from '@/app/actions/contact'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { FormStatus } from '@/components/ui/form-status'

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
  // React 19 useActionState + toast.promise() for better UX
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      try {
        // Wrap Server Action to convert result object pattern to rejecting promise
        await toast.promise(
          (async () => {
            const res = await sendContactForm(formData)
            if (res.error) throw new Error(res.error)
            return res
          })(),
          {
            loading: 'Sending your message...',
            success: "Thank you! We'll be in touch soon.",
            error: (err) => err.message || 'Failed to send message.',
          }
        )

        return { success: true, error: undefined }
      } catch (err: any) {
        return { error: err.message, success: false }
      }
    },
    { success: false, error: undefined }
  )

  return (
    <form action={formAction} className="space-y-6">
      {state.error && <FormStatus message={state.error} type="error" />}
      {state.success && <FormStatus message="Message sent successfully!" type="success" />}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-semibold text-white dark:text-white">
          Your Name <span className="text-red-400">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="John Doe"
          aria-required="true"
          aria-invalid="false"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 user-valid:border-green-500 user-valid:focus:ring-green-500/20 user-invalid:border-red-500 user-invalid:focus:ring-red-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-white dark:text-white">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          aria-required="true"
          aria-invalid="false"
          aria-describedby="email-format"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 user-valid:border-green-500 user-valid:focus:ring-green-500/20 user-invalid:border-red-500 user-invalid:focus:ring-red-500/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
        <p id="email-format" className="sr-only">Please enter a valid email address</p>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-semibold text-white dark:text-white">
          Phone <span className="text-white/70 text-xs">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 123-4567"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-white dark:text-white">
          How can we help? <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your childcare needs..."
          rows={5}
          aria-required="true"
          aria-invalid="false"
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-daycare-blue focus:ring-2 focus:ring-daycare-blue/20 user-valid:border-green-500 user-valid:focus:ring-green-500/20 user-invalid:border-red-500 user-invalid:focus:ring-red-500/20 transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isPending}
        />
      </div>

      <SubmitButton />
    </form>
  )
}
