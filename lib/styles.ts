/**
 * Shared style utilities and common class patterns
 * Reduces duplication and ensures consistency across the application
 */

/**
 * Primary gradient used throughout the app (blue-teal-green)
 * Used for hero sections, loading states, and background sections
 */
export const gradientBlueTeal = 'bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981] dark:from-[#0B7BA7] dark:via-[#1BA397] dark:to-[#10B981]'

/**
 * Simplified gradient (without dark mode variant)
 * Use for components that don't need dark mode support
 */
export const gradientBlueTealSimple = 'bg-gradient-to-br from-[#0B7BA7] via-[#1BA397] to-[#10B981]'

/**
 * Common decorative background elements with gradient orbs
 * CSS classes for creating gradient orb decorations
 */
export const gradientOrbsOverlay = {
  orb1: 'absolute top-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float',
  orb2: 'absolute bottom-0 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-slow'
}

/**
 * Grid pattern overlay for backgrounds
 */
export const gridPattern = 'absolute inset-0 opacity-[0.03]'
export const gridPatternStyle = {
  backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
  backgroundSize: '50px 50px'
}

/**
 * Loading spinner component (centered)
 */
export const loadingSpinner = 'inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-white'

/**
 * Glassmorphism card effect
 */
export const glassmorphism = 'backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-2 border-white/60 dark:border-gray-700/60'
