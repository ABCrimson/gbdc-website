import emailjs from '@emailjs/browser'

/**
 * Initialize EmailJS with public key
 * Call this once when the app starts
 */
export function initEmailJS() {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!publicKey) {
    console.warn('EmailJS public key is not configured')
    return false
  }

  emailjs.init(publicKey)
  return true
}

/**
 * Send email using EmailJS 4.4.1
 * @param serviceId - EmailJS service ID
 * @param templateId - EmailJS template ID
 * @param templateParams - Email parameters
 * @returns Promise resolving to success/error response
 */
export async function sendEmail(
  serviceId: string,
  templateId: string,
  templateParams: Record<string, unknown>
) {
  try {
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      throw new Error('EmailJS is not configured. Please add NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to your environment variables.')
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )

    return {
      success: true,
      status: response.status,
      text: response.text
    }
  } catch (error) {
    console.error('EmailJS error:', error)

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    }
  }
}

/**
 * Send contact form email
 */
export async function sendContactEmail(params: {
  from_name: string
  from_email: string
  phone?: string
  message: string
}) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS contact configuration is missing')
  }

  return sendEmail(serviceId, templateId, params)
}

/**
 * Send tour booking email
 */
export async function sendTourEmail(params: {
  parent_name: string
  email: string
  phone: string
  child_age: string
  preferred_date: string
  notes?: string
}) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TOUR_TEMPLATE_ID

  if (!serviceId || !templateId) {
    throw new Error('EmailJS tour configuration is missing')
  }

  return sendEmail(serviceId, templateId, params)
}
