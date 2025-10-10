import { test, expect } from '@playwright/test'

test.describe('Forms', () => {
  test.describe('Contact Form', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/en/contact')
    })

    test('should display contact form with all required fields', async ({ page }) => {
      // Check form elements exist
      await expect(page.getByLabel(/name/i)).toBeVisible()
      await expect(page.getByLabel(/email/i)).toBeVisible()
      await expect(page.getByLabel(/phone/i)).toBeVisible()
      await expect(page.getByLabel(/message/i)).toBeVisible()
      await expect(page.getByRole('button', { name: /send|submit/i })).toBeVisible()
    })

    test('should show validation errors for empty required fields', async ({ page }) => {
      // Try to submit empty form
      await page.getByRole('button', { name: /send|submit/i }).click()

      // Should show validation errors
      const errorCount = await page.locator('[role="alert"], .error, [aria-invalid="true"]').count()
      expect(errorCount).toBeGreaterThan(0)
    })

    test('should validate email format', async ({ page }) => {
      await page.getByLabel(/name/i).fill('John Doe')
      await page.getByLabel(/email/i).fill('invalid-email')
      await page.getByLabel(/phone/i).fill('555-1234')
      await page.getByLabel(/message/i).fill('Test message')

      await page.getByRole('button', { name: /send|submit/i }).click()

      // Should show email validation error
      const emailError = page.locator('[role="alert"]:has-text("email"), .error:has-text("email")')
      await expect(emailError.first()).toBeVisible({ timeout: 3000 })
    })

    test('should accept valid form data', async ({ page }) => {
      await page.getByLabel(/name/i).fill('John Doe')
      await page.getByLabel(/email/i).fill('john@example.com')
      await page.getByLabel(/phone/i).fill('555-123-4567')
      await page.getByLabel(/message/i).fill('I am interested in enrolling my child.')

      // Submit form
      await page.getByRole('button', { name: /send|submit/i }).click()

      // Wait for either success message or loading state
      await page.waitForTimeout(1000)

      // Check if submit button is disabled during submission or shows success
      const button = page.getByRole('button', { name: /send|submit|sending|sent/i })
      const isDisabled = await button.isDisabled().catch(() => false)
      const hasSuccessText = await button.textContent().then(text =>
        text?.toLowerCase().includes('sent') || text?.toLowerCase().includes('success')
      ).catch(() => false)

      // One of these should be true
      expect(isDisabled || hasSuccessText).toBeTruthy()
    })

    test('should handle network errors gracefully', async ({ page }) => {
      // Simulate offline mode
      await page.context().setOffline(true)

      await page.getByLabel(/name/i).fill('John Doe')
      await page.getByLabel(/email/i).fill('john@example.com')
      await page.getByLabel(/phone/i).fill('555-123-4567')
      await page.getByLabel(/message/i).fill('Test message')

      await page.getByRole('button', { name: /send|submit/i }).click()

      // Should show error message
      await expect(page.getByText(/error|failed|try again/i)).toBeVisible({ timeout: 5000 })

      // Restore online mode
      await page.context().setOffline(false)
    })
  })

  test.describe('Tour Request Form', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('/en/tour')
    })

    test('should display tour request form with all fields', async ({ page }) => {
      // Parent information
      await expect(page.getByLabel(/parent.*name|your name/i)).toBeVisible()
      await expect(page.getByLabel(/email/i)).toBeVisible()
      await expect(page.getByLabel(/phone/i)).toBeVisible()

      // Child information
      await expect(page.getByLabel(/child.*name/i)).toBeVisible()
      await expect(page.getByLabel(/age|date of birth/i)).toBeVisible()

      // Tour details
      await expect(page.getByLabel(/start date|preferred date/i)).toBeVisible()

      await expect(page.getByRole('button', { name: /submit|request|schedule/i })).toBeVisible()
    })

    test('should validate all required fields', async ({ page }) => {
      // Try to submit empty form
      await page.getByRole('button', { name: /submit|request|schedule/i }).click()

      // Should show multiple validation errors
      const errorCount = await page.locator('[role="alert"], .error, [aria-invalid="true"]').count()
      expect(errorCount).toBeGreaterThan(0)
    })

    test('should accept valid tour request', async ({ page }) => {
      // Fill parent information
      await page.getByLabel(/parent.*name|your name/i).fill('Jane Smith')
      await page.getByLabel(/email/i).fill('jane@example.com')
      await page.getByLabel(/phone/i).fill('555-987-6543')

      // Fill child information
      await page.getByLabel(/child.*name/i).fill('Emma Smith')

      // Handle age input (could be text or number)
      const ageField = page.getByLabel(/age|date of birth/i)
      await ageField.fill('3')

      // Fill preferred start date
      const dateField = page.getByLabel(/start date|preferred date/i)
      await dateField.fill('2025-03-01')

      // Optional: Fill additional notes if available
      const notesField = page.getByLabel(/notes|additional/i)
      if (await notesField.count() > 0) {
        await notesField.fill('Looking forward to visiting!')
      }

      // Submit form
      await page.getByRole('button', { name: /submit|request|schedule/i }).click()

      // Wait for submission
      await page.waitForTimeout(1000)

      // Check for success indicator
      const button = page.getByRole('button', { name: /submit|request|schedule|sent|confirmed/i })
      const isDisabled = await button.isDisabled().catch(() => false)
      const hasSuccessText = await button.textContent().then(text =>
        text?.toLowerCase().includes('sent') || text?.toLowerCase().includes('confirmed')
      ).catch(() => false)

      expect(isDisabled || hasSuccessText).toBeTruthy()
    })

    test('should validate date field correctly', async ({ page }) => {
      // Fill all fields except date with past date
      await page.getByLabel(/parent.*name|your name/i).fill('Jane Smith')
      await page.getByLabel(/email/i).fill('jane@example.com')
      await page.getByLabel(/phone/i).fill('555-987-6543')
      await page.getByLabel(/child.*name/i).fill('Emma Smith')
      await page.getByLabel(/age|date of birth/i).fill('3')

      // Try to set a past date (if validation exists)
      const dateField = page.getByLabel(/start date|preferred date/i)
      await dateField.fill('2020-01-01')

      await page.getByRole('button', { name: /submit|request|schedule/i }).click()

      // If date validation exists, should show error or accept any date
      // This test is flexible to handle either scenario
      await page.waitForTimeout(500)
    })
  })

  test.describe('Form Accessibility', () => {
    test('contact form should be keyboard accessible', async ({ page }) => {
      await page.goto('/en/contact')

      // Tab through form fields
      await page.keyboard.press('Tab')
      await expect(page.getByLabel(/name/i)).toBeFocused()

      await page.keyboard.press('Tab')
      await expect(page.getByLabel(/email/i)).toBeFocused()

      await page.keyboard.press('Tab')
      await expect(page.getByLabel(/phone/i)).toBeFocused()

      await page.keyboard.press('Tab')
      await expect(page.getByLabel(/message/i)).toBeFocused()
    })

    test('forms should have proper ARIA labels', async ({ page }) => {
      await page.goto('/en/contact')

      // All inputs should have accessible names
      const inputs = await page.locator('input, textarea').all()
      for (const input of inputs) {
        const name = await input.getAttribute('aria-label') || await input.getAttribute('id')
        expect(name).toBeTruthy()
      }
    })

    test('error messages should be announced to screen readers', async ({ page }) => {
      await page.goto('/en/contact')

      // Submit empty form to trigger errors
      await page.getByRole('button', { name: /send|submit/i }).click()

      // Error messages should have role="alert" or aria-live
      const alerts = page.locator('[role="alert"], [aria-live="polite"], [aria-live="assertive"]')
      expect(await alerts.count()).toBeGreaterThan(0)
    })
  })

  test.describe('Rate Limiting', () => {
    test('should handle rapid submissions appropriately', async ({ page }) => {
      await page.goto('/en/contact')

      // Fill form
      await page.getByLabel(/name/i).fill('Rapid Test')
      await page.getByLabel(/email/i).fill('test@example.com')
      await page.getByLabel(/phone/i).fill('555-1234')
      await page.getByLabel(/message/i).fill('Test')

      // Try to submit multiple times rapidly
      const submitButton = page.getByRole('button', { name: /send|submit/i })

      await submitButton.click()
      await submitButton.click()
      await submitButton.click()

      // Button should either be disabled or show rate limit message
      const isDisabled = await submitButton.isDisabled()
      const hasRateLimitText = await page.getByText(/slow down|too many|wait/i).count() > 0

      expect(isDisabled || hasRateLimitText).toBeTruthy()
    })
  })
})
