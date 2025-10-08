/**
 * Skip Link - Accessibility feature that allows keyboard users
 * to skip repetitive navigation and jump directly to main content
 *
 * Follows WCAG 2.1 success criterion 2.4.1 (Bypass Blocks)
 */

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-daycare-blue focus:text-white focus:rounded-lg focus:shadow-lg focus:font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-daycare-blue transition-all"
    >
      Skip to main content
    </a>
  )
}
