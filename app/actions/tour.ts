'use server'

import { revalidatePath } from 'next/cache'

export async function scheduleTour(formData: FormData) {
  // Validate required fields
  const parentName = formData.get('parentName')?.toString()
  const childAge = formData.get('childAge')?.toString()
  const preferredDate = formData.get('preferredDate')?.toString()
  const phone = formData.get('phone')?.toString()
  const email = formData.get('email')?.toString()

  if (!parentName || !childAge || !preferredDate || !phone || !email) {
    return { error: 'All fields are required' }
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
