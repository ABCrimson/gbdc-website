'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { formRateLimit, getClientId, getTimeRemaining } from '@/lib/rate-limit'
import { contactFormSchema } from '@/lib/validations/contact'

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

  // Extract form data
  const data = {
    name: formData.get('name')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    message: formData.get('message')?.toString() || '',
  }

  // Validate with Zod
  const result = contactFormSchema.safeParse(data)

  if (!result.success) {
    const firstError = result.error.issues[0]
    return { error: firstError.message }
  }

  const { name, email, phone, message } = result.data

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
          phone: phone,
          message: message,
        }
      })
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('EmailJS API error:', response.status, errorData)
      throw new Error(`EmailJS error (${response.status}): ${errorData}`)
    }

    revalidatePath('/')
    return { success: true }
  } catch (error) {
    console.error('Contact form error:', error)
    return { error: error instanceof Error ? error.message : 'Failed to send message. Please try again.' }
  }
}
