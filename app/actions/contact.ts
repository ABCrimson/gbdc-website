'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { formRateLimit, getClientId, getTimeRemaining } from '@/lib/rate-limit'

export async function sendContactForm(formData: FormData) {
  // Check rate limit
  const headersList = await headers()
  const clientId = getClientId(headersList)
  const rateLimitResult = formRateLimit.check(clientId)

  if (!rateLimitResult.success) {
    return {
      error: `Too many requests. Please try again in ${getTimeRemaining(rateLimitResult.reset)}.`
    }
  }

  // Validate required fields
  const email = formData.get('email')?.toString()
  const message = formData.get('message')?.toString()
  const name = formData.get('name')?.toString()

  if (!email || !message || !name) {
    return { error: 'Required fields missing' }
  }

  try {
    // Send email via EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          phone: formData.get('phone')?.toString() || 'Not provided',
          message: message,
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { error: 'Failed to send message. Please try again.' }
  }
}
