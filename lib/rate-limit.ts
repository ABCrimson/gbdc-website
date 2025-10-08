/**
 * Simple in-memory rate limiter for form submissions
 * Prevents abuse by limiting requests per IP address
 *
 * For production, consider using:
 * - @upstash/ratelimit with Redis
 * - Vercel Edge Config
 * - Database-backed rate limiting
 */

interface RateLimitEntry {
  count: number
  resetTime: number
}

class RateLimiter {
  private requests: Map<string, RateLimitEntry> = new Map()
  private readonly maxRequests: number
  private readonly windowMs: number
  private readonly cleanupIntervalMs: number
  private cleanupTimer: NodeJS.Timeout | null = null

  constructor(options: {
    maxRequests?: number
    windowMs?: number
  } = {}) {
    this.maxRequests = options.maxRequests ?? 5 // 5 requests
    this.windowMs = options.windowMs ?? 60 * 1000 // per minute
    this.cleanupIntervalMs = 5 * 60 * 1000 // cleanup every 5 minutes

    // Start cleanup timer
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
      this.startCleanup()
    }
  }

  private startCleanup() {
    this.cleanupTimer = setInterval(() => {
      const now = Date.now()
      for (const [key, entry] of this.requests.entries()) {
        if (now > entry.resetTime) {
          this.requests.delete(key)
        }
      }
    }, this.cleanupIntervalMs)
  }

  check(identifier: string): { success: boolean; limit: number; remaining: number; reset: number } {
    const now = Date.now()
    const entry = this.requests.get(identifier)

    // No previous requests or window expired
    if (!entry || now > entry.resetTime) {
      const resetTime = now + this.windowMs
      this.requests.set(identifier, { count: 1, resetTime })

      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - 1,
        reset: resetTime,
      }
    }

    // Within rate limit window
    if (entry.count < this.maxRequests) {
      entry.count++

      return {
        success: true,
        limit: this.maxRequests,
        remaining: this.maxRequests - entry.count,
        reset: entry.resetTime,
      }
    }

    // Rate limit exceeded
    return {
      success: false,
      limit: this.maxRequests,
      remaining: 0,
      reset: entry.resetTime,
    }
  }

  reset(identifier: string) {
    this.requests.delete(identifier)
  }

  destroy() {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer)
      this.cleanupTimer = null
    }
    this.requests.clear()
  }
}

// Singleton instances for different rate limit types
export const formRateLimit = new RateLimiter({
  maxRequests: 3, // 3 form submissions
  windowMs: 60 * 1000, // per minute
})

export const strictRateLimit = new RateLimiter({
  maxRequests: 10, // 10 requests
  windowMs: 60 * 1000, // per minute
})

/**
 * Get client identifier (IP address) from request headers
 */
export function getClientId(headers: Headers): string {
  // Try to get real IP from various headers (Vercel, Cloudflare, etc.)
  const forwardedFor = headers.get('x-forwarded-for')
  const realIp = headers.get('x-real-ip')
  const vercelIp = headers.get('x-vercel-forwarded-for')

  if (vercelIp) return vercelIp.split(',')[0].trim()
  if (forwardedFor) return forwardedFor.split(',')[0].trim()
  if (realIp) return realIp

  // Fallback to a default identifier (not ideal but better than nothing)
  return 'unknown'
}

/**
 * Format time remaining until rate limit reset
 */
export function getTimeRemaining(resetTime: number): string {
  const now = Date.now()
  const remaining = Math.max(0, resetTime - now)
  const seconds = Math.ceil(remaining / 1000)

  if (seconds < 60) {
    return `${seconds} second${seconds !== 1 ? 's' : ''}`
  }

  const minutes = Math.ceil(seconds / 60)
  return `${minutes} minute${minutes !== 1 ? 's' : ''}`
}
