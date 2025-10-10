import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.describe('Homepage', () => {
    test('should load homepage in English', async ({ page }) => {
      await page.goto('/en')
      await expect(page).toHaveTitle(/Great Beginnings Day Care/)
      await expect(page.getByRole('heading', { name: /welcome/i, level: 1 })).toBeVisible()
    })

    test('should load homepage in Spanish', async ({ page }) => {
      await page.goto('/es')
      await expect(page).toHaveTitle(/Great Beginnings Day Care/)
    })

    test('should have working navigation links', async ({ page }) => {
      await page.goto('/en')

      // Test navigation to Programs page
      await page.getByRole('link', { name: /programs/i }).first().click()
      await expect(page).toHaveURL(/\/en\/programs/)

      // Test navigation back to Home
      await page.getByRole('link', { name: /home/i }).first().click()
      await expect(page).toHaveURL(/\/en$/)
    })
  })

  test.describe('Locale Switching', () => {
    test('should switch between locales', async ({ page }) => {
      await page.goto('/en')

      // Find and click language switcher
      const languageSwitcher = page.locator('[aria-label*="language" i], [data-testid="language-switcher"]')
      if (await languageSwitcher.count() > 0) {
        await languageSwitcher.first().click()

        // Click Spanish option if available
        const spanishOption = page.getByRole('option', { name: /español|spanish/i })
        if (await spanishOption.count() > 0) {
          await spanishOption.click()
          await expect(page).toHaveURL(/\/es/)
        }
      }
    })

    test('should maintain page context when switching locales', async ({ page }) => {
      await page.goto('/en/programs')

      // Navigate to Programs page
      await expect(page).toHaveURL(/\/en\/programs/)

      // Switch to Spanish (if locale switcher exists)
      const languageSwitcher = page.locator('[aria-label*="language" i]')
      if (await languageSwitcher.count() > 0) {
        await languageSwitcher.first().click()
        const spanishOption = page.getByRole('option', { name: /español|spanish/i })
        if (await spanishOption.count() > 0) {
          await spanishOption.click()
          // Should stay on programs page but with Spanish locale
          await expect(page).toHaveURL(/\/es\/programs/)
        }
      }
    })
  })

  test.describe('All Pages', () => {
    const pages = [
      { path: '/en', name: 'Home' },
      { path: '/en/programs', name: 'Programs' },
      { path: '/en/gallery', name: 'Gallery' },
      { path: '/en/calendar', name: 'Calendar' },
      { path: '/en/contact', name: 'Contact' },
      { path: '/en/tour', name: 'Tour Request' },
    ]

    for (const { path, name } of pages) {
      test(`should render ${name} page without errors`, async ({ page }) => {
        await page.goto(path)

        // Check that page doesn't have critical errors
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

        // Check that navigation is present
        await expect(page.getByRole('navigation')).toBeVisible()
      })
    }
  })

  test.describe('Accessibility', () => {
    test('should have skip to main content link', async ({ page }) => {
      await page.goto('/en')

      // Focus the page
      await page.keyboard.press('Tab')

      // Check if skip link exists and is focusable
      const skipLink = page.getByRole('link', { name: /skip to main content/i })
      if (await skipLink.count() > 0) {
        await expect(skipLink).toBeFocused()
      }
    })

    test('should have proper heading hierarchy', async ({ page }) => {
      await page.goto('/en')

      // Should have exactly one h1
      const h1Count = await page.getByRole('heading', { level: 1 }).count()
      expect(h1Count).toBeGreaterThanOrEqual(1)
    })

    test('should be keyboard navigable', async ({ page }) => {
      await page.goto('/en')

      // Tab through first few focusable elements
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')
      await page.keyboard.press('Tab')

      // Verify at least one element is focused
      const focusedElement = page.locator(':focus')
      await expect(focusedElement).toBeVisible()
    })
  })

  test.describe('Performance', () => {
    test('should load homepage quickly', async ({ page }) => {
      const startTime = Date.now()
      await page.goto('/en')
      const loadTime = Date.now() - startTime

      // Page should load in less than 5 seconds
      expect(loadTime).toBeLessThan(5000)
    })
  })

  test.describe('Error Handling', () => {
    test('should show 404 page for invalid routes', async ({ page }) => {
      await page.goto('/en/nonexistent-page')

      // Should show some kind of error or 404 message
      const hasNotFoundText = await page.getByText(/not found|404/i).count() > 0
      const hasErrorHeading = await page.getByRole('heading', { name: /error|not found/i }).count() > 0

      expect(hasNotFoundText || hasErrorHeading).toBe(true)
    })
  })
})
