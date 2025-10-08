'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981]">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-white/80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-white mb-4">
          Something went wrong!
        </h2>
        <p className="text-white/90 mb-8 leading-relaxed">
          We apologize for the inconvenience. An unexpected error occurred while loading this page.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-white text-daycare-blue hover:bg-white/90 shadow-lg"
          >
            Try again
          </Button>
          <Button
            asChild
            className="bg-daycare-blue hover:bg-daycare-blue/90 text-white shadow-lg"
          >
            <Link href="/">Go home</Link>
          </Button>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-white/80 text-sm hover:text-white">
              Error details (development only)
            </summary>
            <pre className="mt-4 p-4 bg-black/20 rounded-lg text-white/80 text-xs overflow-auto max-h-40">
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}
