'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-600 to-teal-500">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">
              Critical Error
            </h2>
            <p className="text-white/90 mb-8">
              A critical error occurred. Please refresh the page or contact support if the problem persists.
            </p>
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
