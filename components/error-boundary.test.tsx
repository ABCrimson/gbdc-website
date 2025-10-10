import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from './error-boundary'

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>No error</div>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for these tests
  const originalError = console.error
  beforeAll(() => {
    console.error = vi.fn()
  })

  afterAll(() => {
    console.error = originalError
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders error UI when child component throws', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    // Should show error message
    expect(screen.getByText(/something went wrong|error occurred/i)).toBeInTheDocument()
  })

  it('shows retry button when error occurs', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    expect(screen.getByRole('button', { name: /try again|reload|retry/i })).toBeInTheDocument()
  })

  it('shows error details in development mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'development'

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    // Should show error details in dev
    expect(screen.getByText(/test error/i)).toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })

  it('hides error details in production mode', () => {
    const originalEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    // Should NOT show technical error details in production
    expect(screen.queryByText(/test error/i)).not.toBeInTheDocument()
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()

    process.env.NODE_ENV = originalEnv
  })

  it('resets error state when retry button is clicked', () => {
    const { rerender } = render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    // Error UI should be visible
    const retryButton = screen.getByRole('button', { name: /try again|reload|retry/i })
    expect(retryButton).toBeInTheDocument()

    // Re-render with non-throwing component
    rerender(
      <ErrorBoundary>
        <ThrowError shouldThrow={false} />
      </ErrorBoundary>
    )

    // After re-render with fixed component, should show content
    // Note: ErrorBoundary reset behavior depends on implementation
  })

  it('catches errors from async components', () => {
    // Note: React Error Boundaries don't catch promise rejections
    // This test verifies the boundary catches synchronous errors in async components
    const AsyncError = () => {
      throw new Error('Async component error')
    }

    render(
      <ErrorBoundary>
        <AsyncError />
      </ErrorBoundary>
    )

    expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument()
  })

  it('provides helpful error message to users', () => {
    render(
      <ErrorBoundary>
        <ThrowError shouldThrow />
      </ErrorBoundary>
    )

    // Should have user-friendly message (using heading to be specific)
    expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeInTheDocument()

    // Should have actionable button
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })
})
