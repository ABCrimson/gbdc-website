/**
 * Next.js Instrumentation
 * Runs once when the server starts (before any routes are initialized)
 * Perfect for environment validation, monitoring setup, etc.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation
 */

export async function register() {
  // Only run on server-side
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { validateEnv } = await import('./lib/env')

    try {
      validateEnv()
      console.log('✅ Server environment validation successful')
    } catch (error) {
      console.error('❌ Server environment validation failed')
      // In production, we want to fail fast
      if (process.env.NODE_ENV === 'production') {
        throw error
      }
    }
  }

  // Edge runtime validation
  if (process.env.NEXT_RUNTIME === 'edge') {
    console.log('⚡ Edge runtime detected - skipping full validation')
  }
}
