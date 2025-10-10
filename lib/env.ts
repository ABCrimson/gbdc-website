import { z } from 'zod'

const envSchema = z.object({
  // Google Maps Configuration
  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z
    .string()
    .min(1, 'Google Maps API key is required')
    .describe('Get your API key from: https://console.cloud.google.com/apis/credentials'),

  NEXT_PUBLIC_GOOGLE_MAP_ID: z
    .string()
    .optional()
    .describe('Optional Map ID for Advanced Markers: https://console.cloud.google.com/google/maps-apis/studio/maps'),

  NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID: z
    .string()
    .min(1, 'Google Maps Place ID is required for photo gallery')
    .describe('Get your Place ID from: https://developers.google.com/maps/documentation/places/web-service/place-id'),

  // EmailJS Configuration
  NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z
    .string()
    .min(1, 'EmailJS public key is required')
    .describe('Sign up at: https://www.emailjs.com/'),

  NEXT_PUBLIC_EMAILJS_SERVICE_ID: z
    .string()
    .min(1, 'EmailJS service ID is required'),

  NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID: z
    .string()
    .min(1, 'EmailJS contact template ID is required'),

  NEXT_PUBLIC_EMAILJS_TOUR_TEMPLATE_ID: z
    .string()
    .min(1, 'EmailJS tour template ID is required'),

  // Node environment (auto-provided by Node.js)
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
})

export type Env = z.infer<typeof envSchema>

/**
 * Validates environment variables and returns typed env object
 * Throws an error if validation fails with detailed error messages
 */
export function validateEnv(): Env {
  const parsed = envSchema.safeParse(process.env)

  if (!parsed.success) {
    console.error('❌ Environment validation failed:')
    console.error(JSON.stringify(parsed.error.format(), null, 2))

    const missingVars = parsed.error.issues
      .filter(issue => issue.message.includes('required'))
      .map(issue => issue.path.join('.'))

    if (missingVars.length > 0) {
      console.error('\n📝 Missing required environment variables:')
      missingVars.forEach(varName => {
        console.error(`   - ${varName}`)
      })
      console.error('\n💡 Copy .env.example to .env.local and fill in the values')
    }

    throw new Error('Invalid environment variables')
  }

  return parsed.data
}

/**
 * Client-side safe environment variables
 * Only includes NEXT_PUBLIC_* variables
 */
export function getClientEnv() {
  return {
    GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    GOOGLE_MAP_ID: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
    GOOGLE_MAPS_PLACE_ID: process.env.NEXT_PUBLIC_GOOGLE_MAPS_PLACE_ID,
    EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    EMAILJS_CONTACT_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
    EMAILJS_TOUR_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TOUR_TEMPLATE_ID,
  }
}

// Validate on module load in development
if (process.env.NODE_ENV === 'development') {
  try {
    validateEnv()
    console.log('✅ Environment variables validated successfully')
  } catch {
    // Error already logged in validateEnv()
    // Continue execution in development to allow partial setup
  }
}

// Export validated env (will throw in production if invalid)
export const env = process.env.NODE_ENV === 'production'
  ? validateEnv()
  : (process.env as unknown as Env)
