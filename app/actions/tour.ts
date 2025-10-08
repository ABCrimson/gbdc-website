'use server'

import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { parseISO, isValid, isFuture, addHours, isWeekend, format } from 'date-fns'
import { formRateLimit, getClientId, getTimeRemaining } from '@/lib/rate-limit'

export async function scheduleTour(formData: FormData) {
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
  const parentName = formData.get('parentName')?.toString()
  const childAge = formData.get('childAge')?.toString()
  const preferredDate = formData.get('preferredDate')?.toString()
  const phone = formData.get('phone')?.toString()
  const email = formData.get('email')?.toString()

  if (!parentName || !childAge || !preferredDate || !phone || !email) {
    return { error: 'All fields are required' }
  }

  // Validate date format and value
  const selectedDate = parseISO(preferredDate)

  if (!isValid(selectedDate)) {
    return { error: 'Invalid date format. Please select a valid date.' }
  }

  // Check if date is in the future
  if (!isFuture(selectedDate)) {
    return { error: 'Please select a future date for your tour.' }
  }

  // Check if date is at least 24 hours in advance
  const minDate = addHours(new Date(), 24)
  if (selectedDate < minDate) {
    return {
      error: 'Tours must be scheduled at least 24 hours in advance. Please select a later date.'
    }
  }

  // Check if date is a weekend (tours only available Monday-Friday)
  if (isWeekend(selectedDate)) {
    return {
      error: 'Tours are only available Monday through Friday during business hours. Please select a weekday.'
    }
  }

  try {
    // Send email notification via EmailJS API
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TOUR_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
          parent_name: parentName,
          child_age: childAge,
          preferred_date: preferredDate,
          phone: phone,
          email: email,
          notes: formData.get('notes')?.toString() || 'None',
        }
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send tour request')
    }

    revalidatePath('/tour')
    return {
      success: true,
      message: `Tour scheduled for ${preferredDate}. We'll contact you at ${phone} to confirm.`
    }
  } catch (error) {
    console.error('Tour scheduling error:', error)
    return { error: 'Failed to schedule tour. Please try again or call us directly.' }
  }
}
